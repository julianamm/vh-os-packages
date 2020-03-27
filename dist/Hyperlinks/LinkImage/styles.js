"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.A = exports.IconWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  font-family: Roboto;\n  font-size: 14px;\n  line-height: 18px;\n  text-decoration: none;\n  width: 100%;\n  align-items: center;\n  cursor: ", ";\n  color: ", ";\n  :visited {\n    color: ", ";\n  }\n  :hover {\n    color: ", ";\n    text-decoration: underline;\n  }\n  :active {\n    color: ", ";\n    text-decoration: underline;\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n    \n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 12px;\n  vertical-align: middle;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var IconWrapper = _styledComponents.default.span(_templateObject());

exports.IconWrapper = IconWrapper;

var A = _styledComponents.default.a(_templateObject2(), function (props) {
  return props.cursor ? props.cursor : 'pointer';
}, function (props) {
  return props.color === "primary-light" ? "".concat(_Colors.default["primary-light"], " !important") : "".concat(_Colors.default["gradient-primary"]);
}, _Colors.default["gradient-primary"], _Colors.default["primary-light"], _Colors.default["primary-dark"], function (_ref) {
  var sm = _ref.sm;
  return sm && "\n    font-size: 14px;\n    line-height: 18px;\n  ";
}, function (_ref2) {
  var xs = _ref2.xs;
  return xs && "\n    font-size: 12px;\n    line-height: 16px;\n  ";
}, function (_ref3) {
  var lg = _ref3.lg;
  return lg && "\n    font-size: 16px;\n    line-height: 20px;\n  ";
}, function (_ref4) {
  var noUnderscore = _ref4.noUnderscore;
  return noUnderscore && "\n    text-decoration: none !important;\n  ";
}, function (_ref5) {
  var reverse = _ref5.reverse;
  return reverse && "\n      justify-content: flex-end;\n";
});

exports.A = A;