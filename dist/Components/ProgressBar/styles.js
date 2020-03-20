"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  border: 1px solid ", ";\n  border-radius: 4px;\n  font-family: Roboto;\n  text-align: center;\n  color: ", ";\n  font-family: Roboto;\n  font-size: 12px;\n  line-height: 16px;\n  margin: 4px 0 4px 0;\n  outline: 0;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents.default.button(_templateObject(), _Colors.default["primary-rgb-light"], _Colors.default["gradient-light"], _Colors.default["black-50"], function (_ref) {
  var noHover = _ref.noHover;
  return !noHover && "\n    cursor: pointer;\n    :hover {\n      background-color: ".concat(_Colors.default["primary-light"], ";\n    }\n\n    :active {\n      background-color: ").concat(_Colors.default["primary-dark"], ";\n    }\n  ");
}, function (_ref2) {
  var primary = _ref2.primary,
      noHover = _ref2.noHover;
  return primary && "\n    background: ".concat(_Colors.default["primary-rgb-light"], ";\n    border: 1px solid ").concat(_Colors.default["gradient-light"], ";\n    ").concat(!noHover && "\n      :hover {\n        background-color: ".concat(_Colors.default["primary-light"], ";\n        border: 1px solid ").concat(_Colors.default["primary-light"], ";\n        color: ").concat(_Colors.default["white-light"], ";\n      }\n      :active {\n        background-color: ").concat(_Colors.default["primary-dark"], ";\n        border: 1px solid ").concat(_Colors.default["primary-dark"], ";\n        color: ").concat(_Colors.default["white-light"], ";\n      }\n    "), "\n  ");
}, function (_ref3) {
  var secondary = _ref3.secondary,
      noHover = _ref3.noHover;
  return secondary && "\n    background: ".concat(_Colors.default["secondary-rgb-light"], ";\n    border: 1px solid ").concat(_Colors.default.secondary, ";\n    ").concat(!noHover && "\n      :hover {\n        color: ".concat(_Colors.default["white-light"], ";\n        border: 1px solid  ").concat(_Colors.default["secondary-light"], ";\n        background-color:  ").concat(_Colors.default["secondary-light"], ";\n      }\n\n      :active {\n        background-color:  ").concat(_Colors.default["secondary-dark"], ";\n        border: 1px solid  ").concat(_Colors.default["secondary-dark"], ";\n      }\n    "), "\n  ");
}, function (_ref4) {
  var round = _ref4.round;
  return round && "\n    border-radius: 20px;\n  ";
}, function (_ref5) {
  var danger = _ref5.danger,
      noHover = _ref5.noHover;
  return danger && "\n  background:  ".concat(_Colors.default["red-rgb-light"], ";\n  border: 1px solid ").concat(_Colors.default.red, ";\n  ").concat(!noHover && "\n    :hover {\n      background-color: ".concat(_Colors.default["red-rgb-light-hover"], ";\n      border: 1px solid ").concat(_Colors.default["danger-light"], ";\n    }\n  "), "\n  // :active {\n  //   background-color: ").concat(_Colors.default["red-dark"], ";\n  //   border: 1px solid ").concat(_Colors.default["red-dark"], ";\n  // }\n");
}, function (_ref6) {
  var disabled = _ref6.disabled;
  return disabled && "\n    color: ".concat(_Colors.default["black-40"], ";\n    background-color: ").concat(_Colors.default["black-10"], ";\n    border: solid 1px ").concat(_Colors.default["black-10"], ";\n    :hover {\n      background-color: ").concat(_Colors.default["black-10"], ";\n      border: 1px solid ").concat(_Colors.default["black-10"], ";\n      color: ").concat(_Colors.default["black-40"], ";\n      cursor: not-allowed;\n    }\n  ");
}, function (_ref7) {
  var transparent = _ref7.transparent;
  return transparent && "\n    background-color: transparent;\n  ";
}, function (_ref8) {
  var marginLeft = _ref8.marginLeft;
  return marginLeft && "\n    margin-left: 8px;\n  ";
}, function (_ref9) {
  var marginRight = _ref9.marginRight;
  return marginRight && "\n    margin-right: 8px;\n  ";
});

