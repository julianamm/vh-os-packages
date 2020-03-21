"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var S = _interopRequireWildcard(require("./styles"));

var _TitleDescription = _interopRequireDefault(require("../TitleDescription"));

var _Text = _interopRequireDefault(require("../Text"));

var _Grid = require("../../Grid");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHTimeLine = function VHTimeLine(props) {
  var getDate = function getDate(date) {
    return new Date(date).toDateString().slice(4, 10);
  };

  var getDay = function getDay(date) {
    return new Date(date).getDate();
  };

  var dates = props.items.map(function (item) {
    return getDay(item.createdOn);
  });
  return /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginTop: -110,
    marginBottom: 10,
    height: 300,
    overflowY: 'scroll',
    className: "vh-time-line ".concat(props.className ? props.className : "")
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true,
    justifySpaceBetween: true
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    onEvent: props.onEvent,
    text: "ACTIVITY",
    variant: "subtitle2",
    color: "gray-90"
  }), /*#__PURE__*/_react.default.createElement(_Text.default, {
    onEvent: props.onEvent,
    text: "Total: ".concat(props.totalDays),
    variant: "caption",
    color: "gray-50"
  })), /*#__PURE__*/_react.default.createElement(S.Group, null, props.items.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(S.Item, {
      key: "vh-time-line-item".concat(index)
    }, /*#__PURE__*/_react.default.createElement(S.Circle, null), /*#__PURE__*/_react.default.createElement(S.WrapperText, null, /*#__PURE__*/_react.default.createElement(S.Date, null, getDate(item.createdOn), /*#__PURE__*/_react.default.createElement(_Text.default, {
      onEvent: props.onEvent,
      text: dates[index + 1] !== undefined && " ".concat(dates[index] - dates[index + 1] < 0 ? -(dates[index] - dates[index + 1]) : dates[index] - dates[index + 1], " days"),
      variant: "caption",
      color: "gray-50"
    })), item.items.length > 1 ? /*#__PURE__*/_react.default.createElement(_Grid.Row, null, item.items.map(function (item) {
      return /*#__PURE__*/_react.default.createElement(S.WrapperSameDate, {
        key: "vh-time-line-".concat(item.columnName)
      }, /*#__PURE__*/_react.default.createElement(_TitleDescription.default, {
        className: "vh-title-description-time-line",
        data: item,
        description: item.description,
        descriptionColor: "gray-50",
        descriptionVariant: "caption",
        onEvent: props.onEvent,
        title: item.columnName,
        titleColor: "gray-90",
        titleVariant: "platform2"
      }));
    })) : /*#__PURE__*/_react.default.createElement(_Grid.Row, null, item.items.map(function (item) {
      return /*#__PURE__*/_react.default.createElement(_TitleDescription.default, {
        key: "vh-time-line-".concat(item.columnName),
        className: "vh-title-description-time-line",
        data: item,
        description: item.description,
        descriptionColor: "gray-50",
        descriptionVariant: "caption",
        onEvent: props.onEvent,
        title: item.columnName,
        titleColor: "gray-90",
        titleVariant: "platform2"
      });
    }))));
  })));
};

