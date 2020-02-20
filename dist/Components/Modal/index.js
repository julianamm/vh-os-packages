"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("../Button"));

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* babel-plugin-inline-import '../../../assets/icons/close.svg' */
var CloseIcon = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5hcnJvdy1kb3duPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkFydGJvYXJkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTgwLjAwMDAwMCwgLTEwMC4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9ImNsb3NlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1ODAuMDAwMDAwLCAxMDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0idmgtLy1pY29ucy0vLW1hdGVyaWFsLS8tMjQiPgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJib3VuZHMiIGZpbGw9IiMwNjc1Q0UiIG9wYWNpdHk9IjAiIHg9IjAiIHk9IjAiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSLul40iIGZpbGw9IiM5NUExQUMiIGZpbGwtcnVsZT0ibm9uemVybyIgcG9pbnRzPSIxOC45ODQzNzUgNi40MjE4NzUgMTMuNDA2MjUgMTIgMTguOTg0Mzc1IDE3LjU3ODEyNSAxNy41NzgxMjUgMTguOTg0Mzc1IDEyIDEzLjQwNjI1IDYuNDIxODc1IDE4Ljk4NDM3NSA1LjAxNTYyNSAxNy41NzgxMjUgMTAuNTkzNzUgMTIgNS4wMTU2MjUgNi40MjE4NzUgNi40MjE4NzUgNS4wMTU2MjUgMTIgMTAuNTkzNzUgMTcuNTc4MTI1IDUuMDE1NjI1Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==";

var VHModal = function VHModal(props) {
  return _react.default.createElement(S.ModalContainer, {
    open: props.open
  }, _react.default.createElement(S.ModalBox, {
    width: props.width,
    minWidth: props.minWidth
  }, _react.default.createElement(S.Header, null, _react.default.createElement("div", null, props.header && props.header), !props.hideBtnClose && _react.default.createElement(S.Close, {
    onClick: function onClick() {
      props.onEvent({
        event: 'onClose',
        target: 'VHModal'
      });
      props.onClose();
    }
  }, _react.default.createElement("img", {
    src: CloseIcon,
    alt: "Close icon"
  }))), _react.default.createElement(S.Content, null, props.content), props.confirmation && _react.default.createElement(S.ConfirmationSection, null, _react.default.createElement(_Button.default, {
    primary: true,
    outline: true,
    label: props.cancelTitle,
    onClick: props.onClose
  }), _react.default.createElement(_Button.default, {
    disabled: props.disableAction,
    primary: true,
    label: props.confirmType,
    onClick: function onClick() {
      props.onEvent({
        event: 'onConfirm',
        target: 'VHModal',
        type: props.confirmType,
        data: props.data
      });
      props.onClose();
    }
  }))));
};

VHModal.defaultProps = {};
VHModal.propTypes = {};
var _default = VHModal;
exports.default = _default;