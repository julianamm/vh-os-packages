"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.IconPropTypes = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { ReactComponent as BulletIcon } from '../../../assets/icons/dot.svg'
// import { ReactComponent as FilterIcon } from '../../../assets/icons/icon_filter.svg'
// import { ReactComponent as ArrowLeftIcon } from '../../../assets/icons/ico-arrow-left.svg'
// import { ReactComponent as SortIcon } from '../../../assets/icons/icon_swap-vert.svg'
// import { ReactComponent as SearchIcon } from '../../../assets/icons/mdi_search.svg'
var size = {
  w: 18,
  h: 18
};
var defaultColor = "silver";

var VHIcon = function VHIcon(props) {
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

  switch (true) {
    case props.primary:
      defaultColor = "blue";
      break;

    case props.danger:
      defaultColor = "red";
      break;

    case props.warning:
      defaultColor = "yellow";
      break;

    case props.info:
      defaultColor = "silver";
      break;
  }

  if (props.color) {
    defaultColor = _Colors.default[props.color];
  } // switch (props.icon) {
  //   case "bullet":      
  //     return <BulletIcon fill={defaultColor}  width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`}/>
  //   case "sort":      
  //     return <SortIcon fill={defaultColor}  width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`}/>
  //   case "filter":      
  //     return <FilterIcon fill={defaultColor}  width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`}/>
  //   case "search":      
  //     return <SearchIcon fill={defaultColor}  width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`}/>
  //   case "arrow-left":      
  //     return <ArrowLeftIcon fill={defaultColor}  width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`}/>
  //   default:
  //     return <BulletIcon fill={defaultColor} width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`}/>
  // }


  return _react.default.createElement("span", null, "i");
};

