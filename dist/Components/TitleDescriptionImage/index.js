"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../Grid/index");

var _index2 = _interopRequireDefault(require("../TitleDescription/index"));

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHTitleDescriptionImage = function VHTitleDescriptionImage(props) {
  return /*#__PURE__*/_react.default.createElement(_index.Row, {
    row: true
  }, /*#__PURE__*/_react.default.createElement(_index.Row, null, /*#__PURE__*/_react.default.createElement(_index2.default, {
    titleColor: props.titleColor,
    descriptionColor: props.descriptionColor,
    titleVariant: props.titleVariant,
    descriptionVariant: props.descriptionVariant,
    title: props.title,
    description: props.description
  })), /*#__PURE__*/_react.default.createElement(_index.Row, null, /*#__PURE__*/_react.default.createElement(S.ImgWrapper, {
    image: props.image
  })));
};

VHTitleDescriptionImage.defaultProps = {
  className: ''
};
VHTitleDescriptionImage.prototypes = {
  className: _propTypes.default.string,
  onEvent: _propTypes.default.func,
  data: _propTypes.default.object,
  titleColor: _propTypes.default.string,
  descriptionColor: _propTypes.default.string,
  titleVariant: _propTypes.default.string,
  descriptionVariant: _propTypes.default.string,
  title: _propTypes.default.string,
  description: _propTypes.default.string,
  image: _propTypes.default.string
};
var _default = VHTitleDescriptionImage;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVGl0bGVEZXNjcmlwdGlvbkltYWdlL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJWSFRpdGxlRGVzY3JpcHRpb25JbWFnZSIsInByb3BzIiwidGl0bGVDb2xvciIsImRlc2NyaXB0aW9uQ29sb3IiLCJ0aXRsZVZhcmlhbnQiLCJkZXNjcmlwdGlvblZhcmlhbnQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJkZWZhdWx0UHJvcHMiLCJjbGFzc05hbWUiLCJwcm90b3R5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwib25FdmVudCIsImZ1bmMiLCJkYXRhIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLENBQUFDLEtBQUssRUFBSTtBQUNyQyxzQkFDSSw2QkFBQyxVQUFEO0FBQUssSUFBQSxHQUFHO0FBQVIsa0JBQ0ksNkJBQUMsVUFBRCxxQkFDSSw2QkFBQyxlQUFEO0FBQ0ksSUFBQSxVQUFVLEVBQUVBLEtBQUssQ0FBQ0MsVUFEdEI7QUFFSSxJQUFBLGdCQUFnQixFQUFFRCxLQUFLLENBQUNFLGdCQUY1QjtBQUdJLElBQUEsWUFBWSxFQUFFRixLQUFLLENBQUNHLFlBSHhCO0FBSUksSUFBQSxrQkFBa0IsRUFBRUgsS0FBSyxDQUFDSSxrQkFKOUI7QUFLSSxJQUFBLEtBQUssRUFBRUosS0FBSyxDQUFDSyxLQUxqQjtBQU1JLElBQUEsV0FBVyxFQUFFTCxLQUFLLENBQUNNO0FBTnZCLElBREosQ0FESixlQVdJLDZCQUFDLFVBQUQscUJBQ0ksNkJBQUMsQ0FBRCxDQUFHLFVBQUg7QUFBYyxJQUFBLEtBQUssRUFBRU4sS0FBSyxDQUFDTztBQUEzQixJQURKLENBWEosQ0FESjtBQWlCSCxDQWxCRDs7QUFvQkFSLHVCQUF1QixDQUFDUyxZQUF4QixHQUF1QztBQUNuQ0MsRUFBQUEsU0FBUyxFQUFFO0FBRHdCLENBQXZDO0FBSUFWLHVCQUF1QixDQUFDVyxVQUF4QixHQUFxQztBQUNqQ0QsRUFBQUEsU0FBUyxFQUFFRSxtQkFBVUMsTUFEWTtBQUVqQ0MsRUFBQUEsT0FBTyxFQUFFRixtQkFBVUcsSUFGYztBQUdqQ0MsRUFBQUEsSUFBSSxFQUFFSixtQkFBVUssTUFIaUI7QUFJakNmLEVBQUFBLFVBQVUsRUFBRVUsbUJBQVVDLE1BSlc7QUFLakNWLEVBQUFBLGdCQUFnQixFQUFFUyxtQkFBVUMsTUFMSztBQU1qQ1QsRUFBQUEsWUFBWSxFQUFFUSxtQkFBVUMsTUFOUztBQU9qQ1IsRUFBQUEsa0JBQWtCLEVBQUVPLG1CQUFVQyxNQVBHO0FBUWpDUCxFQUFBQSxLQUFLLEVBQUVNLG1CQUFVQyxNQVJnQjtBQVNqQ04sRUFBQUEsV0FBVyxFQUFFSyxtQkFBVUMsTUFUVTtBQVVqQ0wsRUFBQUEsS0FBSyxFQUFFSSxtQkFBVUM7QUFWZ0IsQ0FBckM7ZUFhZWIsdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFJvdyB9IGZyb20gJy4uLy4uL0dyaWQvaW5kZXgnO1xuaW1wb3J0IFZIVGl0bGVEZXNjcmlwdGlvbiBmcm9tIFwiLi4vVGl0bGVEZXNjcmlwdGlvbi9pbmRleFwiO1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL3N0eWxlcyc7XG5cbmNvbnN0IFZIVGl0bGVEZXNjcmlwdGlvbkltYWdlID0gcHJvcHMgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxSb3cgcm93PlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8VkhUaXRsZURlc2NyaXB0aW9uIFxuICAgICAgICAgICAgICAgICAgICB0aXRsZUNvbG9yPXtwcm9wcy50aXRsZUNvbG9yfVxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkNvbG9yPXtwcm9wcy5kZXNjcmlwdGlvbkNvbG9yfVxuICAgICAgICAgICAgICAgICAgICB0aXRsZVZhcmlhbnQ9e3Byb3BzLnRpdGxlVmFyaWFudH1cbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25WYXJpYW50PXtwcm9wcy5kZXNjcmlwdGlvblZhcmlhbnR9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9wcy50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Byb3BzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgPFMuSW1nV3JhcHBlciBpbWFnZT17cHJvcHMuaW1hZ2V9Lz5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L1Jvdz5cbiAgICApXG59XG5cblZIVGl0bGVEZXNjcmlwdGlvbkltYWdlLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6ICcnLFxufVxuXG5WSFRpdGxlRGVzY3JpcHRpb25JbWFnZS5wcm90b3R5cGVzID0ge1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkV2ZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkYXRhOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHRpdGxlQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGVzY3JpcHRpb25Db2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0aXRsZVZhcmlhbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGVzY3JpcHRpb25WYXJpYW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGltYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxufVxuXG5leHBvcnQgZGVmYXVsdCBWSFRpdGxlRGVzY3JpcHRpb25JbWFnZTsiXX0=