"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSameDate = exports.WrapperText = exports.Date = exports.Circle = exports.Item = exports.Group = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  min-height: 3.5rem;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: 70px auto;\n  grid-column-gap: 1rem;\n  margin-top: -1rem;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  margin-left: 1rem;\n  min-width: 70px;\n  min-height: 60px;\n  align-items: baseline;\n  display: grid;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 13px;\n  height: 13px;\n  background-color: ", ";\n  border-radius: 50%;\n  margin-left: -7px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  list-style: none;\n  border-left: 1px solid ", ";\n  min-height: 4rem;\n\n  :last-child {\n    border-left: none;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 0 0 0 5px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Group = _styledComponents.default.ul(_templateObject());

exports.Group = Group;

var Item = _styledComponents.default.li(_templateObject2(), _Colors.default.tertiary);

exports.Item = Item;

var Circle = _styledComponents.default.div(_templateObject3(), _Colors.default.tertiary);

exports.Circle = Circle;

var Date = _styledComponents.default.span(_templateObject4(), _Colors.default.tertiary);

exports.Date = Date;

var WrapperText = _styledComponents.default.span(_templateObject5());

exports.WrapperText = WrapperText;

var WrapperSameDate = _styledComponents.default.div(_templateObject6());

exports.WrapperSameDate = WrapperSameDate;