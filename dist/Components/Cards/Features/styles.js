"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = exports.Group = exports.TextWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    list-style: none;\n    border-right: 1px solid ", ";\n    // height: 220px;\n\n      :last-child {\n        border-right: none;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: row;\n    padding: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 65%;\n    max-width: 300px;\n    text-align: center;\n    height: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TextWrapper = _styledComponents.default.span(_templateObject());

exports.TextWrapper = TextWrapper;

var Group = _styledComponents.default.ul(_templateObject2());

exports.Group = Group;

var Item = _styledComponents.default.li(_templateObject3(), _Colors.default["gray-40"]);

exports.Item = Item;