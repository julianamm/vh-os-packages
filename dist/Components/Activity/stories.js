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
  return _react.default.createElement(_.default, {
    activities: activities
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQWN0aXZpdHkvc3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJhY3Rpdml0aWVzIiwibW9kdWxlIiwiYWRkIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHO0FBQ2pCLGVBQWEsU0FESTtBQUVqQixVQUNFLENBQ0U7QUFDRSxZQUFRLHlCQURWO0FBRUUsYUFBUyxDQUNQO0FBQ0UsY0FBUSxlQURWO0FBRUUsY0FBUSxlQUZWO0FBR0UsY0FBUTtBQUhWLEtBRE87QUFGWCxHQURGLEVBV0U7QUFDRSxZQUFRLHlCQURWO0FBRUUsYUFBUyxDQUNQO0FBQ0UsY0FBUSxjQURWO0FBRUUsY0FBUSxlQUZWO0FBR0UsY0FBUTtBQUhWLEtBRE8sRUFNUDtBQUNFLGNBQVEsdUJBRFY7QUFFRSxjQUFRLGVBRlY7QUFHRSxjQUFRO0FBSFYsS0FOTztBQUZYLEdBWEYsRUEwQkU7QUFDRSxZQUFRLHlCQURWO0FBRUUsYUFBUyxDQUNQO0FBQ0UsY0FBUSxnQkFEVjtBQUVFLGNBQVEsZUFGVjtBQUdFLGNBQVE7QUFIVixLQURPO0FBRlgsR0ExQkY7QUFIZSxDQUFuQjtBQTJDQSx1QkFBVSxxQkFBVixFQUFpQ0MsTUFBakMsRUFDR0MsR0FESCxDQUNPLFNBRFAsRUFDa0I7QUFBQSxTQUNkLDZCQUFDLFNBQUQ7QUFBWSxJQUFBLFVBQVUsRUFBRUY7QUFBeEIsSUFEYztBQUFBLENBRGxCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc3Rvcmllc09mIH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIjtcbmltcG9ydCBWSEFjdGl2aXR5IGZyb20gXCIuXCI7XG5cbmNvbnN0IGFjdGl2aXRpZXMgPSB7XG4gIFwidG90YWxEYXlzXCI6IFwiMjEgZGF5c1wiLFxuICBcImRheXNcIjpcbiAgICBbXG4gICAgICB7XG4gICAgICAgIFwiZGF0ZVwiOiBcIjIwMTktMDEtMjRUMTc6NDI6NDEuNTg3XCIsXG4gICAgICAgIFwic3RlcHNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwic3RlcFwiOiBcIkxNSUEgQXBwcm92ZWRcIixcbiAgICAgICAgICAgIFwidXNlclwiOiBcIkVzdGhlciBGbG9yZXNcIixcbiAgICAgICAgICAgIFwidGltZVwiOiBcIjExOjUycG1cIlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJkYXRlXCI6IFwiMjAxOS0wMS0wOVQxNzo0Mjo0MS41ODdcIixcbiAgICAgICAgXCJzdGVwc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJzdGVwXCI6IFwiTE1JQSBBcHBsaWVkXCIsXG4gICAgICAgICAgICBcInVzZXJcIjogXCJFc3RoZXIgRmxvcmVzXCIsXG4gICAgICAgICAgICBcInRpbWVcIjogXCI5OjMzIHBtXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwic3RlcFwiOiBcIldvcmsgUGVybWl0IFByb2Nlc3Nlc1wiLFxuICAgICAgICAgICAgXCJ1c2VyXCI6IFwiRXN0aGVyIEZsb3Jlc1wiLFxuICAgICAgICAgICAgXCJ0aW1lXCI6IFwiMTA6MzAgYW1cIlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJkYXRlXCI6IFwiMjAxOS0wMS0wM1QxNzo0Mjo0MS41ODdcIixcbiAgICAgICAgXCJzdGVwc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJzdGVwXCI6IFwiT2ZmZXIgQWNjZXB0ZWRcIixcbiAgICAgICAgICAgIFwidXNlclwiOiBcIkVzdGhlciBGbG9yZXNcIixcbiAgICAgICAgICAgIFwidGltZVwiOiBcIjU6MDYgcG1cIlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbn1cblxuXG5zdG9yaWVzT2YoXCJDb21wb25lbnRzfEFjdGl2aXR5XCIsIG1vZHVsZSlcbiAgLmFkZChcImRlZmF1bHRcIiwgKCkgPT4gKFxuICAgIDxWSEFjdGl2aXR5IGFjdGl2aXRpZXM9e2FjdGl2aXRpZXN9XG4gICAgLz5cbiAgKSkiXX0=