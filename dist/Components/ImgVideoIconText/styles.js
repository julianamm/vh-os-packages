"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemsWrapper = exports.ImgOverlay = exports.ImgItem = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    bottom: 20px;\n    z-index: 3;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 40%;\n    border-radius: 0 0 7px 7px;\n    background-image: linear-gradient(to top, #080809, rgba(88, 90, 90, 0));\n    -webkit-transition: all ease .5s;\n    -moz-transition: all ease .5s;\n    transition: all ease .5s;\n    filter: blur(8px);\n    -webkit-filter: blur(8px);\n    z-index: 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 100%;\n    background-size: contain;\n    background-image: url(", ");\n    background-repeat: no-repeat;\n    background-position: center;\n    z-index: -1;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 600px;\n    height: 470px;\n    position: relative;\n\n    ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject(), function (_ref) {
  var responsive = _ref.responsive;
  return responsive && "\n    @media only screen and (max-width: 768px) {\n        width: 300px;\n        height: 250px;\n        position: relative;\n    }\n";
});

exports.Wrapper = Wrapper;

var ImgItem = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.image && props.image;
});

exports.ImgItem = ImgItem;

var ImgOverlay = _styledComponents.default.div(_templateObject3());

exports.ImgOverlay = ImgOverlay;

var ItemsWrapper = _styledComponents.default.div(_templateObject4());

exports.ItemsWrapper = ItemsWrapper;