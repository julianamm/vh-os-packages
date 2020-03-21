"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InnerImg = exports.OutterImg = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    right: -3%;\n    bottom: 3%;\n    z-index: 2;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    top: 0;\n    left: 0;\n    z-index: 1;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OutterImg = _styledComponents.default.div(_templateObject());

exports.OutterImg = OutterImg;

var InnerImg = _styledComponents.default.div(_templateObject2());

exports.InnerImg = InnerImg;