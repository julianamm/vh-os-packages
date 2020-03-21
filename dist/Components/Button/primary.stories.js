"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Components|Buttons/Primary', module).add('Default', function () {
  return /*#__PURE__*/_react.default.createElement(_.default, {
    primary: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  });
}).add('Outlined', function () {
  return /*#__PURE__*/_react.default.createElement(_.default, {
    primary: true,
    outline: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  });
}).add('Disabled', function () {
  return /*#__PURE__*/_react.default.createElement(_.default, {
    primary: true,
    outline: true,
    disabled: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  });
}).add('Full size', function () {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_.default, {
    disabled: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    primary: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    primary: true,
    outline: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQnV0dG9uL3ByaW1hcnkuc3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJhZGQiLCJlIl0sIm1hcHBpbmdzIjoiOztBQUNBOztBQUVBOztBQUNBOztBQUVBOzs7O0FBRUEsdUJBQVUsNEJBQVYsRUFBd0NBLE1BQXhDLEVBRUdDLEdBRkgsQ0FFTyxTQUZQLEVBRWtCO0FBQUEsc0JBQ2QsNkJBQUMsU0FBRDtBQUFVLElBQUEsT0FBTyxNQUFqQjtBQUFrQixJQUFBLE9BQU8sRUFBRSxpQkFBQUMsQ0FBQyxFQUFJO0FBQzVCLGdDQUFPLFNBQVAsRUFBa0JBLENBQWxCO0FBQ0QsS0FGSDtBQUVLLElBQUEsS0FBSyxFQUFDO0FBRlgsSUFEYztBQUFBLENBRmxCLEVBUUdELEdBUkgsQ0FRTyxVQVJQLEVBUW1CO0FBQUEsc0JBQ2YsNkJBQUMsU0FBRDtBQUFVLElBQUEsT0FBTyxNQUFqQjtBQUFrQixJQUFBLE9BQU8sTUFBekI7QUFBMEIsSUFBQSxPQUFPLEVBQUUsaUJBQUFDLENBQUMsRUFBSTtBQUNwQyxnQ0FBTyxTQUFQLEVBQWtCQSxDQUFsQjtBQUNELEtBRkg7QUFFSyxJQUFBLEtBQUssRUFBQztBQUZYLElBRGU7QUFBQSxDQVJuQixFQWNHRCxHQWRILENBY08sVUFkUCxFQWNtQjtBQUFBLHNCQUNmLDZCQUFDLFNBQUQ7QUFBVSxJQUFBLE9BQU8sTUFBakI7QUFBa0IsSUFBQSxPQUFPLE1BQXpCO0FBQTBCLElBQUEsUUFBUSxNQUFsQztBQUFtQyxJQUFBLE9BQU8sRUFBRSxpQkFBQUMsQ0FBQyxFQUFJO0FBQzdDLGdDQUFPLFNBQVAsRUFBa0JBLENBQWxCO0FBQ0QsS0FGSDtBQUVLLElBQUEsS0FBSyxFQUFDO0FBRlgsSUFEZTtBQUFBLENBZG5CLEVBb0JHRCxHQXBCSCxDQW9CTyxXQXBCUCxFQW9Cb0I7QUFBQSxzQkFDaEIsNkJBQUMsY0FBRCxDQUFPLFFBQVAscUJBQ0UsNkJBQUMsU0FBRDtBQUFVLElBQUEsUUFBUSxNQUFsQjtBQUFtQixJQUFBLElBQUksTUFBdkI7QUFBd0IsSUFBQSxPQUFPLEVBQUUsaUJBQUFDLENBQUMsRUFBSTtBQUNwQyxnQ0FBTyxTQUFQLEVBQWtCQSxDQUFsQjtBQUNELEtBRkQ7QUFFRyxJQUFBLEtBQUssRUFBQztBQUZULElBREYsZUFJRSw2QkFBQyxTQUFEO0FBQVUsSUFBQSxPQUFPLE1BQWpCO0FBQWtCLElBQUEsSUFBSSxNQUF0QjtBQUF1QixJQUFBLE9BQU8sRUFBRSxpQkFBQUEsQ0FBQyxFQUFJO0FBQ25DLGdDQUFPLFNBQVAsRUFBa0JBLENBQWxCO0FBQ0QsS0FGRDtBQUVHLElBQUEsS0FBSyxFQUFDO0FBRlQsSUFKRixlQU9FLDZCQUFDLFNBQUQ7QUFBVSxJQUFBLE9BQU8sTUFBakI7QUFBa0IsSUFBQSxPQUFPLE1BQXpCO0FBQTBCLElBQUEsSUFBSSxNQUE5QjtBQUErQixJQUFBLE9BQU8sRUFBRSxpQkFBQUEsQ0FBQyxFQUFJO0FBQzNDLGdDQUFPLFNBQVAsRUFBa0JBLENBQWxCO0FBQ0QsS0FGRDtBQUVHLElBQUEsS0FBSyxFQUFDO0FBRlQsSUFQRixDQURnQjtBQUFBLENBcEJwQiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgc3Rvcmllc09mIH0gZnJvbSAnQHN0b3J5Ym9vay9yZWFjdCc7XG5pbXBvcnQgeyBhY3Rpb24gfSBmcm9tICdAc3Rvcnlib29rL2FkZG9uLWFjdGlvbnMnO1xuXG5pbXBvcnQgVkhCdXR0b24gZnJvbSAnLic7XG5cbnN0b3JpZXNPZignQ29tcG9uZW50c3xCdXR0b25zL1ByaW1hcnknLCBtb2R1bGUpXG5cbiAgLmFkZCgnRGVmYXVsdCcsICgpID0+IChcbiAgICA8VkhCdXR0b24gcHJpbWFyeSBvbkV2ZW50PXtlID0+IHtcbiAgICAgICAgYWN0aW9uKCdvbkV2ZW50JywgZSlcbiAgICAgIH19IGxhYmVsPVwiVkhCdXR0b25cIiAvPlxuICApKVxuXG4gIC5hZGQoJ091dGxpbmVkJywgKCkgPT4gKFxuICAgIDxWSEJ1dHRvbiBwcmltYXJ5IG91dGxpbmUgb25FdmVudD17ZSA9PiB7XG4gICAgICAgIGFjdGlvbignb25FdmVudCcsIGUpXG4gICAgICB9fSBsYWJlbD1cIlZIQnV0dG9uXCIgLz5cbiAgKSlcblxuICAuYWRkKCdEaXNhYmxlZCcsICgpID0+IChcbiAgICA8VkhCdXR0b24gcHJpbWFyeSBvdXRsaW5lIGRpc2FibGVkIG9uRXZlbnQ9e2UgPT4ge1xuICAgICAgICBhY3Rpb24oJ29uRXZlbnQnLCBlKVxuICAgICAgfX0gbGFiZWw9XCJWSEJ1dHRvblwiIC8+XG4gICkpXG5cbiAgLmFkZCgnRnVsbCBzaXplJywgKCkgPT4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxWSEJ1dHRvbiBkaXNhYmxlZCBmdWxsIG9uRXZlbnQ9e2UgPT4ge1xuICAgICAgICBhY3Rpb24oJ29uRXZlbnQnLCBlKVxuICAgICAgfX0gbGFiZWw9XCJWSEJ1dHRvblwiIC8+XG4gICAgICA8VkhCdXR0b24gcHJpbWFyeSBmdWxsIG9uRXZlbnQ9e2UgPT4ge1xuICAgICAgICBhY3Rpb24oJ29uRXZlbnQnLCBlKVxuICAgICAgfX0gbGFiZWw9XCJWSEJ1dHRvblwiIC8+XG4gICAgICA8VkhCdXR0b24gcHJpbWFyeSBvdXRsaW5lIGZ1bGwgb25FdmVudD17ZSA9PiB7XG4gICAgICAgIGFjdGlvbignb25FdmVudCcsIGUpXG4gICAgICB9fSBsYWJlbD1cIlZIQnV0dG9uXCIgLz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApKVxuIl19