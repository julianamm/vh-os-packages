"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHAvatar = function VHAvatar(props) {
  return _react.default.createElement(S.Avatar, {
    center: props.center,
    image: props.image,
    size: props.size,
    showCursor: props.showCursor,
    onClick: function onClick(event) {
      if (props.onEvent) {
        props.onEvent({
          data: props.data,
          type: 'onClick',
          target: 'VHAvatar'
        });
      }

      ;
    }
  }, props.label);
};

VHAvatar.defaultProps = {
  content: ''
};
VHAvatar.propTypes = {
  image: _propTypes.default.string,
  center: _propTypes.default.bool,
  showCursor: _propTypes.default.bool,
  size: _propTypes.default.string
};
var _default = VHAvatar;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQXZhdGFyL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJWSEF2YXRhciIsInByb3BzIiwiY2VudGVyIiwiaW1hZ2UiLCJzaXplIiwic2hvd0N1cnNvciIsImV2ZW50Iiwib25FdmVudCIsImRhdGEiLCJ0eXBlIiwidGFyZ2V0IiwibGFiZWwiLCJkZWZhdWx0UHJvcHMiLCJjb250ZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQUMsS0FBSyxFQUFJO0FBQ3hCLFNBQ0UsNkJBQUMsQ0FBRCxDQUFHLE1BQUg7QUFDRSxJQUFBLE1BQU0sRUFBRUEsS0FBSyxDQUFDQyxNQURoQjtBQUVFLElBQUEsS0FBSyxFQUFFRCxLQUFLLENBQUNFLEtBRmY7QUFHRSxJQUFBLElBQUksRUFBRUYsS0FBSyxDQUFDRyxJQUhkO0FBSUUsSUFBQSxVQUFVLEVBQUVILEtBQUssQ0FBQ0ksVUFKcEI7QUFLRSxJQUFBLE9BQU8sRUFBRSxpQkFBQUMsS0FBSyxFQUFJO0FBQ2hCLFVBQUlMLEtBQUssQ0FBQ00sT0FBVixFQUFtQjtBQUNqQk4sUUFBQUEsS0FBSyxDQUFDTSxPQUFOLENBQWM7QUFDWkMsVUFBQUEsSUFBSSxFQUFFUCxLQUFLLENBQUNPLElBREE7QUFFWkMsVUFBQUEsSUFBSSxFQUFFLFNBRk07QUFHWkMsVUFBQUEsTUFBTSxFQUFFO0FBSEksU0FBZDtBQUtEOztBQUFBO0FBQ0Y7QUFiSCxLQWVHVCxLQUFLLENBQUNVLEtBZlQsQ0FERjtBQW1CRCxDQXBCRDs7QUFzQkFYLFFBQVEsQ0FBQ1ksWUFBVCxHQUF3QjtBQUN0QkMsRUFBQUEsT0FBTyxFQUFFO0FBRGEsQ0FBeEI7QUFJQWIsUUFBUSxDQUFDYyxTQUFULEdBQXFCO0FBQ25CWCxFQUFBQSxLQUFLLEVBQUVZLG1CQUFVQyxNQURFO0FBRW5CZCxFQUFBQSxNQUFNLEVBQUVhLG1CQUFVRSxJQUZDO0FBR25CWixFQUFBQSxVQUFVLEVBQUVVLG1CQUFVRSxJQUhIO0FBSW5CYixFQUFBQSxJQUFJLEVBQUVXLG1CQUFVQztBQUpHLENBQXJCO2VBT2VoQixRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vc3R5bGVzJztcblxuY29uc3QgVkhBdmF0YXIgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPFMuQXZhdGFyXG4gICAgICBjZW50ZXI9e3Byb3BzLmNlbnRlcn1cbiAgICAgIGltYWdlPXtwcm9wcy5pbWFnZX1cbiAgICAgIHNpemU9e3Byb3BzLnNpemV9XG4gICAgICBzaG93Q3Vyc29yPXtwcm9wcy5zaG93Q3Vyc29yfVxuICAgICAgb25DbGljaz17ZXZlbnQgPT4ge1xuICAgICAgICBpZiAocHJvcHMub25FdmVudCkge1xuICAgICAgICAgIHByb3BzLm9uRXZlbnQoe1xuICAgICAgICAgICAgZGF0YTogcHJvcHMuZGF0YSxcbiAgICAgICAgICAgIHR5cGU6ICdvbkNsaWNrJyxcbiAgICAgICAgICAgIHRhcmdldDogJ1ZIQXZhdGFyJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICB9fVxuICAgID5cbiAgICAgIHtwcm9wcy5sYWJlbH1cbiAgICA8L1MuQXZhdGFyPlxuICApO1xufTtcblxuVkhBdmF0YXIuZGVmYXVsdFByb3BzID0ge1xuICBjb250ZW50OiAnJ1xufTtcblxuVkhBdmF0YXIucHJvcFR5cGVzID0ge1xuICBpbWFnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2VudGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2hvd0N1cnNvcjogUHJvcFR5cGVzLmJvb2wsXG4gIHNpemU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZIQXZhdGFyO1xuXG4iXX0=