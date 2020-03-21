"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../Grid/index");

var _index2 = _interopRequireDefault(require("../../Components/TextHighlightDescriptionImage/index"));

var _index3 = _interopRequireDefault(require("../../Hyperlinks/LinkImage/index"));

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHTextsImageLink = function VHTextsImageLink(props) {
  return /*#__PURE__*/_react.default.createElement(_index.Container, null, /*#__PURE__*/_react.default.createElement(_index.Row, null, /*#__PURE__*/_react.default.createElement(_index2.default, {
    title: props.title,
    highlight: props.highlight,
    description: props.description,
    image: props.image,
    reverse: props.reverseTop
  }), /*#__PURE__*/_react.default.createElement(_index.Container, null, /*#__PURE__*/_react.default.createElement(S.Wrapper, {
    reverse: props.reverseBottom
  }, /*#__PURE__*/_react.default.createElement(_index.Row, {
    width: "50%"
  }, /*#__PURE__*/_react.default.createElement(_index3.default, {
    xsLabel: props.xsLabel,
    smLabel: props.smLabel,
    lgLabel: props.lgLabel,
    label: props.label,
    color: props.color,
    to: props.to,
    source: props.source,
    xsImg: props.xsImg,
    smImg: props.smImg,
    mdImg: props.mdImg,
    lgImg: props.lgImg
  })), /*#__PURE__*/_react.default.createElement(_index.Row, {
    width: "50%"
  })))));
};

