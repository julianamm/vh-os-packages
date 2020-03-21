"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var S = _interopRequireWildcard(require("./styles"));

var _Text = _interopRequireDefault(require("../Text"));

var _Avatar = _interopRequireDefault(require("../Avatar"));

var _Grid = require("../../Grid");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHAssign = function VHAssign(props) {
  var count = 0;
  return /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true,
    justifySpaceAround: true,
    className: "vh-assign ".concat(props.className ? props.className : "")
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    color: "gradient-primary",
    variant: "platform",
    text: "Assign",
    data: "VHAssign",
    onEvent: props.onEvent
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true
  }, props.items.map(function (item, index) {
    if (index < 3) {
      count++;
      return /*#__PURE__*/_react.default.createElement(S.Wrapper, {
        key: "vh-assign-".concat(item.id)
      }, /*#__PURE__*/_react.default.createElement(S.Tooltip, null, item.name), /*#__PURE__*/_react.default.createElement(_Avatar.default, {
        content: "test",
        image: item.avatar,
        showCursor: true,
        size: "md"
      }));
    }

    if (index > 2 && index === props.items.length - 1) {
      return /*#__PURE__*/_react.default.createElement(S.Wrapper, {
        key: "vh-assign-".concat(item.id)
      }, /*#__PURE__*/_react.default.createElement(S.Rounded, null, /*#__PURE__*/_react.default.createElement(_Text.default, {
        variant: "platform",
        text: "+".concat(props.items.length - count)
      })));
    }
  })));
};

