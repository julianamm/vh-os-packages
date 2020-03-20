"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../Grid/index");

var _index2 = _interopRequireDefault(require("../Avatar/index"));

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHTestimonial = function VHTestimonial(props) {
  return _react.default.createElement(_index.Row, {
    row: true
  }, _react.default.createElement(S.AvatarWrapper, null, _react.default.createElement(_index2.default, {
    image: props.image,
    size: props.sizeImg,
    showCursor: true
  })), _react.default.createElement(S.TextWrapper, {
    xs: props.xs,
    sm: props.sm,
    lg: props.lg,
    color: props.color
  }, _react.default.createElement("p", null, props.testimonial)));
};

VHTestimonial.defaultProps = {
  className: '',
  xs: false,
  sm: false,
  lg: false
};
VHTestimonial.propTypes = {
  image: _propTypes.default.string.isRequired,
  sizeImg: _propTypes.default.string,
  testimonial: _propTypes.default.string.isRequired,
  color: _propTypes.default.string,
  xs: _propTypes.default.bool,
  sm: _propTypes.default.bool,
  lg: _propTypes.default.bool,
  className: _propTypes.default.string
};
var _default = VHTestimonial;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVGVzdGltb25pYWwvaW5kZXguanN4Il0sIm5hbWVzIjpbIlZIVGVzdGltb25pYWwiLCJwcm9wcyIsImltYWdlIiwic2l6ZUltZyIsInhzIiwic20iLCJsZyIsImNvbG9yIiwidGVzdGltb25pYWwiLCJkZWZhdWx0UHJvcHMiLCJjbGFzc05hbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBQyxLQUFLLEVBQUk7QUFDN0IsU0FDRSw2QkFBQyxVQUFEO0FBQUssSUFBQSxHQUFHO0FBQVIsS0FDSSw2QkFBQyxDQUFELENBQUcsYUFBSCxRQUNJLDZCQUFDLGVBQUQ7QUFDSSxJQUFBLEtBQUssRUFBRUEsS0FBSyxDQUFDQyxLQURqQjtBQUVJLElBQUEsSUFBSSxFQUFFRCxLQUFLLENBQUNFLE9BRmhCO0FBR0ksSUFBQSxVQUFVO0FBSGQsSUFESixDQURKLEVBUUksNkJBQUMsQ0FBRCxDQUFHLFdBQUg7QUFDSSxJQUFBLEVBQUUsRUFBRUYsS0FBSyxDQUFDRyxFQURkO0FBRUksSUFBQSxFQUFFLEVBQUVILEtBQUssQ0FBQ0ksRUFGZDtBQUdJLElBQUEsRUFBRSxFQUFFSixLQUFLLENBQUNLLEVBSGQ7QUFJSSxJQUFBLEtBQUssRUFBRUwsS0FBSyxDQUFDTTtBQUpqQixLQUtJLHdDQUFJTixLQUFLLENBQUNPLFdBQVYsQ0FMSixDQVJKLENBREY7QUFrQkQsQ0FuQkQ7O0FBcUJBUixhQUFhLENBQUNTLFlBQWQsR0FBNkI7QUFDM0JDLEVBQUFBLFNBQVMsRUFBRSxFQURnQjtBQUV6Qk4sRUFBQUEsRUFBRSxFQUFFLEtBRnFCO0FBR3pCQyxFQUFBQSxFQUFFLEVBQUUsS0FIcUI7QUFJekJDLEVBQUFBLEVBQUUsRUFBRTtBQUpxQixDQUE3QjtBQU9BTixhQUFhLENBQUNXLFNBQWQsR0FBMEI7QUFDeEJULEVBQUFBLEtBQUssRUFBRVUsbUJBQVVDLE1BQVYsQ0FBaUJDLFVBREE7QUFFeEJYLEVBQUFBLE9BQU8sRUFBRVMsbUJBQVVDLE1BRks7QUFHeEJMLEVBQUFBLFdBQVcsRUFBRUksbUJBQVVDLE1BQVYsQ0FBaUJDLFVBSE47QUFJeEJQLEVBQUFBLEtBQUssRUFBRUssbUJBQVVDLE1BSk87QUFLeEJULEVBQUFBLEVBQUUsRUFBRVEsbUJBQVVHLElBTFU7QUFNeEJWLEVBQUFBLEVBQUUsRUFBRU8sbUJBQVVHLElBTlU7QUFPeEJULEVBQUFBLEVBQUUsRUFBRU0sbUJBQVVHLElBUFU7QUFReEJMLEVBQUFBLFNBQVMsRUFBRUUsbUJBQVVDO0FBUkcsQ0FBMUI7ZUFXZWIsYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUm93IH0gZnJvbSAnLi4vLi4vR3JpZC9pbmRleCc7XG5pbXBvcnQgVkhBdmF0YXIgZnJvbSAnLi4vQXZhdGFyL2luZGV4JztcbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9zdHlsZXMnO1xuXG5jb25zdCBWSFRlc3RpbW9uaWFsID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSb3cgcm93PlxuICAgICAgICA8Uy5BdmF0YXJXcmFwcGVyID5cbiAgICAgICAgICAgIDxWSEF2YXRhciBcbiAgICAgICAgICAgICAgICBpbWFnZT17cHJvcHMuaW1hZ2V9IFxuICAgICAgICAgICAgICAgIHNpemU9e3Byb3BzLnNpemVJbWd9XG4gICAgICAgICAgICAgICAgc2hvd0N1cnNvclxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9TLkF2YXRhcldyYXBwZXI+XG4gICAgICAgIDxTLlRleHRXcmFwcGVyXG4gICAgICAgICAgICB4cz17cHJvcHMueHN9XG4gICAgICAgICAgICBzbT17cHJvcHMuc219XG4gICAgICAgICAgICBsZz17cHJvcHMubGd9XG4gICAgICAgICAgICBjb2xvcj17cHJvcHMuY29sb3J9PlxuICAgICAgICAgICAgPHA+e3Byb3BzLnRlc3RpbW9uaWFsfTwvcD5cbiAgICAgICAgPC9TLlRleHRXcmFwcGVyPlxuICAgIDwvUm93PlxuICApXG59XG5cblZIVGVzdGltb25pYWwuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6ICcnLFxuICAgIHhzOiBmYWxzZSxcbiAgICBzbTogZmFsc2UsXG4gICAgbGc6IGZhbHNlLFxufVxuXG5WSFRlc3RpbW9uaWFsLnByb3BUeXBlcyA9IHtcbiAgaW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc2l6ZUltZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGVzdGltb25pYWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHhzOiBQcm9wVHlwZXMuYm9vbCxcbiAgc206IFByb3BUeXBlcy5ib29sLFxuICBsZzogUHJvcFR5cGVzLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgVkhUZXN0aW1vbmlhbDsiXX0=