"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-family: Roboto;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 20px;\n  height: 20px;\n  margin: 0;\n  padding: 0;\n\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-family: Roboto;\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 24px;\n  height: 24px;\n  margin: 0;\n  text-align: ", ";\n  padding: ", ";\n\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-family: Roboto;\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 32px;\n  height: 32px;\n  margin: 0;\n  padding: 0;\n\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-family: Roboto;\n  font-size: 28px;\n  font-weight: 500;\n  line-height: 36px;\n  height: 36px;\n  margin: 0;\n  padding: 0;\n\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-family: Roboto;\n  font-size: 32px;\n  font-weight: 500;\n  line-height: 40px;\n  height: 40px;\n  margin: 0;\n  padding: 0;\n\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-family: Roboto;\n  font-size: 36px;\n  font-weight: 500;\n  line-height: 48px;\n  height: 48px;\n  margin: 0;\n  padding: 0;\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var H1 = _styledComponents.default.h1(_templateObject(), _Colors.default["black-90"], function (_ref) {
  var reverse = _ref.reverse;
  return reverse && "\n    color: ".concat(_Colors.default.white, ";\n  ");
});

exports.H1 = H1;

var H2 = _styledComponents.default.h2(_templateObject2(), _Colors.default["black-90"], function (_ref2) {
  var reverse = _ref2.reverse;
  return reverse && "\n    color: ".concat(_Colors.default.white, ";\n  ");
});

exports.H2 = H2;

var H3 = _styledComponents.default.h3(_templateObject3(), _Colors.default["black-90"], function (_ref3) {
  var reverse = _ref3.reverse;
  return reverse && "\n    color: ".concat(_Colors.default.white, ";\n  ");
});

exports.H3 = H3;

var H4 = _styledComponents.default.h4(_templateObject4(), _Colors.default["black-90"], function (_ref4) {
  var reverse = _ref4.reverse;
  return reverse && "\n    color: ".concat(_Colors.default.white, ";\n  ");
});

exports.H4 = H4;

var H5 = _styledComponents.default.h5(_templateObject5(), _Colors.default["black-90"], function (props) {
  return props.textAlign ? props.textAlign : 'unset';
}, function (props) {
  return props.padding ? props.padding : '0';
}, function (_ref5) {
  var reverse = _ref5.reverse;
  return reverse && "\n    color: ".concat(_Colors.default.white, ";\n  ");
});

exports.H5 = H5;

var H6 = _styledComponents.default.h6(_templateObject6(), _Colors.default["black-90"], function (_ref6) {
  var reverse = _ref6.reverse;
  return reverse && "\n    color: ".concat(_Colors.default.white, ";\n  ");
});

exports.H6 = H6;
var _default = H1;
exports.default = _default;