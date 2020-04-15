"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimerContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    width: min-content;\n    div {\n        margin-right: 4px;\n    }\n    div:last-child {\n        margin-right: 0;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TimerContainer = _styledComponents.default.div(_templateObject());

exports.TimerContainer = TimerContainer;