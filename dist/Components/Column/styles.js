"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberOfCards = exports.AvgTime = exports.ColumnName = exports.Column = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    margin: 0 0 0 1rem;\n    width: 30.1px;\n    height: 30.1px;\n    background-color: ", ";\n    color: ", ";\n    border-radius: 50%;\n    text-align: center;\n    display: grid;\n    align-items: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-family: Roboto;\n  font-size: 0.75rem;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: Roboto;\n  font-size: 1.125rem;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    min-width: 302px;\n    min-height: 100vh;\n    border-radius: 6px;\n    background-color: transparent;\n    padding: 1rem;\n    box-sizing: border-box;\n    transition: background-color 0.5s ease;\n\n    :hover {\n        background-color: ", ";\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Column = _styledComponents.default.div(_templateObject(), _Colors.default["gray-10"]);

exports.Column = Column;

var ColumnName = _styledComponents.default.h1(_templateObject2(), _Colors.default["gray-90"]);

exports.ColumnName = ColumnName;

var AvgTime = _styledComponents.default.p(_templateObject3(), _Colors.default["gray-70"]);

exports.AvgTime = AvgTime;

var NumberOfCards = _styledComponents.default.div(_templateObject4(), _Colors.default["gray-30"], _Colors.default["gray-90"]);

exports.NumberOfCards = NumberOfCards;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQ29sdW1uL3N0eWxlcy5qcyJdLCJuYW1lcyI6WyJDb2x1bW4iLCJzdHlsZWQiLCJkaXYiLCJDb2xvciIsIkNvbHVtbk5hbWUiLCJoMSIsIkF2Z1RpbWUiLCJwIiwiTnVtYmVyT2ZDYXJkcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU8sSUFBTUEsTUFBTSxHQUFHQywwQkFBT0MsR0FBVixvQkFVU0MsZ0JBQU0sU0FBTixDQVZULENBQVo7Ozs7QUFjQSxJQUFNQyxVQUFVLEdBQUdILDBCQUFPSSxFQUFWLHFCQVFaRixnQkFBTSxTQUFOLENBUlksQ0FBaEI7Ozs7QUFXQSxJQUFNRyxPQUFPLEdBQUdMLDBCQUFPTSxDQUFWLHFCQVFUSixnQkFBTSxTQUFOLENBUlMsQ0FBYjs7OztBQVdBLElBQU1LLGFBQWEsR0FBR1AsMEJBQU9DLEdBQVYscUJBSUZDLGdCQUFNLFNBQU4sQ0FKRSxFQUtiQSxnQkFBTSxTQUFOLENBTGEsQ0FBbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IENvbG9yIGZyb20gXCIuLi8uLi9Db2xvcnNcIjtcblxuZXhwb3J0IGNvbnN0IENvbHVtbiA9IHN0eWxlZC5kaXZgXG4gICAgbWluLXdpZHRoOiAzMDJweDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlO1xuXG4gICAgOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtDb2xvcltcImdyYXktMTBcIl19O1xuICAgIH1cbmBcblxuZXhwb3J0IGNvbnN0IENvbHVtbk5hbWUgPSBzdHlsZWQuaDFgXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAke0NvbG9yW1wiZ3JheS05MFwiXX07XG5gXG5cbmV4cG9ydCBjb25zdCBBdmdUaW1lID0gc3R5bGVkLnBgXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICR7Q29sb3JbXCJncmF5LTcwXCJdfTtcbmBcblxuZXhwb3J0IGNvbnN0IE51bWJlck9mQ2FyZHMgPSBzdHlsZWQuZGl2YFxuICAgIG1hcmdpbjogMCAwIDAgMXJlbTtcbiAgICB3aWR0aDogMzAuMXB4O1xuICAgIGhlaWdodDogMzAuMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Q29sb3JbXCJncmF5LTMwXCJdfTtcbiAgICBjb2xvcjogJHtDb2xvcltcImdyYXktOTBcIl19O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuYCJdfQ==