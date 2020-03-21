"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Header = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHHeader = function VHHeader(props) {
  switch (true) {
    case props.h1:
      return /*#__PURE__*/_react.default.createElement(Header.H1, {
        className: "vh-header-component ".concat(props.className ? props.className : ''),
        reverse: props.reverse
      }, props.label);

    case props.h2:
      return /*#__PURE__*/_react.default.createElement(Header.H2, {
        className: "vh-header-component ".concat(props.className ? props.className : ''),
        reverse: props.reverse
      }, props.label);

    case props.h3:
      return /*#__PURE__*/_react.default.createElement(Header.H3, {
        className: "vh-header-component ".concat(props.className ? props.className : ''),
        reverse: props.reverse
      }, props.label);

    case props.h4:
      return /*#__PURE__*/_react.default.createElement(Header.H4, {
        className: "vh-header-component ".concat(props.className ? props.className : ''),
        reverse: props.reverse
      }, props.label);

    case props.h5:
      return /*#__PURE__*/_react.default.createElement(Header.H5, {
        className: "vh-header-component ".concat(props.className ? props.className : ''),
        reverse: props.reverse,
        padding: props.padding,
        textAlign: props.textAlign
      }, props.label);

    case props.h6:
      return /*#__PURE__*/_react.default.createElement(Header.H6, {
        className: "vh-header-component ".concat(props.className ? props.className : ''),
        reverse: props.reverse
      }, props.label);
  }
};

