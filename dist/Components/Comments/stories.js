"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var comments = [{
  "profileId": "74637373",
  "image": "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
  "fullName": "Anybal Silva",
  "days": "3 days ago",
  "event": "Adding a comment like a boss"
}, {
  "profileId": "746373373",
  "image": "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
  "fullName": "João Dias",
  "days": "4 days ago",
  "event": "Fixing bug"
}, {
  "profileId": "74613437373",
  "image": "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
  "fullName": "Mário Rodeghiero",
  "days": "5 days ago",
  "event": "Had call with Anastasia. She does not need medicals as she is in Germany."
}];
(0, _react2.storiesOf)("Components|Comments", module).add("default", function () {
  return _react.default.createElement(_.default, {
    comments: comments
  });
});