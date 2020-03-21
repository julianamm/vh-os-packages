"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../Grid/index");

var _index2 = _interopRequireDefault(require("../Text/index"));

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHTextHighlightDescriptionImage = function VHTextHighlightDescriptionImage(props) {
  return /*#__PURE__*/_react.default.createElement(_index.Container, null, /*#__PURE__*/_react.default.createElement(_index.Row, {
    row: true,
    justifySpaceBetween: true
  }, /*#__PURE__*/_react.default.createElement(S.Wrapper, {
    reverse: props.reverse
  }, /*#__PURE__*/_react.default.createElement(_index.Row, {
    width: "50%"
  }, /*#__PURE__*/_react.default.createElement(_index.Row, {
    alignItemsLeft: true,
    marginBottom: 8
  }, /*#__PURE__*/_react.default.createElement(S.UnderlineText, null, /*#__PURE__*/_react.default.createElement(_index2.default, {
    variant: "platform2",
    color: "tertiary-dark",
    text: props.title
  }))), /*#__PURE__*/_react.default.createElement(_index.Row, {
    marginBottom5: true
  }, /*#__PURE__*/_react.default.createElement(_index2.default, {
    variant: "h2",
    color: "gray-90",
    text: props.highlight
  })), /*#__PURE__*/_react.default.createElement(_index.Row, {
    marginBottom5: true
  }, /*#__PURE__*/_react.default.createElement(_index2.default, {
    variant: "bodyweb",
    color: "gray-90",
    text: props.description
  }))), /*#__PURE__*/_react.default.createElement(_index.Row, {
    width: "50%"
  }, /*#__PURE__*/_react.default.createElement(S.ImgWrapper, {
    image: props.image
  })))));
};

