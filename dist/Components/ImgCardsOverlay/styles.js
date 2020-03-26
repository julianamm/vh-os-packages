"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardRightWrapper = exports.CardLeftWrapper = exports.CardsWrapper = exports.ImgItem = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    width: 250px;\n    height: 250px;\n    margin-right: 5px;\n    box-shadow: 0 2px 21px 0 rgba(0, 0, 0, 0.1);\n    position: absolute;\n    top: 30%;\n    left: 52%;\n    z-index: 2;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    width: 250px;\n    height: 250px;\n    margin-right: 5px;\n    box-shadow: 0 2px 21px 0 rgba(0, 0, 0, 0.1);\n    position: absolute;\n    top: 10%;\n    left: 0;\n    z-index: 2;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    margin: 0 auto;\n    width: 80%;\n    height: 80%;\n    background-size: contain;\n    background-image: url(", ");\n    background-repeat: no-repeat;\n    background-position: center;\n    z-index: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 100vh;\n    position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject());

exports.Wrapper = Wrapper;

var ImgItem = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.image && props.image;
});

exports.ImgItem = ImgItem;

var CardsWrapper = _styledComponents.default.div(_templateObject3());

exports.CardsWrapper = CardsWrapper;

var CardLeftWrapper = _styledComponents.default.div(_templateObject4());

exports.CardLeftWrapper = CardLeftWrapper;

var CardRightWrapper = _styledComponents.default.div(_templateObject5());

exports.CardRightWrapper = CardRightWrapper;