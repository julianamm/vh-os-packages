"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHActivity = function VHActivity(props) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.activities.days.map(function (activity) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(S.Item, null, /*#__PURE__*/_react.default.createElement(S.Elipse, null)));
  }));
};

VHActivity.defaultProps = {};
VHActivity.propTypes = {};
var _default = VHActivity;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQWN0aXZpdHkvaW5kZXguanN4Il0sIm5hbWVzIjpbIlZIQWN0aXZpdHkiLCJwcm9wcyIsImFjdGl2aXRpZXMiLCJkYXlzIiwibWFwIiwiYWN0aXZpdHkiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFDLEtBQUssRUFBSTtBQUN4QixzQkFDSSw2QkFBQyxjQUFELENBQU8sUUFBUCxRQUNLQSxLQUFLLENBQUNDLFVBQU4sQ0FBaUJDLElBQWpCLENBQXNCQyxHQUF0QixDQUEwQixVQUFBQyxRQUFRO0FBQUEsd0JBQy9CLDZCQUFDLGNBQUQsQ0FBTyxRQUFQLHFCQUNJLDZCQUFDLENBQUQsQ0FBRyxJQUFILHFCQUNBLDZCQUFDLENBQUQsQ0FBRyxNQUFILE9BREEsQ0FESixDQUQrQjtBQUFBLEdBQWxDLENBREwsQ0FESjtBQVlILENBYkQ7O0FBY0FMLFVBQVUsQ0FBQ00sWUFBWCxHQUEwQixFQUExQjtBQUdBTixVQUFVLENBQUNPLFNBQVgsR0FBdUIsRUFBdkI7ZUFHZVAsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9zdHlsZXMnXG5cbmNvbnN0IFZIQWN0aXZpdHkgPSBwcm9wcyA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAge3Byb3BzLmFjdGl2aXRpZXMuZGF5cy5tYXAoYWN0aXZpdHkgPT5cbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxTLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxTLkVsaXBzZT48L1MuRWxpcHNlPlxuICAgICAgICAgICAgICAgICAgICA8L1MuSXRlbT5cbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG5cbn1cblZIQWN0aXZpdHkuZGVmYXVsdFByb3BzID0ge1xufVxuXG5WSEFjdGl2aXR5LnByb3BUeXBlcyA9IHtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVkhBY3Rpdml0eVxuIl19