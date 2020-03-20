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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvTW9kYWxWaXNhUGlwZWxpbmUvc3R5bGVzLmpzIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJJbmZvRGF0ZSIsIkNvbG9yIiwiSWNvbldyYXBwZXIiLCJJbmZvIiwic3BhbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU8sSUFBTUEsT0FBTyxHQUFHQywwQkFBT0MsR0FBVixtQkFBYjs7OztBQUtBLElBQU1DLFFBQVEsR0FBR0YsMEJBQU9DLEdBQVYscUJBUVZFLGdCQUFNLGVBQU4sQ0FSVSxFQVVDQSxnQkFBTSxVQUFOLENBVkQsQ0FBZDs7OztBQWNBLElBQU1DLFdBQVcsR0FBR0osMEJBQU9DLEdBQVYsb0JBQWpCOzs7O0FBU0EsSUFBTUksSUFBSSxHQUFHTCwwQkFBT00sSUFBVixxQkFRTkgsZ0JBQU0sU0FBTixDQVJNLENBQVYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBDb2xvciBmcm9tIFwiLi4vLi4vQ29sb3JzXCI7XG5cbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgbWluLXdpZHRoOiA2MiU7XG4gIHBhZGRpbmctcmlnaHQ6IDQ4cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgSW5mb0RhdGUgPSBzdHlsZWQuZGl2YFxuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjc1O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogJHtDb2xvcltcInRlcnRpYXJ5LWRhcmtcIl19O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7Q29sb3JbXCJibGFjay0xMFwiXX07XG4gIHBhZGRpbmc6IDZweCAxMnB4IDZweCAxMnB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IEljb25XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgIHdpZHRoOiAyMi43cHg7XG4gICBoZWlnaHQ6IDIxLjVweDtcbiAgIGRpc3BsYXk6IGdyaWQ7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbmBcblxuZXhwb3J0IGNvbnN0IEluZm8gPSBzdHlsZWQuc3BhbmBcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogJHtDb2xvcltcImdyYXktODBcIl19O1xuICBtYXJnaW4tcmlnaHQ6IDNyZW07XG5gXG4iXX0=