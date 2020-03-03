"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfirmationSection = exports.Content = exports.Close = exports.Header = exports.ModalBox = exports.ModalContainer = exports.FadeIn = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: auto auto;\n  grid-column-gap: 1rem;\n  justify-content: end;\n  margin-top: 2rem;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 1rem;\n  font-family: Roboto;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  float: right;\n  color: #000000;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: 95% 5%;\n  margin: 0;\n  padding: 0;\n  font-family: NunitoSans, sans-serif;\n  color: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  width: ", ";\n  min-width: ", ";\n  max-width: 960px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: ", ";\n  border: solid 1px #e0e0e0;\n  border-radius: 3px;\n  padding: 32px;\n  animation: 0.35s ", " ease-in;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.75);\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 999;\n  transition: all 0.3s;\n  display: ", ";\n  animation: 0.35s ", " ease-in;\n  \n  overflow: scroll;\n  overflow-x: hidden;\n  overflow-y: hidden;\n\n  :hover {\n    overflow-y: auto;\n    overflow-x: auto;\n  }\n\n  ::-webkit-scrollbar {\n    background-color: transparent;\n    width: 8px;\n    height: 8px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background-color: ", ";\n    border-radius: 4px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * FadeIn Animation
 */
var FadeIn = (0, _styledComponents.keyframes)(_templateObject());
exports.FadeIn = FadeIn;

var ModalContainer = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.open ? "block" : "none";
}, FadeIn, _Colors.default["gray-30"]);

exports.ModalContainer = ModalContainer;

var ModalBox = _styledComponents.default.div(_templateObject3(), function (props) {
  return props.width ? "".concat(props.width, "%") : 'auto';
}, function (props) {
  return props.minWidth ? "".concat(props.minWidth, "px") : 'auto';
}, _Colors.default.white, FadeIn);

exports.ModalBox = ModalBox;

var Header = _styledComponents.default.div(_templateObject4(), _Colors.default["black-90"]);

exports.Header = Header;

var Close = _styledComponents.default.span(_templateObject5());

exports.Close = Close;

var Content = _styledComponents.default.div(_templateObject6());

exports.Content = Content;

var ConfirmationSection = _styledComponents.default.div(_templateObject7());

exports.ConfirmationSection = ConfirmationSection;