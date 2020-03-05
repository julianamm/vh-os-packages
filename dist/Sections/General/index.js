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

var _TitleDescription = _interopRequireDefault(require("../../Components/TitleDescription"));

var _Select = _interopRequireDefault(require("../../Components/Input/Select"));

var _Simple = _interopRequireDefault(require("../../Components/Input/Simple"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHGeneralSection = function VHGeneralSection(props) {
  var genders = props.genders;
  var gender = props.gender ? [genders[props.gender]] : {};
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Grid.Row, {
    marginBottom: 5
  }, _react.default.createElement(_Text.default, {
    className: "vh-general-section-title ".concat(props.className ? props.className : ''),
    text: "General",
    color: "black-50",
    variant: "h2"
  })), _react.default.createElement(_Grid.Row, null, _react.default.createElement(_Base.default, {
    className: "vh-general-section-card ".concat(props.className ? props.className : '')
  }, _react.default.createElement(_Grid.Row, {
    row: true,
    responsive: true,
    marginBottom: 5
  }, _react.default.createElement(_Grid.Row, {
    paddingRight8: true
  }, _react.default.createElement(_TitleDescription.default, {
    className: "vh-general-section-citizenship ".concat(props.className ? props.className : ''),
    descriptionColor: props.controls.citizenship.loading ? "gray-40" : props.controls.citizenship.error ? "red-light" : "gray-90",
    descriptionVariant: "caption",
    inline: true,
    onEvent: props.onEvent,
    title: "Citizenship",
    titleColor: props.controls.citizenship.loading ? "gray-40" : props.controls.citizenship.error ? "red" : "gray-100",
    titleVariant: "subtitle3"
  }), _react.default.createElement(_Simple.default, {
    type: 'text',
    data: "citizenship",
    onEvent: props.onEvent,
    disabled: props.controls.citizenship.loading,
    error: props.controls.citizenship.error,
    loading: props.controls.citizenship.loading,
    value: props.citizenship
  })), _react.default.createElement(_Grid.Row, null, _react.default.createElement(_TitleDescription.default, {
    className: "vh-general-section-currentLocation ".concat(props.className ? props.className : ''),
    descriptionColor: props.controls.location.loading ? "gray-40" : props.controls.location.error ? "red-light" : "gray-90",
    descriptionVariant: "caption",
    inline: true,
    onEvent: props.onEvent,
    title: "Current Location",
    titleColor: props.controls.location.loading ? "gray-40" : props.controls.location.error ? "red" : "gray-100",
    titleVariant: "subtitle3"
  }), _react.default.createElement(_Simple.default, {
    type: 'text',
    data: "location",
    onEvent: props.onEvent,
    disabled: props.controls.location.loading,
    error: props.controls.location.error,
    loading: props.controls.location.loading,
    value: props.location
  }))), _react.default.createElement(_Grid.Row, {
    row: true,
    responsive: true
  }, _react.default.createElement(_Grid.Row, {
    paddingRight8: true
  }, _react.default.createElement(_Select.default, {
    caption: "Gender",
    className: "vh-general-section-gender ".concat(props.className ? props.className : ''),
    currentItem: gender,
    data: "gender",
    items: genders,
    onEvent: props.onEvent,
    isLoading: props.controls.gender.loading,
    description: props.controls.gender.error && props.controls.gender.message,
    descriptionColor: "red-light",
    captionColor: props.controls.gender.loading ? "gray-40" : props.controls.gender.error ? "red" : null
  })), _react.default.createElement(_Grid.Row, null, _react.default.createElement(_TitleDescription.default, {
    className: "vh-general-section-phone ".concat(props.className ? props.className : ''),
    descriptionColor: props.controls.phone.loading ? "gray-40" : props.controls.phone.error ? "red-light" : "gray-90",
    descriptionVariant: "caption",
    inline: true,
    onEvent: props.onEvent,
    title: "Phone number",
    titleColor: props.controls.phone.loading ? "gray-40" : props.controls.phone.error ? "red" : "gray-100",
    titleVariant: "subtitle3"
  }), _react.default.createElement(_Simple.default, {
    data: "phone",
    onEvent: props.onEvent,
    disabled: props.controls.phone.loading,
    error: props.controls.phone.error,
    loading: props.controls.phone.loading,
    placeholder: "+1 778 000 0000",
    value: props.phone
  }))))));
};

VHGeneralSection.propTypes = {
  onEvent: _propTypes.default.func,
  title: _propTypes.default.string.isRequired,
  data: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  className: _propTypes.default.string
};
var _default = VHGeneralSection;
exports.default = _default;