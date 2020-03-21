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
  return /*#__PURE__*/_react.default.createElement(_Base.default, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    height: 25,
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(S.Wrapper, {
    show: props.show
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    onEvent: props.onEvent,
    label: props.save,
    round: true,
    secondary: props.secondaryChip,
    transparent: props.transparentChip,
    noHover: props.noHoverChip,
    marginRight: props.marginRight
  }))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    alignItemsCenter: true,
    marginTop: 15,
    marginBottom: 5
  }, /*#__PURE__*/_react.default.createElement(_index2.default, {
    variant: "h4",
    color: "black-60",
    text: props.period
  })), /*#__PURE__*/_react.default.createElement(_index2.default, {
    variant: "h1",
    color: "primary-dark",
    text: props.price
  }), /*#__PURE__*/_react.default.createElement(_index2.default, {
    variant: "subtitle3",
    color: "primary-dark",
    text: props.unit
  }), /*#__PURE__*/_react.default.createElement(_index2.default, {
    variant: "subtitle3",
    color: "black-60",
    text: props.subscription
  }), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    alignItemsCenter: true,
    marginTop: 15,
    marginBottom: 5,
    style: {
      width: "50%",
      height: "40px"
    }
  }, /*#__PURE__*/_react.default.createElement(_index3.default, {
    onEvent: props.onEvent,
    label: props.cta,
    lg: true,
    outline: props.outlineBtn,
    primary: props.primaryBtn,
    secondary: props.secondaryBtn,
    full: true
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    height: 20,
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(_index2.default, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQ2FyZHMvUHJpY2luZy9pbmRleC5qc3giXSwibmFtZXMiOlsiVkhDYXJkUHJpY2luZyIsInByb3BzIiwic2hvdyIsIm9uRXZlbnQiLCJzYXZlIiwic2Vjb25kYXJ5Q2hpcCIsInRyYW5zcGFyZW50Q2hpcCIsIm5vSG92ZXJDaGlwIiwibWFyZ2luUmlnaHQiLCJwZXJpb2QiLCJwcmljZSIsInVuaXQiLCJzdWJzY3JpcHRpb24iLCJ3aWR0aCIsImhlaWdodCIsImN0YSIsIm91dGxpbmVCdG4iLCJwcmltYXJ5QnRuIiwic2Vjb25kYXJ5QnRuIiwibm90ZSIsImRlZmF1bHRQcm9wcyIsImNsYXNzTmFtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJmdW5jIiwibGFiZWwiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUMsS0FBSyxFQUFJO0FBQzdCLHNCQUNFLDZCQUFDLGFBQUQscUJBQ0UsNkJBQUMsU0FBRDtBQUFLLElBQUEsZ0JBQWdCO0FBQXJCLGtCQUNJLDZCQUFDLFNBQUQ7QUFBSyxJQUFBLE1BQU0sRUFBRSxFQUFiO0FBQWlCLElBQUEsZ0JBQWdCO0FBQWpDLGtCQUNFLDZCQUFDLENBQUQsQ0FBRyxPQUFIO0FBQVcsSUFBQSxJQUFJLEVBQUVBLEtBQUssQ0FBQ0M7QUFBdkIsa0JBQ0ksNkJBQUMsY0FBRDtBQUNBLElBQUEsT0FBTyxFQUFFRCxLQUFLLENBQUNFLE9BRGY7QUFFQSxJQUFBLEtBQUssRUFBRUYsS0FBSyxDQUFDRyxJQUZiO0FBR0EsSUFBQSxLQUFLLE1BSEw7QUFJQSxJQUFBLFNBQVMsRUFBRUgsS0FBSyxDQUFDSSxhQUpqQjtBQUtBLElBQUEsV0FBVyxFQUFFSixLQUFLLENBQUNLLGVBTG5C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RyxDQUExQjtlQWNlM0IsYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IFJvdyB9IGZyb20gXCIuLi8uLi8uLi9HcmlkXCI7XG5pbXBvcnQgVkhDYXJkQmFzZSBmcm9tIFwiLi4vQmFzZVwiO1xuaW1wb3J0IFZIQ2hpcHMgZnJvbSBcIi4uLy4uL0NoaXBzL2luZGV4XCI7XG5pbXBvcnQgVkhUZXh0IGZyb20gXCIuLi8uLi9UZXh0L2luZGV4XCI7XG5pbXBvcnQgVkhCdXR0b24gZnJvbSBcIi4uLy4uL0J1dHRvbi9pbmRleFwiO1xuaW1wb3J0ICogYXMgUyBmcm9tIFwiLi9zdHlsZXNcIjtcblxuY29uc3QgVkhDYXJkUHJpY2luZyA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8VkhDYXJkQmFzZT5cbiAgICAgIDxSb3cgYWxpZ25JdGVtc0NlbnRlcj5cbiAgICAgICAgICA8Um93IGhlaWdodD17MjV9IGFsaWduSXRlbXNDZW50ZXI+XG4gICAgICAgICAgICA8Uy5XcmFwcGVyIHNob3c9e3Byb3BzLnNob3d9PlxuICAgICAgICAgICAgICAgIDxWSENoaXBzXG4gICAgICAgICAgICAgICAgb25FdmVudD17cHJvcHMub25FdmVudH1cbiAgICAgICAgICAgICAgICBsYWJlbD17cHJvcHMuc2F2ZX1cbiAgICAgICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgICAgIHNlY29uZGFyeT17cHJvcHMuc2Vjb25kYXJ5Q2hpcH1cbiAgICAgICAgICAgICAgICB0cmFuc3BhcmVudD17cHJvcHMudHJhbnNwYXJlbnRDaGlwfVxuICAgICAgICAgICAgICAgIG5vSG92ZXI9e3Byb3BzLm5vSG92ZXJDaGlwfVxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0PXtwcm9wcy5tYXJnaW5SaWdodH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9TLldyYXBwZXI+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPFJvdyBhbGlnbkl0ZW1zQ2VudGVyIG1hcmdpblRvcD17MTV9IG1hcmdpbkJvdHRvbT17NX0+XG4gICAgICAgICAgICA8VkhUZXh0IFxuICAgICAgICAgICAgICB2YXJpYW50PXtcImg0XCJ9XG4gICAgICAgICAgICAgIGNvbG9yPXtcImJsYWNrLTYwXCJ9XG4gICAgICAgICAgICAgIHRleHQ9e3Byb3BzLnBlcmlvZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPFZIVGV4dCBcbiAgICAgICAgICAgIHZhcmlhbnQ9e1wiaDFcIn1cbiAgICAgICAgICAgIGNvbG9yPXtcInByaW1hcnktZGFya1wifVxuICAgICAgICAgICAgdGV4dD17cHJvcHMucHJpY2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8VkhUZXh0IFxuICAgICAgICAgICAgdmFyaWFudD17XCJzdWJ0aXRsZTNcIn1cbiAgICAgICAgICAgIGNvbG9yPXtcInByaW1hcnktZGFya1wifVxuICAgICAgICAgICAgdGV4dD17cHJvcHMudW5pdH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxWSFRleHQgXG4gICAgICAgICAgICB2YXJpYW50PXtcInN1YnRpdGxlM1wifVxuICAgICAgICAgICAgY29sb3I9e1wiYmxhY2stNjBcIn1cbiAgICAgICAgICAgIHRleHQ9e3Byb3BzLnN1YnNjcmlwdGlvbn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxSb3cgYWxpZ25JdGVtc0NlbnRlciBtYXJnaW5Ub3A9ezE1fSBtYXJnaW5Cb3R0b209ezV9IHN0eWxlPXt7IHdpZHRoOiBcIjUwJVwiLCBoZWlnaHQ6IFwiNDBweFwifX0+XG4gICAgICAgICAgICA8VkhCdXR0b24gXG4gICAgICAgICAgICAgIG9uRXZlbnQ9e3Byb3BzLm9uRXZlbnR9XG4gICAgICAgICAgICAgIGxhYmVsPXtwcm9wcy5jdGF9XG4gICAgICAgICAgICAgIGxnXG4gICAgICAgICAgICAgIG91dGxpbmU9e3Byb3BzLm91dGxpbmVCdG59XG4gICAgICAgICAgICAgIHByaW1hcnk9e3Byb3BzLnByaW1hcnlCdG59XG4gICAgICAgICAgICAgIHNlY29uZGFyeT17cHJvcHMuc2Vjb25kYXJ5QnRufVxuICAgICAgICAgICAgICBmdWxsXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDxSb3cgaGVpZ2h0PXsyMH0gYWxpZ25JdGVtc0NlbnRlcj5cbiAgICAgICAgICAgIDxWSFRleHQgXG4gICAgICAgICAgICAgICAgdmFyaWFudD17XCJzdWJ0aXRsZTJcIn1cbiAgICAgICAgICAgICAgICBjb2xvcj17XCJibGFjay02MFwifVxuICAgICAgICAgICAgICAgIHRleHQ9e3Byb3BzLm5vdGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgPC9Sb3c+XG4gICAgPC9WSENhcmRCYXNlPlxuICApO1xufTtcblxuVkhDYXJkUHJpY2luZy5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogXCJcIixcbiAgc2hvdzogZmFsc2UsXG59O1xuXG5WSENhcmRQcmljaW5nLnByb3BUeXBlcyA9IHtcbiAgc2hvdzogUHJvcFR5cGVzLmJvb2wsXG4gIG9uRXZlbnQ6IFByb3BUeXBlcy5mdW5jLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2F2ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcGVyaW9kOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwcmljZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdW5pdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3Vic2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjdGE6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG5vdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVkhDYXJkUHJpY2luZzsiXX0=