VHTextsImageLink.defaultProps = {
  reverseTop: false,
  xsLabel: false,
  smLabel: true,
  lgLabel: false,
  xsImg: false,
  smImg: true,
  mdImg: false,
  lgImg: false,
  reverseBottom: false
};
VHTextsImageLink.prototypes = {
  className: '',
  title: _propTypes.default.string.isRequired,
  highlight: _propTypes.default.string.isRequired,
  description: _propTypes.default.string.isRequired,
  image: _propTypes.default.string.isRequired,
  reverseTop: _propTypes.default.bool,
  smLabel: _propTypes.default.bool,
  xsLabel: _propTypes.default.bool,
  lgLabel: _propTypes.default.bool,
  label: _propTypes.default.string.isRequired,
  color: _propTypes.default.string,
  source: _propTypes.default.string.isRequired,
  xsImg: _propTypes.default.bool,
  smImg: _propTypes.default.bool,
  mdImg: _propTypes.default.bool,
  lgImg: _propTypes.default.bool,
  reverseBottom: _propTypes.default.bool
};
var _default = VHTextsImageLink;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVGV4dHNJbWFnZUxpbmsvaW5kZXguanN4Il0sIm5hbWVzIjpbIlZIVGV4dHNJbWFnZUxpbmsiLCJwcm9wcyIsInRpdGxlIiwiaGlnaGxpZ2h0IiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInJldmVyc2VUb3AiLCJyZXZlcnNlQm90dG9tIiwieHNMYWJlbCIsInNtTGFiZWwiLCJsZ0xhYmVsIiwibGFiZWwiLCJjb2xvciIsInRvIiwic291cmNlIiwieHNJbWciLCJzbUltZyIsIm1kSW1nIiwibGdJbWciLCJkZWZhdWx0UHJvcHMiLCJwcm90b3R5cGVzIiwiY2xhc3NOYW1lIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQUMsS0FBSyxFQUFJO0FBQzlCLHNCQUNJLDZCQUFDLGdCQUFELHFCQUNRLDZCQUFDLFVBQUQscUJBQ0ksNkJBQUMsZUFBRDtBQUNJLElBQUEsS0FBSyxFQUFFQSxLQUFLLENBQUNDLEtBRGpCO0FBRUksSUFBQSxTQUFTLEVBQUVELEtBQUssQ0FBQ0UsU0FGckI7QUFHSSxJQUFBLFdBQVcsRUFBRUYsS0FBSyxDQUFDRyxXQUh2QjtBQUlJLElBQUEsS0FBSyxFQUFFSCxLQUFLLENBQUNJLEtBSmpCO0FBS0ksSUFBQSxPQUFPLEVBQUVKLEtBQUssQ0FBQ0s7QUFMbkIsSUFESixlQVFJLDZCQUFDLGdCQUFELHFCQUNJLDZCQUFDLENBQUQsQ0FBRyxPQUFIO0FBQVcsSUFBQSxPQUFPLEVBQUVMLEtBQUssQ0FBQ007QUFBMUIsa0JBQ0ksNkJBQUMsVUFBRDtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQVosa0JBQ0ksNkJBQUMsZUFBRDtBQUNJLElBQUEsT0FBTyxFQUFFTixLQUFLLENBQUNPLE9BRG5CO0FBRUksSUFBQSxPQUFPLEVBQUVQLEtBQUssQ0FBQ1EsT0FGbkI7QUFHSSxJQUFBLE9BQU8sRUFBRVIsS0FBSyxDQUFDUyxPQUhuQjtBQUlJLElBQUEsS0FBSyxFQUFFVCxLQUFLLENBQUNVLEtBSmpCO0FBS0ksSUFBQSxLQUFLLEVBQUVWLEtBQUssQ0FBQ1csS0FMakI7QUFNSSxJQUFBLEVBQUUsRUFBRVgsS0FBSyxDQUFDWSxFQU5kO0FBT0ksSUFBQSxNQUFNLEVBQUVaLEtBQUssQ0FBQ2EsTUFQbEI7QUFRSSxJQUFBLEtBQUssRUFBRWIsS0FBSyxDQUFDYyxLQVJqQjtBQVNJLElBQUEsS0FBSyxFQUFFZCxLQUFLLENBQUNlLEtBVGpCO0FBVUksSUFBQSxLQUFLLEVBQUVmLEtBQUssQ0FBQ2dCLEtBVmpCO0FBV0ksSUFBQSxLQUFLLEVBQUVoQixLQUFLLENBQUNpQjtBQVhqQixJQURKLENBREosZUFnQkksNkJBQUMsVUFBRDtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQVosSUFoQkosQ0FESixDQVJKLENBRFIsQ0FESjtBQWlDSCxDQWxDRDs7QUFvQ0FsQixnQkFBZ0IsQ0FBQ21CLFlBQWpCLEdBQWdDO0FBQzVCYixFQUFBQSxVQUFVLEVBQUUsS0FEZ0I7QUFFNUJFLEVBQUFBLE9BQU8sRUFBRSxLQUZtQjtBQUc1QkMsRUFBQUEsT0FBTyxFQUFFLElBSG1CO0FBSTVCQyxFQUFBQSxPQUFPLEVBQUUsS0FKbUI7QUFLNUJLLEVBQUFBLEtBQUssRUFBRSxLQUxxQjtBQU01QkMsRUFBQUEsS0FBSyxFQUFFLElBTnFCO0FBTzVCQyxFQUFBQSxLQUFLLEVBQUUsS0FQcUI7QUFRNUJDLEVBQUFBLEtBQUssRUFBRSxLQVJxQjtBQVM1QlgsRUFBQUEsYUFBYSxFQUFFO0FBVGEsQ0FBaEM7QUFZQVAsZ0JBQWdCLENBQUNvQixVQUFqQixHQUE4QjtBQUMxQkMsRUFBQUEsU0FBUyxFQUFFLEVBRGU7QUFFMUJuQixFQUFBQSxLQUFLLEVBQUVvQixtQkFBVUMsTUFBVixDQUFpQkMsVUFGRTtBQUcxQnJCLEVBQUFBLFNBQVMsRUFBRW1CLG1CQUFVQyxNQUFWLENBQWlCQyxVQUhGO0FBSTFCcEIsRUFBQUEsV0FBVyxFQUFFa0IsbUJBQVVDLE1BQVYsQ0FBaUJDLFVBSko7QUFLMUJuQixFQUFBQSxLQUFLLEVBQUVpQixtQkFBVUMsTUFBVixDQUFpQkMsVUFMRTtBQU0xQmxCLEVBQUFBLFVBQVUsRUFBRWdCLG1CQUFVRyxJQU5JO0FBTzFCaEIsRUFBQUEsT0FBTyxFQUFFYSxtQkFBVUcsSUFQTztBQVExQmpCLEVBQUFBLE9BQU8sRUFBRWMsbUJBQVVHLElBUk87QUFTMUJmLEVBQUFBLE9BQU8sRUFBRVksbUJBQVVHLElBVE87QUFVMUJkLEVBQUFBLEtBQUssRUFBRVcsbUJBQVVDLE1BQVYsQ0FBaUJDLFVBVkU7QUFXMUJaLEVBQUFBLEtBQUssRUFBRVUsbUJBQVVDLE1BWFM7QUFZMUJULEVBQUFBLE1BQU0sRUFBRVEsbUJBQVVDLE1BQVYsQ0FBaUJDLFVBWkM7QUFhMUJULEVBQUFBLEtBQUssRUFBRU8sbUJBQVVHLElBYlM7QUFjMUJULEVBQUFBLEtBQUssRUFBRU0sbUJBQVVHLElBZFM7QUFlMUJSLEVBQUFBLEtBQUssRUFBRUssbUJBQVVHLElBZlM7QUFnQjFCUCxFQUFBQSxLQUFLLEVBQUVJLG1CQUFVRyxJQWhCUztBQWlCMUJsQixFQUFBQSxhQUFhLEVBQUVlLG1CQUFVRztBQWpCQyxDQUE5QjtlQW9CZXpCLGdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBSb3csIENvbnRhaW5lciB9IGZyb20gJy4uLy4uL0dyaWQvaW5kZXgnO1xuaW1wb3J0IFZIVGV4dEhpZ2hsaWdodERlc2NyaXB0aW9uSW1hZ2UgZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvVGV4dEhpZ2hsaWdodERlc2NyaXB0aW9uSW1hZ2UvaW5kZXhcIjtcbmltcG9ydCBWSExpbmtJbWFnZSBmcm9tIFwiLi4vLi4vSHlwZXJsaW5rcy9MaW5rSW1hZ2UvaW5kZXhcIjtcbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9zdHlsZXMnO1xuXG5jb25zdCBWSFRleHRzSW1hZ2VMaW5rID0gcHJvcHMgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgPFZIVGV4dEhpZ2hsaWdodERlc2NyaXB0aW9uSW1hZ2UgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17cHJvcHMudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHQ9e3Byb3BzLmhpZ2hsaWdodH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9wcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtwcm9wcy5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldmVyc2U9e3Byb3BzLnJldmVyc2VUb3B9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Uy5XcmFwcGVyIHJldmVyc2U9e3Byb3BzLnJldmVyc2VCb3R0b219PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgd2lkdGg9e1wiNTAlXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VkhMaW5rSW1hZ2UgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4c0xhYmVsPXtwcm9wcy54c0xhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21MYWJlbD17cHJvcHMuc21MYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxnTGFiZWw9e3Byb3BzLmxnTGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17cHJvcHMubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17cHJvcHMuY29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17cHJvcHMudG99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e3Byb3BzLnNvdXJjZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhzSW1nPXtwcm9wcy54c0ltZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtSW1nPXtwcm9wcy5zbUltZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1kSW1nPXtwcm9wcy5tZEltZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxnSW1nPXtwcm9wcy5sZ0ltZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93IHdpZHRoPXtcIjUwJVwifT48L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUy5XcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgKVxufVxuXG5WSFRleHRzSW1hZ2VMaW5rLmRlZmF1bHRQcm9wcyA9IHtcbiAgICByZXZlcnNlVG9wOiBmYWxzZSxcbiAgICB4c0xhYmVsOiBmYWxzZSxcbiAgICBzbUxhYmVsOiB0cnVlLFxuICAgIGxnTGFiZWw6IGZhbHNlLFxuICAgIHhzSW1nOiBmYWxzZSxcbiAgICBzbUltZzogdHJ1ZSxcbiAgICBtZEltZzogZmFsc2UsXG4gICAgbGdJbWc6IGZhbHNlLFxuICAgIHJldmVyc2VCb3R0b206IGZhbHNlLFxufVxuXG5WSFRleHRzSW1hZ2VMaW5rLnByb3RvdHlwZXMgPSB7XG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGhpZ2hsaWdodDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICByZXZlcnNlVG9wOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzbUxhYmVsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB4c0xhYmVsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBsZ0xhYmVsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNvdXJjZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHhzSW1nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzbUltZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgbWRJbWc6IFByb3BUeXBlcy5ib29sLFxuICAgIGxnSW1nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZXZlcnNlQm90dG9tOiBQcm9wVHlwZXMuYm9vbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgVkhUZXh0c0ltYWdlTGluazsiXX0=