"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Info = exports.Title = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    font-family: Roboto;\n    font-size: 16px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 35px;\n    letter-spacing: normal;\n    text-align: center;\n    color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    font-family: Roboto;\n    font-size: 28px;\n    font-weight: 500;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 50px;\n    letter-spacing: normal;\n    text-align: center;\n    color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Title = _styledComponents.default.span(_templateObject(), _Colors.default["black-90"]);

exports.Title = Title;

var Info = _styledComponents.default.span(_templateObject2(), _Colors.default["gray-60"]);

exports.Info = Info;