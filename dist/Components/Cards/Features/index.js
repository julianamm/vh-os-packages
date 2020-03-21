"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../../Grid/index");

var _index2 = _interopRequireDefault(require("../../Img/index"));

var _index3 = _interopRequireDefault(require("../../Text/index"));

var _index4 = _interopRequireDefault(require("../../Cards/Base/index"));

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHCardFeatures = function VHCardFeatures(props) {
  return /*#__PURE__*/_react.default.createElement(_index.Container, {
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(_index4.default, {
    noHover: props.noHover
  }, /*#__PURE__*/_react.default.createElement(_index.Row, {
    row: true,
    alignItemsCenter: true,
    height: 300
  }, /*#__PURE__*/_react.default.createElement(S.Group, null, props.features.map(function (feature) {
    return /*#__PURE__*/_react.default.createElement(S.Item, null, /*#__PURE__*/_react.default.createElement(_index.Row, {
      width: 300
    }, /*#__PURE__*/_react.default.createElement(_index.Row, {
      alignItemsCenter: true,
      marginBottom5: true
    }, /*#__PURE__*/_react.default.createElement(_index2.default, {
      source: feature.icon,
      title: feature.title,
      md: true
    })), /*#__PURE__*/_react.default.createElement(_index.Row, {
      alignItemsCenter: true,
      marginBottom5: true
    }, /*#__PURE__*/_react.default.createElement(S.TextWrapper, null, /*#__PURE__*/_react.default.createElement(_index3.default, {
      variant: "h4",
      color: "gray-90",
      text: feature.title
    }))), /*#__PURE__*/_react.default.createElement(_index.Row, {
      alignItemsCenter: true,
      marginBottom5: true
    }, /*#__PURE__*/_react.default.createElement(S.TextWrapper, null, /*#__PURE__*/_react.default.createElement(_index3.default, {
      variant: "bodyweb",
      color: "gray-60",
      text: feature.description
    })))));
  })))));
};

VHCardFeatures.defaultProps = {
  className: '',
  noHover: true
};
VHCardFeatures.prototypes = {
  className: _propTypes.default.string,
  icon: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired,
  description: _propTypes.default.string.isRequired,
  noHover: _propTypes.default.bool
};
var _default = VHCardFeatures;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQ2FyZHMvRmVhdHVyZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIlZIQ2FyZEZlYXR1cmVzIiwicHJvcHMiLCJub0hvdmVyIiwiZmVhdHVyZXMiLCJtYXAiLCJmZWF0dXJlIiwiaWNvbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkZWZhdWx0UHJvcHMiLCJjbGFzc05hbWUiLCJwcm90b3R5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQUMsS0FBSyxFQUFJO0FBQzVCLHNCQUNJLDZCQUFDLGdCQUFEO0FBQVcsSUFBQSxnQkFBZ0I7QUFBM0Isa0JBQ0ksNkJBQUMsZUFBRDtBQUFZLElBQUEsT0FBTyxFQUFFQSxLQUFLLENBQUNDO0FBQTNCLGtCQUNJLDZCQUFDLFVBQUQ7QUFBSyxJQUFBLEdBQUcsTUFBUjtBQUFTLElBQUEsZ0JBQWdCLE1BQXpCO0FBQTBCLElBQUEsTUFBTSxFQUFFO0FBQWxDLGtCQUNJLDZCQUFDLENBQUQsQ0FBRyxLQUFILFFBQ0tELEtBQUssQ0FBQ0UsUUFBTixDQUFlQyxHQUFmLENBQW1CLFVBQUFDLE9BQU87QUFBQSx3QkFDdkIsNkJBQUMsQ0FBRCxDQUFHLElBQUgscUJBQ0ksNkJBQUMsVUFBRDtBQUFLLE1BQUEsS0FBSyxFQUFFO0FBQVosb0JBQ0ksNkJBQUMsVUFBRDtBQUFLLE1BQUEsZ0JBQWdCLE1BQXJCO0FBQXNCLE1BQUEsYUFBYTtBQUFuQyxvQkFDSSw2QkFBQyxlQUFEO0FBQ0ksTUFBQSxNQUFNLEVBQUVBLE9BQU8sQ0FBQ0MsSUFEcEI7QUFFSSxNQUFBLEtBQUssRUFBRUQsT0FBTyxDQUFDRSxLQUZuQjtBQUdJLE1BQUEsRUFBRTtBQUhOLE1BREosQ0FESixlQVFJLDZCQUFDLFVBQUQ7QUFBSyxNQUFBLGdCQUFnQixNQUFyQjtBQUFzQixNQUFBLGFBQWE7QUFBbkMsb0JBQ0ksNkJBQUMsQ0FBRCxDQUFHLFdBQUgscUJBQ0ksNkJBQUMsZUFBRDtBQUNJLE1BQUEsT0FBTyxFQUFFLElBRGI7QUFFSSxNQUFBLEtBQUssRUFBQyxTQUZWO0FBR0ksTUFBQSxJQUFJLEVBQUVGLE9BQU8sQ0FBQ0U7QUFIbEIsTUFESixDQURKLENBUkosZUFpQkksNkJBQUMsVUFBRDtBQUFLLE1BQUEsZ0JBQWdCLE1BQXJCO0FBQXNCLE1BQUEsYUFBYTtBQUFuQyxvQkFDSSw2QkFBQyxDQUFELENBQUcsV0FBSCxxQkFDQSw2QkFBQyxlQUFEO0FBQ0ksTUFBQSxPQUFPLEVBQUUsU0FEYjtBQUVJLE1BQUEsS0FBSyxFQUFDLFNBRlY7QUFHSSxNQUFBLElBQUksRUFBRUYsT0FBTyxDQUFDRztBQUhsQixNQURBLENBREosQ0FqQkosQ0FESixDQUR1QjtBQUFBLEdBQTFCLENBREwsQ0FESixDQURKLENBREosQ0FESjtBQXlDSCxDQTFDRDs7QUE0Q0FSLGNBQWMsQ0FBQ1MsWUFBZixHQUE4QjtBQUMxQkMsRUFBQUEsU0FBUyxFQUFFLEVBRGU7QUFFMUJSLEVBQUFBLE9BQU8sRUFBRTtBQUZpQixDQUE5QjtBQUtBRixjQUFjLENBQUNXLFVBQWYsR0FBNEI7QUFDeEJELEVBQUFBLFNBQVMsRUFBRUUsbUJBQVVDLE1BREc7QUFFeEJQLEVBQUFBLElBQUksRUFBRU0sbUJBQVVDLE1BQVYsQ0FBaUJDLFVBRkM7QUFHeEJQLEVBQUFBLEtBQUssRUFBRUssbUJBQVVDLE1BQVYsQ0FBaUJDLFVBSEE7QUFJeEJOLEVBQUFBLFdBQVcsRUFBRUksbUJBQVVDLE1BQVYsQ0FBaUJDLFVBSk47QUFLeEJaLEVBQUFBLE9BQU8sRUFBRVUsbUJBQVVHO0FBTEssQ0FBNUI7ZUFTZWYsYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUm93LCBDb250YWluZXIgfSBmcm9tICcuLi8uLi8uLi9HcmlkL2luZGV4JztcbmltcG9ydCBWSEltZyBmcm9tICcuLi8uLi9JbWcvaW5kZXgnO1xuaW1wb3J0IFZIVGV4dCBmcm9tIFwiLi4vLi4vVGV4dC9pbmRleFwiO1xuaW1wb3J0IFZIQ2FyZEJhc2UgZnJvbSBcIi4uLy4uL0NhcmRzL0Jhc2UvaW5kZXhcIjtcbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9zdHlsZXMnO1xuXG5jb25zdCBWSENhcmRGZWF0dXJlcyA9IHByb3BzID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGFpbmVyIGFsaWduSXRlbXNDZW50ZXI+XG4gICAgICAgICAgICA8VkhDYXJkQmFzZSBub0hvdmVyPXtwcm9wcy5ub0hvdmVyfT5cbiAgICAgICAgICAgICAgICA8Um93IHJvdyBhbGlnbkl0ZW1zQ2VudGVyIGhlaWdodD17MzAwfT5cbiAgICAgICAgICAgICAgICAgICAgPFMuR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZmVhdHVyZXMubWFwKGZlYXR1cmUgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgd2lkdGg9ezMwMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93IGFsaWduSXRlbXNDZW50ZXIgbWFyZ2luQm90dG9tNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VkhJbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtmZWF0dXJlLmljb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtmZWF0dXJlLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgYWxpZ25JdGVtc0NlbnRlciBtYXJnaW5Cb3R0b201PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTLlRleHRXcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VkhUZXh0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD17XCJoNFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJncmF5LTkwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e2ZlYXR1cmUudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TLlRleHRXcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93IGFsaWduSXRlbXNDZW50ZXIgbWFyZ2luQm90dG9tNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Uy5UZXh0V3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VkhUZXh0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PXtcImJvZHl3ZWJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJncmF5LTYwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17ZmVhdHVyZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUy5UZXh0V3JhcHBlcj4gICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9TLkdyb3VwPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9WSENhcmRCYXNlPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG59XG5cblZIQ2FyZEZlYXR1cmVzLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIG5vSG92ZXI6IHRydWUsXG59XG5cblZIQ2FyZEZlYXR1cmVzLnByb3RvdHlwZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGljb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbm9Ib3ZlcjogUHJvcFR5cGVzLmJvb2wsXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVkhDYXJkRmVhdHVyZXM7Il19