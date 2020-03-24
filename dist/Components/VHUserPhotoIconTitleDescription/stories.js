"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var candidates = {
  avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
  name: "Jeff Patterson",
  email: "jeffpatterson@gmail.com"
};
(0, _react2.storiesOf)("Components|User Avatar", module).add("default", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    avatar: candidates.avatar,
    name: candidates.name,
    email: candidates.email
  }));
});