"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var S = _interopRequireWildcard(require("./styles"));

var _index = _interopRequireDefault(require("../../../assets/icons/vanhack-loading.svg/index.jsx"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHPreloader = function VHPreloader(props) {
  if (props.type === "bubble") {
    return /*#__PURE__*/_react.default.createElement(S.PreloaderBubble, {
      size: props.size
    }, /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", null));
  }

  if (props.type === "fullPage") {
    return /*#__PURE__*/_react.default.createElement(S.Container, null, /*#__PURE__*/_react.default.createElement(S.ImageSection, null, /*#__PURE__*/_react.default.createElement(S.Image, {
      image: _index.default
    })), /*#__PURE__*/_react.default.createElement(S.PreloaderSection, null, /*#__PURE__*/_react.default.createElement(S.PreloaderBubble, {
      size: props.size
    }, /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", null))));
  }

  return /*#__PURE__*/_react.default.createElement(S.PreloaderCircle, {
    size: props.size
  }, /*#__PURE__*/_react.default.createElement("div", null));
};

VHPreloader.defaultProps = {
  content: ''
};
VHPreloader.propTypes = {
  size: _propTypes.default.string
};
var _default = VHPreloader;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvUHJlbG9hZGVyL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJWSFByZWxvYWRlciIsInByb3BzIiwidHlwZSIsInNpemUiLCJWSExvYWRpbmciLCJkZWZhdWx0UHJvcHMiLCJjb250ZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBQyxLQUFLLEVBQUk7QUFDM0IsTUFBSUEsS0FBSyxDQUFDQyxJQUFOLEtBQWUsUUFBbkIsRUFBNkI7QUFDM0Isd0JBQVEsNkJBQUMsQ0FBRCxDQUFHLGVBQUg7QUFBbUIsTUFBQSxJQUFJLEVBQUVELEtBQUssQ0FBQ0U7QUFBL0Isb0JBQ04seUNBRE0sZUFFTix5Q0FGTSxlQUdOLHlDQUhNLENBQVI7QUFLRDs7QUFDRCxNQUFJRixLQUFLLENBQUNDLElBQU4sS0FBZSxVQUFuQixFQUErQjtBQUM3Qix3QkFDQSw2QkFBQyxDQUFELENBQUcsU0FBSCxxQkFDRSw2QkFBQyxDQUFELENBQUcsWUFBSCxxQkFDRSw2QkFBQyxDQUFELENBQUcsS0FBSDtBQUFTLE1BQUEsS0FBSyxFQUFFRTtBQUFoQixNQURGLENBREYsZUFJRSw2QkFBQyxDQUFELENBQUcsZ0JBQUgscUJBQ0UsNkJBQUMsQ0FBRCxDQUFHLGVBQUg7QUFBbUIsTUFBQSxJQUFJLEVBQUVILEtBQUssQ0FBQ0U7QUFBL0Isb0JBQ0UseUNBREYsZUFFRSx5Q0FGRixlQUdFLHlDQUhGLENBREYsQ0FKRixDQURBO0FBY0Q7O0FBQ0Qsc0JBQ0UsNkJBQUMsQ0FBRCxDQUFHLGVBQUg7QUFBbUIsSUFBQSxJQUFJLEVBQUVGLEtBQUssQ0FBQ0U7QUFBL0Isa0JBQ0UseUNBREYsQ0FERjtBQUtELENBN0JEOztBQStCQUgsV0FBVyxDQUFDSyxZQUFaLEdBQTJCO0FBQ3pCQyxFQUFBQSxPQUFPLEVBQUU7QUFEZ0IsQ0FBM0I7QUFJQU4sV0FBVyxDQUFDTyxTQUFaLEdBQXdCO0FBQ3RCSixFQUFBQSxJQUFJLEVBQUVLLG1CQUFVQztBQURNLENBQXhCO2VBSWVULFciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9zdHlsZXMnO1xuaW1wb3J0IFZITG9hZGluZyBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvdmFuaGFjay1sb2FkaW5nLnN2Zy9pbmRleC5qc3gnXG5cbmNvbnN0IFZIUHJlbG9hZGVyID0gcHJvcHMgPT4ge1xuICBpZiAocHJvcHMudHlwZSA9PT0gXCJidWJibGVcIikge1xuICAgIHJldHVybiAoPFMuUHJlbG9hZGVyQnViYmxlIHNpemU9e3Byb3BzLnNpemV9PlxuICAgICAgPGRpdiAvPlxuICAgICAgPGRpdiAvPlxuICAgICAgPGRpdiAvPlxuICAgIDwvUy5QcmVsb2FkZXJCdWJibGU+KVxuICB9XG4gIGlmIChwcm9wcy50eXBlID09PSBcImZ1bGxQYWdlXCIpIHtcbiAgICByZXR1cm4gKFxuICAgIDxTLkNvbnRhaW5lcj5cbiAgICAgIDxTLkltYWdlU2VjdGlvbj5cbiAgICAgICAgPFMuSW1hZ2UgaW1hZ2U9e1ZITG9hZGluZ30vPlxuICAgICAgPC9TLkltYWdlU2VjdGlvbj5cbiAgICAgIDxTLlByZWxvYWRlclNlY3Rpb24+XG4gICAgICAgIDxTLlByZWxvYWRlckJ1YmJsZSBzaXplPXtwcm9wcy5zaXplfT5cbiAgICAgICAgICA8ZGl2IC8+XG4gICAgICAgICAgPGRpdiAvPlxuICAgICAgICAgIDxkaXYgLz5cbiAgICAgICAgPC9TLlByZWxvYWRlckJ1YmJsZT5cbiAgICAgIDwvUy5QcmVsb2FkZXJTZWN0aW9uPlxuICAgIDwvUy5Db250YWluZXI+XG4pXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8Uy5QcmVsb2FkZXJDaXJjbGUgc2l6ZT17cHJvcHMuc2l6ZX0+XG4gICAgICA8ZGl2IC8+XG4gICAgPC9TLlByZWxvYWRlckNpcmNsZT5cbiAgKTtcbn07XG5cblZIUHJlbG9hZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29udGVudDogJydcbn07XG5cblZIUHJlbG9hZGVyLnByb3BUeXBlcyA9IHtcbiAgc2l6ZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVkhQcmVsb2FkZXI7XG4iXX0=