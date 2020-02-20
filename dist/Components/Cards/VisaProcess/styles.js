"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InfoTime = exports.Name = exports.Info = exports.Tag = exports.Footer = exports.MenuCircle = exports.FavoriteWrapper = exports.CommentsWrapper = exports.TimeWrapper = exports.IconWrapper = exports.Avatar = exports.AvatarWrapper = exports.PersonalInfo = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  font-family: Roboto;\n  font-size: 12px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: ", "\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n font-family: Roboto;\n  font-size: 16px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: ", ";\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  font-family: Roboto;\n  font-size: 12px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: ", ";\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    width: 69px;\n    text-align: center;\n    border-radius: 32px;\n    font-family: Roboto;\n    font-size: 0.75rem;\n    color: ", ";\n    padding: 0.2rem 0.2rem;\n    margin-bottom: 1rem;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    margin-top: 1rem;\n    padding-top: 0.781rem;\n    border-top: 1px solid ", ";\n    display: grid;\n    grid-template-columns: 75% auto;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    cursor: pointer;\n    margin-top: 0.75rem;\n    div {\n        width: 4px;\n        height: 4px;\n        margin-bottom: 3px;\n        border-radius: 50%;\n        background-color: ", "\n    }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n   width: 22.7px;\n   height: 21.5px;\n   display: grid;\n   justify-content: center;\n   align-items: center;\n   padding-right: 10px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n   width: 22.7px;\n   height: 21.5px;\n   display: grid;\n   justify-content: center;\n   align-items: center;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n   width: 22.7px;\n   height: 21.5px;\n   display: grid;\n   justify-content: center;\n   align-items: center;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n   width: 22.7px;\n   height: 21.5px;\n   display: grid;\n   justify-content: center;\n   align-items: center;\n   margin-right: 1rem;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n   width: 100%;\n   width: 18.7px;\n   height: 19.5px;\n   border-radius: 50%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n   border: 1px solid ", ";\n   border-radius: 50%;\n   width: 20.7px;\n   height: 21.5px;\n   display: grid;\n   justify-content: center;\n   align-items: center;\n   margin-right: 1rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n   width: 100%;\n   display: grid;\n   div {\n       margin-bottom: 0.188rem;\n   }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PersonalInfo = _styledComponents.default.div(_templateObject());

exports.PersonalInfo = PersonalInfo;

var AvatarWrapper = _styledComponents.default.div(_templateObject2(), _Colors.default.blue);

exports.AvatarWrapper = AvatarWrapper;

var Avatar = _styledComponents.default.img(_templateObject3());

exports.Avatar = Avatar;

var IconWrapper = _styledComponents.default.div(_templateObject4());

exports.IconWrapper = IconWrapper;

var TimeWrapper = _styledComponents.default.div(_templateObject5());

exports.TimeWrapper = TimeWrapper;

var CommentsWrapper = _styledComponents.default.div(_templateObject6());

exports.CommentsWrapper = CommentsWrapper;

var FavoriteWrapper = _styledComponents.default.div(_templateObject7());

exports.FavoriteWrapper = FavoriteWrapper;

var MenuCircle = _styledComponents.default.div(_templateObject8(), _Colors.default["gray-90"]);

exports.MenuCircle = MenuCircle;

var Footer = _styledComponents.default.div(_templateObject9(), _Colors.default["gray-10"]);

exports.Footer = Footer;

var Tag = _styledComponents.default.div(_templateObject10(), _Colors.default.green, _Colors.default["gray-20"]);

exports.Tag = Tag;

var Info = _styledComponents.default.span(_templateObject11(), _Colors.default["gray-80"]);

exports.Info = Info;

var Name = _styledComponents.default.h1(_templateObject12(), _Colors.default["gradient-primary"]);

exports.Name = Name;

var InfoTime = _styledComponents.default.span(_templateObject13(), function (props) {
  return props.avgTime ? "".concat(_Colors.default.green, ";") : "".concat(_Colors.default.red, ";");
});

exports.InfoTime = InfoTime;