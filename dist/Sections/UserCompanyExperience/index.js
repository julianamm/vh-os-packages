"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _Base = _interopRequireDefault(require("../../Components/Cards/Base"));

var _Text = _interopRequireDefault(require("../../Components/Text"));

var _Button = _interopRequireDefault(require("../../Components/Button"));

var _UserCompanyPositonExperience = _interopRequireDefault(require("../../Components/UserCompanyPositonExperience"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHUserCompanyExperienceSection = function VHUserCompanyExperienceSection(props) {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Grid.Row, {
    marginBottom: 5
  }, _react.default.createElement(_Text.default, {
    className: "vh-skills-section-title ".concat(props.className ? props.className : ''),
    text: "Experience ".concat(props.yearsOfExperience),
    color: "black-50",
    variant: "h2"
  })), _react.default.createElement(_Grid.Row, null, _react.default.createElement(_Base.default, {
    className: "vh-skills-section-card ".concat(props.className ? props.className : '')
  }, props.userExperience.map(function (userPosition) {
    return _react.default.createElement(_Grid.Row, {
      marginBottom: 10
    }, _react.default.createElement(_UserCompanyPositonExperience.default, userPosition));
  }), _react.default.createElement(_Grid.Row, {
    row: true
  }, _react.default.createElement(_Grid.Row, {
    paddingRight8: true,
    autoWidth: true
  }, _react.default.createElement(_Button.default, {
    nowrap: true,
    primary: true,
    onEvent: props.onEvent,
    data: "AddExperience",
    label: "Add Experience"
  })), _react.default.createElement(_Grid.Row, {
    row: true
  }, _react.default.createElement(_Button.default, {
    outline: true,
    primary: true,
    onEvent: props.onEvent,
    data: "RequestProfileReview",
    label: "Request Profile Review"
  }))))));
};

VHUserCompanyExperienceSection.propTypes = {
  onEvent: _propTypes.default.func,
  title: _propTypes.default.string.isRequired,
  data: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  className: _propTypes.default.string
};
var _default = VHUserCompanyExperienceSection;
exports.default = _default;