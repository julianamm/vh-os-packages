"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Row = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n    flex-direction: column;\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    width: 96%;\n    @media only screen and (max-width: 768px) {\n        width: 93%;\n    }\n\n    padding: 0;\n    margin: 0 auto;\n    flex-direction: column;\n\n    ", "\n\n    ", "\n\n    ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject(), function (_ref) {
  var md = _ref.md;
  return md && "\n        max-width: 980px;\n    ";
}, function (_ref2) {
  var lg = _ref2.lg;
  return lg && "\n        max-width: 1200px;\n    ";
}, function (_ref3) {
  var sm = _ref3.sm;
  return sm && "\n        max-width: 330px;\n    ";
});

exports.Container = Container;

var Row = _styledComponents.default.div(_templateObject2(), function (_ref4) {
  var row = _ref4.row;
  return row && "\n        flex-direction: row;\n    ";
}, function (_ref5) {
  var justifySpaceAround = _ref5.justifySpaceAround;
  return justifySpaceAround && "\n        justify-content: space-around;\n    ";
}, function (_ref6) {
  var justifySpaceBetween = _ref6.justifySpaceBetween;
  return justifySpaceBetween && "\n        justify-content: space-between;\n    ";
}, function (_ref7) {
  var justifyBottom = _ref7.justifyBottom;
  return justifyBottom && "\n        justify-content: flex-end;\n    ";
}, function (_ref8) {
  var alignItemsRight = _ref8.alignItemsRight;
  return alignItemsRight && "\n        align-items: flex-end;\n    ";
}, function (_ref9) {
  var alignItemsCenter = _ref9.alignItemsCenter;
  return alignItemsCenter && "\n        align-items: center;\n    ";
}, function (_ref10) {
  var responsive = _ref10.responsive;
  return responsive && "\n        @media only screen and (max-width: 768px) {\n            flex-direction: column;\n        }\n    ";
}, function (_ref11) {
  var autoWidth = _ref11.autoWidth;
  return autoWidth && "\n       width: auto;\n    ";
}, function (_ref12) {
  var paddingRight8 = _ref12.paddingRight8;
  return paddingRight8 && "\n       padding-right: 24px;\n    ";
}, function (_ref13) {
  var margin = _ref13.margin;
  return margin && "\n       margin: 3px 0;\n    ";
}, function (_ref14) {
  var marginBottom3 = _ref14.marginBottom3;
  return marginBottom3 && "\n       margin-bottom: 9px;\n    ";
}, function (_ref15) {
  var marginBottom4 = _ref15.marginBottom4;
  return marginBottom4 && "\n       margin-bottom: 12px;\n    ";
}, function (_ref16) {
  var marginBottom5 = _ref16.marginBottom5;
  return marginBottom5 && "\n       margin-bottom: 15px;\n    ";
}, function (_ref17) {
  var marginBottom = _ref17.marginBottom;
  return marginBottom && "\n       margin-bottom: ".concat(marginBottom * 3, "px;\n    ");
});

exports.Row = Row;