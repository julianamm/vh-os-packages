"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Textarea = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

var _Simple = _interopRequireDefault(require("../Input/Simple"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 45px;\n    border-radius: 6px;\n    border: solid 1px ", ";\n    background-color: ", ";\n    padding: 15px;\n    margin-top: 5px;\n    outline: 0;\n    font-size: 14px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    font-family: Roboto;\n    letter-spacing: normal;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Textarea = (0, _styledComponents.default)(_Simple.default)(_templateObject(), _Colors.default["gray-30"], _Colors.default["gray-20"]);
exports.Textarea = Textarea;