VHAssign.defaultProps = {
  items: [],
  className: "",
  onEvent: null
};
VHAssign.propTypes = {
  items: _propTypes.default.array,
  className: _propTypes.default.string,
  onEvent: _propTypes.default.func
};
var _default = VHAssign;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQXNzaWduL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJWSEFzc2lnbiIsInByb3BzIiwiY291bnQiLCJjbGFzc05hbWUiLCJvbkV2ZW50IiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJpZCIsIm5hbWUiLCJhdmF0YXIiLCJsZW5ndGgiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsInN0cmluZyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFDLEtBQUssRUFBSTtBQUN4QixNQUFJQyxLQUFLLEdBQUcsQ0FBWjtBQUVBLHNCQUNFLDZCQUFDLFNBQUQ7QUFDRSxJQUFBLEdBQUcsTUFETDtBQUVFLElBQUEsZ0JBQWdCLE1BRmxCO0FBR0UsSUFBQSxrQkFBa0IsTUFIcEI7QUFJRSxJQUFBLFNBQVMsc0JBQWVELEtBQUssQ0FBQ0UsU0FBTixHQUFrQkYsS0FBSyxDQUFDRSxTQUF4QixHQUFvQyxFQUFuRDtBQUpYLGtCQU1FLDZCQUFDLFNBQUQ7QUFBSyxJQUFBLEdBQUcsTUFBUjtBQUFTLElBQUEsZ0JBQWdCO0FBQXpCLGtCQUNFLDZCQUFDLGFBQUQ7QUFBUSxJQUFBLEtBQUssRUFBQyxrQkFBZDtBQUFpQyxJQUFBLE9BQU8sRUFBQyxVQUF6QztBQUFvRCxJQUFBLElBQUksRUFBQyxRQUF6RDtBQUFrRSxJQUFBLElBQUksRUFBQyxVQUF2RTtBQUFrRixJQUFBLE9BQU8sRUFBRUYsS0FBSyxDQUFDRztBQUFqRyxJQURGLENBTkYsZUFTRSw2QkFBQyxTQUFEO0FBQUssSUFBQSxHQUFHLE1BQVI7QUFBUyxJQUFBLGdCQUFnQjtBQUF6QixLQUNHSCxLQUFLLENBQUNJLEtBQU4sQ0FBWUMsR0FBWixDQUFnQixVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDaEMsUUFBSUEsS0FBSyxHQUFHLENBQVosRUFBZTtBQUNiTixNQUFBQSxLQUFLO0FBQ0wsMEJBQ0UsNkJBQUMsQ0FBRCxDQUFHLE9BQUg7QUFBVyxRQUFBLEdBQUcsc0JBQWVLLElBQUksQ0FBQ0UsRUFBcEI7QUFBZCxzQkFDRSw2QkFBQyxDQUFELENBQUcsT0FBSCxRQUFZRixJQUFJLENBQUNHLElBQWpCLENBREYsZUFFRSw2QkFBQyxlQUFEO0FBQ0UsUUFBQSxPQUFPLEVBQUMsTUFEVjtBQUVFLFFBQUEsS0FBSyxFQUFFSCxJQUFJLENBQUNJLE1BRmQ7QUFHRSxRQUFBLFVBQVUsTUFIWjtBQUlFLFFBQUEsSUFBSSxFQUFDO0FBSlAsUUFGRixDQURGO0FBV0Q7O0FBQ0QsUUFBSUgsS0FBSyxHQUFHLENBQVIsSUFBYUEsS0FBSyxLQUFLUCxLQUFLLENBQUNJLEtBQU4sQ0FBWU8sTUFBWixHQUFxQixDQUFoRCxFQUFtRDtBQUNqRCwwQkFDRSw2QkFBQyxDQUFELENBQUcsT0FBSDtBQUFXLFFBQUEsR0FBRyxzQkFBZUwsSUFBSSxDQUFDRSxFQUFwQjtBQUFkLHNCQUNFLDZCQUFDLENBQUQsQ0FBRyxPQUFILHFCQUNFLDZCQUFDLGFBQUQ7QUFBUSxRQUFBLE9BQU8sRUFBQyxVQUFoQjtBQUEyQixRQUFBLElBQUksYUFBTVIsS0FBSyxDQUFDSSxLQUFOLENBQVlPLE1BQVosR0FBcUJWLEtBQTNCO0FBQS9CLFFBREYsQ0FERixDQURGO0FBT0Q7QUFDRixHQXhCQSxDQURILENBVEYsQ0FERjtBQXVDRCxDQTFDRDs7QUE0Q0FGLFFBQVEsQ0FBQ2EsWUFBVCxHQUF3QjtBQUN0QlIsRUFBQUEsS0FBSyxFQUFFLEVBRGU7QUFFdEJGLEVBQUFBLFNBQVMsRUFBRSxFQUZXO0FBR3RCQyxFQUFBQSxPQUFPLEVBQUU7QUFIYSxDQUF4QjtBQU1BSixRQUFRLENBQUNjLFNBQVQsR0FBcUI7QUFDbkJULEVBQUFBLEtBQUssRUFBRVUsbUJBQVVDLEtBREU7QUFFbkJiLEVBQUFBLFNBQVMsRUFBRVksbUJBQVVFLE1BRkY7QUFHbkJiLEVBQUFBLE9BQU8sRUFBRVcsbUJBQVVHO0FBSEEsQ0FBckI7ZUFNZWxCLFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgKiBhcyBTIGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IFZIVGV4dCBmcm9tIFwiLi4vVGV4dFwiO1xuaW1wb3J0IFZIQXZhdGFyIGZyb20gXCIuLi9BdmF0YXJcIjtcbmltcG9ydCB7IFJvdyB9IGZyb20gXCIuLi8uLi9HcmlkXCI7XG5cbmNvbnN0IFZIQXNzaWduID0gcHJvcHMgPT4ge1xuICBsZXQgY291bnQgPSAwO1xuXG4gIHJldHVybiAoXG4gICAgPFJvd1xuICAgICAgcm93XG4gICAgICBhbGlnbkl0ZW1zQ2VudGVyXG4gICAgICBqdXN0aWZ5U3BhY2VBcm91bmRcbiAgICAgIGNsYXNzTmFtZT17YHZoLWFzc2lnbiAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6IFwiXCJ9YH1cbiAgICA+XG4gICAgICA8Um93IHJvdyBhbGlnbkl0ZW1zQ2VudGVyPlxuICAgICAgICA8VkhUZXh0IGNvbG9yPVwiZ3JhZGllbnQtcHJpbWFyeVwiIHZhcmlhbnQ9XCJwbGF0Zm9ybVwiIHRleHQ9XCJBc3NpZ25cIiBkYXRhPVwiVkhBc3NpZ25cIiBvbkV2ZW50PXtwcm9wcy5vbkV2ZW50fS8+XG4gICAgICA8L1Jvdz5cbiAgICAgIDxSb3cgcm93IGFsaWduSXRlbXNDZW50ZXI+XG4gICAgICAgIHtwcm9wcy5pdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKGluZGV4IDwgMykge1xuICAgICAgICAgICAgY291bnQgKytcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxTLldyYXBwZXIga2V5PXtgdmgtYXNzaWduLSR7aXRlbS5pZH1gfT5cbiAgICAgICAgICAgICAgICA8Uy5Ub29sdGlwPntpdGVtLm5hbWV9PC9TLlRvb2x0aXA+XG4gICAgICAgICAgICAgICAgPFZIQXZhdGFyXG4gICAgICAgICAgICAgICAgICBjb250ZW50PVwidGVzdFwiXG4gICAgICAgICAgICAgICAgICBpbWFnZT17aXRlbS5hdmF0YXJ9XG4gICAgICAgICAgICAgICAgICBzaG93Q3Vyc29yXG4gICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvUy5XcmFwcGVyPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGluZGV4ID4gMiAmJiBpbmRleCA9PT0gcHJvcHMuaXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFMuV3JhcHBlciBrZXk9e2B2aC1hc3NpZ24tJHtpdGVtLmlkfWB9PlxuICAgICAgICAgICAgICAgIDxTLlJvdW5kZWQ+XG4gICAgICAgICAgICAgICAgICA8VkhUZXh0IHZhcmlhbnQ9XCJwbGF0Zm9ybVwiIHRleHQ9e2ArJHtwcm9wcy5pdGVtcy5sZW5ndGggLSBjb3VudH1gfSAvPlxuICAgICAgICAgICAgICAgIDwvUy5Sb3VuZGVkPlxuICAgICAgICAgICAgICA8L1MuV3JhcHBlcj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KX1cbiAgICAgIDwvUm93PlxuICAgIDwvUm93PlxuICApO1xufTtcblxuVkhBc3NpZ24uZGVmYXVsdFByb3BzID0ge1xuICBpdGVtczogW10sXG4gIGNsYXNzTmFtZTogXCJcIixcbiAgb25FdmVudDogbnVsbFxufTtcblxuVkhBc3NpZ24ucHJvcFR5cGVzID0ge1xuICBpdGVtczogUHJvcFR5cGVzLmFycmF5LFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uRXZlbnQ6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBWSEFzc2lnbjtcbiJdfQ==