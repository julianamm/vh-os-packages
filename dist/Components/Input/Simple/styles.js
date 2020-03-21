"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = exports.LoaderContainer = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  border: ", ";\n  border-radius: 6px;\n  color: ", ";\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.53;\n  letter-spacing: normal;\n  padding: 9px 24px;\n  width: 100%;\n  background: transparent;\n  outline: 0;\n  box-sizing: border-box;\n\n  ::placeholder {\n    font-size: 14px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.53;\n    letter-spacing: normal;\n    color: ", ";\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 12px;\n  right: 18px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject());

exports.Container = Container;

var LoaderContainer = _styledComponents.default.div(_templateObject2());

exports.LoaderContainer = LoaderContainer;

var Input = _styledComponents.default.input(_templateObject3(), function (props) {
  return props.noBorder ? 'none' : "1px solid ".concat(_Colors.default["gray-30"]);
}, _Colors.default["gray-100"], _Colors.default["gray-50"], function (_ref) {
  var disabled = _ref.disabled;
  return disabled && "\n    background-color: ".concat(_Colors.default["gray-10"], ";\n  ");
}, function (_ref2) {
  var error = _ref2.error;
  return error && "\n    color: ".concat(_Colors.default["red-dark"], ";\n    border-color: ").concat(_Colors.default["red-dark"], ";\n  ");
}, function (_ref3) {
  var loading = _ref3.loading;
  return loading && "\n    color: ".concat(_Colors.default["blue-dark"], ";\n  ");
});

exports.Input = Input;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvSW5wdXQvU2ltcGxlL3N0eWxlcy5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJMb2FkZXJDb250YWluZXIiLCJJbnB1dCIsImlucHV0IiwicHJvcHMiLCJub0JvcmRlciIsIkNvbG9yIiwiZGlzYWJsZWQiLCJlcnJvciIsImxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU8sSUFBTUEsU0FBUyxHQUFHQywwQkFBT0MsR0FBVixtQkFBZjs7OztBQUdBLElBQU1DLGVBQWUsR0FBR0YsMEJBQU9DLEdBQVYsb0JBQXJCOzs7O0FBTUEsSUFBTUUsS0FBSyxHQUFHSCwwQkFBT0ksS0FBVixxQkFDTCxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxRQUFOLEdBQWlCLE1BQWpCLHVCQUF1Q0MsZ0JBQU0sU0FBTixDQUF2QyxDQUFKO0FBQUEsQ0FEQSxFQUdQQSxnQkFBTSxVQUFOLENBSE8sRUF1QkxBLGdCQUFNLFNBQU4sQ0F2QkssRUEwQmQ7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxTQUFrQkEsUUFBUSxzQ0FDTkQsZ0JBQU0sU0FBTixDQURNLFVBQTFCO0FBQUEsQ0ExQmMsRUE4QmQ7QUFBQSxNQUFHRSxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLDJCQUNYRixnQkFBTSxVQUFOLENBRFcsa0NBRUpBLGdCQUFNLFVBQU4sQ0FGSSxVQUFwQjtBQUFBLENBOUJjLEVBbUNkO0FBQUEsTUFBR0csT0FBSCxTQUFHQSxPQUFIO0FBQUEsU0FBaUJBLE9BQU8sMkJBQ2ZILGdCQUFNLFdBQU4sQ0FEZSxVQUF4QjtBQUFBLENBbkNjLENBQVgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IENvbG9yIGZyb20gXCIuLi8uLi8uLi9Db2xvcnNcIjtcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmBcbmV4cG9ydCBjb25zdCBMb2FkZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTJweDtcbiAgcmlnaHQ6IDE4cHg7XG5gXG5cbmV4cG9ydCBjb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgYm9yZGVyOiAkeyBwcm9wcyA9PiBwcm9wcy5ub0JvcmRlciA/ICdub25lJyA6IGAxcHggc29saWQgJHtDb2xvcltcImdyYXktMzBcIl19YH07XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY29sb3I6ICR7Q29sb3JbXCJncmF5LTEwMFwiXX07XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNTM7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHBhZGRpbmc6IDlweCAyNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgOjpwbGFjZWhvbGRlciB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjUzO1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgY29sb3I6ICR7Q29sb3JbXCJncmF5LTUwXCJdfTtcbiAgfVxuXG4gICR7KHsgZGlzYWJsZWQgfSkgPT4gZGlzYWJsZWQgJiYgYFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Q29sb3JbXCJncmF5LTEwXCJdfTtcbiAgYH1cblxuICAkeyh7IGVycm9yIH0pID0+IGVycm9yICYmIGBcbiAgICBjb2xvcjogJHtDb2xvcltcInJlZC1kYXJrXCJdfTtcbiAgICBib3JkZXItY29sb3I6ICR7Q29sb3JbXCJyZWQtZGFya1wiXX07XG4gIGB9XG5cbiAgJHsoeyBsb2FkaW5nIH0pID0+IGxvYWRpbmcgJiYgYFxuICAgIGNvbG9yOiAke0NvbG9yW1wiYmx1ZS1kYXJrXCJdfTtcbiAgYH1cblxuYDtcbiJdfQ==