"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Body = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("@Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-family: Roboto;\n  font-size: 14px;\n  line-height: 18px;\n  margin: 0;\n  padding: 0;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Body = _styledComponents.default.p(_templateObject(), _Colors.default.black.A50, function (_ref) {
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
  return reverse && "\n    color: #fff;\n  ";
});

exports.Body = Body;
var _default = Body;
exports.default = _default;