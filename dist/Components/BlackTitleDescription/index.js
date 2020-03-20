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

var VHBlackTitleDescription = function VHBlackTitleDescription(props) {
  return _react.default.createElement(_Grid.Row, null, _react.default.createElement(_index.default, {
    className: "vh-black-title-description",
    data: props.data,
    description: props.rightTitle,
    descriptionColor: "gray-60",
    descriptionVariant: "platform1",
    inline: true,
    title: props.title,
    titleColor: "gray-100",
    titleVariant: "subtitle2"
  }), _react.default.createElement(_index.default, {
    className: "vh-black-title-description",
    data: props.data,
    title: props.description,
    titleColor: "gray-90",
    titleVariant: "cation"
  }));
};

VHBlackTitleDescription.propTypes = {
  onEvent: _propTypes.default.func,
  title: _propTypes.default.string.isRequired,
  rightTitle: _propTypes.default.string,
  description: _propTypes.default.string,
  data: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  className: _propTypes.default.string
};
var _default = VHBlackTitleDescription;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQmxhY2tUaXRsZURlc2NyaXB0aW9uL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJWSEJsYWNrVGl0bGVEZXNjcmlwdGlvbiIsInByb3BzIiwiZGF0YSIsInJpZ2h0VGl0bGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJvcFR5cGVzIiwib25FdmVudCIsIlByb3BUeXBlcyIsImZ1bmMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwib25lT2ZUeXBlIiwib2JqZWN0IiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFHQSxJQUFNQSx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLENBQUFDLEtBQUssRUFBSTtBQUVyQyxTQUNJLDZCQUFDLFNBQUQsUUFDSSw2QkFBQyxjQUFEO0FBQ0ksSUFBQSxTQUFTLEVBQUMsNEJBRGQ7QUFFSSxJQUFBLElBQUksRUFBRUEsS0FBSyxDQUFDQyxJQUZoQjtBQUdJLElBQUEsV0FBVyxFQUFFRCxLQUFLLENBQUNFLFVBSHZCO0FBSUksSUFBQSxnQkFBZ0IsRUFBQyxTQUpyQjtBQUtJLElBQUEsa0JBQWtCLEVBQUMsV0FMdkI7QUFNSSxJQUFBLE1BQU0sTUFOVjtBQU9JLElBQUEsS0FBSyxFQUFFRixLQUFLLENBQUNHLEtBUGpCO0FBUUksSUFBQSxVQUFVLEVBQUMsVUFSZjtBQVNJLElBQUEsWUFBWSxFQUFDO0FBVGpCLElBREosRUFZSSw2QkFBQyxjQUFEO0FBQ0ksSUFBQSxTQUFTLEVBQUMsNEJBRGQ7QUFFSSxJQUFBLElBQUksRUFBRUgsS0FBSyxDQUFDQyxJQUZoQjtBQUdJLElBQUEsS0FBSyxFQUFFRCxLQUFLLENBQUNJLFdBSGpCO0FBSUksSUFBQSxVQUFVLEVBQUMsU0FKZjtBQUtJLElBQUEsWUFBWSxFQUFDO0FBTGpCLElBWkosQ0FESjtBQXNCSCxDQXhCRDs7QUEwQkFMLHVCQUF1QixDQUFDTSxTQUF4QixHQUFvQztBQUNoQ0MsRUFBQUEsT0FBTyxFQUFFQyxtQkFBVUMsSUFEYTtBQUVoQ0wsRUFBQUEsS0FBSyxFQUFFSSxtQkFBVUUsTUFBVixDQUFpQkMsVUFGUTtBQUdoQ1IsRUFBQUEsVUFBVSxFQUFFSyxtQkFBVUUsTUFIVTtBQUloQ0wsRUFBQUEsV0FBVyxFQUFFRyxtQkFBVUUsTUFKUztBQUtoQ1IsRUFBQUEsSUFBSSxFQUFFTSxtQkFBVUksU0FBVixDQUFvQixDQUFDSixtQkFBVUUsTUFBWCxFQUFtQkYsbUJBQVVLLE1BQTdCLENBQXBCLENBTDBCO0FBTWhDQyxFQUFBQSxTQUFTLEVBQUVOLG1CQUFVRTtBQU5XLENBQXBDO2VBU2VWLHVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBSb3cgfSBmcm9tIFwiLi4vLi4vR3JpZFwiO1xuaW1wb3J0IFZIVGl0bGVEZXNjcmlwdGlvbiBmcm9tIFwiLi4vVGl0bGVEZXNjcmlwdGlvbi9pbmRleFwiO1xuXG5cbmNvbnN0IFZIQmxhY2tUaXRsZURlc2NyaXB0aW9uID0gcHJvcHMgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJvdz5cbiAgICAgICAgICAgIDxWSFRpdGxlRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ2aC1ibGFjay10aXRsZS1kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgZGF0YT17cHJvcHMuZGF0YX1cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvcHMucmlnaHRUaXRsZX1cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkNvbG9yPVwiZ3JheS02MFwiXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25WYXJpYW50PVwicGxhdGZvcm0xXCJcbiAgICAgICAgICAgICAgICBpbmxpbmVcbiAgICAgICAgICAgICAgICB0aXRsZT17cHJvcHMudGl0bGV9XG4gICAgICAgICAgICAgICAgdGl0bGVDb2xvcj1cImdyYXktMTAwXCJcbiAgICAgICAgICAgICAgICB0aXRsZVZhcmlhbnQ9XCJzdWJ0aXRsZTJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxWSFRpdGxlRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ2aC1ibGFjay10aXRsZS1kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgZGF0YT17cHJvcHMuZGF0YX1cbiAgICAgICAgICAgICAgICB0aXRsZT17cHJvcHMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgdGl0bGVDb2xvcj1cImdyYXktOTBcIlxuICAgICAgICAgICAgICAgIHRpdGxlVmFyaWFudD1cImNhdGlvblwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L1Jvdz5cbiAgICApXG59XG5cblZIQmxhY2tUaXRsZURlc2NyaXB0aW9uLnByb3BUeXBlcyA9IHtcbiAgICBvbkV2ZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHJpZ2h0VGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGF0YTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBWSEJsYWNrVGl0bGVEZXNjcmlwdGlvbjtcbiJdfQ==