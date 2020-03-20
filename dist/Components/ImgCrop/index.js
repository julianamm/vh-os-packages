"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactImageCrop = _interopRequireDefault(require("react-image-crop"));

var _styledComponents = require("styled-components");

var _ReactCrop = _interopRequireDefault(require("react-image-crop/dist/ReactCrop.css"));

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
      }), showCropper && _react.default.createElement(_Button.default, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvSW1nQ3JvcC9pbmRleC5qc3giXSwibmFtZXMiOlsiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsInJlYWN0SW1hZ2VDcm9wQ3NzIiwiVkhJbWdDcm9wIiwic3JjIiwiY3JvcHBlZEltYWdlVXJsU2VudCIsImNyb3BwZWQiLCJzaG93Q3JvcHBlciIsImNyb3AiLCJ1bml0Iiwid2lkdGgiLCJhc3BlY3QiLCJpbnB1dEZpbGUiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImUiLCJ0YXJnZXQiLCJmaWxlcyIsImxlbmd0aCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0U3RhdGUiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiaW1hZ2UiLCJpbWFnZVJlZiIsIm1ha2VDbGllbnRDcm9wIiwicGVyY2VudENyb3AiLCJoZWlnaHQiLCJnZXRDcm9wcGVkSW1nIiwiY3JvcHBlZEltYWdlVXJsIiwiZmlsZU5hbWUiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzY2FsZVgiLCJuYXR1cmFsV2lkdGgiLCJzY2FsZVkiLCJuYXR1cmFsSGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsIngiLCJ5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0b0Jsb2IiLCJibG9iIiwiY29uc29sZSIsImVycm9yIiwibmFtZSIsIndpbmRvdyIsIlVSTCIsInJldm9rZU9iamVjdFVSTCIsImZpbGVVcmwiLCJjcmVhdGVPYmplY3RVUkwiLCJzdGF0ZSIsInByb3BzIiwic291cmNlIiwiY3VycmVudCIsImNsaWNrIiwib25FdmVudCIsImRhdGEiLCJ0eXBlIiwiZGlzcGxheSIsIm9uU2VsZWN0RmlsZSIsIm9uSW1hZ2VMb2FkZWQiLCJvbkNyb3BDb21wbGV0ZSIsIm9uQ3JvcENoYW5nZSIsIm1heFdpZHRoIiwiUHVyZUNvbXBvbmVudCJdLCJt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SFc7QUFJakJqRCxZQUFBQSxNQUFNLEVBQUU7QUFKUyxXQUFuQjtBQU1ELFNBWEQ7QUFZQSxRQUFBLE9BQU87QUFaUCxRQWZSLEVBK0JFO0FBQUssUUFBQSxLQUFLLEVBQUU7QUFBQ2tELFVBQUFBLE9BQU8sRUFBRTtBQUFWO0FBQVosU0FDRTtBQUFPLFFBQUEsR0FBRyxFQUFFLEtBQUtSLEtBQUwsQ0FBVzlDLFNBQXZCO0FBQW1DLFFBQUEsSUFBSSxFQUFDLE1BQXhDO0FBQStDLFFBQUEsTUFBTSxFQUFDLFNBQXREO0FBQWdFLFFBQUEsUUFBUSxFQUFFLEtBQUt1RDtBQUEvRSxRQURGLENBL0JGLEVBa0NHL0QsR0FBRyxJQUFJLENBQUNFLE9BQVIsSUFDQyw2QkFBQyx1QkFBRDtBQUNFLFFBQUEsR0FBRyxFQUFFRixHQURQO0FBRUUsUUFBQSxJQUFJLEVBQUVJLElBRlI7QUFHRSxRQUFBLFlBQVksTUFIZDtBQUlFLFFBQUEsYUFBYSxFQUFFLEtBQUs0RCxhQUp0QjtBQUtFLFFBQUEsVUFBVSxFQUFFLEtBQUtDLGNBTG5CO0FBTUUsUUFBQSxRQUFRLEVBQUUsS0FBS0M7QUFOakIsUUFuQ0osRUE0Q0d2QyxlQUFlLElBQUl6QixPQUFuQixJQUNDO0FBQUssUUFBQSxHQUFHLEVBQUMsTUFBVDtBQUFnQixRQUFBLEtBQUssRUFBRTtBQUFFaUUsVUFBQUEsUUFBUSxFQUFFO0FBQVosU0FBdkI7QUFBNkMsUUFBQSxHQUFHLEVBQUV4QztBQUFsRCxRQTdDSixDQURGO0FBa0REOzs7O0VBNUlxQnlDLG9COztlQStJVHJFLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdENyb3AgZnJvbSAncmVhY3QtaW1hZ2UtY3JvcCc7XG5pbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHJlYWN0SW1hZ2VDcm9wQ3NzIGZyb20gJ3JlYWN0LWltYWdlLWNyb3AvZGlzdC9SZWFjdENyb3AuY3NzJ1xuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiR7cmVhY3RJbWFnZUNyb3BDc3N9O1xuYFxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3cgfSBmcm9tICcuLi8uLi9HcmlkJ1xuaW1wb3J0IFZIQXZhdGFyIGZyb20gJy4uL0F2YXRhcidcbmltcG9ydCBWSEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nXG5cbmNsYXNzIFZISW1nQ3JvcCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBzcmM6IG51bGwsXG4gICAgY3JvcHBlZEltYWdlVXJsU2VudDogbnVsbCxcbiAgICBjcm9wcGVkOiBmYWxzZSxcbiAgICBzaG93Q3JvcHBlcjogZmFsc2UsXG4gICAgY3JvcDoge1xuICAgICAgdW5pdDogJyUnLFxuICAgICAgd2lkdGg6IDEwLFxuICAgICAgYXNwZWN0OiAxLFxuICAgIH0sXG4gICAgaW5wdXRGaWxlOiBSZWFjdC5jcmVhdGVSZWYoKVxuICB9O1xuXG4gIG9uU2VsZWN0RmlsZSA9IGUgPT4ge1xuICAgIGlmIChlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PlxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3JjOiByZWFkZXIucmVzdWx0IH0pXG4gICAgICApO1xuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZS50YXJnZXQuZmlsZXNbMF0pO1xuICAgIH1cbiAgfTtcblxuICAvLyBJZiB5b3Ugc2V0U3RhdGUgdGhlIGNyb3AgaW4gaGVyZSB5b3Ugc2hvdWxkIHJldHVybiBmYWxzZS5cbiAgb25JbWFnZUxvYWRlZCA9IGltYWdlID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93Q3JvcHBlcjogdHJ1ZSwgY3JvcHBlZDogZmFsc2V9LCAoKSA9PiB7XG4gICAgICB0aGlzLmltYWdlUmVmID0gaW1hZ2U7XG4gICAgfSlcbiAgfTtcblxuICBvbkNyb3BDb21wbGV0ZSA9IGNyb3AgPT4ge1xuICAgIHRoaXMubWFrZUNsaWVudENyb3AoY3JvcCk7XG4gIH07XG5cbiAgb25Dcm9wQ2hhbmdlID0gKGNyb3AsIHBlcmNlbnRDcm9wKSA9PiB7XG4gICAgLy8gWW91IGNvdWxkIGFsc28gdXNlIHBlcmNlbnRDcm9wOlxuICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBjcm9wOiBwZXJjZW50Q3JvcCB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgY3JvcCB9KTtcbiAgfTtcblxuICBhc3luYyBtYWtlQ2xpZW50Q3JvcChjcm9wKSB7XG4gICAgaWYgKHRoaXMuaW1hZ2VSZWYgJiYgY3JvcC53aWR0aCAmJiBjcm9wLmhlaWdodCkge1xuICAgICAgY29uc3QgY3JvcHBlZEltYWdlVXJsID0gYXdhaXQgdGhpcy5nZXRDcm9wcGVkSW1nKFxuICAgICAgICB0aGlzLmltYWdlUmVmLFxuICAgICAgICBjcm9wLFxuICAgICAgICAnbmV3RmlsZS5qcGVnJ1xuICAgICAgKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjcm9wcGVkSW1hZ2VVcmwgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q3JvcHBlZEltZyhpbWFnZSwgY3JvcCwgZmlsZU5hbWUpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjb25zdCBzY2FsZVggPSBpbWFnZS5uYXR1cmFsV2lkdGggLyBpbWFnZS53aWR0aDtcbiAgICBjb25zdCBzY2FsZVkgPSBpbWFnZS5uYXR1cmFsSGVpZ2h0IC8gaW1hZ2UuaGVpZ2h0O1xuICAgIGNhbnZhcy53aWR0aCA9IGNyb3Aud2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IGNyb3AuaGVpZ2h0O1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgIGltYWdlLFxuICAgICAgY3JvcC54ICogc2NhbGVYLFxuICAgICAgY3JvcC55ICogc2NhbGVZLFxuICAgICAgY3JvcC53aWR0aCAqIHNjYWxlWCxcbiAgICAgIGNyb3AuaGVpZ2h0ICogc2NhbGVZLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICBjcm9wLndpZHRoLFxuICAgICAgY3JvcC5oZWlnaHRcbiAgICApO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNhbnZhcy50b0Jsb2IoYmxvYiA9PiB7XG4gICAgICAgIGlmICghYmxvYikge1xuICAgICAgICAgIC8vcmVqZWN0KG5ldyBFcnJvcignQ2FudmFzIGlzIGVtcHR5JykpO1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NhbnZhcyBpcyBlbXB0eScpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBibG9iLm5hbWUgPSBmaWxlTmFtZTtcbiAgICAgICAgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwodGhpcy5maWxlVXJsKTtcbiAgICAgICAgdGhpcy5maWxlVXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgIHJlc29sdmUodGhpcy5maWxlVXJsKTtcbiAgICAgIH0sICdpbWFnZS9qcGVnJyk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjcm9wLCBjcm9wcGVkLCBjcm9wcGVkSW1hZ2VVcmxTZW50LCBzaG93Q3JvcHBlciwgY3JvcHBlZEltYWdlVXJsLCBzcmMgfSA9IHRoaXMuc3RhdGU7XG4gICAgLy8gY29uc29sZS5sb2coJ3JlYWN0SW1hZ2VDcm9wQ3NzJywgcmVhY3RJbWFnZUNyb3BDc3MpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nQ3JvcFwiPlxuICAgICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgICAgPFZIQXZhdGFyXG4gICAgICAgICAgY29udGVudD1cIlwiXG4gICAgICAgICAgaW1hZ2U9eyBjcm9wcGVkSW1hZ2VVcmxTZW50IHx8IHRoaXMucHJvcHMuc291cmNlfVxuICAgICAgICAgIHNob3dDdXJzb3JcbiAgICAgICAgICBzaXplPVwieGxcIlxuICAgICAgICAgIG9uRXZlbnQ9eyBlID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Nyb3BwZWQ6IGZhbHNlLCBzcmM6IG51bGwsIHNob3dDcm9wcGVyOiBmYWxzZX0sICgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pbnB1dEZpbGUuY3VycmVudC5jbGljaygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICB7XG4gICAgICAgICAgc2hvd0Nyb3BwZXIgJiYgKFxuICAgICAgICAgICAgICA8VkhCdXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJTZW5kXCJcbiAgICAgICAgICAgICAgb25FdmVudD17IGUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Nyb3BwZWQ6IGZhbHNlLCBzcmM6IG51bGwsIHNob3dDcm9wcGVyOiBmYWxzZSwgY3JvcHBlZEltYWdlVXJsU2VudDogY3JvcHBlZEltYWdlVXJsfSlcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy5wcm9wcy5kYXRhLFxuICAgICAgICAgICAgICAgICAgc3JjOiBjcm9wcGVkSW1hZ2VVcmwsXG4gICAgICAgICAgICAgICAgICB0eXBlOiAnb25Dcm9wcGVkJyxcbiAgICAgICAgICAgICAgICAgIHRhcmdldDogJ1ZISW1nQ3JvcCdcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ25vbmUnfX0+XG4gICAgICAgICAgPGlucHV0IHJlZj17dGhpcy5zdGF0ZS5pbnB1dEZpbGV9ICB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cImltYWdlLypcIiBvbkNoYW5nZT17dGhpcy5vblNlbGVjdEZpbGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7c3JjICYmICFjcm9wcGVkICYmIChcbiAgICAgICAgICA8UmVhY3RDcm9wXG4gICAgICAgICAgICBzcmM9e3NyY31cbiAgICAgICAgICAgIGNyb3A9e2Nyb3B9XG4gICAgICAgICAgICBydWxlT2ZUaGlyZHNcbiAgICAgICAgICAgIG9uSW1hZ2VMb2FkZWQ9e3RoaXMub25JbWFnZUxvYWRlZH1cbiAgICAgICAgICAgIG9uQ29tcGxldGU9e3RoaXMub25Dcm9wQ29tcGxldGV9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNyb3BDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge2Nyb3BwZWRJbWFnZVVybCAmJiBjcm9wcGVkICYmIChcbiAgICAgICAgICA8aW1nIGFsdD1cIkNyb3BcIiBzdHlsZT17eyBtYXhXaWR0aDogJzEwMCUnIH19IHNyYz17Y3JvcHBlZEltYWdlVXJsfSAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWSEltZ0Nyb3BcbiJdfQ==