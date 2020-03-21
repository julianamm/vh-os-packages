"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.OutlinedButton = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  border: 1px solid ", ";\n  border-radius: 4px;\n  font-family: Roboto;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  cursor: pointer;\n  height: 32px;\n  background: transparent;\n\n  :hover {\n    background-color: ", ";\n    border: 1px solid ", ";\n    color: ", ";\n  }\n\n  :active {\n    background-color: ", ";\n    border: 1px solid ", ";\n    color: ", ";\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  color: ", ";\n  border-radius: 4px;\n  font-family: Roboto;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  cursor: pointer;\n  height: 32px;\n\n  :focus {\n    outline-style: none;\n  }\n\n  :hover {\n    background-color: ", ";\n  }\n\n  :active {\n    background-color: ", ";\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents.default.button(_templateObject(), _Colors.default["gradient-primary"], _Colors.default["gradient-primary"], _Colors.default["gray-20"], _Colors.default["primary-light"], _Colors.default["primary-dark"], function (_ref) {
  var nowrap = _ref.nowrap;
  return nowrap && "\n    white-space:nowrap;\n  ";
}, function (_ref2) {
  var sm = _ref2.sm;
  return sm && "\n    height: 32px;\n    font-size: 14px;\n    line-height: 18px;\n  ";
}, function (_ref3) {
  var lg = _ref3.lg;
  return lg && "\n    height: 40px;\n    font-size: 16px;\n    line-height: 20px;\n  ";
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
  var disabled = _ref9.disabled;
  return disabled && "\n    color: ".concat(_Colors.default["black-40"], ";\n    background-color: ").concat(_Colors.default["black-10"], ";\n    border: solid 1px ").concat(_Colors.default["black-10"], ";\n    :hover {\n      background-color: ").concat(_Colors.default["black-10"], ";\n      border: 1px solid ").concat(_Colors.default["black-10"], ";\n      color: ").concat(_Colors.default["black-40"], ";\n      cursor: not-allowed;\n    }\n  ");
});

var OutlinedButton = _styledComponents.default.button(_templateObject2(), _Colors.default["gradient-primary"], _Colors.default["gradient-primary"], _Colors.default["primary-light"], _Colors.default["primary-light"], _Colors.default["white-light"], _Colors.default["primary-dark"], _Colors.default["primary-dark"], _Colors.default["white-light"], function (_ref10) {
  var nowrap = _ref10.nowrap;
  return nowrap && "\n    white-space:nowrap;\n  ";
}, function (_ref11) {
  var full = _ref11.full;
  return full && "\n    width: 100%;\n  ";
}, function (_ref12) {
  var primary = _ref12.primary;
  return primary && "\n    color: ".concat(_Colors.default["gradient-primary"], ";\n    border: 1px solid ").concat(_Colors.default["gradient-primary"], ";\n    :hover {\n      background-color: ").concat(_Colors.default["primary-light"], ";\n      border: 1px solid ").concat(_Colors.default["primary-light"], ";\n    }\n    :active {\n      background-color: ").concat(_Colors.default["primary-dark"], ";\n      border: 1px solid ").concat(_Colors.default["primary-dark"], ";\n    }\n  ");
}, function (_ref13) {
  var secondary = _ref13.secondary;
  return secondary && "\n    color: ".concat(_Colors.default.secondary, ";\n    border: 1px solid ").concat(_Colors.default.secondary, ";\n    :hover {\n      background-color: ").concat(_Colors.default["secondary-light"], ";\n      border: 1px solid ").concat(_Colors.default["secondary-light"], ";\n    }\n    :active {\n      background-color: ").concat(_Colors.default["secondary-dark"], ";\n      border: 1px solid ").concat(_Colors.default["secondary-dark"], ";\n    }\n  ");
}, function (_ref14) {
  var danger = _ref14.danger;
  return danger && "\n    color: ".concat(_Colors.default.red, ";\n    border: 1px solid ").concat(_Colors.default.red, ";\n    :hover {\n      background-color: ").concat(_Colors.default["red-dark"], ";\n      border: 1px solid ").concat(_Colors.default.red, ";\n    }\n    :active {\n      background-color: ").concat(_Colors.default["red-dark"], ";\n      border: 1px solid ").concat(_Colors.default["red-dark"], ";\n    }\n  ");
}, function (_ref15) {
  var disabled = _ref15.disabled;
  return disabled && "\n    color: ".concat(_Colors.default["black-40"], " !important;\n    background-color: ").concat(_Colors.default["black-10"], " !important;\n    border: solid 1px ").concat(_Colors.default["black-10"], " !important;\n    :hover {\n      background-color: ").concat(_Colors.default["black-10"], ";\n      border: 1px solid ").concat(_Colors.default["black-10"], ";\n      color: ").concat(_Colors.default["black-40"], ";\n      cursor: not-allowed;\n    }\n  ");
}, function (_ref16) {
  var white = _ref16.white;
  return white && "\n      background-color: transparent;\n      border: 1px solid ".concat(_Colors.default["gray-20"], ";\n      color: ").concat(_Colors.default["gray-20"], ";\n      :hover {\n        background-color: ").concat(_Colors.default["primary-light"], ";\n        border: 1px solid ").concat(_Colors.default["primary-light"], ";\n      }\n\n      :active {\n        background-color: ").concat(_Colors.default["primary-dark"], ";\n        border: 1px solid ").concat(_Colors.default["primary-dark"], ";\n      }\n    ");
});

exports.OutlinedButton = OutlinedButton;
var _default = Button;
exports.default = _default;