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
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '80%',
      marginLeft: '1%',
      padding: '9px'
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    color: "gray-100",
    variant: "platform",
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    data: data
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvSW5wdXQvcmFkaW8vc3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJkYXRhIiwidGV4dCIsIml0ZW1zIiwibmFtZSIsIm1vZHVsZSIsImFkZCIsIndpZHRoIiwibWFyZ2luTGVmdCIsInBhZGRpbmciLCJldmVudCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUc7QUFDWEMsRUFBQUEsSUFBSSxFQUFFLGNBREs7QUFFWEMsRUFBQUEsS0FBSyxFQUFFLENBQ0w7QUFDRUMsSUFBQUEsSUFBSSxFQUFFO0FBRFIsR0FESyxFQUlMO0FBQ0VBLElBQUFBLElBQUksRUFBRTtBQURSLEdBSkssRUFPTDtBQUNFQSxJQUFBQSxJQUFJLEVBQUU7QUFEUixHQVBLO0FBRkksQ0FBYjtBQWVBLHVCQUFVLHdCQUFWLEVBQW9DQyxNQUFwQyxFQUNHQyxHQURILENBQ08sU0FEUCxFQUNrQjtBQUFBLHNCQUNkO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLEtBQVQ7QUFBZ0JDLE1BQUFBLFVBQVUsRUFBRSxJQUE1QjtBQUFrQ0MsTUFBQUEsT0FBTyxFQUFFO0FBQTNDO0FBQVosa0JBQ0UsNkJBQUMsU0FBRDtBQUNFLElBQUEsS0FBSyxFQUFDLFVBRFI7QUFFRSxJQUFBLE9BQU8sRUFBQyxVQUZWO0FBR0UsSUFBQSxPQUFPLEVBQUUsaUJBQUNDLEtBQUQ7QUFBQSxhQUFXQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWixDQUFYO0FBQUEsS0FIWDtBQUlFLElBQUEsSUFBSSxFQUFFVDtBQUpSLElBREYsQ0FEYztBQUFBLENBRGxCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc3Rvcmllc09mIH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIjtcbmltcG9ydCBWSElucHV0UmFkaW8gZnJvbSBcIi5cIjtcblxuY29uc3QgZGF0YSA9IHtcbiAgdGV4dDogJ0NvbXBhbnkgU2l6ZScsXG4gIGl0ZW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ1N0YXJ0dXAnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnTWlkc2l6ZSdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdDb3Jwb3JhdGUnXG4gICAgfVxuICBdXG59XG5cbnN0b3JpZXNPZihcIkNvbXBvbmVudHN8SW5wdXQvUmFkaW9cIiwgbW9kdWxlKVxuICAuYWRkKFwiZGVmYXVsdFwiLCAoKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzgwJScsIG1hcmdpbkxlZnQ6ICcxJScsIHBhZGRpbmc6ICc5cHgnIH19PlxuICAgICAgPFZISW5wdXRSYWRpb1xuICAgICAgICBjb2xvcj1cImdyYXktMTAwXCJcbiAgICAgICAgdmFyaWFudD1cInBsYXRmb3JtXCJcbiAgICAgICAgb25FdmVudD17KGV2ZW50KSA9PiBjb25zb2xlLmxvZyhldmVudCl9XG4gICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApKVxuIl19