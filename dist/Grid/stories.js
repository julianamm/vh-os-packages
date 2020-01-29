"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Grid|Container', module).add('default', function () {
  return _react.default.createElement(_.Container, null, _react.default.createElement(_.Row, null, _react.default.createElement("span", null, "asdasds"), _react.default.createElement("span", null, "asdasds"), _react.default.createElement("span", null, "asdasds"), _react.default.createElement("span", null, "asdasds"), _react.default.createElement("span", null, "asdasds"), _react.default.createElement("span", null, "asdasds")), _react.default.createElement(_.Row, {
    spaceAround: true
  }, _react.default.createElement("span", null, "asdasds"), _react.default.createElement("span", null, "asdasds"), _react.default.createElement("span", null, "asdasds"), _react.default.createElement("span", null, "asdasds"), _react.default.createElement("span", null, "asdasds"), _react.default.createElement("span", null, "asdasds")));
}).add('Row', function () {
  return _react.default.createElement(_.Container, null, _react.default.createElement(_.Row, {
    row: true
  }, _react.default.createElement("span", null, "asdasds"), _react.default.createElement("span", null, "asdasds"), _react.default.createElement("span", null, "asdasds"), _react.default.createElement("span", null, "asdasds"), _react.default.createElement("span", null, "asdasds"), _react.default.createElement("span", null, "asdasds")), _react.default.createElement(_.Row, {
    row: true,
    justifySpaceAround: true
  }, _react.default.createElement("span", null, "asdasds"), _react.default.createElement("span", null, "asdasds"), _react.default.createElement("span", null, "asdasds"), _react.default.createElement("span", null, "asdasds"), _react.default.createElement("span", null, "asdasds"), _react.default.createElement("span", null, "asdasds")), _react.default.createElement(_.Row, {
    row: true,
    justifySpaceBetween: true
  }, _react.default.createElement("span", null, "asdasds"), _react.default.createElement("span", null, "asdasds"), _react.default.createElement("span", null, "asdasds"), _react.default.createElement("span", null, "asdasds"), _react.default.createElement("span", null, "asdasds"), _react.default.createElement("span", null, "asdasds")));
});