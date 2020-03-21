"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextWrapper = exports.Area = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    margin-left: 1rem;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 40px;\n    border-radius: 6px;\n    border: solid 1px ", ";\n    background-color: ", ";\n    padding: 15px;\n    margin-left: 1rem;\n    outline: 0;\n    ::placeholder {\n        color: gray;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 180px;\n  overflow: scroll;\n  overflow-x: hidden;\n  overflow-y: hidden;\n\n  :hover {\n    overflow-y: auto;\n  }\n\n  ::-webkit-scrollbar {\n    background-color: transparent;\n    width: 5px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background-color: ", ";\n    border-radius: 4px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject(), _Colors.default["gray-30"]);

exports.Wrapper = Wrapper;

var Area = _styledComponents.default.textarea(_templateObject2(), _Colors.default["gray-30"], _Colors.default["gray-20"]);

exports.Area = Area;

var TextWrapper = _styledComponents.default.span(_templateObject3());

exports.TextWrapper = TextWrapper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQ29tbWVudHMvc3R5bGVzLmpzIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJDb2xvciIsIkFyZWEiLCJ0ZXh0YXJlYSIsIlRleHRXcmFwcGVyIiwic3BhbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxPQUFPLEdBQUdDLDBCQUFPQyxHQUFWLG9CQWdCSUMsZ0JBQU0sU0FBTixDQWhCSixDQUFiOzs7O0FBb0JBLElBQU1DLElBQUksR0FBR0gsMEJBQU9JLFFBQVYscUJBSU9GLGdCQUFNLFNBQU4sQ0FKUCxFQUtPQSxnQkFBTSxTQUFOLENBTFAsQ0FBVjs7OztBQWNBLElBQU1HLFdBQVcsR0FBR0wsMEJBQU9NLElBQVYsb0JBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBDb2xvciBmcm9tICcuLi8uLi9Db2xvcnMnXG5cbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAxODBweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG5cbiAgOmhvdmVyIHtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgd2lkdGg6IDVweDtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Q29sb3JbXCJncmF5LTMwXCJdfTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbmBcbmV4cG9ydCBjb25zdCBBcmVhID0gc3R5bGVkLnRleHRhcmVhYFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggJHtDb2xvcltcImdyYXktMzBcIl19O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Q29sb3JbXCJncmF5LTIwXCJdfTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgIG91dGxpbmU6IDA7XG4gICAgOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiBncmF5O1xuICAgIH1cbmBcblxuZXhwb3J0IGNvbnN0IFRleHRXcmFwcGVyID0gc3R5bGVkLnNwYW5gXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG5gIl19