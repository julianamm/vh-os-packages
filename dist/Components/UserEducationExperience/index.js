"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _index = _interopRequireDefault(require("../Chips/index"));

var _index2 = _interopRequireDefault(require("../BlackTitleDescription/index"));

var _index3 = _interopRequireDefault(require("../IconTitleList/index"));

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHUserPositonExperience = function VHUserPositonExperience(props) {
  return _react.default.createElement(_Grid.Row, null, _react.default.createElement(S.Wrapper, {
    hideTimeline: props.hideTimeline
  }, _react.default.createElement(_Grid.Row, {
    marginBottom: 3
  }, _react.default.createElement(_index2.default, {
    title: props.headline,
    description: props.period,
    onEvent: props.onEvent,
    rightTitle: props.rightTitle,
    className: "vh-user-position-experience ".concat(props.className ? props.className : '')
  })), _react.default.createElement(_Grid.Row, {
    marginBottom: 3
  }, _react.default.createElement(_index3.default, {
    onEvent: props.onEvent,
    items: props.description,
    color: "gray-30",
    className: "vh-user-position-experience-title-list ".concat(props.className ? props.className : '')
  })), _react.default.createElement(_Grid.Row, {
    row: true
  }, props.skills.map(function (skill) {
    return _react.default.createElement(_index.default, {
      label: skill.label,
      transparent: true,
      round: true,
      noHover: true,
      marginRight: true,
      onEvent: props.onEvent,
      className: "vh-user-position-experience-chip ".concat(props.className ? props.className : '')
    });
  }))));
};

