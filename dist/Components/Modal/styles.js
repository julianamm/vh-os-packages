"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfirmationSection = exports.Content = exports.Close = exports.Header = exports.ModalBox = exports.ModalContainer = exports.FadeIn = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: auto auto;\n  grid-column-gap: 1rem;\n  justify-content: end;\n  margin-top: 2rem;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 1rem;\n  font-family: Roboto;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  float: right;\n  color: #000000;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: 95% 5%;\n  margin: 0;\n  padding: 0;\n  font-family: NunitoSans, sans-serif;\n  color: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  width: ", ";\n  min-width: ", ";\n  max-width: 960px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: ", ";\n  border: solid 1px #e0e0e0;\n  border-radius: 3px;\n  padding: 32px;\n  animation: 0.35s ", " ease-in;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.75);\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 999;\n  transition: all 0.3s;\n  display: ", ";\n  animation: 0.35s ", " ease-in;\n  \n  overflow: scroll;\n  overflow-x: hidden;\n  overflow-y: hidden;\n\n  :hover {\n    overflow-y: auto;\n    overflow-x: auto;\n  }\n\n  ::-webkit-scrollbar {\n    background-color: transparent;\n    width: 8px;\n    height: 8px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background-color: ", ";\n    border-radius: 4px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * FadeIn Animation
 */
var FadeIn = (0, _styledComponents.keyframes)(_templateObject());
exports.FadeIn = FadeIn;

var ModalContainer = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.open ? "block" : "none";
}, FadeIn, _Colors.default["gray-30"]);

exports.ModalContainer = ModalContainer;

var ModalBox = _styledComponents.default.div(_templateObject3(), function (props) {
  return props.width ? "".concat(props.width, "%") : 'auto';
}, function (props) {
  return props.minWidth ? "".concat(props.minWidth, "px") : 'auto';
}, _Colors.default.white, FadeIn);

exports.ModalBox = ModalBox;

var Header = _styledComponents.default.div(_templateObject4(), _Colors.default["black-90"]);

exports.Header = Header;

var Close = _styledComponents.default.span(_templateObject5());

exports.Close = Close;

var Content = _styledComponents.default.div(_templateObject6());

exports.Content = Content;

var ConfirmationSection = _styledComponents.default.div(_templateObject7());

exports.ConfirmationSection = ConfirmationSection;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvTW9kYWwvc3R5bGVzLmpzIl0sIm5hbWVzIjpbIkZhZGVJbiIsImtleWZyYW1lcyIsIk1vZGFsQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJvcGVuIiwiQ29sb3IiLCJNb2RhbEJveCIsIndpZHRoIiwibWluV2lkdGgiLCJ3aGl0ZSIsIkhlYWRlciIsIkNsb3NlIiwic3BhbiIsIkNvbnRlbnQiLCJDb25maXJtYXRpb25TZWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7O0FBR08sSUFBTUEsTUFBTSxPQUFHQywyQkFBSCxvQkFBWjs7O0FBU0EsSUFBTUMsY0FBYyxHQUFHQywwQkFBT0MsR0FBVixxQkFTZCxVQUFBQyxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDQyxJQUFOLEdBQWEsT0FBYixHQUF1QixNQUE1QjtBQUFBLENBVFMsRUFVTk4sTUFWTSxFQTRCSE8sZ0JBQU0sU0FBTixDQTVCRyxDQUFwQjs7OztBQWlDQSxJQUFNQyxRQUFRLEdBQUdMLDBCQUFPQyxHQUFWLHFCQUVWLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNJLEtBQU4sYUFBaUJKLEtBQUssQ0FBQ0ksS0FBdkIsU0FBa0MsTUFBdEM7QUFBQSxDQUZLLEVBR04sVUFBQUosS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0ssUUFBTixhQUFvQkwsS0FBSyxDQUFDSyxRQUExQixVQUF5QyxNQUE3QztBQUFBLENBSEMsRUFRTEgsZ0JBQU1JLEtBUkQsRUFZQVgsTUFaQSxDQUFkOzs7O0FBZUEsSUFBTVksTUFBTSxHQUFHVCwwQkFBT0MsR0FBVixxQkFNUkcsZ0JBQU0sVUFBTixDQU5RLENBQVo7Ozs7QUFTQSxJQUFNTSxLQUFLLEdBQUdWLDBCQUFPVyxJQUFWLG9CQUFYOzs7O0FBTUEsSUFBTUMsT0FBTyxHQUFHWiwwQkFBT0MsR0FBVixvQkFBYjs7OztBQUtBLElBQU1ZLG1CQUFtQixHQUFHYiwwQkFBT0MsR0FBVixvQkFBekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBDb2xvciBmcm9tIFwiLi4vLi4vQ29sb3JzXCI7XG5cbi8qKlxuICogRmFkZUluIEFuaW1hdGlvblxuICovXG5leHBvcnQgY29uc3QgRmFkZUluID0ga2V5ZnJhbWVzYFxuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTW9kYWxDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogOTk5O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgZGlzcGxheTogJHtwcm9wcyA9PiAocHJvcHMub3BlbiA/IFwiYmxvY2tcIiA6IFwibm9uZVwiKX07XG4gIGFuaW1hdGlvbjogMC4zNXMgJHtGYWRlSW59IGVhc2UtaW47XG4gIFxuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcblxuICA6aG92ZXIge1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHdpZHRoOiA4cHg7XG4gICAgaGVpZ2h0OiA4cHg7XG4gIH1cblxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NvbG9yW1wiZ3JheS0zMFwiXX07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTW9kYWxCb3ggPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRoID8gYCR7cHJvcHMud2lkdGh9JWAgOiAnYXV0byd9O1xuICBtaW4td2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMubWluV2lkdGggPyBgJHtwcm9wcy5taW5XaWR0aH1weGAgOiAnYXV0byd9O1xuICBtYXgtd2lkdGg6IDk2MHB4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYmFja2dyb3VuZDogJHtDb2xvci53aGl0ZX07XG4gIGJvcmRlcjogc29saWQgMXB4ICNlMGUwZTA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogMzJweDtcbiAgYW5pbWF0aW9uOiAwLjM1cyAke0ZhZGVJbn0gZWFzZS1pbjtcbmA7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDk1JSA1JTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogTnVuaXRvU2Fucywgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICR7Q29sb3JbXCJibGFjay05MFwiXX07XG5gO1xuXG5leHBvcnQgY29uc3QgQ2xvc2UgPSBzdHlsZWQuc3BhbmBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjMDAwMDAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuYDtcblxuZXhwb3J0IGNvbnN0IENvbmZpcm1hdGlvblNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxcmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbmA7XG4iXX0=