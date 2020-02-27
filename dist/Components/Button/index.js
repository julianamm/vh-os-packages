"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHButton = function VHButton(props) {
  if (props.outline) {
    return _react.default.createElement(_styles.OutlinedButton, {
      id: props.id,
      primary: props.primary,
      white: props.white,
      secondary: props.secondary,
      danger: props.danger,
      full: props.full,
      nowrap: props.nowrap,
      disabled: props.disabled,
      className: "vh-button-component ".concat(props.className ? props.className : ''),
      xs: props.xs,
      sm: props.sm,
      lg: props.lg,
      type: "button",
      onClick: function onClick() {
        props.onEvent({
          type: "OnClick",
          origin: "VHButton",
          props: {
            data: props.data
          }
        });
      }
    }, props.label);
  }

  return _react.default.createElement(_styles.default, {
    id: props.id,
    primary: props.primary,
    secondary: props.secondary,
    danger: props.danger,
    full: props.full,
    disabled: props.disabled,
    className: "vh-button-component ".concat(props.className ? props.className : ''),
    xs: props.xs,
    sm: props.sm,
    lg: props.lg,
    nowrap: props.nowrap,
    type: "button",
    onClick: function onClick() {
      props.onEvent({
        type: "OnClick",
        origin: "VHButton",
        props: {
          data: props.data
        }
      });
    }
  }, props.label);
};

VHButton.defaultProps = {
  disabled: false,
  danger: false,
  nowrap: false,
  secondary: false,
  className: '',
  primary: true
};
VHButton.propTypes = {
  primary: _propTypes.default.bool,
  secondary: _propTypes.default.bool,
  danger: _propTypes.default.bool,
  nowrap: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  onEvent: _propTypes.default.func.isRequired,
  className: _propTypes.default.string,
  label: _propTypes.default.string.isRequired
};
var _default = VHButton;
exports.default = _default;