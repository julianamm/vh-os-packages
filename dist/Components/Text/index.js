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
      return _react.default.createElement(Text.H1, {
        color: props.color,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);

    case 'h2':
      return _react.default.createElement(Text.H2, {
        color: props.color,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);

    case 'h3':
      return _react.default.createElement(Text.H3, {
        color: props.color,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);

    case 'h4':
      return _react.default.createElement(Text.H4, {
        color: props.color,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);

    case 'h5':
      return _react.default.createElement(Text.H5, {
        color: props.color,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);

    case 'h6':
      return _react.default.createElement(Text.H6, {
        color: props.color,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);

    case 'subtitle1':
      return _react.default.createElement(Text.Subtitle1, {
        color: props.color,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);

    case 'subtitle2':
      return _react.default.createElement(Text.Subtitle2, {
        color: props.color,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);

    case 'subtitle3':
      return _react.default.createElement(Text.Subtitle3, {
        color: props.color,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);

    case 'bodyweb':
      return _react.default.createElement(Text.BodyWeb, {
        color: props.color,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);

    case 'platform1':
    case 'platform':
      return _react.default.createElement(Text.BodyPlatform, {
        color: props.color,
        cursor: props.cursor,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);

    case 'platform2':
      return _react.default.createElement(Text.BodyPlatform2, {
        color: props.color,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);

    case 'caption':
      return _react.default.createElement(Text.Caption, {
        color: props.color,
        className: "".concat(initialState.className, " ").concat(props.className ? props.className : ''),
        onClick: props.onEvent ? action : function () {},
        alignCenter: props.alignCenter
      }, props.text);

    default:
      return _react.default.createElement(Text.Caption, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVGV4dC9pbmRleC5qc3giXSwibmFtZXMiOlsiVkhUZXh0IiwicHJvcHMiLCJpbml0aWFsU3RhdGUiLCJjbGFzc05hbWUiLCJhY3Rpb24iLCJvbkV2ZW50IiwidHlwZSIsIm9yaWdpbiIsImRhdGEiLCJ2YXJpYW50IiwiY29sb3IiLCJhbGlnbkNlbnRlciIsInRleHQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFDLEtBQUssRUFBSTtBQUNwQixNQUFNQyxZQUFZLEdBQUc7QUFBRUMsSUFBQUEsU0FBUyxFQUFFO0FBQWIsR0FBckI7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxXQUFNSCxLQUFLLENBQUNJLE9BQU4sQ0FBYztBQUMvQkMsTUFBQUEsSUFBSSxFQUFFLFNBRHlCO0FBRS9CQyxNQUFBQSxNQUFNLEVBQUUsUUFGdUI7QUFHL0JOLE1BQUFBLEtBQUssRUFBRTtBQUNITyxRQUFBQSxJQUFJLEVBQUVQLEtBQUssQ0FBQ087QUFEVDtBQUh3QixLQUFkLENBQU47QUFBQSxHQUFmOztBQU9BLFVBQVFQLEtBQUssQ0FBQ1EsT0FBZDtBQUNJLFNBQUssSUFBTDtBQUNJLGFBQU8sNkJBQUMsSUFBRCxDQUFNLEVBQU47QUFBUyxRQUFBLEtBQUssRUFBRVIsS0FBSyxDQUFDUyxLQUF0QjtBQUNILFFBQUEsU0FBUyxZQUFLUixZQUFZLENBQUNDLFNBQWxCLGNBQStCRixLQUFLLENBQUNFLFNBQU4sR0FBa0JGLEtBQUssQ0FBQ0UsU0FBeEIsR0FBb0MsRUFBbkUsQ0FETjtBQUVILFFBQUEsT0FBTyxFQUFHRixLQUFLLENBQUNJLE9BQU4sR0FBZ0JELE1BQWhCLEdBQXlCLFlBQU0sQ0FBRSxDQUZ4QztBQUUwQyxRQUFBLFdBQVcsRUFBRUgs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LFFBQUEsV0FBVyxFQUFFSCxLQUFLLENBQUNVO0FBRjdELFNBRTRFVixLQUFLLENBQUNXLElBRmxGLENBQVA7O0FBR0osU0FBSyxTQUFMO0FBQ0ksYUFBTyw2QkFBQyxJQUFELENBQU0sT0FBTjtBQUFjLFFBQUEsS0FBSyxFQUFFWCxLQUFLLENBQUNTLEtBQTNCO0FBQ0gsUUFBQSxTQUFTLFlBQUtSLFlBQVksQ0FBQ0MsU0FBbEIsY0FBK0JGLEtBQUssQ0FBQ0UsU0FBTixHQUFrQkYsS0FBSyxDQUFDRSxTQUF4QixHQUFvQyxFQUFuRSxDQUROO0FBRUgsUUFBQSxPQUFPLEVBQUdGLEtBQUssQ0FBQ0ksT0FBTixHQUFnQkQsTUFBaEIsR0FBeUIsWUFBTSxDQUFFLENBRnhDO0FBRTBDLFFBQUEsV0FBVyxFQUFFSCxLQUFLLENBQUNVO0FBRjdELFNBRTRFVixLQUFLLENBQUNXLElBRmxGLENBQVA7O0FBR0o7QUFDSSxhQUFRLDZCQUFDLElBQUQsQ0FBTSxPQUFOO0FBQWMsUUFBQSxLQUFLLEVBQUVYLEtBQUssQ0FBQ1MsS0FBM0I7QUFDUixRQUFBLFNBQVMsWUFBS1IsWUFBWSxDQUFDQyxTQUFsQixjQUErQkYsS0FBSyxDQUFDRSxTQUFOLEdBQWtCRixLQUFLLENBQUNFLFNBQXhCLEdBQW9DLEVBQW5FLENBREQ7QUFFUixRQUFBLE9BQU8sRUFBR0YsS0FBSyxDQUFDSSxPQUFOLEdBQWdCRCxNQUFoQixHQUF5QixZQUFNLENBQUUsQ0FGbkM7QUFFcUMsUUFBQSxXQUFXLEVBQUVILEtBQUssQ0FBQ1U7QUFGeEQsU0FFdUVWLEtBQUssQ0FBQ1csSUFGN0UsQ0FBUjtBQXZEUjtBQTJESCxDQXBFRDs7QUFxRUFaLE1BQU0sQ0FBQ2EsWUFBUCxHQUFzQixFQUF0QjtBQUdBYixNQUFNLENBQUNjLFNBQVAsR0FBbUIsRUFBbkI7ZUFHZWQsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCAqIGFzIFRleHQgZnJvbSAnLi9zdHlsZXMnXG5cbmNvbnN0IFZIVGV4dCA9IHByb3BzID0+IHtcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7IGNsYXNzTmFtZTogJ3ZoLXRleHQtY29tcG9uZW50JyB9XG4gICAgY29uc3QgYWN0aW9uID0gKCkgPT4gcHJvcHMub25FdmVudCh7XG4gICAgICAgIHR5cGU6IFwib25DbGlja1wiLFxuICAgICAgICBvcmlnaW46IFwiVkhUZXh0XCIsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBkYXRhOiBwcm9wcy5kYXRhXG4gICAgICAgIH1cbiAgICB9KVxuICAgIHN3aXRjaCAocHJvcHMudmFyaWFudCkge1xuICAgICAgICBjYXNlICdoMSc6XG4gICAgICAgICAgICByZXR1cm4gPFRleHQuSDEgY29sb3I9e3Byb3BzLmNvbG9yfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aW5pdGlhbFN0YXRlLmNsYXNzTmFtZX0gJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJ31gfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBwcm9wcy5vbkV2ZW50ID8gYWN0aW9uIDogKCkgPT4ge319IGFsaWduQ2VudGVyPXtwcm9wcy5hbGlnbkNlbnRlcn0gPntwcm9wcy50ZXh0fTwvVGV4dC5IMT5cbiAgICAgICAgY2FzZSAnaDInOlxuICAgICAgICAgICAgcmV0dXJuIDxUZXh0LkgyIGNvbG9yPXtwcm9wcy5jb2xvcn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2luaXRpYWxTdGF0ZS5jbGFzc05hbWV9ICR7cHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogJyd9YH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgcHJvcHMub25FdmVudCA/IGFjdGlvbiA6ICgpID0+IHt9fSBhbGlnbkNlbnRlcj17cHJvcHMuYWxpZ25DZW50ZXJ9ID57cHJvcHMudGV4dH08L1RleHQuSDI+XG4gICAgICAgIGNhc2UgJ2gzJzpcbiAgICAgICAgICAgIHJldHVybiA8VGV4dC5IMyBjb2xvcj17cHJvcHMuY29sb3J9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpbml0aWFsU3RhdGUuY2xhc3NOYW1lfSAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17IHByb3BzLm9uRXZlbnQgPyBhY3Rpb24gOiAoKSA9PiB7fX0gYWxpZ25DZW50ZXI9e3Byb3BzLmFsaWduQ2VudGVyfSA+e3Byb3BzLnRleHR9PC9UZXh0LkgzPlxuICAgICAgICBjYXNlICdoNCc6XG4gICAgICAgICAgICByZXR1cm4gPFRleHQuSDQgY29sb3I9e3Byb3BzLmNvbG9yfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aW5pdGlhbFN0YXRlLmNsYXNzTmFtZX0gJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJ31gfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBwcm9wcy5vbkV2ZW50ID8gYWN0aW9uIDogKCkgPT4ge319IGFsaWduQ2VudGVyPXtwcm9wcy5hbGlnbkNlbnRlcn0gPntwcm9wcy50ZXh0fTwvVGV4dC5IND5cbiAgICAgICAgY2FzZSAnaDUnOlxuICAgICAgICAgICAgcmV0dXJuIDxUZXh0Lkg1IGNvbG9yPXtwcm9wcy5jb2xvcn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2luaXRpYWxTdGF0ZS5jbGFzc05hbWV9ICR7cHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogJyd9YH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgcHJvcHMub25FdmVudCA/IGFjdGlvbiA6ICgpID0+IHt9fSBhbGlnbkNlbnRlcj17cHJvcHMuYWxpZ25DZW50ZXJ9ID57cHJvcHMudGV4dH08L1RleHQuSDU+XG4gICAgICAgIGNhc2UgJ2g2JzpcbiAgICAgICAgICAgIHJldHVybiA8VGV4dC5INiBjb2xvcj17cHJvcHMuY29sb3J9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpbml0aWFsU3RhdGUuY2xhc3NOYW1lfSAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17IHByb3BzLm9uRXZlbnQgPyBhY3Rpb24gOiAoKSA9PiB7fX0gYWxpZ25DZW50ZXI9e3Byb3BzLmFsaWduQ2VudGVyfSA+e3Byb3BzLnRleHR9PC9UZXh0Lkg2PlxuICAgICAgICBjYXNlICdzdWJ0aXRsZTEnOlxuICAgICAgICAgICAgcmV0dXJuIDxUZXh0LlN1YnRpdGxlMSBjb2xvcj17cHJvcHMuY29sb3J9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpbml0aWFsU3RhdGUuY2xhc3NOYW1lfSAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17IHByb3BzLm9uRXZlbnQgPyBhY3Rpb24gOiAoKSA9PiB7fX0gYWxpZ25DZW50ZXI9e3Byb3BzLmFsaWduQ2VudGVyfSA+e3Byb3BzLnRleHR9PC9UZXh0LlN1YnRpdGxlMT5cbiAgICAgICAgY2FzZSAnc3VidGl0bGUyJzpcbiAgICAgICAgICAgIHJldHVybiA8VGV4dC5TdWJ0aXRsZTIgY29sb3I9e3Byb3BzLmNvbG9yfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aW5pdGlhbFN0YXRlLmNsYXNzTmFtZX0gJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJ31gfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBwcm9wcy5vbkV2ZW50ID8gYWN0aW9uIDogKCkgPT4ge319IGFsaWduQ2VudGVyPXtwcm9wcy5hbGlnbkNlbnRlcn0gPntwcm9wcy50ZXh0fTwvVGV4dC5TdWJ0aXRsZTI+XG4gICAgICAgIGNhc2UgJ3N1YnRpdGxlMyc6XG4gICAgICAgICAgICByZXR1cm4gPFRleHQuU3VidGl0bGUzIGNvbG9yPXtwcm9wcy5jb2xvcn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2luaXRpYWxTdGF0ZS5jbGFzc05hbWV9ICR7cHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogJyd9YH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgcHJvcHMub25FdmVudCA/IGFjdGlvbiA6ICgpID0+IHt9fSBhbGlnbkNlbnRlcj17cHJvcHMuYWxpZ25DZW50ZXJ9ID57cHJvcHMudGV4dH08L1RleHQuU3VidGl0bGUzPlxuICAgICAgICBjYXNlICdib2R5d2ViJzpcbiAgICAgICAgICAgIHJldHVybiA8VGV4dC5Cb2R5V2ViIGNvbG9yPXtwcm9wcy5jb2xvcn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2luaXRpYWxTdGF0ZS5jbGFzc05hbWV9ICR7cHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogJyd9YH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgcHJvcHMub25FdmVudCA/IGFjdGlvbiA6ICgpID0+IHt9fSBhbGlnbkNlbnRlcj17cHJvcHMuYWxpZ25DZW50ZXJ9ID57cHJvcHMudGV4dH08L1RleHQuQm9keVdlYj5cbiAgICAgICAgY2FzZSAncGxhdGZvcm0xJzpcbiAgICAgICAgY2FzZSAncGxhdGZvcm0nOlxuICAgICAgICAgICAgcmV0dXJuIDxUZXh0LkJvZHlQbGF0Zm9ybSBjb2xvcj17cHJvcHMuY29sb3J9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpbml0aWFsU3RhdGUuY2xhc3NOYW1lfSAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17IHByb3BzLm9uRXZlbnQgPyBhY3Rpb24gOiAoKSA9PiB7fX0gYWxpZ25DZW50ZXI9e3Byb3BzLmFsaWduQ2VudGVyfSA+e3Byb3BzLnRleHR9PC9UZXh0LkJvZHlQbGF0Zm9ybT5cbiAgICAgICAgY2FzZSAncGxhdGZvcm0yJzpcbiAgICAgICAgICAgIHJldHVybiA8VGV4dC5Cb2R5UGxhdGZvcm0yIGNvbG9yPXtwcm9wcy5jb2xvcn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2luaXRpYWxTdGF0ZS5jbGFzc05hbWV9ICR7cHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogJyd9YH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgcHJvcHMub25FdmVudCA/IGFjdGlvbiA6ICgpID0+IHt9fSBhbGlnbkNlbnRlcj17cHJvcHMuYWxpZ25DZW50ZXJ9ID57cHJvcHMudGV4dH08L1RleHQuQm9keVBsYXRmb3JtMj5cbiAgICAgICAgY2FzZSAnY2FwdGlvbic6XG4gICAgICAgICAgICByZXR1cm4gPFRleHQuQ2FwdGlvbiBjb2xvcj17cHJvcHMuY29sb3J9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpbml0aWFsU3RhdGUuY2xhc3NOYW1lfSAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17IHByb3BzLm9uRXZlbnQgPyBhY3Rpb24gOiAoKSA9PiB7fX0gYWxpZ25DZW50ZXI9e3Byb3BzLmFsaWduQ2VudGVyfSA+e3Byb3BzLnRleHR9PC9UZXh0LkNhcHRpb24+XG4gICAgICAgIGRlZmF1bHQgOlxuICAgICAgICAgICAgcmV0dXJuICA8VGV4dC5DYXB0aW9uIGNvbG9yPXtwcm9wcy5jb2xvcn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aW5pdGlhbFN0YXRlLmNsYXNzTmFtZX0gJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJ31gfVxuICAgICAgICAgICAgb25DbGljaz17IHByb3BzLm9uRXZlbnQgPyBhY3Rpb24gOiAoKSA9PiB7fX0gYWxpZ25DZW50ZXI9e3Byb3BzLmFsaWduQ2VudGVyfSA+e3Byb3BzLnRleHR9PC9UZXh0LkNhcHRpb24+XG4gICAgfVxufVxuVkhUZXh0LmRlZmF1bHRQcm9wcyA9IHtcbn1cblxuVkhUZXh0LnByb3BUeXBlcyA9IHtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVkhUZXh0XG4iXX0=