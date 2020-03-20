"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.IconPropTypes = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var size = {
  w: 18,
  h: 18
};
var styles = {};

var VHImg = function VHImg(props) {
  switch (true) {
    default:
    case props.xs:
      size = {
        w: 18,
        h: 18
      };
      break;

    case props.sm:
      size = {
        w: 24,
        h: 24
      };
      break;

    case props.md:
      size = {
        w: 36,
        h: 36
      };
      break;

    case props.lg:
      size = {
        w: 48,
        h: 48
      };
      break;
  }

  return _react.default.createElement("img", {
    src: props.source,
    alt: props.title,
    title: props.title,
    width: size.w,
    height: size.h,
    style: styles,
    className: "vh-img ".concat(props.className ? props.className : '')
  });
};

VHImg.defaultProps = {
  className: ''
};
var IconPropTypes = {
  source: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired,
  className: _propTypes.default.string
};
exports.IconPropTypes = IconPropTypes;
VHImg.propTypes = IconPropTypes;
var _default = VHImg;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvSW1nL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJzaXplIiwidyIsImgiLCJzdHlsZXMiLCJWSEltZyIsInByb3BzIiwieHMiLCJzbSIsIm1kIiwibGciLCJzb3VyY2UiLCJ0aXRsZSIsImNsYXNzTmFtZSIsImRlZmF1bHRQcm9wcyIsIkljb25Qcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQSxJQUFJQSxJQUFJLEdBQUc7QUFDVEMsRUFBQUEsQ0FBQyxFQUFFLEVBRE07QUFFVEMsRUFBQUEsQ0FBQyxFQUFFO0FBRk0sQ0FBWDtBQUlBLElBQUlDLE1BQU0sR0FBRyxFQUFiOztBQUVBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUFDLEtBQUssRUFBSTtBQUVyQixVQUFRLElBQVI7QUFDRTtBQUNBLFNBQUtBLEtBQUssQ0FBQ0MsRUFBWDtBQUNFTixNQUFBQSxJQUFJLEdBQUc7QUFDTEMsUUFBQUEsQ0FBQyxFQUFFLEVBREU7QUFFTEMsUUFBQUEsQ0FBQyxFQUFFO0FBRkUsT0FBUDtBQUlBOztBQUNGLFNBQUtHLEtBQUssQ0FBQ0UsRUFBWDtBQUNFUCxNQUFBQSxJQUFJLEdBQUc7QUFDTEMsUUFBQUEsQ0FBQyxFQUFFLEVBREU7QUFFTEMsUUFBQUEsQ0FBQyxFQUFFO0FBRkUsT0FBUDtBQUlBOztBQUNGLFNBQUtHLEtBQUssQ0FBQ0csRUFBWDtBQUNFUixNQUFBQSxJQUFJLEdBQUc7QUFDTEMsUUFBQUEsQ0FBQyxFQUFFLEVBREU7QUFFTEMsUUFBQUEsQ0FBQyxFQUFFO0FBRkUsT0FBUDtBQUlBOztBQUNGLFNBQUtHLEtBQUssQ0FBQ0ksRUFBWDtBQUNFVCxNQUFBQSxJQUFJLEdBQUc7QUFDTEMsUUFBQUEsQ0FBQyxFQUFFLEVBREU7QUFFTEMsUUFBQUEsQ0FBQyxFQUFFO0FBRkUsT0FBUDtBQUlBO0FBekJKOztBQTRCRSxTQUNFO0FBQ0UsSUFBQSxHQUFHLEVBQUVHLEtBQUssQ0FBQ0ssTUFEYjtBQUVFLElBQUEsR0FBRyxFQUFFTCxLQUFLLENBQUNNLEtBRmI7QUFHRSxJQUFBLEtBQUssRUFBRU4sS0FBSyxDQUFDTSxLQUhmO0FBSUUsSUFBQSxLQUFLLEVBQUVYLElBQUksQ0FBQ0MsQ0FKZDtBQUtFLElBQUEsTUFBTSxFQUFFRCxJQUFJLENBQUNFLENBTGY7QUFNRSxJQUFBLEtBQUssRUFBRUMsTUFOVDtBQU9FLElBQUEsU0FBUyxtQkFBWUUsS0FBSyxDQUFDTyxTQUFOLEdBQWtCUCxLQUFLLENBQUNPLFNBQXhCLEdBQW9DLEVBQWhEO0FBUFgsSUFERjtBQVlILENBMUNEOztBQTRDQVIsS0FBSyxDQUFDUyxZQUFOLEdBQXFCO0FBQ25CRCxFQUFBQSxTQUFTLEVBQUU7QUFEUSxDQUFyQjtBQUdPLElBQU1FLGFBQWEsR0FBRztBQUMzQkosRUFBQUEsTUFBTSxFQUFFSyxtQkFBVUMsTUFBVixDQUFpQkMsVUFERTtBQUUzQk4sRUFBQUEsS0FBSyxFQUFFSSxtQkFBVUMsTUFBVixDQUFpQkMsVUFGRztBQUczQkwsRUFBQUEsU0FBUyxFQUFFRyxtQkFBVUM7QUFITSxDQUF0Qjs7QUFNUFosS0FBSyxDQUFDYyxTQUFOLEdBQWtCSixhQUFsQjtlQUVlVixLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xubGV0IHNpemUgPSB7XG4gIHc6IDE4LFxuICBoOiAxOFxufVxubGV0IHN0eWxlcyA9IHt9XG5cbmNvbnN0IFZISW1nID0gcHJvcHMgPT4ge1xuXG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGRlZmF1bHQ6XG4gICAgY2FzZSBwcm9wcy54czpcbiAgICAgIHNpemUgPSB7XG4gICAgICAgIHc6IDE4LFxuICAgICAgICBoOiAxOFxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICBjYXNlIHByb3BzLnNtOlxuICAgICAgc2l6ZSA9IHtcbiAgICAgICAgdzogMjQsXG4gICAgICAgIGg6IDI0XG4gICAgICB9XG4gICAgICBicmVha1xuICAgIGNhc2UgcHJvcHMubWQ6XG4gICAgICBzaXplID0ge1xuICAgICAgICB3OiAzNixcbiAgICAgICAgaDogMzZcbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSBwcm9wcy5sZzpcbiAgICAgIHNpemUgPSB7XG4gICAgICAgIHc6IDQ4LFxuICAgICAgICBoOiA0OFxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxpbWdcbiAgICAgICAgc3JjPXtwcm9wcy5zb3VyY2V9XG4gICAgICAgIGFsdD17cHJvcHMudGl0bGV9XG4gICAgICAgIHRpdGxlPXtwcm9wcy50aXRsZX1cbiAgICAgICAgd2lkdGg9e3NpemUud31cbiAgICAgICAgaGVpZ2h0PXtzaXplLmh9XG4gICAgICAgIHN0eWxlPXtzdHlsZXN9XG4gICAgICAgIGNsYXNzTmFtZT17YHZoLWltZyAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9XG4gICAgICAvPlxuICAgIClcblxufVxuXG5WSEltZy5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogJycsXG59XG5leHBvcnQgY29uc3QgSWNvblByb3BUeXBlcyA9IHtcbiAgc291cmNlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn1cblxuVkhJbWcucHJvcFR5cGVzID0gSWNvblByb3BUeXBlc1xuXG5leHBvcnQgZGVmYXVsdCBWSEltZyJdfQ==