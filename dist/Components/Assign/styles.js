"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = exports.Rounded = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  opacity: 0;\n  position: absolute;\n  margin-top: -30px;\n  color: ", ";\n  background-color: ", ";\n  padding: 4px 8px 4px 8px;\n  border-radius: 3px;\n  font-family: Roboto;\n\n  ", ":hover & {\n    opacity: 1;\n  } \n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  color: ", ";\n  text-align: center;\n  display: grid;\n  align-items: center;\n  cursor: default;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-left: -5px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.span(_templateObject());

exports.Wrapper = Wrapper;

var Rounded = _styledComponents.default.div(_templateObject2(), _Colors.default["gray-80"], _Colors.default["black-100"]);

exports.Rounded = Rounded;

var Tooltip = _styledComponents.default.span(_templateObject3(), _Colors.default.white, _Colors.default["black-80"], Wrapper);

exports.Tooltip = Tooltip;