"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Grid = require("../../Grid");

var _Text = _interopRequireDefault(require("../../Components/Text"));

var _Button = _interopRequireDefault(require("../../Components/Button"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHAnnouncementTemplate = function VHAnnouncementTemplate(props) {
  return _react.default.createElement(_styles.Wrapper1, null, _react.default.createElement(_Grid.Container, {
    md: true
  }, _react.default.createElement(_Grid.Row, null, _react.default.createElement(_Text.default, {
    text: props.title,
    variant: "h2",
    color: "white"
  })), _react.default.createElement(_Grid.Row, {
    marginTop: 27
  }, _react.default.createElement(_Text.default, {
    text: props.subTitle,
    variant: "h6",
    color: "white"
  })), _react.default.createElement(_Grid.Row, {
    marginTop: 27
  }, _react.default.createElement(_Text.default, {
    text: props.description,
    variant: "h6",
    color: "white"
  })), props.cta && _react.default.createElement(_Grid.Row, {
    marginTop: 27
  }, _react.default.createElement(_Button.default, {
    className: "",
    label: props.cta,
    onEvent: props.onEvent,
    primary: true,
    disabled: props.loading
  }))));
};

VHAnnouncementTemplate.defaultProps = {};
VHAnnouncementTemplate.propTypes = {};
var _default = VHAnnouncementTemplate;
exports.default = _default;