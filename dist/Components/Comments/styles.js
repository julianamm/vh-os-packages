"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextWrapper = exports.Area = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    margin-left: 1rem;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 40px;\n    border-radius: 6px;\n    border: solid 1px ", ";\n    background-color: ", ";\n    padding: 15px;\n    margin-left: 1rem;\n    outline: 0;\n    ::placeholder {\n        color: gray;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 180px;\n  overflow: scroll;\n  overflow-x: hidden;\n  overflow-y: hidden;\n\n  :hover {\n    overflow-y: auto;\n  }\n\n  ::-webkit-scrollbar {\n    background-color: transparent;\n    width: 5px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background-color: ", ";\n    border-radius: 4px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject(), _Colors.default["gray-30"]);

exports.Wrapper = Wrapper;

var Area = _styledComponents.default.textarea(_templateObject2(), _Colors.default["gray-30"], _Colors.default["gray-20"]);

exports.Area = Area;

var TextWrapper = _styledComponents.default.span(_templateObject3());

exports.TextWrapper = TextWrapper;