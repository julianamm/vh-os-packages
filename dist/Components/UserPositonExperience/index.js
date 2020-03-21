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
  return /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(S.Wrapper, {
    hideTimeline: props.hideTimeline
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom: 3
  }, /*#__PURE__*/_react.default.createElement(_index2.default, {
    title: props.position,
    description: "".concat(new Date(props.startDate).getFullYear(), " - ").concat(props.endDate ? new Date(props.endDate).getFullYear() : 'Present'),
    onEvent: props.onEvent,
    rightTitle: props.rightTitle,
    className: "vh-user-position-experience ".concat(props.className ? props.className : '')
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom: 3
  }, /*#__PURE__*/_react.default.createElement(_index3.default, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVXNlclBvc2l0b25FeHBlcmllbmNlL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJWSFVzZXJQb3NpdG9uRXhwZXJpZW5jZSIsInByb3BzIiwiaGlkZVRpbWVsaW5lIiwicG9zaXRpb24iLCJEYXRlIiwic3RhcnREYXRlIiwiZ2V0RnVsbFllYXIiLCJlbmREYXRlIiwib25FdmVudCIsInJpZ2h0VGl0bGUiLCJjbGFzc05hbWUiLCJkZXNjcmlwdGlvbiIsImRlZmF1bHRQcm9wcyIsInRyYW5zcGFyZW50Iiwicm91bmQiLCJtYXJnaW5SaWdodCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJoZWFkbGluZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJwZXJpb2QiLCJib29sIiwiYXJyYXkiLCJza2lsbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsQ0FBQUMsS0FBSyxFQUFJO0FBQ3JDLHNCQUNJLDZCQUFDLFNBQUQscUJBQ0ksNkJBQUMsQ0FBRCxDQUFHLE9BQUg7QUFBVyxJQUFBLFlBQVksRUFBRUEsS0FBSyxDQUFDQztBQUEvQixrQkFDSSw2QkFBQyxTQUFEO0FBQUssSUFBQSxZQUFZLEVBQUU7QUFBbkIsa0JBQ0ksNkJBQUMsZUFBRDtBQUNJLElBQUEsS0FBSyxFQUFFRCxLQUFLLENBQUNFLFFBRGpCO0FBRUksSUFBQSxXQUFXLFlBQUssSUFBSUMsSUFBSixDQUFTSCxLQUFLLENBQUNJLFNBQWYsRUFBMEJDLFdBQTFCLEVBQUwsZ0JBQWtETCxLQUFLLENBQUNNLE9BQU4sR0FBZ0IsSUFBSUgsSUFBSixDQUFTSCxLQUFLLENBQUNNLE9BQWYsRUFBd0JELFdBQXhCLEVBQWhCLEdBQXdELFNBQTFHLENBRmY7QUFHSSxJQUFBLE9BQU8sRUFBRUwsS0FBSyxDQUFDTyxPQUhuQjtBQUlJLElBQUEsVUFBVSxFQUFFUCxLQUFLLENBQUNRLFVBSnRCO0FBS0ksSUFBQSxTQUFTLHdDQUFpQ1IsS0FBSyxDQUFDUyxTQUFOLEdBQWtCVCxLQUFLLENBQUNTLFNBQXhCLEdBQW9DLEVBQXJFO0FBTGIsSUFESixDQURKLGVBVUksNkJBQUMsU0FBRDtBQUFLLElBQUEsWUFBWSxFQUFFO0FBQW5CLGtCQUNJLDZCQUFDLGVBQUQ7QUFDSSxJQUFBLE9BQU8sRUFBRVQsS0FBSyxDQUFDTyxPQURuQjtBQUVJLElBQUEsS0FBSyxFQUFFUCxLQUFLLENBQUNVLFdBRmpCO0FBR0ksSUFBQSxLQUFLLEVBQUMsU0FIVjtBQUlJLElBQUEsU0FBUyxtREFBNENWLEtBQUssQ0FBQ1MsU0FBTixHQUFrQlQsS0FBSyxDQUFDUyxTQUF4QixHQUFvQyxFQUFoRjtBQUpiLElBREosQ0FWSixDQURKLENBREo7QUF1Q0gsQ0F4Q0Q7O0FBMENBVix1QkFBdUIsQ0FBQ1ksWUFBeEIsR0FBdUM7QUFDbkNKLEVBQUFBLE9BQU8sRUFBRSxJQUQwQjtBQUVuQ04sRUFBQUEsWUFBWSxFQUFFLEtBRnFCO0FBR25DUSxFQUFBQSxTQUFTLEVBQUUsRUFId0I7QUFJbkNHLEVBQUFBLFdBQVcsRUFBRSxJQUpzQjtBQUtuQ0MsRUFBQUEsS0FBSyxFQUFFLElBTDRCO0FBTW5DQyxFQUFBQSxXQUFXLEVBQUU7QUFOc0IsQ0FBdkM7QUFTQWYsdUJBQXVCLENBQUNnQixTQUF4QixHQUFvQztBQUNoQ1IsRUFBQUEsT0FBTyxFQUFFUyxtQkFBVUMsSUFEYTtBQUVoQ0MsRUFBQUEsUUFBUSxFQUFFRixtQkFBVUcsTUFBVixDQUFpQkMsVUFGSztBQUdoQ0MsRUFBQUEsTUFBTSxFQUFFTCxtQkFBVUcsTUFBVixDQUFpQkMsVUFITztBQUloQ25CLEVBQUFBLFlBQVksRUFBRWUsbUJBQVVNLElBSlE7QUFLaENkLEVBQUFBLFVBQVUsRUFBRVEsbUJBQVVHLE1BTFU7QUFNaENULEVBQUFBLFdBQVcsRUFBRU0sbUJBQVVPLEtBQVYsQ0FBZ0JILFVBTkc7QUFPaENJLEVBQUFBLE1BQU0sRUFBRVIsbUJBQVVPLEtBUGM7QUFRaENkLEVBQUFBLFNBQVMsRUFBRU8sbUJBQVVHO0FBUlcsQ0FBcEM7ZUFXZXBCLHVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBSb3cgfSBmcm9tICcuLi8uLi9HcmlkJztcbmltcG9ydCBWSENoaXAgZnJvbSBcIi4uL0NoaXBzL2luZGV4XCI7XG5pbXBvcnQgVkhCbGFja1RpdGxlRGVzY3JpcHRpb24gZnJvbSBcIi4uL0JsYWNrVGl0bGVEZXNjcmlwdGlvbi9pbmRleFwiO1xuaW1wb3J0IFZISWNvblRpdGxlTGlzdCBmcm9tIFwiLi4vSWNvblRpdGxlTGlzdC9pbmRleFwiO1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL3N0eWxlcyc7XG5cbmNvbnN0IFZIVXNlclBvc2l0b25FeHBlcmllbmNlID0gcHJvcHMgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgICA8Uy5XcmFwcGVyIGhpZGVUaW1lbGluZT17cHJvcHMuaGlkZVRpbWVsaW5lfT5cbiAgICAgICAgICAgICAgICA8Um93IG1hcmdpbkJvdHRvbT17M30+XG4gICAgICAgICAgICAgICAgICAgIDxWSEJsYWNrVGl0bGVEZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3Byb3BzLnBvc2l0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2Ake25ldyBEYXRlKHByb3BzLnN0YXJ0RGF0ZSkuZ2V0RnVsbFllYXIoKX0gLSAke3Byb3BzLmVuZERhdGUgPyBuZXcgRGF0ZShwcm9wcy5lbmREYXRlKS5nZXRGdWxsWWVhcigpIDogJ1ByZXNlbnQnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkV2ZW50PXtwcm9wcy5vbkV2ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRUaXRsZT17cHJvcHMucmlnaHRUaXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHZoLXVzZXItcG9zaXRpb24tZXhwZXJpZW5jZSAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPFJvdyBtYXJnaW5Cb3R0b209ezN9PlxuICAgICAgICAgICAgICAgICAgICA8VkhJY29uVGl0bGVMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkV2ZW50PXtwcm9wcy5vbkV2ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e3Byb3BzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJncmF5LTMwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHZoLXVzZXItcG9zaXRpb24tZXhwZXJpZW5jZS10aXRsZS1saXN0ICR7cHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogJyd9YH1cblxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgIHsvKiA8Um93IHJvdz5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNraWxscy5tYXAoc2tpbGwgPT4oXG4gICAgICAgICAgICAgICAgICAgICAgICA8VkhDaGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3NraWxsLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0hvdmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkV2ZW50PXtwcm9wcy5vbkV2ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHZoLXVzZXItcG9zaXRpb24tZXhwZXJpZW5jZS1jaGlwICR7cHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogJyd9YH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9Sb3c+ICovfVxuICAgICAgICAgICAgPC9TLldyYXBwZXI+XG4gICAgICAgIDwvUm93PlxuXG4gICAgKVxufVxuXG5WSFVzZXJQb3NpdG9uRXhwZXJpZW5jZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgb25FdmVudDogbnVsbCxcbiAgICBoaWRlVGltZWxpbmU6IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogXCJcIixcbiAgICB0cmFuc3BhcmVudDogdHJ1ZSxcbiAgICByb3VuZDogdHJ1ZSxcbiAgICBtYXJnaW5SaWdodDogdHJ1ZVxufTtcblxuVkhVc2VyUG9zaXRvbkV4cGVyaWVuY2UucHJvcFR5cGVzID0ge1xuICAgIG9uRXZlbnQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIGhlYWRsaW5lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcGVyaW9kOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaGlkZVRpbWVsaW5lOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByaWdodFRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICBza2lsbHM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZIVXNlclBvc2l0b25FeHBlcmllbmNlO1xuIl19