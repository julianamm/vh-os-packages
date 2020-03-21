"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  border: 1px solid ", ";\n  border-radius: 4px;\n  font-family: Roboto;\n  text-align: center;\n  color: ", ";\n  font-family: Roboto;\n  font-size: 12px;\n  line-height: 16px;\n  margin: 4px 0 4px 0;\n  outline: 0;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents.default.button(_templateObject(), _Colors.default["primary-rgb-light"], _Colors.default["gradient-light"], _Colors.default["black-50"], function (_ref) {
  var noHover = _ref.noHover;
  return !noHover && "\n    cursor: pointer;\n    :hover {\n      background-color: ".concat(_Colors.default["primary-light"], ";\n    }\n\n    :active {\n      background-color: ").concat(_Colors.default["primary-dark"], ";\n    }\n  ");
}, function (_ref2) {
  var primary = _ref2.primary,
      noHover = _ref2.noHover;
  return primary && "\n    background: ".concat(_Colors.default["primary-rgb-light"], ";\n    border: 1px solid ").concat(_Colors.default["gradient-light"], ";\n    ").concat(!noHover && "\n      :hover {\n        background-color: ".concat(_Colors.default["primary-light"], ";\n        border: 1px solid ").concat(_Colors.default["primary-light"], ";\n        color: ").concat(_Colors.default["white-light"], ";\n      }\n      :active {\n        background-color: ").concat(_Colors.default["primary-dark"], ";\n        border: 1px solid ").concat(_Colors.default["primary-dark"], ";\n        color: ").concat(_Colors.default["white-light"], ";\n      }\n    "), "\n  ");
}, function (_ref3) {
  var secondary = _ref3.secondary,
      noHover = _ref3.noHover;
  return secondary && "\n    background: ".concat(_Colors.default["secondary-rgb-light"], ";\n    border: 1px solid ").concat(_Colors.default.secondary, ";\n    ").concat(!noHover && "\n      :hover {\n        color: ".concat(_Colors.default["white-light"], ";\n        border: 1px solid  ").concat(_Colors.default["secondary-light"], ";\n        background-color:  ").concat(_Colors.default["secondary-light"], ";\n      }\n\n      :active {\n        background-color:  ").concat(_Colors.default["secondary-dark"], ";\n        border: 1px solid  ").concat(_Colors.default["secondary-dark"], ";\n      }\n    "), "\n  ");
}, function (_ref4) {
  var round = _ref4.round;
  return round && "\n    border-radius: 20px;\n  ";
}, function (_ref5) {
  var danger = _ref5.danger,
      noHover = _ref5.noHover;
  return danger && "\n  background:  ".concat(_Colors.default["red-rgb-light"], ";\n  border: 1px solid ").concat(_Colors.default.red, ";\n  ").concat(!noHover && "\n    :hover {\n      background-color: ".concat(_Colors.default["red-rgb-light-hover"], ";\n      border: 1px solid ").concat(_Colors.default["danger-light"], ";\n    }\n  "), "\n  // :active {\n  //   background-color: ").concat(_Colors.default["red-dark"], ";\n  //   border: 1px solid ").concat(_Colors.default["red-dark"], ";\n  // }\n");
}, function (_ref6) {
  var disabled = _ref6.disabled;
  return disabled && "\n    color: ".concat(_Colors.default["black-40"], ";\n    background-color: ").concat(_Colors.default["black-10"], ";\n    border: solid 1px ").concat(_Colors.default["black-10"], ";\n    :hover {\n      background-color: ").concat(_Colors.default["black-10"], ";\n      border: 1px solid ").concat(_Colors.default["black-10"], ";\n      color: ").concat(_Colors.default["black-40"], ";\n      cursor: not-allowed;\n    }\n  ");
}, function (_ref7) {
  var transparent = _ref7.transparent;
  return transparent && "\n    background-color: transparent;\n  ";
}, function (_ref8) {
  var marginLeft = _ref8.marginLeft;
  return marginLeft && "\n    margin-left: 8px;\n  ";
}, function (_ref9) {
  var marginRight = _ref9.marginRight;
  return marginRight && "\n    margin-right: 8px;\n  ";
});

var _default = Button;
exports.default = _default;