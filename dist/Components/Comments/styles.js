"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Area = exports.Description = exports.Date = exports.Name = exports.CommentWrapper = exports.Wrapper = exports.Title = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    width: 589px;\n    height: 40px;\n    border-radius: 6px;\n    border: solid 1px var(--gray-30);\n    background-color: var(--gray-20);\n    padding: 15px;\n\n    ::placeholder {\n        color: gray;\n    }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    width: 376px;\n    height: 30px;\n    font-family: Roboto;\n    font-size: 14px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.53;\n    letter-spacing: normal;\n    color: ", ";\n    padding-left: 45px;\n    margin-top: -10px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    height: 14px;\n    font-family: Roboto;\n    font-size: 12px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: ", ";\n    padding-left: 12px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    height: 21px;\n    font-family: Roboto;\n    font-size: 14px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.53;\n    letter-spacing: normal;\n    color: ", ";\n    padding-left: 12px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    padding: 5px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    padding-top: 10px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 90px;\n    height: 16px;\n    font-family: Roboto;\n    font-size: 14px;\n    font-weight: 500;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: var(--gray-80);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Title = _styledComponents.default.p(_templateObject());

exports.Title = Title;

var Wrapper = _styledComponents.default.div(_templateObject2());

exports.Wrapper = Wrapper;

var CommentWrapper = _styledComponents.default.div(_templateObject3());

exports.CommentWrapper = CommentWrapper;

var Name = _styledComponents.default.p(_templateObject4(), _Colors.default['gray-100']);

exports.Name = Name;

var Date = _styledComponents.default.p(_templateObject5(), _Colors.default['gray-50']);

exports.Date = Date;

var Description = _styledComponents.default.p(_templateObject6(), _Colors.default['gray-80']);

exports.Description = Description;

var Area = _styledComponents.default.textarea(_templateObject7());

exports.Area = Area;