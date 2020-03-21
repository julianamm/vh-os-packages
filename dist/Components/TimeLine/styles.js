"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSameDate = exports.WrapperText = exports.Date = exports.Circle = exports.Item = exports.Group = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  min-height: 3.5rem;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: 70px auto;\n  grid-column-gap: 1rem;\n  margin-top: -1rem;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  margin-left: 1rem;\n  min-width: 70px;\n  min-height: 60px;\n  align-items: baseline;\n  display: grid;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 13px;\n  height: 13px;\n  background-color: ", ";\n  border-radius: 50%;\n  margin-left: -7px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  list-style: none;\n  border-left: 1px solid ", ";\n  min-height: 4rem;\n\n  :last-child {\n    border-left: none;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 0 0 0 5px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Group = _styledComponents.default.ul(_templateObject());

exports.Group = Group;

var Item = _styledComponents.default.li(_templateObject2(), _Colors.default.tertiary);

exports.Item = Item;

var Circle = _styledComponents.default.div(_templateObject3(), _Colors.default.tertiary);

exports.Circle = Circle;

var Date = _styledComponents.default.span(_templateObject4(), _Colors.default.tertiary);

exports.Date = Date;

var WrapperText = _styledComponents.default.span(_templateObject5());

exports.WrapperText = WrapperText;

var WrapperSameDate = _styledComponents.default.div(_templateObject6());

exports.WrapperSameDate = WrapperSameDate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVGltZUxpbmUvc3R5bGVzLmpzIl0sIm5hbWVzIjpbIkdyb3VwIiwic3R5bGVkIiwidWwiLCJJdGVtIiwibGkiLCJDb2xvciIsInRlcnRpYXJ5IiwiQ2lyY2xlIiwiZGl2IiwiRGF0ZSIsInNwYW4iLCJXcmFwcGVyVGV4dCIsIldyYXBwZXJTYW1lRGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxLQUFLLEdBQUdDLDBCQUFPQyxFQUFWLG1CQUFYOzs7O0FBSUEsSUFBTUMsSUFBSSxHQUFHRiwwQkFBT0csRUFBVixxQkFFVUMsZ0JBQU1DLFFBRmhCLENBQVY7Ozs7QUFVQSxJQUFNQyxNQUFNLEdBQUdOLDBCQUFPTyxHQUFWLHFCQUdHSCxnQkFBTUMsUUFIVCxDQUFaOzs7O0FBUUEsSUFBTUcsSUFBSSxHQUFHUiwwQkFBT1MsSUFBVixxQkFDTkwsZ0JBQU1DLFFBREEsQ0FBVjs7OztBQVNBLElBQU1LLFdBQVcsR0FBR1YsMEJBQU9TLElBQVYsb0JBQWpCOzs7O0FBT0EsSUFBTUUsZUFBZSxHQUFHWCwwQkFBT08sR0FBVixvQkFBckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IENvbG9yIGZyb20gXCIuLi8uLi9Db2xvcnNcIjtcblxuZXhwb3J0IGNvbnN0IEdyb3VwID0gc3R5bGVkLnVsYFxuICBwYWRkaW5nOiAwIDAgMCA1cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgSXRlbSA9IHN0eWxlZC5saWBcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAke0NvbG9yLnRlcnRpYXJ5fTtcbiAgbWluLWhlaWdodDogNHJlbTtcblxuICA6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDaXJjbGUgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTNweDtcbiAgaGVpZ2h0OiAxM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NvbG9yLnRlcnRpYXJ5fTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tbGVmdDogLTdweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBEYXRlID0gc3R5bGVkLnNwYW5gXG4gIGNvbG9yOiAke0NvbG9yLnRlcnRpYXJ5fTtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIG1pbi13aWR0aDogNzBweDtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBkaXNwbGF5OiBncmlkO1xuYDtcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXJUZXh0ID0gc3R5bGVkLnNwYW5gXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzBweCBhdXRvO1xuICBncmlkLWNvbHVtbi1nYXA6IDFyZW07XG4gIG1hcmdpbi10b3A6IC0xcmVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXJTYW1lRGF0ZSA9IHN0eWxlZC5kaXZgXG4gIG1pbi1oZWlnaHQ6IDMuNXJlbTtcbmA7XG4iXX0=