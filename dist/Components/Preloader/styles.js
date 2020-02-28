"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Image = exports.PreloaderSection = exports.ImageSection = exports.Container = exports.PreloaderCircle = exports.PreloaderBubble = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 100px;\n  height: 100px;\n  background-image: url(", ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin-left: -6px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 0 16px 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  justify-items: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  div {\n    width: 50px;\n    height: 50px;\n    display: block;\n    background: transparent;\n    border-radius: 50%;\n    border: 7px solid rgba(28, 128, 128, 0.2);\n    border-left: 7px solid ", ";\n    animation: 1.5s rotate infinite linear;\n    margin: 0 auto;\n    @keyframes rotate {\n      from {\n        transform: rotateZ(0deg);\n      }\n      to {\n        transform: rotateZ(360deg);\n      }\n    }\n\n    ", "\n\n    ", "\n\n    ", "\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: repeat(3, 32px);\n  grid-column-gap: 16px;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  div {\n    width: 32px;\n    height: 32px;\n    border-radius: 100%;\n    background: ", ";\n    -webkit-animation: bounce 1.48s ease-in-out infinite both;\n    animation: bounce 1.48s ease-in-out infinite both;\n    ", "\n\n    ", "\n\n    ", "\n\n    :nth-child(1) {\n      -webkit-animation-delay: -0.32s;\n      animation-delay: -0.32s;\n    }\n    :nth-child(2) {\n      -webkit-animation-delay: -0.16s;\n      animation-delay: -0.16s;\n    }\n    @-webkit-keyframes bounce {\n      0%,\n      80%,\n      100% {\n        -webkit-transform: scale(0);\n        transform: scale(0);\n      }\n      40% {\n        -webkit-transform: scale(1);\n        transform: scale(1);\n      }\n    }\n\n    @keyframes bounce {\n      0%,\n      80%,\n      100% {\n        -webkit-transform: scale(0);\n        transform: scale(0);\n      }\n      40% {\n        -webkit-transform: scale(1);\n        transform: scale(1);\n      }\n    }\n    @-webkit-keyframes beat {\n      to {\n        -webkit-transform: scale(1.5);\n        transform: scale(1.5);\n      }\n    }\n    @keyframes beat {\n      to {\n        -webkit-transform: scale(1.5);\n        transform: scale(1.5);\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PreloaderBubble = _styledComponents.default.div(_templateObject(), function (_ref) {
  var size = _ref.size;
  return size === 'md' && "\n      grid-template-columns: repeat(3, 24px);\n      grid-column-gap: 12px;\n    ";
}, function (_ref2) {
  var size = _ref2.size;
  return size === 'sm' && "\n      grid-template-columns: repeat(3, 16px);\n      grid-column-gap: 8px;\n    ";
}, function (_ref3) {
  var size = _ref3.size;
  return size === 'xs' && "\n      grid-template-columns: repeat(3, 8px);\n      grid-column-gap: 12px;\n    ";
}, _Colors.default['primary-light'], function (_ref4) {
  var size = _ref4.size;
  return size === 'md' && "\n      width: 32px;\n      height: 32px;\n    ";
}, function (_ref5) {
  var size = _ref5.size;
  return size === 'sm' && "\n      width: 24px;\n      height: 24px;\n    ";
}, function (_ref6) {
  var size = _ref6.size;
  return size === 'xs' && "\n      width: 16px;\n      height: 16px;\n    ";
});

exports.PreloaderBubble = PreloaderBubble;

var PreloaderCircle = _styledComponents.default.div(_templateObject2(), _Colors.default['primary-light'], function (_ref7) {
  var size = _ref7.size;
  return size === 'md' && "\n      width: 32px;\n      height: 32px;\n      border: 6px solid rgba(28, 128, 128, 0.2);\n      border-left: 6px solid ".concat(_Colors.default['primary-light'], ";\n    ");
}, function (_ref8) {
  var size = _ref8.size;
  return size === 'sm' && "\n      width: 24px;\n      height: 24px;\n      border: 3px solid rgba(28, 128, 128, 0.2);\n      border-left: 3px solid ".concat(_Colors.default['primary-light'], ";\n    ");
}, function (_ref9) {
  var size = _ref9.size;
  return size === 'xs' && "\n      width: 16px;\n      height: 16px;\n      border: 2px solid rgba(28, 128, 128, 0.2);\n      border-left: 2px solid ".concat(_Colors.default['primary-light'], ";\n    ");
});

exports.PreloaderCircle = PreloaderCircle;

var Container = _styledComponents.default.div(_templateObject3());

exports.Container = Container;

var ImageSection = _styledComponents.default.div(_templateObject4());

exports.ImageSection = ImageSection;

var PreloaderSection = _styledComponents.default.div(_templateObject5());

exports.PreloaderSection = PreloaderSection;

var Image = _styledComponents.default.div(_templateObject6(), function (props) {
  return props.image && props.image;
});

exports.Image = Image;