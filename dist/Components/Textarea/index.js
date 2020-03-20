"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Text = _interopRequireDefault(require("../Text"));

var _Grid = require("../../Grid");

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHTextarea = function VHTextarea(props) {
  return _react.default.createElement(_Grid.Row, {
    className: "vh-textarea-description ".concat(props.className ? props.className : '')
  }, _react.default.createElement(_Text.default, {
    color: "gray-80",
    variant: 'platform',
    text: "Description"
  }), _react.default.createElement(S.Textarea, {
    data: "data",
    type: "textarea",
    value: props.description,
    placeholder: props.description,
    onEvent: props.onEvent
  }));
};

VHTextarea.defaultProps = {
  description: "",
  onEvent: null,
  className: ""
};
VHTextarea.propTypes = {
  description: _propTypes.default.string,
  onEvent: _propTypes.default.func,
  className: _propTypes.default.string
};
var _default = VHTextarea;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVGV4dGFyZWEvaW5kZXguanN4Il0sIm5hbWVzIjpbIlZIVGV4dGFyZWEiLCJwcm9wcyIsImNsYXNzTmFtZSIsImRlc2NyaXB0aW9uIiwib25FdmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFDLEtBQUssRUFBSTtBQUV4QixTQUNJLDZCQUFDLFNBQUQ7QUFBSyxJQUFBLFNBQVMsb0NBQTZCQSxLQUFLLENBQUNDLFNBQU4sR0FBa0JELEtBQUssQ0FBQ0MsU0FBeEIsR0FBb0MsRUFBakU7QUFBZCxLQUNJLDZCQUFDLGFBQUQ7QUFBUSxJQUFBLEtBQUssRUFBQyxTQUFkO0FBQXdCLElBQUEsT0FBTyxFQUFFLFVBQWpDO0FBQTZDLElBQUEsSUFBSSxFQUFDO0FBQWxELElBREosRUFFSSw2QkFBQyxDQUFELENBQUcsUUFBSDtBQUNJLElBQUEsSUFBSSxFQUFDLE1BRFQ7QUFFSSxJQUFBLElBQUksRUFBQyxVQUZUO0FBR0ksSUFBQSxLQUFLLEVBQUVELEtBQUssQ0FBQ0UsV0FIakI7QUFJSSxJQUFBLFdBQVcsRUFBRUYsS0FBSyxDQUFDRSxXQUp2QjtBQUtJLElBQUEsT0FBTyxFQUFFRixLQUFLLENBQUNHO0FBTG5CLElBRkosQ0FESjtBQVlILENBZEQ7O0FBZUFKLFVBQVUsQ0FBQ0ssWUFBWCxHQUEwQjtBQUN0QkYsRUFBQUEsV0FBVyxFQUFFLEVBRFM7QUFFdEJDLEVBQUFBLE9BQU8sRUFBRSxJQUZhO0FBR3RCRixFQUFBQSxTQUFTLEVBQUU7QUFIVyxDQUExQjtBQU1BRixVQUFVLENBQUNNLFNBQVgsR0FBdUI7QUFDbkJILEVBQUFBLFdBQVcsRUFBRUksbUJBQVVDLE1BREo7QUFFbkJKLEVBQUFBLE9BQU8sRUFBRUcsbUJBQVVFLElBRkE7QUFHbkJQLEVBQUFBLFNBQVMsRUFBRUssbUJBQVVDO0FBSEYsQ0FBdkI7ZUFNZVIsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBWSFRleHQgZnJvbSAnLi4vVGV4dCdcbmltcG9ydCB7IFJvdyB9IGZyb20gJy4uLy4uL0dyaWQnXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vc3R5bGVzJ1xuXG5jb25zdCBWSFRleHRhcmVhID0gcHJvcHMgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJvdyBjbGFzc05hbWU9e2B2aC10ZXh0YXJlYS1kZXNjcmlwdGlvbiAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9PlxuICAgICAgICAgICAgPFZIVGV4dCBjb2xvcj1cImdyYXktODBcIiB2YXJpYW50PXsncGxhdGZvcm0nfSB0ZXh0PVwiRGVzY3JpcHRpb25cIi8+XG4gICAgICAgICAgICA8Uy5UZXh0YXJlYSBcbiAgICAgICAgICAgICAgICBkYXRhPVwiZGF0YVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRhcmVhXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIG9uRXZlbnQ9e3Byb3BzLm9uRXZlbnR9Lz5cbiAgICAgICAgPC9Sb3c+XG4gICAgKVxuXG59XG5WSFRleHRhcmVhLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBvbkV2ZW50OiBudWxsLFxuICAgIGNsYXNzTmFtZTogXCJcIixcbn1cblxuVkhUZXh0YXJlYS5wcm9wVHlwZXMgPSB7XG4gICAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25FdmVudDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufVxuXG5leHBvcnQgZGVmYXVsdCBWSFRleHRhcmVhXG4iXX0=