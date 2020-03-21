"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Base = _interopRequireDefault(require("../Base"));

var _Grid = require("../../../Grid");

var S = _interopRequireWildcard(require("./styles"));

var _Headers = _interopRequireDefault(require("../../../Typography/Headers"));

var _Img = _interopRequireDefault(require("../../Img"));

var _index = _interopRequireDefault(require("../../../../assets/icons/icon_business.svg/index.jsx"));

var _index2 = _interopRequireDefault(require("../../../../assets/icons/icon_skills.svg/index.jsx"));

var _index3 = _interopRequireDefault(require("../../../../assets/icons/icon_passport.svg/index.jsx"));

var _index4 = _interopRequireDefault(require("../../../../assets/icons/icon_chat-outline.svg/index.jsx"));

var _index5 = _interopRequireDefault(require("../../../../assets/icons/icon_time_red.svg/index.jsx"));

var _index6 = _interopRequireDefault(require("../../../../assets/icons/icon_time_green.svg/index.jsx"));

var _index7 = _interopRequireDefault(require("../../../../assets/icons/icon_star_fill.svg/index.jsx"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHCardVisaProcess = function VHCardVisaProcess(props) {
  return _react.default.createElement(_Base.default, {
    candidate: props.candidate,
    onDragEnter: props.onDragEnter,
    id: props.id,
    onDragLeave: props.onDragLeave,
    onDragStart: props.onDragStart,
    favorite: props.favorite,
    draggable: props.draggable,
    onEvent: props.onEvent,
    userId: props.userId
  }, props.invoiced && _react.default.createElement(S.Tag, null, "Invoiced"), _react.default.createElement(_Grid.Row, {
    row: true
  }, _react.default.createElement(S.PersonalInfo, null, _react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true
  }, _react.default.createElement(S.AvatarWrapper, null, _react.default.createElement(S.Avatar, {
    src: props.avatar
  })), _react.default.createElement(S.Name, null, props.name)), _react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true
  }, _react.default.createElement(S.IconWrapper, null, _react.default.createElement(_Img.default, {
    source: _index.default,
    title: "city",
    xs: true
  })), _react.default.createElement(S.Info, null, props.companyName)), _react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true
  }, _react.default.createElement(S.IconWrapper, null, _react.default.createElement(_Img.default, {
    source: _index2.default,
    title: "position",
    xs: true
  })), _react.default.createElement(S.Info, null, props.positionName)), _react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true
  }, _react.default.createElement(S.IconWrapper, null, _react.default.createElement(_Img.default, {
    source: _index3.default,
    title: "time",
    xs: true
  })), _react.default.createElement(S.Info, null, props.cityName)))), _react.default.createElement(_Grid.Row, null, _react.default.createElement(S.Footer, null, _react.default.createElement(_Grid.Row, {
    row: true
  }, _react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true
  }, _react.default.createElement(S.TimeWrapper, null, _react.default.createElement(_Img.default, {
    source: props.time <= props.avgTime ? "".concat(_index6.default) : "".concat(_index5.default),
    title: "time",
    xs: true
  })), _react.default.createElement(S.InfoTime, {
    avgTime: props.time <= props.avgTime
  }, "".concat(props.time, " days ago")))), _react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true
  }, _react.default.createElement(S.FavoriteWrapper, null, props.favorite && _react.default.createElement(_Img.default, {
    source: _index7.default,
    title: "comments",
    xs: true
  })), _react.default.createElement(S.Info, null, props.comments), _react.default.createElement(S.CommentsWrapper, null, _react.default.createElement(_Img.default, {
    source: _index4.default,
    title: "comments",
    xs: true
  }))))));
};

