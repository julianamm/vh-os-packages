"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Text = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHText = function VHText(props) {
  var initialState = {
    className: 'vh-text-component'
  };

  var action = function action() {
    return props.onEvent({
      type: "onClick",
      origin: "VHText",
      props: {
        data: props.data
      }
    });
  };

  switch (props.variant) {
    case 'h1':
      return /*#__PURE__*/_react.default.createElement(Text.H1, {
        color: props.color,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);

    case 'h2':
      return /*#__PURE__*/_react.default.createElement(Text.H2, {
        color: props.color,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);

    case 'h3':
      return /*#__PURE__*/_react.default.createElement(Text.H3, {
        color: props.color,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);

    case 'h4':
      return /*#__PURE__*/_react.default.createElement(Text.H4, {
        color: props.color,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);

    case 'h5':
      return /*#__PURE__*/_react.default.createElement(Text.H5, {
        color: props.color,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);

    case 'h6':
      return /*#__PURE__*/_react.default.createElement(Text.H6, {
        color: props.color,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);

    case 'subtitle1':
      return /*#__PURE__*/_react.default.createElement(Text.Subtitle1, {
        color: props.color,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);

    case 'subtitle2':
      return /*#__PURE__*/_react.default.createElement(Text.Subtitle2, {
        color: props.color,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);

    case 'subtitle3':
      return /*#__PURE__*/_react.default.createElement(Text.Subtitle3, {
        color: props.color,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);

    case 'bodyweb':
      return /*#__PURE__*/_react.default.createElement(Text.BodyWeb, {
        color: props.color,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);

    case 'platform1':
    case 'platform':
      return /*#__PURE__*/_react.default.createElement(Text.BodyPlatform, {
        color: props.color,
        cursor: props.cursor,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);

    case 'platform2':
      return /*#__PURE__*/_react.default.createElement(Text.BodyPlatform2, {
        color: props.color,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);

    case 'caption':
      return /*#__PURE__*/_react.default.createElement(Text.Caption, {
        color: props.color,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);

    default:
      return /*#__PURE__*/_react.default.createElement(Text.Caption, {
        color: props.color,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);
  }
};

VHText.defaultProps = {};
VHText.propTypes = {};
var _default = VHText;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVGV4dC9pbmRleC5qc3giXSwibmFtZXMiOlsiVkhUZXh0IiwicHJvcHMiLCJpbml0aWFsU3RhdGUiLCJjbGFzc05hbWUiLCJhY3Rpb24iLCJvbkV2ZW50IiwidHlwZSIsIm9yaWdpbiIsImRhdGEiLCJ2YXJpYW50IiwiY29sb3IiLCJhbGlnbkNlbnRlciIsInRleHQiLCJjdXJzb3IiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFDLEtBQUssRUFBSTtBQUNwQixNQUFNQyxZQUFZLEdBQUc7QUFBRUMsSUFBQUEsU0FBUyxFQUFFO0FBQWIsR0FBckI7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxXQUFNSCxLQUFLLENBQUNJLE9BQU4sQ0FBYztBQUMvQkMsTUFBQUEsSUFBSSxFQUFFLFNBRHlCO0FBRS9CQyxNQUFBQSxNQUFNLEVBQUUsUUFGdUI7QUFHL0JOLE1BQUFBLEtBQUssRUFBRTtBQUNITyxRQUFBQSxJQUFJLEVBQUVQLEtBQUssQ0FBQ087QUFEVDtBQUh3QixLQUFkLENBQU47QUFBQSxHQUFmOztBQU9BLFVBQVFQLEtBQUssQ0FBQ1EsT0FBZDtBQUNJLFNBQUssSUFBTDtBQUNJLDBCQUFPLDZCQUFDLElBQUQsQ0FBTSxFQUFOO0FBQVMsUUFBQSxLQUFLLEVBQUVSLEtBQUssQ0FBQ1MsS0FBdEI7QUFDSCxRQUFBLFNBQVMsWUFBS1IsWUFBWSxDQUFDQyxTQUFsQixjQUErQkYsS0FBSyxDQUFDRSxTQUFOLEdBQWtCRixLQUFLLENBQUNFLFNBQXhCLEdBQW9DLEVBQW5FLENBRE47QUFFSCxRQUFBLE9BQU8sRUFBR0YsS0FBSyxDQUFDSSxPQUFOLEdBQWdCRCxNQUFoQixHQUF5QixZQUFNLENBQUUsQ0FGeEM7QUFFMEMsUUFBQSxX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b20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0ICogYXMgVGV4dCBmcm9tICcuL3N0eWxlcydcblxuY29uc3QgVkhUZXh0ID0gcHJvcHMgPT4ge1xuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgY2xhc3NOYW1lOiAndmgtdGV4dC1jb21wb25lbnQnIH1cbiAgICBjb25zdCBhY3Rpb24gPSAoKSA9PiBwcm9wcy5vbkV2ZW50KHtcbiAgICAgICAgdHlwZTogXCJvbkNsaWNrXCIsXG4gICAgICAgIG9yaWdpbjogXCJWSFRleHRcIixcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BzLmRhdGFcbiAgICAgICAgfVxuICAgIH0pXG4gICAgc3dpdGNoIChwcm9wcy52YXJpYW50KSB7XG4gICAgICAgIGNhc2UgJ2gxJzpcbiAgICAgICAgICAgIHJldHVybiA8VGV4dC5IMSBjb2xvcj17cHJvcHMuY29sb3J9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpbml0aWFsU3RhdGUuY2xhc3NOYW1lfSAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17IHByb3BzLm9uRXZlbnQgPyBhY3Rpb24gOiAoKSA9PiB7fX0gYWxpZ25DZW50ZXI9e3Byb3BzLmFsaWduQ2VudGVyfSA+e3Byb3BzLnRleHR9PC9UZXh0LkgxPlxuICAgICAgICBjYXNlICdoMic6XG4gICAgICAgICAgICByZXR1cm4gPFRleHQuSDIgY29sb3I9e3Byb3BzLmNvbG9yfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aW5pdGlhbFN0YXRlLmNsYXNzTmFtZX0gJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJ31gfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBwcm9wcy5vbkV2ZW50ID8gYWN0aW9uIDogKCkgPT4ge319IGFsaWduQ2VudGVyPXtwcm9wcy5hbGlnbkNlbnRlcn0gPntwcm9wcy50ZXh0fTwvVGV4dC5IMj5cbiAgICAgICAgY2FzZSAnaDMnOlxuICAgICAgICAgICAgcmV0dXJuIDxUZXh0LkgzIGNvbG9yPXtwcm9wcy5jb2xvcn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2luaXRpYWxTdGF0ZS5jbGFzc05hbWV9ICR7cHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogJyd9YH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgcHJvcHMub25FdmVudCA/IGFjdGlvbiA6ICgpID0+IHt9fSBhbGlnbkNlbnRlcj17cHJvcHMuYWxpZ25DZW50ZXJ9ID57cHJvcHMudGV4dH08L1RleHQuSDM+XG4gICAgICAgIGNhc2UgJ2g0JzpcbiAgICAgICAgICAgIHJldHVybiA8VGV4dC5INCBjb2xvcj17cHJvcHMuY29sb3J9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpbml0aWFsU3RhdGUuY2xhc3NOYW1lfSAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17IHByb3BzLm9uRXZlbnQgPyBhY3Rpb24gOiAoKSA9PiB7fX0gYWxpZ25DZW50ZXI9e3Byb3BzLmFsaWduQ2VudGVyfSA+e3Byb3BzLnRleHR9PC9UZXh0Lkg0PlxuICAgICAgICBjYXNlICdoNSc6XG4gICAgICAgICAgICByZXR1cm4gPFRleHQuSDUgY29sb3I9e3Byb3BzLmNvbG9yfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aW5pdGlhbFN0YXRlLmNsYXNzTmFtZX0gJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJ31gfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBwcm9wcy5vbkV2ZW50ID8gYWN0aW9uIDogKCkgPT4ge319IGFsaWduQ2VudGVyPXtwcm9wcy5hbGlnbkNlbnRlcn0gPntwcm9wcy50ZXh0fTwvVGV4dC5INT5cbiAgICAgICAgY2FzZSAnaDYnOlxuICAgICAgICAgICAgcmV0dXJuIDxUZXh0Lkg2IGNvbG9yPXtwcm9wcy5jb2xvcn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2luaXRpYWxTdGF0ZS5jbGFzc05hbWV9ICR7cHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogJyd9YH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgcHJvcHMub25FdmVudCA/IGFjdGlvbiA6ICgpID0+IHt9fSBhbGlnbkNlbnRlcj17cHJvcHMuYWxpZ25DZW50ZXJ9ID57cHJvcHMudGV4dH08L1RleHQuSDY+XG4gICAgICAgIGNhc2UgJ3N1YnRpdGxlMSc6XG4gICAgICAgICAgICByZXR1cm4gPFRleHQuU3VidGl0bGUxIGNvbG9yPXtwcm9wcy5jb2xvcn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2luaXRpYWxTdGF0ZS5jbGFzc05hbWV9ICR7cHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogJyd9YH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgcHJvcHMub25FdmVudCA/IGFjdGlvbiA6ICgpID0+IHt9fSBhbGlnbkNlbnRlcj17cHJvcHMuYWxpZ25DZW50ZXJ9ID57cHJvcHMudGV4dH08L1RleHQuU3VidGl0bGUxPlxuICAgICAgICBjYXNlICdzdWJ0aXRsZTInOlxuICAgICAgICAgICAgcmV0dXJuIDxUZXh0LlN1YnRpdGxlMiBjb2xvcj17cHJvcHMuY29sb3J9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpbml0aWFsU3RhdGUuY2xhc3NOYW1lfSAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17IHByb3BzLm9uRXZlbnQgPyBhY3Rpb24gOiAoKSA9PiB7fX0gYWxpZ25DZW50ZXI9e3Byb3BzLmFsaWduQ2VudGVyfSA+e3Byb3BzLnRleHR9PC9UZXh0LlN1YnRpdGxlMj5cbiAgICAgICAgY2FzZSAnc3VidGl0bGUzJzpcbiAgICAgICAgICAgIHJldHVybiA8VGV4dC5TdWJ0aXRsZTMgY29sb3I9e3Byb3BzLmNvbG9yfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aW5pdGlhbFN0YXRlLmNsYXNzTmFtZX0gJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJ31gfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBwcm9wcy5vbkV2ZW50ID8gYWN0aW9uIDogKCkgPT4ge319IGFsaWduQ2VudGVyPXtwcm9wcy5hbGlnbkNlbnRlcn0gPntwcm9wcy50ZXh0fTwvVGV4dC5TdWJ0aXRsZTM+XG4gICAgICAgIGNhc2UgJ2JvZHl3ZWInOlxuICAgICAgICAgICAgcmV0dXJuIDxUZXh0LkJvZHlXZWIgY29sb3I9e3Byb3BzLmNvbG9yfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aW5pdGlhbFN0YXRlLmNsYXNzTmFtZX0gJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJ31gfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBwcm9wcy5vbkV2ZW50ID8gYWN0aW9uIDogKCkgPT4ge319IGFsaWduQ2VudGVyPXtwcm9wcy5hbGlnbkNlbnRlcn0gPntwcm9wcy50ZXh0fTwvVGV4dC5Cb2R5V2ViPlxuICAgICAgICBjYXNlICdwbGF0Zm9ybTEnOlxuICAgICAgICBjYXNlICdwbGF0Zm9ybSc6XG4gICAgICAgICAgICByZXR1cm4gPFRleHQuQm9keVBsYXRmb3JtIGNvbG9yPXtwcm9wcy5jb2xvcn0gY3Vyc29yPXtwcm9wcy5jdXJzb3J9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpbml0aWFsU3RhdGUuY2xhc3NOYW1lfSAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17IHByb3BzLm9uRXZlbnQgPyBhY3Rpb24gOiAoKSA9PiB7fX0gYWxpZ25DZW50ZXI9e3Byb3BzLmFsaWduQ2VudGVyfSA+e3Byb3BzLnRleHR9PC9UZXh0LkJvZHlQbGF0Zm9ybT5cbiAgICAgICAgY2FzZSAncGxhdGZvcm0yJzpcbiAgICAgICAgICAgIHJldHVybiA8VGV4dC5Cb2R5UGxhdGZvcm0yIGNvbG9yPXtwcm9wcy5jb2xvcn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2luaXRpYWxTdGF0ZS5jbGFzc05hbWV9ICR7cHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogJyd9YH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgcHJvcHMub25FdmVudCA/IGFjdGlvbiA6ICgpID0+IHt9fSBhbGlnbkNlbnRlcj17cHJvcHMuYWxpZ25DZW50ZXJ9ID57cHJvcHMudGV4dH08L1RleHQuQm9keVBsYXRmb3JtMj5cbiAgICAgICAgY2FzZSAnY2FwdGlvbic6XG4gICAgICAgICAgICByZXR1cm4gPFRleHQuQ2FwdGlvbiBjb2xvcj17cHJvcHMuY29sb3J9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpbml0aWFsU3RhdGUuY2xhc3NOYW1lfSAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17IHByb3BzLm9uRXZlbnQgPyBhY3Rpb24gOiAoKSA9PiB7fX0gYWxpZ25DZW50ZXI9e3Byb3BzLmFsaWduQ2VudGVyfSA+e3Byb3BzLnRleHR9PC9UZXh0LkNhcHRpb24+XG4gICAgICAgIGRlZmF1bHQgOlxuICAgICAgICAgICAgcmV0dXJuICA8VGV4dC5DYXB0aW9uIGNvbG9yPXtwcm9wcy5jb2xvcn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aW5pdGlhbFN0YXRlLmNsYXNzTmFtZX0gJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJ31gfVxuICAgICAgICAgICAgb25DbGljaz17IHByb3BzLm9uRXZlbnQgPyBhY3Rpb24gOiAoKSA9PiB7fX0gYWxpZ25DZW50ZXI9e3Byb3BzLmFsaWduQ2VudGVyfSA+e3Byb3BzLnRleHR9PC9UZXh0LkNhcHRpb24+XG4gICAgfVxufVxuVkhUZXh0LmRlZmF1bHRQcm9wcyA9IHtcbn1cblxuVkhUZXh0LnByb3BUeXBlcyA9IHtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVkhUZXh0XG4iXX0=