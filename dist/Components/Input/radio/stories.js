"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = {
  text: 'Company Size',
  items: [{
    name: 'Startup'
  }, {
    name: 'Midsize'
  }, {
    name: 'Corporate'
  }]
};
(0, _react2.storiesOf)("Components|Input/Radio", module).add("default", function () {
  return _react.default.createElement("div", {
    style: {
      width: '80%',
      marginLeft: '1%',
      padding: '9px'
    }
  }, _react.default.createElement(_.default, {
    color: "gray-100",
    variant: "platform",
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    data: data
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvSW5wdXQvcmFkaW8vc3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJkYXRhIiwidGV4dCIsIml0ZW1zIiwibmFtZSIsIm1vZHVsZSIsImFkZCIsIndpZHRoIiwibWFyZ2luTGVmdCIsInBhZGRpbmciLCJldmVudCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUc7QUFDWEMsRUFBQUEsSUFBSSxFQUFFLGNBREs7QUFFWEMsRUFBQUEsS0FBSyxFQUFFLENBQ0w7QUFDRUMsSUFBQUEsSUFBSSxFQUFFO0FBRFIsR0FESyxFQUlMO0FBQ0VBLElBQUFBLElBQUksRUFBRTtBQURSLEdBSkssRUFPTDtBQUNFQSxJQUFBQSxJQUFJLEVBQUU7QUFEUixHQVBLO0FBRkksQ0FBYjtBQWVBLHVCQUFVLHdCQUFWLEVBQW9DQyxNQUFwQyxFQUNHQyxHQURILENBQ08sU0FEUCxFQUNrQjtBQUFBLFNBQ2Q7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsS0FBVDtBQUFnQkMsTUFBQUEsVUFBVSxFQUFFLElBQTVCO0FBQWtDQyxNQUFBQSxPQUFPLEVBQUU7QUFBM0M7QUFBWixLQUNFLDZCQUFDLFNBQUQ7QUFDRSxJQUFBLEtBQUssRUFBQyxVQURSO0FBRUUsSUFBQSxPQUFPLEVBQUMsVUFGVjtBQUdFLElBQUEsT0FBTyxFQUFFLGlCQUFDQyxLQUFEO0FBQUEsYUFBV0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVosQ0FBWDtBQUFBLEtBSFg7QUFJRSxJQUFBLElBQUksRUFBRVQ7QUFKUixJQURGLENBRGM7QUFBQSxDQURsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0b3JpZXNPZiB9IGZyb20gXCJAc3Rvcnlib29rL3JlYWN0XCI7XG5pbXBvcnQgVkhJbnB1dFJhZGlvIGZyb20gXCIuXCI7XG5cbmNvbnN0IGRhdGEgPSB7XG4gIHRleHQ6ICdDb21wYW55IFNpemUnLFxuICBpdGVtczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdTdGFydHVwJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ01pZHNpemUnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQ29ycG9yYXRlJ1xuICAgIH1cbiAgXVxufVxuXG5zdG9yaWVzT2YoXCJDb21wb25lbnRzfElucHV0L1JhZGlvXCIsIG1vZHVsZSlcbiAgLmFkZChcImRlZmF1bHRcIiwgKCkgPT4gKFxuICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICc4MCUnLCBtYXJnaW5MZWZ0OiAnMSUnLCBwYWRkaW5nOiAnOXB4JyB9fT5cbiAgICAgIDxWSElucHV0UmFkaW9cbiAgICAgICAgY29sb3I9XCJncmF5LTEwMFwiXG4gICAgICAgIHZhcmlhbnQ9XCJwbGF0Zm9ybVwiXG4gICAgICAgIG9uRXZlbnQ9eyhldmVudCkgPT4gY29uc29sZS5sb2coZXZlbnQpfVxuICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKSlcbiJdfQ==