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
    title: props.position,
    description: "".concat(new Date(props.startDate).getFullYear(), " - ").concat(props.endDate ? new Date(props.endDate).getFullYear() : 'Present'),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVXNlclBvc2l0b25FeHBlcmllbmNlL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJWSFVzZXJQb3NpdG9uRXhwZXJpZW5jZSIsInByb3BzIiwiaGlkZVRpbWVsaW5lIiwiaGVhZGxpbmUiLCJwZXJpb2QiLCJvbkV2ZW50IiwicmlnaHRUaXRsZSIsImNsYXNzTmFtZSIsImRlc2NyaXB0aW9uIiwic2tpbGxzIiwibWFwIiwic2tpbGwiLCJsYWJlbCIsImRlZmF1bHRQcm9wcyIsInRyYW5zcGFyZW50Iiwicm91bmQiLCJtYXJnaW5SaWdodCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYm9vbCIsImFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLENBQUFDLEtBQUssRUFBSTtBQUNyQyxTQUNJLDZCQUFDLFNBQUQsUUFDSSw2QkFBQyxDQUFELENBQUcsT0FBSDtBQUFXLElBQUEsWUFBWSxFQUFFQSxLQUFLLENBQUNDO0FBQS9CLEtBQ0ksNkJBQUMsU0FBRDtBQUFLLElBQUEsWUFBWSxFQUFFO0FBQW5CLEtBQ0ksNkJBQUMsZUFBRDtBQUNJLElBQUEsS0FBSyxFQUFFRCxLQUFLLENBQUNFLFFBRGpCO0FBRUksSUFBQSxXQUFXLEVBQUVGLEtBQUssQ0FBQ0csTUFGdkI7QUFHSSxJQUFBLE9BQU8sRUFBRUgsS0FBSyxDQUFDSSxPQUhuQjtBQUlJLElBQUEsVUFBVSxFQUFFSixLQUFLLENBQUNLLFVBSnRCO0FBS0ksSUFBQSxTQUFTLHdDQUFpQ0wsS0FBSyxDQUFDTSxTQUFOLEdBQWtCTixLQUFLLENBQUNNLFNBQXhCLEdBQW9DLEVBQXJFO0FBTGIsSUFESixDQURKLEVBVUksNkJBQUMsU0FBRDtBQUFLLElBQUEsWUFBWSxFQUFFO0FBQW5CLEtBQ0ksNkJBQUMsZUFBRDtBQUNJLElBQUEsT0FBTyxFQUFFTixLQUFLLENBQUNJLE9BRG5CO0FBRUksSUFBQSxLQUFLLEVBQUVKLEtBQUssQ0FBQ08sV0FGakI7QUFHSSxJQUFBLEtBQUssRUFBQyxTQUhWO0FBSUksSUFBQSxTQUFTLG1EQUE0Q1AsS0FBSyxDQUFDTSxTQUFOLEdBQWtCTixLQUFLLENBQUNNLFNBQXhCLEdBQW9DLEVBQWhGO0FBSmIsSUFESixDQVZKLEVBbUJJLDZCQUFDLFNBQUQ7QUFBSyxJQUFBLEdBQUc7QUFBUixLQUNLTixLQUFLLENBQUNRLE1BQU4sQ0FBYUMsR0FBYixDQUFpQixVQUFBQyxLQUFLO0FBQUEsV0FDbkIsNkJBQUMsY0FBRDtBQUNJLE1BQUEsS0FBSyxFQUFFQSxLQUFLLENBQUNDLEtBRGpCO0FBRUksTUFBQSxXQUFXLE1BRmY7QUFHSSxNQUFBLEtBQUssTUFIVDtBQUlJLE1BQUEsT0FBTyxNQUpYO0FBS0ksTUFBQSxXQUFXLE1BTGY7QUFNSSxNQUFBLE9BQU8sRUFBRVgsS0FBSyxDQUFDSSxPQU5uQjtBQU9JLE1BQUEsU0FBUyw2Q0FBc0NKLEtBQUssQ0FBQ00sU0FBTixHQUFrQk4sS0FBSyxDQUFDTSxTQUF4QixHQUFvQyxFQUExRTtBQVBiLE1BRG1CO0FBQUEsR0FBdEIsQ0FETCxDQW5CSixDQURKLENBREo7QUF1Q0gsQ0F4Q0Q7O0FBMENBUCx1QkFBdUIsQ0FBQ2EsWUFBeEIsR0FBdUM7QUFDbkNSLEVBQUFBLE9BQU8sRUFBRSxJQUQwQjtBQUVuQ0gsRUFBQUEsWUFBWSxFQUFFLEtBRnFCO0FBR25DSyxFQUFBQSxTQUFTLEVBQUUsRUFId0I7QUFJbkNPLEVBQUFBLFdBQVcsRUFBRSxJQUpzQjtBQUtuQ0MsRUFBQUEsS0FBSyxFQUFFLElBTDRCO0FBTW5DQyxFQUFBQSxXQUFXLEVBQUU7QUFOc0IsQ0FBdkM7QUFTQWhCLHVCQUF1QixDQUFDaUIsU0FBeEIsR0FBb0M7QUFDaENaLEVBQUFBLE9BQU8sRUFBRWEsbUJBQVVDLElBRGE7QUFFaENoQixFQUFBQSxRQUFRLEVBQUVlLG1CQUFVRSxNQUFWLENBQWlCQyxVQUZLO0FBR2hDakIsRUFBQUEsTUFBTSxFQUFFYyxtQkFBVUUsTUFBVixDQUFpQkMsVUFITztBQUloQ25CLEVBQUFBLFlBQVksRUFBRWdCLG1CQUFVSSxJQUpRO0FBS2hDaEIsRUFBQUEsVUFBVSxFQUFFWSxtQkFBVUUsTUFMVTtBQU1oQ1osRUFBQUEsV0FBVyxFQUFFVSxtQkFBVUssS0FBVixDQUFnQkYsVUFORztBQU9oQ1osRUFBQUEsTUFBTSxFQUFFUyxtQkFBVUssS0FQYztBQVFoQ2hCLEVBQUFBLFNBQVMsRUFBRVcsbUJBQVVFO0FBUlcsQ0FBcEM7ZUFXZXBCLHVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBSb3cgfSBmcm9tICcuLi8uLi9HcmlkJztcbmltcG9ydCBWSENoaXAgZnJvbSBcIi4uL0NoaXBzL2luZGV4XCI7XG5pbXBvcnQgVkhCbGFja1RpdGxlRGVzY3JpcHRpb24gZnJvbSBcIi4uL0JsYWNrVGl0bGVEZXNjcmlwdGlvbi9pbmRleFwiO1xuaW1wb3J0IFZISWNvblRpdGxlTGlzdCBmcm9tIFwiLi4vSWNvblRpdGxlTGlzdC9pbmRleFwiO1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL3N0eWxlcyc7XG5cbmNvbnN0IFZIVXNlclBvc2l0b25FeHBlcmllbmNlID0gcHJvcHMgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgICA8Uy5XcmFwcGVyIGhpZGVUaW1lbGluZT17cHJvcHMuaGlkZVRpbWVsaW5lfT5cbiAgICAgICAgICAgICAgICA8Um93IG1hcmdpbkJvdHRvbT17M30+XG4gICAgICAgICAgICAgICAgICAgIDxWSEJsYWNrVGl0bGVEZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3Byb3BzLmhlYWRsaW5lfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Byb3BzLnBlcmlvZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRXZlbnQ9e3Byb3BzLm9uRXZlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodFRpdGxlPXtwcm9wcy5yaWdodFRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdmgtdXNlci1wb3NpdGlvbi1leHBlcmllbmNlICR7cHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICA8Um93IG1hcmdpbkJvdHRvbT17M30+XG4gICAgICAgICAgICAgICAgICAgIDxWSEljb25UaXRsZUxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRXZlbnQ9e3Byb3BzLm9uRXZlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17cHJvcHMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImdyYXktMzBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdmgtdXNlci1wb3NpdGlvbi1leHBlcmllbmNlLXRpdGxlLWxpc3QgJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJ31gfVxuXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPFJvdyByb3c+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5za2lsbHMubWFwKHNraWxsID0+KFxuICAgICAgICAgICAgICAgICAgICAgICAgPFZIQ2hpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtza2lsbC5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9Ib3ZlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FdmVudD17cHJvcHMub25FdmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B2aC11c2VyLXBvc2l0aW9uLWV4cGVyaWVuY2UtY2hpcCAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9TLldyYXBwZXI+XG4gICAgICAgIDwvUm93PlxuXG4gICAgKVxufVxuXG5WSFVzZXJQb3NpdG9uRXhwZXJpZW5jZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgb25FdmVudDogbnVsbCxcbiAgICBoaWRlVGltZWxpbmU6IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogXCJcIixcbiAgICB0cmFuc3BhcmVudDogdHJ1ZSxcbiAgICByb3VuZDogdHJ1ZSxcbiAgICBtYXJnaW5SaWdodDogdHJ1ZVxufTtcblxuVkhVc2VyUG9zaXRvbkV4cGVyaWVuY2UucHJvcFR5cGVzID0ge1xuICAgIG9uRXZlbnQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIGhlYWRsaW5lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcGVyaW9kOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaGlkZVRpbWVsaW5lOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByaWdodFRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICBza2lsbHM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZIVXNlclBvc2l0b25FeHBlcmllbmNlO1xuIl19