"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactPreloadSkeleton = require("react-preload-skeleton");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHSkeletonAvatar = function VHSkeletonAvatar(props) {
  return _react.default.createElement(_reactPreloadSkeleton.AvatarSkeleton, {
    color: props.color
  });
};

VHSkeletonAvatar.defaultProps = {};
VHSkeletonAvatar.propTypes = {};
var _default = VHSkeletonAvatar;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvU2tlbGV0b24vQXZhdGFyL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJWSFNrZWxldG9uQXZhdGFyIiwicHJvcHMiLCJjb2xvciIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFBQyxLQUFLLEVBQUk7QUFDOUIsU0FDSSw2QkFBQyxvQ0FBRDtBQUFnQixJQUFBLEtBQUssRUFBRUEsS0FBSyxDQUFDQztBQUE3QixJQURKO0FBR0gsQ0FKRDs7QUFLQUYsZ0JBQWdCLENBQUNHLFlBQWpCLEdBQWdDLEVBQWhDO0FBR0FILGdCQUFnQixDQUFDSSxTQUFqQixHQUE2QixFQUE3QjtlQUdlSixnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IEF2YXRhclNrZWxldG9uIH0gZnJvbSAncmVhY3QtcHJlbG9hZC1za2VsZXRvbidcblxuY29uc3QgVkhTa2VsZXRvbkF2YXRhciA9IHByb3BzID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8QXZhdGFyU2tlbGV0b24gY29sb3I9e3Byb3BzLmNvbG9yfSAvPlxuICAgIClcbn1cblZIU2tlbGV0b25BdmF0YXIuZGVmYXVsdFByb3BzID0ge1xufVxuXG5WSFNrZWxldG9uQXZhdGFyLnByb3BUeXBlcyA9IHtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVkhTa2VsZXRvbkF2YXRhclxuIl19