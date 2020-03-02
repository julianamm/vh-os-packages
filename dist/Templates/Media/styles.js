"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper2 = exports.Press = exports.Wrapper1 = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width: 1440px;\n    height: 300px;\n    background-color: ", ";\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    text-shadow: 0 0 16px rgba(0, 0, 0, 0.1), 0 1px 4px rgba(0, 0, 0, 0.25);\n    font-family: Roboto;\n    font-size: 36px;\n    font-weight: 500;\n    font-stretch: normal;\n    font-style: normal;\n    letter-spacing: normal;\n    text-align: center;\n    color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 1439px;\n    height: 391px;\n    // object-fit: contain;\n    background-color: ", ";\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper1 = _styledComponents.default.div(_templateObject(), _Colors.default["gradient-primary"]);

exports.Wrapper1 = Wrapper1;

var Press = _styledComponents.default.p(_templateObject2(), _Colors.default["gray-20"]);

exports.Press = Press;

var Wrapper2 = _styledComponents.default.div(_templateObject3(), _Colors.default["gray-20"]);

exports.Wrapper2 = Wrapper2;