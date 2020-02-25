"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var S = _interopRequireWildcard(require("./styles"));

var _Simple = _interopRequireDefault(require("../Simple"));

var _Img = _interopRequireDefault(require("../../Img"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* babel-plugin-inline-import '../../../../assets/icons/icon-github.svg' */
var GitHubIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNhKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzVDNkJDMCIgZD0iTTkuOTk5LjIwOEM0LjQ3Ny4yMDggMCA0LjcwMyAwIDEwLjI0OGMwIDQuNDM1IDIuODY1IDguMTk4IDYuODQgOS41MjcuNS4wOTIuNjgzLS4yMTguNjgzLS40ODQgMC0uMjM5LS4wMS0uODctLjAxNC0xLjcwOC0yLjc4Mi42MDctMy4zNjktMS4zNDYtMy4zNjktMS4zNDYtLjQ1NC0xLjE2LTEuMTEtMS40NjktMS4xMS0xLjQ2OS0uOTA5LS42MjIuMDY4LS42MS4wNjgtLjYxIDEuMDAzLjA3MiAxLjUzIDEuMDM1IDEuNTMgMS4wMzUuODkzIDEuNTM0IDIuMzQyIDEuMDkyIDIuOTEyLjgzNC4wOS0uNjQ5LjM0OS0xLjA5MS42MzUtMS4zNDMtMi4yMi0uMjUzLTQuNTU1LTEuMTE0LTQuNTU1LTQuOTYgMC0xLjA5Ny4zOS0xLjk5MyAxLjAzLTIuNjk2LS4xMDQtLjI1My0uNDQ2LTEuMjc1LjA5Ny0yLjY1NiAwIDAgLjg0LS4yNyAyLjc1IDEuMDI5YTkuNTQgOS41NCAwIDAgMSAyLjUwNC0uMzM4IDkuNTYzIDkuNTYzIDAgMCAxIDIuNTA0LjMzOWMxLjkwOS0xLjI5OSAyLjc0Ny0xLjAyOSAyLjc0Ny0xLjAyOS41NDUgMS4zODMuMjAzIDIuNDAzLjEgMi42NTYuNjQyLjcwMyAxLjAyOCAxLjYgMS4wMjggMi42OTYgMCAzLjg1Ni0yLjMzNyA0LjcwNS00LjU2NSA0Ljk1My4zNTkuMzEuNjc5LjkyMy42NzkgMS44NTkgMCAxLjM0My0uMDEzIDIuNDI1LS4wMTMgMi43NTQgMCAuMjY4LjE4LjU4MS42ODguNDgyQTEwLjA0IDEwLjA0IDAgMCAwIDIwIDEwLjI0OEMyMCA0LjcwMyAxNS41MjMuMjA4IDkuOTk5LjIwOHoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjB2MjBIMFYweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=";

/* babel-plugin-inline-import '../../../../assets/icons/icon-likedin-login.svg' */
var LinkedInIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiBmaWxsPSIjZmZmIi8+CiAgICA8cGF0aCBmaWxsPSIjMDA3QUI5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy42MTIgMTYuNzEydi0zLjkwNGMwLTIuMDkxLTEuMTE2LTMuMDY1LTIuNjA1LTMuMDY1LTEuMjAxIDAtMS43NC42NjEtMi4wNCAxLjEyNXYtLjk2NWgtMi4yNjNjLjAzLjY0IDAgNi44MSAwIDYuODFoMi4yNjNWMTIuOTFjMC0uMjAzLjAxNS0uNDA3LjA3NS0uNTUyLjE2My0uNDA3LjUzNi0uODI4IDEuMTYtLjgyOC44MiAwIDEuMTQ3LjYyNSAxLjE0NyAxLjU0djMuNjQzaDIuMjYzek04LjMyIDguOTc0Yy43ODkgMCAxLjI4LS41MjMgMS4yOC0xLjE3Ny0uMDE0LS42NjgtLjQ5MS0xLjE3Ni0xLjI2NS0xLjE3Ni0uNzc0IDAtMS4yOC41MDgtMS4yOCAxLjE3NiAwIC42NTQuNDkgMS4xNzcgMS4yNSAxLjE3N2guMDE1ek0xMiAyMkM2LjQ3NyAyMiAyIDE3LjUyMyAyIDEyUzYuNDc3IDIgMTIgMnMxMCA0LjQ3NyAxMCAxMC00LjQ3NyAxMC0xMCAxMHptLTIuNTQ5LTUuMjg4VjkuOTAzSDcuMTg4djYuODFoMi4yNjN6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==";

/* babel-plugin-inline-import '../../../../assets/icons/icon-globe.svg' */
var WebSiteIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiMwNjc1Q0UiIGQ9Ik0xMS45OSAyQzYuNDcgMiAyIDYuNDggMiAxMnM0LjQ3IDEwIDkuOTkgMTBDMTcuNTIgMjIgMjIgMTcuNTIgMjIgMTJTMTcuNTIgMiAxMS45OSAyem02LjkzIDZoLTIuOTVhMTUuNjUgMTUuNjUgMCAwIDAtMS4zOC0zLjU2QTguMDMgOC4wMyAwIDAgMSAxOC45MiA4ek0xMiA0LjA0Yy44MyAxLjIgMS40OCAyLjUzIDEuOTEgMy45NmgtMy44MmMuNDMtMS40MyAxLjA4LTIuNzYgMS45MS0zLjk2ek00LjI2IDE0QzQuMSAxMy4zNiA0IDEyLjY5IDQgMTJzLjEtMS4zNi4yNi0yaDMuMzhjLS4wOC42Ni0uMTQgMS4zMi0uMTQgMiAwIC42OC4wNiAxLjM0LjE0IDJINC4yNnptLjgyIDJoMi45NWMuMzIgMS4yNS43OCAyLjQ1IDEuMzggMy41NkE3Ljk4NyA3Ljk4NyAwIDAgMSA1LjA4IDE2em0yLjk1LThINS4wOGE3Ljk4NyA3Ljk4NyAwIDAgMSA0LjMzLTMuNTZBMTUuNjUgMTUuNjUgMCAwIDAgOC4wMyA4ek0xMiAxOS45NmMtLjgzLTEuMi0xLjQ4LTIuNTMtMS45MS0zLjk2aDMuODJjLS40MyAxLjQzLTEuMDggMi43Ni0xLjkxIDMuOTZ6TTE0LjM0IDE0SDkuNjZjLS4wOS0uNjYtLjE2LTEuMzItLjE2LTIgMC0uNjguMDctMS4zNS4xNi0yaDQuNjhjLjA5LjY1LjE2IDEuMzIuMTYgMiAwIC42OC0uMDcgMS4zNC0uMTYgMnptLjI1IDUuNTZjLjYtMS4xMSAxLjA2LTIuMzEgMS4zOC0zLjU2aDIuOTVhOC4wMyA4LjAzIDAgMCAxLTQuMzMgMy41NnpNMTYuMzYgMTRjLjA4LS42Ni4xNC0xLjMyLjE0LTIgMC0uNjgtLjA2LTEuMzQtLjE0LTJoMy4zOGMuMTYuNjQuMjYgMS4zMS4yNiAycy0uMSAxLjM2LS4yNiAyaC0zLjM4eiIvPgo8L3N2Zz4K";

/* babel-plugin-inline-import '../../../../assets/icons/mdi_search.svg' */
var SearchIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDE2Ij4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNhKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI0I2QjJCMiIgZD0iTTE1LjUgMTBoLS43OWwtLjI4LS4yN0E2LjQ3MSA2LjQ3MSAwIDAgMCAxNiA1LjUgNi41IDYuNSAwIDEgMCA5LjUgMTJjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxNWwtNC45OS01em0tNiAwQzcuMDEgMTAgNSA3Ljk5IDUgNS41UzcuMDEgMSA5LjUgMSAxNCAzLjAxIDE0IDUuNSAxMS45OSAxMCA5LjUgMTB6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9ImEiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djE1LjAxNkgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=";

var VHInputIcon = function VHInputIcon(props) {
  var checkIcon = function checkIcon() {
    switch (props.icon) {
      case 'github':
        return GitHubIcon;

      case 'world':
        return WebSiteIcon;

      case 'linkedin':
        return LinkedInIcon;

      case 'search':
        return SearchIcon;

      default:
        return WebSiteIcon;
    }
  };

  var Icon = checkIcon();
  return _react.default.createElement(S.Wrapper, {
    className: "vh-icon-input ".concat(props.className ? props.className : '')
  }, _react.default.createElement(_Img.default, {
    className: "vh-icon-with-input-icon",
    source: Icon,
    title: props.icon,
    sm: true
  }), _react.default.createElement(_Simple.default, {
    disabled: props.disabled,
    error: props.error,
    loading: props.loading,
    placeholder: props.placeholder,
    data: props.data,
    value: props.value,
    onEvent: props.onEvent,
    noBorder: true
  }));
};

VHInputIcon.defaultProps = {
  iconColor: "black-100",
  textColor: "black-100",
  textVariant: "platform1",
  onEvent: null,
  data: null,
  placeholder: "",
  value: "",
  icon: WebSiteIcon,
  className: ''
};
VHInputIcon.propTypes = {
  iconColor: _propTypes.default.string,
  textColor: _propTypes.default.string,
  textVariant: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  onEvent: _propTypes.default.func.isRequired,
  data: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  value: _propTypes.default.string,
  icon: _propTypes.default.string,
  className: _propTypes.default.string
};
var _default = VHInputIcon;
exports.default = _default;