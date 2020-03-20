"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Hyperlinks|Link Image', module).add('xs', function () {
  return _react.default.createElement("div", {
    style: {
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    to: "#",
    xsImg: true,
    xsLabel: true,
    label: "Link image xs",
    title: "Zoombi",
    source: "http://via.placeholder.com/200x200"
  }));
}).add('sm', function () {
  return _react.default.createElement("div", {
    style: {
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    to: "#",
    smLabel: true,
    label: "Link image sm",
    smImg: true,
    title: "Zoombi",
    source: "http://via.placeholder.com/200x200"
  }));
}).add('lg', function () {
  return _react.default.createElement("div", {
    style: {
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    to: "#",
    lgLabel: true,
    label: "Link image lg",
    lgImg: true,
    title: "Zoombi",
    source: "http://via.placeholder.com/200x200"
  }));
}).add('noUnderscore', function () {
  return _react.default.createElement("div", {
    style: {
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    to: "#",
    noUnderscore: true,
    label: "Link image",
    title: "Zoombi",
    source: "http://via.placeholder.com/200x200"
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0h5cGVybGlua3MvTGlua0ltYWdlL3N0b3JpZXMuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiYWRkIiwicGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUVBLHVCQUFVLHVCQUFWLEVBQW1DQSxNQUFuQyxFQUNHQyxHQURILENBQ08sSUFEUCxFQUNhO0FBQUEsU0FDVDtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYO0FBQVosS0FDRSw2QkFBQyxTQUFEO0FBQ1EsSUFBQSxFQUFFLEVBQUUsR0FEWjtBQUVRLElBQUEsS0FBSyxNQUZiO0FBR1EsSUFBQSxPQUFPLE1BSGY7QUFJUSxJQUFBLEtBQUssRUFBQyxlQUpkO0FBS1EsSUFBQSxLQUFLLEVBQUMsUUFMZDtBQU1RLElBQUEsTUFBTSxFQUFDO0FBTmYsSUFERixDQURTO0FBQUEsQ0FEYixFQVlHRCxHQVpILENBWU8sSUFaUCxFQVlhO0FBQUEsU0FDVDtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYO0FBQVosS0FDRSw2QkFBQyxTQUFEO0FBQTJCLElBQUEsRUFBRSxFQUFFLEdBQS9CO0FBQ1EsSUFBQSxPQUFPLE1BRGY7QUFFUSxJQUFBLEtBQUssRUFBQyxlQUZkO0FBR1EsSUFBQSxLQUFLLE1BSGI7QUFJUSxJQUFBLEtBQUssRUFBQyxRQUpkO0FBS1EsSUFBQSxNQUFNLEVBQUM7QUFMZixJQURGLENBRFM7QUFBQSxDQVpiLEVBdUJHRCxHQXZCSCxDQXVCTyxJQXZCUCxFQXVCYTtBQUFBLFNBQ1Q7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBWDtBQUFaLEtBQ0UsNkJBQUMsU0FBRDtBQUNRLElBQUEsRUFBRSxFQUFFLEdBRFo7QUFFUSxJQUFBLE9BQU8sTUFGZjtBQUdRLElBQUEsS0FBSyxFQUFDLGVBSGQ7QUFJUSxJQUFBLEtBQUssTUFKYjtBQUtRLElBQUEsS0FBSyxFQUFDLFFBTGQ7QUFNUSxJQUFBLE1BQU0sRUFBQztBQU5mLElBREYsQ0FEUztBQUFBLENBdkJiLEVBbUNHRCxHQW5DSCxDQW1DTyxjQW5DUCxFQW1DdUI7QUFBQSxTQUNuQjtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYO0FBQVosS0FDRSw2QkFBQyxTQUFEO0FBQ1EsSUFBQSxFQUFFLEVBQUUsR0FEWjtBQUVRLElBQUEsWUFBWSxNQUZwQjtBQUdRLElBQUEsS0FBSyxFQUFDLFlBSGQ7QUFJUSxJQUFBLEtBQUssRUFBQyxRQUpkO0FBS1EsSUFBQSxNQUFNLEVBQUM7QUFMZixJQURGLENBRG1CO0FBQUEsQ0FuQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHN0b3JpZXNPZiB9IGZyb20gJ0BzdG9yeWJvb2svcmVhY3QnO1xuaW1wb3J0IFZITGlua0ltYWdlIGZyb20gJy4nO1xuXG5zdG9yaWVzT2YoJ0h5cGVybGlua3N8TGluayBJbWFnZScsIG1vZHVsZSlcbiAgLmFkZCgneHMnLCAoKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjI0cHhcIiB9fT5cbiAgICAgIDxWSExpbmtJbWFnZSBcbiAgICAgICAgICAgICAgdG89e1wiI1wifVxuICAgICAgICAgICAgICB4c0ltZ1xuICAgICAgICAgICAgICB4c0xhYmVsXG4gICAgICAgICAgICAgIGxhYmVsPVwiTGluayBpbWFnZSB4c1wiXG4gICAgICAgICAgICAgIHRpdGxlPVwiWm9vbWJpXCJcbiAgICAgICAgICAgICAgc291cmNlPVwiaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMjAweDIwMFwiLz5cbiAgICA8L2Rpdj5cbiAgKSlcbiAgLmFkZCgnc20nLCAoKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjI0cHhcIiB9fT5cbiAgICAgIDxWSExpbmtJbWFnZSAgICAgICAgICAgICAgIHRvPXtcIiNcIn1cbiAgICAgICAgICAgICAgc21MYWJlbFxuICAgICAgICAgICAgICBsYWJlbD1cIkxpbmsgaW1hZ2Ugc21cIlxuICAgICAgICAgICAgICBzbUltZ1xuICAgICAgICAgICAgICB0aXRsZT1cIlpvb21iaVwiXG4gICAgICAgICAgICAgIHNvdXJjZT1cImh0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzIwMHgyMDBcIi8+XG4gICAgPC9kaXY+XG4gICkpXG5cbiAgLmFkZCgnbGcnLCAoKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjI0cHhcIiB9fT5cbiAgICAgIDxWSExpbmtJbWFnZSAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB0bz17XCIjXCJ9XG4gICAgICAgICAgICAgIGxnTGFiZWxcbiAgICAgICAgICAgICAgbGFiZWw9XCJMaW5rIGltYWdlIGxnXCJcbiAgICAgICAgICAgICAgbGdJbWdcbiAgICAgICAgICAgICAgdGl0bGU9XCJab29tYmlcIlxuICAgICAgICAgICAgICBzb3VyY2U9XCJodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yMDB4MjAwXCIvPlxuICAgIDwvZGl2PlxuICApKVxuXG4gIC5hZGQoJ25vVW5kZXJzY29yZScsICgpID0+IChcbiAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMjRweFwiIH19PlxuICAgICAgPFZITGlua0ltYWdlICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHRvPXtcIiNcIn1cbiAgICAgICAgICAgICAgbm9VbmRlcnNjb3JlXG4gICAgICAgICAgICAgIGxhYmVsPVwiTGluayBpbWFnZVwiXG4gICAgICAgICAgICAgIHRpdGxlPVwiWm9vbWJpXCJcbiAgICAgICAgICAgICAgc291cmNlPVwiaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMjAweDIwMFwiIC8+XG4gICAgPC9kaXY+XG4gICkpOyJdfQ==