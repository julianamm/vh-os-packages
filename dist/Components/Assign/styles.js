"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = exports.Rounded = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  opacity: 0;\n  position: absolute;\n  margin-top: -30px;\n  color: ", ";\n  background-color: ", ";\n  padding: 4px 8px 4px 8px;\n  border-radius: 3px;\n  font-family: Roboto;\n\n  ", ":hover & {\n    opacity: 1;\n  } \n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  color: ", ";\n  text-align: center;\n  display: grid;\n  align-items: center;\n  cursor: default;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-left: -5px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.span(_templateObject());

exports.Wrapper = Wrapper;

var Rounded = _styledComponents.default.div(_templateObject2(), _Colors.default["gray-80"], _Colors.default["black-100"]);

exports.Rounded = Rounded;

var Tooltip = _styledComponents.default.span(_templateObject3(), _Colors.default.white, _Colors.default["black-80"], Wrapper);

exports.Tooltip = Tooltip;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQXNzaWduL3N0eWxlcy5qcyJdLCJuYW1lcyI6WyJXcmFwcGVyIiwic3R5bGVkIiwic3BhbiIsIlJvdW5kZWQiLCJkaXYiLCJDb2xvciIsIlRvb2x0aXAiLCJ3aGl0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxPQUFPLEdBQUdDLDBCQUFPQyxJQUFWLG1CQUFiOzs7O0FBSUEsSUFBTUMsT0FBTyxHQUFHRiwwQkFBT0csR0FBVixxQkFDRUMsZ0JBQU0sU0FBTixDQURGLEVBS1RBLGdCQUFNLFdBQU4sQ0FMUyxDQUFiOzs7O0FBWUEsSUFBTUMsT0FBTyxHQUFHTCwwQkFBT0MsSUFBVixxQkFJVEcsZ0JBQU1FLEtBSkcsRUFLRUYsZ0JBQU0sVUFBTixDQUxGLEVBVWhCTCxPQVZnQixDQUFiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBDb2xvciBmcm9tIFwiLi4vLi4vQ29sb3JzXCI7XG5cbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLnNwYW5gXG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IFJvdW5kZWQgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NvbG9yW1wiZ3JheS04MFwiXX07XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6ICR7Q29sb3JbXCJibGFjay0xMDBcIl19O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogZGVmYXVsdDtcbmA7XG5cbmV4cG9ydCBjb25zdCBUb29sdGlwID0gc3R5bGVkLnNwYW5gXG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG4gIGNvbG9yOiAke0NvbG9yLndoaXRlfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtDb2xvcltcImJsYWNrLTgwXCJdfTtcbiAgcGFkZGluZzogNHB4IDhweCA0cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG5cbiAgJHtXcmFwcGVyfTpob3ZlciAmIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9IFxuYDtcbiJdfQ==