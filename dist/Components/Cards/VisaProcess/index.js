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
  return /*#__PURE__*/_react.default.createElement(_Base.default, {
    candidate: props.candidate,
    onDragEnter: props.onDragEnter,
    id: props.id,
    onDragLeave: props.onDragLeave,
    onDragStart: props.onDragStart,
    favorite: props.favorite,
    draggable: props.draggable,
    onEvent: props.onEvent,
    userId: props.userId
  }, props.invoiced && /*#__PURE__*/_react.default.createElement(S.Tag, null, "Invoiced"), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true
  }, /*#__PURE__*/_react.default.createElement(S.PersonalInfo, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(S.AvatarWrapper, null, /*#__PURE__*/_react.default.createElement(S.Avatar, {
    src: props.avatar
  })), /*#__PURE__*/_react.default.createElement(S.Name, null, props.name)), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(S.IconWrapper, null, /*#__PURE__*/_react.default.createElement(_Img.default, {
    source: _index.default,
    title: "city",
    xs: true
  })), /*#__PURE__*/_react.default.createElement(S.Info, null, props.companyName)), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(S.IconWrapper, null, /*#__PURE__*/_react.default.createElement(_Img.default, {
    source: _index2.default,
    title: "position",
    xs: true
  })), /*#__PURE__*/_react.default.createElement(S.Info, null, props.positionName)), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(S.IconWrapper, null, /*#__PURE__*/_react.default.createElement(_Img.default, {
    source: _index3.default,
    title: "time",
    xs: true
  })), /*#__PURE__*/_react.default.createElement(S.Info, null, props.cityName)))), /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(S.Footer, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(S.TimeWrapper, null, /*#__PURE__*/_react.default.createElement(_Img.default, {
    source: props.time <= props.avgTime ? "".concat(_index6.default) : "".concat(_index5.default),
    title: "time",
    xs: true
  })), /*#__PURE__*/_react.default.createElement(S.InfoTime, {
    avgTime: props.time <= props.avgTime
  }, "".concat(props.time, " days ago")))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(S.FavoriteWrapper, null, props.favorite && /*#__PURE__*/_react.default.createElement(_Img.default, {
    source: _index7.default,
    title: "comments",
    xs: true
  })), /*#__PURE__*/_react.default.createElement(S.Info, null, props.comments), /*#__PURE__*/_react.default.createElement(S.CommentsWrapper, null, /*#__PURE__*/_react.default.createElement(_Img.default, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQ2FyZHMvVmlzYVByb2Nlc3MvaW5kZXguanN4Il0sIm5hbWVzIjpbIlZIQ2FyZFZpc2FQcm9jZXNzIiwicHJvcHMiLCJjYW5kaWRhdGUiLCJvbkRyYWdFbnRlciIsImlkIiwib25EcmFnTGVhdmUiLCJvbkRyYWdTdGFydCIsImZhdm9yaXRlIiwiZHJhZ2dhYmxlIiwib25FdmVudCIsInVzZXJJZCIsImludm9pY2VkIiwiYXZhdGFyIiwibmFtZSIsIkNvbXBhbnlJY29uIiwiY29tcGFueU5hbWUiLCJQb3NpdGlvbkljb24iLCJwb3NpdGlvbk5hbWUiLCJDaXR5SWNvbiIsImNpdHlOYW1lIiwidGltZSIsImF2Z1RpbWUiLCJUaW1lSWNvbkdyZWVuIiwiVGltZUljb25SZWQiLCJGYXZvcml0ZUljb24iLCJjb21tZW50cyIsIkNvbW1lbnRzSWNvbiIsImRlZmF1bHRQcm9wcyIsImNsYXNzTmFtZSIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFBQyxLQUFLLEVBQUk7QUFDakMsc0JBQ0UsNkJBQUMsYUFBRDtBQUNFLElBQUEsU0FBUyxFQUFFQSxLQUFLLENBQUNDLFNBRG5CO0FBRUUsSUFBQSxXQUFXLEVBQUVELEtBQUssQ0FBQ0UsV0FGckI7QUFHRSxJQUFBLEVBQUUsRUFBRUYsS0FBSyxDQUFDRyxFQUhaO0FBSUUsSUFBQSxXQUFXLEVBQUVILEtBQUssQ0FBQ0ksV0FKckI7QUFLRSxJQUFBLFdBQVcsRUFBRUosS0FBSyxDQUFDSyxXQUxyQjtBQU1FLElBQUEsUUFBUSxFQUFFTCxLQUFLLENBQUNNLFFBTmxCO0FBT0UsSUFBQSxTQUFTLEVBQUVOLEtBQUss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ZUFBZjtBQUE2QixJQUFBLEtBQUssRUFBQyxVQUFuQztBQUE4QyxJQUFBLEVBQUU7QUFBaEQsSUFEckIsQ0FERixlQUlFLDZCQUFDLENBQUQsQ0FBRyxJQUFILFFBQVN2QixLQUFLLENBQUN3QixRQUFmLENBSkYsZUFLRSw2QkFBQyxDQUFELENBQUcsZUFBSCxxQkFDRSw2QkFBQyxZQUFEO0FBQU8sSUFBQSxNQUFNLEVBQUVDLGVBQWY7QUFBNkIsSUFBQSxLQUFLLEVBQUMsVUFBbkM7QUFBOEMsSUFBQSxFQUFFO0FBQWhELElBREYsQ0FMRixDQVRGLENBREYsQ0FsREYsQ0FERjtBQTBFRCxDQTNFRDs7QUE2RUExQixpQkFBaUIsQ0FBQzJCLFlBQWxCLEdBQWlDO0FBQy9CQyxFQUFBQSxTQUFTLEVBQUU7QUFEb0IsQ0FBakM7QUFJQTVCLGlCQUFpQixDQUFDNkIsU0FBbEIsR0FBOEIsRUFBOUI7ZUFFZTdCLGlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFZIQ2FyZEJhc2UgZnJvbSBcIi4uL0Jhc2VcIjtcbmltcG9ydCB7IFJvdyB9IGZyb20gXCIuLi8uLi8uLi9HcmlkXCI7XG5pbXBvcnQgKiBhcyBTIGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IFZISGVhZGVyIGZyb20gXCIuLi8uLi8uLi9UeXBvZ3JhcGh5L0hlYWRlcnNcIjtcbmltcG9ydCBWSEltZyBmcm9tIFwiLi4vLi4vSW1nXCI7XG5cbmltcG9ydCBDb21wYW55SWNvbiBmcm9tICcuLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvaWNvbl9idXNpbmVzcy5zdmcvaW5kZXguanN4J1xuaW1wb3J0IFBvc2l0aW9uSWNvbiBmcm9tICcuLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvaWNvbl9za2lsbHMuc3ZnL2luZGV4LmpzeCdcbmltcG9ydCBDaXR5SWNvbiBmcm9tICcuLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvaWNvbl9wYXNzcG9ydC5zdmcvaW5kZXguanN4J1xuaW1wb3J0IENvbW1lbnRzSWNvbiBmcm9tICcuLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvaWNvbl9jaGF0LW91dGxpbmUuc3ZnL2luZGV4LmpzeCdcbmltcG9ydCBUaW1lSWNvblJlZCBmcm9tICcuLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvaWNvbl90aW1lX3JlZC5zdmcvaW5kZXguanN4J1xuaW1wb3J0IFRpbWVJY29uR3JlZW4gZnJvbSAnLi4vLi4vLi4vLi4vYXNzZXRzL2ljb25zL2ljb25fdGltZV9ncmVlbi5zdmcvaW5kZXguanN4J1xuaW1wb3J0IEZhdm9yaXRlSWNvbiBmcm9tICcuLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvaWNvbl9zdGFyX2ZpbGwuc3ZnL2luZGV4LmpzeCdcblxuY29uc3QgVkhDYXJkVmlzYVByb2Nlc3MgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPFZIQ2FyZEJhc2VcbiAgICAgIGNhbmRpZGF0ZT17cHJvcHMuY2FuZGlkYXRlfVxuICAgICAgb25EcmFnRW50ZXI9e3Byb3BzLm9uRHJhZ0VudGVyfVxuICAgICAgaWQ9e3Byb3BzLmlkfVxuICAgICAgb25EcmFnTGVhdmU9e3Byb3BzLm9uRHJhZ0xlYXZlfVxuICAgICAgb25EcmFnU3RhcnQ9e3Byb3BzLm9uRHJhZ1N0YXJ0fVxuICAgICAgZmF2b3JpdGU9e3Byb3BzLmZhdm9yaXRlfVxuICAgICAgZHJhZ2dhYmxlPXtwcm9wcy5kcmFnZ2FibGV9XG4gICAgICBvbkV2ZW50PXtwcm9wcy5vbkV2ZW50fVxuICAgICAgdXNlcklkPXtwcm9wcy51c2VySWR9PlxuICAgICAge3Byb3BzLmludm9pY2VkICYmIDxTLlRhZz5JbnZvaWNlZDwvUy5UYWc+fVxuICAgICAgPFJvdyByb3c+XG4gICAgICAgIDxTLlBlcnNvbmFsSW5mbz5cbiAgICAgICAgICA8Um93IHJvdyBhbGlnbkl0ZW1zQ2VudGVyPlxuICAgICAgICAgICAgPFMuQXZhdGFyV3JhcHBlcj5cbiAgICAgICAgICAgICAgPFMuQXZhdGFyIHNyYz17cHJvcHMuYXZhdGFyfT48L1MuQXZhdGFyPlxuICAgICAgICAgICAgPC9TLkF2YXRhcldyYXBwZXI+XG4gICAgICAgICAgICA8Uy5OYW1lPntwcm9wcy5uYW1lfTwvUy5OYW1lPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDxSb3cgcm93IGFsaWduSXRlbXNDZW50ZXI+XG4gICAgICAgICAgICA8Uy5JY29uV3JhcHBlcj5cbiAgICAgICAgICAgICAgPFZISW1nIHNvdXJjZT17Q29tcGFueUljb259IHRpdGxlPVwiY2l0eVwiIHhzIC8+XG4gICAgICAgICAgICA8L1MuSWNvbldyYXBwZXI+XG4gICAgICAgICAgICA8Uy5JbmZvPntwcm9wcy5jb21wYW55TmFtZX08L1MuSW5mbz5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8Um93IHJvdyBhbGlnbkl0ZW1zQ2VudGVyPlxuICAgICAgICAgICAgPFMuSWNvbldyYXBwZXI+XG4gICAgICAgICAgICAgIDxWSEltZyBzb3VyY2U9e1Bvc2l0aW9uSWNvbn0gdGl0bGU9XCJwb3NpdGlvblwiIHhzIC8+XG4gICAgICAgICAgICA8L1MuSWNvbldyYXBwZXI+XG4gICAgICAgICAgICA8Uy5JbmZvPntwcm9wcy5wb3NpdGlvbk5hbWV9PC9TLkluZm8+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPFJvdyByb3cgYWxpZ25JdGVtc0NlbnRlcj5cbiAgICAgICAgICAgIDxTLkljb25XcmFwcGVyPlxuICAgICAgICAgICAgICA8VkhJbWcgc291cmNlPXtDaXR5SWNvbn0gdGl0bGU9XCJ0aW1lXCIgeHMgLz5cbiAgICAgICAgICAgIDwvUy5JY29uV3JhcHBlcj5cbiAgICAgICAgICAgIDxTLkluZm8+e3Byb3BzLmNpdHlOYW1lfTwvUy5JbmZvPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L1MuUGVyc29uYWxJbmZvPlxuICAgICAgICB7LyogPFMuTWVudUNpcmNsZSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgcHJvcHMub25FdmVudCh7XG4gICAgICAgICAgICB0eXBlOiBcIk9uQ2xpY2tcIixcbiAgICAgICAgICAgIG9yaWdpbjogXCJWSFZpc2FQcm9jZXNzXCIsXG4gICAgICAgICAgICB0YXJnZXQ6IFwiVmlzYSBQcm9jZXNzIE1lbnVcIlxuICAgICAgICAgIH0pXG4gICAgICAgIH19PlxuICAgICAgICAgIDxkaXYgLz5cbiAgICAgICAgICA8ZGl2IC8+XG4gICAgICAgICAgPGRpdiAvPlxuICAgICAgICA8L1MuTWVudUNpcmNsZT4gKi99XG4gICAgICA8L1Jvdz5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxTLkZvb3Rlcj5cbiAgICAgICAgICA8Um93IHJvdz5cbiAgICAgICAgICAgIDxSb3cgcm93IGFsaWduSXRlbXNDZW50ZXI+XG4gICAgICAgICAgICAgIDxTLlRpbWVXcmFwcGVyPlxuICAgICAgICAgICAgICAgIDxWSEltZyBzb3VyY2U9e3Byb3BzLnRpbWUgPD0gcHJvcHMuYXZnVGltZSA/IGAke1RpbWVJY29uR3JlZW59YCA6IGAke1RpbWVJY29uUmVkfWB9IHRpdGxlPVwidGltZVwiIHhzIC8+XG4gICAgICAgICAgICAgIDwvUy5UaW1lV3JhcHBlcj5cbiAgICAgICAgICAgICAgPFMuSW5mb1RpbWUgYXZnVGltZT17cHJvcHMudGltZSA8PSBwcm9wcy5hdmdUaW1lfT57YCR7cHJvcHMudGltZX0gZGF5cyBhZ29gfTwvUy5JbmZvVGltZT5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDxSb3cgcm93IGFsaWduSXRlbXNDZW50ZXI+XG4gICAgICAgICAgICA8Uy5GYXZvcml0ZVdyYXBwZXI+XG4gICAgICAgICAgICAgIHtwcm9wcy5mYXZvcml0ZSAmJiA8VkhJbWcgc291cmNlPXtGYXZvcml0ZUljb259IHRpdGxlPVwiY29tbWVudHNcIiB4cyAvPn1cbiAgICAgICAgICAgIDwvUy5GYXZvcml0ZVdyYXBwZXI+XG4gICAgICAgICAgICA8Uy5JbmZvPntwcm9wcy5jb21tZW50c308L1MuSW5mbz5cbiAgICAgICAgICAgIDxTLkNvbW1lbnRzV3JhcHBlcj5cbiAgICAgICAgICAgICAgPFZISW1nIHNvdXJjZT17Q29tbWVudHNJY29ufSB0aXRsZT1cImNvbW1lbnRzXCIgeHMgLz5cbiAgICAgICAgICAgIDwvUy5Db21tZW50c1dyYXBwZXI+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvUy5Gb290ZXI+XG4gICAgICA8L1Jvdz5cbiAgICA8L1ZIQ2FyZEJhc2U+XG4gICk7XG59O1xuXG5WSENhcmRWaXNhUHJvY2Vzcy5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogXCJcIlxufTtcblxuVkhDYXJkVmlzYVByb2Nlc3MucHJvcFR5cGVzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IFZIQ2FyZFZpc2FQcm9jZXNzO1xuIl19