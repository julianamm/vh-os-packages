"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = {
  description: "Relocation bonus: CA$ 3,000 (half on signing and half upon  arrival in Canada)"
};
(0, _react2.storiesOf)("Components|Textarea", module).add("default", function () {
  return /*#__PURE__*/_react.default.createElement(_.default, {
    description: data.description,
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVGV4dGFyZWEvc3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJkYXRhIiwiZGVzY3JpcHRpb24iLCJtb2R1bGUiLCJhZGQiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUc7QUFDWEMsRUFBQUEsV0FBVyxFQUFFO0FBREYsQ0FBYjtBQUtBLHVCQUFVLHFCQUFWLEVBQWlDQyxNQUFqQyxFQUNHQyxHQURILENBQ08sU0FEUCxFQUNrQjtBQUFBLHNCQUNkLDZCQUFDLFNBQUQ7QUFBWSxJQUFBLFdBQVcsRUFBRUgsSUFBSSxDQUFDQyxXQUE5QjtBQUEyQyxJQUFBLE9BQU8sRUFBRSxpQkFBQ0csS0FBRDtBQUFBLGFBQVdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaLENBQVg7QUFBQTtBQUFwRCxJQURjO0FBQUEsQ0FEbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdG9yaWVzT2YgfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiO1xuaW1wb3J0IFZIVGV4dGFyZWEgZnJvbSBcIi5cIjtcblxuY29uc3QgZGF0YSA9IHtcbiAgZGVzY3JpcHRpb246IFwiUmVsb2NhdGlvbiBib251czogQ0EkIDMsMDAwIChoYWxmIG9uIHNpZ25pbmcgYW5kIGhhbGYgdXBvbiAgYXJyaXZhbCBpbiBDYW5hZGEpXCJcbn1cblxuXG5zdG9yaWVzT2YoXCJDb21wb25lbnRzfFRleHRhcmVhXCIsIG1vZHVsZSlcbiAgLmFkZChcImRlZmF1bHRcIiwgKCkgPT4gKFxuICAgIDxWSFRleHRhcmVhIGRlc2NyaXB0aW9uPXtkYXRhLmRlc2NyaXB0aW9ufSBvbkV2ZW50PXsoZXZlbnQpID0+IGNvbnNvbGUubG9nKGV2ZW50KX0vPlxuICApKSJdfQ==