"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImgWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 100%;\n    background-size: contain;\n    background-image: url(", ");\n    background-repeat: no-repeat;\n    background-position: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ImgWrapper = _styledComponents.default.div(_templateObject(), function (props) {
  return props.image && props.image;
});

exports.ImgWrapper = ImgWrapper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVGl0bGVEZXNjcmlwdGlvbkltYWdlL3N0eWxlcy5qcyJdLCJuYW1lcyI6WyJJbWdXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJpbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRU8sSUFBTUEsVUFBVSxHQUFHQywwQkFBT0MsR0FBVixvQkFJSyxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLElBQWVELEtBQUssQ0FBQ0MsS0FBekI7QUFBQSxDQUpWLENBQWhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBDb2xvciBmcm9tIFwiLi4vLi4vQ29sb3JzXCI7XG5cbmV4cG9ydCBjb25zdCBJbWdXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3Byb3BzID0+IHByb3BzLmltYWdlICYmIHByb3BzLmltYWdlfSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5gICJdfQ==