"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Hyperlinks|Link Image', module).add('xs', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    to: "#",
    xsImg: true,
    xsLabel: true,
    label: "Link image xs",
    title: "Zoombi",
    source: "http://via.placeholder.com/200x200"
  }));
}).add('sm', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    to: "#",
    smLabel: true,
    label: "Link image sm",
    smImg: true,
    title: "Zoombi",
    source: "http://via.placeholder.com/200x200"
  }));
}).add('lg', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    to: "#",
    lgLabel: true,
    label: "Link image lg",
    lgImg: true,
    title: "Zoombi",
    source: "http://via.placeholder.com/200x200"
  }));
}).add('noUnderscore', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    to: "#",
    noUnderscore: true,
    label: "Link image",
    title: "Zoombi",
    source: "http://via.placeholder.com/200x200"
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0h5cGVybGlua3MvTGlua0ltYWdlL3N0b3JpZXMuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiYWRkIiwicGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUVBLHVCQUFVLHVCQUFWLEVBQW1DQSxNQUFuQyxFQUNHQyxHQURILENBQ08sSUFEUCxFQUNhO0FBQUEsc0JBQ1Q7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBWDtBQUFaLGtCQUNFLDZCQUFDLFNBQUQ7QUFDUSxJQUFBLEVBQUUsRUFBRSxHQURaO0FBRVEsSUFBQSxLQUFLLE1BRmI7QUFHUSxJQUFBLE9BQU8sTUFIZjtBQUlRLElBQUEsS0FBSyxFQUFDLGVBSmQ7QUFLUSxJQUFBLEtBQUssRUFBQyxRQUxkO0FBTVEsSUFBQSxNQUFNLEVBQUM7QUFOZixJQURGLENBRFM7QUFBQSxDQURiLEVBWUdELEdBWkgsQ0FZTyxJQVpQLEVBWWE7QUFBQSxzQkFDVDtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYO0FBQVosa0JBQ0UsNkJBQUMsU0FBRDtBQUEyQixJQUFBLEVBQUUsRUFBRSxHQUEvQjtBQUNRLElBQUEsT0FBTyxNQURmO0FBRVEsSUFBQSxLQUFLLEVBQUMsZUFGZDtBQUdRLElBQUEsS0FBSyxNQUhiO0FBSVEsSUFBQSxLQUFLLEVBQUMsUUFKZDtBQUtRLElBQUEsTUFBTSxFQUFDO0FBTGYsSUFERixDQURTO0FBQUEsQ0FaYixFQXVCR0QsR0F2QkgsQ0F1Qk8sSUF2QlAsRUF1QmE7QUFBQSxzQkFDVDtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYO0FBQVosa0JBQ0UsNkJBQUMsU0FBRDtBQUNRLElBQUEsRUFBRSxFQUFFLEdBRFo7QUFFUSxJQUFBLE9BQU8sTUFGZjtBQUdRLElBQUEsS0FBSyxFQUFDLGVBSGQ7QUFJUSxJQUFBLEtBQUssTUFKYjtBQUtRLElBQUEsS0FBSyxFQUFDLFFBTGQ7QUFNUSxJQUFBLE1BQU0sRUFBQztBQU5mLElBREYsQ0FEUztBQUFBLENBdkJiLEVBbUNHRCxHQW5DSCxDQW1DTyxjQW5DUCxFQW1DdUI7QUFBQSxzQkFDbkI7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBWDtBQUFaLGtCQUNFLDZCQUFDLFNBQUQ7QUFDUSxJQUFBLEVBQUUsRUFBRSxHQURaO0FBRVEsSUFBQSxZQUFZLE1BRnBCO0FBR1EsSUFBQSxLQUFLLEVBQUMsWUFIZDtBQUlRLElBQUEsS0FBSyxFQUFDLFFBSmQ7QUFLUSxJQUFBLE1BQU0sRUFBQztBQUxmLElBREYsQ0FEbUI7QUFBQSxDQW5DdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc3Rvcmllc09mIH0gZnJvbSAnQHN0b3J5Ym9vay9yZWFjdCc7XG5pbXBvcnQgVkhMaW5rSW1hZ2UgZnJvbSAnLic7XG5cbnN0b3JpZXNPZignSHlwZXJsaW5rc3xMaW5rIEltYWdlJywgbW9kdWxlKVxuICAuYWRkKCd4cycsICgpID0+IChcbiAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMjRweFwiIH19PlxuICAgICAgPFZITGlua0ltYWdlIFxuICAgICAgICAgICAgICB0bz17XCIjXCJ9XG4gICAgICAgICAgICAgIHhzSW1nXG4gICAgICAgICAgICAgIHhzTGFiZWxcbiAgICAgICAgICAgICAgbGFiZWw9XCJMaW5rIGltYWdlIHhzXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJab29tYmlcIlxuICAgICAgICAgICAgICBzb3VyY2U9XCJodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yMDB4MjAwXCIvPlxuICAgIDwvZGl2PlxuICApKVxuICAuYWRkKCdzbScsICgpID0+IChcbiAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMjRweFwiIH19PlxuICAgICAgPFZITGlua0ltYWdlICAgICAgICAgICAgICAgdG89e1wiI1wifVxuICAgICAgICAgICAgICBzbUxhYmVsXG4gICAgICAgICAgICAgIGxhYmVsPVwiTGluayBpbWFnZSBzbVwiXG4gICAgICAgICAgICAgIHNtSW1nXG4gICAgICAgICAgICAgIHRpdGxlPVwiWm9vbWJpXCJcbiAgICAgICAgICAgICAgc291cmNlPVwiaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMjAweDIwMFwiLz5cbiAgICA8L2Rpdj5cbiAgKSlcblxuICAuYWRkKCdsZycsICgpID0+IChcbiAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMjRweFwiIH19PlxuICAgICAgPFZITGlua0ltYWdlICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHRvPXtcIiNcIn1cbiAgICAgICAgICAgICAgbGdMYWJlbFxuICAgICAgICAgICAgICBsYWJlbD1cIkxpbmsgaW1hZ2UgbGdcIlxuICAgICAgICAgICAgICBsZ0ltZ1xuICAgICAgICAgICAgICB0aXRsZT1cIlpvb21iaVwiXG4gICAgICAgICAgICAgIHNvdXJjZT1cImh0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzIwMHgyMDBcIi8+XG4gICAgPC9kaXY+XG4gICkpXG5cbiAgLmFkZCgnbm9VbmRlcnNjb3JlJywgKCkgPT4gKFxuICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIyNHB4XCIgfX0+XG4gICAgICA8VkhMaW5rSW1hZ2UgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgdG89e1wiI1wifVxuICAgICAgICAgICAgICBub1VuZGVyc2NvcmVcbiAgICAgICAgICAgICAgbGFiZWw9XCJMaW5rIGltYWdlXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJab29tYmlcIlxuICAgICAgICAgICAgICBzb3VyY2U9XCJodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yMDB4MjAwXCIgLz5cbiAgICA8L2Rpdj5cbiAgKSk7Il19