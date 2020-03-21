"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImgWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 100%;\n    background-size: contain;\n    background-image: url(", ");\n    background-repeat: no-repeat;\n    background-position: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ImgWrapper = _styledComponents.default.div(_templateObject(), function (props) {
  return props.image && props.image;
});

exports.ImgWrapper = ImgWrapper;