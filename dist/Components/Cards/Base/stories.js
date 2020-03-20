"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)("Components|Cards/Base", module).add("default", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, _react.default.createElement("div", {
    style: {
      width: "270px",
      height: "170px"
    }
  }, _react.default.createElement(_.default, null, _react.default.createElement("div", null, "VHCardBase Base"))));
}).add("no hover", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, _react.default.createElement("div", {
    style: {
      width: "270px",
      height: "170px"
    }
  }, _react.default.createElement(_.default, {
    noHover: true
  }, _react.default.createElement("div", null, "VHCardBase Base"))));
}).add("no border", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, _react.default.createElement("div", {
    style: {
      width: "270px",
      height: "170px"
    }
  }, _react.default.createElement(_.default, {
    noBorder: true
  }, _react.default.createElement("div", null, "VHCardBase Base"))));
}).add("favorite", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, _react.default.createElement("div", {
    style: {
      width: "270px",
      height: "170px"
    }
  }, _react.default.createElement(_.default, {
    favorite: true
  }, _react.default.createElement("div", null, "VHCardBase Base"))));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQ2FyZHMvQmFzZS9zdG9yaWVzLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImFkZCIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsInBhZGRpbmciLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUVBLHVCQUFVLHVCQUFWLEVBQW1DQSxNQUFuQyxFQUVDQyxHQUZELENBRUssU0FGTCxFQUVnQjtBQUFBLFNBQ2Q7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxlQUFlLEVBQUUsU0FBbkI7QUFBOEJDLE1BQUFBLE1BQU0sRUFBRSxPQUF0QztBQUErQ0MsTUFBQUEsT0FBTyxFQUFFO0FBQXhEO0FBQVosS0FDRTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxPQUFUO0FBQWtCRixNQUFBQSxNQUFNLEVBQUU7QUFBMUI7QUFBWixLQUNFLDZCQUFDLFNBQUQsUUFDRSw0REFERixDQURGLENBREYsQ0FEYztBQUFBLENBRmhCLEVBWUNGLEdBWkQsQ0FZSyxVQVpMLEVBWWlCO0FBQUEsU0FDZjtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLGVBQWUsRUFBRSxTQUFuQjtBQUE4QkMsTUFBQUEsTUFBTSxFQUFFLE9BQXRDO0FBQStDQyxNQUFBQSxPQUFPLEVBQUU7QUFBeEQ7QUFBWixLQUNFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLE9BQVQ7QUFBa0JGLE1BQUFBLE1BQU0sRUFBRTtBQUExQjtBQUFaLEtBQ0UsNkJBQUMsU0FBRDtBQUFZLElBQUEsT0FBTztBQUFuQixLQUNFLDREQURGLENBREYsQ0FERixDQURlO0FBQUEsQ0FaakIsRUFzQkNGLEdBdEJELENBc0JLLFdBdEJMLEVBc0JrQjtBQUFBLFNBQ2hCO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsZUFBZSxFQUFFLFNBQW5CO0FBQThCQyxNQUFBQSxNQUFNLEVBQUUsT0FBdEM7QUFBK0NDLE1BQUFBLE9BQU8sRUFBRTtBQUF4RDtBQUFaLEtBQ0U7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsT0FBVDtBQUFrQkYsTUFBQUEsTUFBTSxFQUFFO0FBQTFCO0FBQVosS0FDRSw2QkFBQyxTQUFEO0FBQVksSUFBQSxRQUFRO0FBQXBCLEtBQ0UsNERBREYsQ0FERixDQURGLENBRGdCO0FBQUEsQ0F0QmxCLEVBZ0NDRixHQWhDRCxDQWdDSyxVQWhDTCxFQWdDaUI7QUFBQSxTQUNmO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsZUFBZSxFQUFFLFNBQW5CO0FBQThCQyxNQUFBQSxNQUFNLEVBQUUsT0FBdEM7QUFBK0NDLE1BQUFBLE9BQU8sRUFBRTtBQUF4RDtBQUFaLEtBQ0U7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsT0FBVDtBQUFrQkYsTUFBQUEsTUFBTSxFQUFFO0FBQTFCO0FBQVosS0FDRSw2QkFBQyxTQUFEO0FBQVksSUFBQSxRQUFRO0FBQXBCLEtBQ0UsNERBREYsQ0FERixDQURGLENBRGU7QUFBQSxDQWhDakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdG9yaWVzT2YgfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiO1xuaW1wb3J0IFZIQ2FyZEJhc2UgZnJvbSBcIi5cIjtcblxuc3Rvcmllc09mKFwiQ29tcG9uZW50c3xDYXJkcy9CYXNlXCIsIG1vZHVsZSlcblxuLmFkZChcImRlZmF1bHRcIiwgKCkgPT4gKFxuICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjZjJmMmYyXCIsIGhlaWdodDogXCIxMDB2aFwiLCBwYWRkaW5nOiBcIjI0cHhcIiB9fT5cbiAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjI3MHB4XCIsIGhlaWdodDogXCIxNzBweFwiIH19PlxuICAgICAgPFZIQ2FyZEJhc2U+XG4gICAgICAgIDxkaXY+VkhDYXJkQmFzZSBCYXNlPC9kaXY+XG4gICAgICA8L1ZIQ2FyZEJhc2U+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKSkgIFxuXG4uYWRkKFwibm8gaG92ZXJcIiwgKCkgPT4gKFxuICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjZjJmMmYyXCIsIGhlaWdodDogXCIxMDB2aFwiLCBwYWRkaW5nOiBcIjI0cHhcIiB9fT5cbiAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjI3MHB4XCIsIGhlaWdodDogXCIxNzBweFwiIH19PlxuICAgICAgPFZIQ2FyZEJhc2Ugbm9Ib3Zlcj5cbiAgICAgICAgPGRpdj5WSENhcmRCYXNlIEJhc2U8L2Rpdj5cbiAgICAgIDwvVkhDYXJkQmFzZT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pKVxuXG4uYWRkKFwibm8gYm9yZGVyXCIsICgpID0+IChcbiAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2YyZjJmMlwiLCBoZWlnaHQ6IFwiMTAwdmhcIiwgcGFkZGluZzogXCIyNHB4XCIgfX0+XG4gICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIyNzBweFwiLCBoZWlnaHQ6IFwiMTcwcHhcIiB9fT5cbiAgICAgIDxWSENhcmRCYXNlIG5vQm9yZGVyPlxuICAgICAgICA8ZGl2PlZIQ2FyZEJhc2UgQmFzZTwvZGl2PlxuICAgICAgPC9WSENhcmRCYXNlPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbikpXG5cbi5hZGQoXCJmYXZvcml0ZVwiLCAoKSA9PiAoXG4gIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNmMmYyZjJcIiwgaGVpZ2h0OiBcIjEwMHZoXCIsIHBhZGRpbmc6IFwiMjRweFwiIH19PlxuICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMjcwcHhcIiwgaGVpZ2h0OiBcIjE3MHB4XCIgfX0+XG4gICAgICA8VkhDYXJkQmFzZSBmYXZvcml0ZT5cbiAgICAgICAgPGRpdj5WSENhcmRCYXNlIEJhc2U8L2Rpdj5cbiAgICAgIDwvVkhDYXJkQmFzZT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pKTtcbiJdfQ==