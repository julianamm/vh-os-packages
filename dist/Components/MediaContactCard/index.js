"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _index = _interopRequireDefault(require("../Cards/Base/index"));

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHMediacontactCard = function VHMediacontactCard(props) {
  return /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    style: {
      marginTop: "-10%",
      boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.1)",
      borderRadius: "6px"
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    noHover: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(S.Title, null, props.title), /*#__PURE__*/_react.default.createElement(S.Info, null, props.name), /*#__PURE__*/_react.default.createElement(S.Info, null, props.email), /*#__PURE__*/_react.default.createElement(S.Info, null, props.phone))));
};

VHMediacontactCard.propTypes = {
  onEvent: _propTypes.default.func,
  title: _propTypes.default.string,
  name: _propTypes.default.string,
  email: _propTypes.default.string,
  phone: _propTypes.default.string,
  className: _propTypes.default.string
};
var _default = VHMediacontactCard;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvTWVkaWFDb250YWN0Q2FyZC9pbmRleC5qc3giXSwibmFtZXMiOlsiVkhNZWRpYWNvbnRhY3RDYXJkIiwicHJvcHMiLCJtYXJnaW5Ub3AiLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiLCJ0aXRsZSIsIm5hbWUiLCJlbWFpbCIsInBob25lIiwicHJvcFR5cGVzIiwib25FdmVudCIsIlByb3BUeXBlcyIsImZ1bmMiLCJzdHJpbmciLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQUMsS0FBSyxFQUFJO0FBRWhDLHNCQUNJLDZCQUFDLFNBQUQ7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxTQUFTLEVBQUMsTUFBWjtBQUFvQkMsTUFBQUEsU0FBUyxFQUFFLGlDQUEvQjtBQUFrRUMsTUFBQUEsWUFBWSxFQUFFO0FBQWhGO0FBQVosa0JBQ0ksNkJBQUMsY0FBRDtBQUFZLElBQUEsT0FBTztBQUFuQixrQkFDSSw2QkFBQyxTQUFELHFCQUNJLDZCQUFDLENBQUQsQ0FBRyxLQUFILFFBQVVILEtBQUssQ0FBQ0ksS0FBaEIsQ0FESixlQUVJLDZCQUFDLENBQUQsQ0FBRyxJQUFILFFBQVNKLEtBQUssQ0FBQ0ssSUFBZixDQUZKLGVBR0ksNkJBQUMsQ0FBRCxDQUFHLElBQUgsUUFBU0wsS0FBSyxDQUFDTSxLQUFmLENBSEosZUFJSSw2QkFBQyxDQUFELENBQUcsSUFBSCxRQUFTTixLQUFLLENBQUNPLEtBQWYsQ0FKSixDQURKLENBREosQ0FESjtBQWFILENBZkQ7O0FBaUJBUixrQkFBa0IsQ0FBQ1MsU0FBbkIsR0FBK0I7QUFDM0JDLEVBQUFBLE9BQU8sRUFBRUMsbUJBQVVDLElBRFE7QUFFM0JQLEVBQUFBLEtBQUssRUFBRU0sbUJBQVVFLE1BRlU7QUFHM0JQLEVBQUFBLElBQUksRUFBRUssbUJBQVVFLE1BSFc7QUFJM0JOLEVBQUFBLEtBQUssRUFBRUksbUJBQVVFLE1BSlU7QUFLM0JMLEVBQUFBLEtBQUssRUFBRUcsbUJBQVVFLE1BTFU7QUFNM0JDLEVBQUFBLFNBQVMsRUFBRUgsbUJBQVVFO0FBTk0sQ0FBL0I7ZUFTZWIsa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFJvdyB9IGZyb20gXCIuLi8uLi9HcmlkXCI7XG5pbXBvcnQgVkhDYXJkQmFzZSBmcm9tIFwiLi4vQ2FyZHMvQmFzZS9pbmRleFwiO1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL3N0eWxlcydcblxuY29uc3QgVkhNZWRpYWNvbnRhY3RDYXJkID0gcHJvcHMgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJvdyBzdHlsZT17eyBtYXJnaW5Ub3A6XCItMTAlXCIsIGJveFNoYWRvdzogXCIwIDRweCAxNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpXCIsIGJvcmRlclJhZGl1czogXCI2cHhcIn19PlxuICAgICAgICAgICAgPFZIQ2FyZEJhc2Ugbm9Ib3Zlcj5cbiAgICAgICAgICAgICAgICA8Um93ID5cbiAgICAgICAgICAgICAgICAgICAgPFMuVGl0bGU+e3Byb3BzLnRpdGxlfTwvUy5UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPFMuSW5mbz57cHJvcHMubmFtZX08L1MuSW5mbz5cbiAgICAgICAgICAgICAgICAgICAgPFMuSW5mbz57cHJvcHMuZW1haWx9PC9TLkluZm8+XG4gICAgICAgICAgICAgICAgICAgIDxTLkluZm8+e3Byb3BzLnBob25lfTwvUy5JbmZvPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9WSENhcmRCYXNlPlxuXG4gICAgICAgIDwvUm93PlxuICAgIClcbn1cblxuVkhNZWRpYWNvbnRhY3RDYXJkLnByb3BUeXBlcyA9IHtcbiAgICBvbkV2ZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHBob25lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVkhNZWRpYWNvbnRhY3RDYXJkO1xuIl19