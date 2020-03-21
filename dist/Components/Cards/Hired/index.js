"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../../Grid/index");

var _index2 = _interopRequireDefault(require("../../Avatar/index"));

var _index3 = _interopRequireDefault(require("../../Text/index"));

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHCardHired = function VHCardHired(props) {
  return /*#__PURE__*/_react.default.createElement(_index.Row, null, /*#__PURE__*/_react.default.createElement(_index.Row, {
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(S.OutterImg, null, /*#__PURE__*/_react.default.createElement(_index2.default, {
    image: props.userPhoto,
    size: "xl",
    showCursor: true
  }), /*#__PURE__*/_react.default.createElement(S.InnerImg, null, /*#__PURE__*/_react.default.createElement(_index2.default, {
    image: props.flag,
    size: "md",
    showCursor: true
  })))), /*#__PURE__*/_react.default.createElement(_index.Row, {
    alignItemsCenter: true,
    marginTop: 10
  }, /*#__PURE__*/_react.default.createElement(_index3.default, {
    variant: "subtitle3",
    color: "gray-90",
    text: props.name
  }), /*#__PURE__*/_react.default.createElement(_index3.default, {
    variant: "platform",
    color: "gray-70",
    text: props.position
  }), /*#__PURE__*/_react.default.createElement(_index3.default, {
    variant: "platform",
    color: "gray-70",
    text: props.country
  })));
};

VHCardHired.defaultProps = {
  className: '',
  showCursor: false
};
VHCardHired.propTypes = {
  className: _propTypes.default.string,
  name: _propTypes.default.string.isRequired,
  position: _propTypes.default.string.isRequired,
  country: _propTypes.default.string,
  userPhoto: _propTypes.default.string.isRequired,
  flag: _propTypes.default.string.isRequired
};
var _default = VHCardHired;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQ2FyZHMvSGlyZWQvaW5kZXguanN4Il0sIm5hbWVzIjpbIlZIQ2FyZEhpcmVkIiwicHJvcHMiLCJ1c2VyUGhvdG8iLCJmbGFnIiwibmFtZSIsInBvc2l0aW9uIiwiY291bnRyeSIsImRlZmF1bHRQcm9wcyIsImNsYXNzTmFtZSIsInNob3dDdXJzb3IiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBQyxLQUFLLEVBQUk7QUFDM0Isc0JBQ0UsNkJBQUMsVUFBRCxxQkFDSSw2QkFBQyxVQUFEO0FBQUssSUFBQSxnQkFBZ0I7QUFBckIsa0JBQ0ksNkJBQUMsQ0FBRCxDQUFHLFNBQUgscUJBQ0ksNkJBQUMsZUFBRDtBQUNJLElBQUEsS0FBSyxFQUFFQSxLQUFLLENBQUNDLFNBRGpCO0FBRUksSUFBQSxJQUFJLEVBQUUsSUFGVjtBQUdJLElBQUEsVUFBVSxFQUFFO0FBSGhCLElBREosZUFNSSw2QkFBQyxDQUFELENBQUcsUUFBSCxxQkFDSSw2QkFBQyxlQUFEO0FBQ0ksSUFBQSxLQUFLLEVBQUVELEtBQUssQ0FBQ0UsSUFEakI7QUFFSSxJQUFBLElBQUksRUFBRSxJQUZWO0FBR0ksSUFBQSxVQUFVLEVBQUU7QUFIaEIsSUFESixDQU5KLENBREosQ0FESixlQWlCSSw2QkFBQyxVQUFEO0FBQUssSUFBQSxnQkFBZ0IsTUFBckI7QUFBc0IsSUFBQSxTQUFTLEVBQUU7QUFBakMsa0JBQ0ksNkJBQUMsZUFBRDtBQUNJLElBQUEsT0FBTyxFQUFFLFdBRGI7QUFFSSxJQUFBLEtBQUssRUFBRSxTQUZYO0FBR0ksSUFBQSxJQUFJLEVBQUVGLEtBQUssQ0FBQ0c7QUFIaEIsSUFESixlQU1JLDZCQUFDLGVBQUQ7QUFDSSxJQUFBLE9BQU8sRUFBRSxVQURiO0FBRUksSUFBQSxLQUFLLEVBQUUsU0FGWDtBQUdJLElBQUEsSUFBSSxFQUFFSCxLQUFLLENBQUNJO0FBSGhCLElBTkosZUFXSSw2QkFBQyxlQUFEO0FBQ0ksSUFBQSxPQUFPLEVBQUUsVUFEYjtBQUVJLElBQUEsS0FBSyxFQUFFLFNBRlg7QUFHSSxJQUFBLElBQUksRUFBRUosS0FBSyxDQUFDSztBQUhoQixJQVhKLENBakJKLENBREY7QUFxQ0QsQ0F0Q0Q7O0FBd0NBTixXQUFXLENBQUNPLFlBQVosR0FBMkI7QUFDekJDLEVBQUFBLFNBQVMsRUFBRSxFQURjO0FBRXpCQyxFQUFBQSxVQUFVLEVBQUU7QUFGYSxDQUEzQjtBQUtBVCxXQUFXLENBQUNVLFNBQVosR0FBd0I7QUFDdEJGLEVBQUFBLFNBQVMsRUFBRUcsbUJBQVVDLE1BREM7QUFFdEJSLEVBQUFBLElBQUksRUFBRU8sbUJBQVVDLE1BQVYsQ0FBaUJDLFVBRkQ7QUFHdEJSLEVBQUFBLFFBQVEsRUFBRU0sbUJBQVVDLE1BQVYsQ0FBaUJDLFVBSEw7QUFJdEJQLEVBQUFBLE9BQU8sRUFBRUssbUJBQVVDLE1BSkc7QUFLdEJWLEVBQUFBLFNBQVMsRUFBRVMsbUJBQVVDLE1BQVYsQ0FBaUJDLFVBTE47QUFNdEJWLEVBQUFBLElBQUksRUFBRVEsbUJBQVVDLE1BQVYsQ0FBaUJDO0FBTkQsQ0FBeEI7ZUFTZWIsVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUm93IH0gZnJvbSBcIi4uLy4uLy4uL0dyaWQvaW5kZXhcIjtcbmltcG9ydCBWSEF2YXRhciBmcm9tIFwiLi4vLi4vQXZhdGFyL2luZGV4XCI7XG5pbXBvcnQgVkhUZXh0IGZyb20gXCIuLi8uLi9UZXh0L2luZGV4XCI7XG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vc3R5bGVzJztcblxuY29uc3QgVkhDYXJkSGlyZWQgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJvdz5cbiAgICAgICAgPFJvdyBhbGlnbkl0ZW1zQ2VudGVyPlxuICAgICAgICAgICAgPFMuT3V0dGVySW1nPlxuICAgICAgICAgICAgICAgIDxWSEF2YXRhciBcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e3Byb3BzLnVzZXJQaG90b31cbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17XCJ4bFwifVxuICAgICAgICAgICAgICAgICAgICBzaG93Q3Vyc29yPXt0cnVlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFMuSW5uZXJJbWc+XG4gICAgICAgICAgICAgICAgICAgIDxWSEF2YXRhciBcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtwcm9wcy5mbGFnfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17XCJtZFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0N1cnNvcj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9TLklubmVySW1nPlxuICAgICAgICAgICAgPC9TLk91dHRlckltZz5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3cgYWxpZ25JdGVtc0NlbnRlciBtYXJnaW5Ub3A9ezEwfT5cbiAgICAgICAgICAgIDxWSFRleHQgXG4gICAgICAgICAgICAgICAgdmFyaWFudD17XCJzdWJ0aXRsZTNcIn1cbiAgICAgICAgICAgICAgICBjb2xvcj17XCJncmF5LTkwXCJ9XG4gICAgICAgICAgICAgICAgdGV4dD17cHJvcHMubmFtZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VkhUZXh0IFxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9e1wicGxhdGZvcm1cIn1cbiAgICAgICAgICAgICAgICBjb2xvcj17XCJncmF5LTcwXCJ9XG4gICAgICAgICAgICAgICAgdGV4dD17cHJvcHMucG9zaXRpb259XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFZIVGV4dCBcbiAgICAgICAgICAgICAgICB2YXJpYW50PXtcInBsYXRmb3JtXCJ9XG4gICAgICAgICAgICAgICAgY29sb3I9e1wiZ3JheS03MFwifVxuICAgICAgICAgICAgICAgIHRleHQ9e3Byb3BzLmNvdW50cnl9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L1Jvdz5cbiAgICA8L1Jvdz5cbiAgKVxufVxuXG5WSENhcmRIaXJlZC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogJycsXG4gIHNob3dDdXJzb3I6IGZhbHNlLFxufVxuXG5WSENhcmRIaXJlZC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBwb3NpdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjb3VudHJ5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICB1c2VyUGhvdG86IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZmxhZzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufVxuXG5leHBvcnQgZGVmYXVsdCBWSENhcmRIaXJlZDsiXX0=