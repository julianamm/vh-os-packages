"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextWrapper = exports.AvatarWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    margin: 0;\n    padding: 0;\n    color: ", ";\n    font-family: Roboto;\n    font-size: 14px;\n    font-weight: 'regular';\n    line-height: 21.5px;\n    margin-left: 12px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    ", "\n    ", "\n    ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AvatarWrapper = _styledComponents.default.span(_templateObject());

exports.AvatarWrapper = AvatarWrapper;

var TextWrapper = _styledComponents.default.span(_templateObject2(), function (props) {
  return _Colors.default[props.color];
}, function (_ref) {
  var sm = _ref.sm;
  return sm && "\n        font-size: 14px;\n        line-height: 18px;\n    ";
}, function (_ref2) {
  var xs = _ref2.xs;
  return xs && "\n        font-size: 12px;\n        line-height: 16px;\n    ";
}, function (_ref3) {
  var lg = _ref3.lg;
  return lg && "\n        font-size: 16px !important;\n        line-height: 20px;\n    ";
});

exports.TextWrapper = TextWrapper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVGVzdGltb25pYWwvc3R5bGVzLmpzIl0sIm5hbWVzIjpbIkF2YXRhcldyYXBwZXIiLCJzdHlsZWQiLCJzcGFuIiwiVGV4dFdyYXBwZXIiLCJwcm9wcyIsIkNvbG9yIiwiY29sb3IiLCJzbSIsInhzIiwibGciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxhQUFhLEdBQUdDLDBCQUFPQyxJQUFWLG1CQUFuQjs7OztBQU1BLElBQU1DLFdBQVcsR0FBR0YsMEJBQU9DLElBQVYscUJBR1gsVUFBQUUsS0FBSztBQUFBLFNBQUlDLGdCQUFNRCxLQUFLLENBQUNFLEtBQVosQ0FBSjtBQUFBLENBSE0sRUFhbEI7QUFBQSxNQUFHQyxFQUFILFFBQUdBLEVBQUg7QUFBQSxTQUFZQSxFQUFFLGtFQUFkO0FBQUEsQ0Fia0IsRUFpQmxCO0FBQUEsTUFBR0MsRUFBSCxTQUFHQSxFQUFIO0FBQUEsU0FBWUEsRUFBRSxrRUFBZDtBQUFBLENBakJrQixFQXFCbEI7QUFBQSxNQUFHQyxFQUFILFNBQUdBLEVBQUg7QUFBQSxTQUFZQSxFQUFFLDZFQUFkO0FBQUEsQ0FyQmtCLENBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQ29sb3IgZnJvbSAnLi4vLi4vQ29sb3JzJztcblxuZXhwb3J0IGNvbnN0IEF2YXRhcldyYXBwZXIgPSBzdHlsZWQuc3BhbmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gXG5cbmV4cG9ydCBjb25zdCBUZXh0V3JhcHBlciA9IHN0eWxlZC5zcGFuYFxuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IENvbG9yW3Byb3BzLmNvbG9yXX07XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6ICdyZWd1bGFyJztcbiAgICBsaW5lLWhlaWdodDogMjEuNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICR7KHsgc20gfSkgPT4gc20gJiYgYFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIGB9XG4gICAgJHsoeyB4cyB9KSA9PiB4cyAmJiBgXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgYH1cbiAgICAkeyh7IGxnIH0pID0+IGxnICYmIGBcbiAgICAgICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGB9XG5gXG4iXX0=