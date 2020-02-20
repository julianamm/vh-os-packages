"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)("Components|Text", module).add("Types", function () {
  return _react.default.createElement("div", null, _react.default.createElement(_.default, {
    variant: 'h1',
    text: "H1 - TEXT",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }), _react.default.createElement(_.default, {
    variant: 'h2',
    text: "H2 - TEXT",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }), _react.default.createElement(_.default, {
    variant: 'h3',
    text: "H3 - TEXT",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }), _react.default.createElement(_.default, {
    variant: 'h4',
    text: "H4 - TEXT",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }), _react.default.createElement(_.default, {
    variant: 'h5',
    text: "H5 - TEXT",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }), _react.default.createElement(_.default, {
    variant: 'h6',
    text: "H6 - TEXT",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
});