"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Components|Buttons/Secondary', module).add('Default', function () {
  return /*#__PURE__*/_react.default.createElement(_.default, {
    secondary: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)(e);
    },
    label: "VHButton"
  });
}).add('Outlined', function () {
  return /*#__PURE__*/_react.default.createElement(_.default, {
    secondary: true,
    outline: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)(e);
    },
    label: "VHButton"
  });
}).add('Disabled', function () {
  return /*#__PURE__*/_react.default.createElement(_.default, {
    secondary: true,
    outline: true,
    disabled: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)(e);
    },
    label: "VHButton"
  });
}).add('Full size', function () {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_.default, {
    disabled: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)(e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    secondary: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)(e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    secondary: true,
    outline: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)(e);
    },
    label: "VHButton"
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQnV0dG9uL3NlY29uZGFyeS5zdG9yaWVzLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImFkZCIsImUiXSwibWFwcGluZ3MiOiI7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7QUFFQSx1QkFBVSw4QkFBVixFQUEwQ0EsTUFBMUMsRUFFR0MsR0FGSCxDQUVPLFNBRlAsRUFFa0I7QUFBQSxzQkFDZCw2QkFBQyxTQUFEO0FBQVUsSUFBQSxTQUFTLE1BQW5CO0FBQW9CLElBQUEsT0FBTyxFQUFFLGlCQUFBQyxDQUFDLEVBQUk7QUFDOUIsZ0NBQU9BLENBQVA7QUFDRCxLQUZIO0FBRUssSUFBQSxLQUFLLEVBQUM7QUFGWCxJQURjO0FBQUEsQ0FGbEIsRUFRR0QsR0FSSCxDQVFPLFVBUlAsRUFRbUI7QUFBQSxzQkFDZiw2QkFBQyxTQUFEO0FBQVUsSUFBQSxTQUFTLE1BQW5CO0FBQW9CLElBQUEsT0FBTyxNQUEzQjtBQUE0QixJQUFBLE9BQU8sRUFBRSxpQkFBQUMsQ0FBQyxFQUFJO0FBQ3RDLGdDQUFPQSxDQUFQO0FBQ0QsS0FGSDtBQUVLLElBQUEsS0FBSyxFQUFDO0FBRlgsSUFEZTtBQUFBLENBUm5CLEVBY0dELEdBZEgsQ0FjTyxVQWRQLEVBY21CO0FBQUEsc0JBQ2YsNkJBQUMsU0FBRDtBQUFVLElBQUEsU0FBUyxNQUFuQjtBQUFvQixJQUFBLE9BQU8sTUFBM0I7QUFBNEIsSUFBQSxRQUFRLE1BQXBDO0FBQXFDLElBQUEsT0FBTyxFQUFFLGlCQUFBQyxDQUFDLEVBQUk7QUFDL0MsZ0NBQU9BLENBQVA7QUFDRCxLQUZIO0FBRU0sSUFBQSxLQUFLLEVBQUM7QUFGWixJQURlO0FBQUEsQ0FkbkIsRUFvQkdELEdBcEJILENBb0JPLFdBcEJQLEVBb0JvQjtBQUFBLHNCQUNoQiw2QkFBQyxjQUFELENBQU8sUUFBUCxxQkFDRSw2QkFBQyxTQUFEO0FBQVUsSUFBQSxRQUFRLE1BQWxCO0FBQW1CLElBQUEsSUFBSSxNQUF2QjtBQUF3QixJQUFBLE9BQU8sRUFBRSxpQkFBQUMsQ0FBQyxFQUFJO0FBQ3BDLGdDQUFPQSxDQUFQO0FBQ0QsS0FGRDtBQUVJLElBQUEsS0FBSyxFQUFDO0FBRlYsSUFERixlQUlBLDZCQUFDLFNBQUQ7QUFBVSxJQUFBLFNBQVMsTUFBbkI7QUFBb0IsSUFBQSxJQUFJLE1BQXhCO0FBQXlCLElBQUEsT0FBTyxFQUFFLGlCQUFBQSxDQUFDLEVBQUk7QUFDbkMsZ0NBQU9BLENBQVA7QUFDRCxLQUZIO0FBRU0sSUFBQSxLQUFLLEVBQUM7QUFGWixJQUpBLGVBT0EsNkJBQUMsU0FBRDtBQUFVLElBQUEsU0FBUyxNQUFuQjtBQUFvQixJQUFBLE9BQU8sTUFBM0I7QUFBNEIsSUFBQSxJQUFJLE1BQWhDO0FBQWlDLElBQUEsT0FBTyxFQUFFLGlCQUFBQSxDQUFDLEVBQUk7QUFDM0MsZ0NBQU9BLENBQVA7QUFDRCxLQUZIO0FBRU0sSUFBQSxLQUFLLEVBQUM7QUFGWixJQVBBLENBRGdCO0FBQUEsQ0FwQnBCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBzdG9yaWVzT2YgfSBmcm9tICdAc3Rvcnlib29rL3JlYWN0JztcbmltcG9ydCB7IGFjdGlvbiB9IGZyb20gJ0BzdG9yeWJvb2svYWRkb24tYWN0aW9ucyc7XG5cbmltcG9ydCBWSEJ1dHRvbiBmcm9tICcuJztcblxuc3Rvcmllc09mKCdDb21wb25lbnRzfEJ1dHRvbnMvU2Vjb25kYXJ5JywgbW9kdWxlKVxuXG4gIC5hZGQoJ0RlZmF1bHQnLCAoKSA9PiAoXG4gICAgPFZIQnV0dG9uIHNlY29uZGFyeSBvbkV2ZW50PXtlID0+IHtcbiAgICAgICAgYWN0aW9uKGUpXG4gICAgICB9fSBsYWJlbD1cIlZIQnV0dG9uXCIgLz5cbiAgKSlcblxuICAuYWRkKCdPdXRsaW5lZCcsICgpID0+IChcbiAgICA8VkhCdXR0b24gc2Vjb25kYXJ5IG91dGxpbmUgb25FdmVudD17ZSA9PiB7XG4gICAgICAgIGFjdGlvbihlKVxuICAgICAgfX0gbGFiZWw9XCJWSEJ1dHRvblwiIC8+XG4gICkpXG5cbiAgLmFkZCgnRGlzYWJsZWQnLCAoKSA9PiAoXG4gICAgPFZIQnV0dG9uIHNlY29uZGFyeSBvdXRsaW5lIGRpc2FibGVkIG9uRXZlbnQ9e2UgPT4ge1xuICAgICAgICBhY3Rpb24oZSlcbiAgICAgIH19ICBsYWJlbD1cIlZIQnV0dG9uXCIgLz5cbiAgKSlcblxuICAuYWRkKCdGdWxsIHNpemUnLCAoKSA9PiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFZIQnV0dG9uIGRpc2FibGVkIGZ1bGwgb25FdmVudD17ZSA9PiB7XG4gICAgICAgIGFjdGlvbihlKVxuICAgICAgfX0gIGxhYmVsPVwiVkhCdXR0b25cIiAvPlxuICAgIDxWSEJ1dHRvbiBzZWNvbmRhcnkgZnVsbCBvbkV2ZW50PXtlID0+IHtcbiAgICAgICAgYWN0aW9uKGUpXG4gICAgICB9fSAgbGFiZWw9XCJWSEJ1dHRvblwiIC8+XG4gICAgPFZIQnV0dG9uIHNlY29uZGFyeSBvdXRsaW5lIGZ1bGwgb25FdmVudD17ZSA9PiB7XG4gICAgICAgIGFjdGlvbihlKVxuICAgICAgfX0gIGxhYmVsPVwiVkhCdXR0b25cIiAvPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICkpXG5cbiJdfQ==