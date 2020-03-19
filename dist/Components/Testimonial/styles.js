"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextWrapper = exports.AvatarWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    margin: 0;\n    padding: 0;\n    color: ", ";\n    font-family: Roboto;\n    font-size: 14px;\n    font-weight: 'regular';\n    line-height: 21.5px;\n    margin-left: 12px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    ", "\n    ", "\n    ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AvatarWrapper = _styledComponents.default.span(_templateObject());

exports.AvatarWrapper = AvatarWrapper;

var TextWrapper = _styledComponents.default.span(_templateObject2(), function (props) {
  return _Colors.default[props.color];
}, function (_ref) {
  var sm = _ref.sm;
  return sm && "\n        font-size: 14px;\n        line-height: 18px;\n    ";
}, function (_ref2) {
  var xs = _ref2.xs;
  return xs && "\n        font-size: 12px;\n        line-height: 16px;\n    ";
}, function (_ref3) {
  var lg = _ref3.lg;
  return lg && "\n        font-size: 16px !important;\n        line-height: 20px;\n    ";
});

exports.TextWrapper = TextWrapper;