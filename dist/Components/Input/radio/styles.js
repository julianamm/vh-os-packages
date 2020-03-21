"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = exports.Input = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin-right: 20px;\n  color: ", ";\n  font-family: Roboto;\n  font-size: 14px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 20px;\n  height: 20px;\n  margin: -1px 0 0 -2px;\n  background-color: ", ";\n  border-radius: 3px;\n  border: solid 1px ", ";\n  cursor: pointer;\n  padding-right: 10px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    align-content: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject());

exports.Wrapper = Wrapper;

var Input = _styledComponents.default.input(_templateObject2(), _Colors.default["gray-20"], _Colors.default["gray-30"]);

exports.Input = Input;

var Label = _styledComponents.default.label(_templateObject3(), _Colors.default["gray-100"]);

exports.Label = Label;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvSW5wdXQvcmFkaW8vc3R5bGVzLmpzIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJJbnB1dCIsImlucHV0IiwiQ29sb3IiLCJMYWJlbCIsImxhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLElBQU1BLE9BQU8sR0FBR0MsMEJBQU9DLEdBQVYsbUJBQWI7Ozs7QUFLQSxJQUFNQyxLQUFLLEdBQUdGLDBCQUFPRyxLQUFWLHFCQUlJQyxnQkFBTSxTQUFOLENBSkosRUFNSUEsZ0JBQU0sU0FBTixDQU5KLENBQVg7Ozs7QUFXQSxJQUFNQyxLQUFLLEdBQUdMLDBCQUFPTSxLQUFWLHFCQUVQRixnQkFBTSxVQUFOLENBRk8sQ0FBWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgQ29sb3IgZnJvbSBcIi4uLy4uLy4uL0NvbG9yc1wiO1xuXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogLTFweCAwIDAgLTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtDb2xvcltcImdyYXktMjBcIl19O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICR7Q29sb3JbXCJncmF5LTMwXCJdfTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IExhYmVsID0gc3R5bGVkLmxhYmVsYFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAke0NvbG9yW1wiZ3JheS0xMDBcIl19O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDE0cHg7XG5gOyJdfQ==