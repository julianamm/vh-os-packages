"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardRightWrapper = exports.CardLeftWrapper = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    margin-left: 8px;\n    box-shadow: 0 2px 21px 0 rgba(0, 0, 0, 0.1);\n    position: absolute;\n    top: 45%;\n    left: 50%;\n    z-index: 2;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    margin-right: 8px;\n    box-shadow: 0 2px 21px 0 rgba(0, 0, 0, 0.1);\n    position: absolute;\n    top: -5%;\n    right: 50%;\n    z-index: 3;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject());

exports.Wrapper = Wrapper;

var CardLeftWrapper = _styledComponents.default.div(_templateObject2());

exports.CardLeftWrapper = CardLeftWrapper;

var CardRightWrapper = _styledComponents.default.div(_templateObject3());

exports.CardRightWrapper = CardRightWrapper;