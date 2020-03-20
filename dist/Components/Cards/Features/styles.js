"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = exports.Group = exports.TextWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    list-style: none;\n    border-right: 1px solid ", ";\n    // height: 220px;\n\n      :last-child {\n        border-right: none;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: row;\n    padding: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 70%;\n    max-width: 300px;\n    text-align: center;\n    height: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TextWrapper = _styledComponents.default.span(_templateObject());

exports.TextWrapper = TextWrapper;

var Group = _styledComponents.default.ul(_templateObject2());

exports.Group = Group;

var Item = _styledComponents.default.li(_templateObject3(), _Colors.default["gray-40"]);

exports.Item = Item;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQ2FyZHMvRmVhdHVyZXMvc3R5bGVzLmpzIl0sIm5hbWVzIjpbIlRleHRXcmFwcGVyIiwic3R5bGVkIiwic3BhbiIsIkdyb3VwIiwidWwiLCJJdGVtIiwibGkiLCJDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxXQUFXLEdBQUdDLDBCQUFPQyxJQUFWLG1CQUFqQjs7OztBQU1BLElBQU1DLEtBQUssR0FBR0YsMEJBQU9HLEVBQVYsb0JBQVg7Ozs7QUFLQSxJQUFNQyxJQUFJLEdBQUdKLDBCQUFPSyxFQUFWLHFCQUVhQyxnQkFBTSxTQUFOLENBRmIsQ0FBViIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgQ29sb3IgZnJvbSBcIi4uLy4uLy4uL0NvbG9yc1wiO1xuXG5leHBvcnQgY29uc3QgVGV4dFdyYXBwZXIgPSBzdHlsZWQuc3BhbmBcbiAgICB3aWR0aDogNzAlO1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbmBcbmV4cG9ydCBjb25zdCBHcm91cCA9IHN0eWxlZC51bGBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgcGFkZGluZzogMDtcbmBcbmV4cG9ydCBjb25zdCBJdGVtID0gc3R5bGVkLmxpYFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJHtDb2xvcltcImdyYXktNDBcIl19O1xuICAgIC8vIGhlaWdodDogMjIwcHg7XG5cbiAgICAgIDpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIH1cbmAiXX0=