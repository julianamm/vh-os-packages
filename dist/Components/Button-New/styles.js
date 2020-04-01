"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TextButton = exports.OutlinedButton = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background-color: transparent;\n  border: none;\n  color: ", ";\n  padding:12px;\n  border-radius: 3px;\n  font-family: Roboto;\n  font-size: 14px;\n  line-height: auto;\n  text-align: center;\n  cursor: pointer;\n\n  :hover {\n    background-color: ", ";\n    border: none;\n    color: ", ";\n  }\n\n  :active {\n    background-color: ", ";\n    border: none;\n    color: ", ";\n  }\n\n  ", "\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: transparent;\n  border: 1px solid ", ";\n  color: ", ";\n  padding:12px;\n  border-radius: 3px;\n  font-family: Roboto;\n  font-size: 14px;\n  line-height: auto;\n  text-align: center;\n  cursor: pointer;\n\n  :hover {\n    background-color: ", ";\n    border: 1px solid ", ";\n    color: ", ";\n  }\n\n  :active {\n    background-color: ", ";\n    border: 1px solid ", ";\n    color: ", ";\n  }\n\n  ", "\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  color: ", ";\n  padding:12px;\n  border-radius: 3px;\n  font-family: Roboto;\n  font-size: 14px;\n  line-height: auto;\n  text-align: center;\n  cursor: pointer;\n\n  :focus {\n    outline-style: none;\n  }\n\n  :hover {\n    background-color: ", ";\n  }\n\n  :active {\n    background-color: ", ";\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n  \n  ", "\n\n  ", "\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents.default.button(_templateObject(), _Colors.default["primary"], _Colors.default["primary"], _Colors.default["white"], _Colors.default["primary-light"], _Colors.default["primary-dark"], function (_ref) {
  var nowrap = _ref.nowrap;
  return nowrap && "\n    white-space:nowrap;\n  ";
}, function (_ref2) {
  var sm = _ref2.sm;
  return sm && "\n    font-size: 12px;\n    line-height: auto;\n    padding:6px;\n  ";
}, function (_ref3) {
  var lg = _ref3.lg;
  return lg && "\n    font-size: 16px;\n    font-weight:bold;\n    padding:18px;\n  ";
}, function (_ref4) {
  var xs = _ref4.xs;
  return xs && "\n    height: 24px;\n    font-size: 12px;\n    line-height: 16px;\n  ";
}, function (_ref5) {
  var full = _ref5.full;
  return full && "\n    width: 100%;\n  ";
}, function (_ref6) {
  var primary = _ref6.primary;
  return primary && "\n    background-color: ".concat(_Colors.default["gradient-primary"], ";\n    border: 1px solid ").concat(_Colors.default["gradient-primary"], ";\n    :hover {\n      background-color: ").concat(_Colors.default["primary-light"], ";\n      border: 1px solid ").concat(_Colors.default["primary-light"], ";\n    }\n    :active {\n      background-color: ").concat(_Colors.default["primary-dark"], ";\n      border: 1px solid ").concat(_Colors.default["primary-dark"], ";\n    }\n  ");
}, function (_ref7) {
  var secondary = _ref7.secondary;
  return secondary && "\n    background-color: ".concat(_Colors.default.secondary, ";\n    border: 1px solid ").concat(_Colors.default.secondary, ";\n    :hover {\n      border: 1px solid ").concat(_Colors.default["secondary-light"], ";\n      background-color: ").concat(_Colors.default["secondary-light"], ";\n    }\n\n    :active {\n      background-color: ").concat(_Colors.default["secondary-dark"], ";\n      border: 1px solid ").concat(_Colors.default["secondary-dark"], ";\n    }\n  ");
}, function (_ref8) {
  var danger = _ref8.danger;
  return danger && "\n    background-color: ".concat(_Colors.default.red, ";\n    border: 1px solid ").concat(_Colors.default.red, ";\n    :hover {\n      background-color: ").concat(_Colors.default.red, ";\n      border: 1px solid ").concat(_Colors.default.red, ";\n    }\n\n    :active {\n      background-color: ").concat(_Colors.default["red-dark"], ";\n      border: 1px solid ").concat(_Colors.default["red-dark"], ";\n    }\n  ");
}, function (_ref9) {
  var success = _ref9.success;
  return success && "\n    color: ".concat(_Colors.default["white"], ";\n    border: 1px solid ").concat(_Colors.default["green"], ";\n    background-color: ").concat(_Colors.default["green"], ";\n    :hover {\n      background-color: ").concat(_Colors.default["green-dark"], ";\n      border: 1px solid ").concat(_Colors.default["green-dark"], ";\n    }\n    :active {\n      background-color: ").concat(_Colors.default["red-dark"], ";\n      border: 1px solid ").concat(_Colors.default["red-dark"], ";\n    }\n");
}, function (_ref10) {
  var disabled = _ref10.disabled;
  return disabled && "\n    color: ".concat(_Colors.default["black-40"], ";\n    background-color: ").concat(_Colors.default["black-10"], ";\n    border: solid 1px ").concat(_Colors.default["black-10"], ";\n    :hover {\n      background-color: ").concat(_Colors.default["black-10"], ";\n      border: 1px solid ").concat(_Colors.default["black-10"], ";\n      color: ").concat(_Colors.default["black-40"], ";\n      cursor: not-allowed;\n    }\n  ");
});

