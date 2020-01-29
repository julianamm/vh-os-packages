"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Row = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    width: ", ";\n    padding: ", ";\n    margin: 0;\n    flex-direction: column;\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n    flex-direction: column;\n    margin: 0 auto;\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject(), function (_ref) {
  var cover = _ref.cover,
      mobile = _ref.mobile;
  return cover && "\n        background-image: url(".concat(cover, ");\n        background-repeat: no-repeat;\n        background-attachment: fixed;\n        background-size: cover;\n    ");
}, function (_ref2) {
  var margin = _ref2.margin;
  return margin && "\n        margin: 32px auto;\n    ";
}, function (_ref3) {
  var margin2 = _ref3.margin2;
  return margin2 && "\n        margin: 64px auto;\n        margin-top: 160px;\n    ";
}, function (_ref4) {
  var md = _ref4.md,
      margin = _ref4.margin;
  return md && "\n        max-width: 980px;\n        width: 100%;\n\n        ".concat(margin && "\n            margin: 32px auto;\n        ", "\n    ");
}, function (_ref5) {
  var lg = _ref5.lg;
  return lg && "\n        max-width: 1200px;\n        width: 100%;\n    ";
}, function (_ref6) {
  var sm = _ref6.sm;
  return sm && "\n        max-width: 330px;\n        width: 100%;\n    ";
}, function (_ref7) {
  var mt = _ref7.mt;
  return mt && "\n        margin-top: 48px;\n    ";
}, function (_ref8) {
  var mt2 = _ref8.mt2;
  return mt2 && "\n        margin-top: 24px;\n    ";
});

exports.Container = Container;

var Row = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.width ? props.width : '100%';
}, function (props) {
  return props.padding ? props.padding : 0;
}, function (_ref9) {
  var row = _ref9.row;
  return row && "\n        flex-direction: row;\n    ";
}, function (_ref10) {
  var justifySpaceAround = _ref10.justifySpaceAround;
  return justifySpaceAround && "\n        justify-content: space-around;\n    ";
}, function (_ref11) {
  var justifySpaceBetween = _ref11.justifySpaceBetween;
  return justifySpaceBetween && "\n        justify-content: space-between;\n    ";
}, function (_ref12) {
  var alignItemsRight = _ref12.alignItemsRight;
  return alignItemsRight && "\n        align-items: flex-end;\n    ";
}, function (_ref13) {
  var alignItemsCenter = _ref13.alignItemsCenter;
  return alignItemsCenter && "\n        align-items: center;\n    ";
}, function (_ref14) {
  var responsive = _ref14.responsive;
  return responsive && "\n        @media only screen and (max-width: 768px) {\n            flex-direction: column;\n        }\n    ";
}, function (_ref15) {
  var mt = _ref15.mt;
  return mt && "\n        margin-top: 48px;\n    ";
}, function (_ref16) {
  var mt2 = _ref16.mt2;
  return mt2 && "\n        margin-top: 24px;\n    ";
});

exports.Row = Row;