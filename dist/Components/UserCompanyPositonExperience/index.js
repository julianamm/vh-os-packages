"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _MainTitleDescription = _interopRequireDefault(require("../MainTitleDescription"));

var _UserPositonExperience = _interopRequireDefault(require("../UserPositonExperience"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var VHUserCompanyExperience = function VHUserCompanyExperience(props) {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Grid.Row, {
    marginBottom: 5
  }, _react.default.createElement(_MainTitleDescription.default, {
    title: props.title,
    description: props.description,
    rightTitle: props.rightTitle,
    className: "vh-user-company-position-experience ".concat(props.className ? props.className : '')
  })), _react.default.createElement(_Grid.Row, null, props.userPositions.map(function (userPosition) {
    return _react.default.createElement(_UserPositonExperience.default, _extends({
      className: "vh-user-company-position-experience ".concat(props.className ? props.className : '')
    }, userPosition));
  })));
};

VHUserCompanyExperience.defaultProps = {
  className: "",
  rightTitle: ""
};
VHUserCompanyExperience.propTypes = {
  title: _propTypes.default.string.isRequired,
  description: _propTypes.default.string.isRequired,
  rightTitle: _propTypes.default.string,
  className: _propTypes.default.string,
  userPositions: _propTypes.default.shape({})
};
var _default = VHUserCompanyExperience;
exports.default = _default;