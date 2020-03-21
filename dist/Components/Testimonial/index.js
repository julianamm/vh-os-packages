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
  return /*#__PURE__*/_react.default.createElement(_index.Row, {
    row: true
  }, /*#__PURE__*/_react.default.createElement(S.AvatarWrapper, null, /*#__PURE__*/_react.default.createElement(_index2.default, {
    image: props.image,
    size: props.sizeImg,
    showCursor: true
  })), /*#__PURE__*/_react.default.createElement(S.TextWrapper, {
    xs: props.xs,
    sm: props.sm,
    lg: props.lg,
    color: props.color
  }, /*#__PURE__*/_react.default.createElement("p", null, props.testimonial)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVGVzdGltb25pYWwvaW5kZXguanN4Il0sIm5hbWVzIjpbIlZIVGVzdGltb25pYWwiLCJwcm9wcyIsImltYWdlIiwic2l6ZUltZyIsInhzIiwic20iLCJsZyIsImNvbG9yIiwidGVzdGltb25pYWwiLCJkZWZhdWx0UHJvcHMiLCJjbGFzc05hbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBQyxLQUFLLEVBQUk7QUFDN0Isc0JBQ0UsNkJBQUMsVUFBRDtBQUFLLElBQUEsR0FBRztBQUFSLGtCQUNJLDZCQUFDLENBQUQsQ0FBRyxhQUFILHFCQUNJLDZCQUFDLGVBQUQ7QUFDSSxJQUFBLEtBQUssRUFBRUEsS0FBSyxDQUFDQyxLQURqQjtBQUVJLElBQUEsSUFBSSxFQUFFRCxLQUFLLENBQUNFLE9BRmhCO0FBR0ksSUFBQSxVQUFVO0FBSGQsSUFESixDQURKLGVBUUksNkJBQUMsQ0FBRCxDQUFHLFdBQUg7QUFDSSxJQUFBLEVBQUUsRUFBRUYsS0FBSyxDQUFDRyxFQURkO0FBRUksSUFBQSxFQUFFLEVBQUVILEtBQUssQ0FBQ0ksRUFGZDtBQUdJLElBQUEsRUFBRSxFQUFFSixLQUFLLENBQUNLLEVBSGQ7QUFJSSxJQUFBLEtBQUssRUFBRUwsS0FBSyxDQUFDTTtBQUpqQixrQkFLSSx3Q0FBSU4sS0FBSyxDQUFDTyxXQUFWLENBTEosQ0FSSixDQURGO0FBa0JELENBbkJEOztBQXFCQVIsYUFBYSxDQUFDUyxZQUFkLEdBQTZCO0FBQzNCQyxFQUFBQSxTQUFTLEVBQUUsRUFEZ0I7QUFFekJOLEVBQUFBLEVBQUUsRUFBRSxLQUZxQjtBQUd6QkMsRUFBQUEsRUFBRSxFQUFFLEtBSHFCO0FBSXpCQyxFQUFBQSxFQUFFLEVBQUU7QUFKcUIsQ0FBN0I7QUFPQU4sYUFBYSxDQUFDVyxTQUFkLEdBQTBCO0FBQ3hCVCxFQUFBQSxLQUFLLEVBQUVVLG1CQUFVQyxNQUFWLENBQWlCQyxVQURBO0FBRXhCWCxFQUFBQSxPQUFPLEVBQUVTLG1CQUFVQyxNQUZLO0FBR3hCTCxFQUFBQSxXQUFXLEVBQUVJLG1CQUFVQyxNQUFWLENBQWlCQyxVQUhOO0FBSXhCUCxFQUFBQSxLQUFLLEVBQUVLLG1CQUFVQyxNQUpPO0FBS3hCVCxFQUFBQSxFQUFFLEVBQUVRLG1CQUFVRyxJQUxVO0FBTXhCVixFQUFBQSxFQUFFLEVBQUVPLG1CQUFVRyxJQU5VO0FBT3hCVCxFQUFBQSxFQUFFLEVBQUVNLG1CQUFVRyxJQVBVO0FBUXhCTCxFQUFBQSxTQUFTLEVBQUVFLG1CQUFVQztBQVJHLENBQTFCO2VBV2ViLGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFJvdyB9IGZyb20gJy4uLy4uL0dyaWQvaW5kZXgnO1xuaW1wb3J0IFZIQXZhdGFyIGZyb20gJy4uL0F2YXRhci9pbmRleCc7XG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vc3R5bGVzJztcblxuY29uc3QgVkhUZXN0aW1vbmlhbCA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Um93IHJvdz5cbiAgICAgICAgPFMuQXZhdGFyV3JhcHBlciA+XG4gICAgICAgICAgICA8VkhBdmF0YXIgXG4gICAgICAgICAgICAgICAgaW1hZ2U9e3Byb3BzLmltYWdlfSBcbiAgICAgICAgICAgICAgICBzaXplPXtwcm9wcy5zaXplSW1nfVxuICAgICAgICAgICAgICAgIHNob3dDdXJzb3JcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvUy5BdmF0YXJXcmFwcGVyPlxuICAgICAgICA8Uy5UZXh0V3JhcHBlclxuICAgICAgICAgICAgeHM9e3Byb3BzLnhzfVxuICAgICAgICAgICAgc209e3Byb3BzLnNtfVxuICAgICAgICAgICAgbGc9e3Byb3BzLmxnfVxuICAgICAgICAgICAgY29sb3I9e3Byb3BzLmNvbG9yfT5cbiAgICAgICAgICAgIDxwPntwcm9wcy50ZXN0aW1vbmlhbH08L3A+XG4gICAgICAgIDwvUy5UZXh0V3JhcHBlcj5cbiAgICA8L1Jvdz5cbiAgKVxufVxuXG5WSFRlc3RpbW9uaWFsLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiAnJyxcbiAgICB4czogZmFsc2UsXG4gICAgc206IGZhbHNlLFxuICAgIGxnOiBmYWxzZSxcbn1cblxuVkhUZXN0aW1vbmlhbC5wcm9wVHlwZXMgPSB7XG4gIGltYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHNpemVJbWc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRlc3RpbW9uaWFsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB4czogUHJvcFR5cGVzLmJvb2wsXG4gIHNtOiBQcm9wVHlwZXMuYm9vbCxcbiAgbGc6IFByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZIVGVzdGltb25pYWw7Il19