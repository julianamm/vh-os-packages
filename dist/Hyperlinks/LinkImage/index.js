"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../Grid/index");

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var size = {
  w: 18,
  h: 18
};

var VHLinkImage = function VHLinkImage(props) {
  switch (true) {
    default:
    case props.xsImg:
      size = {
        w: 18,
        h: 18
      };
      break;

    case props.smImg:
      size = {
        w: 24,
        h: 24
      };
      break;

    case props.mdImg:
      size = {
        w: 36,
        h: 36
      };
      break;

    case props.lgImg:
      size = {
        w: 48,
        h: 48
      };
      break;
  }

  return /*#__PURE__*/_react.default.createElement(_index.Row, {
    row: true
  }, /*#__PURE__*/_react.default.createElement(S.A, {
    cursor: props.cursor,
    xs: props.xsLabel,
    sm: props.smLabel,
    lg: props.lgLabel,
    onClick: function onClick(e) {
      e.preventDefault();
      props.onClick();
    },
    className: "vh-link-image-component ".concat(props.className ? props.className : ''),
    color: props.color,
    noUnderscore: props.noUnderscore,
    to: props.to,
    label: props.label
  }, props.label, /*#__PURE__*/_react.default.createElement(S.ImgWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
    src: props.source,
    alt: props.title,
    title: props.title,
    width: size.w,
    height: size.h,
    className: "vh-link-image-component ".concat(props.className ? props.className : '')
  }))));
};

