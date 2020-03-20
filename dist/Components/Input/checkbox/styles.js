"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperMulti = exports.Wrapper = exports.Input = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin-right: 9px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";;\n  width: 14px;\n  height: 14px;\n  border-radius: 3px;\n  margin-right: 9px;\n  grid-ga\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 20px;\n  height: 20px;\n  margin: -1px 0 0 -2px;\n  background-color: ", ";\n  border-radius: 3px;\n  border: solid 1px ", ";\n  cursor: pointer;\n\n  :checked  {\n    opacity: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Input = _styledComponents.default.input(_templateObject(), _Colors.default["gray-20"], _Colors.default["gray-30"]);

exports.Input = Input;

var Wrapper = _styledComponents.default.span(_templateObject2(), _Colors.default["gradient-primary"]);

exports.Wrapper = Wrapper;

var WrapperMulti = _styledComponents.default.span(_templateObject3());

exports.WrapperMulti = WrapperMulti;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvSW5wdXQvY2hlY2tib3gvc3R5bGVzLmpzIl0sIm5hbWVzIjpbIklucHV0Iiwic3R5bGVkIiwiaW5wdXQiLCJDb2xvciIsIldyYXBwZXIiLCJzcGFuIiwiV3JhcHBlck11bHRpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLElBQU1BLEtBQUssR0FBR0MsMEJBQU9DLEtBQVYsb0JBSUlDLGdCQUFNLFNBQU4sQ0FKSixFQU1JQSxnQkFBTSxTQUFOLENBTkosQ0FBWDs7OztBQWNBLElBQU1DLE9BQU8sR0FBR0gsMEJBQU9JLElBQVYscUJBQ0VGLGdCQUFNLGtCQUFOLENBREYsQ0FBYjs7OztBQVNBLElBQU1HLFlBQVksR0FBR0wsMEJBQU9JLElBQVYsb0JBQWxCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBDb2xvciBmcm9tIFwiLi4vLi4vLi4vQ29sb3JzXCI7XG5cbmV4cG9ydCBjb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luOiAtMXB4IDAgMCAtMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NvbG9yW1wiZ3JheS0yMFwiXX07XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggJHtDb2xvcltcImdyYXktMzBcIl19O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgOmNoZWNrZWQgIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5zcGFuYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NvbG9yW1wiZ3JhZGllbnQtcHJpbWFyeVwiXX07O1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbi1yaWdodDogOXB4O1xuICBncmlkLWdhXG5gO1xuXG5leHBvcnQgY29uc3QgV3JhcHBlck11bHRpID0gc3R5bGVkLnNwYW5gXG4gIG1hcmdpbi1yaWdodDogOXB4O1xuYDtcbiJdfQ==