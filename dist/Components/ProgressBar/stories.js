"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Components|Progress Bar', module).add('default', function () {
  return _react.default.createElement(_.default, {
    steps: 6,
    currentStep: 1,
    onEvent: function onEvent(e) {
      console.log(e);
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIvc3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJhZGQiLCJlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUVBLHVCQUFVLHlCQUFWLEVBQXFDQSxNQUFyQyxFQUVDQyxHQUZELENBRUssU0FGTCxFQUVnQjtBQUFBLFNBQ1osNkJBQUMsU0FBRDtBQUNJLElBQUEsS0FBSyxFQUFFLENBRFg7QUFFSSxJQUFBLFdBQVcsRUFBRSxDQUZqQjtBQUdJLElBQUEsT0FBTyxFQUFFLGlCQUFBQyxDQUFDLEVBQUk7QUFDVkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDSDtBQUxMLElBRFk7QUFBQSxDQUZoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHN0b3JpZXNPZiB9IGZyb20gJ0BzdG9yeWJvb2svcmVhY3QnXG5pbXBvcnQgVkhQcm9ncmVzc0JhciBmcm9tICcuJ1xuXG5zdG9yaWVzT2YoJ0NvbXBvbmVudHN8UHJvZ3Jlc3MgQmFyJywgbW9kdWxlKVxuXG4uYWRkKCdkZWZhdWx0JywgKCkgPT4gKFxuICAgIDxWSFByb2dyZXNzQmFyXG4gICAgICAgIHN0ZXBzPXs2fVxuICAgICAgICBjdXJyZW50U3RlcD17MX1cbiAgICAgICAgb25FdmVudD17ZSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICB9fVxuICAgIC8+XG4pKVxuIl19