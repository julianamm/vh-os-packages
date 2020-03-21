"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    padding-bottom: 21px;\n\n    ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject(), function (_ref) {
  var hideTimeline = _ref.hideTimeline;
  return !hideTimeline && "\n        border-left: 1px solid ".concat(_Colors.default["gray-30"], ";\n        padding-left: 15px;\n        position: relative;\n\n        &::after {\n            content: \"\";\n            position: absolute;\n            width: 12px;\n            height: 12px;\n            top: 0px;\n            left: -6px;\n            background-color: ").concat(_Colors.default["gray-30"], ";\n            border-radius: 50%;\n            z-index: 1;\n        }\n    ");
});

exports.Wrapper = Wrapper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVXNlckVkdWNhdGlvbkV4cGVyaWVuY2Uvc3R5bGVzLmpzIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJoaWRlVGltZWxpbmUiLCJDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRU8sSUFBTUEsT0FBTyxHQUFHQywwQkFBT0MsR0FBVixvQkFHZDtBQUFBLE1BQUdDLFlBQUgsUUFBR0EsWUFBSDtBQUFBLFNBQXNCLENBQUNBLFlBQUQsK0NBQ0tDLGdCQUFNLFNBQU4sQ0FETCxnU0FZSUEsZ0JBQU0sU0FBTixDQVpKLGlGQUF0QjtBQUFBLENBSGMsQ0FBYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgQ29sb3IgZnJvbSBcIi4uLy4uL0NvbG9yc1wiO1xuXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICAgcGFkZGluZy1ib3R0b206IDIxcHg7XG5cbiAgICAkeyh7IGhpZGVUaW1lbGluZSB9KSA9PiAhaGlkZVRpbWVsaW5lICYmYFxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICR7Q29sb3JbXCJncmF5LTMwXCJdfTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICBsZWZ0OiAtNnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtDb2xvcltcImdyYXktMzBcIl19O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgfVxuICAgIGB9XG5gXG47XG5cbiJdfQ==