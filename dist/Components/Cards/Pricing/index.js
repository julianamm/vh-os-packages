"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../../Grid");

var _Base = _interopRequireDefault(require("../Base"));

var _index = _interopRequireDefault(require("../../Chips/index"));

var _index2 = _interopRequireDefault(require("../../Text/index"));

var _index3 = _interopRequireDefault(require("../../Button/index"));

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHCardPricing = function VHCardPricing(props) {
  return _react.default.createElement(_Base.default, null, _react.default.createElement(_Grid.Row, {
    alignItemsCenter: true
  }, _react.default.createElement(_Grid.Row, {
    height: 25,
    alignItemsCenter: true
  }, _react.default.createElement(S.Wrapper, {
    show: props.show
  }, _react.default.createElement(_index.default, {
    onEvent: props.onEvent,
    label: props.save,
    round: true,
    secondary: props.secondaryChip,
    transparent: props.transparentChip,
    noHover: props.noHoverChip,
    marginRight: props.marginRight
  }))), _react.default.createElement(_Grid.Row, {
    alignItemsCenter: true,
    marginTop: 15,
    marginBottom: 5
  }, _react.default.createElement(_index2.default, {
    variant: "h4",
    color: "black-60",
    text: props.period
  })), _react.default.createElement(_index2.default, {
    variant: "h1",
    color: "primary-dark",
    text: props.price
  }), _react.default.createElement(_index2.default, {
    variant: "subtitle3",
    color: "primary-dark",
    text: props.unit
  }), _react.default.createElement(_index2.default, {
    variant: "subtitle3",
    color: "black-60",
    text: props.subscription
  }), _react.default.createElement(_Grid.Row, {
    alignItemsCenter: true,
    marginTop: 15,
    marginBottom: 5,
    style: {
      width: "50%",
      height: "40px"
    }
  }, _react.default.createElement(_index3.default, {
    onEvent: props.onEvent,
    label: props.cta,
    lg: true,
    outline: props.outlineBtn,
    primary: props.primaryBtn,
    secondary: props.secondaryBtn,
    full: true
  })), _react.default.createElement(_Grid.Row, {
    height: 20,
    alignItemsCenter: true
  }, _react.default.createElement(_index2.default, {
    variant: "subtitle2",
    color: "black-60",
    text: props.note
  }))));
};

