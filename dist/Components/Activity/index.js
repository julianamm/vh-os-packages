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
  return _react.default.createElement(_react.default.Fragment, null, props.activities.days.map(function (activity) {
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(S.Item, null, _react.default.createElement(S.Elipse, null)));
  }));
};

VHActivity.defaultProps = {};
VHActivity.propTypes = {};
var _default = VHActivity;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQWN0aXZpdHkvaW5kZXguanN4Il0sIm5hbWVzIjpbIlZIQWN0aXZpdHkiLCJwcm9wcyIsImFjdGl2aXRpZXMiLCJkYXlzIiwibWFwIiwiYWN0aXZpdHkiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFDLEtBQUssRUFBSTtBQUN4QixTQUNJLDZCQUFDLGNBQUQsQ0FBTyxRQUFQLFFBQ0tBLEtBQUssQ0FBQ0MsVUFBTixDQUFpQkMsSUFBakIsQ0FBc0JDLEdBQXRCLENBQTBCLFVBQUFDLFFBQVE7QUFBQSxXQUMvQiw2QkFBQyxjQUFELENBQU8sUUFBUCxRQUNJLDZCQUFDLENBQUQsQ0FBRyxJQUFILFFBQ0EsNkJBQUMsQ0FBRCxDQUFHLE1BQUgsT0FEQSxDQURKLENBRCtCO0FBQUEsR0FBbEMsQ0FETCxDQURKO0FBWUgsQ0FiRDs7QUFjQUwsVUFBVSxDQUFDTSxZQUFYLEdBQTBCLEVBQTFCO0FBR0FOLFVBQVUsQ0FBQ08sU0FBWCxHQUF1QixFQUF2QjtlQUdlUCxVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL3N0eWxlcydcblxuY29uc3QgVkhBY3Rpdml0eSA9IHByb3BzID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICB7cHJvcHMuYWN0aXZpdGllcy5kYXlzLm1hcChhY3Rpdml0eSA9PlxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgPFMuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPFMuRWxpcHNlPjwvUy5FbGlwc2U+XG4gICAgICAgICAgICAgICAgICAgIDwvUy5JdGVtPlxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcblxufVxuVkhBY3Rpdml0eS5kZWZhdWx0UHJvcHMgPSB7XG59XG5cblZIQWN0aXZpdHkucHJvcFR5cGVzID0ge1xufVxuXG5leHBvcnQgZGVmYXVsdCBWSEFjdGl2aXR5XG4iXX0=