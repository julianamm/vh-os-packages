"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)("Components|Buttons/Danger", module).add("Default", function () {
  return /*#__PURE__*/_react.default.createElement(_.default, {
    danger: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  });
}).add("Outlined", function () {
  return /*#__PURE__*/_react.default.createElement(_.default, {
    danger: true,
    outline: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  });
}).add("Disabled", function () {
  return /*#__PURE__*/_react.default.createElement(_.default, {
    danger: true,
    outline: true,
    disabled: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  });
}).add("Full size", function () {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_.default, {
    disabled: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    danger: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    danger: true,
    outline: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQnV0dG9uL2Rhbmdlci5zdG9yaWVzLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImFkZCIsImUiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7QUFFQSx1QkFBVSwyQkFBVixFQUF1Q0EsTUFBdkMsRUFDR0MsR0FESCxDQUNPLFNBRFAsRUFDa0I7QUFBQSxzQkFDZCw2QkFBQyxTQUFEO0FBQVUsSUFBQSxNQUFNLE1BQWhCO0FBQWlCLElBQUEsT0FBTyxFQUFFLGlCQUFBQyxDQUFDLEVBQUk7QUFDN0IsZ0NBQU8sU0FBUCxFQUFrQkEsQ0FBbEI7QUFDRCxLQUZEO0FBRUcsSUFBQSxLQUFLLEVBQUM7QUFGVCxJQURjO0FBQUEsQ0FEbEIsRUFPR0QsR0FQSCxDQU9PLFVBUFAsRUFPbUI7QUFBQSxzQkFDZiw2QkFBQyxTQUFEO0FBQVUsSUFBQSxNQUFNLE1BQWhCO0FBQWlCLElBQUEsT0FBTyxNQUF4QjtBQUF5QixJQUFBLE9BQU8sRUFBRSxpQkFBQUMsQ0FBQyxFQUFJO0FBQ3JDLGdDQUFPLFNBQVAsRUFBa0JBLENBQWxCO0FBQ0QsS0FGRDtBQUVHLElBQUEsS0FBSyxFQUFDO0FBRlQsSUFEZTtBQUFBLENBUG5CLEVBYUdELEdBYkgsQ0FhTyxVQWJQLEVBYW1CO0FBQUEsc0JBQ2YsNkJBQUMsU0FBRDtBQUNFLElBQUEsTUFBTSxNQURSO0FBRUUsSUFBQSxPQUFPLE1BRlQ7QUFHRSxJQUFBLFFBQVEsTUFIVjtBQUlFLElBQUEsT0FBTyxFQUFFLGlCQUFBQyxDQUFDLEVBQUk7QUFDWixnQ0FBTyxTQUFQLEVBQWtCQSxDQUFsQjtBQUNELEtBTkg7QUFPRSxJQUFBLEtBQUssRUFBQztBQVBSLElBRGU7QUFBQSxDQWJuQixFQXlCR0QsR0F6QkgsQ0F5Qk8sV0F6QlAsRUF5Qm9CO0FBQUEsc0JBQ2hCLHlFQUNFLDZCQUFDLFNBQUQ7QUFBVSxJQUFBLFFBQVEsTUFBbEI7QUFBbUIsSUFBQSxJQUFJLE1BQXZCO0FBQXdCLElBQUEsT0FBTyxFQUFFLGlCQUFBQyxDQUFDLEVBQUk7QUFDcEMsZ0NBQU8sU0FBUCxFQUFrQkEsQ0FBbEI7QUFDRCxLQUZEO0FBRUcsSUFBQSxLQUFLLEVBQUM7QUFGVCxJQURGLGVBSUUsNkJBQUMsU0FBRDtBQUFVLElBQUEsTUFBTSxNQUFoQjtBQUFpQixJQUFBLElBQUksTUFBckI7QUFBc0IsSUFBQSxPQUFPLEVBQUUsaUJBQUFBLENBQUMsRUFBSTtBQUNsQyxnQ0FBTyxTQUFQLEVBQWtCQSxDQUFsQjtBQUNELEtBRkQ7QUFFRyxJQUFBLEtBQUssRUFBQztBQUZULElBSkYsZUFPRSw2QkFBQyxTQUFEO0FBQ0UsSUFBQSxNQUFNLE1BRFI7QUFFRSxJQUFBLE9BQU8sTUFGVDtBQUdFLElBQUEsSUFBSSxNQUhOO0FBSUUsSUFBQSxPQUFPLEVBQUUsaUJBQUFBLENBQUMsRUFBSTtBQUNaLGdDQUFPLFNBQVAsRUFBa0JBLENBQWxCO0FBQ0QsS0FOSDtBQU9FLElBQUEsS0FBSyxFQUFDO0FBUFIsSUFQRixDQURnQjtBQUFBLENBekJwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgc3Rvcmllc09mIH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIjtcbmltcG9ydCB7IGFjdGlvbiB9IGZyb20gXCJAc3Rvcnlib29rL2FkZG9uLWFjdGlvbnNcIjtcblxuaW1wb3J0IFZIQnV0dG9uIGZyb20gXCIuXCI7XG5cbnN0b3JpZXNPZihcIkNvbXBvbmVudHN8QnV0dG9ucy9EYW5nZXJcIiwgbW9kdWxlKVxuICAuYWRkKFwiRGVmYXVsdFwiLCAoKSA9PiAoXG4gICAgPFZIQnV0dG9uIGRhbmdlciBvbkV2ZW50PXtlID0+IHtcbiAgICAgIGFjdGlvbignb25FdmVudCcsIGUpXG4gICAgfX0gbGFiZWw9XCJWSEJ1dHRvblwiIC8+XG4gICkpXG5cbiAgLmFkZChcIk91dGxpbmVkXCIsICgpID0+IChcbiAgICA8VkhCdXR0b24gZGFuZ2VyIG91dGxpbmUgb25FdmVudD17ZSA9PiB7XG4gICAgICBhY3Rpb24oJ29uRXZlbnQnLCBlKVxuICAgIH19IGxhYmVsPVwiVkhCdXR0b25cIiAvPlxuICApKVxuXG4gIC5hZGQoXCJEaXNhYmxlZFwiLCAoKSA9PiAoXG4gICAgPFZIQnV0dG9uXG4gICAgICBkYW5nZXJcbiAgICAgIG91dGxpbmVcbiAgICAgIGRpc2FibGVkXG4gICAgICBvbkV2ZW50PXtlID0+IHtcbiAgICAgICAgYWN0aW9uKCdvbkV2ZW50JywgZSlcbiAgICAgIH19XG4gICAgICBsYWJlbD1cIlZIQnV0dG9uXCJcbiAgICAvPlxuICApKVxuXG4gIC5hZGQoXCJGdWxsIHNpemVcIiwgKCkgPT4gKFxuICAgIDw+XG4gICAgICA8VkhCdXR0b24gZGlzYWJsZWQgZnVsbCBvbkV2ZW50PXtlID0+IHtcbiAgICAgICAgYWN0aW9uKCdvbkV2ZW50JywgZSlcbiAgICAgIH19IGxhYmVsPVwiVkhCdXR0b25cIiAvPlxuICAgICAgPFZIQnV0dG9uIGRhbmdlciBmdWxsIG9uRXZlbnQ9e2UgPT4ge1xuICAgICAgICBhY3Rpb24oJ29uRXZlbnQnLCBlKVxuICAgICAgfX0gbGFiZWw9XCJWSEJ1dHRvblwiIC8+XG4gICAgICA8VkhCdXR0b25cbiAgICAgICAgZGFuZ2VyXG4gICAgICAgIG91dGxpbmVcbiAgICAgICAgZnVsbFxuICAgICAgICBvbkV2ZW50PXtlID0+IHtcbiAgICAgICAgICBhY3Rpb24oJ29uRXZlbnQnLCBlKVxuICAgICAgICB9fVxuICAgICAgICBsYWJlbD1cIlZIQnV0dG9uXCJcbiAgICAgIC8+XG4gICAgPC8+XG4gICkpO1xuIl19