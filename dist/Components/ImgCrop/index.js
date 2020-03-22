"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactImageCrop = _interopRequireDefault(require("react-image-crop"));

var _styledComponents = require("styled-components");

var _ReactCrop = _interopRequireDefault(require("react-image-crop/dist/ReactCrop.css"));

var _Modal = _interopRequireDefault(require("../Modal"));

var _Grid = require("../../Grid");

var _Avatar = _interopRequireDefault(require("../Avatar"));

var _Button = _interopRequireDefault(require("../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject(), _ReactCrop.default);

var VHImgCrop = /*#__PURE__*/function (_PureComponent) {
  _inherits(VHImgCrop, _PureComponent);

  function VHImgCrop() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, VHImgCrop);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(VHImgCrop)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      src: null,
      croppedImageUrlSent: null,
      cropped: false,
      showCropper: false,
      crop: {
        unit: '%',
        width: 10,
        aspect: 1
      },
      inputFile: _react.default.createRef()
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectFile", function (e) {
      if (e.target.files && e.target.files.length > 0) {
        var reader = new FileReader();
        reader.addEventListener('load', function () {
          return _this.setState({
            src: reader.result
          });
        });
        reader.readAsDataURL(e.target.files[0]);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onImageLoaded", function (image) {
      _this.setState({
        showCropper: true,
        cropped: false
      }, function () {
        _this.imageRef = image;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onCropComplete", function (crop) {
      _this.makeClientCrop(crop);
    });

    _defineProperty(_assertThisInitialized(_this), "onCropChange", function (crop, percentCrop) {
      // You could also use percentCrop:
      // this.setState({ crop: percentCrop });
      _this.setState({
        crop: crop
      });
    });

    return _this;
  }

  _createClass(VHImgCrop, [{
    key: "makeClientCrop",
    value: function () {
      var _makeClientCrop = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(crop) {
        var croppedImageUrl;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.imageRef && crop.width && crop.height)) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return this.getCroppedImg(this.imageRef, crop, 'newFile.jpeg');

              case 3:
                croppedImageUrl = _context.sent;
                this.setState({
                  croppedImageUrl: croppedImageUrl
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function makeClientCrop(_x) {
        return _makeClientCrop.apply(this, arguments);
      }

      return makeClientCrop;
    }()
  }, {
    key: "getCroppedImg",
    value: function getCroppedImg(image, crop, fileName) {
      var _this2 = this;

      var canvas = document.createElement('canvas');
      var scaleX = image.naturalWidth / image.width;
      var scaleY = image.naturalHeight / image.height;
      canvas.width = crop.width;
      canvas.height = crop.height;
      var ctx = canvas.getContext('2d');
      ctx.drawImage(image, crop.x * scaleX, crop.y * scaleY, crop.width * scaleX, crop.height * scaleY, 0, 0, crop.width, crop.height);
      return new Promise(function (resolve, reject) {
        canvas.toBlob(function (blob) {
          if (!blob) {
            //reject(new Error('Canvas is empty'));
            console.error('Canvas is empty');
            return;
          }

          blob.name = fileName;
          window.URL.revokeObjectURL(_this2.fileUrl);
          _this2.fileUrl = window.URL.createObjectURL(blob);
          resolve(_this2.fileUrl);
        }, 'image/jpeg');
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          crop = _this$state.crop,
          cropped = _this$state.cropped,
          croppedImageUrlSent = _this$state.croppedImageUrlSent,
          showCropper = _this$state.showCropper,
          croppedImageUrl = _this$state.croppedImageUrl,
          src = _this$state.src; // console.log('reactImageCropCss', reactImageCropCss)

      return _react.default.createElement("div", {
        className: "imgCrop"
      }, _react.default.createElement(GlobalStyle, null), _react.default.createElement(_Avatar.default, {
        content: "",
        image: croppedImageUrlSent || this.props.source,
        showCursor: true,
        size: "xl",
        onEvent: function onEvent(e) {
          _this3.setState({
            cropped: false,
            src: null,
            showCropper: false
          }, function () {
            _this3.state.inputFile.current.click();
          });
        }
      }), _react.default.createElement(_Modal.default, {
        content: _react.default.createElement(_react.default.Fragment, null, showCropper && _react.default.createElement(_Button.default, {
          className: "",
          label: "Send",
          onEvent: function onEvent(e) {
            _this3.setState({
              cropped: false,
              src: null,
              showCropper: false,
              croppedImageUrlSent: croppedImageUrl
            });

            _this3.props.onEvent({
              data: _this3.props.data,
              src: croppedImageUrl,
              type: 'onCropped',
              target: 'VHImgCrop'
            });
          },
          primary: true
        }), _react.default.createElement("div", {
          style: {
            display: 'none'
          }
        }, _react.default.createElement("input", {
          ref: this.state.inputFile,
          type: "file",
          accept: "image/*",
          onChange: this.onSelectFile
        })), src && !cropped && _react.default.createElement(_reactImageCrop.default, {
          src: src,
          crop: crop,
          ruleOfThirds: true,
          onImageLoaded: this.onImageLoaded,
          onComplete: this.onCropComplete,
          onChange: this.onCropChange
        })),
        onEvent: function noRefCheck() {},
        open: showCropper
      }), croppedImageUrl && cropped && _react.default.createElement("img", {
        alt: "Crop",
        style: {
          maxWidth: '100%'
        },
        src: croppedImageUrl
      }));
    }
  }]);

  return VHImgCrop;
}(_react.PureComponent);

var _default = VHImgCrop;
exports.default = _default;