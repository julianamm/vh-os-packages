"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _index = _interopRequireDefault(require("../TitleDescription/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHMainTitleDescription = function VHMainTitleDescription(props) {
  return _react.default.createElement(_Grid.Row, null, _react.default.createElement(_index.default, {
    className: "vh-main-title-description",
    data: props.data,
    description: props.rightTitle,
    descriptionColor: "gray-60",
    descriptionVariant: "platform1",
    inline: true,
    title: props.title,
    titleColor: "primary-light",
    titleVariant: "subtitle1"
  }), _react.default.createElement(_index.default, {
    className: "vh-main-title-description",
    data: props.data,
    title: props.description,
    titleColor: "gray-90",
    titleVariant: "cation"
  }));
};

VHMainTitleDescription.propTypes = {
  onEvent: _propTypes.default.func,
  title: _propTypes.default.string.isRequired,
  rightTitle: _propTypes.default.string,
  description: _propTypes.default.string,
  data: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  className: _propTypes.default.string
};
var _default = VHMainTitleDescription;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvTWFpblRpdGxlRGVzY3JpcHRpb24vaW5kZXguanN4Il0sIm5hbWVzIjpbIlZITWFpblRpdGxlRGVzY3JpcHRpb24iLCJwcm9wcyIsImRhdGEiLCJyaWdodFRpdGxlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByb3BUeXBlcyIsIm9uRXZlbnQiLCJQcm9wVHlwZXMiLCJmdW5jIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm9uZU9mVHlwZSIsIm9iamVjdCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBR0EsSUFBTUEsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixDQUFBQyxLQUFLLEVBQUk7QUFFcEMsU0FDSSw2QkFBQyxTQUFELFFBQ0ksNkJBQUMsY0FBRDtBQUNJLElBQUEsU0FBUyxFQUFDLDJCQURkO0FBRUksSUFBQSxJQUFJLEVBQUVBLEtBQUssQ0FBQ0MsSUFGaEI7QUFHSSxJQUFBLFdBQVcsRUFBRUQsS0FBSyxDQUFDRSxVQUh2QjtBQUlJLElBQUEsZ0JBQWdCLEVBQUMsU0FKckI7QUFLSSxJQUFBLGtCQUFrQixFQUFDLFdBTHZCO0FBTUksSUFBQSxNQUFNLE1BTlY7QUFPSSxJQUFBLEtBQUssRUFBRUYsS0FBSyxDQUFDRyxLQVBqQjtBQVFJLElBQUEsVUFBVSxFQUFDLGVBUmY7QUFTSSxJQUFBLFlBQVksRUFBQztBQVRqQixJQURKLEVBWUksNkJBQUMsY0FBRDtBQUNJLElBQUEsU0FBUyxFQUFDLDJCQURkO0FBRUksSUFBQSxJQUFJLEVBQUVILEtBQUssQ0FBQ0MsSUFGaEI7QUFHSSxJQUFBLEtBQUssRUFBRUQsS0FBSyxDQUFDSSxXQUhqQjtBQUlJLElBQUEsVUFBVSxFQUFDLFNBSmY7QUFLSSxJQUFBLFlBQVksRUFBQztBQUxqQixJQVpKLENBREo7QUFzQkgsQ0F4QkQ7O0FBMEJBTCxzQkFBc0IsQ0FBQ00sU0FBdkIsR0FBbUM7QUFDL0JDLEVBQUFBLE9BQU8sRUFBRUMsbUJBQVVDLElBRFk7QUFFL0JMLEVBQUFBLEtBQUssRUFBRUksbUJBQVVFLE1BQVYsQ0FBaUJDLFVBRk87QUFHL0JSLEVBQUFBLFVBQVUsRUFBRUssbUJBQVVFLE1BSFM7QUFJL0JMLEVBQUFBLFdBQVcsRUFBRUcsbUJBQVVFLE1BSlE7QUFLL0JSLEVBQUFBLElBQUksRUFBRU0sbUJBQVVJLFNBQVYsQ0FBb0IsQ0FBQ0osbUJBQVVFLE1BQVgsRUFBbUJGLG1CQUFVSyxNQUE3QixDQUFwQixDQUx5QjtBQU0vQkMsRUFBQUEsU0FBUyxFQUFFTixtQkFBVUU7QUFOVSxDQUFuQztlQVNlVixzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUm93IH0gZnJvbSBcIi4uLy4uL0dyaWRcIjtcbmltcG9ydCBWSFRpdGxlRGVzY3JpcHRpb24gZnJvbSBcIi4uL1RpdGxlRGVzY3JpcHRpb24vaW5kZXhcIjtcblxuXG5jb25zdCBWSE1haW5UaXRsZURlc2NyaXB0aW9uID0gcHJvcHMgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJvdz5cbiAgICAgICAgICAgIDxWSFRpdGxlRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ2aC1tYWluLXRpdGxlLWRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICBkYXRhPXtwcm9wcy5kYXRhfVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9wcy5yaWdodFRpdGxlfVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uQ29sb3I9XCJncmF5LTYwXCJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblZhcmlhbnQ9XCJwbGF0Zm9ybTFcIlxuICAgICAgICAgICAgICAgIGlubGluZVxuICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9wcy50aXRsZX1cbiAgICAgICAgICAgICAgICB0aXRsZUNvbG9yPVwicHJpbWFyeS1saWdodFwiXG4gICAgICAgICAgICAgICAgdGl0bGVWYXJpYW50PVwic3VidGl0bGUxXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VkhUaXRsZURlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidmgtbWFpbi10aXRsZS1kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgZGF0YT17cHJvcHMuZGF0YX1cbiAgICAgICAgICAgICAgICB0aXRsZT17cHJvcHMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgdGl0bGVDb2xvcj1cImdyYXktOTBcIlxuICAgICAgICAgICAgICAgIHRpdGxlVmFyaWFudD1cImNhdGlvblwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L1Jvdz5cbiAgICApXG59XG5cblZITWFpblRpdGxlRGVzY3JpcHRpb24ucHJvcFR5cGVzID0ge1xuICAgIG9uRXZlbnQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcmlnaHRUaXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkYXRhOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZITWFpblRpdGxlRGVzY3JpcHRpb247XG4iXX0=