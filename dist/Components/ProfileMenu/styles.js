"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    padding-left: 20px;\n    text-decoration: none;\n    color: ", ";\n    :hover {\n        color: ", ";\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    align-items: center;\n    width: 100%;\n    height: 40px;\n    font-family: Roboto;\n    font-size: 14px;\n    font-weight: 500;\n    color: ", ";\n    display: flex;\n    flex-direction: row;\n    :hover {\n        border-right : 2px solid ", ";\n        color: ", ";\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject(), _Colors.default["black-100"], _Colors.default["primary-light"], _Colors.default["primary-light"]);

exports.Wrapper = Wrapper;

var Link = _styledComponents.default.a(_templateObject2(), _Colors.default["black-100"], _Colors.default["primary-light"]);

exports.Link = Link;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvUHJvZmlsZU1lbnUvc3R5bGVzLmpzIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJDb2xvciIsIkxpbmsiLCJhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU8sSUFBTUEsT0FBTyxHQUFHQywwQkFBT0MsR0FBVixvQkFPUEMsZ0JBQU0sV0FBTixDQVBPLEVBV2VBLGdCQUFNLGVBQU4sQ0FYZixFQVlIQSxnQkFBTSxlQUFOLENBWkcsQ0FBYjs7OztBQWdCQSxJQUFNQyxJQUFJLEdBQUdILDBCQUFPSSxDQUFWLHFCQUdKRixnQkFBTSxXQUFOLENBSEksRUFLQUEsZ0JBQU0sZUFBTixDQUxBLENBQVYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IENvbG9yIGZyb20gXCIuLi8uLi9Db2xvcnNcIjtcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICR7Q29sb3JbXCJibGFjay0xMDBcIl19O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICA6aG92ZXIge1xuICAgICAgICBib3JkZXItcmlnaHQgOiAycHggc29saWQgJHtDb2xvcltcInByaW1hcnktbGlnaHRcIl19O1xuICAgICAgICBjb2xvcjogJHtDb2xvcltcInByaW1hcnktbGlnaHRcIl19O1xuICAgIH1cbmBcblxuZXhwb3J0IGNvbnN0IExpbmsgPSBzdHlsZWQuYWBcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAke0NvbG9yW1wiYmxhY2stMTAwXCJdfTtcbiAgICA6aG92ZXIge1xuICAgICAgICBjb2xvcjogJHtDb2xvcltcInByaW1hcnktbGlnaHRcIl19O1xuICAgIH1cbmBcbiJdfQ==