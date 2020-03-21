"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)("Components|Cards/Base", module).add("default", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "270px",
      height: "170px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, null, /*#__PURE__*/_react.default.createElement("div", null, "VHCardBase Base"))));
}).add("no hover", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "270px",
      height: "170px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    noHover: true
  }, /*#__PURE__*/_react.default.createElement("div", null, "VHCardBase Base"))));
}).add("no border", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "270px",
      height: "170px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    noBorder: true
  }, /*#__PURE__*/_react.default.createElement("div", null, "VHCardBase Base"))));
}).add("favorite", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "270px",
      height: "170px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    favorite: true
  }, /*#__PURE__*/_react.default.createElement("div", null, "VHCardBase Base"))));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQ2FyZHMvQmFzZS9zdG9yaWVzLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImFkZCIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsInBhZGRpbmciLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUVBLHVCQUFVLHVCQUFWLEVBQW1DQSxNQUFuQyxFQUVDQyxHQUZELENBRUssU0FGTCxFQUVnQjtBQUFBLHNCQUNkO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsZUFBZSxFQUFFLFNBQW5CO0FBQThCQyxNQUFBQSxNQUFNLEVBQUUsT0FBdEM7QUFBK0NDLE1BQUFBLE9BQU8sRUFBRTtBQUF4RDtBQUFaLGtCQUNFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLE9BQVQ7QUFBa0JGLE1BQUFBLE1BQU0sRUFBRTtBQUExQjtBQUFaLGtCQUNFLDZCQUFDLFNBQUQscUJBQ0UsNERBREYsQ0FERixDQURGLENBRGM7QUFBQSxDQUZoQixFQVlDRixHQVpELENBWUssVUFaTCxFQVlpQjtBQUFBLHNCQUNmO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsZUFBZSxFQUFFLFNBQW5CO0FBQThCQyxNQUFBQSxNQUFNLEVBQUUsT0FBdEM7QUFBK0NDLE1BQUFBLE9BQU8sRUFBRTtBQUF4RDtBQUFaLGtCQUNFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLE9BQVQ7QUFBa0JGLE1BQUFBLE1BQU0sRUFBRTtBQUExQjtBQUFaLGtCQUNFLDZCQUFDLFNBQUQ7QUFBWSxJQUFBLE9BQU87QUFBbkIsa0JBQ0UsNERBREYsQ0FERixDQURGLENBRGU7QUFBQSxDQVpqQixFQXNCQ0YsR0F0QkQsQ0FzQkssV0F0QkwsRUFzQmtCO0FBQUEsc0JBQ2hCO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsZUFBZSxFQUFFLFNBQW5CO0FBQThCQyxNQUFBQSxNQUFNLEVBQUUsT0FBdEM7QUFBK0NDLE1BQUFBLE9BQU8sRUFBRTtBQUF4RDtBQUFaLGtCQUNFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLE9BQVQ7QUFBa0JGLE1BQUFBLE1BQU0sRUFBRTtBQUExQjtBQUFaLGtCQUNFLDZCQUFDLFNBQUQ7QUFBWSxJQUFBLFFBQVE7QUFBcEIsa0JBQ0UsNERBREYsQ0FERixDQURGLENBRGdCO0FBQUEsQ0F0QmxCLEVBZ0NDRixHQWhDRCxDQWdDSyxVQWhDTCxFQWdDaUI7QUFBQSxzQkFDZjtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLGVBQWUsRUFBRSxTQUFuQjtBQUE4QkMsTUFBQUEsTUFBTSxFQUFFLE9BQXRDO0FBQStDQyxNQUFBQSxPQUFPLEVBQUU7QUFBeEQ7QUFBWixrQkFDRTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxPQUFUO0FBQWtCRixNQUFBQSxNQUFNLEVBQUU7QUFBMUI7QUFBWixrQkFDRSw2QkFBQyxTQUFEO0FBQVksSUFBQSxRQUFRO0FBQXBCLGtCQUNFLDREQURGLENBREYsQ0FERixDQURlO0FBQUEsQ0FoQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc3Rvcmllc09mIH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIjtcbmltcG9ydCBWSENhcmRCYXNlIGZyb20gXCIuXCI7XG5cbnN0b3JpZXNPZihcIkNvbXBvbmVudHN8Q2FyZHMvQmFzZVwiLCBtb2R1bGUpXG5cbi5hZGQoXCJkZWZhdWx0XCIsICgpID0+IChcbiAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2YyZjJmMlwiLCBoZWlnaHQ6IFwiMTAwdmhcIiwgcGFkZGluZzogXCIyNHB4XCIgfX0+XG4gICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIyNzBweFwiLCBoZWlnaHQ6IFwiMTcwcHhcIiB9fT5cbiAgICAgIDxWSENhcmRCYXNlPlxuICAgICAgICA8ZGl2PlZIQ2FyZEJhc2UgQmFzZTwvZGl2PlxuICAgICAgPC9WSENhcmRCYXNlPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbikpICBcblxuLmFkZChcIm5vIGhvdmVyXCIsICgpID0+IChcbiAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2YyZjJmMlwiLCBoZWlnaHQ6IFwiMTAwdmhcIiwgcGFkZGluZzogXCIyNHB4XCIgfX0+XG4gICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIyNzBweFwiLCBoZWlnaHQ6IFwiMTcwcHhcIiB9fT5cbiAgICAgIDxWSENhcmRCYXNlIG5vSG92ZXI+XG4gICAgICAgIDxkaXY+VkhDYXJkQmFzZSBCYXNlPC9kaXY+XG4gICAgICA8L1ZIQ2FyZEJhc2U+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKSlcblxuLmFkZChcIm5vIGJvcmRlclwiLCAoKSA9PiAoXG4gIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNmMmYyZjJcIiwgaGVpZ2h0OiBcIjEwMHZoXCIsIHBhZGRpbmc6IFwiMjRweFwiIH19PlxuICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMjcwcHhcIiwgaGVpZ2h0OiBcIjE3MHB4XCIgfX0+XG4gICAgICA8VkhDYXJkQmFzZSBub0JvcmRlcj5cbiAgICAgICAgPGRpdj5WSENhcmRCYXNlIEJhc2U8L2Rpdj5cbiAgICAgIDwvVkhDYXJkQmFzZT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pKVxuXG4uYWRkKFwiZmF2b3JpdGVcIiwgKCkgPT4gKFxuICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjZjJmMmYyXCIsIGhlaWdodDogXCIxMDB2aFwiLCBwYWRkaW5nOiBcIjI0cHhcIiB9fT5cbiAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjI3MHB4XCIsIGhlaWdodDogXCIxNzBweFwiIH19PlxuICAgICAgPFZIQ2FyZEJhc2UgZmF2b3JpdGU+XG4gICAgICAgIDxkaXY+VkhDYXJkQmFzZSBCYXNlPC9kaXY+XG4gICAgICA8L1ZIQ2FyZEJhc2U+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKSk7XG4iXX0=