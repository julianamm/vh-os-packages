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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvSW1nQ3JvcC9pbmRleC5qc3giXSwibmFtZXMiOlsiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsInJlYWN0SW1hZ2VDcm9wQ3NzIiwiVkhJbWdDcm9wIiwic3JjIiwiY3JvcHBlZEltYWdlVXJsU2VudCIsImNyb3BwZWQiLCJzaG93Q3JvcHBlciIsImNyb3AiLCJ1bml0Iiwid2lkdGgiLCJhc3BlY3QiLCJpbnB1dEZpbGUiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImUiLCJ0YXJnZXQiLCJmaWxlcyIsImxlbmd0aCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0U3RhdGUiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiaW1hZ2UiLCJpbWFnZVJlZiIsIm1ha2VDbGllbnRDcm9wIiwicGVyY2VudENyb3AiLCJoZWlnaHQiLCJnZXRDcm9wcGVkSW1nIiwiY3JvcHBlZEltYWdlVXJsIiwiZmlsZU5hbWUiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzY2FsZVgiLCJuYXR1cmFsV2lkdGgiLCJzY2FsZVkiLCJuYXR1cmFsSGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsIngiLCJ5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0b0Jsb2IiLCJibG9iIiwiY29uc29sZSIsImVycm9yIiwibmFtZSIsIndpbmRvdyIsIlVSTCIsInJldm9rZU9iamVjdFVSTCIsImZpbGVVcmwiLCJjcmVhdGVPYmplY3RVUkwiLCJzdGF0ZSIsInByb3BzIiwic291cmNlIiwiY3VycmVudCIsImNsaWNrIiwib25FdmVudCIsImRhdGEiLCJ0eXBlIiwiZGlzcGxheSIsIm9uU2VsZWN0RmlsZSIsIm9uSW1hZ2VMb2FkZWQiLCJvbkNyb3BDb21wbGV0ZSIsIm9uQ3JvcENoYW5nZSIsIm5vUmVmQ2hlY2siLCJtYXhXaWR0aCIsIlB1cmVD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cnQgUmVhY3RDcm9wIGZyb20gJ3JlYWN0LWltYWdlLWNyb3AnO1xuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCByZWFjdEltYWdlQ3JvcENzcyBmcm9tICdyZWFjdC1pbWFnZS1jcm9wL2Rpc3QvUmVhY3RDcm9wLmNzcydcbmltcG9ydCBWSE1vZGFsIGZyb20gJy4uL01vZGFsJ1xuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiR7cmVhY3RJbWFnZUNyb3BDc3N9O1xuYFxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3cgfSBmcm9tICcuLi8uLi9HcmlkJ1xuaW1wb3J0IFZIQXZhdGFyIGZyb20gJy4uL0F2YXRhcidcbmltcG9ydCBWSEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nXG5cbmNsYXNzIFZISW1nQ3JvcCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBzcmM6IG51bGwsXG4gICAgY3JvcHBlZEltYWdlVXJsU2VudDogbnVsbCxcbiAgICBjcm9wcGVkOiBmYWxzZSxcbiAgICBzaG93Q3JvcHBlcjogZmFsc2UsXG4gICAgY3JvcDoge1xuICAgICAgdW5pdDogJyUnLFxuICAgICAgd2lkdGg6IDEwLFxuICAgICAgYXNwZWN0OiAxLFxuICAgIH0sXG4gICAgaW5wdXRGaWxlOiBSZWFjdC5jcmVhdGVSZWYoKVxuICB9O1xuXG4gIG9uU2VsZWN0RmlsZSA9IGUgPT4ge1xuICAgIGlmIChlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PlxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3JjOiByZWFkZXIucmVzdWx0IH0pXG4gICAgICApO1xuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZS50YXJnZXQuZmlsZXNbMF0pO1xuICAgIH1cbiAgfTtcblxuICAvLyBJZiB5b3Ugc2V0U3RhdGUgdGhlIGNyb3AgaW4gaGVyZSB5b3Ugc2hvdWxkIHJldHVybiBmYWxzZS5cbiAgb25JbWFnZUxvYWRlZCA9IGltYWdlID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93Q3JvcHBlcjogdHJ1ZSwgY3JvcHBlZDogZmFsc2V9LCAoKSA9PiB7XG4gICAgICB0aGlzLmltYWdlUmVmID0gaW1hZ2U7XG4gICAgfSlcbiAgfTtcblxuICBvbkNyb3BDb21wbGV0ZSA9IGNyb3AgPT4ge1xuICAgIHRoaXMubWFrZUNsaWVudENyb3AoY3JvcCk7XG4gIH07XG5cbiAgb25Dcm9wQ2hhbmdlID0gKGNyb3AsIHBlcmNlbnRDcm9wKSA9PiB7XG4gICAgLy8gWW91IGNvdWxkIGFsc28gdXNlIHBlcmNlbnRDcm9wOlxuICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBjcm9wOiBwZXJjZW50Q3JvcCB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgY3JvcCB9KTtcbiAgfTtcblxuICBhc3luYyBtYWtlQ2xpZW50Q3JvcChjcm9wKSB7XG4gICAgaWYgKHRoaXMuaW1hZ2VSZWYgJiYgY3JvcC53aWR0aCAmJiBjcm9wLmhlaWdodCkge1xuICAgICAgY29uc3QgY3JvcHBlZEltYWdlVXJsID0gYXdhaXQgdGhpcy5nZXRDcm9wcGVkSW1nKFxuICAgICAgICB0aGlzLmltYWdlUmVmLFxuICAgICAgICBjcm9wLFxuICAgICAgICAnbmV3RmlsZS5qcGVnJ1xuICAgICAgKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjcm9wcGVkSW1hZ2VVcmwgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q3JvcHBlZEltZyhpbWFnZSwgY3JvcCwgZmlsZU5hbWUpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjb25zdCBzY2FsZVggPSBpbWFnZS5uYXR1cmFsV2lkdGggLyBpbWFnZS53aWR0aDtcbiAgICBjb25zdCBzY2FsZVkgPSBpbWFnZS5uYXR1cmFsSGVpZ2h0IC8gaW1hZ2UuaGVpZ2h0O1xuICAgIGNhbnZhcy53aWR0aCA9IGNyb3Aud2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IGNyb3AuaGVpZ2h0O1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgIGltYWdlLFxuICAgICAgY3JvcC54ICogc2NhbGVYLFxuICAgICAgY3JvcC55ICogc2NhbGVZLFxuICAgICAgY3JvcC53aWR0aCAqIHNjYWxlWCxcbiAgICAgIGNyb3AuaGVpZ2h0ICogc2NhbGVZLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICBjcm9wLndpZHRoLFxuICAgICAgY3JvcC5oZWlnaHRcbiAgICApO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNhbnZhcy50b0Jsb2IoYmxvYiA9PiB7XG4gICAgICAgIGlmICghYmxvYikge1xuICAgICAgICAgIC8vcmVqZWN0KG5ldyBFcnJvcignQ2FudmFzIGlzIGVtcHR5JykpO1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NhbnZhcyBpcyBlbXB0eScpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBibG9iLm5hbWUgPSBmaWxlTmFtZTtcbiAgICAgICAgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwodGhpcy5maWxlVXJsKTtcbiAgICAgICAgdGhpcy5maWxlVXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgIHJlc29sdmUodGhpcy5maWxlVXJsKTtcbiAgICAgIH0sICdpbWFnZS9qcGVnJyk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjcm9wLCBjcm9wcGVkLCBjcm9wcGVkSW1hZ2VVcmxTZW50LCBzaG93Q3JvcHBlciwgY3JvcHBlZEltYWdlVXJsLCBzcmMgfSA9IHRoaXMuc3RhdGU7XG4gICAgLy8gY29uc29sZS5sb2coJ3JlYWN0SW1hZ2VDcm9wQ3NzJywgcmVhY3RJbWFnZUNyb3BDc3MpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nQ3JvcFwiPlxuICAgICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgICAgPFZIQXZhdGFyXG4gICAgICAgICAgY29udGVudD1cIlwiXG4gICAgICAgICAgaW1hZ2U9eyBjcm9wcGVkSW1hZ2VVcmxTZW50IHx8IHRoaXMucHJvcHMuc291cmNlfVxuICAgICAgICAgIHNob3dDdXJzb3JcbiAgICAgICAgICBzaXplPVwieGxcIlxuICAgICAgICAgIG9uRXZlbnQ9eyBlID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Nyb3BwZWQ6IGZhbHNlLCBzcmM6IG51bGwsIHNob3dDcm9wcGVyOiBmYWxzZX0sICgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pbnB1dEZpbGUuY3VycmVudC5jbGljaygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8VkhNb2RhbFxuICAgICAgICBjb250ZW50PXs8PlxuXG4gICAgICAgIHtcbiAgICAgICAgICBzaG93Q3JvcHBlciAmJiAoXG4gICAgICAgICAgICAgIDxWSEJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlNlbmRcIlxuICAgICAgICAgICAgICBvbkV2ZW50PXsgZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3JvcHBlZDogZmFsc2UsIHNyYzogbnVsbCwgc2hvd0Nyb3BwZXI6IGZhbHNlLCBjcm9wcGVkSW1hZ2VVcmxTZW50OiBjcm9wcGVkSW1hZ2VVcmx9KVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25FdmVudCh7XG4gICAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLnByb3BzLmRhdGEsXG4gICAgICAgICAgICAgICAgICBzcmM6IGNyb3BwZWRJbWFnZVVybCxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdvbkNyb3BwZWQnLFxuICAgICAgICAgICAgICAgICAgdGFyZ2V0OiAnVkhJbWdDcm9wJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHByaW1hcnlcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnbm9uZSd9fT5cbiAgICAgICAgICA8aW5wdXQgcmVmPXt0aGlzLnN0YXRlLmlucHV0RmlsZX0gIHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiaW1hZ2UvKlwiIG9uQ2hhbmdlPXt0aGlzLm9uU2VsZWN0RmlsZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtzcmMgJiYgIWNyb3BwZWQgJiYgKFxuICAgICAgICAgIDxSZWFjdENyb3BcbiAgICAgICAgICAgIHNyYz17c3JjfVxuICAgICAgICAgICAgY3JvcD17Y3JvcH1cbiAgICAgICAgICAgIHJ1bGVPZlRoaXJkc1xuICAgICAgICAgICAgb25JbWFnZUxvYWRlZD17dGhpcy5vbkltYWdlTG9hZGVkfVxuICAgICAgICAgICAgb25Db21wbGV0ZT17dGhpcy5vbkNyb3BDb21wbGV0ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ3JvcENoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8Lz59XG4gICAgICAgIG9uRXZlbnQ9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cbiAgICAgICAgb3Blbj17c2hvd0Nyb3BwZXJ9XG4gICAgICAvPlxuXG4gICAgICAgIHtjcm9wcGVkSW1hZ2VVcmwgJiYgY3JvcHBlZCAmJiAoXG4gICAgICAgICAgPGltZyBhbHQ9XCJDcm9wXCIgc3R5bGU9e3sgbWF4V2lkdGg6ICcxMDAlJyB9fSBzcmM9e2Nyb3BwZWRJbWFnZVVybH0gLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVkhJbWdDcm9wXG4iXX0=