var OutlinedButton = _styledComponents.default.button(_templateObject2(), _Colors.default["primary"], _Colors.default["primary"], _Colors.default["primary-light"], _Colors.default["primary-light"], _Colors.default["white-light"], _Colors.default["primary-dark"], _Colors.default["primary-dark"], _Colors.default["white-light"], function (_ref11) {
  var nowrap = _ref11.nowrap;
  return nowrap && "\n    white-space:nowrap;\n  ";
}, function (_ref12) {
  var sm = _ref12.sm;
  return sm && "\n    font-size: 12px;\n    line-height: auto;\n    padding:6px;\n  ";
}, function (_ref13) {
  var lg = _ref13.lg;
  return lg && "\n    font-size: 16px;\n    font-weight:bold;\n    padding:18px;\n  ";
}, function (_ref14) {
  var xs = _ref14.xs;
  return xs && "\n    height: 24px;\n    font-size: 12px;\n    line-height: 16px;\n  ";
}, function (_ref15) {
  var full = _ref15.full;
  return full && "\n    width: 100%;\n  ";
}, function (_ref16) {
  var primary = _ref16.primary;
  return primary && "\n    color: ".concat(_Colors.default["gradient-primary"], ";\n    border: 1px solid ").concat(_Colors.default["gradient-primary"], ";\n    :hover {\n      background-color: ").concat(_Colors.default["primary-light"], ";\n      border: 1px solid ").concat(_Colors.default["primary-light"], ";\n    }\n    :active {\n      background-color: ").concat(_Colors.default["primary-dark"], ";\n      border: 1px solid ").concat(_Colors.default["primary-dark"], ";\n    }\n  ");
}, function (_ref17) {
  var secondary = _ref17.secondary;
  return secondary && "\n    color: ".concat(_Colors.default.secondary, ";\n    border: 1px solid ").concat(_Colors.default.secondary, ";\n    :hover {\n      background-color: ").concat(_Colors.default["secondary-light"], ";\n      border: 1px solid ").concat(_Colors.default["secondary-light"], ";\n    }\n    :active {\n      background-color: ").concat(_Colors.default["secondary-dark"], ";\n      border: 1px solid ").concat(_Colors.default["secondary-dark"], ";\n    }\n  ");
}, function (_ref18) {
  var danger = _ref18.danger;
  return danger && "\n    color: ".concat(_Colors.default["red"], ";\n    border: 1px solid ").concat(_Colors.default["red"], ";\n    :hover {\n      background-color: ").concat(_Colors.default["red-dark"], ";\n      border: 1px solid ").concat(_Colors.default["red-dark"], ";\n    }\n    :active {\n      background-color: ").concat(_Colors.default["red-dark"], ";\n      border: 1px solid ").concat(_Colors.default["red-dark"], ";\n    }\n  ");
}, function (_ref19) {
  var success = _ref19.success;
  return success && "\n    color: ".concat(_Colors.default["white"], ";\n    border: 1px solid ").concat(_Colors.default["green"], ";\n    background-color: ").concat(_Colors.default["green"], ";\n    :hover {\n      background-color: ").concat(_Colors.default["green-light"], ";\n      border: 1px solid ").concat(_Colors.default["green-light"], ";\n    }\n    :active {\n      background-color: ").concat(_Colors.default["green-dark"], ";\n      border: 1px solid ").concat(_Colors.default["green-dark"], ";\n    }\n  ");
}, function (_ref20) {
  var disabled = _ref20.disabled;
  return disabled && "\n    color: ".concat(_Colors.default["black-40"], " !important;\n    background-color: ").concat(_Colors.default["black-10"], " !important;\n    border: solid 1px ").concat(_Colors.default["black-10"], " !important;\n    :hover {\n      background-color: ").concat(_Colors.default["black-10"], ";\n      border: 1px solid ").concat(_Colors.default["black-10"], ";\n      color: ").concat(_Colors.default["black-40"], ";\n      cursor: not-allowed;\n    }\n  ");
}, function (_ref21) {
  var white = _ref21.white;
  return white && "\n      background-color: transparent;\n      border: 1px solid ".concat(_Colors.default["gray-20"], ";\n      color: ").concat(_Colors.default["gray-20"], ";\n      :hover {\n        background-color: ").concat(_Colors.default["primary-light"], ";\n        border: 1px solid ").concat(_Colors.default["primary-light"], ";\n      }\n\n      :active {\n        background-color: ").concat(_Colors.default["primary-dark"], ";\n        border: 1px solid ").concat(_Colors.default["primary-dark"], ";\n      }\n    ");
});

