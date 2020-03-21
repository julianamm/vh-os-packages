"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

var _skeleton = _interopRequireDefault(require("./skeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Components|Cards/Visa Process', module).add('default', function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      width: "300px",
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
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
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      width: "300px",
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
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
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      width: "300px",
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
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
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      width: "300px",
      padding: "24px"
    }
  }, _react.default.createElement(_skeleton.default, null));
}).add('skeleton multiply', function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      width: "300px",
      padding: "24px"
    }
  }, _react.default.createElement(_skeleton.default, {
    random: true
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQ2FyZHMvVmlzYVByb2Nlc3Mvc3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJhZGQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ3aWR0aCIsInBhZGRpbmciLCJldmVudCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSx1QkFBVSwrQkFBVixFQUEyQ0EsTUFBM0MsRUFFQ0MsR0FGRCxDQUVLLFNBRkwsRUFFZ0I7QUFBQSxTQUNaO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBQ0MsTUFBQUEsZUFBZSxFQUFFLFNBQWxCO0FBQTZCQyxNQUFBQSxLQUFLLEVBQUUsT0FBcEM7QUFBNkNDLE1BQUFBLE9BQU8sRUFBRTtBQUF0RDtBQUFaLEtBQ0ksNkJBQUMsU0FBRDtBQUNJLElBQUEsTUFBTSxFQUFDLG9FQURYO0FBRUksSUFBQSxJQUFJLEVBQUMscUJBRlQ7QUFHSSxJQUFBLFdBQVcsRUFBQyxpQkFIaEI7QUFJSSxJQUFBLFlBQVksRUFBQyxvQkFKakI7QUFLSSxJQUFBLFFBQVEsRUFBQyxlQUxiO0FBTUksSUFBQSxJQUFJLEVBQUUsQ0FOVjtBQU9JLElBQUEsUUFBUSxFQUFDLEdBUGI7QUFRSSxJQUFBLE9BQU8sRUFBRSxpQkFBQ0MsS0FBRDtBQUFBLGFBQVdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaLENBQVg7QUFBQSxLQVJiO0FBU0ksSUFBQSxPQUFPLEVBQUU7QUFUYixJQURKLENBRFk7QUFBQSxDQUZoQixFQWlCQ0osR0FqQkQsQ0FpQkssVUFqQkwsRUFpQmlCO0FBQUEsU0FDYjtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUNDLE1BQUFBLGVBQWUsRUFBRSxTQUFsQjtBQUE2QkMsTUFBQUEsS0FBSyxFQUFFLE9BQXBDO0FBQTZDQyxNQUFBQSxPQUFPLEVBQUU7QUFBdEQ7QUFBWixLQUNJLDZCQUFDLFNBQUQ7QUFDSSxJQUFBLE1BQU0sRUFBQyxvRUFEWDtBQUVJLElBQUEsSUFBSSxFQUFDLHFCQUZUO0FBR0ksSUFBQSxXQUFXLEVBQUMsaUJBSGhCO0FBSUksSUFBQSxZQUFZLEVBQUMsb0JBSmpCO0FBS0ksSUFBQSxRQUFRLEVBQUMsZUFMYjtBQU1JLElBQUEsSUFBSSxFQUFFLENBTlY7QUFPSSxJQUFBLFFBQVEsRUFBQyxHQVBiO0FBUUksSUFBQSxRQUFRLE1BUlo7QUFTSSxJQUFBLE9BQU8sRUFBRSxpQkFBQ0MsS0FBRDtBQUFBLGFBQVdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaLENBQVg7QUFBQSxLQVRiO0FBVUksSUFBQSxPQUFPLEVBQUU7QUFWYixJQURKLENBRGE7QUFBQSxDQWpCakIsRUFpQ0NKLEdBakNELENBaUNLLFVBakNMLEVBaUNpQjtBQUFBLFNBQ2I7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFDQyxNQUFBQSxlQUFlLEVBQUUsU0FBbEI7QUFBNkJDLE1BQUFBLEtBQUssRUFBRSxPQUFwQztBQUE2Q0MsTUFBQUEsT0FBTyxFQUFFO0FBQXREO0FBQVosS0FDSSw2QkFBQyxTQUFEO0FBQ0ksSUFBQSxNQUFNLEVBQUMsb0VBRFg7QUFFSSxJQUFBLElBQUksRUFBQyxxQkFGVDtBQUdJLElBQUEsV0FBVyxFQUFDLGlCQUhoQjtBQUlJLElBQUEsWUFBWSxFQUFDLG9CQUpqQjtBQUtJLElBQUEsUUFBUSxFQUFDLGVBTGI7QUFNSSxJQUFBLElBQUksRUFBRSxDQU5WO0FBT0ksSUFBQSxRQUFRLEVBQUMsR0FQYjtBQVFJLElBQUEsUUFBUSxNQVJaO0FBU0ksSUFBQSxPQUFPLEVBQUUsaUJBQUNDLEtBQUQ7QUFBQSxhQUFXQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWixDQUFYO0FBQUEsS0FUYjtBQVVJLElBQUEsT0FBTyxFQUFFO0FBVmIsSUFESixDQURhO0FBQUEsQ0FqQ2pCLEVBaURDSixHQWpERCxDQWlESyxVQWpETCxFQWlEaUI7QUFBQSxTQUNiO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBQ0MsTUFBQUEsZUFBZSxFQUFFLFNBQWxCO0FBQTZCQyxNQUFBQSxLQUFLLEVBQUUsT0FBcEM7QUFBNkNDLE1BQUFBLE9BQU8sRUFBRTtBQUF0RDtBQUFaLEtBQ0ksNkJBQUMsaUJBQUQsT0FESixDQURhO0FBQUEsQ0FqRGpCLEVBc0RDSCxHQXRERCxDQXNESyxtQkF0REwsRUFzRDBCO0FBQUEsU0FDdEI7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFDQyxNQUFBQSxlQUFlLEVBQUUsU0FBbEI7QUFBNkJDLE1BQUFBLEtBQUssRUFBRSxPQUFwQztBQUE2Q0MsTUFBQUEsT0FBTyxFQUFFO0FBQXREO0FBQVosS0FDSSw2QkFBQyxpQkFBRDtBQUEyQixJQUFBLE1BQU07QUFBakMsSUFESixDQURzQjtBQUFBLENBdEQxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHN0b3JpZXNPZiB9IGZyb20gJ0BzdG9yeWJvb2svcmVhY3QnXG5pbXBvcnQgVkhDYXJkVmlzYVByb2Nlc3MgZnJvbSAnLidcbmltcG9ydCBWSENhcmRWaXNhUHJvY2Vzc1NrZWxldG9uIGZyb20gJy4vc2tlbGV0b24nXG5cbnN0b3JpZXNPZignQ29tcG9uZW50c3xDYXJkcy9WaXNhIFByb2Nlc3MnLCBtb2R1bGUpXG5cbi5hZGQoJ2RlZmF1bHQnLCAoKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCIjZjJmMmYyXCIsIHdpZHRoOiBcIjMwMHB4XCIsIHBhZGRpbmc6IFwiMjRweFwifX0+XG4gICAgICAgIDxWSENhcmRWaXNhUHJvY2Vzc1xuICAgICAgICAgICAgYXZhdGFyPVwiaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL3VpZmFjZXMvZmFjZXMvdHdpdHRlci9kYW5jb3Vuc2VsbC8xMjguanBnXCJcbiAgICAgICAgICAgIG5hbWU9XCJNYW51ZWwgQmFycm9zIFJleWVzXCJcbiAgICAgICAgICAgIGNvbXBhbnlOYW1lPVwiQmFuayBvZiBBbWVyaWNhXCJcbiAgICAgICAgICAgIHBvc2l0aW9uTmFtZT1cIkZyb24tRW5kIERldmVsb3BlclwiXG4gICAgICAgICAgICBjaXR5TmFtZT1cIlZhbmNvdXZlciwgQkNcIlxuICAgICAgICAgICAgdGltZT17Nn1cbiAgICAgICAgICAgIGNvbW1lbnRzPVwiNlwiXG4gICAgICAgICAgICBvbkV2ZW50PXsoZXZlbnQpID0+IGNvbnNvbGUubG9nKGV2ZW50KX1cbiAgICAgICAgICAgIGF2Z1RpbWU9ezR9XG4gICAgICAgIC8+XG4gICAgPC9kaXY+XG4pKVxuLmFkZCgnSW52b2ljZWQnLCAoKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCIjZjJmMmYyXCIsIHdpZHRoOiBcIjMwMHB4XCIsIHBhZGRpbmc6IFwiMjRweFwifX0+XG4gICAgICAgIDxWSENhcmRWaXNhUHJvY2Vzc1xuICAgICAgICAgICAgYXZhdGFyPVwiaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL3VpZmFjZXMvZmFjZXMvdHdpdHRlci9kYW5jb3Vuc2VsbC8xMjguanBnXCJcbiAgICAgICAgICAgIG5hbWU9XCJNYW51ZWwgQmFycm9zIFJleWVzXCJcbiAgICAgICAgICAgIGNvbXBhbnlOYW1lPVwiQmFuayBvZiBBbWVyaWNhXCJcbiAgICAgICAgICAgIHBvc2l0aW9uTmFtZT1cIkZyb24tRW5kIERldmVsb3BlclwiXG4gICAgICAgICAgICBjaXR5TmFtZT1cIlZhbmNvdXZlciwgQkNcIlxuICAgICAgICAgICAgdGltZT17Nn1cbiAgICAgICAgICAgIGNvbW1lbnRzPVwiNlwiXG4gICAgICAgICAgICBpbnZvaWNlZFxuICAgICAgICAgICAgb25FdmVudD17KGV2ZW50KSA9PiBjb25zb2xlLmxvZyhldmVudCl9XG4gICAgICAgICAgICBhdmdUaW1lPXs0fVxuICAgICAgICAvPlxuICAgIDwvZGl2PlxuKSlcbi5hZGQoJ0Zhdm9yaXRlJywgKCkgPT4gKFxuICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwiI2YyZjJmMlwiLCB3aWR0aDogXCIzMDBweFwiLCBwYWRkaW5nOiBcIjI0cHhcIn19PlxuICAgICAgICA8VkhDYXJkVmlzYVByb2Nlc3NcbiAgICAgICAgICAgIGF2YXRhcj1cImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS91aWZhY2VzL2ZhY2VzL3R3aXR0ZXIvZGFuY291bnNlbGwvMTI4LmpwZ1wiXG4gICAgICAgICAgICBuYW1lPVwiTWFudWVsIEJhcnJvcyBSZXllc1wiXG4gICAgICAgICAgICBjb21wYW55TmFtZT1cIkJhbmsgb2YgQW1lcmljYVwiXG4gICAgICAgICAgICBwb3NpdGlvbk5hbWU9XCJGcm9uLUVuZCBEZXZlbG9wZXJcIlxuICAgICAgICAgICAgY2l0eU5hbWU9XCJWYW5jb3V2ZXIsIEJDXCJcbiAgICAgICAgICAgIHRpbWU9ezN9XG4gICAgICAgICAgICBjb21tZW50cz1cIjZcIlxuICAgICAgICAgICAgZmF2b3JpdGVcbiAgICAgICAgICAgIG9uRXZlbnQ9eyhldmVudCkgPT4gY29uc29sZS5sb2coZXZlbnQpfVxuICAgICAgICAgICAgYXZnVGltZT17NH1cbiAgICAgICAgLz5cbiAgICA8L2Rpdj5cbikpXG4uYWRkKCdza2VsZXRvbicsICgpID0+IChcbiAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcIiNmMmYyZjJcIiwgd2lkdGg6IFwiMzAwcHhcIiwgcGFkZGluZzogXCIyNHB4XCJ9fT5cbiAgICAgICAgPFZIQ2FyZFZpc2FQcm9jZXNzU2tlbGV0b24gLz5cbiAgICA8L2Rpdj5cbikpXG4uYWRkKCdza2VsZXRvbiBtdWx0aXBseScsICgpID0+IChcbiAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcIiNmMmYyZjJcIiwgd2lkdGg6IFwiMzAwcHhcIiwgcGFkZGluZzogXCIyNHB4XCJ9fT5cbiAgICAgICAgPFZIQ2FyZFZpc2FQcm9jZXNzU2tlbGV0b24gcmFuZG9tLz5cbiAgICA8L2Rpdj5cbikpXG4iXX0=