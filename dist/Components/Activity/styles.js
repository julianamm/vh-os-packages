"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Elipse = exports.Item = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 13px;\n  height: 13px;\n  border-radius: 100%;\n  background-color: blue;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  margin-left: -5px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  min-height: 220px;\n  border-left: 2px solid blue;\n  position: relative;\n  display: flex;\n\n  :last-child {\n    border-left: none;\n  }\n\n  @media (max-width: 425px) {\n    height: 290px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Item = _styledComponents.default.div(_templateObject());

exports.Item = Item;

var Elipse = _styledComponents.default.div(_templateObject2());

exports.Elipse = Elipse;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQWN0aXZpdHkvc3R5bGVzLmpzIl0sIm5hbWVzIjpbIkl0ZW0iLCJzdHlsZWQiLCJkaXYiLCJFbGlwc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxJQUFJLEdBQUdDLDBCQUFPQyxHQUFWLG1CQUFWOzs7O0FBZUEsSUFBTUMsTUFBTSxHQUFHRiwwQkFBT0MsR0FBVixvQkFBWiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgSXRlbSA9IHN0eWxlZC5kaXZgXG4gIG1pbi1oZWlnaHQ6IDIyMHB4O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsdWU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcblxuICA6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgICBoZWlnaHQ6IDI5MHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRWxpcHNlID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEzcHg7XG4gIGhlaWdodDogMTNweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogLTVweDtcbmBcblxuIl19