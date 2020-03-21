"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    padding-left: 20px;\n    text-decoration: none;\n    color: ", ";\n    :hover {\n        color: ", ";\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    align-items: center;\n    width: 100%;\n    height: 40px;\n    font-family: Roboto;\n    font-size: 14px;\n    font-weight: 500;\n    color: ", ";\n    display: flex;\n    flex-direction: row;\n    :hover {\n        border-right : 2px solid ", ";\n        color: ", ";\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject(), _Colors.default["black-100"], _Colors.default["primary-light"], _Colors.default["primary-light"]);

exports.Wrapper = Wrapper;

var Link = _styledComponents.default.a(_templateObject2(), _Colors.default["black-100"], _Colors.default["primary-light"]);

exports.Link = Link;