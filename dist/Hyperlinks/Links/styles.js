"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Body = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tfont-family: Roboto;\n\tfont-size: 14px;\n  line-height: 18px;\n  text-decoration: none;\n  cursor: ", ";\n  color: ", ";\n\n  :visited {\n    color: ", ";\n  }\n\n  :hover {\n    color: ", ";\n    text-decoration: underline;\n  }\n\n  :active {\n    color: ", ";\n    text-decoration: underline;\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Body = _styledComponents.default.a(_templateObject(), function (props) {
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
  var reverse = _ref4.reverse;
  return reverse && "\n    color: #fff !important;\n  ";
}, function (_ref5) {
  var noUnderscore = _ref5.noUnderscore;
  return noUnderscore && "\n    text-decoration: none !important;\n  ";
}, function (_ref6) {
  var white = _ref6.white;
  return white && "\n    color: #ffffff !important;\n    transition: opacity 0.5s;\n    :hover {\n      opacity: 0.7;\n    }\n  ";
});

exports.Body = Body;
var _default = Body;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0h5cGVybGlua3MvTGlua3Mvc3R5bGVzLmpzIl0sIm5hbWVzIjpbIkJvZHkiLCJzdHlsZWQiLCJhIiwicHJvcHMiLCJjdXJzb3IiLCJjb2xvciIsIkNvbG9yIiwic20iLCJ4cyIsImxnIiwicmV2ZXJzZSIsIm5vVW5kZXJzY29yZSIsIndoaXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxJQUFJLEdBQUdDLDBCQUFPQyxDQUFWLG9CQUtMLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLE1BQU4sR0FBZUQsS0FBSyxDQUFDQyxNQUFyQixHQUE4QixTQUFsQztBQUFBLENBTEEsRUFNTixVQUFBRCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLEtBQWdCLGVBQWhCLGFBQXFDQyxnQkFBTSxlQUFOLENBQXJDLDZCQUE4RUEsZ0JBQU0sa0JBQU4sQ0FBOUUsQ0FBSjtBQUFBLENBTkMsRUFTSkEsZ0JBQU0sa0JBQU4sQ0FUSSxFQWFKQSxnQkFBTSxlQUFOLENBYkksRUFrQkpBLGdCQUFNLGNBQU4sQ0FsQkksRUFzQmI7QUFBQSxNQUFHQyxFQUFILFFBQUdBLEVBQUg7QUFBQSxTQUFZQSxFQUFFLHdEQUFkO0FBQUEsQ0F0QmEsRUEyQmI7QUFBQSxNQUFHQyxFQUFILFNBQUdBLEVBQUg7QUFBQSxTQUFZQSxFQUFFLHdEQUFkO0FBQUEsQ0EzQmEsRUFnQ2I7QUFBQSxNQUFHQyxFQUFILFNBQUdBLEVBQUg7QUFBQSxTQUFZQSxFQUFFLHdEQUFkO0FBQUEsQ0FoQ2EsRUFxQ2I7QUFBQSxNQUFHQyxPQUFILFNBQUdBLE9BQUg7QUFBQSxTQUFpQkEsT0FBTyx1Q0FBeEI7QUFBQSxDQXJDYSxFQXlDYjtBQUFBLE1BQUdDLFlBQUgsU0FBR0EsWUFBSDtBQUFBLFNBQXNCQSxZQUFZLGlEQUFsQztBQUFBLENBekNhLEVBNkNiO0FBQUEsTUFBR0MsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxtSEFBcEI7QUFBQSxDQTdDYSxDQUFWOzs7ZUFxRFFaLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IENvbG9yIGZyb20gJy4uLy4uL0NvbG9ycydcblxuZXhwb3J0IGNvbnN0IEJvZHkgPSBzdHlsZWQuYWBcblx0Zm9udC1mYW1pbHk6IFJvYm90bztcblx0Zm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6ICR7cHJvcHMgPT4gcHJvcHMuY3Vyc29yID8gcHJvcHMuY3Vyc29yIDogJ3BvaW50ZXInfTtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuY29sb3IgPT09IFwicHJpbWFyeS1saWdodFwiID8gYCR7Q29sb3JbXCJwcmltYXJ5LWxpZ2h0XCJdfSAhaW1wb3J0YW50YCA6IGAke0NvbG9yW1wiZ3JhZGllbnQtcHJpbWFyeVwiXX1gfTtcblxuICA6dmlzaXRlZCB7XG4gICAgY29sb3I6ICR7Q29sb3JbXCJncmFkaWVudC1wcmltYXJ5XCJdfTtcbiAgfVxuXG4gIDpob3ZlciB7XG4gICAgY29sb3I6ICR7Q29sb3JbXCJwcmltYXJ5LWxpZ2h0XCJdfTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuXG4gIDphY3RpdmUge1xuICAgIGNvbG9yOiAke0NvbG9yW1wicHJpbWFyeS1kYXJrXCJdfTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuXG4gICR7KHsgc20gfSkgPT4gc20gJiYgYFxuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgYH1cblxuICAkeyh7IHhzIH0pID0+IHhzICYmIGBcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGB9XG5cbiAgJHsoeyBsZyB9KSA9PiBsZyAmJiBgXG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBgfVxuXG4gICR7KHsgcmV2ZXJzZSB9KSA9PiByZXZlcnNlICYmIGBcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBgfVxuXG4gICR7KHsgbm9VbmRlcnNjb3JlIH0pID0+IG5vVW5kZXJzY29yZSAmJiBgXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIGB9XG5cbiAgJHsoeyB3aGl0ZSB9KSA9PiB3aGl0ZSAmJiBgXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XG4gICAgOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IDAuNztcbiAgICB9XG4gIGB9XG5gXG5leHBvcnQgZGVmYXVsdCBCb2R5Il19