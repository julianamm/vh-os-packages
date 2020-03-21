"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border: ", ";\n  border-radius: 6px;\n  color: ", ";\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.53;\n  letter-spacing: normal;\n  padding: 9px 24px;\n  width: 100%;\n  background: transparent;\n  outline: 0;\n  box-sizing: border-box;\n  ::placeholder {\n    font-size: 14px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.53;\n    letter-spacing: normal;\n    color: ", ";\n  }\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Input = _styledComponents.default.input(_templateObject(), function (props) {
  return props.noBorder ? 'none' : "1px solid ".concat(_Colors.default["gray-30"]);
}, _Colors.default["gray-100"], _Colors.default["gray-50"], function (_ref) {
  var disabled = _ref.disabled;
  return disabled && "\n    background-color: ".concat(_Colors.default["gray-10"], ";\n  ");
}, function (_ref2) {
  var error = _ref2.error;
  return error && "\n    background-color: ".concat(_Colors.default["red-dark"], ";\n  ");
}, function (_ref3) {
  var loading = _ref3.loading;
  return loading && "\n    background-color: ".concat(_Colors.default["primary"], ";\n  ");
});

exports.Input = Input;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvSW5wdXQvTXVsdGlwbGUvc3R5bGVzLmpzIl0sIm5hbWVzIjpbIklucHV0Iiwic3R5bGVkIiwiaW5wdXQiLCJwcm9wcyIsIm5vQm9yZGVyIiwiQ29sb3IiLCJkaXNhYmxlZCIsImVycm9yIiwibG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRU8sSUFBTUEsS0FBSyxHQUFHQywwQkFBT0MsS0FBVixvQkFDTCxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxRQUFOLEdBQWlCLE1BQWpCLHVCQUF1Q0MsZ0JBQU0sU0FBTixDQUF2QyxDQUFKO0FBQUEsQ0FEQSxFQUdQQSxnQkFBTSxVQUFOLENBSE8sRUFzQkxBLGdCQUFNLFNBQU4sQ0F0QkssRUF3QmQ7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxTQUFrQkEsUUFBUSxzQ0FDTkQsZ0JBQU0sU0FBTixDQURNLFVBQTFCO0FBQUEsQ0F4QmMsRUEyQmQ7QUFBQSxNQUFHRSxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLHNDQUNBRixnQkFBTSxVQUFOLENBREEsVUFBcEI7QUFBQSxDQTNCYyxFQThCZDtBQUFBLE1BQUdHLE9BQUgsU0FBR0EsT0FBSDtBQUFBLFNBQWlCQSxPQUFPLHNDQUNKSCxnQkFBTSxTQUFOLENBREksVUFBeEI7QUFBQSxDQTlCYyxDQUFYIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBDb2xvciBmcm9tIFwiLi4vLi4vLi4vQ29sb3JzXCI7XG5cbmV4cG9ydCBjb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgYm9yZGVyOiAkeyBwcm9wcyA9PiBwcm9wcy5ub0JvcmRlciA/ICdub25lJyA6IGAxcHggc29saWQgJHtDb2xvcltcImdyYXktMzBcIl19YH07XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY29sb3I6ICR7Q29sb3JbXCJncmF5LTEwMFwiXX07XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNTM7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHBhZGRpbmc6IDlweCAyNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIDo6cGxhY2Vob2xkZXIge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMS41MztcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgIGNvbG9yOiAke0NvbG9yW1wiZ3JheS01MFwiXX07XG4gIH1cbiAgJHsoeyBkaXNhYmxlZCB9KSA9PiBkaXNhYmxlZCAmJiBgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtDb2xvcltcImdyYXktMTBcIl19O1xuICBgfVxuICAkeyh7IGVycm9yIH0pID0+IGVycm9yICYmIGBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NvbG9yW1wicmVkLWRhcmtcIl19O1xuICBgfVxuICAkeyh7IGxvYWRpbmcgfSkgPT4gbG9hZGluZyAmJiBgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtDb2xvcltcInByaW1hcnlcIl19O1xuICBgfVxuYDtcbiJdfQ==