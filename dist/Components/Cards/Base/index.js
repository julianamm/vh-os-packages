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

var VHCardBase = function VHCardBase(props) {
  return _react.default.createElement(S.Card, {
    onClick: function onClick(event) {
      if (props.onEvent) {
        props.onEvent({
          data: props,
          type: 'onClick',
          target: 'VHCardBase'
        });
      }

      ;
    },
    draggable: props.draggable,
    id: props.id,
    width: props.width,
    height: props.height,
    onDragEnter: props.onDragEnter,
    noPadding: props.noPadding,
    onDragLeave: props.onDragLeave,
    onDragStart: props.onDragStart,
    noBorder: props.noBorder,
    favorite: props.favorite,
    noHover: props.noHover
  }, props.children);
};

VHCardBase.defaultProps = {
  className: '',
  noBorder: false,
  favorite: false,
  noHover: false
};
VHCardBase.propTypes = {
  className: _propTypes.default.string,
  noBorder: _propTypes.default.bool,
  favorite: _propTypes.default.bool,
  noHover: _propTypes.default.bool
};
var _default = VHCardBase;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQ2FyZHMvQmFzZS9pbmRleC5qc3giXSwibmFtZXMiOlsiVkhDYXJkQmFzZSIsInByb3BzIiwiZXZlbnQiLCJvbkV2ZW50IiwiZGF0YSIsInR5cGUiLCJ0YXJnZXQiLCJkcmFnZ2FibGUiLCJpZCIsIndpZHRoIiwiaGVpZ2h0Iiwib25EcmFnRW50ZXIiLCJub1BhZGRpbmciLCJvbkRyYWdMZWF2ZSIsIm9uRHJhZ1N0YXJ0Iiwibm9Cb3JkZXIiLCJmYXZvcml0ZSIsIm5vSG92ZXIiLCJjaGlsZHJlbiIsImRlZmF1bHRQcm9wcyIsImNsYXNzTmFtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFDLEtBQUssRUFBSTtBQUMxQixTQUNFLDZCQUFDLENBQUQsQ0FBRyxJQUFIO0FBQ0UsSUFBQSxPQUFPLEVBQUUsaUJBQUFDLEtBQUssRUFBSTtBQUNoQixVQUFJRCxLQUFLLENBQUNFLE9BQVYsRUFBbUI7QUFDakJGLFFBQUFBLEtBQUssQ0FBQ0UsT0FBTixDQUFjO0FBQ1pDLFVBQUFBLElBQUksRUFBRUgsS0FETTtBQUVaSSxVQUFBQSxJQUFJLEVBQUUsU0FGTTtBQUdaQyxVQUFBQSxNQUFNLEVBQUU7QUFISSxTQUFkO0FBS0Q7O0FBQUE7QUFDRixLQVRIO0FBVUUsSUFBQSxTQUFTLEVBQUVMLEtBQUssQ0FBQ00sU0FWbkI7QUFXRSxJQUFBLEVBQUUsRUFBRU4sS0FBSyxDQUFDTyxFQVhaO0FBWUUsSUFBQSxLQUFLLEVBQUVQLEtBQUssQ0FBQ1EsS0FaZjtBQWFFLElBQUEsTUFBTSxFQUFFUixLQUFLLENBQUNTLE1BYmhCO0FBY0UsSUFBQSxXQUFXLEVBQUVULEtBQUssQ0FBQ1UsV0FkckI7QUFlRSxJQUFBLFNBQVMsRUFBRVYsS0FBSyxDQUFDVyxTQWZuQjtBQWdCRSxJQUFBLFdBQVcsRUFBRVgsS0FBSyxDQUFDWSxXQWhCckI7QUFpQkUsSUFBQSxXQUFXLEVBQUVaLEtBQUssQ0FBQ2EsV0FqQnJCO0FBa0JFLElBQUEsUUFBUSxFQUFFYixLQUFLLENBQUNjLFFBbEJsQjtBQWtCNEIsSUFBQSxRQUFRLEVBQUVkLEtBQUssQ0FBQ2UsUUFsQjVDO0FBa0JzRCxJQUFBLE9BQU8sRUFBRWYsS0FBSyxDQUFDZ0I7QUFsQnJFLEtBbUJHaEIsS0FBSyxDQUFDaUIsUUFuQlQsQ0FERjtBQXlCRCxDQTFCRDs7QUE0QkFsQixVQUFVLENBQUNtQixZQUFYLEdBQTBCO0FBQ3hCQyxFQUFBQSxTQUFTLEVBQUUsRUFEYTtBQUV4QkwsRUFBQUEsUUFBUSxFQUFFLEtBRmM7QUFHeEJDLEVBQUFBLFFBQVEsRUFBRSxLQUhjO0FBSXhCQyxFQUFBQSxPQUFPLEVBQUU7QUFKZSxDQUExQjtBQU9BakIsVUFBVSxDQUFDcUIsU0FBWCxHQUF1QjtBQUNyQkQsRUFBQUEsU0FBUyxFQUFFRSxtQkFBVUMsTUFEQTtBQUVyQlIsRUFBQUEsUUFBUSxFQUFFTyxtQkFBVUUsSUFGQztBQUdyQlIsRUFBQUEsUUFBUSxFQUFFTSxtQkFBVUUsSUFIQztBQUlyQlAsRUFBQUEsT0FBTyxFQUFFSyxtQkFBVUU7QUFKRSxDQUF2QjtlQU9leEIsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9zdHlsZXMnXG5cbmNvbnN0IFZIQ2FyZEJhc2UgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPFMuQ2FyZFxuICAgICAgb25DbGljaz17ZXZlbnQgPT4ge1xuICAgICAgICBpZiAocHJvcHMub25FdmVudCkge1xuICAgICAgICAgIHByb3BzLm9uRXZlbnQoe1xuICAgICAgICAgICAgZGF0YTogcHJvcHMsXG4gICAgICAgICAgICB0eXBlOiAnb25DbGljaycsXG4gICAgICAgICAgICB0YXJnZXQ6ICdWSENhcmRCYXNlJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICB9fVxuICAgICAgZHJhZ2dhYmxlPXtwcm9wcy5kcmFnZ2FibGV9XG4gICAgICBpZD17cHJvcHMuaWR9XG4gICAgICB3aWR0aD17cHJvcHMud2lkdGh9XG4gICAgICBoZWlnaHQ9e3Byb3BzLmhlaWdodH1cbiAgICAgIG9uRHJhZ0VudGVyPXtwcm9wcy5vbkRyYWdFbnRlcn1cbiAgICAgIG5vUGFkZGluZz17cHJvcHMubm9QYWRkaW5nfVxuICAgICAgb25EcmFnTGVhdmU9e3Byb3BzLm9uRHJhZ0xlYXZlfVxuICAgICAgb25EcmFnU3RhcnQ9e3Byb3BzLm9uRHJhZ1N0YXJ0fVxuICAgICAgbm9Cb3JkZXI9e3Byb3BzLm5vQm9yZGVyfSBmYXZvcml0ZT17cHJvcHMuZmF2b3JpdGV9IG5vSG92ZXI9e3Byb3BzLm5vSG92ZXJ9PlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuXG4gICAgPC9TLkNhcmQ+XG4gIClcblxufVxuXG5WSENhcmRCYXNlLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiAnJyxcbiAgbm9Cb3JkZXI6IGZhbHNlLFxuICBmYXZvcml0ZTogZmFsc2UsXG4gIG5vSG92ZXI6IGZhbHNlLFxufVxuXG5WSENhcmRCYXNlLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBub0JvcmRlcjogUHJvcFR5cGVzLmJvb2wsXG4gIGZhdm9yaXRlOiBQcm9wVHlwZXMuYm9vbCxcbiAgbm9Ib3ZlcjogUHJvcFR5cGVzLmJvb2wsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZIQ2FyZEJhc2VcbiJdfQ==