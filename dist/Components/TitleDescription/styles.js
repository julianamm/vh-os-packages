"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Display = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    padding-left: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    * {\n        margin: 0 0 0 0;\n        display: ", ";\n    }\n    cursor: ", ";\n    display: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject(), function (props) {
  return props.inline ? 'inline' : 'block';
}, function (props) {
  return props.pointer && 'pointer';
}, function (props) {
  return props.contents && 'contents';
});

exports.Wrapper = Wrapper;

var Display = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.inline && '5px';
});

exports.Display = Display;