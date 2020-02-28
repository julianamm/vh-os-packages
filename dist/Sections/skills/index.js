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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHSkillsSection = function VHSkillsSection(props) {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Grid.Row, {
    marginBottom: 5
  }, _react.default.createElement(_Text.default, {
    className: "vh-skills-section-title ".concat(props.className ? props.className : ''),
    text: "Skills",
    color: "black-50",
    variant: "h2"
  })), _react.default.createElement(_Grid.Row, null, _react.default.createElement(_Base.default, {
    className: "vh-skills-section-card ".concat(props.className ? props.className : '')
  }, _react.default.createElement(_Grid.Row, null, _react.default.createElement(_Select.default, {
    caption: "I am...",
    captionColor: props.controls.position.loading ? "gray-40" : props.controls.position.error ? "red" : null,
    className: "vh-skills-section-position ".concat(props.className ? props.className : ''),
    currentItem: props.data.position.current,
    data: "position",
    onEvent: props.onEvent,
    items: props.positions,
    isLoading: props.controls.position.loading,
    description: props.controls.position.error && props.controls.position.message,
    descriptionColor: "red-light"
  })), _react.default.createElement(_Grid.Row, {
    marginBottom3: true
  }, _react.default.createElement(_checkbox.default, {
    checked: props.data.openedPosition,
    className: "",
    color: props.controls.openedPosition.loading ? "gray-40" : props.controls.openedPosition.error ? "red" : 'gray-100',
    data: {
      checked: props.data.openedPosition,
      id: '1',
      label: 'yes',
      value: '123'
    },
    disabled: props.controls.openedPosition.loading,
    onEvent: props.onEvent,
    title: "I am open to working in a different role",
    value: "123",
    variant: "platform1"
  })), _react.default.createElement(_Grid.Row, null, _react.default.createElement(_Select.default, {
    caption: "I would like to work as...",
    isMulti: true,
    captionColor: props.controls.workAs.loading ? "gray-40" : props.controls.workAs.error ? "red" : null,
    className: "vh-skills-section-skills ".concat(props.className ? props.className : ''),
    currentItem: props.data.workAs.current,
    data: "skills",
    onEvent: props.onEvent,
    items: props.workAs,
    isLoading: props.controls.workAs.loading,
    description: props.controls.workAs.error && props.controls.workAs.message,
    descriptionColor: "red-light"
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