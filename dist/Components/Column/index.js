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
  return _react.default.createElement(S.Column, {
    id: props.id,
    className: "vh-vp-column-component ".concat(props.className ? props.className : ''),
    onDragEnter: props.onDragEnter,
    onDragLeave: props.onDragLeave,
    onDragOver: props.onDragOver,
    onDrop: props.onDrop
  }, _react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true,
    className: "vh-vp-row-header-component ".concat(props.className ? props.className : '')
  }, _react.default.createElement(S.ColumnName, null, props.name), _react.default.createElement(S.NumberOfCards, null, props.loading ? _react.default.createElement(_Avatar.default, null) : _react.default.createElement(_react.default.Fragment, null, props.total))), _react.default.createElement(_Grid.Row, {
    className: "vh-vp-row-avg-time-component ".concat(props.className ? props.className : '')
  }, _react.default.createElement(S.AvgTime, null, props.loading ? _react.default.createElement(_Text.default, null) : _react.default.createElement(_react.default.Fragment, null, "Avg Time ".concat(props.avgTime, " days")))), _react.default.createElement(_Grid.Row, {
    className: "vh-vp-row-cards-component ".concat(props.className ? props.className : '')
  }, props.loading ? _react.default.createElement(_skeleton.default, {
    random: true
  }) : _react.default.createElement(_react.default.Fragment, null, props.children)));
};

