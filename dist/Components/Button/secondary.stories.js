"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Components|Buttons/Secondary', module).add('Default', function () {
  return _react.default.createElement(_.default, {
    secondary: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)(e);
    },
    label: "VHButton"
  });
}).add('Outlined', function () {
  return _react.default.createElement(_.default, {
    secondary: true,
    outline: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)(e);
    },
    label: "VHButton"
  });
}).add('Disabled', function () {
  return _react.default.createElement(_.default, {
    secondary: true,
    outline: true,
    disabled: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)(e);
    },
    label: "VHButton"
  });
}).add('Full size', function () {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_.default, {
    disabled: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)(e);
    },
    label: "VHButton"
  }), _react.default.createElement(_.default, {
    secondary: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)(e);
    },
    label: "VHButton"
  }), _react.default.createElement(_.default, {
    secondary: true,
    outline: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)(e);
    },
    label: "VHButton"
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQnV0dG9uL3NlY29uZGFyeS5zdG9yaWVzLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImFkZCIsImUiXSwibWFwcGluZ3MiOiI7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7QUFFQSx1QkFBVSw4QkFBVixFQUEwQ0EsTUFBMUMsRUFFR0MsR0FGSCxDQUVPLFNBRlAsRUFFa0I7QUFBQSxTQUNkLDZCQUFDLFNBQUQ7QUFBVSxJQUFBLFNBQVMsTUFBbkI7QUFBb0IsSUFBQSxPQUFPLEVBQUUsaUJBQUFDLENBQUMsRUFBSTtBQUM5QixnQ0FBT0EsQ0FBUDtBQUNELEtBRkg7QUFFSyxJQUFBLEtBQUssRUFBQztBQUZYLElBRGM7QUFBQSxDQUZsQixFQVFHRCxHQVJILENBUU8sVUFSUCxFQVFtQjtBQUFBLFNBQ2YsNkJBQUMsU0FBRDtBQUFVLElBQUEsU0FBUyxNQUFuQjtBQUFvQixJQUFBLE9BQU8sTUFBM0I7QUFBNEIsSUFBQSxPQUFPLEVBQUUsaUJBQUFDLENBQUMsRUFBSTtBQUN0QyxnQ0FBT0EsQ0FBUDtBQUNELEtBRkg7QUFFSyxJQUFBLEtBQUssRUFBQztBQUZYLElBRGU7QUFBQSxDQVJuQixFQWNHRCxHQWRILENBY08sVUFkUCxFQWNtQjtBQUFBLFNBQ2YsNkJBQUMsU0FBRDtBQUFVLElBQUEsU0FBUyxNQUFuQjtBQUFvQixJQUFBLE9BQU8sTUFBM0I7QUFBNEIsSUFBQSxRQUFRLE1BQXBDO0FBQXFDLElBQUEsT0FBTyxFQUFFLGlCQUFBQyxDQUFDLEVBQUk7QUFDL0MsZ0NBQU9BLENBQVA7QUFDRCxLQUZIO0FBRU0sSUFBQSxLQUFLLEVBQUM7QUFGWixJQURlO0FBQUEsQ0FkbkIsRUFvQkdELEdBcEJILENBb0JPLFdBcEJQLEVBb0JvQjtBQUFBLFNBQ2hCLDZCQUFDLGNBQUQsQ0FBTyxRQUFQLFFBQ0UsNkJBQUMsU0FBRDtBQUFVLElBQUEsUUFBUSxNQUFsQjtBQUFtQixJQUFBLElBQUksTUFBdkI7QUFBd0IsSUFBQSxPQUFPLEVBQUUsaUJBQUFDLENBQUMsRUFBSTtBQUNwQyxnQ0FBT0EsQ0FBUDtBQUNELEtBRkQ7QUFFSSxJQUFBLEtBQUssRUFBQztBQUZWLElBREYsRUFJQSw2QkFBQyxTQUFEO0FBQVUsSUFBQSxTQUFTLE1BQW5CO0FBQW9CLElBQUEsSUFBSSxNQUF4QjtBQUF5QixJQUFBLE9BQU8sRUFBRSxpQkFBQUEsQ0FBQyxFQUFJO0FBQ25DLGdDQUFPQSxDQUFQO0FBQ0QsS0FGSDtBQUVNLElBQUEsS0FBSyxFQUFDO0FBRlosSUFKQSxFQU9BLDZCQUFDLFNBQUQ7QUFBVSxJQUFBLFNBQVMsTUFBbkI7QUFBb0IsSUFBQSxPQUFPLE1BQTNCO0FBQTRCLElBQUEsSUFBSSxNQUFoQztBQUFpQyxJQUFBLE9BQU8sRUFBRSxpQkFBQUEsQ0FBQyxFQUFJO0FBQzNDLGdDQUFPQSxDQUFQO0FBQ0QsS0FGSDtBQUVNLElBQUEsS0FBSyxFQUFDO0FBRlosSUFQQSxDQURnQjtBQUFBLENBcEJwQiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgc3Rvcmllc09mIH0gZnJvbSAnQHN0b3J5Ym9vay9yZWFjdCc7XG5pbXBvcnQgeyBhY3Rpb24gfSBmcm9tICdAc3Rvcnlib29rL2FkZG9uLWFjdGlvbnMnO1xuXG5pbXBvcnQgVkhCdXR0b24gZnJvbSAnLic7XG5cbnN0b3JpZXNPZignQ29tcG9uZW50c3xCdXR0b25zL1NlY29uZGFyeScsIG1vZHVsZSlcblxuICAuYWRkKCdEZWZhdWx0JywgKCkgPT4gKFxuICAgIDxWSEJ1dHRvbiBzZWNvbmRhcnkgb25FdmVudD17ZSA9PiB7XG4gICAgICAgIGFjdGlvbihlKVxuICAgICAgfX0gbGFiZWw9XCJWSEJ1dHRvblwiIC8+XG4gICkpXG5cbiAgLmFkZCgnT3V0bGluZWQnLCAoKSA9PiAoXG4gICAgPFZIQnV0dG9uIHNlY29uZGFyeSBvdXRsaW5lIG9uRXZlbnQ9e2UgPT4ge1xuICAgICAgICBhY3Rpb24oZSlcbiAgICAgIH19IGxhYmVsPVwiVkhCdXR0b25cIiAvPlxuICApKVxuXG4gIC5hZGQoJ0Rpc2FibGVkJywgKCkgPT4gKFxuICAgIDxWSEJ1dHRvbiBzZWNvbmRhcnkgb3V0bGluZSBkaXNhYmxlZCBvbkV2ZW50PXtlID0+IHtcbiAgICAgICAgYWN0aW9uKGUpXG4gICAgICB9fSAgbGFiZWw9XCJWSEJ1dHRvblwiIC8+XG4gICkpXG5cbiAgLmFkZCgnRnVsbCBzaXplJywgKCkgPT4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxWSEJ1dHRvbiBkaXNhYmxlZCBmdWxsIG9uRXZlbnQ9e2UgPT4ge1xuICAgICAgICBhY3Rpb24oZSlcbiAgICAgIH19ICBsYWJlbD1cIlZIQnV0dG9uXCIgLz5cbiAgICA8VkhCdXR0b24gc2Vjb25kYXJ5IGZ1bGwgb25FdmVudD17ZSA9PiB7XG4gICAgICAgIGFjdGlvbihlKVxuICAgICAgfX0gIGxhYmVsPVwiVkhCdXR0b25cIiAvPlxuICAgIDxWSEJ1dHRvbiBzZWNvbmRhcnkgb3V0bGluZSBmdWxsIG9uRXZlbnQ9e2UgPT4ge1xuICAgICAgICBhY3Rpb24oZSlcbiAgICAgIH19ICBsYWJlbD1cIlZIQnV0dG9uXCIgLz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApKVxuXG4iXX0=