"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHProgressBar = function VHProgressBar(props) {
  var steps = new Array(props.steps).fill('');
  return _react.default.createElement(_Grid.Container, {
    fullWidth: true
  }, _react.default.createElement(_Grid.Row, {
    row: true
  }, steps.map(function (step, index) {
    var borderRadius = '0 0 0 0';
    var color = _Colors.default['gray-10'];

    if (index === 0) {
      borderRadius = '6px 0 0 0';
    }

    if (index === steps.length - 1) {
      borderRadius = '0 6px 0 0';
    }

    if (index < props.currentStep - 1) {
      color = _Colors.default['blue'];
    }

    if (index === props.currentStep - 1) {
      color = _Colors.default['gray-30'];
    }

    return _react.default.createElement("span", {
      style: {
        backgroundColor: color,
        height: '10px',
        width: '100%',
        borderRadius: borderRadius
      }
    });
  })));
};

VHProgressBar.defaultProps = {
  className: ""
};
VHProgressBar.propTypes = {
  steps: _propTypes.default.number.isRequired,
  currentStep: _propTypes.default.number.isRequired,
  className: _propTypes.default.string,
  onEvent: _propTypes.default.func.isRequired
};
var _default = VHProgressBar;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIvaW5kZXguanN4Il0sIm5hbWVzIjpbIlZIUHJvZ3Jlc3NCYXIiLCJwcm9wcyIsInN0ZXBzIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwic3RlcCIsImluZGV4IiwiYm9yZGVyUmFkaXVzIiwiY29sb3IiLCJDb2xvcnMiLCJsZW5ndGgiLCJjdXJyZW50U3RlcCIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsIndpZHRoIiwiZGVmYXVsdFByb3BzIiwiY2xhc3NOYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsIm9uRXZlbnQiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFDLEtBQUssRUFBSTtBQUM3QixNQUFNQyxLQUFLLEdBQUcsSUFBSUMsS0FBSixDQUFVRixLQUFLLENBQUNDLEtBQWhCLEVBQXVCRSxJQUF2QixDQUE0QixFQUE1QixDQUFkO0FBQ0UsU0FDRSw2QkFBQyxlQUFEO0FBQVcsSUFBQSxTQUFTO0FBQXBCLEtBQ0UsNkJBQUMsU0FBRDtBQUFLLElBQUEsR0FBRztBQUFSLEtBRUlGLEtBQUssQ0FBQ0csR0FBTixDQUFVLFVBQUVDLElBQUYsRUFBUUMsS0FBUixFQUFtQjtBQUUzQixRQUFJQyxZQUFZLEdBQUcsU0FBbkI7QUFDQSxRQUFJQyxLQUFLLEdBQUdDLGdCQUFPLFNBQVAsQ0FBWjs7QUFDQSxRQUFJSCxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNmQyxNQUFBQSxZQUFZLEdBQUcsV0FBZjtBQUNEOztBQUVELFFBQUlELEtBQUssS0FBTUwsS0FBSyxDQUFDUyxNQUFOLEdBQWMsQ0FBN0IsRUFBaUM7QUFDL0JILE1BQUFBLFlBQVksR0FBRyxXQUFmO0FBQ0Q7O0FBRUQsUUFBS0QsS0FBSyxHQUFJTixLQUFLLENBQUNXLFdBQU4sR0FBbUIsQ0FBakMsRUFBcUM7QUFDbkNILE1BQUFBLEtBQUssR0FBR0MsZ0JBQU8sTUFBUCxDQUFSO0FBQ0Q7O0FBRUQsUUFBS0gsS0FBSyxLQUFLTixLQUFLLENBQUNXLFdBQU4sR0FBbUIsQ0FBbEMsRUFBc0M7QUFDcENILE1BQUFBLEtBQUssR0FBR0MsZ0JBQU8sU0FBUCxDQUFSO0FBQ0Q7O0FBRUQsV0FDRTtBQUFNLE1BQUEsS0FBSyxFQUFFO0FBQ1hHLFFBQUFBLGVBQWUsRUFBRUosS0FETjtBQUVYSyxRQUFBQSxNQUFNLEVBQUMsTUFGSTtBQUdYQyxRQUFBQSxLQUFLLEVBQUMsTUFISztBQUlYUCxRQUFBQSxZQUFZLEVBQVpBO0FBSlc7QUFBYixNQURGO0FBUUQsR0E1QkQsQ0FGSixDQURGLENBREY7QUFzQ0gsQ0F4Q0Q7O0FBMENBUixhQUFhLENBQUNnQixZQUFkLEdBQTZCO0FBQzNCQyxFQUFBQSxTQUFTLEVBQUU7QUFEZ0IsQ0FBN0I7QUFJQWpCLGFBQWEsQ0FBQ2tCLFNBQWQsR0FBMEI7QUFDeEJoQixFQUFBQSxLQUFLLEVBQUVpQixtQkFBVUMsTUFBVixDQUFpQkMsVUFEQTtBQUV4QlQsRUFBQUEsV0FBVyxFQUFFTyxtQkFBVUMsTUFBVixDQUFpQkMsVUFGTjtBQUd4QkosRUFBQUEsU0FBUyxFQUFFRSxtQkFBVUcsTUFIRztBQUl4QkMsRUFBQUEsT0FBTyxFQUFFSixtQkFBVUssSUFBVixDQUFlSDtBQUpBLENBQTFCO2VBT2VyQixhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdyB9IGZyb20gJy4uLy4uL0dyaWQnXG5pbXBvcnQgQ29sb3JzIGZyb20gJy4uLy4uL0NvbG9ycydcblxuY29uc3QgVkhQcm9ncmVzc0JhciA9IHByb3BzID0+IHtcbiAgY29uc3Qgc3RlcHMgPSBuZXcgQXJyYXkocHJvcHMuc3RlcHMpLmZpbGwoJycpO1xuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyIGZ1bGxXaWR0aCA+XG4gICAgICAgIDxSb3cgcm93ID5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGVwcy5tYXAoKCBzdGVwLCBpbmRleCApID0+IHtcblxuICAgICAgICAgICAgICBsZXQgYm9yZGVyUmFkaXVzID0gJzAgMCAwIDAnXG4gICAgICAgICAgICAgIGxldCBjb2xvciA9IENvbG9yc1snZ3JheS0xMCddXG4gICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cyA9ICc2cHggMCAwIDAnXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IChzdGVwcy5sZW5ndGggLTEpKSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzID0gJzAgNnB4IDAgMCdcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICggaW5kZXggPCAocHJvcHMuY3VycmVudFN0ZXAgLTEpKSB7XG4gICAgICAgICAgICAgICAgY29sb3IgPSBDb2xvcnNbJ2JsdWUnXVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCBpbmRleCA9PT0gcHJvcHMuY3VycmVudFN0ZXAgLTEgKSB7XG4gICAgICAgICAgICAgICAgY29sb3IgPSBDb2xvcnNbJ2dyYXktMzAnXVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcbiAgICAgICAgICAgICAgICAgIGhlaWdodDonMTBweCcsXG4gICAgICAgICAgICAgICAgICB3aWR0aDonMTAwJScgLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzLFxuICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcblxufVxuXG5WSFByb2dyZXNzQmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiBcIlwiLFxufTtcblxuVkhQcm9ncmVzc0Jhci5wcm9wVHlwZXMgPSB7XG4gIHN0ZXBzOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGN1cnJlbnRTdGVwOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25FdmVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVkhQcm9ncmVzc0JhclxuIl19