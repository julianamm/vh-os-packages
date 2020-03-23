"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _index = require("../../../Grid/index");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var candidates = [{
  name: "Mitchell Watson",
  position: "Backend Developer",
  country: "from Brazil",
  userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
  flag: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
}, {
  name: "Mitchell Watson",
  position: "Backend Developer",
  country: "from Brazil",
  userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
  flag: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
}, {
  name: "Mitchell Watson",
  position: "Backend Developer",
  country: "from Brazil",
  userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
  flag: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
}, {
  name: "Mitchell Watson",
  position: "Backend Developer",
  country: "from Brazil",
  userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
  flag: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
}, {
  name: "Mitchell Watson",
  position: "Backend Developer",
  country: "from Brazil",
  userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
  flag: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
}, {
  name: "Mitchell Watson",
  position: "Backend Developer",
  country: "from Brazil",
  userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
  flag: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
}];
(0, _react2.storiesOf)("Components|Cards/Hired", module).add("default", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f6f9",
      width: "180px",
      height: "180px",
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    name: "Mitchell Watson",
    position: "Backend Developer",
    country: "from Brazil",
    userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    flag: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
  }));
}).add("multiply", function () {
  return /*#__PURE__*/_react.default.createElement(_index.Row, {
    row: true
  }, candidates.map(function (candidate) {
    return /*#__PURE__*/_react.default.createElement(_index.Row, {
      style: {
        backgroundColor: "#f2f6f9",
        width: "180px",
        height: "180px",
        padding: "24px",
        marginRight: "10px"
      }
    }, /*#__PURE__*/_react.default.createElement(_.default, {
      name: candidate.name,
      position: candidate.position,
      country: candidate.country,
      userPhoto: candidate.userPhoto,
      flag: candidate.flag
    }));
  }));
});