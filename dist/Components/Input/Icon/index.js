"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var S = _interopRequireWildcard(require("./styles"));

var _Simple = _interopRequireDefault(require("../Simple"));

var _Icon = _interopRequireDefault(require("../../Icon"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHInputIcon = function VHInputIcon(props) {
  return /*#__PURE__*/_react.default.createElement(S.Wrapper, {
    className: "vh-icon-input ".concat(props.className ? props.className : ''),
    loading: props.loading,
    error: props.error
  }, !props.loading && /*#__PURE__*/_react.default.createElement(_Icon.default, {
    className: "vh-icon-with-input-icon",
    icon: props.icon
  }), /*#__PURE__*/_react.default.createElement(_Simple.default, {
    disabled: props.disabled,
    error: props.error,
    loading: props.loading,
    placeholder: props.placeholder,
    data: props.data,
    value: props.value,
    onEvent: props.onEvent,
    noBorder: !props.loading
  }));
};

VHInputIcon.defaultProps = {
  iconColor: "black-100",
  textColor: "black-100",
  textVariant: "platform1",
  onEvent: null,
  data: null,
  placeholder: "",
  value: "",
  className: ''
};
VHInputIcon.propTypes = {
  iconColor: _propTypes.default.string,
  textColor: _propTypes.default.string,
  textVariant: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  onEvent: _propTypes.default.func.isRequired,
  data: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  value: _propTypes.default.string,
  icon: _propTypes.default.string,
  className: _propTypes.default.string
};
var _default = VHInputIcon;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvSW5wdXQvSWNvbi9pbmRleC5qc3giXSwibmFtZXMiOlsiVkhJbnB1dEljb24iLCJwcm9wcyIsImNsYXNzTmFtZSIsImxvYWRpbmciLCJlcnJvciIsImljb24iLCJkaXNhYmxlZCIsInBsYWNlaG9sZGVyIiwiZGF0YSIsInZhbHVlIiwib25FdmVudCIsImRlZmF1bHRQcm9wcyIsImljb25Db2xvciIsInRleHRDb2xvciIsInRleHRWYXJpYW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsImZ1bmMiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFHQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBQyxLQUFLLEVBQUk7QUFFM0Isc0JBQ0UsNkJBQUMsQ0FBRCxDQUFHLE9BQUg7QUFDRSxJQUFBLFNBQVMsMEJBQW1CQSxLQUFLLENBQUNDLFNBQU4sR0FBa0JELEtBQUssQ0FBQ0MsU0FBeEIsR0FBb0MsRUFBdkQsQ0FEWDtBQUVFLElBQUEsT0FBTyxFQUFFRCxLQUFLLENBQUNFLE9BRmpCO0FBR0UsSUFBQSxLQUFLLEVBQUVGLEtBQUssQ0FBQ0c7QUFIZixLQU1JLENBQUNILEtBQUssQ0FBQ0UsT0FBUCxpQkFDRSw2QkFBQyxhQUFEO0FBQ0UsSUFBQSxTQUFTLEVBQUMseUJBRFo7QUFFRSxJQUFBLElBQUksRUFBRUYsS0FBSyxDQUFDSTtBQUZkLElBUE4sZUFhRSw2QkFBQyxlQUFEO0FBQ0UsSUFBQSxRQUFRLEVBQUVKLEtBQUssQ0FBQ0ssUUFEbEI7QUFFRSxJQUFBLEtBQUssRUFBRUwsS0FBSyxDQUFDRyxLQUZmO0FBR0UsSUFBQSxPQUFPLEVBQUVILEtBQUssQ0FBQ0UsT0FIakI7QUFJRSxJQUFBLFdBQVcsRUFBRUYsS0FBSyxDQUFDTSxXQUpyQjtBQUtFLElBQUEsSUFBSSxFQUFFTixLQUFLLENBQUNPLElBTGQ7QUFNRSxJQUFBLEtBQUssRUFBRVAsS0FBSyxDQUFDUSxLQU5mO0FBT0UsSUFBQSxPQUFPLEVBQUVSLEtBQUssQ0FBQ1MsT0FQakI7QUFRRSxJQUFBLFFBQVEsRUFBRSxDQUFDVCxLQUFLLENBQUNFO0FBUm5CLElBYkYsQ0FERjtBQXlCRCxDQTNCRDs7QUE2QkFILFdBQVcsQ0FBQ1csWUFBWixHQUEyQjtBQUN6QkMsRUFBQUEsU0FBUyxFQUFFLFdBRGM7QUFFekJDLEVBQUFBLFNBQVMsRUFBRSxXQUZjO0FBR3pCQyxFQUFBQSxXQUFXLEVBQUUsV0FIWTtBQUl6QkosRUFBQUEsT0FBTyxFQUFFLElBSmdCO0FBS3pCRixFQUFBQSxJQUFJLEVBQUUsSUFMbUI7QUFNekJELEVBQUFBLFdBQVcsRUFBRSxFQU5ZO0FBT3pCRSxFQUFBQSxLQUFLLEVBQUUsRUFQa0I7QUFRekJQLEVBQUFBLFNBQVMsRUFBRTtBQVJjLENBQTNCO0FBV0FGLFdBQVcsQ0FBQ2UsU0FBWixHQUF3QjtBQUN0QkgsRUFBQUEsU0FBUyxFQUFHSSxtQkFBVUMsTUFEQTtBQUV0QkosRUFBQUEsU0FBUyxFQUFHRyxtQkFBVUMsTUFGQTtBQUd0QkgsRUFBQUEsV0FBVyxFQUFFRSxtQkFBVUMsTUFIRDtBQUl0QlgsRUFBQUEsUUFBUSxFQUFFVSxtQkFBVUUsSUFKRTtBQUt0QlIsRUFBQUEsT0FBTyxFQUFFTSxtQkFBVUcsSUFBVixDQUFlQyxVQUxGO0FBTXRCWixFQUFBQSxJQUFJLEVBQUVRLG1CQUFVQyxNQU5NO0FBT3RCVixFQUFBQSxXQUFXLEVBQUVTLG1CQUFVQyxNQVBEO0FBUXRCUixFQUFBQSxLQUFLLEVBQUVPLG1CQUFVQyxNQVJLO0FBU3RCWixFQUFBQSxJQUFJLEVBQUVXLG1CQUFVQyxNQVRNO0FBVXRCZixFQUFBQSxTQUFTLEVBQUVjLG1CQUFVQztBQVZDLENBQXhCO2VBYWVqQixXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0ICogYXMgUyBmcm9tIFwiLi9zdHlsZXNcIlxuaW1wb3J0IFZISW5wdXQgZnJvbSAnLi4vU2ltcGxlJ1xuaW1wb3J0IFZISWNvbiBmcm9tICcuLi8uLi9JY29uJ1xuXG5cbmNvbnN0IFZISW5wdXRJY29uID0gcHJvcHMgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPFMuV3JhcHBlclxuICAgICAgY2xhc3NOYW1lPXtgdmgtaWNvbi1pbnB1dCAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9XG4gICAgICBsb2FkaW5nPXtwcm9wcy5sb2FkaW5nfVxuICAgICAgZXJyb3I9e3Byb3BzLmVycm9yfVxuICAgID5cbiAgICAgIHtcbiAgICAgICAgIXByb3BzLmxvYWRpbmcgJiYgKFxuICAgICAgICAgIDxWSEljb25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInZoLWljb24td2l0aC1pbnB1dC1pY29uXCJcbiAgICAgICAgICAgIGljb249e3Byb3BzLmljb259XG4gICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgPFZISW5wdXRcbiAgICAgICAgZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfVxuICAgICAgICBlcnJvcj17cHJvcHMuZXJyb3J9XG4gICAgICAgIGxvYWRpbmc9e3Byb3BzLmxvYWRpbmd9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlcn1cbiAgICAgICAgZGF0YT17cHJvcHMuZGF0YX1cbiAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxuICAgICAgICBvbkV2ZW50PXtwcm9wcy5vbkV2ZW50fVxuICAgICAgICBub0JvcmRlcj17IXByb3BzLmxvYWRpbmd9IC8+XG4gICAgPC9TLldyYXBwZXI+XG4gIClcbn1cblxuVkhJbnB1dEljb24uZGVmYXVsdFByb3BzID0ge1xuICBpY29uQ29sb3I6IFwiYmxhY2stMTAwXCIsXG4gIHRleHRDb2xvcjogXCJibGFjay0xMDBcIixcbiAgdGV4dFZhcmlhbnQ6IFwicGxhdGZvcm0xXCIsXG4gIG9uRXZlbnQ6IG51bGwsXG4gIGRhdGE6IG51bGwsXG4gIHBsYWNlaG9sZGVyOiBcIlwiLFxuICB2YWx1ZTogXCJcIixcbiAgY2xhc3NOYW1lOiAnJyxcbn1cblxuVkhJbnB1dEljb24ucHJvcFR5cGVzID0ge1xuICBpY29uQ29sb3I6ICBQcm9wVHlwZXMuc3RyaW5nLFxuICB0ZXh0Q29sb3I6ICBQcm9wVHlwZXMuc3RyaW5nLFxuICB0ZXh0VmFyaWFudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBvbkV2ZW50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBkYXRhOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgVkhJbnB1dEljb25cbiJdfQ==