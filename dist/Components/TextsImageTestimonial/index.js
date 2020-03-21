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

var _index3 = _interopRequireDefault(require("../../Components/Testimonial/index"));

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHTextsImageTestimonial = function VHTextsImageTestimonial(props) {
  return _react.default.createElement(_index.Container, null, _react.default.createElement(_index.Row, null, _react.default.createElement(_index2.default, {
    title: props.title,
    highlight: props.highlight,
    description: props.description,
    image: props.image,
    reverse: props.reverseTop
  }), _react.default.createElement(_index.Container, null, _react.default.createElement(S.Wrapper, {
    reverse: props.reverseBottom
  }, _react.default.createElement(_index.Row, {
    width: "50%"
  }, _react.default.createElement(_index3.default, {
    image: props.avatar,
    sizeImg: props.sizeAvatar,
    color: props.color,
    testimonial: props.testimonial,
    xsTestimonial: props.xsTestimonial,
    smTestimonial: props.smTestimonial,
    lgTestimonial: props.lgTestimonial
  })), _react.default.createElement(_index.Row, {
    width: "50%"
  })))));
};

VHTextsImageTestimonial.defaultProps = {
  reverseTop: false,
  sizeAvatar: 'md',
  xsTestimonial: false,
  smTestimonial: false,
  lgTestimonial: false,
  reverseBottom: false
};
VHTextsImageTestimonial.prototypes = {
  className: '',
  title: _propTypes.default.string.isRequired,
  highlight: _propTypes.default.string.isRequired,
  description: _propTypes.default.string.isRequired,
  image: _propTypes.default.string.isRequired,
  reverseTop: _propTypes.default.bool,
  avatar: _propTypes.default.string.isRequired,
  sizeAvatar: _propTypes.default.string,
  testimonial: _propTypes.default.string.isRequired,
  color: _propTypes.default.string,
  xsTestimonial: _propTypes.default.bool,
  smTestimonial: _propTypes.default.bool,
  lgTestimonial: _propTypes.default.bool,
  reverseBottom: _propTypes.default.bool
};
var _default = VHTextsImageTestimonial;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVGV4dHNJbWFnZVRlc3RpbW9uaWFsL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJWSFRleHRzSW1hZ2VUZXN0aW1vbmlhbCIsInByb3BzIiwidGl0bGUiLCJoaWdobGlnaHQiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwicmV2ZXJzZVRvcCIsInJldmVyc2VCb3R0b20iLCJhdmF0YXIiLCJzaXplQXZhdGFyIiwiY29sb3IiLCJ0ZXN0aW1vbmlhbCIsInhzVGVzdGltb25pYWwiLCJzbVRlc3RpbW9uaWFsIiwibGdUZXN0aW1vbmlhbCIsImRlZmF1bHRQcm9wcyIsInByb3RvdHlwZXMiLCJjbGFzc05hbWUiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixDQUFBQyxLQUFLLEVBQUk7QUFDckMsU0FDSSw2QkFBQyxnQkFBRCxRQUNRLDZCQUFDLFVBQUQsUUFDSSw2QkFBQyxlQUFEO0FBQ0ksSUFBQSxLQUFLLEVBQUVBLEtBQUssQ0FBQ0MsS0FEakI7QUFFSSxJQUFBLFNBQVMsRUFBRUQsS0FBSyxDQUFDRSxTQUZyQjtBQUdJLElBQUEsV0FBVyxFQUFFRixLQUFLLENBQUNHLFdBSHZCO0FBSUksSUFBQSxLQUFLLEVBQUVILEtBQUssQ0FBQ0ksS0FKakI7QUFLSSxJQUFBLE9BQU8sRUFBRUosS0FBSyxDQUFDSztBQUxuQixJQURKLEVBUUksNkJBQUMsZ0JBQUQsUUFDSSw2QkFBQyxDQUFELENBQUcsT0FBSDtBQUFXLElBQUEsT0FBTyxFQUFFTCxLQUFLLENBQUNNO0FBQTFCLEtBQ0ksNkJBQUMsVUFBRDtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQVosS0FDSSw2QkFBQyxlQUFEO0FBQ0ksSUFBQSxLQUFLLEVBQUVOLEtBQUssQ0FBQ08sTUFEakI7QUFFSSxJQUFBLE9BQU8sRUFBRVAsS0FBSyxDQUFDUSxVQUZuQjtBQUdJLElBQUEsS0FBSyxFQUFFUixLQUFLLENBQUNTLEtBSGpCO0FBSUksSUFBQSxXQUFXLEVBQUVULEtBQUssQ0FBQ1UsV0FKdkI7QUFLSSxJQUFBLGFBQWEsRUFBRVYsS0FBSyxDQUFDVyxhQUx6QjtBQU1JLElBQUEsYUFBYSxFQUFFWCxLQUFLLENBQUNZLGFBTnpCO0FBT0ksSUFBQSxhQUFhLEVBQUVaLEtBQUssQ0FBQ2E7QUFQekIsSUFESixDQURKLEVBWUksNkJBQUMsVUFBRDtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQVosSUFaSixDQURKLENBUkosQ0FEUixDQURKO0FBNkJILENBOUJEOztBQWdDQWQsdUJBQXVCLENBQUNlLFlBQXhCLEdBQXVDO0FBQ25DVCxFQUFBQSxVQUFVLEVBQUUsS0FEdUI7QUFFbkNHLEVBQUFBLFVBQVUsRUFBRSxJQUZ1QjtBQUduQ0csRUFBQUEsYUFBYSxFQUFFLEtBSG9CO0FBSW5DQyxFQUFBQSxhQUFhLEVBQUUsS0FKb0I7QUFLbkNDLEVBQUFBLGFBQWEsRUFBRSxLQUxvQjtBQU1uQ1AsRUFBQUEsYUFBYSxFQUFFO0FBTm9CLENBQXZDO0FBU0FQLHVCQUF1QixDQUFDZ0IsVUFBeEIsR0FBcUM7QUFDakNDLEVBQUFBLFNBQVMsRUFBRSxFQURzQjtBQUVqQ2YsRUFBQUEsS0FBSyxFQUFFZ0IsbUJBQVVDLE1BQVYsQ0FBaUJDLFVBRlM7QUFHakNqQixFQUFBQSxTQUFTLEVBQUVlLG1CQUFVQyxNQUFWLENBQWlCQyxVQUhLO0FBSWpDaEIsRUFBQUEsV0FBVyxFQUFFYyxtQkFBVUMsTUFBVixDQUFpQkMsVUFKRztBQUtqQ2YsRUFBQUEsS0FBSyxFQUFFYSxtQkFBVUMsTUFBVixDQUFpQkMsVUFMUztBQU1qQ2QsRUFBQUEsVUFBVSxFQUFFWSxtQkFBVUcsSUFOVztBQU9qQ2IsRUFBQUEsTUFBTSxFQUFFVSxtQkFBVUMsTUFBVixDQUFpQkMsVUFQUTtBQVFqQ1gsRUFBQUEsVUFBVSxFQUFFUyxtQkFBVUMsTUFSVztBQVNqQ1IsRUFBQUEsV0FBVyxFQUFFTyxtQkFBVUMsTUFBVixDQUFpQkMsVUFURztBQVVqQ1YsRUFBQUEsS0FBSyxFQUFFUSxtQkFBVUMsTUFWZ0I7QUFXakNQLEVBQUFBLGFBQWEsRUFBRU0sbUJBQVVHLElBWFE7QUFZakNSLEVBQUFBLGFBQWEsRUFBRUssbUJBQVVHLElBWlE7QUFhakNQLEVBQUFBLGFBQWEsRUFBRUksbUJBQVVHLElBYlE7QUFjakNkLEVBQUFBLGFBQWEsRUFBRVcsbUJBQVVHO0FBZFEsQ0FBckM7ZUFpQmVyQix1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUm93LCBDb250YWluZXIgfSBmcm9tICcuLi8uLi9HcmlkL2luZGV4JztcbmltcG9ydCBWSFRleHRIaWdobGlnaHREZXNjcmlwdGlvbkltYWdlIGZyb20gXCIuLi8uLi9Db21wb25lbnRzL1RleHRIaWdobGlnaHREZXNjcmlwdGlvbkltYWdlL2luZGV4XCI7XG5pbXBvcnQgVkhUZXN0aW1vbmlhbCBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9UZXN0aW1vbmlhbC9pbmRleFwiO1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL3N0eWxlcyc7XG5cbmNvbnN0IFZIVGV4dHNJbWFnZVRlc3RpbW9uaWFsID0gcHJvcHMgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgPFZIVGV4dEhpZ2hsaWdodERlc2NyaXB0aW9uSW1hZ2UgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17cHJvcHMudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHQ9e3Byb3BzLmhpZ2hsaWdodH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9wcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtwcm9wcy5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldmVyc2U9e3Byb3BzLnJldmVyc2VUb3B9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Uy5XcmFwcGVyIHJldmVyc2U9e3Byb3BzLnJldmVyc2VCb3R0b219PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgd2lkdGg9e1wiNTAlXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VkhUZXN0aW1vbmlhbCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtwcm9wcy5hdmF0YXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplSW1nPXtwcm9wcy5zaXplQXZhdGFyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e3Byb3BzLmNvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVzdGltb25pYWw9e3Byb3BzLnRlc3RpbW9uaWFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeHNUZXN0aW1vbmlhbD17cHJvcHMueHNUZXN0aW1vbmlhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtVGVzdGltb25pYWw9e3Byb3BzLnNtVGVzdGltb25pYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZ1Rlc3RpbW9uaWFsPXtwcm9wcy5sZ1Rlc3RpbW9uaWFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgd2lkdGg9e1wiNTAlXCJ9PjwvUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TLldyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG59XG5cblZIVGV4dHNJbWFnZVRlc3RpbW9uaWFsLmRlZmF1bHRQcm9wcyA9IHtcbiAgICByZXZlcnNlVG9wOiBmYWxzZSxcbiAgICBzaXplQXZhdGFyOiAnbWQnLFxuICAgIHhzVGVzdGltb25pYWw6IGZhbHNlLFxuICAgIHNtVGVzdGltb25pYWw6IGZhbHNlLFxuICAgIGxnVGVzdGltb25pYWw6IGZhbHNlLFxuICAgIHJldmVyc2VCb3R0b206IGZhbHNlLFxufVxuXG5WSFRleHRzSW1hZ2VUZXN0aW1vbmlhbC5wcm90b3R5cGVzID0ge1xuICAgIGNsYXNzTmFtZTogJycsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBoaWdobGlnaHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGltYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcmV2ZXJzZVRvcDogUHJvcFR5cGVzLmJvb2wsXG4gICAgYXZhdGFyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgc2l6ZUF2YXRhcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0ZXN0aW1vbmlhbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHhzVGVzdGltb25pYWw6IFByb3BUeXBlcy5ib29sLFxuICAgIHNtVGVzdGltb25pYWw6IFByb3BUeXBlcy5ib29sLFxuICAgIGxnVGVzdGltb25pYWw6IFByb3BUeXBlcy5ib29sLFxuICAgIHJldmVyc2VCb3R0b206IFByb3BUeXBlcy5ib29sLFxufVxuXG5leHBvcnQgZGVmYXVsdCBWSFRleHRzSW1hZ2VUZXN0aW1vbmlhbDsiXX0=
