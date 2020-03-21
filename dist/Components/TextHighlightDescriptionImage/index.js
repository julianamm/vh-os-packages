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
  return _react.default.createElement(_index.Container, null, _react.default.createElement(_index.Row, {
    row: true,
    justifySpaceBetween: true
  }, _react.default.createElement(S.Wrapper, {
    reverse: props.reverse
  }, _react.default.createElement(_index.Row, {
    width: "50%"
  }, _react.default.createElement(_index.Row, {
    alignItemsLeft: true,
    marginBottom: 8
  }, _react.default.createElement(S.UnderlineText, null, _react.default.createElement(_index2.default, {
    variant: "platform2",
    color: "tertiary-dark",
    text: props.title
  }))), _react.default.createElement(_index.Row, {
    marginBottom5: true
  }, _react.default.createElement(_index2.default, {
    variant: "h2",
    color: "gray-90",
    text: props.highlight
  })), _react.default.createElement(_index.Row, {
    marginBottom5: true
  }, _react.default.createElement(_index2.default, {
    variant: "bodyweb",
    color: "gray-90",
    text: props.description
  }))), _react.default.createElement(_index.Row, {
    width: "50%"
  }, _react.default.createElement(S.ImgWrapper, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVGV4dEhpZ2hsaWdodERlc2NyaXB0aW9uSW1hZ2UvaW5kZXguanN4Il0sIm5hbWVzIjpbIlZIVGV4dEhpZ2hsaWdodERlc2NyaXB0aW9uSW1hZ2UiLCJwcm9wcyIsInJldmVyc2UiLCJ0aXRsZSIsImhpZ2hsaWdodCIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJkZWZhdWx0UHJvcHMiLCJwcm90b3R5cGVzIiwiY2xhc3NOYW1lIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLCtCQUErQixHQUFHLFNBQWxDQSwrQkFBa0MsQ0FBQUMsS0FBSyxFQUFJO0FBQzdDLFNBQ0ksNkJBQUMsZ0JBQUQsUUFDSSw2QkFBQyxVQUFEO0FBQUssSUFBQSxHQUFHLE1BQVI7QUFBUyxJQUFBLG1CQUFtQjtBQUE1QixLQUNJLDZCQUFDLENBQUQsQ0FBRyxPQUFIO0FBQVcsSUFBQSxPQUFPLEVBQUVBLEtBQUssQ0FBQ0M7QUFBMUIsS0FDSSw2QkFBQyxVQUFEO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBWixLQUNJLDZCQUFDLFVBQUQ7QUFBSyxJQUFBLGNBQWMsTUFBbkI7QUFBb0IsSUFBQSxZQUFZLEVBQUU7QUFBbEMsS0FDSSw2QkFBQyxDQUFELENBQUcsYUFBSCxRQUNJLDZCQUFDLGVBQUQ7QUFDSSxJQUFBLE9BQU8sRUFBRSxXQURiO0FBRUksSUFBQSxLQUFLLEVBQUMsZUFGVjtBQUdJLElBQUEsSUFBSSxFQUFFRCxLQUFLLENBQUNFO0FBSGhCLElBREosQ0FESixDQURKLEVBVUksNkJBQUMsVUFBRDtBQUFLLElBQUEsYUFBYTtBQUFsQixLQUNJLDZCQUFDLGVBQUQ7QUFDSSxJQUFBLE9BQU8sRUFBRSxJQURiO0FBRUksSUFBQSxLQUFLLEVBQUMsU0FGVjtBQUdJLElBQUEsSUFBSSxFQUFFRixLQUFLLENBQUNHO0FBSGhCLElBREosQ0FWSixFQWlCSSw2QkFBQyxVQUFEO0FBQUssSUFBQSxhQUFhO0FBQWxCLEtBQ0ksNkJBQUMsZUFBRDtBQUNJLElBQUEsT0FBTyxFQUFFLFNBRGI7QUFFSSxJQUFBLEtBQUssRUFBQyxTQUZWO0FBR0ksSUFBQSxJQUFJLEVBQUVILEtBQUssQ0FBQ0k7QUFIaEIsSUFESixDQWpCSixDQURKLEVBMEJJLDZCQUFDLFVBQUQ7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFaLEtBQ0ksNkJBQUMsQ0FBRCxDQUFHLFVBQUg7QUFBYyxJQUFBLEtBQUssRUFBRUosS0FBSyxDQUFDSztBQUEzQixJQURKLENBMUJKLENBREosQ0FESixDQURKO0FBb0NILENBckNEOztBQXVDQU4sK0JBQStCLENBQUNPLFlBQWhDLEdBQStDO0FBQzNDTCxFQUFBQSxPQUFPLEVBQUU7QUFEa0MsQ0FBL0M7QUFJQUYsK0JBQStCLENBQUNRLFVBQWhDLEdBQTZDO0FBQ3pDQyxFQUFBQSxTQUFTLEVBQUUsRUFEOEI7QUFFekNOLEVBQUFBLEtBQUssRUFBRU8sbUJBQVVDLE1BQVYsQ0FBaUJDLFVBRmlCO0FBR3pDUixFQUFBQSxTQUFTLEVBQUVNLG1CQUFVQyxNQUFWLENBQWlCQyxVQUhhO0FBSXpDUCxFQUFBQSxXQUFXLEVBQUVLLG1CQUFVQyxNQUFWLENBQWlCQyxVQUpXO0FBS3pDTixFQUFBQSxLQUFLLEVBQUVJLG1CQUFVQyxNQUFWLENBQWlCQyxVQUxpQjtBQU16Q1YsRUFBQUEsT0FBTyxFQUFFUSxtQkFBVUc7QUFOc0IsQ0FBN0M7ZUFTZWIsK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFJvdywgQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vR3JpZC9pbmRleCc7XG5pbXBvcnQgVkhUZXh0IGZyb20gXCIuLi9UZXh0L2luZGV4XCI7XG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vc3R5bGVzJztcblxuY29uc3QgVkhUZXh0SGlnaGxpZ2h0RGVzY3JpcHRpb25JbWFnZSA9IHByb3BzID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgPFJvdyByb3cganVzdGlmeVNwYWNlQmV0d2Vlbj5cbiAgICAgICAgICAgICAgICA8Uy5XcmFwcGVyIHJldmVyc2U9e3Byb3BzLnJldmVyc2V9PlxuICAgICAgICAgICAgICAgICAgICA8Um93IHdpZHRoPXtcIjUwJVwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgYWxpZ25JdGVtc0xlZnQgbWFyZ2luQm90dG9tPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Uy5VbmRlcmxpbmVUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VkhUZXh0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD17XCJwbGF0Zm9ybTJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGVydGlhcnktZGFya1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtwcm9wcy50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1MuVW5kZXJsaW5lVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBtYXJnaW5Cb3R0b201PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWSFRleHQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9e1wiaDJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJncmF5LTkwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17cHJvcHMuaGlnaGxpZ2h0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+ICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBtYXJnaW5Cb3R0b201PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWSFRleHQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9e1wiYm9keXdlYlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImdyYXktOTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtwcm9wcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDxSb3cgd2lkdGg9e1wiNTAlXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFMuSW1nV3JhcHBlciBpbWFnZT17cHJvcHMuaW1hZ2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPC9TLldyYXBwZXI+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgKVxufVxuXG5WSFRleHRIaWdobGlnaHREZXNjcmlwdGlvbkltYWdlLmRlZmF1bHRQcm9wcyA9IHtcbiAgICByZXZlcnNlOiBmYWxzZSxcbn1cblxuVkhUZXh0SGlnaGxpZ2h0RGVzY3JpcHRpb25JbWFnZS5wcm90b3R5cGVzID0ge1xuICAgIGNsYXNzTmFtZTogJycsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBoaWdobGlnaHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGltYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcmV2ZXJzZTogUHJvcFR5cGVzLmJvb2xcbn1cblxuZXhwb3J0IGRlZmF1bHQgVkhUZXh0SGlnaGxpZ2h0RGVzY3JpcHRpb25JbWFnZTsiXX0=