VHIcon.defaultProps = {
  className: ''
};
var IconPropTypes = {
  source: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired,
  className: _propTypes.default.string,
  color: _propTypes.default.string,
  icon: _propTypes.default.string
};
exports.IconPropTypes = IconPropTypes;
VHIcon.propTypes = IconPropTypes;
var _default = VHIcon;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvSWNvbi9pbmRleC5qc3giXSwibmFtZXMiOlsic2l6ZSIsInciLCJoIiwiZGVmYXVsdENvbG9yIiwiVkhJY29uIiwicHJvcHMiLCJ4cyIsInNtIiwibWQiLCJsZyIsInByaW1hcnkiLCJkYW5nZXIiLCJ3YXJuaW5nIiwiaW5mbyIsImNvbG9yIiwiQ29sb3IiLCJkZWZhdWx0UHJvcHMiLCJjbGFzc05hbWUiLCJJY29uUHJvcFR5cGVzIiwic291cmNlIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsInRpdGxlIiwiaWNvbiIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQU9BOzs7O0FBTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLElBQUlBLElBQUksR0FBRztBQUNUQyxFQUFBQSxDQUFDLEVBQUUsRUFETTtBQUVUQyxFQUFBQSxDQUFDLEVBQUU7QUFGTSxDQUFYO0FBS0EsSUFBSUMsWUFBWSxHQUFHLFFBQW5COztBQUVBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFDLEtBQUssRUFBSTtBQUV0QixVQUFRLElBQVI7QUFDRTtBQUNBLFNBQUtBLEtBQUssQ0FBQ0MsRUFBWDtBQUNFTixNQUFBQSxJQUFJLEdBQUc7QUFDTEMsUUFBQUEsQ0FBQyxFQUFFLEVBREU7QUFFTEMsUUFBQUEsQ0FBQyxFQUFFO0FBRkUsT0FBUDtBQUlBOztBQUNGLFNBQUtHLEtBQUssQ0FBQ0UsRUFBWDtBQUNFUCxNQUFBQSxJQUFJLEdBQUc7QUFDTEMsUUFBQUEsQ0FBQyxFQUFFLEVBREU7QUFFTEMsUUFBQUEsQ0FBQyxFQUFFO0FBRkUsT0FBUDtBQUlBOztBQUNGLFNBQUtHLEtBQUssQ0FBQ0csRUFBWDtBQUNFUixNQUFBQSxJQUFJLEdBQUc7QUFDTEMsUUFBQUEsQ0FBQyxFQUFFLEVBREU7QUFFTEMsUUFBQUEsQ0FBQyxFQUFFO0FBRkUsT0FBUDtBQUlBOztBQUNGLFNBQUtHLEtBQUssQ0FBQ0ksRUFBWDtBQUNFVCxNQUFBQSxJQUFJLEdBQUc7QUFDTEMsUUFBQUEsQ0FBQyxFQUFFLEVBREU7QUFFTEMsUUFBQUEsQ0FBQyxFQUFFO0FBRkUsT0FBUDtBQUlBO0FBekJKOztBQTRCQSxVQUFRLElBQVI7QUFDRSxTQUFLRyxLQUFLLENBQUNLLE9BQVg7QUFDRVAsTUFBQUEsWUFBWSxHQUFHLE1BQWY7QUFDQTs7QUFDRixTQUFLRSxLQUFLLENBQUNNLE1BQVg7QUFDRVIsTUFBQUEsWUFBWSxHQUFHLEtBQWY7QUFDQTs7QUFDRixTQUFLRSxLQUFLLENBQUNPLE9BQVg7QUFDRVQsTUFBQUEsWUFBWSxHQUFHLFFBQWY7QUFDQTs7QUFDRixTQUFLRSxLQUFLLENBQUNRLElBQVg7QUFDRVYsTUFBQUEsWUFBWSxHQUFHLFFBQWY7QUFDQTtBQVpKOztBQWVBLE1BQUdFLEtBQUssQ0FBQ1MsS0FBVCxFQUFnQjtBQUNkWCxJQUFBQSxZQUFZLEdBQUdZLGdCQUFNVixLQUFLLENBQUNTLEtBQVosQ0FBZjtBQUNELEdBL0NxQixDQWlEdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBTywrQ0FBUDtBQUNELENBaEVEOztBQWtFQVYsTUFBTSxDQUFDWSxZQUFQLEdBQXNCO0FBQ3BCQyxFQUFBQSxTQUFTLEVBQUU7QUFEUyxDQUF0QjtBQUdPLElBQU1DLGFBQWEsR0FBRztBQUMzQkMsRUFBQUEsTUFBTSxFQUFFQyxtQkFBVUMsTUFBVixDQUFpQkMsVUFERTtBQUUzQkMsRUFBQUEsS0FBSyxFQUFFSCxtQkFBVUMsTUFBVixDQUFpQkMsVUFGRztBQUczQkwsRUFBQUEsU0FBUyxFQUFFRyxtQkFBVUMsTUFITTtBQUkzQlAsRUFBQUEsS0FBSyxFQUFFTSxtQkFBVUMsTUFKVTtBQUszQkcsRUFBQUEsSUFBSSxFQUFFSixtQkFBVUM7QUFMVyxDQUF0Qjs7QUFRUGpCLE1BQU0sQ0FBQ3FCLFNBQVAsR0FBbUJQLGFBQW5CO2VBRWVkLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG4vLyBpbXBvcnQgeyBSZWFjdENvbXBvbmVudCBhcyBCdWxsZXRJY29uIH0gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ljb25zL2RvdC5zdmcnXG4vLyBpbXBvcnQgeyBSZWFjdENvbXBvbmVudCBhcyBGaWx0ZXJJY29uIH0gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ljb25zL2ljb25fZmlsdGVyLnN2Zydcbi8vIGltcG9ydCB7IFJlYWN0Q29tcG9uZW50IGFzIEFycm93TGVmdEljb24gfSBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvaWNvLWFycm93LWxlZnQuc3ZnJ1xuLy8gaW1wb3J0IHsgUmVhY3RDb21wb25lbnQgYXMgU29ydEljb24gfSBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvaWNvbl9zd2FwLXZlcnQuc3ZnJ1xuLy8gaW1wb3J0IHsgUmVhY3RDb21wb25lbnQgYXMgU2VhcmNoSWNvbiB9IGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9tZGlfc2VhcmNoLnN2ZydcblxuaW1wb3J0IENvbG9yIGZyb20gXCIuLi8uLi9Db2xvcnNcIjtcblxubGV0IHNpemUgPSB7XG4gIHc6IDE4LFxuICBoOiAxOFxufVxuXG5sZXQgZGVmYXVsdENvbG9yID0gXCJzaWx2ZXJcIlxuXG5jb25zdCBWSEljb24gPSBwcm9wcyA9PiB7XG5cbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgZGVmYXVsdDpcbiAgICBjYXNlIHByb3BzLnhzOlxuICAgICAgc2l6ZSA9IHtcbiAgICAgICAgdzogMTgsXG4gICAgICAgIGg6IDE4XG4gICAgICB9XG4gICAgICBicmVha1xuICAgIGNhc2UgcHJvcHMuc206XG4gICAgICBzaXplID0ge1xuICAgICAgICB3OiAyNCxcbiAgICAgICAgaDogMjRcbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSBwcm9wcy5tZDpcbiAgICAgIHNpemUgPSB7XG4gICAgICAgIHc6IDM2LFxuICAgICAgICBoOiAzNlxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICBjYXNlIHByb3BzLmxnOlxuICAgICAgc2l6ZSA9IHtcbiAgICAgICAgdzogNDgsXG4gICAgICAgIGg6IDQ4XG4gICAgICB9XG4gICAgICBicmVha1xuICB9XG5cbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBwcm9wcy5wcmltYXJ5OlxuICAgICAgZGVmYXVsdENvbG9yID0gXCJibHVlXCJcbiAgICAgIGJyZWFrXG4gICAgY2FzZSBwcm9wcy5kYW5nZXI6XG4gICAgICBkZWZhdWx0Q29sb3IgPSBcInJlZFwiXG4gICAgICBicmVha1xuICAgIGNhc2UgcHJvcHMud2FybmluZzpcbiAgICAgIGRlZmF1bHRDb2xvciA9IFwieWVsbG93XCJcbiAgICAgIGJyZWFrXG4gICAgY2FzZSBwcm9wcy5pbmZvOlxuICAgICAgZGVmYXVsdENvbG9yID0gXCJzaWx2ZXJcIlxuICAgICAgYnJlYWtcbiAgfVxuXG4gIGlmKHByb3BzLmNvbG9yKSB7XG4gICAgZGVmYXVsdENvbG9yID0gQ29sb3JbcHJvcHMuY29sb3JdO1xuICB9XG5cbiAgLy8gc3dpdGNoIChwcm9wcy5pY29uKSB7XG4gIC8vICAgY2FzZSBcImJ1bGxldFwiOiAgICAgIFxuICAvLyAgICAgcmV0dXJuIDxCdWxsZXRJY29uIGZpbGw9e2RlZmF1bHRDb2xvcn0gIHdpZHRoPXtgJHtzaXplLnd9cHhgfSBoZWlnaHQ9e2Ake3NpemUuaH1weGB9IGNsYXNzTmFtZT17YHZoLWljb24gJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJ31gfS8+XG4gIC8vICAgY2FzZSBcInNvcnRcIjogICAgICBcbiAgLy8gICAgIHJldHVybiA8U29ydEljb24gZmlsbD17ZGVmYXVsdENvbG9yfSAgd2lkdGg9e2Ake3NpemUud31weGB9IGhlaWdodD17YCR7c2l6ZS5ofXB4YH0gY2xhc3NOYW1lPXtgdmgtaWNvbiAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9Lz5cbiAgLy8gICBjYXNlIFwiZmlsdGVyXCI6ICAgICAgXG4gIC8vICAgICByZXR1cm4gPEZpbHRlckljb24gZmlsbD17ZGVmYXVsdENvbG9yfSAgd2lkdGg9e2Ake3NpemUud31weGB9IGhlaWdodD17YCR7c2l6ZS5ofXB4YH0gY2xhc3NOYW1lPXtgdmgtaWNvbiAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9Lz5cbiAgLy8gICBjYXNlIFwic2VhcmNoXCI6ICAgICAgXG4gIC8vICAgICByZXR1cm4gPFNlYXJjaEljb24gZmlsbD17ZGVmYXVsdENvbG9yfSAgd2lkdGg9e2Ake3NpemUud31weGB9IGhlaWdodD17YCR7c2l6ZS5ofXB4YH0gY2xhc3NOYW1lPXtgdmgtaWNvbiAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9Lz5cbiAgLy8gICBjYXNlIFwiYXJyb3ctbGVmdFwiOiAgICAgIFxuICAvLyAgICAgcmV0dXJuIDxBcnJvd0xlZnRJY29uIGZpbGw9e2RlZmF1bHRDb2xvcn0gIHdpZHRoPXtgJHtzaXplLnd9cHhgfSBoZWlnaHQ9e2Ake3NpemUuaH1weGB9IGNsYXNzTmFtZT17YHZoLWljb24gJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJ31gfS8+XG4gIC8vICAgZGVmYXVsdDpcbiAgLy8gICAgIHJldHVybiA8QnVsbGV0SWNvbiBmaWxsPXtkZWZhdWx0Q29sb3J9IHdpZHRoPXtgJHtzaXplLnd9cHhgfSBoZWlnaHQ9e2Ake3NpemUuaH1weGB9IGNsYXNzTmFtZT17YHZoLWljb24gJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJ31gfS8+XG4gIC8vIH1cbiAgcmV0dXJuIDxzcGFuPmk8L3NwYW4+XG59XG5cblZISWNvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogJycsXG59XG5leHBvcnQgY29uc3QgSWNvblByb3BUeXBlcyA9IHtcbiAgc291cmNlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG59XG5cblZISWNvbi5wcm9wVHlwZXMgPSBJY29uUHJvcFR5cGVzXG5cbmV4cG9ydCBkZWZhdWx0IFZISWNvblxuIl19