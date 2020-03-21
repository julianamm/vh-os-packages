"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Colors = _interopRequireDefault(require("../../Colors"));

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Hyperlinks|Links', module).add('xs', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    to: "#",
    xs: true,
    label: "VH link"
  }));
}).add('sm', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    to: "#",
    sm: true,
    label: "VH link"
  }));
}).add('lg', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    to: "#",
    lg: true,
    label: "VH link"
  }));
}).add('reverse', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '200px',
      height: '200px',
      backgroundColor: _Colors.default["primary-dark"],
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    reverse: true,
    to: "#",
    lg: true,
    label: "VH link reverse"
  }));
}).add('noUnderscore', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '200px',
      height: '200px',
      backgroundColor: _Colors.default["primary-dark"],
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    reverse: true,
    to: "#",
    lg: true,
    label: "VH link reverse",
    noUnderscore: true
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0h5cGVybGlua3MvTGlua3Mvc3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJhZGQiLCJwYWRkaW5nIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJDb2xvciJdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLHVCQUFVLGtCQUFWLEVBQThCQSxNQUE5QixFQUNHQyxHQURILENBQ08sSUFEUCxFQUNhO0FBQUEsc0JBQ1Q7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBWDtBQUFaLGtCQUNFLDZCQUFDLFNBQUQ7QUFBUSxJQUFBLEVBQUUsRUFBRSxHQUFaO0FBQWlCLElBQUEsRUFBRSxNQUFuQjtBQUFvQixJQUFBLEtBQUssRUFBQztBQUExQixJQURGLENBRFM7QUFBQSxDQURiLEVBTUdELEdBTkgsQ0FNTyxJQU5QLEVBTWE7QUFBQSxzQkFDVDtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYO0FBQVosa0JBQ0UsNkJBQUMsU0FBRDtBQUFRLElBQUEsRUFBRSxFQUFFLEdBQVo7QUFBaUIsSUFBQSxFQUFFLE1BQW5CO0FBQW9CLElBQUEsS0FBSyxFQUFDO0FBQTFCLElBREYsQ0FEUztBQUFBLENBTmIsRUFZR0QsR0FaSCxDQVlPLElBWlAsRUFZYTtBQUFBLHNCQUNUO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsT0FBTyxFQUFFO0FBQVg7QUFBWixrQkFDRSw2QkFBQyxTQUFEO0FBQVEsSUFBQSxFQUFFLEVBQUUsR0FBWjtBQUFpQixJQUFBLEVBQUUsTUFBbkI7QUFBb0IsSUFBQSxLQUFLLEVBQUM7QUFBMUIsSUFERixDQURTO0FBQUEsQ0FaYixFQWtCR0QsR0FsQkgsQ0FrQk8sU0FsQlAsRUFrQmtCO0FBQUEsc0JBQ2Q7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFRSxNQUFBQSxLQUFLLEVBQUUsT0FBVDtBQUFrQkMsTUFBQUEsTUFBTSxFQUFFLE9BQTFCO0FBQW1DQyxNQUFBQSxlQUFlLEVBQUVDLGdCQUFNLGNBQU4sQ0FBcEQ7QUFBMkVKLE1BQUFBLE9BQU8sRUFBRTtBQUFwRjtBQUFaLGtCQUNFLDZCQUFDLFNBQUQ7QUFBUSxJQUFBLE9BQU8sTUFBZjtBQUFnQixJQUFBLEVBQUUsRUFBRSxHQUFwQjtBQUF5QixJQUFBLEVBQUUsTUFBM0I7QUFBNEIsSUFBQSxLQUFLLEVBQUM7QUFBbEMsSUFERixDQURjO0FBQUEsQ0FsQmxCLEVBd0JHRCxHQXhCSCxDQXdCTyxjQXhCUCxFQXdCdUI7QUFBQSxzQkFDbkI7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFRSxNQUFBQSxLQUFLLEVBQUUsT0FBVDtBQUFrQkMsTUFBQUEsTUFBTSxFQUFFLE9BQTFCO0FBQW1DQyxNQUFBQSxlQUFlLEVBQUVDLGdCQUFNLGNBQU4sQ0FBcEQ7QUFBMkVKLE1BQUFBLE9BQU8sRUFBRTtBQUFwRjtBQUFaLGtCQUNFLDZCQUFDLFNBQUQ7QUFBUSxJQUFBLE9BQU8sTUFBZjtBQUFnQixJQUFBLEVBQUUsRUFBRSxHQUFwQjtBQUF5QixJQUFBLEVBQUUsTUFBM0I7QUFBNEIsSUFBQSxLQUFLLEVBQUMsaUJBQWxDO0FBQW9ELElBQUEsWUFBWTtBQUFoRSxJQURGLENBRG1CO0FBQUEsQ0F4QnZCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc3Rvcmllc09mIH0gZnJvbSAnQHN0b3J5Ym9vay9yZWFjdCc7XG5pbXBvcnQgQ29sb3IgZnJvbSAnLi4vLi4vQ29sb3JzJ1xuaW1wb3J0IFZITGluayBmcm9tICcuJztcblxuc3Rvcmllc09mKCdIeXBlcmxpbmtzfExpbmtzJywgbW9kdWxlKVxuICAuYWRkKCd4cycsICgpID0+IChcbiAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMjRweFwiIH19PlxuICAgICAgPFZITGluayB0bz17XCIjXCJ9IHhzIGxhYmVsPVwiVkggbGlua1wiIC8+XG4gICAgPC9kaXY+XG4gICkpXG4gIC5hZGQoJ3NtJywgKCkgPT4gKFxuICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIyNHB4XCIgfX0+XG4gICAgICA8VkhMaW5rIHRvPXtcIiNcIn0gc20gbGFiZWw9XCJWSCBsaW5rXCIgLz5cbiAgICA8L2Rpdj5cbiAgKSlcblxuICAuYWRkKCdsZycsICgpID0+IChcbiAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMjRweFwiIH19PlxuICAgICAgPFZITGluayB0bz17XCIjXCJ9IGxnIGxhYmVsPVwiVkggbGlua1wiIC8+XG4gICAgPC9kaXY+XG4gICkpXG5cbiAgLmFkZCgncmV2ZXJzZScsICgpID0+IChcbiAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBoZWlnaHQ6ICcyMDBweCcsIGJhY2tncm91bmRDb2xvcjogQ29sb3JbXCJwcmltYXJ5LWRhcmtcIl0sIHBhZGRpbmc6IFwiMjRweFwiIH19PlxuICAgICAgPFZITGluayByZXZlcnNlIHRvPXtcIiNcIn0gbGcgbGFiZWw9XCJWSCBsaW5rIHJldmVyc2VcIiAvPlxuICAgIDwvZGl2PlxuICApKVxuXG4gIC5hZGQoJ25vVW5kZXJzY29yZScsICgpID0+IChcbiAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBoZWlnaHQ6ICcyMDBweCcsIGJhY2tncm91bmRDb2xvcjogQ29sb3JbXCJwcmltYXJ5LWRhcmtcIl0sIHBhZGRpbmc6IFwiMjRweFwiIH19PlxuICAgICAgPFZITGluayByZXZlcnNlIHRvPXtcIiNcIn0gbGcgbGFiZWw9XCJWSCBsaW5rIHJldmVyc2VcIiBub1VuZGVyc2NvcmUvPlxuICAgIDwvZGl2PlxuICApKSJdfQ==