VHColumn.defaultProps = {
  className: ''
};
VHColumn.propTypes = {};
var _default = VHColumn;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQ29sdW1uL2luZGV4LmpzIl0sIm5hbWVzIjpbIlZIQ29sdW1uIiwicHJvcHMiLCJpZCIsImNsYXNzTmFtZSIsIm9uRHJhZ0VudGVyIiwib25EcmFnTGVhdmUiLCJvbkRyYWdPdmVyIiwib25Ecm9wIiwibmFtZSIsImxvYWRpbmciLCJ0b3RhbCIsImF2Z1RpbWUiLCJjaGlsZHJlbiIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQUMsS0FBSyxFQUFJO0FBQ3hCLFNBQ0UsNkJBQUMsQ0FBRCxDQUFHLE1BQUg7QUFDRSxJQUFBLEVBQUUsRUFBRUEsS0FBSyxDQUFDQyxFQURaO0FBRUUsSUFBQSxTQUFTLG1DQUE0QkQsS0FBSyxDQUFDRSxTQUFOLEdBQWtCRixLQUFLLENBQUNFLFNBQXhCLEdBQW9DLEVBQWhFLENBRlg7QUFHRSxJQUFBLFdBQVcsRUFBRUYsS0FBSyxDQUFDRyxXQUhyQjtBQUlFLElBQUEsV0FBVyxFQUFFSCxLQUFLLENBQUNJLFdBSnJCO0FBS0UsSUFBQSxVQUFVLEVBQUVKLEtBQUssQ0FBQ0ssVUFMcEI7QUFNRSxJQUFBLE1BQU0sRUFBRUwsS0FBSyxDQUFDTTtBQU5oQixLQU9FLDZCQUFDLFNBQUQ7QUFBSyxJQUFBLEdBQUcsTUFBUjtBQUFTLElBQUEsZ0JBQWdCLE1BQXpCO0FBQTBCLElBQUEsU0FBUyx1Q0FBZ0NOLEtBQUssQ0FBQ0UsU0FBTixHQUFrQkYsS0FBSyxDQUFDRSxTQUF4QixHQUFvQyxFQUFwRTtBQUFuQyxLQUNFLDZCQUFDLENBQUQsQ0FBRyxVQUFILFFBQWVGLEtBQUssQ0FBQ08sSUFBckIsQ0FERixFQUVFLDZCQUFDLENBQUQsQ0FBRyxhQUFILFFBRUlQLEtBQUssQ0FBQ1EsT0FBTixHQUNFLDZCQUFDLGVBQUQsT0FERixHQUVFLDREQUFHUixLQUFLLENBQUNTLEtBQVQsQ0FKTixDQUZGLENBUEYsRUFpQkUsNkJBQUMsU0FBRDtBQUFLLElBQUEsU0FBUyx5Q0FBa0NULEtBQUssQ0FBQ0UsU0FBTixHQUFrQkYsS0FBSyxDQUFDRSxTQUF4QixHQUFvQyxFQUF0RTtBQUFkLEtBQ0UsNkJBQUMsQ0FBRCxDQUFHLE9BQUgsUUFFSUYsS0FBSyxDQUFDUSxPQUFOLEdBQ0UsNkJBQUMsYUFBRCxPQURGLEdBRUUsK0VBQWVSLEtBQUssQ0FBQ1UsT0FBckIsV0FKTixDQURGLENBakJGLEVBMEJFLDZCQUFDLFNBQUQ7QUFBSyxJQUFBLFNBQVMsc0NBQStCVixLQUFLLENBQUNFLFNBQU4sR0FBa0JGLEtBQUssQ0FBQ0UsU0FBeEIsR0FBb0MsRUFBbkU7QUFBZCxLQUVFRixLQUFLLENBQUNRLE9BQU4sR0FDRSw2QkFBQyxpQkFBRDtBQUEyQixJQUFBLE1BQU07QUFBakMsSUFERixHQUVFLDREQUFHUixLQUFLLENBQUNXLFFBQVQsQ0FKSixDQTFCRixDQURGO0FBcUNELENBdENEOztBQXdDQVosUUFBUSxDQUFDYSxZQUFULEdBQXdCO0FBQ3RCVixFQUFBQSxTQUFTLEVBQUU7QUFEVyxDQUF4QjtBQUlBSCxRQUFRLENBQUNjLFNBQVQsR0FBcUIsRUFBckI7ZUFJZWQsUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFJvdyB9IGZyb20gXCIuLi8uLi9HcmlkXCI7XG5cbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9zdHlsZXMnXG5pbXBvcnQgVkhDYXJkVmlzYVByb2Nlc3NTa2VsZXRvbiBmcm9tIFwiLi4vQ2FyZHMvVmlzYVByb2Nlc3Mvc2tlbGV0b25cIjtcbmltcG9ydCBWSEF2YXRhclNrZWxldG9uIGZyb20gXCIuLi9Ta2VsZXRvbi9BdmF0YXJcIjtcbmltcG9ydCBWSFRleHRTa2VsZXRvbiBmcm9tIFwiLi4vU2tlbGV0b24vVGV4dFwiO1xuXG5jb25zdCBWSENvbHVtbiA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Uy5Db2x1bW5cbiAgICAgIGlkPXtwcm9wcy5pZH1cbiAgICAgIGNsYXNzTmFtZT17YHZoLXZwLWNvbHVtbi1jb21wb25lbnQgJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJ31gfVxuICAgICAgb25EcmFnRW50ZXI9e3Byb3BzLm9uRHJhZ0VudGVyfVxuICAgICAgb25EcmFnTGVhdmU9e3Byb3BzLm9uRHJhZ0xlYXZlfVxuICAgICAgb25EcmFnT3Zlcj17cHJvcHMub25EcmFnT3Zlcn1cbiAgICAgIG9uRHJvcD17cHJvcHMub25Ecm9wfT5cbiAgICAgIDxSb3cgcm93IGFsaWduSXRlbXNDZW50ZXIgY2xhc3NOYW1lPXtgdmgtdnAtcm93LWhlYWRlci1jb21wb25lbnQgJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJ31gfT5cbiAgICAgICAgPFMuQ29sdW1uTmFtZT57cHJvcHMubmFtZX08L1MuQ29sdW1uTmFtZT5cbiAgICAgICAgPFMuTnVtYmVyT2ZDYXJkcz5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBwcm9wcy5sb2FkaW5nXG4gICAgICAgICAgICA/IDxWSEF2YXRhclNrZWxldG9uIC8+XG4gICAgICAgICAgICA6IDw+e3Byb3BzLnRvdGFsfTwvPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9TLk51bWJlck9mQ2FyZHM+XG4gICAgICA8L1Jvdz5cbiAgICAgIDxSb3cgY2xhc3NOYW1lPXtgdmgtdnAtcm93LWF2Zy10aW1lLWNvbXBvbmVudCAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9PlxuICAgICAgICA8Uy5BdmdUaW1lPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHByb3BzLmxvYWRpbmdcbiAgICAgICAgICAgID8gPFZIVGV4dFNrZWxldG9uIC8+XG4gICAgICAgICAgICA6IDw+e2BBdmcgVGltZSAke3Byb3BzLmF2Z1RpbWV9IGRheXNgfTwvPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9TLkF2Z1RpbWU+XG4gICAgICA8L1Jvdz5cbiAgICAgIDxSb3cgY2xhc3NOYW1lPXtgdmgtdnAtcm93LWNhcmRzLWNvbXBvbmVudCAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9PlxuICAgICAge1xuICAgICAgICBwcm9wcy5sb2FkaW5nXG4gICAgICAgID8gPFZIQ2FyZFZpc2FQcm9jZXNzU2tlbGV0b24gcmFuZG9tIC8+XG4gICAgICAgIDogPD57cHJvcHMuY2hpbGRyZW59PC8+XG4gICAgICB9XG4gICAgICA8L1Jvdz5cbiAgICA8L1MuQ29sdW1uPlxuICApXG5cbn1cblxuVkhDb2x1bW4uZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6ICcnLFxufVxuXG5WSENvbHVtbi5wcm9wVHlwZXMgPSB7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVkhDb2x1bW5cbiJdfQ==