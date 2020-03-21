"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var S = _interopRequireWildcard(require("./styles"));

var _skeleton = _interopRequireDefault(require("../Cards/VisaProcess/skeleton"));

var _Avatar = _interopRequireDefault(require("../Skeleton/Avatar"));

var _Text = _interopRequireDefault(require("../Skeleton/Text"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHColumn = function VHColumn(props) {
  return /*#__PURE__*/_react.default.createElement(S.Column, {
    id: props.id,
    className: "vh-vp-column-component ".concat(props.className ? props.className : ''),
    onDragEnter: props.onDragEnter,
    onDragLeave: props.onDragLeave,
    onDragOver: props.onDragOver,
    onDrop: props.onDrop
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true,
    className: "vh-vp-row-header-component ".concat(props.className ? props.className : '')
  }, /*#__PURE__*/_react.default.createElement(S.ColumnName, null, props.name), /*#__PURE__*/_react.default.createElement(S.NumberOfCards, null, props.loading ? /*#__PURE__*/_react.default.createElement(_Avatar.default, null) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.total))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    className: "vh-vp-row-avg-time-component ".concat(props.className ? props.className : '')
  }, /*#__PURE__*/_react.default.createElement(S.AvgTime, null, props.loading ? /*#__PURE__*/_react.default.createElement(_Text.default, null) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "Avg Time ".concat(props.avgTime, " days")))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    className: "vh-vp-row-cards-component ".concat(props.className ? props.className : '')
  }, props.loading ? /*#__PURE__*/_react.default.createElement(_skeleton.default, {
    random: true
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.children)));
};

