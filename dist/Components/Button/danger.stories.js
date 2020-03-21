"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)("Components|Buttons/Danger", module).add("Default", function () {
  return _react.default.createElement(_.default, {
    danger: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  });
}).add("Outlined", function () {
  return _react.default.createElement(_.default, {
    danger: true,
    outline: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  });
}).add("Disabled", function () {
  return _react.default.createElement(_.default, {
    danger: true,
    outline: true,
    disabled: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  });
}).add("Full size", function () {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_.default, {
    disabled: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), _react.default.createElement(_.default, {
    danger: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }), _react.default.createElement(_.default, {
    danger: true,
    outline: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)('onEvent', e);
    },
    label: "VHButton"
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQnV0dG9uL2Rhbmdlci5zdG9yaWVzLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImFkZCIsImUiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7QUFFQSx1QkFBVSwyQkFBVixFQUF1Q0EsTUFBdkMsRUFDR0MsR0FESCxDQUNPLFNBRFAsRUFDa0I7QUFBQSxTQUNkLDZCQUFDLFNBQUQ7QUFBVSxJQUFBLE1BQU0sTUFBaEI7QUFBaUIsSUFBQSxPQUFPLEVBQUUsaUJBQUFDLENBQUMsRUFBSTtBQUM3QixnQ0FBTyxTQUFQLEVBQWtCQSxDQUFsQjtBQUNELEtBRkQ7QUFFRyxJQUFBLEtBQUssRUFBQztBQUZULElBRGM7QUFBQSxDQURsQixFQU9HRCxHQVBILENBT08sVUFQUCxFQU9tQjtBQUFBLFNBQ2YsNkJBQUMsU0FBRDtBQUFVLElBQUEsTUFBTSxNQUFoQjtBQUFpQixJQUFBLE9BQU8sTUFBeEI7QUFBeUIsSUFBQSxPQUFPLEVBQUUsaUJBQUFDLENBQUMsRUFBSTtBQUNyQyxnQ0FBTyxTQUFQLEVBQWtCQSxDQUFsQjtBQUNELEtBRkQ7QUFFRyxJQUFBLEtBQUssRUFBQztBQUZULElBRGU7QUFBQSxDQVBuQixFQWFHRCxHQWJILENBYU8sVUFiUCxFQWFtQjtBQUFBLFNBQ2YsNkJBQUMsU0FBRDtBQUNFLElBQUEsTUFBTSxNQURSO0FBRUUsSUFBQSxPQUFPLE1BRlQ7QUFHRSxJQUFBLFFBQVEsTUFIVjtBQUlFLElBQUEsT0FBTyxFQUFFLGlCQUFBQyxDQUFDLEVBQUk7QUFDWixnQ0FBTyxTQUFQLEVBQWtCQSxDQUFsQjtBQUNELEtBTkg7QUFPRSxJQUFBLEtBQUssRUFBQztBQVBSLElBRGU7QUFBQSxDQWJuQixFQXlCR0QsR0F6QkgsQ0F5Qk8sV0F6QlAsRUF5Qm9CO0FBQUEsU0FDaEIsNERBQ0UsNkJBQUMsU0FBRDtBQUFVLElBQUEsUUFBUSxNQUFsQjtBQUFtQixJQUFBLElBQUksTUFBdkI7QUFBd0IsSUFBQSxPQUFPLEVBQUUsaUJBQUFDLENBQUMsRUFBSTtBQUNwQyxnQ0FBTyxTQUFQLEVBQWtCQSxDQUFsQjtBQUNELEtBRkQ7QUFFRyxJQUFBLEtBQUssRUFBQztBQUZULElBREYsRUFJRSw2QkFBQyxTQUFEO0FBQVUsSUFBQSxNQUFNLE1BQWhCO0FBQWlCLElBQUEsSUFBSSxNQUFyQjtBQUFzQixJQUFBLE9BQU8sRUFBRSxpQkFBQUEsQ0FBQyxFQUFJO0FBQ2xDLGdDQUFPLFNBQVAsRUFBa0JBLENBQWxCO0FBQ0QsS0FGRDtBQUVHLElBQUEsS0FBSyxFQUFDO0FBRlQsSUFKRixFQU9FLDZCQUFDLFNBQUQ7QUFDRSxJQUFBLE1BQU0sTUFEUjtBQUVFLElBQUEsT0FBTyxNQUZUO0FBR0UsSUFBQSxJQUFJLE1BSE47QUFJRSxJQUFBLE9BQU8sRUFBRSxpQkFBQUEsQ0FBQyxFQUFJO0FBQ1osZ0NBQU8sU0FBUCxFQUFrQkEsQ0FBbEI7QUFDRCxLQU5IO0FBT0UsSUFBQSxLQUFLLEVBQUM7QUFQUixJQVBGLENBRGdCO0FBQUEsQ0F6QnBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBzdG9yaWVzT2YgfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiO1xuaW1wb3J0IHsgYWN0aW9uIH0gZnJvbSBcIkBzdG9yeWJvb2svYWRkb24tYWN0aW9uc1wiO1xuXG5pbXBvcnQgVkhCdXR0b24gZnJvbSBcIi5cIjtcblxuc3Rvcmllc09mKFwiQ29tcG9uZW50c3xCdXR0b25zL0RhbmdlclwiLCBtb2R1bGUpXG4gIC5hZGQoXCJEZWZhdWx0XCIsICgpID0+IChcbiAgICA8VkhCdXR0b24gZGFuZ2VyIG9uRXZlbnQ9e2UgPT4ge1xuICAgICAgYWN0aW9uKCdvbkV2ZW50JywgZSlcbiAgICB9fSBsYWJlbD1cIlZIQnV0dG9uXCIgLz5cbiAgKSlcblxuICAuYWRkKFwiT3V0bGluZWRcIiwgKCkgPT4gKFxuICAgIDxWSEJ1dHRvbiBkYW5nZXIgb3V0bGluZSBvbkV2ZW50PXtlID0+IHtcbiAgICAgIGFjdGlvbignb25FdmVudCcsIGUpXG4gICAgfX0gbGFiZWw9XCJWSEJ1dHRvblwiIC8+XG4gICkpXG5cbiAgLmFkZChcIkRpc2FibGVkXCIsICgpID0+IChcbiAgICA8VkhCdXR0b25cbiAgICAgIGRhbmdlclxuICAgICAgb3V0bGluZVxuICAgICAgZGlzYWJsZWRcbiAgICAgIG9uRXZlbnQ9e2UgPT4ge1xuICAgICAgICBhY3Rpb24oJ29uRXZlbnQnLCBlKVxuICAgICAgfX1cbiAgICAgIGxhYmVsPVwiVkhCdXR0b25cIlxuICAgIC8+XG4gICkpXG5cbiAgLmFkZChcIkZ1bGwgc2l6ZVwiLCAoKSA9PiAoXG4gICAgPD5cbiAgICAgIDxWSEJ1dHRvbiBkaXNhYmxlZCBmdWxsIG9uRXZlbnQ9e2UgPT4ge1xuICAgICAgICBhY3Rpb24oJ29uRXZlbnQnLCBlKVxuICAgICAgfX0gbGFiZWw9XCJWSEJ1dHRvblwiIC8+XG4gICAgICA8VkhCdXR0b24gZGFuZ2VyIGZ1bGwgb25FdmVudD17ZSA9PiB7XG4gICAgICAgIGFjdGlvbignb25FdmVudCcsIGUpXG4gICAgICB9fSBsYWJlbD1cIlZIQnV0dG9uXCIgLz5cbiAgICAgIDxWSEJ1dHRvblxuICAgICAgICBkYW5nZXJcbiAgICAgICAgb3V0bGluZVxuICAgICAgICBmdWxsXG4gICAgICAgIG9uRXZlbnQ9e2UgPT4ge1xuICAgICAgICAgIGFjdGlvbignb25FdmVudCcsIGUpXG4gICAgICAgIH19XG4gICAgICAgIGxhYmVsPVwiVkhCdXR0b25cIlxuICAgICAgLz5cbiAgICA8Lz5cbiAgKSk7XG4iXX0=