VHHeader.defaultProps = {
  reverse: false,
  h1: false,
  h2: false,
  h3: false,
  h4: false,
  h5: false,
  h6: false
};
VHHeader.propTypes = {
  reverse: _propTypes.default.bool,
  h1: _propTypes.default.bool,
  h2: _propTypes.default.bool,
  h3: _propTypes.default.bool,
  h4: _propTypes.default.bool,
  h5: _propTypes.default.bool,
  h6: _propTypes.default.bool,
  className: _propTypes.default.string,
  label: _propTypes.default.string.isRequired
};
var _default = VHHeader;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL1R5cG9ncmFwaHkvSGVhZGVycy9pbmRleC5qc3giXSwibmFtZXMiOlsiVkhIZWFkZXIiLCJwcm9wcyIsImgxIiwiY2xhc3NOYW1lIiwicmV2ZXJzZSIsImxhYmVsIiwiaDIiLCJoMyIsImg0IiwiaDUiLCJwYWRkaW5nIiwidGV4dEFsaWduIiwiaDYiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQUMsS0FBSyxFQUFJO0FBQ3hCLFVBQVEsSUFBUjtBQUNFLFNBQUtBLEtBQUssQ0FBQ0MsRUFBWDtBQUNFLDBCQUFPLDZCQUFDLE1BQUQsQ0FBUSxFQUFSO0FBQVcsUUFBQSxTQUFTLGdDQUF5QkQsS0FBSyxDQUFDRSxTQUFOLEdBQWtCRixLQUFLLENBQUNFLFNBQXhCLEdBQW9DLEVBQTdELENBQXBCO0FBQXVGLFFBQUEsT0FBTyxFQUFFRixLQUFLLENBQUNHO0FBQXRHLFNBQWdISCxLQUFLLENBQUNJLEtBQXRILENBQVA7O0FBQ0YsU0FBS0osS0FBSyxDQUFDSyxFQUFYO0FBQ0UsMEJBQU8sNkJBQUMsTUFBRCxDQUFRLEVBQVI7QUFBVyxRQUFBLFNBQVMsZ0NBQXlCTCxLQUFLLENBQUNFLFNBQU4sR0FBa0JGLEtBQUssQ0FBQ0UsU0FBeEIsR0FBb0MsRUFBN0QsQ0FBcEI7QUFBdUYsUUFBQSxPQUFPLEVBQUVGLEtBQUssQ0FBQ0c7QUFBdEcsU0FBZ0hILEtBQUssQ0FBQ0ksS0FBdEgsQ0FBUDs7QUFDRixTQUFLSixLQUFLLENBQUNNLEVBQVg7QUFDRSwwQkFBTyw2QkFBQyxNQUFELENBQVEsRUFBUjtBQUFXLFFBQUEsU0FBUyxnQ0FBeUJOLEtBQUssQ0FBQ0UsU0FBTixHQUFrQkYsS0FBSyxDQUFDRSxTQUF4QixHQUFvQyxFQUE3RCxDQUFwQjtBQUF1RixRQUFBLE9BQU8sRUFBRUYsS0FBSyxDQUFDRztBQUF0RyxTQUFnSEgsS0FBSyxDQUFDSSxLQUF0SCxDQUFQOztBQUNGLFNBQUtKLEtBQUssQ0FBQ08sRUFBWDtBQUNFLDBCQUFPLDZCQUFDLE1BQUQsQ0FBUSxFQUFSO0FBQVcsUUFBQSxTQUFTLGdDQUF5QlAsS0FBSyxDQUFDRSxTQUFOLEdBQWtCRixLQUFLLENBQUNFLFNBQXhCLEdBQW9DLEVBQTdELENBQXBCO0FBQXVGLFFBQUEsT0FBTyxFQUFFRixLQUFLLENBQUNHO0FBQXRHLFNBQWdISCxLQUFLLENBQUNJLEtBQXRILENBQVA7O0FBQ0YsU0FBS0osS0FBSyxDQUFDUSxFQUFYO0FBQ0UsMEJBQU8sNkJBQUMsTUFBRCxDQUFRLEVBQVI7QUFBVyxRQUFBLFNBQVMsZ0NBQXlCUixLQUFLLENBQUNFLFNBQU4sR0FBa0JGLEtBQUssQ0FBQ0UsU0FBeEIsR0FBb0MsRUFBN0QsQ0FBcEI7QUFBdUYsUUFBQSxPQUFPLEVBQUVGLEtBQUssQ0FBQ0csT0FBdEc7QUFBK0csUUFBQSxPQUFPLEVBQUVILEtBQUssQ0FBQ1MsT0FBOUg7QUFBdUksUUFBQSxTQUFTLEVBQUVULEtBQUssQ0FBQ1U7QUFBeEosU0FBb0tWLEtBQUssQ0FBQ0ksS0FBMUssQ0FBUDs7QUFDRixTQUFLSixLQUFLLENBQUNXLEVBQVg7QUFDRSwwQkFBTyw2QkFBQyxNQUFELENBQVEsRUFBUjtBQUFXLFFBQUEsU0FBUyxnQ0FBeUJYLEtBQUssQ0FBQ0UsU0FBTixHQUFrQkYsS0FBSyxDQUFDRSxTQUF4QixHQUFvQyxFQUE3RCxDQUFwQjtBQUF1RixRQUFBLE9BQU8sRUFBRUYsS0FBSyxDQUFDRztBQUF0RyxTQUFnSEgsS0FBSyxDQUFDSSxLQUF0SCxDQUFQO0FBWko7QUFjRCxDQWZEOztBQWlCQUwsUUFBUSxDQUFDYSxZQUFULEdBQXdCO0FBQ3RCVCxFQUFBQSxPQUFPLEVBQUUsS0FEYTtBQUV0QkYsRUFBQUEsRUFBRSxFQUFFLEtBRmtCO0FBR3RCSSxFQUFBQSxFQUFFLEVBQUUsS0FIa0I7QUFJdEJDLEVBQUFBLEVBQUUsRUFBRSxLQUprQjtBQUt0QkMsRUFBQUEsRUFBRSxFQUFFLEtBTGtCO0FBTXRCQyxFQUFBQSxFQUFFLEVBQUUsS0FOa0I7QUFPdEJHLEVBQUFBLEVBQUUsRUFBRTtBQVBrQixDQUF4QjtBQVVBWixRQUFRLENBQUNjLFNBQVQsR0FBcUI7QUFDbkJWLEVBQUFBLE9BQU8sRUFBRVcsbUJBQVVDLElBREE7QUFFbkJkLEVBQUFBLEVBQUUsRUFBRWEsbUJBQVVDLElBRks7QUFHbkJWLEVBQUFBLEVBQUUsRUFBRVMsbUJBQVVDLElBSEs7QUFJbkJULEVBQUFBLEVBQUUsRUFBRVEsbUJBQVVDLElBSks7QUFLbkJSLEVBQUFBLEVBQUUsRUFBRU8sbUJBQVVDLElBTEs7QUFNbkJQLEVBQUFBLEVBQUUsRUFBRU0sbUJBQVVDLElBTks7QUFPbkJKLEVBQUFBLEVBQUUsRUFBRUcsbUJBQVVDLElBUEs7QUFRbkJiLEVBQUFBLFNBQVMsRUFBRVksbUJBQVVFLE1BUkY7QUFTbkJaLEVBQUFBLEtBQUssRUFBRVUsbUJBQVVFLE1BQVYsQ0FBaUJDO0FBVEwsQ0FBckI7ZUFhZWxCLFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgKiBhcyBIZWFkZXIgZnJvbSAnLi9zdHlsZXMnXG5cbmNvbnN0IFZISGVhZGVyID0gcHJvcHMgPT4ge1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIHByb3BzLmgxOlxuICAgICAgcmV0dXJuIDxIZWFkZXIuSDEgY2xhc3NOYW1lPXtgdmgtaGVhZGVyLWNvbXBvbmVudCAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9IHJldmVyc2U9e3Byb3BzLnJldmVyc2V9Pntwcm9wcy5sYWJlbH08L0hlYWRlci5IMT5cbiAgICBjYXNlIHByb3BzLmgyOlxuICAgICAgcmV0dXJuIDxIZWFkZXIuSDIgY2xhc3NOYW1lPXtgdmgtaGVhZGVyLWNvbXBvbmVudCAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9IHJldmVyc2U9e3Byb3BzLnJldmVyc2V9Pntwcm9wcy5sYWJlbH08L0hlYWRlci5IMj5cbiAgICBjYXNlIHByb3BzLmgzOlxuICAgICAgcmV0dXJuIDxIZWFkZXIuSDMgY2xhc3NOYW1lPXtgdmgtaGVhZGVyLWNvbXBvbmVudCAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9IHJldmVyc2U9e3Byb3BzLnJldmVyc2V9Pntwcm9wcy5sYWJlbH08L0hlYWRlci5IMz5cbiAgICBjYXNlIHByb3BzLmg0OlxuICAgICAgcmV0dXJuIDxIZWFkZXIuSDQgY2xhc3NOYW1lPXtgdmgtaGVhZGVyLWNvbXBvbmVudCAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9IHJldmVyc2U9e3Byb3BzLnJldmVyc2V9Pntwcm9wcy5sYWJlbH08L0hlYWRlci5IND5cbiAgICBjYXNlIHByb3BzLmg1OlxuICAgICAgcmV0dXJuIDxIZWFkZXIuSDUgY2xhc3NOYW1lPXtgdmgtaGVhZGVyLWNvbXBvbmVudCAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9IHJldmVyc2U9e3Byb3BzLnJldmVyc2V9IHBhZGRpbmc9e3Byb3BzLnBhZGRpbmd9IHRleHRBbGlnbj17cHJvcHMudGV4dEFsaWdufT57cHJvcHMubGFiZWx9PC9IZWFkZXIuSDU+XG4gICAgY2FzZSBwcm9wcy5oNjpcbiAgICAgIHJldHVybiA8SGVhZGVyLkg2IGNsYXNzTmFtZT17YHZoLWhlYWRlci1jb21wb25lbnQgJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJ31gfSByZXZlcnNlPXtwcm9wcy5yZXZlcnNlfT57cHJvcHMubGFiZWx9PC9IZWFkZXIuSDY+XG4gIH1cbn1cblxuVkhIZWFkZXIuZGVmYXVsdFByb3BzID0ge1xuICByZXZlcnNlOiBmYWxzZSxcbiAgaDE6IGZhbHNlLFxuICBoMjogZmFsc2UsXG4gIGgzOiBmYWxzZSxcbiAgaDQ6IGZhbHNlLFxuICBoNTogZmFsc2UsXG4gIGg2OiBmYWxzZSxcbn1cblxuVkhIZWFkZXIucHJvcFR5cGVzID0ge1xuICByZXZlcnNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgaDE6IFByb3BUeXBlcy5ib29sLFxuICBoMjogUHJvcFR5cGVzLmJvb2wsXG4gIGgzOiBQcm9wVHlwZXMuYm9vbCxcbiAgaDQ6IFByb3BUeXBlcy5ib29sLFxuICBoNTogUHJvcFR5cGVzLmJvb2wsXG4gIGg2OiBQcm9wVHlwZXMuYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFZISGVhZGVyXG4iXX0=