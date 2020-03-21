"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfirmationSection = exports.Content = exports.Close = exports.Header = exports.ModalBox = exports.ModalContainer = exports.ModalWrapper = exports.FadeIn = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: auto auto;\n  grid-column-gap: 1rem;\n  justify-content: end;\n  margin-top: 2rem;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 1rem;\n  font-family: Roboto;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  float: right;\n  color: #000000;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: 95% 5%;\n  margin: 0;\n  padding: 0;\n  font-family: NunitoSans, sans-serif;\n  color: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  width: ", ";\n  min-width: ", ";\n  max-width: 960px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: ", ";\n  border: solid 1px #e0e0e0;\n  border-radius: 3px;\n  padding: 32px;\n  margin: 32px 0;\n  animation: 0.35s ", " ease-in;\n\n  max-height: 100%;\n  overflow-y: auto;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  margin: 12px;\n  background: #fff;\n  background-color: rgba(0, 0, 0, 0.75);\n\n  transition: all 0.3s;\n  display: ", ";\n  animation: 0.35s ", " ease-in;\n  \n  overflow: scroll;\n  overflow-x: hidden;\n  overflow-y: hidden;\n\n  :hover {\n    overflow-y: auto;\n    overflow-x: auto;\n  }\n\n  ::-webkit-scrollbar {\n    background-color: transparent;\n    width: 8px;\n    height: 8px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background-color: ", ";\n    border-radius: 4px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  left: 0;\n  top: 0;\n  // background-color: rgba(0, 0, 0, 0.75)\n  z-index: 999;\n"]);

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

var ModalWrapper = _styledComponents.default.div(_templateObject2());

exports.ModalWrapper = ModalWrapper;

var ModalContainer = _styledComponents.default.div(_templateObject3(), function (props) {
  return props.open ? "block" : "none";
}, FadeIn, _Colors.default["gray-30"]);

exports.ModalContainer = ModalContainer;

var ModalBox = _styledComponents.default.div(_templateObject4(), function (props) {
  return props.width ? "".concat(props.width, "%") : 'auto';
}, function (props) {
  return props.minWidth ? "".concat(props.minWidth, "px") : 'auto';
}, _Colors.default.white, FadeIn);

exports.ModalBox = ModalBox;

var Header = _styledComponents.default.div(_templateObject5(), _Colors.default["black-90"]);

exports.Header = Header;

var Close = _styledComponents.default.span(_templateObject6());

exports.Close = Close;

var Content = _styledComponents.default.div(_templateObject7());

exports.Content = Content;

var ConfirmationSection = _styledComponents.default.div(_templateObject8());

exports.ConfirmationSection = ConfirmationSection;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvTW9kYWwvc3R5bGVzLmpzIl0sIm5hbWVzIjpbIkZhZGVJbiIsImtleWZyYW1lcyIsIk1vZGFsV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIk1vZGFsQ29udGFpbmVyIiwicHJvcHMiLCJvcGVuIiwiQ29sb3IiLCJNb2RhbEJveCIsIndpZHRoIiwibWluV2lkdGgiLCJ3aGl0ZSIsIkhlYWRlciIsIkNsb3NlIiwic3BhbiIsIkNvbnRlbnQiLCJDb25maXJtYXRpb25TZWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7OztBQUdPLElBQU1BLE1BQU0sT0FBR0MsMkJBQUgsb0JBQVo7OztBQVNBLElBQU1DLFlBQVksR0FBR0MsMEJBQU9DLEdBQVYsb0JBQWxCOzs7O0FBVUEsSUFBTUMsY0FBYyxHQUFHRiwwQkFBT0MsR0FBVixxQkFVZCxVQUFBRSxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDQyxJQUFOLEdBQWEsT0FBYixHQUF1QixNQUE1QjtBQUFBLENBVlMsRUFXTlAsTUFYTSxFQTZCSFEsZ0JBQU0sU0FBTixDQTdCRyxDQUFwQjs7OztBQWtDQSxJQUFNQyxRQUFRLEdBQUdOLDBCQUFPQyxHQUFWLHFCQUVWLFVBQUFFLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNJLEtBQU4sYUFBaUJKLEtBQUssQ0FBQ0ksS0FBdkIsU0FBa0MsTUFBdEM7QUFBQSxDQUZLLEVBR04sVUFBQUosS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0ssUUFBTixhQUFvQkwsS0FBSyxDQUFDSyxRQUExQixVQUF5QyxNQUE3QztBQUFBLENBSEMsRUFRTEgsZ0JBQU1JLEtBUkQsRUFhQVosTUFiQSxDQUFkOzs7O0FBbUJBLElBQU1hLE1BQU0sR0FBR1YsMEJBQU9DLEdBQVYscUJBTVJJLGdCQUFNLFVBQU4sQ0FOUSxDQUFaOzs7O0FBU0EsSUFBTU0sS0FBSyxHQUFHWCwwQkFBT1ksSUFBVixvQkFBWDs7OztBQU1BLElBQU1DLE9BQU8sR0FBR2IsMEJBQU9DLEdBQVYsb0JBQWI7Ozs7QUFLQSxJQUFNYSxtQkFBbUIsR0FBR2QsMEJBQU9DLEdBQVYsb0JBQXpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQ29sb3IgZnJvbSBcIi4uLy4uL0NvbG9yc1wiO1xuXG4vKipcbiAqIEZhZGVJbiBBbmltYXRpb25cbiAqL1xuZXhwb3J0IGNvbnN0IEZhZGVJbiA9IGtleWZyYW1lc2BcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IE1vZGFsV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpXG4gIHotaW5kZXg6IDk5OTtcbmA7XG5cbmV4cG9ydCBjb25zdCBNb2RhbENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBkaXNwbGF5OiAke3Byb3BzID0+IChwcm9wcy5vcGVuID8gXCJibG9ja1wiIDogXCJub25lXCIpfTtcbiAgYW5pbWF0aW9uOiAwLjM1cyAke0ZhZGVJbn0gZWFzZS1pbjtcbiAgXG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuXG4gIDpob3ZlciB7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgd2lkdGg6IDhweDtcbiAgICBoZWlnaHQ6IDhweDtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Q29sb3JbXCJncmF5LTMwXCJdfTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBNb2RhbEJveCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGggPyBgJHtwcm9wcy53aWR0aH0lYCA6ICdhdXRvJ307XG4gIG1pbi13aWR0aDogJHtwcm9wcyA9PiBwcm9wcy5taW5XaWR0aCA/IGAke3Byb3BzLm1pbldpZHRofXB4YCA6ICdhdXRvJ307XG4gIG1heC13aWR0aDogOTYwcHg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBiYWNrZ3JvdW5kOiAke0NvbG9yLndoaXRlfTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2UwZTBlMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiAzMnB4O1xuICBtYXJnaW46IDMycHggMDtcbiAgYW5pbWF0aW9uOiAwLjM1cyAke0ZhZGVJbn0gZWFzZS1pbjtcblxuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuYDtcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOTUlIDUlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogJHtDb2xvcltcImJsYWNrLTkwXCJdfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBDbG9zZSA9IHN0eWxlZC5zcGFuYFxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6ICMwMDAwMDA7XG5gO1xuXG5leHBvcnQgY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG5gO1xuXG5leHBvcnQgY29uc3QgQ29uZmlybWF0aW9uU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xuICBncmlkLWNvbHVtbi1nYXA6IDFyZW07XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBtYXJnaW4tdG9wOiAycmVtO1xuYDtcbiJdfQ==