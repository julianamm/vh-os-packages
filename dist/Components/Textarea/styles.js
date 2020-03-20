"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Textarea = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

var _Simple = _interopRequireDefault(require("../Input/Simple"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 45px;\n    border-radius: 6px;\n    border: solid 1px ", ";\n    background-color: ", ";\n    padding: 15px;\n    margin-top: 5px;\n    outline: 0;\n    font-size: 14px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    font-family: Roboto;\n    letter-spacing: normal;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Textarea = (0, _styledComponents.default)(_Simple.default)(_templateObject(), _Colors.default["gray-30"], _Colors.default["gray-20"]);
exports.Textarea = Textarea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVGV4dGFyZWEvc3R5bGVzLmpzIl0sIm5hbWVzIjpbIlRleHRhcmVhIiwiVkhJbnB1dCIsIkNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxRQUFRLEdBQUcsK0JBQU9DLGVBQVAsQ0FBSCxvQkFJR0MsZ0JBQU0sU0FBTixDQUpILEVBS0dBLGdCQUFNLFNBQU4sQ0FMSCxDQUFkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQ29sb3IgZnJvbSAnLi4vLi4vQ29sb3JzJ1xuaW1wb3J0IFZISW5wdXQgZnJvbSAnLi4vSW5wdXQvU2ltcGxlJ1xuXG5leHBvcnQgY29uc3QgVGV4dGFyZWEgPSBzdHlsZWQoVkhJbnB1dClgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAke0NvbG9yW1wiZ3JheS0zMFwiXX07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtDb2xvcltcImdyYXktMjBcIl19O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG91dGxpbmU6IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbmAiXX0=