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
  return _react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true,
    justifySpaceAround: true,
    className: "vh-assign ".concat(props.className ? props.className : "")
  }, _react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true
  }, _react.default.createElement(_Text.default, {
    color: "gradient-primary",
    variant: "platform",
    text: "Assign",
    data: "VHAssign",
    onEvent: props.onEvent
  })), _react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true
  }, props.items.map(function (item, index) {
    if (index < 3) {
      count++;
      return _react.default.createElement(S.Wrapper, {
        key: "vh-assign-".concat(item.id)
      }, _react.default.createElement(S.Tooltip, null, item.name), _react.default.createElement(_Avatar.default, {
        content: "test",
        image: item.avatar,
        showCursor: true,
        size: "md"
      }));
    }

    if (index > 2 && index === props.items.length - 1) {
      return _react.default.createElement(S.Wrapper, {
        key: "vh-assign-".concat(item.id)
      }, _react.default.createElement(S.Rounded, null, _react.default.createElement(_Text.default, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQXNzaWduL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJWSEFzc2lnbiIsInByb3BzIiwiY291bnQiLCJjbGFzc05hbWUiLCJvbkV2ZW50IiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJpZCIsIm5hbWUiLCJhdmF0YXIiLCJsZW5ndGgiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsInN0cmluZyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFDLEtBQUssRUFBSTtBQUN4QixNQUFJQyxLQUFLLEdBQUcsQ0FBWjtBQUVBLFNBQ0UsNkJBQUMsU0FBRDtBQUNFLElBQUEsR0FBRyxNQURMO0FBRUUsSUFBQSxnQkFBZ0IsTUFGbEI7QUFHRSxJQUFBLGtCQUFrQixNQUhwQjtBQUlFLElBQUEsU0FBUyxzQkFBZUQsS0FBSyxDQUFDRSxTQUFOLEdBQWtCRixLQUFLLENBQUNFLFNBQXhCLEdBQW9DLEVBQW5EO0FBSlgsS0FNRSw2QkFBQyxTQUFEO0FBQUssSUFBQSxHQUFHLE1BQVI7QUFBUyxJQUFBLGdCQUFnQjtBQUF6QixLQUNFLDZCQUFDLGFBQUQ7QUFBUSxJQUFBLEtBQUssRUFBQyxrQkFBZDtBQUFpQyxJQUFBLE9BQU8sRUFBQyxVQUF6QztBQUFvRCxJQUFBLElBQUksRUFBQyxRQUF6RDtBQUFrRSxJQUFBLElBQUksRUFBQyxVQUF2RTtBQUFrRixJQUFBLE9BQU8sRUFBRUYsS0FBSyxDQUFDRztBQUFqRyxJQURGLENBTkYsRUFTRSw2QkFBQyxTQUFEO0FBQUssSUFBQSxHQUFHLE1BQVI7QUFBUyxJQUFBLGdCQUFnQjtBQUF6QixLQUNHSCxLQUFLLENBQUNJLEtBQU4sQ0FBWUMsR0FBWixDQUFnQixVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDaEMsUUFBSUEsS0FBSyxHQUFHLENBQVosRUFBZTtBQUNiTixNQUFBQSxLQUFLO0FBQ0wsYUFDRSw2QkFBQyxDQUFELENBQUcsT0FBSDtBQUFXLFFBQUEsR0FBRyxzQkFBZUssSUFBSSxDQUFDRSxFQUFwQjtBQUFkLFNBQ0UsNkJBQUMsQ0FBRCxDQUFHLE9BQUgsUUFBWUYsSUFBSSxDQUFDRyxJQUFqQixDQURGLEVBRUUsNkJBQUMsZUFBRDtBQUNFLFFBQUEsT0FBTyxFQUFDLE1BRFY7QUFFRSxRQUFBLEtBQUssRUFBRUgsSUFBSSxDQUFDSSxNQUZkO0FBR0UsUUFBQSxVQUFVLE1BSFo7QUFJRSxRQUFBLElBQUksRUFBQztBQUpQLFFBRkYsQ0FERjtBQVdEOztBQUNELFFBQUlILEtBQUssR0FBRyxDQUFSLElBQWFBLEtBQUssS0FBS1AsS0FBSyxDQUFDSSxLQUFOLENBQVlPLE1BQVosR0FBcUIsQ0FBaEQsRUFBbUQ7QUFDakQsYUFDRSw2QkFBQyxDQUFELENBQUcsT0FBSDtBQUFXLFFBQUEsR0FBRyxzQkFBZUwsSUFBSSxDQUFDRSxFQUFwQjtBQUFkLFNBQ0UsNkJBQUMsQ0FBRCxDQUFHLE9BQUgsUUFDRSw2QkFBQyxhQUFEO0FBQVEsUUFBQSxPQUFPLEVBQUMsVUFBaEI7QUFBMkIsUUFBQSxJQUFJLGFBQU1SLEtBQUssQ0FBQ0ksS0FBTixDQUFZTyxNQUFaLEdBQXFCVixLQUEzQjtBQUEvQixRQURGLENBREYsQ0FERjtBQU9EO0FBQ0YsR0F4QkEsQ0FESCxDQVRGLENBREY7QUF1Q0QsQ0ExQ0Q7O0FBNENBRixRQUFRLENBQUNhLFlBQVQsR0FBd0I7QUFDdEJSLEVBQUFBLEtBQUssRUFBRSxFQURlO0FBRXRCRixFQUFBQSxTQUFTLEVBQUUsRUFGVztBQUd0QkMsRUFBQUEsT0FBTyxFQUFFO0FBSGEsQ0FBeEI7QUFNQUosUUFBUSxDQUFDYyxTQUFULEdBQXFCO0FBQ25CVCxFQUFBQSxLQUFLLEVBQUVVLG1CQUFVQyxLQURFO0FBRW5CYixFQUFBQSxTQUFTLEVBQUVZLG1CQUFVRSxNQUZGO0FBR25CYixFQUFBQSxPQUFPLEVBQUVXLG1CQUFVRztBQUhBLENBQXJCO2VBTWVsQixRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0ICogYXMgUyBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCBWSFRleHQgZnJvbSBcIi4uL1RleHRcIjtcbmltcG9ydCBWSEF2YXRhciBmcm9tIFwiLi4vQXZhdGFyXCI7XG5pbXBvcnQgeyBSb3cgfSBmcm9tIFwiLi4vLi4vR3JpZFwiO1xuXG5jb25zdCBWSEFzc2lnbiA9IHByb3BzID0+IHtcbiAgbGV0IGNvdW50ID0gMDtcblxuICByZXR1cm4gKFxuICAgIDxSb3dcbiAgICAgIHJvd1xuICAgICAgYWxpZ25JdGVtc0NlbnRlclxuICAgICAganVzdGlmeVNwYWNlQXJvdW5kXG4gICAgICBjbGFzc05hbWU9e2B2aC1hc3NpZ24gJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiBcIlwifWB9XG4gICAgPlxuICAgICAgPFJvdyByb3cgYWxpZ25JdGVtc0NlbnRlcj5cbiAgICAgICAgPFZIVGV4dCBjb2xvcj1cImdyYWRpZW50LXByaW1hcnlcIiB2YXJpYW50PVwicGxhdGZvcm1cIiB0ZXh0PVwiQXNzaWduXCIgZGF0YT1cIlZIQXNzaWduXCIgb25FdmVudD17cHJvcHMub25FdmVudH0vPlxuICAgICAgPC9Sb3c+XG4gICAgICA8Um93IHJvdyBhbGlnbkl0ZW1zQ2VudGVyPlxuICAgICAgICB7cHJvcHMuaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChpbmRleCA8IDMpIHtcbiAgICAgICAgICAgIGNvdW50ICsrXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8Uy5XcmFwcGVyIGtleT17YHZoLWFzc2lnbi0ke2l0ZW0uaWR9YH0+XG4gICAgICAgICAgICAgICAgPFMuVG9vbHRpcD57aXRlbS5uYW1lfTwvUy5Ub29sdGlwPlxuICAgICAgICAgICAgICAgIDxWSEF2YXRhclxuICAgICAgICAgICAgICAgICAgY29udGVudD1cInRlc3RcIlxuICAgICAgICAgICAgICAgICAgaW1hZ2U9e2l0ZW0uYXZhdGFyfVxuICAgICAgICAgICAgICAgICAgc2hvd0N1cnNvclxuICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1MuV3JhcHBlcj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpbmRleCA+IDIgJiYgaW5kZXggPT09IHByb3BzLml0ZW1zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxTLldyYXBwZXIga2V5PXtgdmgtYXNzaWduLSR7aXRlbS5pZH1gfT5cbiAgICAgICAgICAgICAgICA8Uy5Sb3VuZGVkPlxuICAgICAgICAgICAgICAgICAgPFZIVGV4dCB2YXJpYW50PVwicGxhdGZvcm1cIiB0ZXh0PXtgKyR7cHJvcHMuaXRlbXMubGVuZ3RoIC0gY291bnR9YH0gLz5cbiAgICAgICAgICAgICAgICA8L1MuUm91bmRlZD5cbiAgICAgICAgICAgICAgPC9TLldyYXBwZXI+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSl9XG4gICAgICA8L1Jvdz5cbiAgICA8L1Jvdz5cbiAgKTtcbn07XG5cblZIQXNzaWduLmRlZmF1bHRQcm9wcyA9IHtcbiAgaXRlbXM6IFtdLFxuICBjbGFzc05hbWU6IFwiXCIsXG4gIG9uRXZlbnQ6IG51bGxcbn07XG5cblZIQXNzaWduLnByb3BUeXBlcyA9IHtcbiAgaXRlbXM6IFByb3BUeXBlcy5hcnJheSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkV2ZW50OiBQcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVkhBc3NpZ247XG4iXX0=