var _default = Button;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIvc3R5bGVzLmpzIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInN0eWxlZCIsImJ1dHRvbiIsIkNvbG9yIiwibm9Ib3ZlciIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJyb3VuZCIsImRhbmdlciIsInJlZCIsImRpc2FibGVkIiwidHJhbnNwYXJlbnQiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBR0MsMEJBQU9DLE1BQVYsb0JBQ0lDLGdCQUFNLG1CQUFOLENBREosRUFFVUEsZ0JBQU0sZ0JBQU4sQ0FGVixFQU1EQSxnQkFBTSxVQUFOLENBTkMsRUFhUjtBQUFBLE1BQUdDLE9BQUgsUUFBR0EsT0FBSDtBQUFBLFNBQ0YsQ0FBQ0EsT0FBRCw0RUFJd0JELGdCQUFNLGVBQU4sQ0FKeEIsZ0VBUXdCQSxnQkFBTSxjQUFOLENBUnhCLGlCQURFO0FBQUEsQ0FiUSxFQTBCUjtBQUFBLE1BQUdFLE9BQUgsU0FBR0EsT0FBSDtBQUFBLE1BQVlELE9BQVosU0FBWUEsT0FBWjtBQUFBLFNBQ0FDLE9BQU8sZ0NBRU9GLGdCQUFNLG1CQUFOLENBRlAsc0NBR2FBLGdCQUFNLGdCQUFOLENBSGIsb0JBSUwsQ0FBQ0MsT0FBRCwwREFFc0JELGdCQUFNLGVBQU4sQ0FGdEIsMENBR3NCQSxnQkFBTSxlQUFOLENBSHRCLCtCQUlXQSxnQkFBTSxhQUFOLENBSlgsb0VBT3NCQSxnQkFBTSxjQUFOLENBUHRCLDBDQVFzQkEsZ0JBQU0sY0FBTixDQVJ0QiwrQkFTV0EsZ0JBQU0sYUFBTixDQVRYLHFCQUpLLFNBRFA7QUFBQSxDQTFCUSxFQTZDUjtBQUFBLE1BQUdHLFNBQUgsU0FBR0EsU0FBSDtBQUFBLE1BQWNGLE9BQWQsU0FBY0EsT0FBZDtBQUFBLFNBQ0FFLFNBQVMsZ0NBRUtILGdCQUFNLHFCQUFOLENBRkwsc0NBR1dBLGdCQUFNRyxTQUhqQixvQkFJUCxDQUFDRixPQUFELCtDQUVXRCxnQkFBTSxhQUFOLENBRlgsMkNBR3VCQSxnQkFBTSxpQkFBTixDQUh2QiwyQ0FJdUJBLGdCQUFNLGlCQUFOLENBSnZCLHVFQVF1QkEsZ0JBQU0sZ0JBQU4sQ0FSdkIsMkNBU3VCQSxnQkFBTSxnQkFBTixDQVR2QixxQkFKTyxTQURUO0FBQUEsQ0E3Q1EsRUFnRVI7QUFBQSxNQUFHSSxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUNBQSxLQUFLLG9DQURMO0FBQUEsQ0FoRVEsRUFzRVI7QUFBQSxNQUFHQyxNQUFILFNBQUdBLE1BQUg7QUFBQSxNQUFXSixPQUFYLFNBQVdBLE9BQVg7QUFBQSxTQUNGSSxNQUFNLCtCQUVTTCxnQkFBTSxlQUFOLENBRlQsb0NBR2NBLGdCQUFNTSxHQUhwQixrQkFJSixDQUFDTCxPQUFELHNEQUVzQkQsZ0JBQU0scUJBQU4sQ0FGdEIsd0NBR3NCQSxnQkFBTSxjQUFOLENBSHRCLGlCQUpJLHdEQVdtQkEsZ0JBQU0sVUFBTixDQVhuQix5Q0FZbUJBLGdCQUFNLFVBQU4sQ0FabkIsZ0JBREo7QUFBQSxDQXRFUSxFQXVGUjtBQUFBLE1BQUdPLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFNBQ0FBLFFBQVEsMkJBRUNQLGdCQUFNLFVBQU4sQ0FGRCxzQ0FHWUEsZ0JBQU0sVUFBTixDQUhaLHNDQUlZQSxnQkFBTSxVQUFOLENBSlosc0RBTWNBLGdCQUFNLFVBQU4sQ0FOZCx3Q0FPY0EsZ0JBQU0sVUFBTixDQVBkLDZCQVFHQSxnQkFBTSxVQUFOLENBUkgsNkNBRFI7QUFBQSxDQXZGUSxFQXFHUjtBQUFBLE1BQUdRLFdBQUgsU0FBR0EsV0FBSDtBQUFBLFNBQ0FBLFdBQVcsOENBRFg7QUFBQSxDQXJHUSxFQTJHUjtBQUFBLE1BQUdDLFVBQUgsU0FBR0EsVUFBSDtBQUFBLFNBQ0FBLFVBQVUsaUNBRFY7QUFBQSxDQTNHUSxFQWlIUjtBQUFBLE1BQUdDLFdBQUgsU0FBR0EsV0FBSDtBQUFBLFNBQ0FBLFdBQVcsa0NBRFg7QUFBQSxDQWpIUSxDQUFaOztlQXlIZWIsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgQ29sb3IgZnJvbSBcIi4uLy4uL0NvbG9yc1wiO1xuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBiYWNrZ3JvdW5kOiAke0NvbG9yW1wicHJpbWFyeS1yZ2ItbGlnaHRcIl19O1xuICBib3JkZXI6IDFweCBzb2xpZCAke0NvbG9yW1wiZ3JhZGllbnQtbGlnaHRcIl19O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICR7Q29sb3JbXCJibGFjay01MFwiXX07XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIG1hcmdpbjogNHB4IDAgNHB4IDA7XG4gIG91dGxpbmU6IDA7XG5cbiAgJHsoeyBub0hvdmVyIH0pID0+XG4gICFub0hvdmVyICYmXG4gIGBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Q29sb3JbXCJwcmltYXJ5LWxpZ2h0XCJdfTtcbiAgICB9XG5cbiAgICA6YWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Q29sb3JbXCJwcmltYXJ5LWRhcmtcIl19O1xuICAgIH1cbiAgYH1cblxuICAkeyh7IHByaW1hcnksIG5vSG92ZXIgfSkgPT5cbiAgICBwcmltYXJ5ICYmXG4gICAgYFxuICAgIGJhY2tncm91bmQ6ICR7Q29sb3JbXCJwcmltYXJ5LXJnYi1saWdodFwiXX07XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHtDb2xvcltcImdyYWRpZW50LWxpZ2h0XCJdfTtcbiAgICAkeyFub0hvdmVyICYmIGBcbiAgICAgIDpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Q29sb3JbXCJwcmltYXJ5LWxpZ2h0XCJdfTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtDb2xvcltcInByaW1hcnktbGlnaHRcIl19O1xuICAgICAgICBjb2xvcjogJHtDb2xvcltcIndoaXRlLWxpZ2h0XCJdfTtcbiAgICAgIH1cbiAgICAgIDphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NvbG9yW1wicHJpbWFyeS1kYXJrXCJdfTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtDb2xvcltcInByaW1hcnktZGFya1wiXX07XG4gICAgICAgIGNvbG9yOiAke0NvbG9yW1wid2hpdGUtbGlnaHRcIl19O1xuICAgICAgfVxuICAgIGB9XG4gIGB9XG5cbiAgJHsoeyBzZWNvbmRhcnksIG5vSG92ZXIgfSkgPT5cbiAgICBzZWNvbmRhcnkgJiZcbiAgICBgXG4gICAgYmFja2dyb3VuZDogJHtDb2xvcltcInNlY29uZGFyeS1yZ2ItbGlnaHRcIl19O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Q29sb3Iuc2Vjb25kYXJ5fTtcbiAgICAkeyFub0hvdmVyICYmIGBcbiAgICAgIDpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAke0NvbG9yW1wid2hpdGUtbGlnaHRcIl19O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAgJHtDb2xvcltcInNlY29uZGFyeS1saWdodFwiXX07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICAke0NvbG9yW1wic2Vjb25kYXJ5LWxpZ2h0XCJdfTtcbiAgICAgIH1cblxuICAgICAgOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICAke0NvbG9yW1wic2Vjb25kYXJ5LWRhcmtcIl19O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAgJHtDb2xvcltcInNlY29uZGFyeS1kYXJrXCJdfTtcbiAgICAgIH1cbiAgICBgfVxuICBgfVxuXG4gICR7KHsgcm91bmQgfSkgPT5cbiAgICByb3VuZCAmJlxuICBgXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYH1cblxuICAkeyh7IGRhbmdlciwgbm9Ib3ZlciB9KSA9PlxuICBkYW5nZXIgJiZcbiAgYFxuICBiYWNrZ3JvdW5kOiAgJHtDb2xvcltcInJlZC1yZ2ItbGlnaHRcIl19O1xuICBib3JkZXI6IDFweCBzb2xpZCAke0NvbG9yLnJlZH07XG4gICR7IW5vSG92ZXIgJiYgYFxuICAgIDpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NvbG9yW1wicmVkLXJnYi1saWdodC1ob3ZlclwiXX07XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAke0NvbG9yW1wiZGFuZ2VyLWxpZ2h0XCJdfTtcbiAgICB9XG4gIGB9XG4gIC8vIDphY3RpdmUge1xuICAvLyAgIGJhY2tncm91bmQtY29sb3I6ICR7Q29sb3JbXCJyZWQtZGFya1wiXX07XG4gIC8vICAgYm9yZGVyOiAxcHggc29saWQgJHtDb2xvcltcInJlZC1kYXJrXCJdfTtcbiAgLy8gfVxuYH1cblxuICAkeyh7IGRpc2FibGVkIH0pID0+XG4gICAgZGlzYWJsZWQgJiZcbiAgICBgXG4gICAgY29sb3I6ICR7Q29sb3JbXCJibGFjay00MFwiXX07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtDb2xvcltcImJsYWNrLTEwXCJdfTtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAke0NvbG9yW1wiYmxhY2stMTBcIl19O1xuICAgIDpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NvbG9yW1wiYmxhY2stMTBcIl19O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtDb2xvcltcImJsYWNrLTEwXCJdfTtcbiAgICAgIGNvbG9yOiAke0NvbG9yW1wiYmxhY2stNDBcIl19O1xuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICB9XG4gIGB9XG5cbiAgJHsoeyB0cmFuc3BhcmVudCB9KSA9PlxuICAgIHRyYW5zcGFyZW50ICYmXG4gICAgYFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBgfVxuXG4gICR7KHsgbWFyZ2luTGVmdCB9KSA9PlxuICAgIG1hcmdpbkxlZnQgJiZcbiAgICBgXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgYH1cblxuICAkeyh7IG1hcmdpblJpZ2h0IH0pID0+XG4gICAgbWFyZ2luUmlnaHQgJiZcbiAgICBgXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGB9XG5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiJdfQ==