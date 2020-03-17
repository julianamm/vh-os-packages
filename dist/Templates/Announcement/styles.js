"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper1 = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    height: 70vh;\n    background-color: ", ";\n    display: flex;\n    align-items: center;\n    ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper1 = _styledComponents.default.div(_templateObject(), _Colors.default["gradient-primary"], function (_ref) {
  var cover = _ref.cover;
  return cover && "\n        background-image: url(".concat(cover, ");\n        background-repeat: no-repeat;\n        background-attachment: fixed;\n        background-size: cover;\n    ");
});

exports.Wrapper1 = Wrapper1;