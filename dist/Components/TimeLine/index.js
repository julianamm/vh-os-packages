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
  return _react.default.createElement(_Grid.Row, {
    marginTop: -110,
    marginBottom: 10,
    height: 300,
    overflowY: 'scroll',
    className: "vh-time-line ".concat(props.className ? props.className : "")
  }, _react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true,
    justifySpaceBetween: true
  }, _react.default.createElement(_Text.default, {
    onEvent: props.onEvent,
    text: "ACTIVITY",
    variant: "subtitle2",
    color: "gray-90"
  }), _react.default.createElement(_Text.default, {
    onEvent: props.onEvent,
    text: "Total: ".concat(props.totalDays),
    variant: "caption",
    color: "gray-50"
  })), _react.default.createElement(S.Group, null, props.items.map(function (item, index) {
    return _react.default.createElement(S.Item, {
      key: "vh-time-line-item".concat(index)
    }, _react.default.createElement(S.Circle, null), _react.default.createElement(S.WrapperText, null, _react.default.createElement(S.Date, null, getDate(item.createdOn), _react.default.createElement(_Text.default, {
      onEvent: props.onEvent,
      text: dates[index + 1] !== undefined && " ".concat(dates[index] - dates[index + 1] < 0 ? -(dates[index] - dates[index + 1]) : dates[index] - dates[index + 1], " days"),
      variant: "caption",
      color: "gray-50"
    })), item.items.length > 1 ? _react.default.createElement(_Grid.Row, null, item.items.map(function (item) {
      return _react.default.createElement(S.WrapperSameDate, {
        key: "vh-time-line-".concat(item.columnName)
      }, _react.default.createElement(_TitleDescription.default, {
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
    })) : _react.default.createElement(_Grid.Row, null, item.items.map(function (item) {
      return _react.default.createElement(_TitleDescription.default, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVGltZUxpbmUvaW5kZXguanN4Il0sIm5hbWVzIjpbIlZIVGltZUxpbmUiLCJwcm9wcyIsImdldERhdGUiLCJkYXRlIiwiRGF0ZSIsInRvRGF0ZVN0cmluZyIsInNsaWNlIiwiZ2V0RGF5IiwiZGF0ZXMiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJjcmVhdGVkT24iLCJjbGFzc05hbWUiLCJvbkV2ZW50IiwidG90YWxEYXlzIiwiaW5kZXgiLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJjb2x1bW5OYW1lIiwiZGVzY3JpcHRpb24iLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsInN0cmluZyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFDLEtBQUssRUFBSTtBQUMxQixNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFBQyxJQUFJO0FBQUEsV0FBSSxJQUFJQyxJQUFKLENBQVNELElBQVQsRUFBZUUsWUFBZixHQUE4QkMsS0FBOUIsQ0FBb0MsQ0FBcEMsRUFBdUMsRUFBdkMsQ0FBSjtBQUFBLEdBQXBCOztBQUNBLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFKLElBQUk7QUFBQSxXQUFJLElBQUlDLElBQUosQ0FBU0QsSUFBVCxFQUFlRCxPQUFmLEVBQUo7QUFBQSxHQUFuQjs7QUFFQSxNQUFNTSxLQUFLLEdBQUdQLEtBQUssQ0FBQ1EsS0FBTixDQUFZQyxHQUFaLENBQWdCLFVBQUFDLElBQUksRUFBSTtBQUNwQyxXQUFPSixNQUFNLENBQUNJLElBQUksQ0FBQ0MsU0FBTixDQUFiO0FBQ0QsR0FGYSxDQUFkO0FBS0EsU0FDRSw2QkFBQyxTQUFEO0FBQUssSUFBQSxTQUFTLEVBQUUsQ0FBQyxHQUFqQjtBQUFzQixJ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O0FBQ3RCLGFBQ0UsNkJBQUMseUJBQUQ7QUFDRSxRQUFBLEdBQUcseUJBQWtCQSxJQUFJLENBQUNRLFVBQXZCLENBREw7QUFFRSxRQUFBLFNBQVMsRUFBQyxnQ0FGWjtBQUdFLFFBQUEsSUFBSSxFQUFFUixJQUhSO0FBSUUsUUFBQSxXQUFXLEVBQUVBLElBQUksQ0FBQ1MsV0FKcEI7QUFLRSxRQUFBLGdCQUFnQixFQUFDLFNBTG5CO0FBTUUsUUFBQSxrQkFBa0IsRUFBQyxTQU5yQjtBQU9FLFFBQUEsT0FBTyxFQUFFbkIsS0FBSyxDQUFDYSxPQVBqQjtBQVFFLFFBQUEsS0FBSyxFQUFFSCxJQUFJLENBQUNRLFVBUmQ7QUFTRSxRQUFBLFVBQVUsRUFBQyxTQVRiO0FBVUUsUUFBQSxZQUFZLEVBQUM7QUFWZixRQURGO0FBY0QsS0FmQSxDQURILENBL0JKLENBRkYsQ0FERjtBQXdERCxHQXpEQSxDQURILENBZkYsQ0FERjtBQThFRCxDQXZGRDs7QUF5RkFuQixVQUFVLENBQUNxQixZQUFYLEdBQTBCO0FBQ3hCWixFQUFBQSxLQUFLLEVBQUUsRUFEaUI7QUFFeEJNLEVBQUFBLFNBQVMsRUFBRSxFQUZhO0FBR3hCRixFQUFBQSxTQUFTLEVBQUUsRUFIYTtBQUl4QkMsRUFBQUEsT0FBTyxFQUFFO0FBSmUsQ0FBMUI7QUFPQWQsVUFBVSxDQUFDc0IsU0FBWCxHQUF1QjtBQUNyQmIsRUFBQUEsS0FBSyxFQUFFYyxtQkFBVUMsS0FESTtBQUVyQlQsRUFBQUEsU0FBUyxFQUFFUSxtQkFBVUUsTUFGQTtBQUdyQlosRUFBQUEsU0FBUyxFQUFFVSxtQkFBVUUsTUFIQTtBQUlyQlgsRUFBQUEsT0FBTyxFQUFFUyxtQkFBVUc7QUFKRSxDQUF2QjtlQU9lMUIsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCAqIGFzIFMgZnJvbSBcIi4vc3R5bGVzXCI7XG5pbXBvcnQgVkhUaXRsZURlc2NyaXB0aW9uIGZyb20gXCIuLi9UaXRsZURlc2NyaXB0aW9uXCI7XG5pbXBvcnQgVkhUZXh0IGZyb20gXCIuLi9UZXh0XCI7XG5pbXBvcnQgeyBSb3cgfSBmcm9tIFwiLi4vLi4vR3JpZFwiO1xuXG5jb25zdCBWSFRpbWVMaW5lID0gcHJvcHMgPT4ge1xuICBjb25zdCBnZXREYXRlID0gZGF0ZSA9PiBuZXcgRGF0ZShkYXRlKS50b0RhdGVTdHJpbmcoKS5zbGljZSg0LCAxMCk7XG4gIGNvbnN0IGdldERheSA9IGRhdGUgPT4gbmV3IERhdGUoZGF0ZSkuZ2V0RGF0ZSgpXG5cbiAgY29uc3QgZGF0ZXMgPSBwcm9wcy5pdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgcmV0dXJuIGdldERheShpdGVtLmNyZWF0ZWRPbilcbiAgfSlcblxuXG4gIHJldHVybiAoXG4gICAgPFJvdyBtYXJnaW5Ub3A9ey0xMTB9IG1hcmdpbkJvdHRvbT17MTB9IGhlaWdodD17MzAwfSBvdmVyZmxvd1k9eydzY3JvbGwnfSBjbGFzc05hbWU9e2B2aC10aW1lLWxpbmUgJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiBcIlwifWB9PlxuICAgICAgPFJvdyByb3cgYWxpZ25JdGVtc0NlbnRlciBqdXN0aWZ5U3BhY2VCZXR3ZWVuPlxuICAgICAgICA8VkhUZXh0XG4gICAgICAgICAgb25FdmVudD17cHJvcHMub25FdmVudH1cbiAgICAgICAgICB0ZXh0PVwiQUNUSVZJVFlcIlxuICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIlxuICAgICAgICAgIGNvbG9yPVwiZ3JheS05MFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxWSFRleHRcbiAgICAgICAgICBvbkV2ZW50PXtwcm9wcy5vbkV2ZW50fVxuICAgICAgICAgIHRleHQ9e2BUb3RhbDogJHtwcm9wcy50b3RhbERheXN9YH1cbiAgICAgICAgICB2YXJpYW50PVwiY2FwdGlvblwiXG4gICAgICAgICAgY29sb3I9XCJncmF5LTUwXCJcbiAgICAgICAgLz5cbiAgICAgIDwvUm93PlxuICAgICAgPFMuR3JvdXA+XG4gICAgICAgIHtwcm9wcy5pdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTLkl0ZW0ga2V5PXtgdmgtdGltZS1saW5lLWl0ZW0ke2luZGV4fWB9PlxuICAgICAgICAgICAgICA8Uy5DaXJjbGUgLz5cbiAgICAgICAgICAgICAgPFMuV3JhcHBlclRleHQ+XG4gICAgICAgICAgICAgICAgPFMuRGF0ZT5cbiAgICAgICAgICAgICAgICAgIHtnZXREYXRlKGl0ZW0uY3JlYXRlZE9uKX1cbiAgICAgICAgICAgICAgICAgIDxWSFRleHRcbiAgICAgICAgICAgICAgICAgICAgb25FdmVudD17cHJvcHMub25FdmVudH1cbiAgICAgICAgICAgICAgICAgICAgdGV4dD17IGRhdGVzW2luZGV4ICsgMV0gIT09IHVuZGVmaW5lZCAmJiBgICR7KGRhdGVzW2luZGV4XSAtIGRhdGVzW2luZGV4ICsgMV0pIDwgMCA/IC0oZGF0ZXNbaW5kZXhdIC0gZGF0ZXNbaW5kZXggKyAxXSk6IChkYXRlc1tpbmRleF0gLSBkYXRlc1tpbmRleCArIDFdKX0gZGF5c2AgfVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY2FwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZ3JheS01MFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvUy5EYXRlPlxuICAgICAgICAgICAgICAgIHtpdGVtLml0ZW1zLmxlbmd0aCA+IDEgPyAoXG4gICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5pdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTLldyYXBwZXJTYW1lRGF0ZSBrZXk9e2B2aC10aW1lLWxpbmUtJHtpdGVtLmNvbHVtbk5hbWV9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxWSFRpdGxlRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ2aC10aXRsZS1kZXNjcmlwdGlvbi10aW1lLWxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2l0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25Db2xvcj1cImdyYXktNTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uVmFyaWFudD1cImNhcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRXZlbnQ9e3Byb3BzLm9uRXZlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0uY29sdW1uTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUNvbG9yPVwiZ3JheS05MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVWYXJpYW50PVwicGxhdGZvcm0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUy5XcmFwcGVyU2FtZURhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uaXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VkhUaXRsZURlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YHZoLXRpbWUtbGluZS0ke2l0ZW0uY29sdW1uTmFtZX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ2aC10aXRsZS1kZXNjcmlwdGlvbi10aW1lLWxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25Db2xvcj1cImdyYXktNTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblZhcmlhbnQ9XCJjYXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25FdmVudD17cHJvcHMub25FdmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0uY29sdW1uTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVDb2xvcj1cImdyYXktOTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZVZhcmlhbnQ9XCJwbGF0Zm9ybTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvUy5XcmFwcGVyVGV4dD5cbiAgICAgICAgICAgIDwvUy5JdGVtPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9TLkdyb3VwPlxuICAgIDwvUm93PlxuICApO1xufTtcblxuVkhUaW1lTGluZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGl0ZW1zOiBbXSxcbiAgdG90YWxEYXlzOiBcIlwiLFxuICBjbGFzc05hbWU6IFwiXCIsXG4gIG9uRXZlbnQ6IG51bGxcbn07XG5cblZIVGltZUxpbmUucHJvcFR5cGVzID0ge1xuICBpdGVtczogUHJvcFR5cGVzLmFycmF5LFxuICB0b3RhbERheXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25FdmVudDogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZIVGltZUxpbmU7XG4iXX0=