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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvT25ib2FyZGluZy9zdHlsZXMuanMiXSwibmFtZXMiOlsiQnV0dG9uIiwic3R5bGVkIiwiYnV0dG9uIiwiQ29sb3IiLCJub0hvdmVyIiwicHJpbWFyeSIsInNlY29uZGFyeSIsInJvdW5kIiwiZGFuZ2VyIiwicmVkIiwiZGlzYWJsZWQiLCJ0cmFuc3BhcmVudCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQywwQkFBT0MsTUFBVixvQkFDSUMsZ0JBQU0sbUJBQU4sQ0FESixFQUVVQSxnQkFBTSxnQkFBTixDQUZWLEVBTURBLGdCQUFNLFVBQU4sQ0FOQyxFQWFSO0FBQUEsTUFBR0MsT0FBSCxRQUFHQSxPQUFIO0FBQUEsU0FDRixDQUFDQSxPQUFELDRFQUl3QkQsZ0JBQU0sZUFBTixDQUp4QixnRUFRd0JBLGdCQUFNLGNBQU4sQ0FSeEIsaUJBREU7QUFBQSxDQWJRLEVBMEJSO0FBQUEsTUFBR0UsT0FBSCxTQUFHQSxPQUFIO0FBQUEsTUFBWUQsT0FBWixTQUFZQSxPQUFaO0FBQUEsU0FDQUMsT0FBTyxnQ0FFT0YsZ0JBQU0sbUJBQU4sQ0FGUCxzQ0FHYUEsZ0JBQU0sZ0JBQU4sQ0FIYixvQkFJTCxDQUFDQyxPQUFELDBEQUVzQkQsZ0JBQU0sZUFBTixDQUZ0QiwwQ0FHc0JBLGdCQUFNLGVBQU4sQ0FIdEIsK0JBSVdBLGdCQUFNLGFBQU4sQ0FKWCxvRUFPc0JBLGdCQUFNLGNBQU4sQ0FQdEIsMENBUXNCQSxnQkFBTSxjQUFOLENBUnRCLCtCQVNXQSxnQkFBTSxhQUFOLENBVFgscUJBSkssU0FEUDtBQUFBLENBMUJRLEVBNkNSO0FBQUEsTUFBR0csU0FBSCxTQUFHQSxTQUFIO0FBQUEsTUFBY0YsT0FBZCxTQUFjQSxPQUFkO0FBQUEsU0FDQUUsU0FBUyxnQ0FFS0gsZ0JBQU0scUJBQU4sQ0FGTCxzQ0FHV0EsZ0JBQU1HLFNBSGpCLG9CQUlQLENBQUNGLE9BQUQsK0NBRVdELGdCQUFNLGFBQU4sQ0FGWCwyQ0FHdUJBLGdCQUFNLGlCQUFOLENBSHZCLDJDQUl1QkEsZ0JBQU0saUJBQU4sQ0FKdkIsdUVBUXVCQSxnQkFBTSxnQkFBTixDQVJ2QiwyQ0FTdUJBLGdCQUFNLGdCQUFOLENBVHZCLHFCQUpPLFNBRFQ7QUFBQSxDQTdDUSxFQWdFUjtBQUFBLE1BQUdJLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQ0FBLEtBQUssb0NBREw7QUFBQSxDQWhFUSxFQXNFUjtBQUFBLE1BQUdDLE1BQUgsU0FBR0EsTUFBSDtBQUFBLE1BQVdKLE9BQVgsU0FBV0EsT0FBWDtBQUFBLFNBQ0ZJLE1BQU0sK0JBRVNMLGdCQUFNLGVBQU4sQ0FGVCxvQ0FHY0EsZ0JBQU1NLEdBSHBCLGtCQUlKLENBQUNMLE9BQUQsc0RBRXNCRCxnQkFBTSxxQkFBTixDQUZ0Qix3Q0FHc0JBLGdCQUFNLGNBQU4sQ0FIdEIsaUJBSkksd0RBV21CQSxnQkFBTSxVQUFOLENBWG5CLHlDQVltQkEsZ0JBQU0sVUFBTixDQVpuQixnQkFESjtBQUFBLENBdEVRLEVBdUZSO0FBQUEsTUFBR08sUUFBSCxTQUFHQSxRQUFIO0FBQUEsU0FDQUEsUUFBUSwyQkFFQ1AsZ0JBQU0sVUFBTixDQUZELHNDQUdZQSxnQkFBTSxVQUFOLENBSFosc0NBSVlBLGdCQUFNLFVBQU4sQ0FKWixzREFNY0EsZ0JBQU0sVUFBTixDQU5kLHdDQU9jQSxnQkFBTSxVQUFOLENBUGQsNkJBUUdBLGdCQUFNLFVBQU4sQ0FSSCw2Q0FEUjtBQUFBLENBdkZRLEVBcUdSO0FBQUEsTUFBR1EsV0FBSCxTQUFHQSxXQUFIO0FBQUEsU0FDQUEsV0FBVyw4Q0FEWDtBQUFBLENBckdRLEVBMkdSO0FBQUEsTUFBR0MsVUFBSCxTQUFHQSxVQUFIO0FBQUEsU0FDQUEsVUFBVSxpQ0FEVjtBQUFBLENBM0dRLEVBaUhSO0FBQUEsTUFBR0MsV0FBSCxTQUFHQSxXQUFIO0FBQUEsU0FDQUEsV0FBVyxrQ0FEWDtBQUFBLENBakhRLENBQVo7O2VBeUhlYixNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBDb2xvciBmcm9tIFwiLi4vLi4vQ29sb3JzXCI7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJhY2tncm91bmQ6ICR7Q29sb3JbXCJwcmltYXJ5LXJnYi1saWdodFwiXX07XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7Q29sb3JbXCJncmFkaWVudC1saWdodFwiXX07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogJHtDb2xvcltcImJsYWNrLTUwXCJdfTtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgbWFyZ2luOiA0cHggMCA0cHggMDtcbiAgb3V0bGluZTogMDtcblxuICAkeyh7IG5vSG92ZXIgfSkgPT5cbiAgIW5vSG92ZXIgJiZcbiAgYFxuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICA6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtDb2xvcltcInByaW1hcnktbGlnaHRcIl19O1xuICAgIH1cblxuICAgIDphY3RpdmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtDb2xvcltcInByaW1hcnktZGFya1wiXX07XG4gICAgfVxuICBgfVxuXG4gICR7KHsgcHJpbWFyeSwgbm9Ib3ZlciB9KSA9PlxuICAgIHByaW1hcnkgJiZcbiAgICBgXG4gICAgYmFja2dyb3VuZDogJHtDb2xvcltcInByaW1hcnktcmdiLWxpZ2h0XCJdfTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke0NvbG9yW1wiZ3JhZGllbnQtbGlnaHRcIl19O1xuICAgICR7IW5vSG92ZXIgJiYgYFxuICAgICAgOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtDb2xvcltcInByaW1hcnktbGlnaHRcIl19O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke0NvbG9yW1wicHJpbWFyeS1saWdodFwiXX07XG4gICAgICAgIGNvbG9yOiAke0NvbG9yW1wid2hpdGUtbGlnaHRcIl19O1xuICAgICAgfVxuICAgICAgOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Q29sb3JbXCJwcmltYXJ5LWRhcmtcIl19O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke0NvbG9yW1wicHJpbWFyeS1kYXJrXCJdfTtcbiAgICAgICAgY29sb3I6ICR7Q29sb3JbXCJ3aGl0ZS1saWdodFwiXX07XG4gICAgICB9XG4gICAgYH1cbiAgYH1cblxuICAkeyh7IHNlY29uZGFyeSwgbm9Ib3ZlciB9KSA9PlxuICAgIHNlY29uZGFyeSAmJlxuICAgIGBcbiAgICBiYWNrZ3JvdW5kOiAke0NvbG9yW1wic2Vjb25kYXJ5LXJnYi1saWdodFwiXX07XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHtDb2xvci5zZWNvbmRhcnl9O1xuICAgICR7IW5vSG92ZXIgJiYgYFxuICAgICAgOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICR7Q29sb3JbXCJ3aGl0ZS1saWdodFwiXX07XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICAke0NvbG9yW1wic2Vjb25kYXJ5LWxpZ2h0XCJdfTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogICR7Q29sb3JbXCJzZWNvbmRhcnktbGlnaHRcIl19O1xuICAgICAgfVxuXG4gICAgICA6YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogICR7Q29sb3JbXCJzZWNvbmRhcnktZGFya1wiXX07XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICAke0NvbG9yW1wic2Vjb25kYXJ5LWRhcmtcIl19O1xuICAgICAgfVxuICAgIGB9XG4gIGB9XG5cbiAgJHsoeyByb3VuZCB9KSA9PlxuICAgIHJvdW5kICYmXG4gIGBcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBgfVxuXG4gICR7KHsgZGFuZ2VyLCBub0hvdmVyIH0pID0+XG4gIGRhbmdlciAmJlxuICBgXG4gIGJhY2tncm91bmQ6ICAke0NvbG9yW1wicmVkLXJnYi1saWdodFwiXX07XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7Q29sb3IucmVkfTtcbiAgJHshbm9Ib3ZlciAmJiBgXG4gICAgOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Q29sb3JbXCJyZWQtcmdiLWxpZ2h0LWhvdmVyXCJdfTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Q29sb3JbXCJkYW5nZXItbGlnaHRcIl19O1xuICAgIH1cbiAgYH1cbiAgLy8gOmFjdGl2ZSB7XG4gIC8vICAgYmFja2dyb3VuZC1jb2xvcjogJHtDb2xvcltcInJlZC1kYXJrXCJdfTtcbiAgLy8gICBib3JkZXI6IDFweCBzb2xpZCAke0NvbG9yW1wicmVkLWRhcmtcIl19O1xuICAvLyB9XG5gfVxuXG4gICR7KHsgZGlzYWJsZWQgfSkgPT5cbiAgICBkaXNhYmxlZCAmJlxuICAgIGBcbiAgICBjb2xvcjogJHtDb2xvcltcImJsYWNrLTQwXCJdfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NvbG9yW1wiYmxhY2stMTBcIl19O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICR7Q29sb3JbXCJibGFjay0xMFwiXX07XG4gICAgOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Q29sb3JbXCJibGFjay0xMFwiXX07XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAke0NvbG9yW1wiYmxhY2stMTBcIl19O1xuICAgICAgY29sb3I6ICR7Q29sb3JbXCJibGFjay00MFwiXX07XG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIH1cbiAgYH1cblxuICAkeyh7IHRyYW5zcGFyZW50IH0pID0+XG4gICAgdHJhbnNwYXJlbnQgJiZcbiAgICBgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGB9XG5cbiAgJHsoeyBtYXJnaW5MZWZ0IH0pID0+XG4gICAgbWFyZ2luTGVmdCAmJlxuICAgIGBcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICBgfVxuXG4gICR7KHsgbWFyZ2luUmlnaHQgfSkgPT5cbiAgICBtYXJnaW5SaWdodCAmJlxuICAgIGBcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgYH1cblxuYDtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIl19