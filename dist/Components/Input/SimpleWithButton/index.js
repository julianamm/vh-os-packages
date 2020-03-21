"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../../Grid/index");

var _index2 = _interopRequireDefault(require("../Simple/index"));

var _index3 = _interopRequireDefault(require("../../Button/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHInputSimpleWithButton = function VHInputSimpleWithButton(props) {
  return _react.default.createElement(_index.Row, {
    row: true
  }, _react.default.createElement(_index.Row, {
    width: "85%",
    style: {
      marginRight: "4px"
    }
  }, _react.default.createElement(_index2.default, {
    disabled: props.disabled,
    error: props.error,
    loading: props.loading,
    placeholder: props.placeholder,
    data: props.data,
    value: props.value,
    onEvent: props.onEvent
  })), _react.default.createElement(_index.Row, {
    width: "15%"
  }, _react.default.createElement(_index3.default, {
    primary: true,
    lg: true,
    onEvent: props.onEvent,
    label: props.label
  })));
};

VHInputSimpleWithButton.defaultProps = {
  className: '',
  disabled: false,
  error: false,
  loading: false
};
VHInputSimpleWithButton.propTypes = {
  disabled: _propTypes.default.bool,
  error: _propTypes.default.bool,
  loading: _propTypes.default.bool,
  placeholder: _propTypes.default.string,
  onEvent: _propTypes.default.func,
  datat: _propTypes.default.string,
  label: _propTypes.default.string
};
var _default = VHInputSimpleWithButton;
exports.default = _default;