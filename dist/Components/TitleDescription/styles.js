"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Display = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    padding-left: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    * {\n        margin: 0 0 0 0;\n        display: ", ";\n    }\n    cursor: ", ";\n    display: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject(), function (props) {
  return props.inline ? 'inline' : 'block';
}, function (props) {
  return props.pointer && 'pointer';
}, function (props) {
  return props.contents && 'contents';
});

exports.Wrapper = Wrapper;

var Display = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.inline && '5px';
});

exports.Display = Display;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVGl0bGVEZXNjcmlwdGlvbi9zdHlsZXMuanMiXSwibmFtZXMiOlsiV3JhcHBlciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiaW5saW5lIiwicG9pbnRlciIsImNvbnRlbnRzIiwiRGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLElBQU1BLE9BQU8sR0FBR0MsMEJBQU9DLEdBQVYsb0JBR0QsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsTUFBTixHQUFlLFFBQWYsR0FBMEIsT0FBOUI7QUFBQSxDQUhKLEVBS04sVUFBQUQsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0UsT0FBTixJQUFpQixTQUFyQjtBQUFBLENBTEMsRUFNTCxVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRyxRQUFOLElBQWtCLFVBQXRCO0FBQUEsQ0FOQSxDQUFiOzs7O0FBU0EsSUFBTUMsT0FBTyxHQUFHTiwwQkFBT0MsR0FBVixxQkFDQSxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxNQUFOLElBQWdCLEtBQXBCO0FBQUEsQ0FETCxDQUFiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBDb2xvciBmcm9tIFwiLi4vLi4vQ29sb3JzXCI7XG5cbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgICAqIHtcbiAgICAgICAgbWFyZ2luOiAwIDAgMCAwO1xuICAgICAgICBkaXNwbGF5OiAke3Byb3BzID0+IHByb3BzLmlubGluZSA/ICdpbmxpbmUnIDogJ2Jsb2NrJ307XG4gICAgfVxuICAgIGN1cnNvcjogJHtwcm9wcyA9PiBwcm9wcy5wb2ludGVyICYmICdwb2ludGVyJ307XG4gICAgZGlzcGxheTogJHtwcm9wcyA9PiBwcm9wcy5jb250ZW50cyAmJiAnY29udGVudHMnfTtcbmBcblxuZXhwb3J0IGNvbnN0IERpc3BsYXkgPSBzdHlsZWQuZGl2YFxuICAgIHBhZGRpbmctbGVmdDogJHtwcm9wcyA9PiBwcm9wcy5pbmxpbmUgJiYgJzVweCd9O1xuYCJdfQ==