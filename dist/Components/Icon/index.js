"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.IconPropTypes = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = _interopRequireDefault(require("../../assets/svg/icons/dot.svg/index.js"));

var _index2 = _interopRequireDefault(require("../../assets/svg/icons/icon_filter.svg/index.js"));

var _index3 = _interopRequireDefault(require("../../assets/svg/icons/icon_arrow_left.svg/index.js"));

var _index4 = _interopRequireDefault(require("../../assets/svg/icons/icon_swap_vert.svg/index.js"));

var _index5 = _interopRequireDefault(require("../../assets/svg/icons/mdi_search.svg/index.js"));

var _index6 = _interopRequireDefault(require("../../assets/svg/icons/icon_github.svg/index.js"));

var _index7 = _interopRequireDefault(require("../../assets/svg/icons/icon_linkedin_login.svg/index.js"));

var _index8 = _interopRequireDefault(require("../../assets/svg/icons/icon_globe.svg/index.js"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  }

  switch (props.icon) {
    case "bullet":
      return _react.default.createElement(_index.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case "sort":
      return _react.default.createElement(_index4.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case "filter":
      return _react.default.createElement(_index2.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case "search":
      return _react.default.createElement(_index5.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case "arrow-left":
      return _react.default.createElement(_index3.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'github':
      return _react.default.createElement(_index6.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'world':
      return _react.default.createElement(_index8.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'linkedin':
      return _react.default.createElement(_index7.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'search':
      return _react.default.createElement(_index5.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    default:
      return _react.default.createElement("span", null);
  }
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