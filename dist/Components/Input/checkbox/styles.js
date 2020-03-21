"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperMulti = exports.Wrapper = exports.Input = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin-right: 9px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";;\n  width: 14px;\n  height: 14px;\n  border-radius: 3px;\n  margin-right: 9px;\n  grid-ga\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 20px;\n  height: 20px;\n  margin: -1px 0 0 -2px;\n  background-color: ", ";\n  border-radius: 3px;\n  border: solid 1px ", ";\n  cursor: pointer;\n\n  :checked  {\n    opacity: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Input = _styledComponents.default.input(_templateObject(), _Colors.default["gray-20"], _Colors.default["gray-30"]);

exports.Input = Input;

var Wrapper = _styledComponents.default.span(_templateObject2(), _Colors.default["gradient-primary"]);

exports.Wrapper = Wrapper;

var WrapperMulti = _styledComponents.default.span(_templateObject3());

exports.WrapperMulti = WrapperMulti;