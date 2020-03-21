"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = exports.UnderlineText = exports.ImgWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    \n    ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    border-bottom: 3px solid #059ca6;\n    margin: auto 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 90%;\n    height: 90%;\n    background-size: contain;\n    background-image: url(", ");\n    background-repeat: no-repeat;\n    background-position: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ImgWrapper = _styledComponents.default.div(_templateObject(), function (props) {
  return props.image && props.image;
});

exports.ImgWrapper = ImgWrapper;

var UnderlineText = _styledComponents.default.span(_templateObject2());

exports.UnderlineText = UnderlineText;

var Wrapper = _styledComponents.default.div(_templateObject3(), function (_ref) {
  var reverse = _ref.reverse;
  return reverse && "\n        flex-direction: row-reverse;\n  ";
});

exports.Wrapper = Wrapper;