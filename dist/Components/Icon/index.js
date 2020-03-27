"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.IconPropTypes = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = _interopRequireDefault(require("../../assets/svg/icons/icon_delete.svg/index.js"));

var _index2 = _interopRequireDefault(require("../../assets/svg/icons/dot.svg/index.js"));

var _index3 = _interopRequireDefault(require("../../assets/svg/icons/icon_filter.svg/index.js"));

var _index4 = _interopRequireDefault(require("../../assets/svg/icons/icon_arrow_left.svg/index.js"));

var _index5 = _interopRequireDefault(require("../../assets/svg/icons/icon_swap_vert.svg/index.js"));

var _index6 = _interopRequireDefault(require("../../assets/svg/icons/mdi_search.svg/index.js"));

var _index7 = _interopRequireDefault(require("../../assets/svg/icons/icon_github.svg/index.js"));

var _index8 = _interopRequireDefault(require("../../assets/svg/icons/icon_linkedin_login.svg/index.js"));

var _index9 = _interopRequireDefault(require("../../assets/svg/icons/icon_globe.svg/index.js"));

var _index10 = _interopRequireDefault(require("../../assets/svg/flags/flag_usa.svg/index.js"));

var _index11 = _interopRequireDefault(require("../../assets/svg/flags/flag_canada.svg/index.js"));

var _index12 = _interopRequireDefault(require("../../assets/svg/flags/flag_germany.svg/index.js"));

var _index13 = _interopRequireDefault(require("../../assets/svg/flags/flag_ireland.svg/index.js"));

var _index14 = _interopRequireDefault(require("../../assets/svg/flags/flag_netherlands.svg/index.js"));

var _index15 = _interopRequireDefault(require("../../assets/svg/flags/flag_uk.svg/index.js"));

var _index16 = _interopRequireDefault(require("../../assets/svg/icons/icon_camera.svg/index.js"));

var _index16 = _interopRequireDefault(require("../../assets/svg/icons/icon_interview.svg/index.js"));

var _index17 = _interopRequireDefault(require("../../assets/svg/icons/icon_profile.svg/index.js"));

var _index18 = _interopRequireDefault(require("../../assets/svg/icons/icon_community.svg/index.js"));

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
    case 'webSite':
<<<<<<< HEAD
      return /*#__PURE__*/_react.default.createElement(_index9.default, {
=======
      return _react.default.createElement(_index8.default, {
>>>>>>> b9178afb2e4be2f635049ecc30cd26026e626ba6
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case "bullet":
<<<<<<< HEAD
      return /*#__PURE__*/_react.default.createElement(_index2.default, {
=======
      return _react.default.createElement(_index.default, {
>>>>>>> b9178afb2e4be2f635049ecc30cd26026e626ba6
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case "sort":
<<<<<<< HEAD
      return /*#__PURE__*/_react.default.createElement(_index5.default, {
=======
      return _react.default.createElement(_index4.default, {
>>>>>>> b9178afb2e4be2f635049ecc30cd26026e626ba6
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case "filter":
<<<<<<< HEAD
      return /*#__PURE__*/_react.default.createElement(_index3.default, {
=======
      return _react.default.createElement(_index2.default, {
>>>>>>> b9178afb2e4be2f635049ecc30cd26026e626ba6
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case "search":
<<<<<<< HEAD
      return /*#__PURE__*/_react.default.createElement(_index6.default, {
=======
      return _react.default.createElement(_index5.default, {
>>>>>>> b9178afb2e4be2f635049ecc30cd26026e626ba6
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case "arrow-left":
<<<<<<< HEAD
      return /*#__PURE__*/_react.default.createElement(_index4.default, {
=======
      return _react.default.createElement(_index3.default, {
>>>>>>> b9178afb2e4be2f635049ecc30cd26026e626ba6
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'github':
<<<<<<< HEAD
      return /*#__PURE__*/_react.default.createElement(_index7.default, {
=======
      return _react.default.createElement(_index6.default, {
>>>>>>> b9178afb2e4be2f635049ecc30cd26026e626ba6
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'world':
<<<<<<< HEAD
      return /*#__PURE__*/_react.default.createElement(_index9.default, {
=======
      return _react.default.createElement(_index8.default, {
>>>>>>> b9178afb2e4be2f635049ecc30cd26026e626ba6
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'linkedin':
<<<<<<< HEAD
      return /*#__PURE__*/_react.default.createElement(_index8.default, {
=======
      return _react.default.createElement(_index7.default, {
>>>>>>> b9178afb2e4be2f635049ecc30cd26026e626ba6
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'search':
<<<<<<< HEAD
      return /*#__PURE__*/_react.default.createElement(_index6.default, {
=======
      return _react.default.createElement(_index5.default, {
>>>>>>> b9178afb2e4be2f635049ecc30cd26026e626ba6
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'usa':
<<<<<<< HEAD
      return /*#__PURE__*/_react.default.createElement(_index10.default, {
=======
      return _react.default.createElement(_index9.default, {
>>>>>>> b9178afb2e4be2f635049ecc30cd26026e626ba6
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'canada':
<<<<<<< HEAD
      return /*#__PURE__*/_react.default.createElement(_index11.default, {
=======
      return _react.default.createElement(_index10.default, {
>>>>>>> b9178afb2e4be2f635049ecc30cd26026e626ba6
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'ireland':
<<<<<<< HEAD
      return /*#__PURE__*/_react.default.createElement(_index13.default, {
=======
      return _react.default.createElement(_index12.default, {
>>>>>>> b9178afb2e4be2f635049ecc30cd26026e626ba6
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'uk':
<<<<<<< HEAD
      return /*#__PURE__*/_react.default.createElement(_index15.default, {
=======
      return _react.default.createElement(_index14.default, {
>>>>>>> b9178afb2e4be2f635049ecc30cd26026e626ba6
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'germany':
<<<<<<< HEAD
      return /*#__PURE__*/_react.default.createElement(_index12.default, {
=======
      return _react.default.createElement(_index11.default, {
>>>>>>> b9178afb2e4be2f635049ecc30cd26026e626ba6
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'netherlands':
<<<<<<< HEAD
      return /*#__PURE__*/_react.default.createElement(_index14.default, {
=======
      return _react.default.createElement(_index13.default, {
>>>>>>> b9178afb2e4be2f635049ecc30cd26026e626ba6
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'camera':
<<<<<<< HEAD
      return /*#__PURE__*/_react.default.createElement(_index16.default, {
=======
      return _react.default.createElement(_index15.default, {
>>>>>>> b9178afb2e4be2f635049ecc30cd26026e626ba6
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

<<<<<<< HEAD
    case 'delete':
      return /*#__PURE__*/_react.default.createElement(_index.default, {
=======
    case 'interview':
      return _react.default.createElement(_index16.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'community':
      return _react.default.createElement(_index18.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'profile':
      return _react.default.createElement(_index17.default, {
>>>>>>> b9178afb2e4be2f635049ecc30cd26026e626ba6
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