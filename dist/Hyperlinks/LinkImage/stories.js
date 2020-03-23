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