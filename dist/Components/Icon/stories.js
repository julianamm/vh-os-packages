"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Source|Icon', module).add('VHIcon Image XS', function () {
  return _react.default.createElement(_.default, {
    xs: true,
    title: "Zoombi",
    source: "http://via.placeholder.com/200x200"
  });
}).add('VHIcon Image SM', function () {
  return _react.default.createElement(_.default, {
    sm: true,
    title: "Zoombi",
    source: "http://via.placeholder.com/200x200"
  });
}).add('VHIcon Image MD', function () {
  return _react.default.createElement(_.default, {
    md: true,
    title: "Zoombi",
    source: "http://via.placeholder.com/200x200"
  });
}).add('VHIcon Image LG', function () {
  return _react.default.createElement(_.default, {
    lg: true,
    title: "Zoombi",
    source: "http://via.placeholder.com/200x200"
  });
});