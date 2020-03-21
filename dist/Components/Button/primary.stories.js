"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Components|Buttons/Primary', module).add('Default', function () {
  return _react.default.createElement(_.default, {
    primary: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  });
}).add('Outlined', function () {
  return _react.default.createElement(_.default, {
    primary: true,
    outline: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  });
}).add('Disabled', function () {
  return _react.default.createElement(_.default, {
    primary: true,
    outline: true,
    disabled: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  });
}).add('Full size', function () {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_.default, {
    disabled: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), _react.default.createElement(_.default, {
    primary: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), _react.default.createElement(_.default, {
    primary: true,
    outline: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQnV0dG9uL3ByaW1hcnkuc3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJhZGQiLCJlIl0sIm1hcHBpbmdzIjoiOztBQUNBOztBQUVBOztBQUNBOztBQUVBOzs7O0FBRUEsdUJBQVUsNEJBQVYsRUFBd0NBLE1BQXhDLEVBRUdDLEdBRkgsQ0FFTyxTQUZQLEVBRWtCO0FBQUEsU0FDZCw2QkFBQyxTQUFEO0FBQVUsSUFBQSxPQUFPLE1BQWpCO0FBQWtCLElBQUEsT0FBTyxFQUFFLGlCQUFBQyxDQUFDLEVBQUk7QUFDNUIsZ0NBQU8sU0FBUCxFQUFrQkEsQ0FBbEI7QUFDRCxLQUZIO0FBRUssSUFBQSxLQUFLLEVBQUM7QUFGWCxJQURjO0FBQUEsQ0FGbEIsRUFRR0QsR0FSSCxDQVFPLFVBUlAsRUFRbUI7QUFBQSxTQUNmLDZCQUFDLFNBQUQ7QUFBVSxJQUFBLE9BQU8sTUFBakI7QUFBa0IsSUFBQSxPQUFPLE1BQXpCO0FBQTBCLElBQUEsT0FBTyxFQUFFLGlCQUFBQyxDQUFDLEVBQUk7QUFDcEMsZ0NBQU8sU0FBUCxFQUFrQkEsQ0FBbEI7QUFDRCxLQUZIO0FBRUssSUFBQSxLQUFLLEVBQUM7QUFGWCxJQURlO0FBQUEsQ0FSbkIsRUFjR0QsR0FkSCxDQWNPLFVBZFAsRUFjbUI7QUFBQSxTQUNmLDZCQUFDLFNBQUQ7QUFBVSxJQUFBLE9BQU8sTUFBakI7QUFBa0IsSUFBQSxPQUFPLE1BQXpCO0FBQTBCLElBQUEsUUFBUSxNQUFsQztBQUFtQyxJQUFBLE9BQU8sRUFBRSxpQkFBQUMsQ0FBQyxFQUFJO0FBQzdDLGdDQUFPLFNBQVAsRUFBa0JBLENBQWxCO0FBQ0QsS0FGSDtBQUVLLElBQUEsS0FBSyxFQUFDO0FBRlgsSUFEZTtBQUFBLENBZG5CLEVBb0JHRCxHQXBCSCxDQW9CTyxXQXBCUCxFQW9Cb0I7QUFBQSxTQUNoQiw2QkFBQyxjQUFELENBQU8sUUFBUCxRQUNFLDZCQUFDLFNBQUQ7QUFBVSxJQUFBLFFBQVEsTUFBbEI7QUFBbUIsSUFBQSxJQUFJLE1BQXZCO0FBQXdCLElBQUEsT0FBTyxFQUFFLGlCQUFBQyxDQUFDLEVBQUk7QUFDcEMsZ0NBQU8sU0FBUCxFQUFrQkEsQ0FBbEI7QUFDRCxLQUZEO0FBRUcsSUFBQSxLQUFLLEVBQUM7QUFGVCxJQURGLEVBSUUsNkJBQUMsU0FBRDtBQUFVLElBQUEsT0FBTyxNQUFqQjtBQUFrQixJQUFBLElBQUksTUFBdEI7QUFBdUIsSUFBQSxPQUFPLEVBQUUsaUJBQUFBLENBQUMsRUFBSTtBQUNuQyxnQ0FBTyxTQUFQLEVBQWtCQSxDQUFsQjtBQUNELEtBRkQ7QUFFRyxJQUFBLEtBQUssRUFBQztBQUZULElBSkYsRUFPRSw2QkFBQyxTQUFEO0FBQVUsSUFBQSxPQUFPLE1BQWpCO0FBQWtCLElBQUEsT0FBTyxNQUF6QjtBQUEwQixJQUFBLElBQUksTUFBOUI7QUFBK0IsSUFBQSxPQUFPLEVBQUUsaUJBQUFBLENBQUMsRUFBSTtBQUMzQyxnQ0FBTyxTQUFQLEVBQWtCQSxDQUFsQjtBQUNELEtBRkQ7QUFFRyxJQUFBLEtBQUssRUFBQztBQUZULElBUEYsQ0FEZ0I7QUFBQSxDQXBCcEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHN0b3JpZXNPZiB9IGZyb20gJ0BzdG9yeWJvb2svcmVhY3QnO1xuaW1wb3J0IHsgYWN0aW9uIH0gZnJvbSAnQHN0b3J5Ym9vay9hZGRvbi1hY3Rpb25zJztcblxuaW1wb3J0IFZIQnV0dG9uIGZyb20gJy4nO1xuXG5zdG9yaWVzT2YoJ0NvbXBvbmVudHN8QnV0dG9ucy9QcmltYXJ5JywgbW9kdWxlKVxuXG4gIC5hZGQoJ0RlZmF1bHQnLCAoKSA9PiAoXG4gICAgPFZIQnV0dG9uIHByaW1hcnkgb25FdmVudD17ZSA9PiB7XG4gICAgICAgIGFjdGlvbignb25FdmVudCcsIGUpXG4gICAgICB9fSBsYWJlbD1cIlZIQnV0dG9uXCIgLz5cbiAgKSlcblxuICAuYWRkKCdPdXRsaW5lZCcsICgpID0+IChcbiAgICA8VkhCdXR0b24gcHJpbWFyeSBvdXRsaW5lIG9uRXZlbnQ9e2UgPT4ge1xuICAgICAgICBhY3Rpb24oJ29uRXZlbnQnLCBlKVxuICAgICAgfX0gbGFiZWw9XCJWSEJ1dHRvblwiIC8+XG4gICkpXG5cbiAgLmFkZCgnRGlzYWJsZWQnLCAoKSA9PiAoXG4gICAgPFZIQnV0dG9uIHByaW1hcnkgb3V0bGluZSBkaXNhYmxlZCBvbkV2ZW50PXtlID0+IHtcbiAgICAgICAgYWN0aW9uKCdvbkV2ZW50JywgZSlcbiAgICAgIH19IGxhYmVsPVwiVkhCdXR0b25cIiAvPlxuICApKVxuXG4gIC5hZGQoJ0Z1bGwgc2l6ZScsICgpID0+IChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8VkhCdXR0b24gZGlzYWJsZWQgZnVsbCBvbkV2ZW50PXtlID0+IHtcbiAgICAgICAgYWN0aW9uKCdvbkV2ZW50JywgZSlcbiAgICAgIH19IGxhYmVsPVwiVkhCdXR0b25cIiAvPlxuICAgICAgPFZIQnV0dG9uIHByaW1hcnkgZnVsbCBvbkV2ZW50PXtlID0+IHtcbiAgICAgICAgYWN0aW9uKCdvbkV2ZW50JywgZSlcbiAgICAgIH19IGxhYmVsPVwiVkhCdXR0b25cIiAvPlxuICAgICAgPFZIQnV0dG9uIHByaW1hcnkgb3V0bGluZSBmdWxsIG9uRXZlbnQ9e2UgPT4ge1xuICAgICAgICBhY3Rpb24oJ29uRXZlbnQnLCBlKVxuICAgICAgfX0gbGFiZWw9XCJWSEJ1dHRvblwiIC8+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKSlcbiJdfQ==