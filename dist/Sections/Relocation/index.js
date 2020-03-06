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

var _radio = _interopRequireDefault(require("../../Components/Input/radio"));

var _TitleDescription = _interopRequireDefault(require("../../Components/TitleDescription"));

var _Select = _interopRequireDefault(require("../../Components/Input/Select"));

var _Simple = _interopRequireDefault(require("../../Components/Input/Simple"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHRelocationSection = function VHRelocationSection(props) {
  var genders = props.genders;
  var gender = props.gender ? [genders[props.gender]] : {};
  var data = {
    text: 'Are you open to remote jobs?',
    items: [{
      name: 'Yes',
      value: true,
      checked: props.openForRemoteJobs ? true : false
    }, {
      name: 'No',
      checked: !props.openForRemoteJobs ? true : false
    }]
  };
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Grid.Row, {
    marginBottom: 5
  }, _react.default.createElement(_Text.default, {
    className: "vh-general-section-title ".concat(props.className ? props.className : ''),
    text: "Relocation",
    color: "black-50",
    variant: "h2"
  })), _react.default.createElement(_Grid.Row, null, _react.default.createElement(_Base.default, {
    className: "vh-general-section-card ".concat(props.className ? props.className : '')
  }, _react.default.createElement(_Grid.Row, {
    column: true
  }, _react.default.createElement(_Grid.Row, null, _react.default.createElement(_radio.default, {
    color: "gray-100",
    variant: "platform",
    onEvent: props.onEvent,
    text: 'Are you open to remote jobs?',
    checked: props.openForRemoteJobs
  }))))));
};

VHRelocationSection.propTypes = {
  onEvent: _propTypes.default.func,
  title: _propTypes.default.string.isRequired,
  data: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  className: _propTypes.default.string
};
var _default = VHRelocationSection;
exports.default = _default;