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

var _LanguageList = _interopRequireDefault(require("../../Components/LanguageList"));

var _TitleDescription = _interopRequireDefault(require("../../Components/TitleDescription"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHLanguageSection = function VHLanguageSection(props) {
  var positions = props.positions;
  var position = props.positionSkill != undefined ? [positions[props.positionSkill]] : {};
  var yearsOfExperienceList = props.yearsOfExperienceList;
  var yearsOfExperience = props.yearsOfExperience != undefined ? [yearsOfExperienceList[props.yearsOfExperience]] : {};
  var workAsList = props.positions;
  var userPositions = [];

  if (props.userPositions) {
    props.userPositions.map(function (item) {
      if (item.id) {
        userPositions.push({
          value: item.id,
          label: item.name
        });
      } else {
        userPositions.push({
          value: item,
          label: positions[item].label
        });
      }
    });
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom: 5
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    className: "vh-skills-section-title ".concat(props.className ? props.className : ''),
    text: "Languages",
    color: "black-50",
    variant: "h2"
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_Base.default, {
    className: "vh-skills-section-card ".concat(props.className ? props.className : '')
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_LanguageList.default, {
    controls: props.controls,
    onEvent: props.onEvent,
    secondList: props.proficiencyList,
    list: props.languageList,
    items: props.languages,
    data: "vanhack"
  }))))));
};

VHLanguageSection.propTypes = {
  onEvent: _propTypes.default.func,
  title: _propTypes.default.string.isRequired,
  data: _propTypes.default.object,
  className: _propTypes.default.string
};
var _default = VHLanguageSection;
exports.default = _default;