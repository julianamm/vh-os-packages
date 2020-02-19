"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _IconText = _interopRequireDefault(require("../IconText"));

var _Icon = _interopRequireDefault(require("../Input/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHHeaderVisaPipeline = function VHHeaderVisaPipeline(props) {
  return _react.default.createElement(_Grid.Container, {
    lg: true,
    className: "vh-header-visa-pipe-line ".concat(props.className ? props.className : '')
  }, _react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true
  }, _react.default.createElement(_Grid.Row, null, _react.default.createElement(_IconText.default, {
    className: "vh-header-icon-text",
    data: "back",
    icon: "arrow-left",
    iconColor: "black-100",
    onEvent: props.onEvent,
    text: props.title,
    textColor: "black-100",
    variant: "h2"
  })), _react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true
  }, _react.default.createElement(_Grid.Row, null, _react.default.createElement(_Icon.default, {
    placeholder: props.inputPlaceholder,
    value: props.inputValue,
    icon: "search",
    data: "search",
    onEvent: props.onEvent,
    className: "vh-header-input-icon"
  })), _react.default.createElement(_Grid.Row, {
    row: true,
    justifySpaceAround: true
  }, _react.default.createElement(_IconText.default, {
    className: "vh-header-icon-text-second",
    data: "filter",
    icon: "filter",
    iconColor: "gray-80",
    onEvent: props.onEvent,
    text: "Filter",
    textColor: "gray-80",
    variant: "bodyplatform"
  }), _react.default.createElement(_IconText.default, {
    className: "vh-header-icon-text-third",
    data: "sort",
    icon: "sort",
    iconColor: "gray-80",
    onEvent: props.onEvent,
    text: "Sort",
    textColor: "gray-80",
    variant: "bodyplatform"
  })))));
};

VHHeaderVisaPipeline.defaultProps = {
  title: "Pipeline",
  inputPlaceholder: "search",
  inputValue: "search",
  onEvent: null
};
VHHeaderVisaPipeline.propTypes = {
  title: _propTypes.default.string,
  inputPlaceholder: _propTypes.default.string,
  inputValue: _propTypes.default.string,
  onEvent: _propTypes.default.func.isRequired
};
var _default = VHHeaderVisaPipeline;
exports.default = _default;