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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQ2FyZHMvVmlzYVByb2Nlc3Mvc3R5bGVzLmpzIl0sIm5hbWVzIjpbIlBlcnNvbmFsSW5mbyIsInN0eWxlZCIsImRpdiIsIkF2YXRhcldyYXBwZXIiLCJDb2xvciIsImJsdWUiLCJBdmF0YXIiLCJpbWciLCJJY29uV3JhcHBlciIsIlRpbWVXcmFwcGVyIiwiQ29tbWVudHNXcmFwcGVyIiwiRmF2b3JpdGVXcmFwcGVyIiwiTWVudUNpcmNsZSIsIkZvb3RlciIsIlRhZyIsImdyZWVuIiwiSW5mbyIsInNwYW4iLCJOYW1lIiwiaDEiLCJJbmZvVGltZSIsInByb3BzIiwiYXZnVGltZSIsInJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU8sSUFBTUEsWUFBWSxHQUFHQywwQkFBT0MsR0FBVixtQkFBbEI7Ozs7QUFRQSxJQUFNQyxhQUFhLEdBQUdGLDBCQUFPQyxHQUFWLHFCQUNIRSxnQkFBTUMsSUFESCxDQUFuQjs7OztBQVdBLElBQU1DLE1BQU0sR0FBR0wsMEJBQU9NLEdBQVYsb0JBQVo7Ozs7QUFPQSxJQUFNQyxXQUFXLEdBQUdQLDBCQUFPQyxHQUFWLG9CQUFqQjs7OztBQVNBLElBQU1PLFdBQVcsR0FBR1IsMEJBQU9DLEdBQVYsb0JBQWpCOzs7O0FBT0EsSUFBTVEsZUFBZSxHQUFHVCwwQkFBT0MsR0FBVixvQkFBckI7Ozs7QUFRQSxJQUFNUyxlQUFlLEdBQUdWLDBCQUFPQyxHQUFWLG9CQUFyQjs7OztBQVNBLElBQU1VLFVBQVUsR0FBR1gsMEJBQU9DLEdBQVYscUJBUUtFLGdCQUFNLFNBQU4sQ0FSTCxDQUFoQjs7OztBQVlBLElBQU1TLE1BQU0sR0FBR1osMEJBQU9DLEdBQVYscUJBR1NFLGdCQUFNLFNBQU4sQ0FIVCxDQUFaOzs7O0FBUUEsSUFBTVUsR0FBRyxHQUFHYiwwQkFBT0MsR0FBVixzQkFDUUUsZ0JBQU1XLEtBRGQsRUFPSFgsZ0JBQU0sU0FBTixDQVBHLENBQVQ7Ozs7QUFZQSxJQUFNWSxJQUFJLEdBQUdmLDBCQUFPZ0IsSUFBVixzQkFRTmIsZ0JBQU0sU0FBTixDQVJNLENBQVY7Ozs7QUFXQSxJQUFNYyxJQUFJLEdBQUdqQiwwQkFBT2tCLEVBQVYsc0JBUU5mLGdCQUFNLGtCQUFOLENBUk0sQ0FBVjs7OztBQVdBLElBQU1nQixRQUFRLEdBQUduQiwwQkFBT2dCLElBQVYsc0JBUVYsVUFBQUksS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsT0FBTixhQUFtQmxCLGdCQUFNVyxLQUF6QixtQkFBdUNYLGdCQUFNbUIsR0FBN0MsTUFBSjtBQUFBLENBUkssQ0FBZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgQ29sb3IgZnJvbSBcIi4uLy4uLy4uL0NvbG9yc1wiO1xuXG5leHBvcnQgY29uc3QgUGVyc29uYWxJbmZvID0gc3R5bGVkLmRpdmBcbiAgIHdpZHRoOiAxMDAlO1xuICAgZGlzcGxheTogZ3JpZDtcbiAgIGRpdiB7XG4gICAgICAgbWFyZ2luLWJvdHRvbTogMC4xODhyZW07XG4gICB9XG5gXG5cbmV4cG9ydCBjb25zdCBBdmF0YXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgIGJvcmRlcjogMXB4IHNvbGlkICR7Q29sb3IuYmx1ZX07XG4gICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICB3aWR0aDogMjAuN3B4O1xuICAgaGVpZ2h0OiAyMS41cHg7XG4gICBkaXNwbGF5OiBncmlkO1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuYFxuXG5leHBvcnQgY29uc3QgQXZhdGFyID0gc3R5bGVkLmltZ2BcbiAgIHdpZHRoOiAxMDAlO1xuICAgd2lkdGg6IDE4LjdweDtcbiAgIGhlaWdodDogMTkuNXB4O1xuICAgYm9yZGVyLXJhZGl1czogNTAlO1xuYFxuXG5leHBvcnQgY29uc3QgSWNvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAgd2lkdGg6IDIyLjdweDtcbiAgIGhlaWdodDogMjEuNXB4O1xuICAgZGlzcGxheTogZ3JpZDtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIG1hcmdpbi1yaWdodDogMXJlbTtcbmBcblxuZXhwb3J0IGNvbnN0IFRpbWVXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgIHdpZHRoOiAyMi43cHg7XG4gICBoZWlnaHQ6IDIxLjVweDtcbiAgIGRpc3BsYXk6IGdyaWQ7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gXG5leHBvcnQgY29uc3QgQ29tbWVudHNXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgIHdpZHRoOiAyMi43cHg7XG4gICBoZWlnaHQ6IDIxLjVweDtcbiAgIGRpc3BsYXk6IGdyaWQ7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gXG5cbmV4cG9ydCBjb25zdCBGYXZvcml0ZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAgd2lkdGg6IDIyLjdweDtcbiAgIGhlaWdodDogMjEuNXB4O1xuICAgZGlzcGxheTogZ3JpZDtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG5gXG5cbmV4cG9ydCBjb25zdCBNZW51Q2lyY2xlID0gc3R5bGVkLmRpdmBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMC43NXJlbTtcbiAgICBkaXYge1xuICAgICAgICB3aWR0aDogNHB4O1xuICAgICAgICBoZWlnaHQ6IDRweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Q29sb3JbXCJncmF5LTkwXCJdfVxuICAgIH1cbmBcblxuZXhwb3J0IGNvbnN0IEZvb3RlciA9IHN0eWxlZC5kaXZgXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBwYWRkaW5nLXRvcDogMC43ODFyZW07XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7Q29sb3JbXCJncmF5LTEwXCJdfTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzUlIGF1dG87XG5gXG5cbmV4cG9ydCBjb25zdCBUYWcgPSBzdHlsZWQuZGl2YFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Q29sb3IuZ3JlZW59O1xuICAgIHdpZHRoOiA2OXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIGNvbG9yOiAke0NvbG9yW1wiZ3JheS0yMFwiXX07XG4gICAgcGFkZGluZzogMC4ycmVtIDAuMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuYFxuXG5leHBvcnQgY29uc3QgSW5mbyA9IHN0eWxlZC5zcGFuYFxuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAke0NvbG9yW1wiZ3JheS04MFwiXX07XG5gXG5cbmV4cG9ydCBjb25zdCBOYW1lID0gc3R5bGVkLmgxYFxuIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAke0NvbG9yW1wiZ3JhZGllbnQtcHJpbWFyeVwiXX07XG5gXG5cbmV4cG9ydCBjb25zdCBJbmZvVGltZSA9IHN0eWxlZC5zcGFuYFxuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmF2Z1RpbWUgPyBgJHtDb2xvci5ncmVlbn07YCA6IGAke0NvbG9yLnJlZH07YH1cbmAiXX0=