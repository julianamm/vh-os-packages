"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)("Components|Title Description", module).add("block", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
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
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
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
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
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
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVGl0bGVEZXNjcmlwdGlvbi9zdG9yaWVzLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImFkZCIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsInBhZGRpbmciLCJlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUVBLHVCQUFVLDhCQUFWLEVBQTBDQSxNQUExQyxFQUVDQyxHQUZELENBRUssT0FGTCxFQUVjO0FBQUEsc0JBQ1o7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxlQUFlLEVBQUUsU0FBbkI7QUFBOEJDLE1BQUFBLE1BQU0sRUFBRSxPQUF0QztBQUErQ0MsTUFBQUEsT0FBTyxFQUFFO0FBQXhEO0FBQVosa0JBQ0UsNkJBQUMsU0FBRDtBQUNFLElBQUEsS0FBSyxFQUFDLHdCQURSO0FBRUUsSUFBQSxXQUFXLEVBQUMseURBRmQ7QUFHRSxJQUFBLFlBQVksRUFBQyxjQUhmO0FBSUUsSUFBQSxrQkFBa0IsRUFBQyxFQUpyQjtBQUtFLElBQUEsSUFBSSxFQUFFLEVBTFI7QUFNRSxJQUFBLE9BQU8sRUFBRSxpQkFBQ0MsQ0FBRDtBQUFBLGFBQU9DLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaLENBQVA7QUFBQTtBQU5YLElBREYsQ0FEWTtBQUFBLENBRmQsRUFjQ0osR0FkRCxDQWNLLGtCQWRMLEVBY3lCO0FBQUEsc0JBQ3ZCO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsZUFBZSxFQUFFLFNBQW5CO0FBQThCQyxNQUFBQSxNQUFNLEVBQUUsT0FBdEM7QUFBK0NDLE1BQUFBLE9BQU8sRUFBRTtBQUF4RDtBQUFaLGtCQUNFLDZCQUFDLFNBQUQ7QUFDRSxJQUFBLEtBQUssRUFBQyx3QkFEUjtBQUVFLElBQUEsV0FBVyxFQUFDLHlEQUZkO0FBR0UsSUFBQSxZQUFZLEVBQUMsSUFIZjtBQUlFLElBQUEsa0JBQWtCLEVBQUMsU0FKckI7QUFLRSxJQUFBLElBQUksRUFBRSxFQUxSO0FBTUUsSUFBQSxPQUFPLEVBQUUsaUJBQUNDLENBQUQ7QUFBQSxhQUFPQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWixDQUFQO0FBQUE7QUFOWCxJQURGLENBRHVCO0FBQUEsQ0FkekIsRUEwQkNKLEdBMUJELENBMEJLLGVBMUJMLEVBMEJzQjtBQUFBLHNCQUNwQjtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLGVBQWUsRUFBRSxTQUFuQjtBQUE4QkMsTUFBQUEsTUFBTSxFQUFFLE9BQXRDO0FBQStDQyxNQUFBQSxPQUFPLEVBQUU7QUFBeEQ7QUFBWixrQkFDRSw2QkFBQyxTQUFEO0FBQ0UsSUFBQSxLQUFLLEVBQUMsd0JBRFI7QUFFRSxJQUFBLFVBQVUsRUFBQyxlQUZiO0FBR0UsSUFBQSxXQUFXLEVBQUMseURBSGQ7QUFJRSxJQUFBLFlBQVksRUFBQyxJQUpmO0FBS0UsSUFBQSxrQkFBa0IsRUFBQyxTQUxyQjtBQU1FLElBQUEsSUFBSSxFQUFFLEVBTlI7QUFPRSxJQUFBLE9BQU8sRUFBRSxpQkFBQ0MsQ0FBRDtBQUFBLGFBQU9DLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaLENBQVA7QUFBQTtBQVBYLElBREYsQ0FEb0I7QUFBQSxDQTFCdEIsRUF1Q0NKLEdBdkNELENBdUNLLFFBdkNMLEVBdUNlO0FBQUEsc0JBQ2I7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxlQUFlLEVBQUUsU0FBbkI7QUFBOEJDLE1BQUFBLE1BQU0sRUFBRSxPQUF0QztBQUErQ0MsTUFBQUEsT0FBTyxFQUFFO0FBQXhEO0FBQVosa0JBQ0UsNkJBQUMsU0FBRDtBQUNFLElBQUEsS0FBSyxFQUFDLGNBRFI7QUFFRSxJQUFBLFdBQVcsRUFBQyxZQUZkO0FBR0UsSUFBQSxNQUFNLEVBQUUsSUFIVjtBQUlFLElBQUEsSUFBSSxFQUFFLEVBSlI7QUFLRSxJQUFBLFlBQVksRUFBQyxXQUxmO0FBTUUsSUFBQSxrQkFBa0IsRUFBQyxTQU5yQjtBQU9FLElBQUEsT0FBTyxFQUFFLGlCQUFDQyxDQUFEO0FBQUEsYUFBT0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQVosQ0FBUDtBQUFBO0FBUFgsSUFERixDQURhO0FBQUEsQ0F2Q2YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdG9yaWVzT2YgfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiO1xuaW1wb3J0IFZIVGl0bGVEZXNjcmlwdGlvbiBmcm9tIFwiLlwiO1xuXG5zdG9yaWVzT2YoXCJDb21wb25lbnRzfFRpdGxlIERlc2NyaXB0aW9uXCIsIG1vZHVsZSlcblxuLmFkZChcImJsb2NrXCIsICgpID0+IChcbiAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2YyZjJmMlwiLCBoZWlnaHQ6IFwiMTAwdmhcIiwgcGFkZGluZzogXCIyNHB4XCIgfX0+XG4gICAgPFZIVGl0bGVEZXNjcmlwdGlvbiBcbiAgICAgIHRpdGxlPVwiUmFuayB5b3VyIHRvcCAzIHNraWxsc1wiXG4gICAgICBkZXNjcmlwdGlvbj1cIkhpZ2hlc3QgcHJvZmljaWVuY3kgbGV2ZWw7IDMgPSBMb3dlc3QgcHJvZmljaWVuY3kgbGV2ZWxcIlxuICAgICAgdGl0bGVWYXJpYW50PVwiYm9keXBsYXRmb3JtXCJcbiAgICAgIGRlc2NyaXB0aW9uVmFyaWFudD1cIlwiXG4gICAgICBkYXRhPXt7fX1cbiAgICAgIG9uRXZlbnQ9eyhlKSA9PiBjb25zb2xlLmxvZyhlKX1cbiAgICAvPlxuICA8L2Rpdj5cbikpICBcbi5hZGQoXCJIMSBUaXRsZSBkZWZhdWx0XCIsICgpID0+IChcbiAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2YyZjJmMlwiLCBoZWlnaHQ6IFwiMTAwdmhcIiwgcGFkZGluZzogXCIyNHB4XCIgfX0+XG4gICAgPFZIVGl0bGVEZXNjcmlwdGlvbiBcbiAgICAgIHRpdGxlPVwiUmFuayB5b3VyIHRvcCAzIHNraWxsc1wiXG4gICAgICBkZXNjcmlwdGlvbj1cIkhpZ2hlc3QgcHJvZmljaWVuY3kgbGV2ZWw7IDMgPSBMb3dlc3QgcHJvZmljaWVuY3kgbGV2ZWxcIlxuICAgICAgdGl0bGVWYXJpYW50PVwiaDFcIlxuICAgICAgZGVzY3JpcHRpb25WYXJpYW50PVwiYm9keXdlYlwiXG4gICAgICBkYXRhPXt7fX1cbiAgICAgIG9uRXZlbnQ9eyhlKSA9PiBjb25zb2xlLmxvZyhlKX1cbiAgICAvPlxuICA8L2Rpdj5cbikpICBcbi5hZGQoXCJIMSBUaXRsZSBibHVlXCIsICgpID0+IChcbiAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2YyZjJmMlwiLCBoZWlnaHQ6IFwiMTAwdmhcIiwgcGFkZGluZzogXCIyNHB4XCIgfX0+XG4gICAgPFZIVGl0bGVEZXNjcmlwdGlvbiBcbiAgICAgIHRpdGxlPVwiUmFuayB5b3VyIHRvcCAzIHNraWxsc1wiXG4gICAgICB0aXRsZUNvbG9yPVwicHJpbWFyeS1saWdodFwiXG4gICAgICBkZXNjcmlwdGlvbj1cIkhpZ2hlc3QgcHJvZmljaWVuY3kgbGV2ZWw7IDMgPSBMb3dlc3QgcHJvZmljaWVuY3kgbGV2ZWxcIlxuICAgICAgdGl0bGVWYXJpYW50PVwiaDFcIlxuICAgICAgZGVzY3JpcHRpb25WYXJpYW50PVwiYm9keXdlYlwiXG4gICAgICBkYXRhPXt7fX1cbiAgICAgIG9uRXZlbnQ9eyhlKSA9PiBjb25zb2xlLmxvZyhlKX1cbiAgICAvPlxuICA8L2Rpdj5cbikpICBcbi5hZGQoXCJpbmxpbmVcIiwgKCkgPT4gKFxuICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjZjJmMmYyXCIsIGhlaWdodDogXCIxMDB2aFwiLCBwYWRkaW5nOiBcIjI0cHhcIiB9fT5cbiAgICA8VkhUaXRsZURlc2NyaXB0aW9uIFxuICAgICAgdGl0bGU9XCJQaG9uZSBudW1iZXJcIlxuICAgICAgZGVzY3JpcHRpb249XCIob3B0aW9uYWwpXCJcbiAgICAgIGlubGluZT17dHJ1ZX1cbiAgICAgIGRhdGE9e3t9fVxuICAgICAgdGl0bGVWYXJpYW50PVwic3VidGl0bGUzXCJcbiAgICAgIGRlc2NyaXB0aW9uVmFyaWFudD1cImNhcHRpb25cIlxuICAgICAgb25FdmVudD17KGUpID0+IGNvbnNvbGUubG9nKGUpfVxuICAgIC8+XG4gIDwvZGl2PlxuKSkgICJdfQ==