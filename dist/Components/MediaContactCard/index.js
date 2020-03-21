"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _index = _interopRequireDefault(require("../Cards/Base/index"));

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHMediacontactCard = function VHMediacontactCard(props) {
  return _react.default.createElement(_Grid.Row, {
    style: {
      marginTop: "-10%",
      boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.1)",
      borderRadius: "6px"
    }
  }, _react.default.createElement(_index.default, {
    noHover: true
  }, _react.default.createElement(_Grid.Row, null, _react.default.createElement(S.Title, null, props.title), _react.default.createElement(S.Info, null, props.name), _react.default.createElement(S.Info, null, props.email), _react.default.createElement(S.Info, null, props.phone))));
};

VHMediacontactCard.propTypes = {
  onEvent: _propTypes.default.func,
  title: _propTypes.default.string,
  name: _propTypes.default.string,
  email: _propTypes.default.string,
  phone: _propTypes.default.string,
  className: _propTypes.default.string
};
var _default = VHMediacontactCard;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvTWVkaWFDb250YWN0Q2FyZC9pbmRleC5qc3giXSwibmFtZXMiOlsiVkhNZWRpYWNvbnRhY3RDYXJkIiwicHJvcHMiLCJtYXJnaW5Ub3AiLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiLCJ0aXRsZSIsIm5hbWUiLCJlbWFpbCIsInBob25lIiwicHJvcFR5cGVzIiwib25FdmVudCIsIlByb3BUeXBlcyIsImZ1bmMiLCJzdHJpbmciLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQUMsS0FBSyxFQUFJO0FBRWhDLFNBQ0ksNkJBQUMsU0FBRDtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLFNBQVMsRUFBQyxNQUFaO0FBQW9CQyxNQUFBQSxTQUFTLEVBQUUsaUNBQS9CO0FBQWtFQyxNQUFBQSxZQUFZLEVBQUU7QUFBaEY7QUFBWixLQUNJLDZCQUFDLGNBQUQ7QUFBWSxJQUFBLE9BQU87QUFBbkIsS0FDSSw2QkFBQyxTQUFELFFBQ0ksNkJBQUMsQ0FBRCxDQUFHLEtBQUgsUUFBVUgsS0FBSyxDQUFDSSxLQUFoQixDQURKLEVBRUksNkJBQUMsQ0FBRCxDQUFHLElBQUgsUUFBU0osS0FBSyxDQUFDSyxJQUFmLENBRkosRUFHSSw2QkFBQyxDQUFELENBQUcsSUFBSCxRQUFTTCxLQUFLLENBQUNNLEtBQWYsQ0FISixFQUlJLDZCQUFDLENBQUQsQ0FBRyxJQUFILFFBQVNOLEtBQUssQ0FBQ08sS0FBZixDQUpKLENBREosQ0FESixDQURKO0FBYUgsQ0FmRDs7QUFpQkFSLGtCQUFrQixDQUFDUyxTQUFuQixHQUErQjtBQUMzQkMsRUFBQUEsT0FBTyxFQUFFQyxtQkFBVUMsSUFEUTtBQUUzQlAsRUFBQUEsS0FBSyxFQUFFTSxtQkFBVUUsTUFGVTtBQUczQlAsRUFBQUEsSUFBSSxFQUFFSyxtQkFBVUUsTUFIVztBQUkzQk4sRUFBQUEsS0FBSyxFQUFFSSxtQkFBVUUsTUFKVTtBQUszQkwsRUFBQUEsS0FBSyxFQUFFRyxtQkFBVUUsTUFMVTtBQU0zQkMsRUFBQUEsU0FBUyxFQUFFSCxtQkFBVUU7QUFOTSxDQUEvQjtlQVNlYixrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUm93IH0gZnJvbSBcIi4uLy4uL0dyaWRcIjtcbmltcG9ydCBWSENhcmRCYXNlIGZyb20gXCIuLi9DYXJkcy9CYXNlL2luZGV4XCI7XG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vc3R5bGVzJ1xuXG5jb25zdCBWSE1lZGlhY29udGFjdENhcmQgPSBwcm9wcyA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Um93IHN0eWxlPXt7IG1hcmdpblRvcDpcIi0xMCVcIiwgYm94U2hhZG93OiBcIjAgNHB4IDE0cHggMCByZ2JhKDAsIDAsIDAsIDAuMSlcIiwgYm9yZGVyUmFkaXVzOiBcIjZweFwifX0+XG4gICAgICAgICAgICA8VkhDYXJkQmFzZSBub0hvdmVyPlxuICAgICAgICAgICAgICAgIDxSb3cgPlxuICAgICAgICAgICAgICAgICAgICA8Uy5UaXRsZT57cHJvcHMudGl0bGV9PC9TLlRpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8Uy5JbmZvPntwcm9wcy5uYW1lfTwvUy5JbmZvPlxuICAgICAgICAgICAgICAgICAgICA8Uy5JbmZvPntwcm9wcy5lbWFpbH08L1MuSW5mbz5cbiAgICAgICAgICAgICAgICAgICAgPFMuSW5mbz57cHJvcHMucGhvbmV9PC9TLkluZm8+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8L1ZIQ2FyZEJhc2U+XG5cbiAgICAgICAgPC9Sb3c+XG4gICAgKVxufVxuXG5WSE1lZGlhY29udGFjdENhcmQucHJvcFR5cGVzID0ge1xuICAgIG9uRXZlbnQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZW1haWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcGhvbmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBWSE1lZGlhY29udGFjdENhcmQ7XG4iXX0=