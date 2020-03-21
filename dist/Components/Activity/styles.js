"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Elipse = exports.Item = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 13px;\n  height: 13px;\n  border-radius: 100%;\n  background-color: blue;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  margin-left: -5px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  min-height: 220px;\n  border-left: 2px solid blue;\n  position: relative;\n  display: flex;\n\n  :last-child {\n    border-left: none;\n  }\n\n  @media (max-width: 425px) {\n    height: 290px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Item = _styledComponents.default.div(_templateObject());

exports.Item = Item;

var Elipse = _styledComponents.default.div(_templateObject2());

exports.Elipse = Elipse;