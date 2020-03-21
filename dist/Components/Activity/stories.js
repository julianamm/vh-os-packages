"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var activities = {
  "totalDays": "21 days",
  "days": [{
    "date": "2019-01-24T17:42:41.587",
    "steps": [{
      "step": "LMIA Approved",
      "user": "Esther Flores",
      "time": "11:52pm"
    }]
  }, {
    "date": "2019-01-09T17:42:41.587",
    "steps": [{
      "step": "LMIA Applied",
      "user": "Esther Flores",
      "time": "9:33 pm"
    }, {
      "step": "Work Permit Processes",
      "user": "Esther Flores",
      "time": "10:30 am"
    }]
  }, {
    "date": "2019-01-03T17:42:41.587",
    "steps": [{
      "step": "Offer Accepted",
      "user": "Esther Flores",
      "time": "5:06 pm"
    }]
  }]
};
(0, _react2.storiesOf)("Components|Activity", module).add("default", function () {
  return /*#__PURE__*/_react.default.createElement(_.default, {
    activities: activities
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQWN0aXZpdHkvc3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJhY3Rpdml0aWVzIiwibW9kdWxlIiwiYWRkIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHO0FBQ2pCLGVBQWEsU0FESTtBQUVqQixVQUNFLENBQ0U7QUFDRSxZQUFRLHlCQURWO0FBRUUsYUFBUyxDQUNQO0FBQ0UsY0FBUSxlQURWO0FBRUUsY0FBUSxlQUZWO0FBR0UsY0FBUTtBQUhWLEtBRE87QUFGWCxHQURGLEVBV0U7QUFDRSxZQUFRLHlCQURWO0FBRUUsYUFBUyxDQUNQO0FBQ0UsY0FBUSxjQURWO0FBRUUsY0FBUSxlQUZWO0FBR0UsY0FBUTtBQUhWLEtBRE8sRUFNUDtBQUNFLGNBQVEsdUJBRFY7QUFFRSxjQUFRLGVBRlY7QUFHRSxjQUFRO0FBSFYsS0FOTztBQUZYLEdBWEYsRUEwQkU7QUFDRSxZQUFRLHlCQURWO0FBRUUsYUFBUyxDQUNQO0FBQ0UsY0FBUSxnQkFEVjtBQUVFLGNBQVEsZUFGVjtBQUdFLGNBQVE7QUFIVixLQURPO0FBRlgsR0ExQkY7QUFIZSxDQUFuQjtBQTJDQSx1QkFBVSxxQkFBVixFQUFpQ0MsTUFBakMsRUFDR0MsR0FESCxDQUNPLFNBRFAsRUFDa0I7QUFBQSxzQkFDZCw2QkFBQyxTQUFEO0FBQVksSUFBQSxVQUFVLEVBQUVGO0FBQXhCLElBRGM7QUFBQSxDQURsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0b3JpZXNPZiB9IGZyb20gXCJAc3Rvcnlib29rL3JlYWN0XCI7XG5pbXBvcnQgVkhBY3Rpdml0eSBmcm9tIFwiLlwiO1xuXG5jb25zdCBhY3Rpdml0aWVzID0ge1xuICBcInRvdGFsRGF5c1wiOiBcIjIxIGRheXNcIixcbiAgXCJkYXlzXCI6XG4gICAgW1xuICAgICAge1xuICAgICAgICBcImRhdGVcIjogXCIyMDE5LTAxLTI0VDE3OjQyOjQxLjU4N1wiLFxuICAgICAgICBcInN0ZXBzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInN0ZXBcIjogXCJMTUlBIEFwcHJvdmVkXCIsXG4gICAgICAgICAgICBcInVzZXJcIjogXCJFc3RoZXIgRmxvcmVzXCIsXG4gICAgICAgICAgICBcInRpbWVcIjogXCIxMTo1MnBtXCJcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiZGF0ZVwiOiBcIjIwMTktMDEtMDlUMTc6NDI6NDEuNTg3XCIsXG4gICAgICAgIFwic3RlcHNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwic3RlcFwiOiBcIkxNSUEgQXBwbGllZFwiLFxuICAgICAgICAgICAgXCJ1c2VyXCI6IFwiRXN0aGVyIEZsb3Jlc1wiLFxuICAgICAgICAgICAgXCJ0aW1lXCI6IFwiOTozMyBwbVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInN0ZXBcIjogXCJXb3JrIFBlcm1pdCBQcm9jZXNzZXNcIixcbiAgICAgICAgICAgIFwidXNlclwiOiBcIkVzdGhlciBGbG9yZXNcIixcbiAgICAgICAgICAgIFwidGltZVwiOiBcIjEwOjMwIGFtXCJcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiZGF0ZVwiOiBcIjIwMTktMDEtMDNUMTc6NDI6NDEuNTg3XCIsXG4gICAgICAgIFwic3RlcHNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwic3RlcFwiOiBcIk9mZmVyIEFjY2VwdGVkXCIsXG4gICAgICAgICAgICBcInVzZXJcIjogXCJFc3RoZXIgRmxvcmVzXCIsXG4gICAgICAgICAgICBcInRpbWVcIjogXCI1OjA2IHBtXCJcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG59XG5cblxuc3Rvcmllc09mKFwiQ29tcG9uZW50c3xBY3Rpdml0eVwiLCBtb2R1bGUpXG4gIC5hZGQoXCJkZWZhdWx0XCIsICgpID0+IChcbiAgICA8VkhBY3Rpdml0eSBhY3Rpdml0aWVzPXthY3Rpdml0aWVzfVxuICAgIC8+XG4gICkpIl19