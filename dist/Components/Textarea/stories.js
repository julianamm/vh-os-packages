"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = {
  description: "Relocation bonus: CA$ 3,000 (half on signing and half upon  arrival in Canada)"
};
(0, _react2.storiesOf)("Components|Textarea", module).add("default", function () {
  return _react.default.createElement(_.default, {
    description: data.description,
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVGV4dGFyZWEvc3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJkYXRhIiwiZGVzY3JpcHRpb24iLCJtb2R1bGUiLCJhZGQiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUc7QUFDWEMsRUFBQUEsV0FBVyxFQUFFO0FBREYsQ0FBYjtBQUtBLHVCQUFVLHFCQUFWLEVBQWlDQyxNQUFqQyxFQUNHQyxHQURILENBQ08sU0FEUCxFQUNrQjtBQUFBLFNBQ2QsNkJBQUMsU0FBRDtBQUFZLElBQUEsV0FBVyxFQUFFSCxJQUFJLENBQUNDLFdBQTlCO0FBQTJDLElBQUEsT0FBTyxFQUFFLGlCQUFDRyxLQUFEO0FBQUEsYUFBV0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVosQ0FBWDtBQUFBO0FBQXBELElBRGM7QUFBQSxDQURsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0b3JpZXNPZiB9IGZyb20gXCJAc3Rvcnlib29rL3JlYWN0XCI7XG5pbXBvcnQgVkhUZXh0YXJlYSBmcm9tIFwiLlwiO1xuXG5jb25zdCBkYXRhID0ge1xuICBkZXNjcmlwdGlvbjogXCJSZWxvY2F0aW9uIGJvbnVzOiBDQSQgMywwMDAgKGhhbGYgb24gc2lnbmluZyBhbmQgaGFsZiB1cG9uICBhcnJpdmFsIGluIENhbmFkYSlcIlxufVxuXG5cbnN0b3JpZXNPZihcIkNvbXBvbmVudHN8VGV4dGFyZWFcIiwgbW9kdWxlKVxuICAuYWRkKFwiZGVmYXVsdFwiLCAoKSA9PiAoXG4gICAgPFZIVGV4dGFyZWEgZGVzY3JpcHRpb249e2RhdGEuZGVzY3JpcHRpb259IG9uRXZlbnQ9eyhldmVudCkgPT4gY29uc29sZS5sb2coZXZlbnQpfS8+XG4gICkpIl19