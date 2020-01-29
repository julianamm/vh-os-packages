"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Body = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("@Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tfont-family: Roboto;\n\tfont-size: 14px;\n  line-height: 18px;\n  text-decoration: none;\n  cursor: ", ";\n  color: ", ";\n\n  :visited {\n    color: ", ";\n  }\n\n  :hover {\n    color: ", ";\n    text-decoration: underline;\n  }\n\n  :active {\n    color: ", ";\n    text-decoration: underline;\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Body = _styledComponents.default.a(_templateObject(), function (props) {
  return props.cursor ? props.cursor : 'pointer';
}, function (props) {
  return props.color === "primary-light" ? "".concat(_Colors.default.primary.light, " !important") : "".concat(_Colors.default.primary.main);
}, _Colors.default.primary.main, _Colors.default.primary.light, _Colors.default.primary.dark, function (_ref) {
  var sm = _ref.sm;
  return sm && "\n    font-size: 14px;\n    line-height: 18px;\n  ";
}, function (_ref2) {
  var xs = _ref2.xs;
  return xs && "\n    font-size: 12px;\n    line-height: 16px;\n  ";
}, function (_ref3) {
  var lg = _ref3.lg;
  return lg && "\n    font-size: 16px;\n    line-height: 20px;\n  ";
}, function (_ref4) {
  var reverse = _ref4.reverse;
  return reverse && "\n    color: #fff !important;\n  ";
}, function (_ref5) {
  var noUnderscore = _ref5.noUnderscore;
  return noUnderscore && "\n    text-decoration: none !important;\n  ";
}, function (_ref6) {
  var white = _ref6.white;
  return white && "\n    color: #ffffff !important;\n    transition: opacity 0.5s;\n    :hover {\n      opacity: 0.7;\n    }\n  ";
});

exports.Body = Body;
var _default = Body;
exports.default = _default;