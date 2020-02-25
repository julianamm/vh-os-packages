"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Info = exports.IconWrapper = exports.InfoDate = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-family: Roboto;\n  font-size: 12px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: ", ";\n  margin-right: 3rem;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n   width: 22.7px;\n   height: 21.5px;\n   display: grid;\n   justify-content: center;\n   align-items: center;\n   margin-right: 0.5rem;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: Roboto;\n  font-size: 16px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.75;\n  letter-spacing: normal;\n  color: ", ";\n  border-radius: 3px;\n  background-color: ", ";\n  padding: 6px 12px 6px 12px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  min-width: 62%;\n  padding-right: 48px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject());

exports.Wrapper = Wrapper;

var InfoDate = _styledComponents.default.div(_templateObject2(), _Colors.default["tertiary-dark"], _Colors.default["black-10"]);

exports.InfoDate = InfoDate;

var IconWrapper = _styledComponents.default.div(_templateObject3());

exports.IconWrapper = IconWrapper;

var Info = _styledComponents.default.span(_templateObject4(), _Colors.default["gray-80"]);

exports.Info = Info;