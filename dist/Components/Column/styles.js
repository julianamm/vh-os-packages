"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberOfCards = exports.AvgTime = exports.ColumnName = exports.Column = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    margin: 0 0 0 1rem;\n    width: 30.1px;\n    height: 30.1px;\n    background-color: ", ";\n    color: ", ";\n    border-radius: 50%;\n    text-align: center;\n    display: grid;\n    align-items: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-family: Roboto;\n  font-size: 0.75rem;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: Roboto;\n  font-size: 1.125rem;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    min-width: 302px;\n    min-height: 100vh;\n    border-radius: 6px;\n    background-color: transparent;\n    padding: 1rem;\n    box-sizing: border-box;\n    transition: background-color 0.5s ease;\n\n    :hover {\n        background-color: ", ";\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Column = _styledComponents.default.div(_templateObject(), _Colors.default["gray-10"]);

exports.Column = Column;

var ColumnName = _styledComponents.default.h1(_templateObject2(), _Colors.default["gray-90"]);

exports.ColumnName = ColumnName;

var AvgTime = _styledComponents.default.p(_templateObject3(), _Colors.default["gray-70"]);

exports.AvgTime = AvgTime;

var NumberOfCards = _styledComponents.default.div(_templateObject4(), _Colors.default["gray-30"], _Colors.default["gray-90"]);

exports.NumberOfCards = NumberOfCards;