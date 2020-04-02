"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _Icon = _interopRequireDefault(require("../Icon"));

var _Text = _interopRequireDefault(require("../Text"));

var _TitleDescription = _interopRequireDefault(require("../TitleDescription"));

var _List = _interopRequireDefault(require("../List"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SecondStep = function SecondStep(props) {
  return /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    column: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    marginBottom5: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    width: '10%'
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon: 'skills',
    title: "city",
    md: true
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    width: '70%'
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    variant: "h4",
    color: "gray-90",
    text: 'Top Skills'
  }))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    column: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    column: true,
    marginBottom5: true
  }, /*#__PURE__*/_react.default.createElement(_TitleDescription.default, {
    contents: true,
    className: "vh-general-section-topSkill-description ".concat(props.className ? props.className : ''),
    descriptionColor: props.controls.topSkill.loading ? "gray-40" : props.controls.topSkill.error ? "red-light" : "gray-90",
    inline: true,
    onEvent: props.onEvent,
    title: "Rank your top 3 skills",
    description: "1st = Highest proficiency level; 3rd = Lowest proficiency level",
    titleColor: props.controls.topSkill.loading ? "gray-40" : props.controls.topSkill.error ? "red" : "gray-100",
    titleVariant: "subtitle3"
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom5: true
  }, /*#__PURE__*/_react.default.createElement(_List.default, {
    controls: props.controls,
    onEvent: props.onEvent,
    secondList: props.yearsOfExperienceList,
    list: props.skillList,
    items: props.topSkill,
    data: "vanhack"
  }))));
};

SecondStep.defaultProps = {
  className: ""
};
SecondStep.propTypes = {
  className: _propTypes.default.string,
  onEvent: _propTypes.default.func.isRequired
};
var _default = SecondStep;
exports.default = _default;