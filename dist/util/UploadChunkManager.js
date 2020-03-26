"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function UploadChunkManager(User) {
  var _this = this;

  this.User = User;
  this.accessToken = '';
  this.createChunkURL = '';
  this.sessionId = '';
  this.uploadChunkURL = '';
  this.File = {};
  this.debugMode = false;
  this.BlobFile = {};
  this.abort = false;
  this.allowResend = false;

  this.cb = function () {};

  this.onError = function () {};

  this.config = {};
  this.chunks = 20;
  this.chunkSize = 0;
  this.buffers = [];
  this.uploading = [];
  this.buffersSize = 0;
  this.buffersTransferedBytes = 0;
  this.uploadPercent = 0;
  this.bufferCount = 0;
  this.loading = false;
  this.abortLimit = 5;
  this.error = {};
  console.log('new UploadChunkManager ', User);

  var setup = function setup() {
    _this.chunkSize = 20;
    _this.buffers = [];
    _this.bufferCount = 0;
    log('setup function called by', _this.User.firstName);
  };

  var log = function log(_log) {
    if (_this.setDebugMode) {
      console.log(_log);
    }
  };

  var resend = function resend() {
    log('resend function called by', _this.User.firstName);
    resetUpload();
  };

  var resetUpload = function resetUpload() {
    _this.sessionId = '';
    _this.BlobFile = {};
    _this.abort = false;
    _this.chunkSize = 0;
    _this.buffers = [];
    _this.buffersSize = 0;
    _this.buffersTransferedBytes = 0;
    _this.bufferCount = 0;
    _this.uploading = [];
    setFile(_this.File);
    getSesisonId();
  };

  var getIsLoading = function getIsLoading() {
    log('this.uploading', _this.uploading);
    return _this.uploading.length;
  };

  var getAllowResend = function getAllowResend() {
    _this.allowResend = _this.uploading.length === 0 && _this.abort;
    return _this.allowResend;
  };

  var setFile = function setFile(File) {
    log('setFile function called by', _this.User.firstName, 'with File =>', File);
    _this.File = File;
    _this.BlobFile = new Blob([_this.File], {
      type: _this.File.type
    });
    _this.chunkSize = Math.ceil(_this.File.size / _this.chunks);

    for (var index = 0; index < _this.chunks; index++) {
      if (index < _this.chunks - 1) {
        _this.buffers.push({
          blob: _this.BlobFile.slice(_this.bufferCount, _this.chunkSize * (index + 1)),
          uploading: false,
          error: false,
          resending: false,
          countError: 0
        });
      } else {
        _this.buffers.push({
          blob: _this.BlobFile.slice(_this.bufferCount, _this.File.size),
          uploading: false,
          error: false,
          resending: false,
          countError: 0
        });
      }

      _this.buffersSize += _this.buffers[index].blob.size;
      _this.bufferCount += _this.chunkSize;
    }

    log('Processed File', _this.buffers);
  };

  var setUser = function setUser(User) {
    _this.User = User;
    log('setUser function called by', User.firstName);
  };

  var getCurrentSesisonId = function getCurrentSesisonId() {
    return _this.sessionId;
  };

  var getSesisonId = function getSesisonId() {
    _this.loading = true;
    fetch(new Request(_this.config.createUrl, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + _this.accessToken,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        context: _this.config.context,
        fileName: _this.config.fileName,
        contextData: _this.config.contextData
      })
    })).then(function (res) {
      return res.json();
    }).then(function (data) {
      if (data.result) {
        _this.sessionId = data.result.sessionId;

        __calback();

        var _loop = function _loop(index) {
          setTimeout(function () {
            uploadChunk(_this.buffers[index], index);
          }, 100);
        };

        for (var index = 0; index < _this.buffers.length; index++) {
          _loop(index);
        }
      } else {
        _this.error = 'data result null';

        _this.onError(_this);
      }
    }).catch(function (error) {
      _this.error = error;

      _this.onError(_this);
    });
  };

  var uploadChunk = function uploadChunk(chunk, index) {
    if (_this.abort) {
      if (!chunk.uploading) {
        chunk.error = false;
        chunk.resending = false;
        chunk.aborted = true;
      }

      return;
    }

    _this.uploading.push("chunk ".concat(index, " => name ").concat(chunk.blob.name));

    var myHeaders = {
      'Authorization': 'Bearer ' + _this.accessToken
    };
    var formData = new FormData();
    formData.append('inputFile', chunk.blob);
    formData.append('sessionId', _this.sessionId);
    formData.append('chunkNumber', index);
    var myInit = {
      method: 'POST',
      headers: myHeaders,
      body: formData
    };
    var myRequest = new Request("".concat(_this.config.uploadUrl, "/").concat(_this.sessionId, "/").concat(index), myInit);
    fetch(myRequest).then(function (res) {
      return res.json();
    }).then(function (data) {
      chunk.uploading = data.success;
      chunk.error = data.error;

      if (data.error) {
        setTimeout(function () {
          chunk.countError++;
          chunk.uploading = false;
          chunk.error = false;
          chunk.resending = true;

          _this.uploading.pop();

          if (chunk.countError < _this.abortLimit) {
            uploadChunk(chunk, index);
          } else {
            chunk.uploading = false;
            chunk.error = false;
            chunk.resending = false;
            chunk.aborted = true;
            _this.abort = true;
            _this.error = 'count out of range';

            _this.onError(_this);
          }

          __calback();
        }, 500 * chunk.countError);
      } else {
        _this.uploading.pop();

        _this.buffersTransferedBytes += chunk.blob.size;
        _this.uploadPercent = "".concat((_this.buffersTransferedBytes / _this.buffersSize * 100).toFixed(0));
        checkCompletedTask();

        __calback();
      }
    }).catch(function (error) {
      _this.error = error;

      _this.onError(_this);
    });
  };

  var checkCompletedTask = function checkCompletedTask() {
    if (_this.uploading.length === 0) {
      _this.onComplete(_this);
    }
  };

  var getFile = function getFile() {
    log('getFile function called by', _this.User.firstName);
    return _this.File;
  };

  var getUploadPercent = function getUploadPercent() {
    log('getUploadPercent function called by', _this.User.firstName);
    return _this.uploadPercent;
  };

  var getUser = function getUser() {
    log('getUser function called by', _this.User.firstName);
    setup();
    return _this.User;
  };

  var getBufferSize = function getBufferSize() {
    log('getBufferSize function called by', _this.User.firstName);
    return _this.buffersSize;
  };

  var getBuffers = function getBuffers() {
    log('getBuffers function called by', _this.User.firstName);
    return _this.buffers;
  };

  var config = function config(_config) {
    log('set config function called by', _this.User.firstName, _config);
    _this.config = _config;
  };

  var onChange = function onChange(cb) {
    _this.cb = cb;
  };

  var setAccessToken = function setAccessToken(accessToken) {
    log('set config function called by', _this.User.firstName);
    _this.accessToken = accessToken;
  };

  var onComplete = function onComplete(cb) {
    _this.onComplete = cb;
  };

  var onError = function onError(cb) {
    _this.onError = cb;
  };

  var setDebugMode = function setDebugMode() {
    _this.debugMode = true;
  };

  var __calback = function __calback() {
    _this.cb(_this);
  }; // setUser(User)


  return {
    setUser: setUser,
    setDebugMode: setDebugMode,
    setAccessToken: setAccessToken,
    getBuffers: getBuffers,
    getUser: getUser,
    setFile: setFile,
    getFile: getFile,
    getBufferSize: getBufferSize,
    onChange: onChange,
    onComplete: onComplete,
    onError: onError,
    upload: getSesisonId,
    getCurrentSesisonId: getCurrentSesisonId,
    config: config,
    getIsLoading: getIsLoading,
    getAllowResend: getAllowResend,
    resend: resend,
    getUploadPercent: getUploadPercent
  };
}

var _default = UploadChunkManager;
exports.default = _default;