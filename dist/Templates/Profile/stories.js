"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

var _Mock = _interopRequireDefault(require("./Mock"));

var _controls;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var controls = (_controls = {
  gender: {
    loading: false,
    error: true,
    success: false,
    message: 'Database error'
  },
  citizenship: {
    loading: false,
    error: false,
    success: false,
    message: 'Database error'
  },
  location: {
    loading: true,
    error: false,
    success: false,
    message: 'Database error'
  },
  phone: {
    loading: true,
    error: false,
    success: false,
    message: 'Database error'
  },
  position: {
    loading: true,
    error: false,
    success: false,
    message: 'Database error'
  },
  yearsOfExperience: {
    loading: false,
    error: true,
    success: false,
    message: 'Database error'
  },
  workAs: {
    loading: true,
    error: false,
    success: false,
    message: 'Database error'
  },
  openedPosition: {
    loading: true,
    error: false,
    success: false,
    message: 'Database error'
  },
  positionSkill: {
    loading: false,
    error: false,
    success: false,
    message: 'Database error'
  }
}, _defineProperty(_controls, "yearsOfExperience", {
  loading: false,
  error: true,
  success: false,
  message: 'Database error'
}), _defineProperty(_controls, "workAs", {
  loading: false,
  error: false,
  success: false,
  message: 'Database error'
}), _defineProperty(_controls, "openForDifferentRole", {
  loading: false,
  error: false,
  success: false,
  message: 'Database error'
}), _defineProperty(_controls, "topSkill", {
  loading: false,
  error: false,
  success: false,
  message: 'Database error'
}), _defineProperty(_controls, "salaryExpectationCad", {
  loading: false,
  error: false,
  success: false,
  message: 'Database error'
}), _defineProperty(_controls, "salaryExpectationEur", {
  loading: false,
  error: false,
  success: false,
  message: 'Database error'
}), _controls);
(0, _react2.storiesOf)("Templates|Profile", module).add("default", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100%"
    }
  }, _react.default.createElement(_.default, {
    controls: controls
  }));
});