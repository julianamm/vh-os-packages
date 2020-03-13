"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Row = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n    flex-direction: column;\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    width: 96%;\n\n\n    @media only screen and (max-width: 768px) {\n        width: 93%;\n    }\n\n    padding: 0;\n    margin: 0 auto;\n    flex-direction: column;\n\n    ", "\n\n    ", "\n\n    ", "\n    ", "\n    ", "\n\n    ", "\n\n    ", "\n"]);

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
}, function (_ref4) {
  var alignItemsCenter = _ref4.alignItemsCenter;
  return alignItemsCenter && "\n        align-items: center;\n    ";
}, function (_ref5) {
  var fullHeight = _ref5.fullHeight;
  return fullHeight && "\n        height: 100vh;\n    ";
}, function (_ref6) {
  var justifyCenter = _ref6.justifyCenter;
  return justifyCenter && "\n        justify-content: center;\n    ";
}, function (_ref7) {
  var fullWidth = _ref7.fullWidth;
  return fullWidth && "\n        width: 100% !important;\n    ";
});

exports.Container = Container;

var Row = _styledComponents.default.div(_templateObject2(), function (_ref8) {
  var row = _ref8.row;
  return row && "\n        flex-direction: row;\n    ";
}, function (_ref9) {
  var column = _ref9.column;
  return column && "\n        flex-direction: column;\n    ";
}, function (_ref10) {
  var justifySpaceAround = _ref10.justifySpaceAround;
  return justifySpaceAround && "\n        justify-content: space-around;\n    ";
}, function (_ref11) {
  var justifySpaceBetween = _ref11.justifySpaceBetween;
  return justifySpaceBetween && "\n        justify-content: space-between;\n    ";
}, function (_ref12) {
  var justifyBottom = _ref12.justifyBottom;
  return justifyBottom && "\n        justify-content: flex-end;\n    ";
}, function (_ref13) {
  var alignItemsRight = _ref13.alignItemsRight;
  return alignItemsRight && "\n        align-items: flex-end;\n    ";
}, function (_ref14) {
  var alignItemsLeft = _ref14.alignItemsLeft;
  return alignItemsLeft && "\n        align-items: flex-start;\n    ";
}, function (_ref15) {
  var alignItemsCenter = _ref15.alignItemsCenter;
  return alignItemsCenter && "\n        align-items: center;\n    ";
}, function (_ref16) {
  var responsive = _ref16.responsive;
  return responsive && "\n        @media only screen and (max-width: 768px) {\n            flex-direction: column;\n        }\n    ";
}, function (_ref17) {
  var autoWidth = _ref17.autoWidth;
  return autoWidth && "\n       width: auto;\n    ";
}, function (_ref18) {
  var paddingRight8 = _ref18.paddingRight8;
  return paddingRight8 && "\n       padding-right: 24px;\n    ";
}, function (_ref19) {
  var paddingRight2 = _ref19.paddingRight2;
  return paddingRight2 && "\n       padding-right: 6px;\n    ";
}, function (_ref20) {
  var margin = _ref20.margin;
  return margin && "\n       margin: 3px 0;\n    ";
}, function (_ref21) {
  var marginBottom3 = _ref21.marginBottom3;
  return marginBottom3 && "\n       margin-bottom: 9px;\n    ";
}, function (_ref22) {
  var marginBottom4 = _ref22.marginBottom4;
  return marginBottom4 && "\n       margin-bottom: 12px;\n    ";
}, function (_ref23) {
  var marginBottom5 = _ref23.marginBottom5;
  return marginBottom5 && "\n       margin-bottom: 15px;\n    ";
}, function (_ref24) {
  var marginBottom = _ref24.marginBottom;
  return marginBottom && "\n       margin-bottom: ".concat(marginBottom * 3, "px;\n    ");
}, function (_ref25) {
  var marginTop = _ref25.marginTop;
  return marginTop && "\n       margin-top: ".concat(marginTop, "px;\n    ");
}, function (_ref26) {
  var height = _ref26.height;
  return height && "\n       height: ".concat(height, "px;\n    ");
}, function (_ref27) {
  var overflowY = _ref27.overflowY;
  return overflowY && "\n       overflow-y: ".concat(overflowY, ";\n    ");
}, function (_ref28) {
  var width = _ref28.width;
  return width && "\n       width: ".concat(width, ";\n    ");
});

exports.Row = Row;