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

var _Select = _interopRequireDefault(require("../../Components/Input/Select"));

var _checkbox = _interopRequireDefault(require("../../Components/Input/checkbox"));

var _List = _interopRequireDefault(require("../../Components/List"));

var _TitleDescription = _interopRequireDefault(require("../../Components/TitleDescription"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHSkillsSection = function VHSkillsSection(props) {
  var positions = props.positions;
  var position = props.positionSkill ? [positions[props.positionSkill]] : {};
  var yearsOfExperienceList = props.yearsOfExperienceList;
  var yearsOfExperience = props.yearsOfExperience ? [yearsOfExperienceList[props.yearsOfExperience]] : {};
  var workAsList = props.workAsList;
  var workAs = props.workAs ? [workAsList[props.workAs]] : [];
  var topSkills = props.topSkills ? props.topSkills : [];
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Grid.Row, {
    marginBottom: 5
  }, _react.default.createElement(_Text.default, {
    className: "vh-skills-section-title ".concat(props.className ? props.className : ''),
    text: "Skills",
    color: "black-50",
    variant: "h2"
  })), _react.default.createElement(_Grid.Row, null, _react.default.createElement(_Base.default, {
    className: "vh-skills-section-card ".concat(props.className ? props.className : '')
  }, _react.default.createElement(_Grid.Row, {
    row: true,
    justifySpaceBetween: true
  }, _react.default.createElement(_Grid.Row, {
    width: '60%'
  }, _react.default.createElement(_Select.default, {
    caption: "I am...",
    captionColor: props.controls.positionSkill.loading ? "gray-40" : props.controls.positionSkill.error ? "red" : null,
    className: "vh-skills-section-positionSkill ".concat(props.className ? props.className : ''),
    currentItem: position,
    data: "position",
    onEvent: props.onEvent,
    items: positions,
    isLoading: props.controls.positionSkill.loading,
    description: props.controls.positionSkill.error && props.controls.positionSkill.message,
    descriptionColor: "red-light"
  })), _react.default.createElement(_Grid.Row, {
    width: '30%'
  }, _react.default.createElement(_Select.default, {
    caption: "With...",
    captionColor: props.controls.yearsOfExperience.loading ? "gray-40" : props.controls.yearsOfExperience.error ? "red" : null,
    className: "vh-skills-section-yearsOfExperience ".concat(props.className ? props.className : ''),
    currentItem: yearsOfExperience,
    data: "yearsOfExperience",
    onEvent: props.onEvent,
    items: yearsOfExperienceList,
    isLoading: props.controls.yearsOfExperience.loading,
    description: props.controls.yearsOfExperience.error && props.controls.yearsOfExperience.message,
    descriptionColor: "red-light"
  }))), _react.default.createElement(_Grid.Row, {
    marginBottom3: true
  }, _react.default.createElement(_checkbox.default, {
    checked: props.openForDifferentRole,
    className: "",
    color: props.controls.openForDifferentRole.loading ? "gray-40" : props.controls.openForDifferentRole.error ? "red" : 'gray-100',
    data: {
      checked: props.openForDifferentRole,
      id: 'openForDifferentRole',
      label: 'yes',
      value: '123'
    },
    disabled: props.controls.openForDifferentRole.loading,
    onEvent: props.onEvent,
    title: "I am open to working in a different role",
    value: "123",
    variant: "platform1"
  })), _react.default.createElement(_Grid.Row, null, _react.default.createElement(_Select.default, {
    caption: "I would like to work as...",
    isMulti: true,
    captionColor: props.controls.workAsSkills.loading ? "gray-40" : props.controls.workAsSkills.error ? "red" : null,
    className: "vh-skills-section-workAsSkills ".concat(props.className ? props.className : ''),
    currentItem: workAs,
    data: "workAsSkills",
    onEvent: props.onEvent,
    items: workAsList,
    isLoading: props.controls.workAsSkills.loading,
    description: props.controls.workAsSkills.error && props.controls.workAsSkills.message,
    descriptionColor: "red-light"
  })), _react.default.createElement(_Grid.Row, null, _react.default.createElement(_TitleDescription.default, {
    className: "vh-general-section-topSkills-description ".concat(props.className ? props.className : ''),
    descriptionColor: props.controls.topSkills.loading ? "gray-40" : props.controls.topSkills.error ? "red-light" : "gray-90",
    descriptionVariant: "caption",
    inline: true,
    onEvent: props.onEvent,
    title: "Rank your top 3 skills",
    description: "1st = Highest proficiency level; 3rd = Lowest proficiency level",
    titleColor: props.controls.topSkills.loading ? "gray-40" : props.controls.topSkills.error ? "red" : "gray-100",
    titleVariant: "subtitle3"
  })), _react.default.createElement(_Grid.Row, null, _react.default.createElement(_List.default, {
    items: topSkills,
    data: "vanhack"
  })))));
};

VHSkillsSection.propTypes = {
  onEvent: _propTypes.default.func,
  title: _propTypes.default.string.isRequired,
  data: _propTypes.default.object,
  className: _propTypes.default.string
};
var _default = VHSkillsSection;
exports.default = _default;