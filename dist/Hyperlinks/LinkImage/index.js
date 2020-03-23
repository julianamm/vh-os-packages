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

  return _react.default.createElement(_index.Row, {
    row: true
  }, _react.default.createElement(S.A, {
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
  }, props.label, _react.default.createElement(S.ImgWrapper, null, _react.default.createElement("img", {
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