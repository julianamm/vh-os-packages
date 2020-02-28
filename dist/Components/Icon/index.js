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