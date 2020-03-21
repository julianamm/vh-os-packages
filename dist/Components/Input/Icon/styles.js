"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject(), function (_ref) {
  var loading = _ref.loading;
  return !loading && "\n    border-radius: 6px;\n    border: solid 1px ".concat(_Colors.default["gray-30"], ";\n    background-color: ").concat(_Colors.default["gray-20"], ";\n    padding-left: 0.563rem;\n    display: grid;\n    grid-template-columns: 9px 100%;\n    align-items: center;\n  ");
}, function (_ref2) {
  var error = _ref2.error;
  return error && "\n    border-radius: 6px;\n    border: solid 1px ".concat(_Colors.default["red-dark"], ";\n    background-color: ").concat(_Colors.default["gray-20"], ";\n    padding-left: 0.563rem;\n    display: grid;\n    grid-template-columns: 9px 100%;\n    align-items: center;\n  ");
});

exports.Wrapper = Wrapper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvSW5wdXQvSWNvbi9zdHlsZXMuanMiXSwibmFtZXMiOlsiV3JhcHBlciIsInN0eWxlZCIsImRpdiIsImxvYWRpbmciLCJDb2xvciIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxPQUFPLEdBQUdDLDBCQUFPQyxHQUFWLG9CQUVoQjtBQUFBLE1BQUdDLE9BQUgsUUFBR0EsT0FBSDtBQUFBLFNBQWlCLENBQUNBLE9BQUQsK0RBRUdDLGdCQUFNLFNBQU4sQ0FGSCxzQ0FHR0EsZ0JBQU0sU0FBTixDQUhILDJIQUFqQjtBQUFBLENBRmdCLEVBWWhCO0FBQUEsTUFBR0MsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSywrREFFQUQsZ0JBQU0sVUFBTixDQUZBLHNDQUdBQSxnQkFBTSxTQUFOLENBSEEsMkhBQXBCO0FBQUEsQ0FaZ0IsQ0FBYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgQ29sb3IgZnJvbSBcIi4uLy4uLy4uL0NvbG9yc1wiO1xuXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cbiAgJHsoeyBsb2FkaW5nIH0pID0+ICFsb2FkaW5nICYmIGBcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggJHtDb2xvcltcImdyYXktMzBcIl19O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Q29sb3JbXCJncmF5LTIwXCJdfTtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNTYzcmVtO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5cHggMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBgfVxuXG4gICR7KHsgZXJyb3IgfSkgPT4gZXJyb3IgJiYgYFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAke0NvbG9yW1wicmVkLWRhcmtcIl19O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Q29sb3JbXCJncmF5LTIwXCJdfTtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNTYzcmVtO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5cHggMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBgfVxuYDtcbiJdfQ==