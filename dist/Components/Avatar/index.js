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
  content: '',
  showCursor: true
};
VHAvatar.propTypes = {
  image: _propTypes.default.string,
  center: _propTypes.default.bool,
  showCursor: _propTypes.default.bool,
  size: _propTypes.default.string
};
var _default = VHAvatar;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQXZhdGFyL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJWSEF2YXRhciIsInByb3BzIiwiY2VudGVyIiwiaW1hZ2UiLCJzaXplIiwic2hvd0N1cnNvciIsImV2ZW50Iiwib25FdmVudCIsImRhdGEiLCJ0eXBlIiwidGFyZ2V0IiwibGFiZWwiLCJkZWZhdWx0UHJvcHMiLCJjb250ZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQUMsS0FBSyxFQUFJO0FBQ3hCLFNBQ0UsNkJBQUMsQ0FBRCxDQUFHLE1BQUg7QUFDRSxJQUFBLE1BQU0sRUFBRUEsS0FBSyxDQUFDQyxNQURoQjtBQUVFLElBQUEsS0FBSyxFQUFFRCxLQUFLLENBQUNFLEtBRmY7QUFHRSxJQUFBLElBQUksRUFBRUYsS0FBSyxDQUFDRyxJQUhkO0FBSUUsSUFBQSxVQUFVLEVBQUVILEtBQUssQ0FBQ0ksVUFKcEI7QUFLRSxJQUFBLE9BQU8sRUFBRSxpQkFBQUMsS0FBSyxFQUFJO0FBQ2hCLFVBQUlMLEtBQUssQ0FBQ00sT0FBVixFQUFtQjtBQUNqQk4sUUFBQUEsS0FBSyxDQUFDTSxPQUFOLENBQWM7QUFDWkMsVUFBQUEsSUFBSSxFQUFFUCxLQUFLLENBQUNPLElBREE7QUFFWkMsVUFBQUEsSUFBSSxFQUFFLFNBRk07QUFHWkMsVUFBQUEsTUFBTSxFQUFFO0FBSEksU0FBZDtBQUtEOztBQUFBO0FBQ0Y7QUFiSCxLQWVHVCxLQUFLLENBQUNVLEtBZlQsQ0FERjtBQW1CRCxDQXBCRDs7QUFzQkFYLFFBQVEsQ0FBQ1ksWUFBVCxHQUF3QjtBQUN0QkMsRUFBQUEsT0FBTyxFQUFFLEVBRGE7QUFFdEJSLEVBQUFBLFVBQVUsRUFBRTtBQUZVLENBQXhCO0FBS0FMLFFBQVEsQ0FBQ2MsU0FBVCxHQUFxQjtBQUNuQlgsRUFBQUEsS0FBSyxFQUFFWSxtQkFBVUMsTUFERTtBQUVuQmQsRUFBQUEsTUFBTSxFQUFFYSxtQkFBVUUsSUFGQztBQUduQlosRUFBQUEsVUFBVSxFQUFFVSxtQkFBVUUsSUFISDtBQUluQmIsRUFBQUEsSUFBSSxFQUFFVyxtQkFBVUM7QUFKRyxDQUFyQjtlQU9laEIsUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL3N0eWxlcyc7XG5cbmNvbnN0IFZIQXZhdGFyID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTLkF2YXRhclxuICAgICAgY2VudGVyPXtwcm9wcy5jZW50ZXJ9XG4gICAgICBpbWFnZT17cHJvcHMuaW1hZ2V9XG4gICAgICBzaXplPXtwcm9wcy5zaXplfVxuICAgICAgc2hvd0N1cnNvcj17cHJvcHMuc2hvd0N1cnNvcn1cbiAgICAgIG9uQ2xpY2s9e2V2ZW50ID0+IHtcbiAgICAgICAgaWYgKHByb3BzLm9uRXZlbnQpIHtcbiAgICAgICAgICBwcm9wcy5vbkV2ZW50KHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BzLmRhdGEsXG4gICAgICAgICAgICB0eXBlOiAnb25DbGljaycsXG4gICAgICAgICAgICB0YXJnZXQ6ICdWSEF2YXRhcidcbiAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgfX1cbiAgICA+XG4gICAgICB7cHJvcHMubGFiZWx9XG4gICAgPC9TLkF2YXRhcj5cbiAgKTtcbn07XG5cblZIQXZhdGFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29udGVudDogJycsXG4gIHNob3dDdXJzb3I6IHRydWUsXG59O1xuXG5WSEF2YXRhci5wcm9wVHlwZXMgPSB7XG4gIGltYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjZW50ZXI6IFByb3BUeXBlcy5ib29sLFxuICBzaG93Q3Vyc29yOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2l6ZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVkhBdmF0YXI7XG5cbiJdfQ==