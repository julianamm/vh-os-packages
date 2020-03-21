"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Components|Progress Bar', module).add('default', function () {
  return /*#__PURE__*/_react.default.createElement(_.default, {
    steps: 6,
    currentStep: 1,
    onEvent: function onEvent(e) {
      console.log(e);
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIvc3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJhZGQiLCJlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUVBLHVCQUFVLHlCQUFWLEVBQXFDQSxNQUFyQyxFQUVDQyxHQUZELENBRUssU0FGTCxFQUVnQjtBQUFBLHNCQUNaLDZCQUFDLFNBQUQ7QUFDSSxJQUFBLEtBQUssRUFBRSxDQURYO0FBRUksSUFBQSxXQUFXLEVBQUUsQ0FGakI7QUFHSSxJQUFBLE9BQU8sRUFBRSxpQkFBQUMsQ0FBQyxFQUFJO0FBQ1ZDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaO0FBQ0g7QUFMTCxJQURZO0FBQUEsQ0FGaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBzdG9yaWVzT2YgfSBmcm9tICdAc3Rvcnlib29rL3JlYWN0J1xuaW1wb3J0IFZIUHJvZ3Jlc3NCYXIgZnJvbSAnLidcblxuc3Rvcmllc09mKCdDb21wb25lbnRzfFByb2dyZXNzIEJhcicsIG1vZHVsZSlcblxuLmFkZCgnZGVmYXVsdCcsICgpID0+IChcbiAgICA8VkhQcm9ncmVzc0JhclxuICAgICAgICBzdGVwcz17Nn1cbiAgICAgICAgY3VycmVudFN0ZXA9ezF9XG4gICAgICAgIG9uRXZlbnQ9e2UgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgfX1cbiAgICAvPlxuKSlcbiJdfQ==