VHCardVisaProcess.defaultProps = {
  className: ""
};
VHCardVisaProcess.propTypes = {};
var _default = VHCardVisaProcess;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQ2FyZHMvVmlzYVByb2Nlc3MvaW5kZXguanN4Il0sIm5hbWVzIjpbIlZIQ2FyZFZpc2FQcm9jZXNzIiwicHJvcHMiLCJjYW5kaWRhdGUiLCJvbkRyYWdFbnRlciIsImlkIiwib25EcmFnTGVhdmUiLCJvbkRyYWdTdGFydCIsImZhdm9yaXRlIiwiZHJhZ2dhYmxlIiwib25FdmVudCIsInVzZXJJZCIsImludm9pY2VkIiwiYXZhdGFyIiwibmFtZSIsIkNvbXBhbnlJY29uIiwiY29tcGFueU5hbWUiLCJQb3NpdGlvbkljb24iLCJwb3NpdGlvbk5hbWUiLCJDaXR5SWNvbiIsImNpdHlOYW1lIiwidGltZSIsImF2Z1RpbWUiLCJUaW1lSWNvbkdyZWVuIiwiVGltZUljb25SZWQiLCJGYXZvcml0ZUljb24iLCJjb21tZW50cyIsIkNvbW1lbnRzSWNvbiIsImRlZmF1bHRQcm9wcyIsImNsYXNzTmFtZSIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFBQyxLQUFLLEVBQUk7QUFDakMsU0FDRSw2QkFBQyxhQUFEO0FBQ0UsSUFBQSxTQUFTLEVBQUVBLEtBQUssQ0FBQ0MsU0FEbkI7QUFFRSxJQUFBLFdBQVcsRUFBRUQsS0FBSyxDQUFDRSxXQUZyQjtBQUdFLElBQUEsRUFBRSxFQUFFRixLQUFLLENBQUNHLEVBSFo7QUFJRSxJQUFBLFdBQVcsRUFBRUgsS0FBSyxDQUFDSSxXQUpyQjtBQUtFLElBQUEsV0FBVyxFQUFFSixLQUFLLENBQUNLLFdBTHJCO0FBTUUsSUFBQSxRQUFRLEVBQUVMLEtBQUssQ0FBQ00sUUFObEI7QUFPRSxJQUFBLFNBQVMsRUFBRU4sS0FBSyxD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SyxFQUFDLFVBQW5DO0FBQThDLElBQUEsRUFBRTtBQUFoRCxJQURyQixDQURGLEVBSUUsNkJBQUMsQ0FBRCxDQUFHLElBQUgsUUFBU3ZCLEtBQUssQ0FBQ3dCLFFBQWYsQ0FKRixFQUtFLDZCQUFDLENBQUQsQ0FBRyxlQUFILFFBQ0UsNkJBQUMsWUFBRDtBQUFPLElBQUEsTUFBTSxFQUFFQyxlQUFmO0FBQTZCLElBQUEsS0FBSyxFQUFDLFVBQW5DO0FBQThDLElBQUEsRUFBRTtBQUFoRCxJQURGLENBTEYsQ0FURixDQURGLENBbERGLENBREY7QUEwRUQsQ0EzRUQ7O0FBNkVBMUIsaUJBQWlCLENBQUMyQixZQUFsQixHQUFpQztBQUMvQkMsRUFBQUEsU0FBUyxFQUFFO0FBRG9CLENBQWpDO0FBSUE1QixpQkFBaUIsQ0FBQzZCLFNBQWxCLEdBQThCLEVBQTlCO2VBRWU3QixpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBWSENhcmRCYXNlIGZyb20gXCIuLi9CYXNlXCI7XG5pbXBvcnQgeyBSb3cgfSBmcm9tIFwiLi4vLi4vLi4vR3JpZFwiO1xuaW1wb3J0ICogYXMgUyBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCBWSEhlYWRlciBmcm9tIFwiLi4vLi4vLi4vVHlwb2dyYXBoeS9IZWFkZXJzXCI7XG5pbXBvcnQgVkhJbWcgZnJvbSBcIi4uLy4uL0ltZ1wiO1xuXG5pbXBvcnQgQ29tcGFueUljb24gZnJvbSAnLi4vLi4vLi4vLi4vYXNzZXRzL2ljb25zL2ljb25fYnVzaW5lc3Muc3ZnL2luZGV4LmpzeCdcbmltcG9ydCBQb3NpdGlvbkljb24gZnJvbSAnLi4vLi4vLi4vLi4vYXNzZXRzL2ljb25zL2ljb25fc2tpbGxzLnN2Zy9pbmRleC5qc3gnXG5pbXBvcnQgQ2l0eUljb24gZnJvbSAnLi4vLi4vLi4vLi4vYXNzZXRzL2ljb25zL2ljb25fcGFzc3BvcnQuc3ZnL2luZGV4LmpzeCdcbmltcG9ydCBDb21tZW50c0ljb24gZnJvbSAnLi4vLi4vLi4vLi4vYXNzZXRzL2ljb25zL2ljb25fY2hhdC1vdXRsaW5lLnN2Zy9pbmRleC5qc3gnXG5pbXBvcnQgVGltZUljb25SZWQgZnJvbSAnLi4vLi4vLi4vLi4vYXNzZXRzL2ljb25zL2ljb25fdGltZV9yZWQuc3ZnL2luZGV4LmpzeCdcbmltcG9ydCBUaW1lSWNvbkdyZWVuIGZyb20gJy4uLy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9pY29uX3RpbWVfZ3JlZW4uc3ZnL2luZGV4LmpzeCdcbmltcG9ydCBGYXZvcml0ZUljb24gZnJvbSAnLi4vLi4vLi4vLi4vYXNzZXRzL2ljb25zL2ljb25fc3Rhcl9maWxsLnN2Zy9pbmRleC5qc3gnXG5cbmNvbnN0IFZIQ2FyZFZpc2FQcm9jZXNzID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxWSENhcmRCYXNlXG4gICAgICBjYW5kaWRhdGU9e3Byb3BzLmNhbmRpZGF0ZX1cbiAgICAgIG9uRHJhZ0VudGVyPXtwcm9wcy5vbkRyYWdFbnRlcn1cbiAgICAgIGlkPXtwcm9wcy5pZH1cbiAgICAgIG9uRHJhZ0xlYXZlPXtwcm9wcy5vbkRyYWdMZWF2ZX1cbiAgICAgIG9uRHJhZ1N0YXJ0PXtwcm9wcy5vbkRyYWdTdGFydH1cbiAgICAgIGZhdm9yaXRlPXtwcm9wcy5mYXZvcml0ZX1cbiAgICAgIGRyYWdnYWJsZT17cHJvcHMuZHJhZ2dhYmxlfVxuICAgICAgb25FdmVudD17cHJvcHMub25FdmVudH1cbiAgICAgIHVzZXJJZD17cHJvcHMudXNlcklkfT5cbiAgICAgIHtwcm9wcy5pbnZvaWNlZCAmJiA8Uy5UYWc+SW52b2ljZWQ8L1MuVGFnPn1cbiAgICAgIDxSb3cgcm93PlxuICAgICAgICA8Uy5QZXJzb25hbEluZm8+XG4gICAgICAgICAgPFJvdyByb3cgYWxpZ25JdGVtc0NlbnRlcj5cbiAgICAgICAgICAgIDxTLkF2YXRhcldyYXBwZXI+XG4gICAgICAgICAgICAgIDxTLkF2YXRhciBzcmM9e3Byb3BzLmF2YXRhcn0+PC9TLkF2YXRhcj5cbiAgICAgICAgICAgIDwvUy5BdmF0YXJXcmFwcGVyPlxuICAgICAgICAgICAgPFMuTmFtZT57cHJvcHMubmFtZX08L1MuTmFtZT5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8Um93IHJvdyBhbGlnbkl0ZW1zQ2VudGVyPlxuICAgICAgICAgICAgPFMuSWNvbldyYXBwZXI+XG4gICAgICAgICAgICAgIDxWSEltZyBzb3VyY2U9e0NvbXBhbnlJY29ufSB0aXRsZT1cImNpdHlcIiB4cyAvPlxuICAgICAgICAgICAgPC9TLkljb25XcmFwcGVyPlxuICAgICAgICAgICAgPFMuSW5mbz57cHJvcHMuY29tcGFueU5hbWV9PC9TLkluZm8+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPFJvdyByb3cgYWxpZ25JdGVtc0NlbnRlcj5cbiAgICAgICAgICAgIDxTLkljb25XcmFwcGVyPlxuICAgICAgICAgICAgICA8VkhJbWcgc291cmNlPXtQb3NpdGlvbkljb259IHRpdGxlPVwicG9zaXRpb25cIiB4cyAvPlxuICAgICAgICAgICAgPC9TLkljb25XcmFwcGVyPlxuICAgICAgICAgICAgPFMuSW5mbz57cHJvcHMucG9zaXRpb25OYW1lfTwvUy5JbmZvPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDxSb3cgcm93IGFsaWduSXRlbXNDZW50ZXI+XG4gICAgICAgICAgICA8Uy5JY29uV3JhcHBlcj5cbiAgICAgICAgICAgICAgPFZISW1nIHNvdXJjZT17Q2l0eUljb259IHRpdGxlPVwidGltZVwiIHhzIC8+XG4gICAgICAgICAgICA8L1MuSWNvbldyYXBwZXI+XG4gICAgICAgICAgICA8Uy5JbmZvPntwcm9wcy5jaXR5TmFtZX08L1MuSW5mbz5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9TLlBlcnNvbmFsSW5mbz5cbiAgICAgICAgey8qIDxTLk1lbnVDaXJjbGUgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIHByb3BzLm9uRXZlbnQoe1xuICAgICAgICAgICAgdHlwZTogXCJPbkNsaWNrXCIsXG4gICAgICAgICAgICBvcmlnaW46IFwiVkhWaXNhUHJvY2Vzc1wiLFxuICAgICAgICAgICAgdGFyZ2V0OiBcIlZpc2EgUHJvY2VzcyBNZW51XCJcbiAgICAgICAgICB9KVxuICAgICAgICB9fT5cbiAgICAgICAgICA8ZGl2IC8+XG4gICAgICAgICAgPGRpdiAvPlxuICAgICAgICAgIDxkaXYgLz5cbiAgICAgICAgPC9TLk1lbnVDaXJjbGU+ICovfVxuICAgICAgPC9Sb3c+XG4gICAgICA8Um93PlxuICAgICAgICA8Uy5Gb290ZXI+XG4gICAgICAgICAgPFJvdyByb3c+XG4gICAgICAgICAgICA8Um93IHJvdyBhbGlnbkl0ZW1zQ2VudGVyPlxuICAgICAgICAgICAgICA8Uy5UaW1lV3JhcHBlcj5cbiAgICAgICAgICAgICAgICA8VkhJbWcgc291cmNlPXtwcm9wcy50aW1lIDw9IHByb3BzLmF2Z1RpbWUgPyBgJHtUaW1lSWNvbkdyZWVufWAgOiBgJHtUaW1lSWNvblJlZH1gfSB0aXRsZT1cInRpbWVcIiB4cyAvPlxuICAgICAgICAgICAgICA8L1MuVGltZVdyYXBwZXI+XG4gICAgICAgICAgICAgIDxTLkluZm9UaW1lIGF2Z1RpbWU9e3Byb3BzLnRpbWUgPD0gcHJvcHMuYXZnVGltZX0+e2Ake3Byb3BzLnRpbWV9IGRheXMgYWdvYH08L1MuSW5mb1RpbWU+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8Um93IHJvdyBhbGlnbkl0ZW1zQ2VudGVyPlxuICAgICAgICAgICAgPFMuRmF2b3JpdGVXcmFwcGVyPlxuICAgICAgICAgICAgICB7cHJvcHMuZmF2b3JpdGUgJiYgPFZISW1nIHNvdXJjZT17RmF2b3JpdGVJY29ufSB0aXRsZT1cImNvbW1lbnRzXCIgeHMgLz59XG4gICAgICAgICAgICA8L1MuRmF2b3JpdGVXcmFwcGVyPlxuICAgICAgICAgICAgPFMuSW5mbz57cHJvcHMuY29tbWVudHN9PC9TLkluZm8+XG4gICAgICAgICAgICA8Uy5Db21tZW50c1dyYXBwZXI+XG4gICAgICAgICAgICAgIDxWSEltZyBzb3VyY2U9e0NvbW1lbnRzSWNvbn0gdGl0bGU9XCJjb21tZW50c1wiIHhzIC8+XG4gICAgICAgICAgICA8L1MuQ29tbWVudHNXcmFwcGVyPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L1MuRm9vdGVyPlxuICAgICAgPC9Sb3c+XG4gICAgPC9WSENhcmRCYXNlPlxuICApO1xufTtcblxuVkhDYXJkVmlzYVByb2Nlc3MuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IFwiXCJcbn07XG5cblZIQ2FyZFZpc2FQcm9jZXNzLnByb3BUeXBlcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBWSENhcmRWaXNhUHJvY2VzcztcbiJdfQ==