"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)("Components|Title Description", module).add("block", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    title: "Rank your top 3 skills",
    description: "Highest proficiency level; 3 = Lowest proficiency level",
    titleVariant: "bodyplatform",
    descriptionVariant: "",
    data: {},
    onEvent: function onEvent(e) {
      return console.log(e);
    }
  }));
}).add("H1 Title default", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    title: "Rank your top 3 skills",
    description: "Highest proficiency level; 3 = Lowest proficiency level",
    titleVariant: "h1",
    descriptionVariant: "bodyweb",
    data: {},
    onEvent: function onEvent(e) {
      return console.log(e);
    }
  }));
}).add("H1 Title blue", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    title: "Rank your top 3 skills",
    titleColor: "primary-light",
    description: "Highest proficiency level; 3 = Lowest proficiency level",
    titleVariant: "h1",
    descriptionVariant: "bodyweb",
    data: {},
    onEvent: function onEvent(e) {
      return console.log(e);
    }
  }));
}).add("inline", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    title: "Phone number",
    description: "(optional)",
    inline: true,
    data: {},
    titleVariant: "subtitle3",
    descriptionVariant: "caption",
    onEvent: function onEvent(e) {
      return console.log(e);
    }
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVGl0bGVEZXNjcmlwdGlvbi9zdG9yaWVzLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImFkZCIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsInBhZGRpbmciLCJlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUVBLHVCQUFVLDhCQUFWLEVBQTBDQSxNQUExQyxFQUVDQyxHQUZELENBRUssT0FGTCxFQUVjO0FBQUEsU0FDWjtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLGVBQWUsRUFBRSxTQUFuQjtBQUE4QkMsTUFBQUEsTUFBTSxFQUFFLE9BQXRDO0FBQStDQyxNQUFBQSxPQUFPLEVBQUU7QUFBeEQ7QUFBWixLQUNFLDZCQUFDLFNBQUQ7QUFDRSxJQUFBLEtBQUssRUFBQyx3QkFEUjtBQUVFLElBQUEsV0FBVyxFQUFDLHlEQUZkO0FBR0UsSUFBQSxZQUFZLEVBQUMsY0FIZjtBQUlFLElBQUEsa0JBQWtCLEVBQUMsRUFKckI7QUFLRSxJQUFBLElBQUksRUFBRSxFQUxSO0FBTUUsSUFBQSxPQUFPLEVBQUUsaUJBQUNDLENBQUQ7QUFBQSxhQUFPQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWixDQUFQO0FBQUE7QUFOWCxJQURGLENBRFk7QUFBQSxDQUZkLEVBY0NKLEdBZEQsQ0FjSyxrQkFkTCxFQWN5QjtBQUFBLFNBQ3ZCO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsZUFBZSxFQUFFLFNBQW5CO0FBQThCQyxNQUFBQSxNQUFNLEVBQUUsT0FBdEM7QUFBK0NDLE1BQUFBLE9BQU8sRUFBRTtBQUF4RDtBQUFaLEtBQ0UsNkJBQUMsU0FBRDtBQUNFLElBQUEsS0FBSyxFQUFDLHdCQURSO0FBRUUsSUFBQSxXQUFXLEVBQUMseURBRmQ7QUFHRSxJQUFBLFlBQVksRUFBQyxJQUhmO0FBSUUsSUFBQSxrQkFBa0IsRUFBQyxTQUpyQjtBQUtFLElBQUEsSUFBSSxFQUFFLEVBTFI7QUFNRSxJQUFBLE9BQU8sRUFBRSxpQkFBQ0MsQ0FBRDtBQUFBLGFBQU9DLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaLENBQVA7QUFBQTtBQU5YLElBREYsQ0FEdUI7QUFBQSxDQWR6QixFQTBCQ0osR0ExQkQsQ0EwQkssZUExQkwsRUEwQnNCO0FBQUEsU0FDcEI7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxlQUFlLEVBQUUsU0FBbkI7QUFBOEJDLE1BQUFBLE1BQU0sRUFBRSxPQUF0QztBQUErQ0MsTUFBQUEsT0FBTyxFQUFFO0FBQXhEO0FBQVosS0FDRSw2QkFBQyxTQUFEO0FBQ0UsSUFBQSxLQUFLLEVBQUMsd0JBRFI7QUFFRSxJQUFBLFVBQVUsRUFBQyxlQUZiO0FBR0UsSUFBQSxXQUFXLEVBQUMseURBSGQ7QUFJRSxJQUFBLFlBQVksRUFBQyxJQUpmO0FBS0UsSUFBQSxrQkFBa0IsRUFBQyxTQUxyQjtBQU1FLElBQUEsSUFBSSxFQUFFLEVBTlI7QUFPRSxJQUFBLE9BQU8sRUFBRSxpQkFBQ0MsQ0FBRDtBQUFBLGFBQU9DLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaLENBQVA7QUFBQTtBQVBYLElBREYsQ0FEb0I7QUFBQSxDQTFCdEIsRUF1Q0NKLEdBdkNELENBdUNLLFFBdkNMLEVBdUNlO0FBQUEsU0FDYjtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLGVBQWUsRUFBRSxTQUFuQjtBQUE4QkMsTUFBQUEsTUFBTSxFQUFFLE9BQXRDO0FBQStDQyxNQUFBQSxPQUFPLEVBQUU7QUFBeEQ7QUFBWixLQUNFLDZCQUFDLFNBQUQ7QUFDRSxJQUFBLEtBQUssRUFBQyxjQURSO0FBRUUsSUFBQSxXQUFXLEVBQUMsWUFGZDtBQUdFLElBQUEsTUFBTSxFQUFFLElBSFY7QUFJRSxJQUFBLElBQUksRUFBRSxFQUpSO0FBS0UsSUFBQSxZQUFZLEVBQUMsV0FMZjtBQU1FLElBQUEsa0JBQWtCLEVBQUMsU0FOckI7QUFPRSxJQUFBLE9BQU8sRUFBRSxpQkFBQ0MsQ0FBRDtBQUFBLGFBQU9DLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaLENBQVA7QUFBQTtBQVBYLElBREYsQ0FEYTtBQUFBLENBdkNmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc3Rvcmllc09mIH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIjtcbmltcG9ydCBWSFRpdGxlRGVzY3JpcHRpb24gZnJvbSBcIi5cIjtcblxuc3Rvcmllc09mKFwiQ29tcG9uZW50c3xUaXRsZSBEZXNjcmlwdGlvblwiLCBtb2R1bGUpXG5cbi5hZGQoXCJibG9ja1wiLCAoKSA9PiAoXG4gIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNmMmYyZjJcIiwgaGVpZ2h0OiBcIjEwMHZoXCIsIHBhZGRpbmc6IFwiMjRweFwiIH19PlxuICAgIDxWSFRpdGxlRGVzY3JpcHRpb24gXG4gICAgICB0aXRsZT1cIlJhbmsgeW91ciB0b3AgMyBza2lsbHNcIlxuICAgICAgZGVzY3JpcHRpb249XCJIaWdoZXN0IHByb2ZpY2llbmN5IGxldmVsOyAzID0gTG93ZXN0IHByb2ZpY2llbmN5IGxldmVsXCJcbiAgICAgIHRpdGxlVmFyaWFudD1cImJvZHlwbGF0Zm9ybVwiXG4gICAgICBkZXNjcmlwdGlvblZhcmlhbnQ9XCJcIlxuICAgICAgZGF0YT17e319XG4gICAgICBvbkV2ZW50PXsoZSkgPT4gY29uc29sZS5sb2coZSl9XG4gICAgLz5cbiAgPC9kaXY+XG4pKSAgXG4uYWRkKFwiSDEgVGl0bGUgZGVmYXVsdFwiLCAoKSA9PiAoXG4gIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNmMmYyZjJcIiwgaGVpZ2h0OiBcIjEwMHZoXCIsIHBhZGRpbmc6IFwiMjRweFwiIH19PlxuICAgIDxWSFRpdGxlRGVzY3JpcHRpb24gXG4gICAgICB0aXRsZT1cIlJhbmsgeW91ciB0b3AgMyBza2lsbHNcIlxuICAgICAgZGVzY3JpcHRpb249XCJIaWdoZXN0IHByb2ZpY2llbmN5IGxldmVsOyAzID0gTG93ZXN0IHByb2ZpY2llbmN5IGxldmVsXCJcbiAgICAgIHRpdGxlVmFyaWFudD1cImgxXCJcbiAgICAgIGRlc2NyaXB0aW9uVmFyaWFudD1cImJvZHl3ZWJcIlxuICAgICAgZGF0YT17e319XG4gICAgICBvbkV2ZW50PXsoZSkgPT4gY29uc29sZS5sb2coZSl9XG4gICAgLz5cbiAgPC9kaXY+XG4pKSAgXG4uYWRkKFwiSDEgVGl0bGUgYmx1ZVwiLCAoKSA9PiAoXG4gIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNmMmYyZjJcIiwgaGVpZ2h0OiBcIjEwMHZoXCIsIHBhZGRpbmc6IFwiMjRweFwiIH19PlxuICAgIDxWSFRpdGxlRGVzY3JpcHRpb24gXG4gICAgICB0aXRsZT1cIlJhbmsgeW91ciB0b3AgMyBza2lsbHNcIlxuICAgICAgdGl0bGVDb2xvcj1cInByaW1hcnktbGlnaHRcIlxuICAgICAgZGVzY3JpcHRpb249XCJIaWdoZXN0IHByb2ZpY2llbmN5IGxldmVsOyAzID0gTG93ZXN0IHByb2ZpY2llbmN5IGxldmVsXCJcbiAgICAgIHRpdGxlVmFyaWFudD1cImgxXCJcbiAgICAgIGRlc2NyaXB0aW9uVmFyaWFudD1cImJvZHl3ZWJcIlxuICAgICAgZGF0YT17e319XG4gICAgICBvbkV2ZW50PXsoZSkgPT4gY29uc29sZS5sb2coZSl9XG4gICAgLz5cbiAgPC9kaXY+XG4pKSAgXG4uYWRkKFwiaW5saW5lXCIsICgpID0+IChcbiAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2YyZjJmMlwiLCBoZWlnaHQ6IFwiMTAwdmhcIiwgcGFkZGluZzogXCIyNHB4XCIgfX0+XG4gICAgPFZIVGl0bGVEZXNjcmlwdGlvbiBcbiAgICAgIHRpdGxlPVwiUGhvbmUgbnVtYmVyXCJcbiAgICAgIGRlc2NyaXB0aW9uPVwiKG9wdGlvbmFsKVwiXG4gICAgICBpbmxpbmU9e3RydWV9XG4gICAgICBkYXRhPXt7fX1cbiAgICAgIHRpdGxlVmFyaWFudD1cInN1YnRpdGxlM1wiXG4gICAgICBkZXNjcmlwdGlvblZhcmlhbnQ9XCJjYXB0aW9uXCJcbiAgICAgIG9uRXZlbnQ9eyhlKSA9PiBjb25zb2xlLmxvZyhlKX1cbiAgICAvPlxuICA8L2Rpdj5cbikpICAiXX0=