VHTimeLine.defaultProps = {
  items: [],
  totalDays: "",
  className: "",
  onEvent: null
};
VHTimeLine.propTypes = {
  items: _propTypes.default.array,
  totalDays: _propTypes.default.string,
  className: _propTypes.default.string,
  onEvent: _propTypes.default.func
};
var _default = VHTimeLine;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVGltZUxpbmUvaW5kZXguanN4Il0sIm5hbWVzIjpbIlZIVGltZUxpbmUiLCJwcm9wcyIsImdldERhdGUiLCJkYXRlIiwiRGF0ZSIsInRvRGF0ZVN0cmluZyIsInNsaWNlIiwiZ2V0RGF5IiwiZGF0ZXMiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJjcmVhdGVkT24iLCJjbGFzc05hbWUiLCJvbkV2ZW50IiwidG90YWxEYXlzIiwiaW5kZXgiLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJjb2x1bW5OYW1lIiwiZGVzY3JpcHRpb24iLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsInN0cmluZyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFDLEtBQUssRUFBSTtBQUMxQixNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFBQyxJQUFJO0FBQUEsV0FBSSxJQUFJQyxJQUFKLENBQVNELElBQVQsRUFBZUUsWUFBZixHQUE4QkMsS0FBOUIsQ0FBb0MsQ0FBcEMsRUFBdUMsRUFBdkMsQ0FBSjtBQUFBLEdBQXBCOztBQUNBLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFKLElBQUk7QUFBQSxXQUFJLElBQUlDLElBQUosQ0FBU0QsSUFBVCxFQUFlRCxPQUFmLEVBQUo7QUFBQSxHQUFuQjs7QUFFQSxNQUFNTSxLQUFLLEdBQUdQLEtBQUssQ0FBQ1EsS0FBTixDQUFZQyxHQUFaLENBQWdCLFVBQUFDLElBQUksRUFBSTtBQUNwQyxXQUFPSixNQUFNLENBQUNJLElBQUksQ0FBQ0MsU0FBTixDQUFiO0FBQ0QsR0FGYSxDQUFkO0FBS0Esc0JBQ0UsNkJBQUMsU0FBRDtBQUFLLElBQUEsU0FBUyxFQUFFLENBQUMsR0FBakI7QUFBc0Is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LElBQUksRUFBSTtBQUN0QiwwQkFDRSw2QkFBQyx5QkFBRDtBQUNFLFFBQUEsR0FBRyx5QkFBa0JBLElBQUksQ0FBQ1EsVUFBdkIsQ0FETDtBQUVFLFFBQUEsU0FBUyxFQUFDLGdDQUZaO0FBR0UsUUFBQSxJQUFJLEVBQUVSLElBSFI7QUFJRSxRQUFBLFdBQVcsRUFBRUEsSUFBSSxDQUFDUyxXQUpwQjtBQUtFLFFBQUEsZ0JBQWdCLEVBQUMsU0FMbkI7QUFNRSxRQUFBLGtCQUFrQixFQUFDLFNBTnJCO0FBT0UsUUFBQSxPQUFPLEVBQUVuQixLQUFLLENBQUNhLE9BUGpCO0FBUUUsUUFBQSxLQUFLLEVBQUVILElBQUksQ0FBQ1EsVUFSZDtBQVNFLFFBQUEsVUFBVSxFQUFDLFNBVGI7QUFVRSxRQUFBLFlBQVksRUFBQztBQVZmLFFBREY7QUFjRCxLQWZBLENBREgsQ0EvQkosQ0FGRixDQURGO0FBd0RELEdBekRBLENBREgsQ0FmRixDQURGO0FBOEVELENBdkZEOztBQXlGQW5CLFVBQVUsQ0FBQ3FCLFlBQVgsR0FBMEI7QUFDeEJaLEVBQUFBLEtBQUssRUFBRSxFQURpQjtBQUV4Qk0sRUFBQUEsU0FBUyxFQUFFLEVBRmE7QUFHeEJGLEVBQUFBLFNBQVMsRUFBRSxFQUhhO0FBSXhCQyxFQUFBQSxPQUFPLEVBQUU7QUFKZSxDQUExQjtBQU9BZCxVQUFVLENBQUNzQixTQUFYLEdBQXVCO0FBQ3JCYixFQUFBQSxLQUFLLEVBQUVjLG1CQUFVQyxLQURJO0FBRXJCVCxFQUFBQSxTQUFTLEVBQUVRLG1CQUFVRSxNQUZBO0FBR3JCWixFQUFBQSxTQUFTLEVBQUVVLG1CQUFVRSxNQUhBO0FBSXJCWCxFQUFBQSxPQUFPLEVBQUVTLG1CQUFVRztBQUpFLENBQXZCO2VBT2UxQixVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0ICogYXMgUyBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCBWSFRpdGxlRGVzY3JpcHRpb24gZnJvbSBcIi4uL1RpdGxlRGVzY3JpcHRpb25cIjtcbmltcG9ydCBWSFRleHQgZnJvbSBcIi4uL1RleHRcIjtcbmltcG9ydCB7IFJvdyB9IGZyb20gXCIuLi8uLi9HcmlkXCI7XG5cbmNvbnN0IFZIVGltZUxpbmUgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IGdldERhdGUgPSBkYXRlID0+IG5ldyBEYXRlKGRhdGUpLnRvRGF0ZVN0cmluZygpLnNsaWNlKDQsIDEwKTtcbiAgY29uc3QgZ2V0RGF5ID0gZGF0ZSA9PiBuZXcgRGF0ZShkYXRlKS5nZXREYXRlKClcblxuICBjb25zdCBkYXRlcyA9IHByb3BzLml0ZW1zLm1hcChpdGVtID0+IHtcbiAgICByZXR1cm4gZ2V0RGF5KGl0ZW0uY3JlYXRlZE9uKVxuICB9KVxuXG5cbiAgcmV0dXJuIChcbiAgICA8Um93IG1hcmdpblRvcD17LTExMH0gbWFyZ2luQm90dG9tPXsxMH0gaGVpZ2h0PXszMDB9IG92ZXJmbG93WT17J3Njcm9sbCd9IGNsYXNzTmFtZT17YHZoLXRpbWUtbGluZSAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6IFwiXCJ9YH0+XG4gICAgICA8Um93IHJvdyBhbGlnbkl0ZW1zQ2VudGVyIGp1c3RpZnlTcGFjZUJldHdlZW4+XG4gICAgICAgIDxWSFRleHRcbiAgICAgICAgICBvbkV2ZW50PXtwcm9wcy5vbkV2ZW50fVxuICAgICAgICAgIHRleHQ9XCJBQ1RJVklUWVwiXG4gICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMlwiXG4gICAgICAgICAgY29sb3I9XCJncmF5LTkwXCJcbiAgICAgICAgLz5cbiAgICAgICAgPFZIVGV4dFxuICAgICAgICAgIG9uRXZlbnQ9e3Byb3BzLm9uRXZlbnR9XG4gICAgICAgICAgdGV4dD17YFRvdGFsOiAke3Byb3BzLnRvdGFsRGF5c31gfVxuICAgICAgICAgIHZhcmlhbnQ9XCJjYXB0aW9uXCJcbiAgICAgICAgICBjb2xvcj1cImdyYXktNTBcIlxuICAgICAgICAvPlxuICAgICAgPC9Sb3c+XG4gICAgICA8Uy5Hcm91cD5cbiAgICAgICAge3Byb3BzLml0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFMuSXRlbSBrZXk9e2B2aC10aW1lLWxpbmUtaXRlbSR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgIDxTLkNpcmNsZSAvPlxuICAgICAgICAgICAgICA8Uy5XcmFwcGVyVGV4dD5cbiAgICAgICAgICAgICAgICA8Uy5EYXRlPlxuICAgICAgICAgICAgICAgICAge2dldERhdGUoaXRlbS5jcmVhdGVkT24pfVxuICAgICAgICAgICAgICAgICAgPFZIVGV4dFxuICAgICAgICAgICAgICAgICAgICBvbkV2ZW50PXtwcm9wcy5vbkV2ZW50fVxuICAgICAgICAgICAgICAgICAgICB0ZXh0PXsgZGF0ZXNbaW5kZXggKyAxXSAhPT0gdW5kZWZpbmVkICYmIGAgJHsoZGF0ZXNbaW5kZXhdIC0gZGF0ZXNbaW5kZXggKyAxXSkgPCAwID8gLShkYXRlc1tpbmRleF0gLSBkYXRlc1tpbmRleCArIDFdKTogKGRhdGVzW2luZGV4XSAtIGRhdGVzW2luZGV4ICsgMV0pfSBkYXlzYCB9XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjYXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJncmF5LTUwXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9TLkRhdGU+XG4gICAgICAgICAgICAgICAge2l0ZW0uaXRlbXMubGVuZ3RoID4gMSA/IChcbiAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLml0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFMuV3JhcHBlclNhbWVEYXRlIGtleT17YHZoLXRpbWUtbGluZS0ke2l0ZW0uY29sdW1uTmFtZX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFZIVGl0bGVEZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInZoLXRpdGxlLWRlc2NyaXB0aW9uLXRpbWUtbGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkNvbG9yPVwiZ3JheS01MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25WYXJpYW50PVwiY2FwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FdmVudD17cHJvcHMub25FdmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS5jb2x1bW5OYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlQ29sb3I9XCJncmF5LTkwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZVZhcmlhbnQ9XCJwbGF0Zm9ybTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TLldyYXBwZXJTYW1lRGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5pdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxWSFRpdGxlRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgdmgtdGltZS1saW5lLSR7aXRlbS5jb2x1bW5OYW1lfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInZoLXRpdGxlLWRlc2NyaXB0aW9uLXRpbWUtbGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtpdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkNvbG9yPVwiZ3JheS01MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uVmFyaWFudD1cImNhcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkV2ZW50PXtwcm9wcy5vbkV2ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS5jb2x1bW5OYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUNvbG9yPVwiZ3JheS05MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlVmFyaWFudD1cInBsYXRmb3JtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9TLldyYXBwZXJUZXh0PlxuICAgICAgICAgICAgPC9TLkl0ZW0+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L1MuR3JvdXA+XG4gICAgPC9Sb3c+XG4gICk7XG59O1xuXG5WSFRpbWVMaW5lLmRlZmF1bHRQcm9wcyA9IHtcbiAgaXRlbXM6IFtdLFxuICB0b3RhbERheXM6IFwiXCIsXG4gIGNsYXNzTmFtZTogXCJcIixcbiAgb25FdmVudDogbnVsbFxufTtcblxuVkhUaW1lTGluZS5wcm9wVHlwZXMgPSB7XG4gIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXksXG4gIHRvdGFsRGF5czogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkV2ZW50OiBQcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVkhUaW1lTGluZTtcbiJdfQ==