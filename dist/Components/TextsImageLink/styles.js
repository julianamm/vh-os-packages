"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    \n    ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject(), function (_ref) {
  var reverse = _ref.reverse;
  return reverse && "\n        flex-direction: row-reverse;\n  ";
});

exports.Wrapper = Wrapper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVGV4dHNJbWFnZUxpbmsvc3R5bGVzLmpzIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJyZXZlcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxPQUFPLEdBQUdDLDBCQUFPQyxHQUFWLG9CQUdkO0FBQUEsTUFBR0MsT0FBSCxRQUFHQSxPQUFIO0FBQUEsU0FBaUJBLE9BQU8sZ0RBQXhCO0FBQUEsQ0FIYyxDQUFiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgXG4gICAgJHsoeyByZXZlcnNlIH0pID0+IHJldmVyc2UgJiYgYFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGB9XG5gIl19