VHTextHighlightDescriptionImage.defaultProps = {
  reverse: false
};
VHTextHighlightDescriptionImage.prototypes = {
  className: '',
  title: _propTypes.default.string.isRequired,
  highlight: _propTypes.default.string.isRequired,
  description: _propTypes.default.string.isRequired,
  image: _propTypes.default.string.isRequired,
  reverse: _propTypes.default.bool
};
var _default = VHTextHighlightDescriptionImage;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVGV4dEhpZ2hsaWdodERlc2NyaXB0aW9uSW1hZ2UvaW5kZXguanN4Il0sIm5hbWVzIjpbIlZIVGV4dEhpZ2hsaWdodERlc2NyaXB0aW9uSW1hZ2UiLCJwcm9wcyIsInJldmVyc2UiLCJ0aXRsZSIsImhpZ2hsaWdodCIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJkZWZhdWx0UHJvcHMiLCJwcm90b3R5cGVzIiwiY2xhc3NOYW1lIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLCtCQUErQixHQUFHLFNBQWxDQSwrQkFBa0MsQ0FBQUMsS0FBSyxFQUFJO0FBQzdDLHNCQUNJLDZCQUFDLGdCQUFELHFCQUNJLDZCQUFDLFVBQUQ7QUFBSyxJQUFBLEdBQUcsTUFBUjtBQUFTLElBQUEsbUJBQW1CO0FBQTVCLGtCQUNJLDZCQUFDLENBQUQsQ0FBRyxPQUFIO0FBQVcsSUFBQSxPQUFPLEVBQUVBLEtBQUssQ0FBQ0M7QUFBMUIsa0JBQ0ksNkJBQUMsVUFBRDtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQVosa0JBQ0ksNkJBQUMsVUFBRDtBQUFLLElBQUEsY0FBYyxNQUFuQjtBQUFvQixJQUFBLFlBQVksRUFBRTtBQUFsQyxrQkFDSSw2QkFBQyxDQUFELENBQUcsYUFBSCxxQkFDSSw2QkFBQyxlQUFEO0FBQ0ksSUFBQSxPQUFPLEVBQUUsV0FEYjtBQUVJLElBQUEsS0FBSyxFQUFDLGVBRlY7QUFHSSxJQUFBLElBQUksRUFBRUQsS0FBSyxDQUFDRTtBQUhoQixJQURKLENBREosQ0FESixlQVVJLDZCQUFDLFVBQUQ7QUFBSyxJQUFBLGFBQWE7QUFBbEIsa0JBQ0ksNkJBQUMsZUFBRDtBQUNJLElBQUEsT0FBTyxFQUFFLElBRGI7QUFFSSxJQUFBLEtBQUssRUFBQyxTQUZWO0FBR0ksSUFBQSxJQUFJLEVBQUVGLEtBQUssQ0FBQ0c7QUFIaEIsSUFESixDQVZKLGVBaUJJLDZCQUFDLFVBQUQ7QUFBSyxJQUFBLGFBQWE7QUFBbEIsa0JBQ0ksNkJBQUMsZUFBRDtBQUNJLElBQUEsT0FBTyxFQUFFLFNBRGI7QUFFSSxJQUFBLEtBQUssRUFBQyxTQUZWO0FBR0ksSUFBQSxJQUFJLEVBQUVILEtBQUssQ0FBQ0k7QUFIaEIsSUFESixDQWpCSixDQURKLGVBMEJJLDZCQUFDLFVBQUQ7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFaLGtCQUNJLDZCQUFDLENBQUQsQ0FBRyxVQUFIO0FBQWMsSUFBQSxLQUFLLEVBQUVKLEtBQUssQ0FBQ0s7QUFBM0IsSUFESixDQTFCSixDQURKLENBREosQ0FESjtBQW9DSCxDQXJDRDs7QUF1Q0FOLCtCQUErQixDQUFDTyxZQUFoQyxHQUErQztBQUMzQ0wsRUFBQUEsT0FBTyxFQUFFO0FBRGtDLENBQS9DO0FBSUFGLCtCQUErQixDQUFDUSxVQUFoQyxHQUE2QztBQUN6Q0MsRUFBQUEsU0FBUyxFQUFFLEVBRDhCO0FBRXpDTixFQUFBQSxLQUFLLEVBQUVPLG1CQUFVQyxNQUFWLENBQWlCQyxVQUZpQjtBQUd6Q1IsRUFBQUEsU0FBUyxFQUFFTSxtQkFBVUMsTUFBVixDQUFpQkMsVUFIYTtBQUl6Q1AsRUFBQUEsV0FBVyxFQUFFSyxtQkFBVUMsTUFBVixDQUFpQkMsVUFKVztBQUt6Q04sRUFBQUEsS0FBSyxFQUFFSSxtQkFBVUMsTUFBVixDQUFpQkMsVUFMaUI7QUFNekNWLEVBQUFBLE9BQU8sRUFBRVEsbUJBQVVHO0FBTnNCLENBQTdDO2VBU2ViLCtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBSb3csIENvbnRhaW5lciB9IGZyb20gJy4uLy4uL0dyaWQvaW5kZXgnO1xuaW1wb3J0IFZIVGV4dCBmcm9tIFwiLi4vVGV4dC9pbmRleFwiO1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL3N0eWxlcyc7XG5cbmNvbnN0IFZIVGV4dEhpZ2hsaWdodERlc2NyaXB0aW9uSW1hZ2UgPSBwcm9wcyA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxSb3cgcm93IGp1c3RpZnlTcGFjZUJldHdlZW4+XG4gICAgICAgICAgICAgICAgPFMuV3JhcHBlciByZXZlcnNlPXtwcm9wcy5yZXZlcnNlfT5cbiAgICAgICAgICAgICAgICAgICAgPFJvdyB3aWR0aD17XCI1MCVcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93IGFsaWduSXRlbXNMZWZ0IG1hcmdpbkJvdHRvbT17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFMuVW5kZXJsaW5lVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZIVGV4dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9e1wicGxhdGZvcm0yXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRlcnRpYXJ5LWRhcmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17cHJvcHMudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TLlVuZGVybGluZVRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgbWFyZ2luQm90dG9tNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VkhUZXh0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PXtcImgyXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZ3JheS05MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e3Byb3BzLmhpZ2hsaWdodH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgbWFyZ2luQm90dG9tNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VkhUZXh0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PXtcImJvZHl3ZWJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJncmF5LTkwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17cHJvcHMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICA8Um93IHdpZHRoPXtcIjUwJVwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTLkltZ1dyYXBwZXIgaW1hZ2U9e3Byb3BzLmltYWdlfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgIDwvUy5XcmFwcGVyPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbn1cblxuVkhUZXh0SGlnaGxpZ2h0RGVzY3JpcHRpb25JbWFnZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgcmV2ZXJzZTogZmFsc2UsXG59XG5cblZIVGV4dEhpZ2hsaWdodERlc2NyaXB0aW9uSW1hZ2UucHJvdG90eXBlcyA9IHtcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaGlnaGxpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBpbWFnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHJldmVyc2U6IFByb3BUeXBlcy5ib29sXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZIVGV4dEhpZ2hsaWdodERlc2NyaXB0aW9uSW1hZ2U7Il19