VHLinkImage.defaultProps = {
  xsLabel: false,
  smLabel: true,
  lgLabel: false,
  noUnderscore: false
};
VHLinkImage.propTypes = {
  reverse: _propTypes.default.bool,
  smLabel: _propTypes.default.bool,
  xsLabel: _propTypes.default.bool,
  lgLabel: _propTypes.default.bool,
  label: _propTypes.default.string.isRequired,
  className: _propTypes.default.string,
  color: _propTypes.default.string,
  to: _propTypes.default.string.isRequired,
  source: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired
};
var _default = VHLinkImage;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0h5cGVybGlua3MvTGlua0ltYWdlL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJzaXplIiwidyIsImgiLCJWSExpbmtJbWFnZSIsInByb3BzIiwieHNJbWciLCJzbUltZyIsIm1kSW1nIiwibGdJbWciLCJjdXJzb3IiLCJ4c0xhYmVsIiwic21MYWJlbCIsImxnTGFiZWwiLCJlIiwicHJldmVudERlZmF1bHQiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiY29sb3IiLCJub1VuZGVyc2NvcmUiLCJ0byIsImxhYmVsIiwic291cmNlIiwidGl0bGUiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJyZXZlcnNlIiwiUHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQUlBLElBQUksR0FBRztBQUNUQyxFQUFBQSxDQUFDLEVBQUUsRUFETTtBQUVUQyxFQUFBQSxDQUFDLEVBQUU7QUFGTSxDQUFYOztBQUtBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLEtBQUssRUFBSTtBQUUzQixVQUFRLElBQVI7QUFDRTtBQUNBLFNBQUtBLEtBQUssQ0FBQ0MsS0FBWDtBQUNFTCxNQUFBQSxJQUFJLEdBQUc7QUFDTEMsUUFBQUEsQ0FBQyxFQUFFLEVBREU7QUFFTEMsUUFBQUEsQ0FBQyxFQUFFO0FBRkUsT0FBUDtBQUlBOztBQUNGLFNBQUtFLEtBQUssQ0FBQ0UsS0FBWDtBQUNFTixNQUFBQSxJQUFJLEdBQUc7QUFDTEMsUUFBQUEsQ0FBQyxFQUFFLEVBREU7QUFFTEMsUUFBQUEsQ0FBQyxFQUFFO0FBRkUsT0FBUDtBQUlBOztBQUNGLFNBQUtFLEtBQUssQ0FBQ0csS0FBWDtBQUNFUCxNQUFBQSxJQUFJLEdBQUc7QUFDTEMsUUFBQUEsQ0FBQyxFQUFFLEVBREU7QUFFTEMsUUFBQUEsQ0FBQyxFQUFFO0FBRkUsT0FBUDtBQUlBOztBQUNGLFNBQUtFLEtBQUssQ0FBQ0ksS0FBWDtBQUNFUixNQUFBQSxJQUFJLEdBQUc7QUFDTEMsUUFBQUEsQ0FBQyxFQUFFLEVBREU7QUFFTEMsUUFBQUEsQ0FBQyxFQUFFO0FBRkUsT0FBUDtBQUlBO0FBekJKOztBQTRCQSxzQkFDRSw2QkFBQyxVQUFEO0FBQUssSUFBQSxHQUFHO0FBQVIsa0JBQ0UsNkJBQUMsQ0FBRCxDQUFHLENBQUg7QUFDRSxJQUFBLE1BQU0sRUFBRUUsS0FBSyxDQUFDSyxNQURoQjtBQUVFLElBQUEsRUFBRSxFQUFFTCxLQUFLLENBQUNNLE9BRlo7QUFHRSxJQUFBLEVBQUUsRUFBRU4sS0FBSyxDQUFDTyxPQUhaO0FBSUUsSUFBQSxFQUFFLEVBQUVQLEtBQUssQ0FBQ1EsT0FKWjtBQUtFLElBQUEsT0FBTyxFQUFFLGlCQUFBQyxDQUFDLEVBQUk7QUFDWkEsTUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FWLE1BQUFBLEtBQUssQ0FBQ1csT0FBTjtBQUNELEtBUkg7QUFTRSxJQUFBLFNBQVMsb0NBQTZCWCxLQUFLLENBQUNZLFNBQU4sR0FBa0JaLEtBQUssQ0FBQ1ksU0FBeEIsR0FBb0MsRUFBakUsQ0FUWDtBQVVFLElBQUEsS0FBSyxFQUFFWixLQUFLLENBQUNhLEtBVmY7QUFXRSxJQUFBLFlBQVksRUFBRWIsS0FBSyxDQUFDYyxZQVh0QjtBQVlFLElBQUEsRUFBRSxFQUFFZCxLQUFLLENBQUNlLEVBWlo7QUFhRSxJQUFBLEtBQUssRUFBRWYsS0FBSyxDQUFDZ0I7QUFiZixLQWVHaEIsS0FBSyxDQUFDZ0IsS0FmVCxlQWdCRSw2QkFBQyxDQUFELENBQUcsVUFBSCxxQkFDRTtBQUNFLElBQUEsR0FBRyxFQUFFaEIsS0FBSyxDQUFDaUIsTUFEYjtBQUVFLElBQUEsR0FBRyxFQUFFakIsS0FBSyxDQUFDa0IsS0FGYjtBQUdFLElBQUEsS0FBSyxFQUFFbEIsS0FBSyxDQUFDa0IsS0FIZjtBQUlFLElBQUEsS0FBSyxFQUFFdEIsSUFBSSxDQUFDQyxDQUpkO0FBS0UsSUFBQSxNQUFNLEVBQUVELElBQUksQ0FBQ0UsQ0FMZjtBQU1FLElBQUEsU0FBUyxvQ0FBNkJFLEtBQUssQ0FBQ1ksU0FBTixHQUFrQlosS0FBSyxDQUFDWSxTQUF4QixHQUFvQyxFQUFqRTtBQU5YLElBREYsQ0FoQkYsQ0FERixDQURGO0FBK0JELENBN0REOztBQStEQWIsV0FBVyxDQUFDb0IsWUFBWixHQUEyQjtBQUN6QmIsRUFBQUEsT0FBTyxFQUFFLEtBRGdCO0FBRXpCQyxFQUFBQSxPQUFPLEVBQUUsSUFGZ0I7QUFHekJDLEVBQUFBLE9BQU8sRUFBRSxLQUhnQjtBQUl6Qk0sRUFBQUEsWUFBWSxFQUFFO0FBSlcsQ0FBM0I7QUFPQWYsV0FBVyxDQUFDcUIsU0FBWixHQUF3QjtBQUN0QkMsRUFBQUEsT0FBTyxFQUFFQyxtQkFBVUMsSUFERztBQUV0QmhCLEVBQUFBLE9BQU8sRUFBRWUsbUJBQVVDLElBRkc7QUFHdEJqQixFQUFBQSxPQUFPLEVBQUVnQixtQkFBVUMsSUFIRztBQUl0QmYsRUFBQUEsT0FBTyxFQUFFYyxtQkFBVUMsSUFKRztBQUt0QlAsRUFBQUEsS0FBSyxFQUFFTSxtQkFBVUUsTUFBVixDQUFpQkMsVUFMRjtBQU10QmIsRUFBQUEsU0FBUyxFQUFFVSxtQkFBVUUsTUFOQztBQU90QlgsRUFBQUEsS0FBSyxFQUFFUyxtQkFBVUUsTUFQSztBQVF0QlQsRUFBQUEsRUFBRSxFQUFFTyxtQkFBVUUsTUFBVixDQUFpQkMsVUFSQztBQVN0QlIsRUFBQUEsTUFBTSxFQUFFSyxtQkFBVUUsTUFBVixDQUFpQkMsVUFUSDtBQVV0QlAsRUFBQUEsS0FBSyxFQUFFSSxtQkFBVUUsTUFBVixDQUFpQkM7QUFWRixDQUF4QjtlQWFlMUIsVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUm93IH0gZnJvbSAnLi4vLi4vR3JpZC9pbmRleCc7XG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vc3R5bGVzJztcblxubGV0IHNpemUgPSB7XG4gIHc6IDE4LFxuICBoOiAxOFxufVxuXG5jb25zdCBWSExpbmtJbWFnZSA9IHByb3BzID0+IHtcblxuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBkZWZhdWx0OlxuICAgIGNhc2UgcHJvcHMueHNJbWc6XG4gICAgICBzaXplID0ge1xuICAgICAgICB3OiAxOCxcbiAgICAgICAgaDogMThcbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSBwcm9wcy5zbUltZzpcbiAgICAgIHNpemUgPSB7XG4gICAgICAgIHc6IDI0LFxuICAgICAgICBoOiAyNFxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICBjYXNlIHByb3BzLm1kSW1nOlxuICAgICAgc2l6ZSA9IHtcbiAgICAgICAgdzogMzYsXG4gICAgICAgIGg6IDM2XG4gICAgICB9XG4gICAgICBicmVha1xuICAgIGNhc2UgcHJvcHMubGdJbWc6XG4gICAgICBzaXplID0ge1xuICAgICAgICB3OiA0OCxcbiAgICAgICAgaDogNDhcbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxSb3cgcm93PlxuICAgICAgPFMuQSAgICAgXG4gICAgICAgIGN1cnNvcj17cHJvcHMuY3Vyc29yfVxuICAgICAgICB4cz17cHJvcHMueHNMYWJlbH1cbiAgICAgICAgc209e3Byb3BzLnNtTGFiZWx9XG4gICAgICAgIGxnPXtwcm9wcy5sZ0xhYmVsfVxuICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBwcm9wcy5vbkNsaWNrKClcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPXtgdmgtbGluay1pbWFnZS1jb21wb25lbnQgJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJ31gfVxuICAgICAgICBjb2xvcj17cHJvcHMuY29sb3J9XG4gICAgICAgIG5vVW5kZXJzY29yZT17cHJvcHMubm9VbmRlcnNjb3JlfVxuICAgICAgICB0bz17cHJvcHMudG99XG4gICAgICAgIGxhYmVsPXtwcm9wcy5sYWJlbH1cbiAgICAgID4gXG4gICAgICAgIHtwcm9wcy5sYWJlbH1cbiAgICAgICAgPFMuSW1nV3JhcHBlcj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e3Byb3BzLnNvdXJjZX1cbiAgICAgICAgICAgIGFsdD17cHJvcHMudGl0bGV9XG4gICAgICAgICAgICB0aXRsZT17cHJvcHMudGl0bGV9XG4gICAgICAgICAgICB3aWR0aD17c2l6ZS53fVxuICAgICAgICAgICAgaGVpZ2h0PXtzaXplLmh9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2B2aC1saW5rLWltYWdlLWNvbXBvbmVudCAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TLkltZ1dyYXBwZXI+XG4gICAgICA8L1MuQT5cbiAgICA8L1Jvdz5cbiAgKVxufVxuXG5WSExpbmtJbWFnZS5kZWZhdWx0UHJvcHMgPSB7XG4gIHhzTGFiZWw6IGZhbHNlLFxuICBzbUxhYmVsOiB0cnVlLFxuICBsZ0xhYmVsOiBmYWxzZSxcbiAgbm9VbmRlcnNjb3JlOiBmYWxzZSxcbn1cblxuVkhMaW5rSW1hZ2UucHJvcFR5cGVzID0ge1xuICByZXZlcnNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgc21MYWJlbDogUHJvcFR5cGVzLmJvb2wsXG4gIHhzTGFiZWw6IFByb3BUeXBlcy5ib29sLFxuICBsZ0xhYmVsOiBQcm9wVHlwZXMuYm9vbCxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgdG86IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc291cmNlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZITGlua0ltYWdlOyJdfQ==