"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.A = exports.ImgWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: Roboto;\n  font-size: 14px;\n  line-height: 18px;\n  text-decoration: none;\n  cursor: ", ";\n  color: ", ";\n  :visited {\n    color: ", ";\n  }\n  :hover {\n    color: ", ";\n    text-decoration: underline;\n  }\n  :active {\n    color: ", ";\n    text-decoration: underline;\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 12px;\n  vertical-align: middle;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ImgWrapper = _styledComponents.default.span(_templateObject());

exports.ImgWrapper = ImgWrapper;

var A = _styledComponents.default.a(_templateObject2(), function (props) {
  return props.cursor ? props.cursor : 'pointer';
}, function (props) {
  return props.color === "primary-light" ? "".concat(_Colors.default["primary-light"], " !important") : "".concat(_Colors.default["gradient-primary"]);
}, _Colors.default["gradient-primary"], _Colors.default["primary-light"], _Colors.default["primary-dark"], function (_ref) {
  var sm = _ref.sm;
  return sm && "\n    font-size: 14px;\n    line-height: 18px;\n  ";
}, function (_ref2) {
  var xs = _ref2.xs;
  return xs && "\n    font-size: 12px;\n    line-height: 16px;\n  ";
}, function (_ref3) {
  var lg = _ref3.lg;
  return lg && "\n    font-size: 16px;\n    line-height: 20px;\n  ";
}, function (_ref4) {
  var noUnderscore = _ref4.noUnderscore;
  return noUnderscore && "\n    text-decoration: none !important;\n  ";
});

exports.A = A;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0h5cGVybGlua3MvTGlua0ltYWdlL3N0eWxlcy5qcyJdLCJuYW1lcyI6WyJJbWdXcmFwcGVyIiwic3R5bGVkIiwic3BhbiIsIkEiLCJhIiwicHJvcHMiLCJjdXJzb3IiLCJjb2xvciIsIkNvbG9yIiwic20iLCJ4cyIsImxnIiwibm9VbmRlcnNjb3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU8sSUFBTUEsVUFBVSxHQUFHQywwQkFBT0MsSUFBVixtQkFBaEI7Ozs7QUFLQSxJQUFNQyxDQUFDLEdBQUdGLDBCQUFPRyxDQUFWLHFCQUtGLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLE1BQU4sR0FBZUQsS0FBSyxDQUFDQyxNQUFyQixHQUE4QixTQUFsQztBQUFBLENBTEgsRUFNSCxVQUFBRCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLEtBQWdCLGVBQWhCLGFBQXFDQyxnQkFBTSxlQUFOLENBQXJDLDZCQUE4RUEsZ0JBQU0sa0JBQU4sQ0FBOUUsQ0FBSjtBQUFBLENBTkYsRUFRREEsZ0JBQU0sa0JBQU4sQ0FSQyxFQVdEQSxnQkFBTSxlQUFOLENBWEMsRUFlREEsZ0JBQU0sY0FBTixDQWZDLEVBa0JWO0FBQUEsTUFBR0MsRUFBSCxRQUFHQSxFQUFIO0FBQUEsU0FBWUEsRUFBRSx3REFBZDtBQUFBLENBbEJVLEVBc0JWO0FBQUEsTUFBR0MsRUFBSCxTQUFHQSxFQUFIO0FBQUEsU0FBWUEsRUFBRSx3REFBZDtBQUFBLENBdEJVLEVBMEJWO0FBQUEsTUFBR0MsRUFBSCxTQUFHQSxFQUFIO0FBQUEsU0FBWUEsRUFBRSx3REFBZDtBQUFBLENBMUJVLEVBOEJWO0FBQUEsTUFBR0MsWUFBSCxTQUFHQSxZQUFIO0FBQUEsU0FBc0JBLFlBQVksaURBQWxDO0FBQUEsQ0E5QlUsQ0FBUCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IENvbG9yIGZyb20gJy4uLy4uL0NvbG9ycyc7XG5cbmV4cG9ydCBjb25zdCBJbWdXcmFwcGVyID0gc3R5bGVkLnNwYW5gXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuYFxuXG5leHBvcnQgY29uc3QgQSA9IHN0eWxlZC5hYFxuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogJHtwcm9wcyA9PiBwcm9wcy5jdXJzb3IgPyBwcm9wcy5jdXJzb3IgOiAncG9pbnRlcid9O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5jb2xvciA9PT0gXCJwcmltYXJ5LWxpZ2h0XCIgPyBgJHtDb2xvcltcInByaW1hcnktbGlnaHRcIl19ICFpbXBvcnRhbnRgIDogYCR7Q29sb3JbXCJncmFkaWVudC1wcmltYXJ5XCJdfWB9O1xuICA6dmlzaXRlZCB7XG4gICAgY29sb3I6ICR7Q29sb3JbXCJncmFkaWVudC1wcmltYXJ5XCJdfTtcbiAgfVxuICA6aG92ZXIge1xuICAgIGNvbG9yOiAke0NvbG9yW1wicHJpbWFyeS1saWdodFwiXX07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbiAgOmFjdGl2ZSB7XG4gICAgY29sb3I6ICR7Q29sb3JbXCJwcmltYXJ5LWRhcmtcIl19O1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG4gICR7KHsgc20gfSkgPT4gc20gJiYgYFxuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgYH1cbiAgJHsoeyB4cyB9KSA9PiB4cyAmJiBgXG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBgfVxuICAkeyh7IGxnIH0pID0+IGxnICYmIGBcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGB9XG4gICR7KHsgbm9VbmRlcnNjb3JlIH0pID0+IG5vVW5kZXJzY29yZSAmJiBgXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIGB9XG5gIl19