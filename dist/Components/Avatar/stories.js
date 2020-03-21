"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)("Components|Avatar", module).add("VHAvatar cursor pointer", function () {
  return _react.default.createElement(_.default, {
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    size: "md",
    showCursor: true
  });
}).add("VHAvatar cursor default", function () {
  return _react.default.createElement(_.default, {
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    size: "md",
    showCursor: true
  });
}).add("VHAvatar sm", function () {
  return _react.default.createElement(_.default, {
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    size: "sm",
    showCursor: true
  });
}).add("VHAvatar md", function () {
  return _react.default.createElement(_.default, {
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    size: "md",
    showCursor: true
  });
}).add("VHAvatar lg", function () {
  return _react.default.createElement(_.default, {
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    size: "lg",
    showCursor: true
  });
}).add("VHAvatar xs", function () {
  return _react.default.createElement(_.default, {
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    size: "xs",
    showCursor: true
  });
}).add("VHAvatar xl", function () {
  return _react.default.createElement(_.default, {
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    size: "xl",
    showCursor: true
  });
}).add("VHAvatar xxl", function () {
  return _react.default.createElement(_.default, {
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    size: "xxl",
    showCursor: true
  });
});