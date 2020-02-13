"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    border-radius: ", ";\n    padding: 24px;\n    box-sizing: border-box;\n    border-top: ", ";\n\n    :hover {\n        box-shadow: ", ";\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Card = _styledComponents.default.div(_templateObject(), _Colors.default["gray-20"], function (props) {
  return props.noBorder ? "0" : "6px";
}, function (props) {
  return props.favorite ? "3px solid ".concat(_Colors.default["yellow-dark"]) : 'none';
}, function (props) {
  return !props.noHover && "0 4px 14px 0 rgba(0, 0, 0, 0.1)";
});

exports.Card = Card;