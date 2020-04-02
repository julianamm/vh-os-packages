"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = exports.LoaderContainer = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  border: ", ";\n  border-radius: 6px;\n  color: ", ";\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.53;\n  letter-spacing: normal;\n  padding: 9px 12px;\n  width: 100%;\n  background: transparent;\n  outline: 0;\n  box-sizing: border-box;\n\n  ::placeholder {\n    font-size: 14px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.53;\n    letter-spacing: normal;\n    color: ", ";\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 12px;\n  right: 18px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject());

exports.Container = Container;

var LoaderContainer = _styledComponents.default.div(_templateObject2());

exports.LoaderContainer = LoaderContainer;

var Input = _styledComponents.default.input(_templateObject3(), function (props) {
  return props.noBorder ? 'none' : "1px solid ".concat(_Colors.default["gray-30"]);
}, _Colors.default["gray-90"], _Colors.default["gray-50"], function (_ref) {
  var disabled = _ref.disabled;
  return disabled && "\n    background-color: ".concat(_Colors.default["gray-10"], ";\n  ");
}, function (_ref2) {
  var error = _ref2.error;
  return error && "\n    color: ".concat(_Colors.default["red"], ";\n    border-color: ").concat(_Colors.default["red"], ";\n  ");
}, function (_ref3) {
  var loading = _ref3.loading;
  return loading && "\n    color: ".concat(_Colors.default["primary-dark"], ";\n  ");
});

exports.Input = Input;