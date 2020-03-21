"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHCardBase = function VHCardBase(props) {
  return /*#__PURE__*/_react.default.createElement(S.Card, {
    onClick: function onClick(event) {
      if (props.onEvent) {
        props.onEvent({
          data: props,
          type: 'onClick',
          target: 'VHCardBase'
        });
      }

      ;
    },
    draggable: props.draggable,
    id: props.id,
    width: props.width,
    height: props.height,
    onDragEnter: props.onDragEnter,
    noPadding: props.noPadding,
    onDragLeave: props.onDragLeave,
    onDragStart: props.onDragStart,
    noBorder: props.noBorder,
    favorite: props.favorite,
    noHover: props.noHover
  }, props.children);
};

VHCardBase.defaultProps = {
  className: '',
  noBorder: false,
  favorite: false,
  noHover: false
};
VHCardBase.propTypes = {
  className: _propTypes.default.string,
  noBorder: _propTypes.default.bool,
  favorite: _propTypes.default.bool,
  noHover: _propTypes.default.bool
};
var _default = VHCardBase;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQ2FyZHMvQmFzZS9pbmRleC5qc3giXSwibmFtZXMiOlsiVkhDYXJkQmFzZSIsInByb3BzIiwiZXZlbnQiLCJvbkV2ZW50IiwiZGF0YSIsInR5cGUiLCJ0YXJnZXQiLCJkcmFnZ2FibGUiLCJpZCIsIndpZHRoIiwiaGVpZ2h0Iiwib25EcmFnRW50ZXIiLCJub1BhZGRpbmciLCJvbkRyYWdMZWF2ZSIsIm9uRHJhZ1N0YXJ0Iiwibm9Cb3JkZXIiLCJmYXZvcml0ZSIsIm5vSG92ZXIiLCJjaGlsZHJlbiIsImRlZmF1bHRQcm9wcyIsImNsYXNzTmFtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFDLEtBQUssRUFBSTtBQUMxQixzQkFDRSw2QkFBQyxDQUFELENBQUcsSUFBSDtBQUNFLElBQUEsT0FBTyxFQUFFLGlCQUFBQyxLQUFLLEVBQUk7QUFDaEIsVUFBSUQsS0FBSyxDQUFDRSxPQUFWLEVBQW1CO0FBQ2pCRixRQUFBQSxLQUFLLENBQUNFLE9BQU4sQ0FBYztBQUNaQyxVQUFBQSxJQUFJLEVBQUVILEtBRE07QUFFWkksVUFBQUEsSUFBSSxFQUFFLFNBRk07QUFHWkMsVUFBQUEsTUFBTSxFQUFFO0FBSEksU0FBZDtBQUtEOztBQUFBO0FBQ0YsS0FUSDtBQVVFLElBQUEsU0FBUyxFQUFFTCxLQUFLLENBQUNNLFNBVm5CO0FBV0UsSUFBQSxFQUFFLEVBQUVOLEtBQUssQ0FBQ08sRUFYWjtBQVlFLElBQUEsS0FBSyxFQUFFUCxLQUFLLENBQUNRLEtBWmY7QUFhRSxJQUFBLE1BQU0sRUFBRVIsS0FBSyxDQUFDUyxNQWJoQjtBQWNFLElBQUEsV0FBVyxFQUFFVCxLQUFLLENBQUNVLFdBZHJCO0FBZUUsSUFBQSxTQUFTLEVBQUVWLEtBQUssQ0FBQ1csU0FmbkI7QUFnQkUsSUFBQSxXQUFXLEVBQUVYLEtBQUssQ0FBQ1ksV0FoQnJCO0FBaUJFLElBQUEsV0FBVyxFQUFFWixLQUFLLENBQUNhLFdBakJyQjtBQWtCRSxJQUFBLFFBQVEsRUFBRWIsS0FBSyxDQUFDYyxRQWxCbEI7QUFrQjRCLElBQUEsUUFBUSxFQUFFZCxLQUFLLENBQUNlLFFBbEI1QztBQWtCc0QsSUFBQSxPQUFPLEVBQUVmLEtBQUssQ0FBQ2dCO0FBbEJyRSxLQW1CR2hCLEtBQUssQ0FBQ2lCLFFBbkJULENBREY7QUF5QkQsQ0ExQkQ7O0FBNEJBbEIsVUFBVSxDQUFDbUIsWUFBWCxHQUEwQjtBQUN4QkMsRUFBQUEsU0FBUyxFQUFFLEVBRGE7QUFFeEJMLEVBQUFBLFFBQVEsRUFBRSxLQUZjO0FBR3hCQyxFQUFBQSxRQUFRLEVBQUUsS0FIYztBQUl4QkMsRUFBQUEsT0FBTyxFQUFFO0FBSmUsQ0FBMUI7QUFPQWpCLFVBQVUsQ0FBQ3FCLFNBQVgsR0FBdUI7QUFDckJELEVBQUFBLFNBQVMsRUFBRUUsbUJBQVVDLE1BREE7QUFFckJSLEVBQUFBLFFBQVEsRUFBRU8sbUJBQVVFLElBRkM7QUFHckJSLEVBQUFBLFFBQVEsRUFBRU0sbUJBQVVFLElBSEM7QUFJckJQLEVBQUFBLE9BQU8sRUFBRUssbUJBQVVFO0FBSkUsQ0FBdkI7ZUFPZXhCLFUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vc3R5bGVzJ1xuXG5jb25zdCBWSENhcmRCYXNlID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTLkNhcmRcbiAgICAgIG9uQ2xpY2s9e2V2ZW50ID0+IHtcbiAgICAgICAgaWYgKHByb3BzLm9uRXZlbnQpIHtcbiAgICAgICAgICBwcm9wcy5vbkV2ZW50KHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BzLFxuICAgICAgICAgICAgdHlwZTogJ29uQ2xpY2snLFxuICAgICAgICAgICAgdGFyZ2V0OiAnVkhDYXJkQmFzZSdcbiAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgfX1cbiAgICAgIGRyYWdnYWJsZT17cHJvcHMuZHJhZ2dhYmxlfVxuICAgICAgaWQ9e3Byb3BzLmlkfVxuICAgICAgd2lkdGg9e3Byb3BzLndpZHRofVxuICAgICAgaGVpZ2h0PXtwcm9wcy5oZWlnaHR9XG4gICAgICBvbkRyYWdFbnRlcj17cHJvcHMub25EcmFnRW50ZXJ9XG4gICAgICBub1BhZGRpbmc9e3Byb3BzLm5vUGFkZGluZ31cbiAgICAgIG9uRHJhZ0xlYXZlPXtwcm9wcy5vbkRyYWdMZWF2ZX1cbiAgICAgIG9uRHJhZ1N0YXJ0PXtwcm9wcy5vbkRyYWdTdGFydH1cbiAgICAgIG5vQm9yZGVyPXtwcm9wcy5ub0JvcmRlcn0gZmF2b3JpdGU9e3Byb3BzLmZhdm9yaXRlfSBub0hvdmVyPXtwcm9wcy5ub0hvdmVyfT5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cblxuICAgIDwvUy5DYXJkPlxuICApXG5cbn1cblxuVkhDYXJkQmFzZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogJycsXG4gIG5vQm9yZGVyOiBmYWxzZSxcbiAgZmF2b3JpdGU6IGZhbHNlLFxuICBub0hvdmVyOiBmYWxzZSxcbn1cblxuVkhDYXJkQmFzZS5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbm9Cb3JkZXI6IFByb3BUeXBlcy5ib29sLFxuICBmYXZvcml0ZTogUHJvcFR5cGVzLmJvb2wsXG4gIG5vSG92ZXI6IFByb3BUeXBlcy5ib29sLFxufVxuXG5leHBvcnQgZGVmYXVsdCBWSENhcmRCYXNlXG4iXX0=