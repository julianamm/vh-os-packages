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

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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

  var _super = _createSuper(VHImgCrop);

  function VHImgCrop() {
    var _this;

    _classCallCheck(this, VHImgCrop);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

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

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "imgCrop"
      }, /*#__PURE__*/_react.default.createElement(GlobalStyle, null), /*#__PURE__*/_react.default.createElement(_Avatar.default, {
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
      }), /*#__PURE__*/_react.default.createElement(_Modal.default, {
        content: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, showCropper && /*#__PURE__*/_react.default.createElement(_Button.default, {
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
        }), /*#__PURE__*/_react.default.createElement("div", {
          style: {
            display: 'none'
          }
        }, /*#__PURE__*/_react.default.createElement("input", {
          ref: this.state.inputFile,
          type: "file",
          accept: "image/*",
          onChange: this.onSelectFile
        })), src && !cropped && /*#__PURE__*/_react.default.createElement(_reactImageCrop.default, {
          src: src,
          crop: crop,
          ruleOfThirds: true,
          onImageLoaded: this.onImageLoaded,
          onComplete: this.onCropComplete,
          onChange: this.onCropChange
        })),
        onEvent: function noRefCheck() {},
        open: showCropper
      }), croppedImageUrl && cropped && /*#__PURE__*/_react.default.createElement("img", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvSW1nQ3JvcC9pbmRleC5qc3giXSwibmFtZXMiOlsiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsInJlYWN0SW1hZ2VDcm9wQ3NzIiwiVkhJbWdDcm9wIiwic3JjIiwiY3JvcHBlZEltYWdlVXJsU2VudCIsImNyb3BwZWQiLCJzaG93Q3JvcHBlciIsImNyb3AiLCJ1bml0Iiwid2lkdGgiLCJhc3BlY3QiLCJpbnB1dEZpbGUiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImUiLCJ0YXJnZXQiLCJmaWxlcyIsImxlbmd0aCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0U3RhdGUiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiaW1hZ2UiLCJpbWFnZVJlZiIsIm1ha2VDbGllbnRDcm9wIiwicGVyY2VudENyb3AiLCJoZWlnaHQiLCJnZXRDcm9wcGVkSW1nIiwiY3JvcHBlZEltYWdlVXJsIiwiZmlsZU5hbWUiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzY2FsZVgiLCJuYXR1cmFsV2lkdGgiLCJzY2FsZVkiLCJuYXR1cmFsSGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsIngiLCJ5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0b0Jsb2IiLCJibG9iIiwiY29uc29sZSIsImVycm9yIiwibmFtZSIsIndpbmRvdyIsIlVSTCIsInJldm9rZU9iamVjdFVSTCIsImZpbGVVcmwiLCJjcmVhdGVPYmplY3RVUkwiLCJzdGF0ZSIsInByb3BzIiwic291cmNlIiwiY3VycmVudCIsImNsaWNrIiwib25FdmVudCIsImRhdGEiLCJ0eXBlIiwiZGlzcGxheSIsIm9uU2VsZWN0RmlsZSIsIm9uSW1hZ2VMb2FkZWQiLCJvbkNyb3BDb21wbGV0ZSIsIm9uQ3JvcENoYW5nZSIsIm5vUmVmQ2hlY2siLCJtYXhXaWR0aCIsIlB1cmVD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Y3QnO1xuaW1wb3J0IFJlYWN0Q3JvcCBmcm9tICdyZWFjdC1pbWFnZS1jcm9wJztcbmltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgcmVhY3RJbWFnZUNyb3BDc3MgZnJvbSAncmVhY3QtaW1hZ2UtY3JvcC9kaXN0L1JlYWN0Q3JvcC5jc3MnXG5pbXBvcnQgVkhNb2RhbCBmcm9tICcuLi9Nb2RhbCdcbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4ke3JlYWN0SW1hZ2VDcm9wQ3NzfTtcbmBcbmltcG9ydCB7IENvbnRhaW5lciwgUm93IH0gZnJvbSAnLi4vLi4vR3JpZCdcbmltcG9ydCBWSEF2YXRhciBmcm9tICcuLi9BdmF0YXInXG5pbXBvcnQgVkhCdXR0b24gZnJvbSAnLi4vQnV0dG9uJ1xuXG5jbGFzcyBWSEltZ0Nyb3AgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgc3JjOiBudWxsLFxuICAgIGNyb3BwZWRJbWFnZVVybFNlbnQ6IG51bGwsXG4gICAgY3JvcHBlZDogZmFsc2UsXG4gICAgc2hvd0Nyb3BwZXI6IGZhbHNlLFxuICAgIGNyb3A6IHtcbiAgICAgIHVuaXQ6ICclJyxcbiAgICAgIHdpZHRoOiAxMCxcbiAgICAgIGFzcGVjdDogMSxcbiAgICB9LFxuICAgIGlucHV0RmlsZTogUmVhY3QuY3JlYXRlUmVmKClcbiAgfTtcblxuICBvblNlbGVjdEZpbGUgPSBlID0+IHtcbiAgICBpZiAoZS50YXJnZXQuZmlsZXMgJiYgZS50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNyYzogcmVhZGVyLnJlc3VsdCB9KVxuICAgICAgKTtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gSWYgeW91IHNldFN0YXRlIHRoZSBjcm9wIGluIGhlcmUgeW91IHNob3VsZCByZXR1cm4gZmFsc2UuXG4gIG9uSW1hZ2VMb2FkZWQgPSBpbWFnZSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0Nyb3BwZXI6IHRydWUsIGNyb3BwZWQ6IGZhbHNlfSwgKCkgPT4ge1xuICAgICAgdGhpcy5pbWFnZVJlZiA9IGltYWdlO1xuICAgIH0pXG4gIH07XG5cbiAgb25Dcm9wQ29tcGxldGUgPSBjcm9wID0+IHtcbiAgICB0aGlzLm1ha2VDbGllbnRDcm9wKGNyb3ApO1xuICB9O1xuXG4gIG9uQ3JvcENoYW5nZSA9IChjcm9wLCBwZXJjZW50Q3JvcCkgPT4ge1xuICAgIC8vIFlvdSBjb3VsZCBhbHNvIHVzZSBwZXJjZW50Q3JvcDpcbiAgICAvLyB0aGlzLnNldFN0YXRlKHsgY3JvcDogcGVyY2VudENyb3AgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNyb3AgfSk7XG4gIH07XG5cbiAgYXN5bmMgbWFrZUNsaWVudENyb3AoY3JvcCkge1xuICAgIGlmICh0aGlzLmltYWdlUmVmICYmIGNyb3Aud2lkdGggJiYgY3JvcC5oZWlnaHQpIHtcbiAgICAgIGNvbnN0IGNyb3BwZWRJbWFnZVVybCA9IGF3YWl0IHRoaXMuZ2V0Q3JvcHBlZEltZyhcbiAgICAgICAgdGhpcy5pbWFnZVJlZixcbiAgICAgICAgY3JvcCxcbiAgICAgICAgJ25ld0ZpbGUuanBlZydcbiAgICAgICk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY3JvcHBlZEltYWdlVXJsIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldENyb3BwZWRJbWcoaW1hZ2UsIGNyb3AsIGZpbGVOYW1lKSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY29uc3Qgc2NhbGVYID0gaW1hZ2UubmF0dXJhbFdpZHRoIC8gaW1hZ2Uud2lkdGg7XG4gICAgY29uc3Qgc2NhbGVZID0gaW1hZ2UubmF0dXJhbEhlaWdodCAvIGltYWdlLmhlaWdodDtcbiAgICBjYW52YXMud2lkdGggPSBjcm9wLndpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBjcm9wLmhlaWdodDtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICBpbWFnZSxcbiAgICAgIGNyb3AueCAqIHNjYWxlWCxcbiAgICAgIGNyb3AueSAqIHNjYWxlWSxcbiAgICAgIGNyb3Aud2lkdGggKiBzY2FsZVgsXG4gICAgICBjcm9wLmhlaWdodCAqIHNjYWxlWSxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgY3JvcC53aWR0aCxcbiAgICAgIGNyb3AuaGVpZ2h0XG4gICAgKTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjYW52YXMudG9CbG9iKGJsb2IgPT4ge1xuICAgICAgICBpZiAoIWJsb2IpIHtcbiAgICAgICAgICAvL3JlamVjdChuZXcgRXJyb3IoJ0NhbnZhcyBpcyBlbXB0eScpKTtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdDYW52YXMgaXMgZW1wdHknKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYmxvYi5uYW1lID0gZmlsZU5hbWU7XG4gICAgICAgIHdpbmRvdy5VUkwucmV2b2tlT2JqZWN0VVJMKHRoaXMuZmlsZVVybCk7XG4gICAgICAgIHRoaXMuZmlsZVVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICByZXNvbHZlKHRoaXMuZmlsZVVybCk7XG4gICAgICB9LCAnaW1hZ2UvanBlZycpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY3JvcCwgY3JvcHBlZCwgY3JvcHBlZEltYWdlVXJsU2VudCwgc2hvd0Nyb3BwZXIsIGNyb3BwZWRJbWFnZVVybCwgc3JjIH0gPSB0aGlzLnN0YXRlO1xuICAgIC8vIGNvbnNvbGUubG9nKCdyZWFjdEltYWdlQ3JvcENzcycsIHJlYWN0SW1hZ2VDcm9wQ3NzKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ0Nyb3BcIj5cbiAgICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICAgIDxWSEF2YXRhclxuICAgICAgICAgIGNvbnRlbnQ9XCJcIlxuICAgICAgICAgIGltYWdlPXsgY3JvcHBlZEltYWdlVXJsU2VudCB8fCB0aGlzLnByb3BzLnNvdXJjZX1cbiAgICAgICAgICBzaG93Q3Vyc29yXG4gICAgICAgICAgc2l6ZT1cInhsXCJcbiAgICAgICAgICBvbkV2ZW50PXsgZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjcm9wcGVkOiBmYWxzZSwgc3JjOiBudWxsLCBzaG93Q3JvcHBlcjogZmFsc2V9LCAoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuaW5wdXRGaWxlLmN1cnJlbnQuY2xpY2soKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPFZITW9kYWxcbiAgICAgICAgY29udGVudD17PD5cblxuICAgICAgICB7XG4gICAgICAgICAgc2hvd0Nyb3BwZXIgJiYgKFxuICAgICAgICAgICAgICA8VkhCdXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJTZW5kXCJcbiAgICAgICAgICAgICAgb25FdmVudD17IGUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Nyb3BwZWQ6IGZhbHNlLCBzcmM6IG51bGwsIHNob3dDcm9wcGVyOiBmYWxzZSwgY3JvcHBlZEltYWdlVXJsU2VudDogY3JvcHBlZEltYWdlVXJsfSlcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy5wcm9wcy5kYXRhLFxuICAgICAgICAgICAgICAgICAgc3JjOiBjcm9wcGVkSW1hZ2VVcmwsXG4gICAgICAgICAgICAgICAgICB0eXBlOiAnb25Dcm9wcGVkJyxcbiAgICAgICAgICAgICAgICAgIHRhcmdldDogJ1ZISW1nQ3JvcCdcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ25vbmUnfX0+XG4gICAgICAgICAgPGlucHV0IHJlZj17dGhpcy5zdGF0ZS5pbnB1dEZpbGV9ICB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cImltYWdlLypcIiBvbkNoYW5nZT17dGhpcy5vblNlbGVjdEZpbGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7c3JjICYmICFjcm9wcGVkICYmIChcbiAgICAgICAgICA8UmVhY3RDcm9wXG4gICAgICAgICAgICBzcmM9e3NyY31cbiAgICAgICAgICAgIGNyb3A9e2Nyb3B9XG4gICAgICAgICAgICBydWxlT2ZUaGlyZHNcbiAgICAgICAgICAgIG9uSW1hZ2VMb2FkZWQ9e3RoaXMub25JbWFnZUxvYWRlZH1cbiAgICAgICAgICAgIG9uQ29tcGxldGU9e3RoaXMub25Dcm9wQ29tcGxldGV9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNyb3BDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPC8+fVxuICAgICAgICBvbkV2ZW50PXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XG4gICAgICAgIG9wZW49e3Nob3dDcm9wcGVyfVxuICAgICAgLz5cblxuICAgICAgICB7Y3JvcHBlZEltYWdlVXJsICYmIGNyb3BwZWQgJiYgKFxuICAgICAgICAgIDxpbWcgYWx0PVwiQ3JvcFwiIHN0eWxlPXt7IG1heFdpZHRoOiAnMTAwJScgfX0gc3JjPXtjcm9wcGVkSW1hZ2VVcmx9IC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZISW1nQ3JvcFxuIl19