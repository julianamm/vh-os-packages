"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireDefault(require("./styles"));

var _Colors = _interopRequireDefault(require("../../../Colors"));

var _reactPreloadSkeleton = require("react-preload-skeleton");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHSkeletonText = function VHSkeletonText(props) {
  return /*#__PURE__*/_react.default.createElement(_reactPreloadSkeleton.TextSkeleton, {
    color: props.color
  });
};

VHSkeletonText.defaultProps = {};
VHSkeletonText.propTypes = {};
var _default = VHSkeletonText;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvU2tlbGV0b24vVGV4dC9pbmRleC5qc3giXSwibmFtZXMiOlsiVkhTa2VsZXRvblRleHQiLCJwcm9wcyIsImNvbG9yIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFDLEtBQUssRUFBSTtBQUU1QixzQkFDSSw2QkFBQyxrQ0FBRDtBQUFjLElBQUEsS0FBSyxFQUFFQSxLQUFLLENBQUNDO0FBQTNCLElBREo7QUFHSCxDQUxEOztBQU1BRixjQUFjLENBQUNHLFlBQWYsR0FBOEIsRUFBOUI7QUFHQUgsY0FBYyxDQUFDSSxTQUFmLEdBQTJCLEVBQTNCO2VBR2VKLGMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgVGV4dCBmcm9tICcuL3N0eWxlcydcbmltcG9ydCBDb2xvciBmcm9tICcuLi8uLi8uLi9Db2xvcnMnXG5pbXBvcnQgeyBUZXh0U2tlbGV0b24gfSAgZnJvbSAncmVhY3QtcHJlbG9hZC1za2VsZXRvbidcblxuY29uc3QgVkhTa2VsZXRvblRleHQgPSBwcm9wcyA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VGV4dFNrZWxldG9uIGNvbG9yPXtwcm9wcy5jb2xvcn0vPlxuICAgIClcbn1cblZIU2tlbGV0b25UZXh0LmRlZmF1bHRQcm9wcyA9IHtcbn1cblxuVkhTa2VsZXRvblRleHQucHJvcFR5cGVzID0ge1xufVxuXG5leHBvcnQgZGVmYXVsdCBWSFNrZWxldG9uVGV4dFxuIl19