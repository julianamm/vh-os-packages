"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

var _skeleton = _interopRequireDefault(require("./skeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Components|Cards/Visa Process', module).add('default', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      width: "300px",
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    name: "Manuel Barros Reyes",
    companyName: "Bank of America",
    positionName: "Fron-End Developer",
    cityName: "Vancouver, BC",
    time: 6,
    comments: "6",
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    avgTime: 4
  }));
}).add('Invoiced', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      width: "300px",
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    name: "Manuel Barros Reyes",
    companyName: "Bank of America",
    positionName: "Fron-End Developer",
    cityName: "Vancouver, BC",
    time: 6,
    comments: "6",
    invoiced: true,
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    avgTime: 4
  }));
}).add('Favorite', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      width: "300px",
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    name: "Manuel Barros Reyes",
    companyName: "Bank of America",
    positionName: "Fron-End Developer",
    cityName: "Vancouver, BC",
    time: 3,
    comments: "6",
    favorite: true,
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    avgTime: 4
  }));
}).add('skeleton', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      width: "300px",
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_skeleton.default, null));
}).add('skeleton multiply', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      width: "300px",
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_skeleton.default, {
    random: true
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQ2FyZHMvVmlzYVByb2Nlc3Mvc3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJhZGQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ3aWR0aCIsInBhZGRpbmciLCJldmVudCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSx1QkFBVSwrQkFBVixFQUEyQ0EsTUFBM0MsRUFFQ0MsR0FGRCxDQUVLLFNBRkwsRUFFZ0I7QUFBQSxzQkFDWjtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUNDLE1BQUFBLGVBQWUsRUFBRSxTQUFsQjtBQUE2QkMsTUFBQUEsS0FBSyxFQUFFLE9BQXBDO0FBQTZDQyxNQUFBQSxPQUFPLEVBQUU7QUFBdEQ7QUFBWixrQkFDSSw2QkFBQyxTQUFEO0FBQ0ksSUFBQSxNQUFNLEVBQUMsb0VBRFg7QUFFSSxJQUFBLElBQUksRUFBQyxxQkFGVDtBQUdJLElBQUEsV0FBVyxFQUFDLGlCQUhoQjtBQUlJLElBQUEsWUFBWSxFQUFDLG9CQUpqQjtBQUtJLElBQUEsUUFBUSxFQUFDLGVBTGI7QUFNSSxJQUFBLElBQUksRUFBRSxDQU5WO0FBT0ksSUFBQSxRQUFRLEVBQUMsR0FQYjtBQVFJLElBQUEsT0FBTyxFQUFFLGlCQUFDQyxLQUFEO0FBQUEsYUFBV0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVosQ0FBWDtBQUFBLEtBUmI7QUFTSSxJQUFBLE9BQU8sRUFBRTtBQVRiLElBREosQ0FEWTtBQUFBLENBRmhCLEVBaUJDSixHQWpCRCxDQWlCSyxVQWpCTCxFQWlCaUI7QUFBQSxzQkFDYjtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUNDLE1BQUFBLGVBQWUsRUFBRSxTQUFsQjtBQUE2QkMsTUFBQUEsS0FBSyxFQUFFLE9BQXBDO0FBQTZDQyxNQUFBQSxPQUFPLEVBQUU7QUFBdEQ7QUFBWixrQkFDSSw2QkFBQyxTQUFEO0FBQ0ksSUFBQSxNQUFNLEVBQUMsb0VBRFg7QUFFSSxJQUFBLElBQUksRUFBQyxxQkFGVDtBQUdJLElBQUEsV0FBVyxFQUFDLGlCQUhoQjtBQUlJLElBQUEsWUFBWSxFQUFDLG9CQUpqQjtBQUtJLElBQUEsUUFBUSxFQUFDLGVBTGI7QUFNSSxJQUFBLElBQUksRUFBRSxDQU5WO0FBT0ksSUFBQSxRQUFRLEVBQUMsR0FQYjtBQVFJLElBQUEsUUFBUSxNQVJaO0FBU0ksSUFBQSxPQUFPLEVBQUUsaUJBQUNDLEtBQUQ7QUFBQSxhQUFXQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWixDQUFYO0FBQUEsS0FUYjtBQVVJLElBQUEsT0FBTyxFQUFFO0FBVmIsSUFESixDQURhO0FBQUEsQ0FqQmpCLEVBaUNDSixHQWpDRCxDQWlDSyxVQWpDTCxFQWlDaUI7QUFBQSxzQkFDYjtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUNDLE1BQUFBLGVBQWUsRUFBRSxTQUFsQjtBQUE2QkMsTUFBQUEsS0FBSyxFQUFFLE9BQXBDO0FBQTZDQyxNQUFBQSxPQUFPLEVBQUU7QUFBdEQ7QUFBWixrQkFDSSw2QkFBQyxTQUFEO0FBQ0ksSUFBQSxNQUFNLEVBQUMsb0VBRFg7QUFFSSxJQUFBLElBQUksRUFBQyxxQkFGVDtBQUdJLElBQUEsV0FBVyxFQUFDLGlCQUhoQjtBQUlJLElBQUEsWUFBWSxFQUFDLG9CQUpqQjtBQUtJLElBQUEsUUFBUSxFQUFDLGVBTGI7QUFNSSxJQUFBLElBQUksRUFBRSxDQU5WO0FBT0ksSUFBQSxRQUFRLEVBQUMsR0FQYjtBQVFJLElBQUEsUUFBUSxNQVJaO0FBU0ksSUFBQSxPQUFPLEVBQUUsaUJBQUNDLEtBQUQ7QUFBQSxhQUFXQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWixDQUFYO0FBQUEsS0FUYjtBQVVJLElBQUEsT0FBTyxFQUFFO0FBVmIsSUFESixDQURhO0FBQUEsQ0FqQ2pCLEVBaURDSixHQWpERCxDQWlESyxVQWpETCxFQWlEaUI7QUFBQSxzQkFDYjtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUNDLE1BQUFBLGVBQWUsRUFBRSxTQUFsQjtBQUE2QkMsTUFBQUEsS0FBSyxFQUFFLE9BQXBDO0FBQTZDQyxNQUFBQSxPQUFPLEVBQUU7QUFBdEQ7QUFBWixrQkFDSSw2QkFBQyxpQkFBRCxPQURKLENBRGE7QUFBQSxDQWpEakIsRUFzRENILEdBdERELENBc0RLLG1CQXRETCxFQXNEMEI7QUFBQSxzQkFDdEI7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFDQyxNQUFBQSxlQUFlLEVBQUUsU0FBbEI7QUFBNkJDLE1BQUFBLEtBQUssRUFBRSxPQUFwQztBQUE2Q0MsTUFBQUEsT0FBTyxFQUFFO0FBQXREO0FBQVosa0JBQ0ksNkJBQUMsaUJBQUQ7QUFBMkIsSUFBQSxNQUFNO0FBQWpDLElBREosQ0FEc0I7QUFBQSxDQXREMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBzdG9yaWVzT2YgfSBmcm9tICdAc3Rvcnlib29rL3JlYWN0J1xuaW1wb3J0IFZIQ2FyZFZpc2FQcm9jZXNzIGZyb20gJy4nXG5pbXBvcnQgVkhDYXJkVmlzYVByb2Nlc3NTa2VsZXRvbiBmcm9tICcuL3NrZWxldG9uJ1xuXG5zdG9yaWVzT2YoJ0NvbXBvbmVudHN8Q2FyZHMvVmlzYSBQcm9jZXNzJywgbW9kdWxlKVxuXG4uYWRkKCdkZWZhdWx0JywgKCkgPT4gKFxuICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwiI2YyZjJmMlwiLCB3aWR0aDogXCIzMDBweFwiLCBwYWRkaW5nOiBcIjI0cHhcIn19PlxuICAgICAgICA8VkhDYXJkVmlzYVByb2Nlc3NcbiAgICAgICAgICAgIGF2YXRhcj1cImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS91aWZhY2VzL2ZhY2VzL3R3aXR0ZXIvZGFuY291bnNlbGwvMTI4LmpwZ1wiXG4gICAgICAgICAgICBuYW1lPVwiTWFudWVsIEJhcnJvcyBSZXllc1wiXG4gICAgICAgICAgICBjb21wYW55TmFtZT1cIkJhbmsgb2YgQW1lcmljYVwiXG4gICAgICAgICAgICBwb3NpdGlvbk5hbWU9XCJGcm9uLUVuZCBEZXZlbG9wZXJcIlxuICAgICAgICAgICAgY2l0eU5hbWU9XCJWYW5jb3V2ZXIsIEJDXCJcbiAgICAgICAgICAgIHRpbWU9ezZ9XG4gICAgICAgICAgICBjb21tZW50cz1cIjZcIlxuICAgICAgICAgICAgb25FdmVudD17KGV2ZW50KSA9PiBjb25zb2xlLmxvZyhldmVudCl9XG4gICAgICAgICAgICBhdmdUaW1lPXs0fVxuICAgICAgICAvPlxuICAgIDwvZGl2PlxuKSlcbi5hZGQoJ0ludm9pY2VkJywgKCkgPT4gKFxuICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwiI2YyZjJmMlwiLCB3aWR0aDogXCIzMDBweFwiLCBwYWRkaW5nOiBcIjI0cHhcIn19PlxuICAgICAgICA8VkhDYXJkVmlzYVByb2Nlc3NcbiAgICAgICAgICAgIGF2YXRhcj1cImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS91aWZhY2VzL2ZhY2VzL3R3aXR0ZXIvZGFuY291bnNlbGwvMTI4LmpwZ1wiXG4gICAgICAgICAgICBuYW1lPVwiTWFudWVsIEJhcnJvcyBSZXllc1wiXG4gICAgICAgICAgICBjb21wYW55TmFtZT1cIkJhbmsgb2YgQW1lcmljYVwiXG4gICAgICAgICAgICBwb3NpdGlvbk5hbWU9XCJGcm9uLUVuZCBEZXZlbG9wZXJcIlxuICAgICAgICAgICAgY2l0eU5hbWU9XCJWYW5jb3V2ZXIsIEJDXCJcbiAgICAgICAgICAgIHRpbWU9ezZ9XG4gICAgICAgICAgICBjb21tZW50cz1cIjZcIlxuICAgICAgICAgICAgaW52b2ljZWRcbiAgICAgICAgICAgIG9uRXZlbnQ9eyhldmVudCkgPT4gY29uc29sZS5sb2coZXZlbnQpfVxuICAgICAgICAgICAgYXZnVGltZT17NH1cbiAgICAgICAgLz5cbiAgICA8L2Rpdj5cbikpXG4uYWRkKCdGYXZvcml0ZScsICgpID0+IChcbiAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcIiNmMmYyZjJcIiwgd2lkdGg6IFwiMzAwcHhcIiwgcGFkZGluZzogXCIyNHB4XCJ9fT5cbiAgICAgICAgPFZIQ2FyZFZpc2FQcm9jZXNzXG4gICAgICAgICAgICBhdmF0YXI9XCJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vdWlmYWNlcy9mYWNlcy90d2l0dGVyL2RhbmNvdW5zZWxsLzEyOC5qcGdcIlxuICAgICAgICAgICAgbmFtZT1cIk1hbnVlbCBCYXJyb3MgUmV5ZXNcIlxuICAgICAgICAgICAgY29tcGFueU5hbWU9XCJCYW5rIG9mIEFtZXJpY2FcIlxuICAgICAgICAgICAgcG9zaXRpb25OYW1lPVwiRnJvbi1FbmQgRGV2ZWxvcGVyXCJcbiAgICAgICAgICAgIGNpdHlOYW1lPVwiVmFuY291dmVyLCBCQ1wiXG4gICAgICAgICAgICB0aW1lPXszfVxuICAgICAgICAgICAgY29tbWVudHM9XCI2XCJcbiAgICAgICAgICAgIGZhdm9yaXRlXG4gICAgICAgICAgICBvbkV2ZW50PXsoZXZlbnQpID0+IGNvbnNvbGUubG9nKGV2ZW50KX1cbiAgICAgICAgICAgIGF2Z1RpbWU9ezR9XG4gICAgICAgIC8+XG4gICAgPC9kaXY+XG4pKVxuLmFkZCgnc2tlbGV0b24nLCAoKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCIjZjJmMmYyXCIsIHdpZHRoOiBcIjMwMHB4XCIsIHBhZGRpbmc6IFwiMjRweFwifX0+XG4gICAgICAgIDxWSENhcmRWaXNhUHJvY2Vzc1NrZWxldG9uIC8+XG4gICAgPC9kaXY+XG4pKVxuLmFkZCgnc2tlbGV0b24gbXVsdGlwbHknLCAoKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCIjZjJmMmYyXCIsIHdpZHRoOiBcIjMwMHB4XCIsIHBhZGRpbmc6IFwiMjRweFwifX0+XG4gICAgICAgIDxWSENhcmRWaXNhUHJvY2Vzc1NrZWxldG9uIHJhbmRvbS8+XG4gICAgPC9kaXY+XG4pKVxuIl19