"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* babel-plugin-inline-import '../../../assets/icons/vanhack-loading.svg' */
var VHLoading = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzFweCIgaGVpZ2h0PSI3MXB4IiB2aWV3Qm94PSIwIDAgNzEgNzEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5ICg4NjEyNykgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+dmggLyBicmFuZCAvIHZhbmhhY2stZmF2aWNvbiBjb3B5IDM8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iU3R5bGVHdWlkZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IlZILS0tU3R5bGUtR3VpZGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04ODguMDAwMDAwLCAtMTA2OTkuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJ2aC0vLWJyYW5kLS8tdmFuaGFjay1mYXZpY29uLWNvcHktMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODg4LjAwMDAwMCwgMTA2OTkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiBmaWxsPSIjMDY3NUNFIiB4PSIwIiB5PSIwIiB3aWR0aD0iNzEiIGhlaWdodD0iNzEiIHJ4PSI4Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDAwMDAwLCAxNS4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zLjk0NjE0NjQ3LDEwLjE2OTk0MDggTDEwLjYyNDI0MDUsMjMuMzQzMzEzNiBDMTAuODY1MTUzLDIyLjUxMTE4MzQgMTEuMDc3MTU2LDIxLjg1MTMwMTggMTEuMjY5ODg1OSwyMS4xODY1NjggQzEzLjI3MjY3MTcsMTQuMzQwMjk1OSAxNS4yNjk4MzYyLDcuNDk2NDQ5NyAxNy4yNjEzNzk0LDAuNjU1MDI5NTg2IEMxNy40MTMxNTQyLDAuMTI4NTc5ODgyIDE3LjYyOTk3NTUsMCAxOC4xNTAzNDY0LDAgQzIxLjA0MTI5NjIsMC4wMjY2ODYzOTA1IDIzLjk0NjcwMDgsMC4wMTIxMzAxNzc1IDI2Ljg0NDg3NzksMC4wMTIxMzAxNzc1IEwyNy41MjkwNjk0LDAuMDEyMTMwMTc3NSBDMjcuMDExMTA3NiwxLjc5MDQxNDIgMjYuNTE0ODI3OCwzLjUwMzE5NTI3IDI2LjAxMzcyOTksNS4yMTM1NTAzIEMyMi42MTIwNDU2LDE2LjgzMTAyNTYgMTkuMjE1MTc5NiwyOC40NDkzMDk3IDE1LjgyMzEzMTksNDAuMDY4NDAyNCBDMTUuNjQyNDQ3NSw0MC42OTE4OTM1IDE1LjQwMTUzNSw0MC44ODExMjQzIDE0Ljc2MDcwNzgsNDAuODY4OTk0MSBDMTIuMzIwMjY0NCw0MC44MjUzMjU0IDkuODc3NDExNzksNDAuODM5ODgxNyA3LjQzNDU1OTIyLDQwLjg2ODk5NDEgQzcuMDcyMTM2ODEsNDAuOTE2MTc4NyA2LjcyODUzMDEyLDQwLjY5NDAzMDcgNi42MjAyNzUwMiw0MC4zNDI1NDQ0IEM0LjU0NjgyMTU5LDM1LjY3IDIuNDU4OTEzNDEsMzEuMDAzMTE2NCAwLjM1NjU1MDQ3NCwyNi4zNDE4OTM1IEMwLjIzMTc1MDI4MSwyNi4wOTk5ODE5IDAuMTk4MzY1Mjk5LDI1LjgyMDY4MjkgMC4yNjI1OTQ2MDYsMjUuNTU1ODU4IEMxLjQ5MzY1NzM5LDIwLjQ4Nzg2OTggMi42OTU4MTA2OCwxNS40MjQ3MzM3IDMuOTQ2MTQ2NDcsMTAuMTY5OTQwOCIgaWQ9InBhdGgxOCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00OS44ODMzMzg3LDAuMDgwMDU5MTcxNiBDNDkuNDI1NjA0OSwxLjY1OTQwODI4IDQ4Ljk3NTA5ODYsMy4yMzM5MDUzMyA0OC41MTI1NDY2LDQuODE4MTA2NTEgQzQ1LjA1Nzg2MTYsMTYuNjA3MDIxNyA0MS42MDQ3ODI3LDI4LjM5Njc0NTYgMzguMTUzMzA5OSw0MC4xODcyNzgxIEMzOC4wMDYzNTMzLDQwLjY5NDMxOTUgMzcuODA4ODA1LDQwLjg2NDE0MiAzNy4yNzM5NzkzLDQwLjg1OTI4OTkgQzM0LjI4NDI1NTQsNDAuODMwMTc3NSAzMS4yOTQ1MzE1LDQwLjg0NDczMzcgMjguMzA0ODA3Niw0MC44NDQ3MzM3IEMyOC4xOTM5ODc4LDQwLjg0NDczMzcgMjguMDgwNzU5LDQwLjgyNzc1MTUgMjcuODkyODQ3Miw0MC44MTU2MjEzIEMyOC4zMzEzMDgsMzkuMzExNDc5MyAyOC43NjAxMzIyLDM3Ljg0MzcyNzggMjkuMTg4OTU2NCwzNi4zNzU5NzYzIEMzMC4xNjQ2NTIsMzMuMDMyODk5NCAzMS4xMzA3MTEsMjkuNjg0OTcwNCAzMi4xMzA0OTc4LDI2LjM0OTE3MTYgQzMyLjMwMTU0NTcsMjUuNzgxNDc5MyAzMi4yMDI3NzE2LDI1LjYzODM0MzIgMzEuNjE3MzU0MiwyNS42NDMxOTUzIEMyOS4wMzk1OTA3LDI1LjY2NzQ1NTYgMjYuNDU5NDE4LDI1LjY0MzE5NTMgMjMuODgxNjU0NCwyNS42NDMxOTUzIEMyMi45NzgyMzI2LDI1LjY0MzE5NTMgMjIuOTcxMDA1MiwyNS42NDMxOTUzIDIzLjIwOTUwODYsMjQuNzM1ODU4IEMyMy45MzIyNDYsMjIuMDExNDIwMSAyNC42NjcwMjkxLDE5LjI4OTQwODMgMjUuMzc3NzIwOSwxNi41NjAxMTgzIEMyNS41MDI5OTU0LDE2LjA3NDkxMTIgMjUuNzEwMTgwMiwxNS44OTUzODQ2IDI2LjIxMzY4NzIsMTUuOTAyNjYyNyBDMjguOTUwNDUzLDE1Ljk0NjMzMTQgMzEuNjg3MjE4OCwxNS45MzkwNTMzIDM0LjQyMzk4NDYsMTUuOTk3Mjc4MSBDMzUuMDIzODU2NywxNi4wMDk0MDgzIDM1LjI0MDY3OCwxNS43OTEwNjUxIDM1LjM4NzYzNDYsMTUuMjQyNzgxMSBDMzYuNzk5MzgxNywxMC4zMzAwNTkyIDM4LjI0MDAzODQsNS40MjcwNDE0MiAzOS42NzEwNTg1LDAuNTIxNTk3NjMzIEMzOS43NTc3ODcsMC4yMjU2MjEzMDIgMzkuODM0ODc5LC0wLjAwMjQyNjAzNTUgNDAuMjQ2ODM5NCw4LjI5NTgyNzEzZS0xNSBDNDMuNDAyNzkyOSwwLjAyNDI2MDM1NSA0Ni41NTE1MTksMC4wMTk0MDgyODQgNDkuNzAwMjQ1MiwwLjAyNDI2MDM1NSBDNDkuNzYzMDc4NCwwLjAzNjIyODU4MjggNDkuODI0NDU5MiwwLjA1NDkzNDcyNDQgNDkuODgzMzM4NywwLjA4MDA1OTE3MTYiIGlkPSJwYXRoMjAiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+";

var VHPreloader = function VHPreloader(props) {
  if (props.type === "bubble") {
    return _react.default.createElement(S.PreloaderBubble, {
      size: props.size
    }, _react.default.createElement("div", null), _react.default.createElement("div", null), _react.default.createElement("div", null));
  }

  if (props.type === "fullPage") {
    return _react.default.createElement(S.Container, null, _react.default.createElement(S.ImageSection, null, _react.default.createElement(S.Image, {
      image: VHLoading
    })), _react.default.createElement(S.PreloaderSection, null, _react.default.createElement(S.PreloaderBubble, {
      size: props.size
    }, _react.default.createElement("div", null), _react.default.createElement("div", null), _react.default.createElement("div", null))));
  }

  return _react.default.createElement(S.PreloaderCircle, {
    size: props.size
  }, _react.default.createElement("div", null));
};

VHPreloader.defaultProps = {
  content: ''
};
VHPreloader.propTypes = {
  size: _propTypes.default.string
};
var _default = VHPreloader;
exports.default = _default;