VHCardPricing.defaultProps = {
  className: "",
  show: false
};
VHCardPricing.propTypes = {
  show: _propTypes.default.bool,
  onEvent: _propTypes.default.func,
  label: _propTypes.default.string,
  save: _propTypes.default.string,
  period: _propTypes.default.string,
  price: _propTypes.default.string,
  unit: _propTypes.default.string,
  subscription: _propTypes.default.string,
  cta: _propTypes.default.string,
  note: _propTypes.default.string,
  className: _propTypes.default.string
};
var _default = VHCardPricing;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQ2FyZHMvUHJpY2luZy9pbmRleC5qc3giXSwibmFtZXMiOlsiVkhDYXJkUHJpY2luZyIsInByb3BzIiwic2hvdyIsIm9uRXZlbnQiLCJzYXZlIiwic2Vjb25kYXJ5Q2hpcCIsInRyYW5zcGFyZW50Q2hpcCIsIm5vSG92ZXJDaGlwIiwibWFyZ2luUmlnaHQiLCJwZXJpb2QiLCJwcmljZSIsInVuaXQiLCJzdWJzY3JpcHRpb24iLCJ3aWR0aCIsImhlaWdodCIsImN0YSIsIm91dGxpbmVCdG4iLCJwcmltYXJ5QnRuIiwic2Vjb25kYXJ5QnRuIiwibm90ZSIsImRlZmF1bHRQcm9wcyIsImNsYXNzTmFtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJmdW5jIiwibGFiZWwiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUMsS0FBSyxFQUFJO0FBQzdCLFNBQ0UsNkJBQUMsYUFBRCxRQUNFLDZCQUFDLFNBQUQ7QUFBSyxJQUFBLGdCQUFnQjtBQUFyQixLQUNJLDZCQUFDLFNBQUQ7QUFBSyxJQUFBLE1BQU0sRUFBRSxFQUFiO0FBQWlCLElBQUEsZ0JBQWdCO0FBQWpDLEtBQ0UsNkJBQUMsQ0FBRCxDQUFHLE9BQUg7QUFBVyxJQUFBLElBQUksRUFBRUEsS0FBSyxDQUFDQztBQUF2QixLQUNJLDZCQUFDLGNBQUQ7QUFDQSxJQUFBLE9BQU8sRUFBRUQsS0FBSyxDQUFDRSxPQURmO0FBRUEsSUFBQSxLQUFLLEVBQUVGLEtBQUssQ0FBQ0csSUFGYjtBQUdBLElBQUEsS0FBSyxNQUhMO0FBSUEsSUFBQSxTQUFTLEVBQUVILEtBQUssQ0FBQ0ksYUFKakI7QUFLQSxJQUFBLFdBQVcsRUFBRUosS0FBSyxDQUFDSyxlQUxuQjtBQU1B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ZUFjZTNCLGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBSb3cgfSBmcm9tIFwiLi4vLi4vLi4vR3JpZFwiO1xuaW1wb3J0IFZIQ2FyZEJhc2UgZnJvbSBcIi4uL0Jhc2VcIjtcbmltcG9ydCBWSENoaXBzIGZyb20gXCIuLi8uLi9DaGlwcy9pbmRleFwiO1xuaW1wb3J0IFZIVGV4dCBmcm9tIFwiLi4vLi4vVGV4dC9pbmRleFwiO1xuaW1wb3J0IFZIQnV0dG9uIGZyb20gXCIuLi8uLi9CdXR0b24vaW5kZXhcIjtcbmltcG9ydCAqIGFzIFMgZnJvbSBcIi4vc3R5bGVzXCI7XG5cbmNvbnN0IFZIQ2FyZFByaWNpbmcgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPFZIQ2FyZEJhc2U+XG4gICAgICA8Um93IGFsaWduSXRlbXNDZW50ZXI+XG4gICAgICAgICAgPFJvdyBoZWlnaHQ9ezI1fSBhbGlnbkl0ZW1zQ2VudGVyPlxuICAgICAgICAgICAgPFMuV3JhcHBlciBzaG93PXtwcm9wcy5zaG93fT5cbiAgICAgICAgICAgICAgICA8VkhDaGlwc1xuICAgICAgICAgICAgICAgIG9uRXZlbnQ9e3Byb3BzLm9uRXZlbnR9XG4gICAgICAgICAgICAgICAgbGFiZWw9e3Byb3BzLnNhdmV9XG4gICAgICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnk9e3Byb3BzLnNlY29uZGFyeUNoaXB9XG4gICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQ9e3Byb3BzLnRyYW5zcGFyZW50Q2hpcH1cbiAgICAgICAgICAgICAgICBub0hvdmVyPXtwcm9wcy5ub0hvdmVyQ2hpcH1cbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodD17cHJvcHMubWFyZ2luUmlnaHR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvUy5XcmFwcGVyPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDxSb3cgYWxpZ25JdGVtc0NlbnRlciBtYXJnaW5Ub3A9ezE1fSBtYXJnaW5Cb3R0b209ezV9PlxuICAgICAgICAgICAgPFZIVGV4dCBcbiAgICAgICAgICAgICAgdmFyaWFudD17XCJoNFwifVxuICAgICAgICAgICAgICBjb2xvcj17XCJibGFjay02MFwifVxuICAgICAgICAgICAgICB0ZXh0PXtwcm9wcy5wZXJpb2R9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDxWSFRleHQgXG4gICAgICAgICAgICB2YXJpYW50PXtcImgxXCJ9XG4gICAgICAgICAgICBjb2xvcj17XCJwcmltYXJ5LWRhcmtcIn1cbiAgICAgICAgICAgIHRleHQ9e3Byb3BzLnByaWNlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFZIVGV4dCBcbiAgICAgICAgICAgIHZhcmlhbnQ9e1wic3VidGl0bGUzXCJ9XG4gICAgICAgICAgICBjb2xvcj17XCJwcmltYXJ5LWRhcmtcIn1cbiAgICAgICAgICAgIHRleHQ9e3Byb3BzLnVuaXR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8VkhUZXh0IFxuICAgICAgICAgICAgdmFyaWFudD17XCJzdWJ0aXRsZTNcIn1cbiAgICAgICAgICAgIGNvbG9yPXtcImJsYWNrLTYwXCJ9XG4gICAgICAgICAgICB0ZXh0PXtwcm9wcy5zdWJzY3JpcHRpb259XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Um93IGFsaWduSXRlbXNDZW50ZXIgbWFyZ2luVG9wPXsxNX0gbWFyZ2luQm90dG9tPXs1fSBzdHlsZT17eyB3aWR0aDogXCI1MCVcIiwgaGVpZ2h0OiBcIjQwcHhcIn19PlxuICAgICAgICAgICAgPFZIQnV0dG9uIFxuICAgICAgICAgICAgICBvbkV2ZW50PXtwcm9wcy5vbkV2ZW50fVxuICAgICAgICAgICAgICBsYWJlbD17cHJvcHMuY3RhfVxuICAgICAgICAgICAgICBsZ1xuICAgICAgICAgICAgICBvdXRsaW5lPXtwcm9wcy5vdXRsaW5lQnRufVxuICAgICAgICAgICAgICBwcmltYXJ5PXtwcm9wcy5wcmltYXJ5QnRufVxuICAgICAgICAgICAgICBzZWNvbmRhcnk9e3Byb3BzLnNlY29uZGFyeUJ0bn1cbiAgICAgICAgICAgICAgZnVsbFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8Um93IGhlaWdodD17MjB9IGFsaWduSXRlbXNDZW50ZXI+XG4gICAgICAgICAgICA8VkhUZXh0IFxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9e1wic3VidGl0bGUyXCJ9XG4gICAgICAgICAgICAgICAgY29sb3I9e1wiYmxhY2stNjBcIn1cbiAgICAgICAgICAgICAgICB0ZXh0PXtwcm9wcy5ub3RlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgIDwvUm93PlxuICAgIDwvVkhDYXJkQmFzZT5cbiAgKTtcbn07XG5cblZIQ2FyZFByaWNpbmcuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IFwiXCIsXG4gIHNob3c6IGZhbHNlLFxufTtcblxuVkhDYXJkUHJpY2luZy5wcm9wVHlwZXMgPSB7XG4gIHNob3c6IFByb3BUeXBlcy5ib29sLFxuICBvbkV2ZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNhdmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBlcmlvZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcHJpY2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHVuaXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN1YnNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgY3RhOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBub3RlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZIQ2FyZFByaWNpbmc7Il19