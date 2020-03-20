"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    padding-bottom: 21px;\n\n    ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject(), function (_ref) {
  var hideTimeline = _ref.hideTimeline;
  return !hideTimeline && "\n        border-left: 1px solid ".concat(_Colors.default["gray-30"], ";\n        padding-left: 15px;\n        position: relative;\n\n        &::after {\n            content: \"\";\n            position: absolute;\n            width: 12px;\n            height: 12px;\n            top: 0px;\n            left: -6px;\n            background-color: ").concat(_Colors.default["gray-30"], ";\n            border-radius: 50%;\n            z-index: 1;\n        }\n    ");
});

exports.Wrapper = Wrapper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVXNlclBvc2l0b25FeHBlcmllbmNlL3N0eWxlcy5qcyJdLCJuYW1lcyI6WyJXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiaGlkZVRpbWVsaW5lIiwiQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLElBQU1BLE9BQU8sR0FBR0MsMEJBQU9DLEdBQVYsb0JBR2Q7QUFBQSxNQUFHQyxZQUFILFFBQUdBLFlBQUg7QUFBQSxTQUFzQixDQUFDQSxZQUFELCtDQUNLQyxnQkFBTSxTQUFOLENBREwsZ1NBWUlBLGdCQUFNLFNBQU4sQ0FaSixpRkFBdEI7QUFBQSxDQUhjLENBQWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IENvbG9yIGZyb20gXCIuLi8uLi9Db2xvcnNcIjtcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAgIHBhZGRpbmctYm90dG9tOiAyMXB4O1xuXG4gICAgJHsoeyBoaWRlVGltZWxpbmUgfSkgPT4gIWhpZGVUaW1lbGluZSAmJmBcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAke0NvbG9yW1wiZ3JheS0zMFwiXX07XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgbGVmdDogLTZweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Q29sb3JbXCJncmF5LTMwXCJdfTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIH1cbiAgICBgfVxuYFxuO1xuXG4iXX0=