VHUserPositonExperience.defaultProps = {
  onEvent: null,
  hideTimeline: false,
  className: "",
  transparent: true,
  round: true,
  marginRight: true
};
VHUserPositonExperience.propTypes = {
  onEvent: _propTypes.default.func,
  headline: _propTypes.default.string.isRequired,
  period: _propTypes.default.string.isRequired,
  hideTimeline: _propTypes.default.bool,
  rightTitle: _propTypes.default.string,
  description: _propTypes.default.array.isRequired,
  skills: _propTypes.default.array,
  className: _propTypes.default.string
};
var _default = VHUserPositonExperience;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVXNlckVkdWNhdGlvbkV4cGVyaWVuY2UvaW5kZXguanN4Il0sIm5hbWVzIjpbIlZIVXNlclBvc2l0b25FeHBlcmllbmNlIiwicHJvcHMiLCJoaWRlVGltZWxpbmUiLCJoZWFkbGluZSIsInBlcmlvZCIsIm9uRXZlbnQiLCJyaWdodFRpdGxlIiwiY2xhc3NOYW1lIiwiZGVzY3JpcHRpb24iLCJza2lsbHMiLCJtYXAiLCJza2lsbCIsImxhYmVsIiwiZGVmYXVsdFByb3BzIiwidHJhbnNwYXJlbnQiLCJyb3VuZCIsIm1hcmdpblJpZ2h0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJib29sIiwiYXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsQ0FBQUMsS0FBSyxFQUFJO0FBQ3JDLFNBQ0ksNkJBQUMsU0FBRCxRQUNJLDZCQUFDLENBQUQsQ0FBRyxPQUFIO0FBQVcsSUFBQSxZQUFZLEVBQUVBLEtBQUssQ0FBQ0M7QUFBL0IsS0FDSSw2QkFBQyxTQUFEO0FBQUssSUFBQSxZQUFZLEVBQUU7QUFBbkIsS0FDSSw2QkFBQyxlQUFEO0FBQ0ksSUFBQSxLQUFLLEVBQUVELEtBQUssQ0FBQ0UsUUFEakI7QUFFSSxJQUFBLFdBQVcsRUFBRUYsS0FBSyxDQUFDRyxNQUZ2QjtBQUdJLElBQUEsT0FBTyxFQUFFSCxLQUFLLENBQUNJLE9BSG5CO0FBSUksSUFBQSxVQUFVLEVBQUVKLEtBQUssQ0FBQ0ssVUFKdEI7QUFLSSxJQUFBLFNBQVMsd0NBQWlDTCxLQUFLLENBQUNNLFNBQU4sR0FBa0JOLEtBQUssQ0FBQ00sU0FBeEIsR0FBb0MsRUFBckU7QUFMYixJQURKLENBREosRUFVSSw2QkFBQyxTQUFEO0FBQUssSUFBQSxZQUFZLEVBQUU7QUFBbkIsS0FDSSw2QkFBQyxlQUFEO0FBQ0ksSUFBQSxPQUFPLEVBQUVOLEtBQUssQ0FBQ0ksT0FEbkI7QUFFSSxJQUFBLEtBQUssRUFBRUosS0FBSyxDQUFDTyxXQUZqQjtBQUdJLElBQUEsS0FBSyxFQUFDLFNBSFY7QUFJSSxJQUFBLFNBQVMsbURBQTRDUCxLQUFLLENBQUNNLFNBQU4sR0FBa0JOLEtBQUssQ0FBQ00sU0FBeEIsR0FBb0MsRUFBaEY7QUFKYixJQURKLENBVkosRUFtQkksNkJBQUMsU0FBRDtBQUFLLElBQUEsR0FBRztBQUFSLEtBQ0tOLEtBQUssQ0FBQ1EsTUFBTixDQUFhQyxHQUFiLENBQWlCLFVBQUFDLEtBQUs7QUFBQSxXQUNuQiw2QkFBQyxjQUFEO0FBQ0ksTUFBQSxLQUFLLEVBQUVBLEtBQUssQ0FBQ0MsS0FEakI7QUFFSSxNQUFBLFdBQVcsTUFGZjtBQUdJLE1BQUEsS0FBSyxNQUhUO0FBSUksTUFBQSxPQUFPLE1BSlg7QUFLSSxNQUFBLFdBQVcsTUFMZjtBQU1JLE1BQUEsT0FBTyxFQUFFWCxLQUFLLENBQUNJLE9BTm5CO0FBT0ksTUFBQSxTQUFTLDZDQUFzQ0osS0FBSyxDQUFDTSxTQUFOLEdBQWtCTixLQUFLLENBQUNNLFNBQXhCLEdBQW9DLEVBQTFFO0FBUGIsTUFEbUI7QUFBQSxHQUF0QixDQURMLENBbkJKLENBREosQ0FESjtBQXVDSCxDQXhDRDs7QUEwQ0FQLHVCQUF1QixDQUFDYSxZQUF4QixHQUF1QztBQUNuQ1IsRUFBQUEsT0FBTyxFQUFFLElBRDBCO0FBRW5DSCxFQUFBQSxZQUFZLEVBQUUsS0FGcUI7QUFHbkNLLEVBQUFBLFNBQVMsRUFBRSxFQUh3QjtBQUluQ08sRUFBQUEsV0FBVyxFQUFFLElBSnNCO0FBS25DQyxFQUFBQSxLQUFLLEVBQUUsSUFMNEI7QUFNbkNDLEVBQUFBLFdBQVcsRUFBRTtBQU5zQixDQUF2QztBQVNBaEIsdUJBQXVCLENBQUNpQixTQUF4QixHQUFvQztBQUNoQ1osRUFBQUEsT0FBTyxFQUFFYSxtQkFBVUMsSUFEYTtBQUVoQ2hCLEVBQUFBLFFBQVEsRUFBRWUsbUJBQVVFLE1BQVYsQ0FBaUJDLFVBRks7QUFHaENqQixFQUFBQSxNQUFNLEVBQUVjLG1CQUFVRSxNQUFWLENBQWlCQyxVQUhPO0FBSWhDbkIsRUFBQUEsWUFBWSxFQUFFZ0IsbUJBQVVJLElBSlE7QUFLaENoQixFQUFBQSxVQUFVLEVBQUVZLG1CQUFVRSxNQUxVO0FBTWhDWixFQUFBQSxXQUFXLEVBQUVVLG1CQUFVSyxLQUFWLENBQWdCRixVQU5HO0FBT2hDWixFQUFBQSxNQUFNLEVBQUVTLG1CQUFVSyxLQVBjO0FBUWhDaEIsRUFBQUEsU0FBUyxFQUFFVyxtQkFBVUU7QUFSVyxDQUFwQztlQVdlcEIsdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFJvdyB9IGZyb20gJy4uLy4uL0dyaWQnO1xuaW1wb3J0IFZIQ2hpcCBmcm9tIFwiLi4vQ2hpcHMvaW5kZXhcIjtcbmltcG9ydCBWSEJsYWNrVGl0bGVEZXNjcmlwdGlvbiBmcm9tIFwiLi4vQmxhY2tUaXRsZURlc2NyaXB0aW9uL2luZGV4XCI7XG5pbXBvcnQgVkhJY29uVGl0bGVMaXN0IGZyb20gXCIuLi9JY29uVGl0bGVMaXN0L2luZGV4XCI7XG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vc3R5bGVzJztcblxuY29uc3QgVkhVc2VyUG9zaXRvbkV4cGVyaWVuY2UgPSBwcm9wcyA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJvdz5cbiAgICAgICAgICAgIDxTLldyYXBwZXIgaGlkZVRpbWVsaW5lPXtwcm9wcy5oaWRlVGltZWxpbmV9PlxuICAgICAgICAgICAgICAgIDxSb3cgbWFyZ2luQm90dG9tPXszfT5cbiAgICAgICAgICAgICAgICAgICAgPFZIQmxhY2tUaXRsZURlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17cHJvcHMuaGVhZGxpbmV9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvcHMucGVyaW9kfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25FdmVudD17cHJvcHMub25FdmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0VGl0bGU9e3Byb3BzLnJpZ2h0VGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B2aC11c2VyLXBvc2l0aW9uLWV4cGVyaWVuY2UgJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJ31gfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgIDxSb3cgbWFyZ2luQm90dG9tPXszfT5cbiAgICAgICAgICAgICAgICAgICAgPFZISWNvblRpdGxlTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgb25FdmVudD17cHJvcHMub25FdmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtwcm9wcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZ3JheS0zMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B2aC11c2VyLXBvc2l0aW9uLWV4cGVyaWVuY2UtdGl0bGUtbGlzdCAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9XG5cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICA8Um93IHJvdz5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNraWxscy5tYXAoc2tpbGwgPT4oXG4gICAgICAgICAgICAgICAgICAgICAgICA8VkhDaGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3NraWxsLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0hvdmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkV2ZW50PXtwcm9wcy5vbkV2ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHZoLXVzZXItcG9zaXRpb24tZXhwZXJpZW5jZS1jaGlwICR7cHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogJyd9YH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8L1MuV3JhcHBlcj5cbiAgICAgICAgPC9Sb3c+XG5cbiAgICApXG59XG5cblZIVXNlclBvc2l0b25FeHBlcmllbmNlLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBvbkV2ZW50OiBudWxsLFxuICAgIGhpZGVUaW1lbGluZTogZmFsc2UsXG4gICAgY2xhc3NOYW1lOiBcIlwiLFxuICAgIHRyYW5zcGFyZW50OiB0cnVlLFxuICAgIHJvdW5kOiB0cnVlLFxuICAgIG1hcmdpblJpZ2h0OiB0cnVlXG59O1xuXG5WSFVzZXJQb3NpdG9uRXhwZXJpZW5jZS5wcm9wVHlwZXMgPSB7XG4gICAgb25FdmVudDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaGVhZGxpbmU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBwZXJpb2Q6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBoaWRlVGltZWxpbmU6IFByb3BUeXBlcy5ib29sLFxuICAgIHJpZ2h0VGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgIHNraWxsczogUHJvcFR5cGVzLmFycmF5LFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgVkhVc2VyUG9zaXRvbkV4cGVyaWVuY2U7XG4iXX0=