exports.OutlinedButton = OutlinedButton;

var TextButton = _styledComponents.default.button(_templateObject3(), _Colors.default["primary"], _Colors.default["primary-light"], _Colors.default["white-light"], _Colors.default["primary-dark"], _Colors.default["white-light"], function (_ref22) {
  var nowrap = _ref22.nowrap;
  return nowrap && "\n    white-space:nowrap;\n  ";
}, function (_ref23) {
  var sm = _ref23.sm;
  return sm && "\n    font-size: 12px;\n    line-height: auto;\n    padding:6px;\n  ";
}, function (_ref24) {
  var lg = _ref24.lg;
  return lg && "\n    font-size: 16px;\n    font-weight:bold;\n    padding:18px;\n  ";
}, function (_ref25) {
  var xs = _ref25.xs;
  return xs && "\n    height: 24px;\n    font-size: 12px;\n    line-height: 16px;\n  ";
}, function (_ref26) {
  var full = _ref26.full;
  return full && "\n    width: 100%;\n  ";
}, function (_ref27) {
  var primary = _ref27.primary;
  return primary && "\n    color: ".concat(_Colors.default["gradient-primary"], ";\n    \n    :hover {\n      background-color: ").concat(_Colors.default["primary-light"], ";\n      \n    }\n    :active {\n      background-color: ").concat(_Colors.default["primary-dark"], ";\n      \n    }\n  ");
}, function (_ref28) {
  var secondary = _ref28.secondary;
  return secondary && "\n    color: ".concat(_Colors.default.secondary, ";\n   \n    :hover {\n      background-color: ").concat(_Colors.default["secondary-light"], ";\n      \n    }\n    :active {\n      background-color: ").concat(_Colors.default["secondary-dark"], ";\n      \n    }\n  ");
}, function (_ref29) {
  var danger = _ref29.danger;
  return danger && "\n    color: ".concat(_Colors.default["red"], ";\n   \n    :hover {\n      background-color: ").concat(_Colors.default["red-dark"], ";\n      \n    }\n    :active {\n      background-color: ").concat(_Colors.default["red-dark"], ";\n      \n    }\n  ");
}, function (_ref30) {
  var success = _ref30.success;
  return success && "\n    color: ".concat(_Colors.default["white"], ";\n    \n    background-color: ").concat(_Colors.default["green"], ";\n    :hover {\n      background-color: ").concat(_Colors.default["green-light"], ";\n      \n    }\n    :active {\n      background-color: ").concat(_Colors.default["green-dark"], ";\n      \n    }\n  ");
}, function (_ref31) {
  var disabled = _ref31.disabled;
  return disabled && "\n    color: ".concat(_Colors.default["black-40"], " !important;\n    background-color: ").concat(_Colors.default["black-10"], "\n   \n    :hover {\n      background-color: ").concat(_Colors.default["black-10"], ";\n     \n      color: ").concat(_Colors.default["black-40"], ";\n      cursor: not-allowed;\n    }\n  ");
}, function (_ref32) {
  var white = _ref32.white;
  return white && "\n      background-color: transparent;\n     \n      color: ".concat(_Colors.default["gray-20"], ";\n      :hover {\n        background-color: ").concat(_Colors.default["primary-light"], ";\n       \n      }\n\n      :active {\n        background-color: ").concat(_Colors.default["primary-dark"], ";\n        \n      }\n    ");
});

exports.TextButton = TextButton;
var _default = Button;
exports.default = _default;