VHColumn.defaultProps = {
  className: ''
};
VHColumn.propTypes = {};
var _default = VHColumn;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQ29sdW1uL2luZGV4LmpzIl0sIm5hbWVzIjpbIlZIQ29sdW1uIiwicHJvcHMiLCJpZCIsImNsYXNzTmFtZSIsIm9uRHJhZ0VudGVyIiwib25EcmFnTGVhdmUiLCJvbkRyYWdPdmVyIiwib25Ecm9wIiwibmFtZSIsImxvYWRpbmciLCJ0b3RhbCIsImF2Z1RpbWUiLCJjaGlsZHJlbiIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQUMsS0FBSyxFQUFJO0FBQ3hCLHNCQUNFLDZCQUFDLENBQUQsQ0FBRyxNQUFIO0FBQ0UsSUFBQSxFQUFFLEVBQUVBLEtBQUssQ0FBQ0MsRUFEWjtBQUVFLElBQUEsU0FBUyxtQ0FBNEJELEtBQUssQ0FBQ0UsU0FBTixHQUFrQkYsS0FBSyxDQUFDRSxTQUF4QixHQUFvQyxFQUFoRSxDQUZYO0FBR0UsSUFBQSxXQUFXLEVBQUVGLEtBQUssQ0FBQ0csV0FIckI7QUFJRSxJQUFBLFdBQVcsRUFBRUgsS0FBSyxDQUFDSSxXQUpyQjtBQUtFLElBQUEsVUFBVSxFQUFFSixLQUFLLENBQUNLLFVBTHBCO0FBTUUsSUFBQSxNQUFNLEVBQUVMLEtBQUssQ0FBQ007QUFOaEIsa0JBT0UsNkJBQUMsU0FBRDtBQUFLLElBQUEsR0FBRyxNQUFSO0FBQVMsSUFBQSxnQkFBZ0IsTUFBekI7QUFBMEIsSUFBQSxTQUFTLHVDQUFnQ04sS0FBSyxDQUFDRSxTQUFOLEdBQWtCRixLQUFLLENBQUNFLFNBQXhCLEdBQW9DLEVBQXBFO0FBQW5DLGtCQUNFLDZCQUFDLENBQUQsQ0FBRyxVQUFILFFBQWVGLEtBQUssQ0FBQ08sSUFBckIsQ0FERixlQUVFLDZCQUFDLENBQUQsQ0FBRyxhQUFILFFBRUlQLEtBQUssQ0FBQ1EsT0FBTixnQkFDRSw2QkFBQyxlQUFELE9BREYsZ0JBRUUsNERBQUdSLEtBQUssQ0FBQ1MsS0FBVCxDQUpOLENBRkYsQ0FQRixlQWlCRSw2QkFBQyxTQUFEO0FBQUssSUFBQSxTQUFTLHlDQUFrQ1QsS0FBSyxDQUFDRSxTQUFOLEdBQWtCRixLQUFLLENBQUNFLFNBQXhCLEdBQW9DLEVBQXRFO0FBQWQsa0JBQ0UsNkJBQUMsQ0FBRCxDQUFHLE9BQUgsUUFFSUYsS0FBSyxDQUFDUSxPQUFOLGdCQUNFLDZCQUFDLGFBQUQsT0FERixnQkFFRSwrRUFBZVIsS0FBSyxDQUFDVSxPQUFyQixXQUpOLENBREYsQ0FqQkYsZUEwQkUsNkJBQUMsU0FBRDtBQUFLLElBQUEsU0FBUyxzQ0FBK0JWLEtBQUssQ0FBQ0UsU0FBTixHQUFrQkYsS0FBSyxDQUFDRSxTQUF4QixHQUFvQyxFQUFuRTtBQUFkLEtBRUVGLEtBQUssQ0FBQ1EsT0FBTixnQkFDRSw2QkFBQyxpQkFBRDtBQUEyQixJQUFBLE1BQU07QUFBakMsSUFERixnQkFFRSw0REFBR1IsS0FBSyxDQUFDVyxRQUFULENBSkosQ0ExQkYsQ0FERjtBQXFDRCxDQXRDRDs7QUF3Q0FaLFFBQVEsQ0FBQ2EsWUFBVCxHQUF3QjtBQUN0QlYsRUFBQUEsU0FBUyxFQUFFO0FBRFcsQ0FBeEI7QUFJQUgsUUFBUSxDQUFDYyxTQUFULEdBQXFCLEVBQXJCO2VBSWVkLFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBSb3cgfSBmcm9tIFwiLi4vLi4vR3JpZFwiO1xuXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vc3R5bGVzJ1xuaW1wb3J0IFZIQ2FyZFZpc2FQcm9jZXNzU2tlbGV0b24gZnJvbSBcIi4uL0NhcmRzL1Zpc2FQcm9jZXNzL3NrZWxldG9uXCI7XG5pbXBvcnQgVkhBdmF0YXJTa2VsZXRvbiBmcm9tIFwiLi4vU2tlbGV0b24vQXZhdGFyXCI7XG5pbXBvcnQgVkhUZXh0U2tlbGV0b24gZnJvbSBcIi4uL1NrZWxldG9uL1RleHRcIjtcblxuY29uc3QgVkhDb2x1bW4gPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPFMuQ29sdW1uXG4gICAgICBpZD17cHJvcHMuaWR9XG4gICAgICBjbGFzc05hbWU9e2B2aC12cC1jb2x1bW4tY29tcG9uZW50ICR7cHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogJyd9YH1cbiAgICAgIG9uRHJhZ0VudGVyPXtwcm9wcy5vbkRyYWdFbnRlcn1cbiAgICAgIG9uRHJhZ0xlYXZlPXtwcm9wcy5vbkRyYWdMZWF2ZX1cbiAgICAgIG9uRHJhZ092ZXI9e3Byb3BzLm9uRHJhZ092ZXJ9XG4gICAgICBvbkRyb3A9e3Byb3BzLm9uRHJvcH0+XG4gICAgICA8Um93IHJvdyBhbGlnbkl0ZW1zQ2VudGVyIGNsYXNzTmFtZT17YHZoLXZwLXJvdy1oZWFkZXItY29tcG9uZW50ICR7cHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogJyd9YH0+XG4gICAgICAgIDxTLkNvbHVtbk5hbWU+e3Byb3BzLm5hbWV9PC9TLkNvbHVtbk5hbWU+XG4gICAgICAgIDxTLk51bWJlck9mQ2FyZHM+XG4gICAgICAgICAge1xuICAgICAgICAgICAgcHJvcHMubG9hZGluZ1xuICAgICAgICAgICAgPyA8VkhBdmF0YXJTa2VsZXRvbiAvPlxuICAgICAgICAgICAgOiA8Pntwcm9wcy50b3RhbH08Lz5cbiAgICAgICAgICB9XG4gICAgICAgIDwvUy5OdW1iZXJPZkNhcmRzPlxuICAgICAgPC9Sb3c+XG4gICAgICA8Um93IGNsYXNzTmFtZT17YHZoLXZwLXJvdy1hdmctdGltZS1jb21wb25lbnQgJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJ31gfT5cbiAgICAgICAgPFMuQXZnVGltZT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBwcm9wcy5sb2FkaW5nXG4gICAgICAgICAgICA/IDxWSFRleHRTa2VsZXRvbiAvPlxuICAgICAgICAgICAgOiA8PntgQXZnIFRpbWUgJHtwcm9wcy5hdmdUaW1lfSBkYXlzYH08Lz5cbiAgICAgICAgICB9XG4gICAgICAgIDwvUy5BdmdUaW1lPlxuICAgICAgPC9Sb3c+XG4gICAgICA8Um93IGNsYXNzTmFtZT17YHZoLXZwLXJvdy1jYXJkcy1jb21wb25lbnQgJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJ31gfT5cbiAgICAgIHtcbiAgICAgICAgcHJvcHMubG9hZGluZ1xuICAgICAgICA/IDxWSENhcmRWaXNhUHJvY2Vzc1NrZWxldG9uIHJhbmRvbSAvPlxuICAgICAgICA6IDw+e3Byb3BzLmNoaWxkcmVufTwvPlxuICAgICAgfVxuICAgICAgPC9Sb3c+XG4gICAgPC9TLkNvbHVtbj5cbiAgKVxuXG59XG5cblZIQ29sdW1uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiAnJyxcbn1cblxuVkhDb2x1bW4ucHJvcFR5cGVzID0ge1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZIQ29sdW1uXG4iXX0=