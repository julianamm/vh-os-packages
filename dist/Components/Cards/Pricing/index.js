"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../../Grid");

var _Base = _interopRequireDefault(require("../Base"));

var _index = _interopRequireDefault(require("../../Chips/index"));

var _index2 = _interopRequireDefault(require("../../Text/index"));

var _index3 = _interopRequireDefault(require("../../Button/index"));

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHCardPricing = function VHCardPricing(props) {
  return _react.default.createElement(_Base.default, null, _react.default.createElement(_Grid.Row, {
    alignItemsCenter: true
  }, _react.default.createElement(_Grid.Row, {
    height: 25,
    alignItemsCenter: true
  }, _react.default.createElement(S.Wrapper, {
    show: props.show
  }, _react.default.createElement(_index.default, {
    onEvent: props.onEvent,
    label: props.save,
    round: true,
    secondary: props.secondaryChip,
    transparent: props.transparentChip,
    noHover: props.noHoverChip,
    marginRight: props.marginRight
  }))), _react.default.createElement(_Grid.Row, {
    alignItemsCenter: true,
    marginTop: 15,
    marginBottom: 5
  }, _react.default.createElement(_index2.default, {
    variant: "h4",
    color: "black-60",
    text: props.period
  })), _react.default.createElement(_index2.default, {
    variant: "h1",
    color: "primary-dark",
    text: props.price
  }), _react.default.createElement(_index2.default, {
    variant: "subtitle3",
    color: "primary-dark",
    text: props.unit
  }), _react.default.createElement(_index2.default, {
    variant: "subtitle3",
    color: "black-60",
    text: props.subscription
  }), _react.default.createElement(_Grid.Row, {
    alignItemsCenter: true,
    marginTop: 15,
    marginBottom: 5,
    style: {
      width: "50%",
      height: "40px"
    }
  }, _react.default.createElement(_index3.default, {
    onEvent: props.onEvent,
    label: props.cta,
    lg: true,
    outline: props.outlineBtn,
    primary: props.primaryBtn,
    secondary: props.secondaryBtn,
    full: true
  })), _react.default.createElement(_Grid.Row, {
    height: 20,
    alignItemsCenter: true
  }, _react.default.createElement(_index2.default, {
    variant: "subtitle2",
    color: "black-60",
    text: props.note
  }))));
};

VHCardPricing.defaultProps = {
  className: "",
  show: false
};
VHCardPricing.propTypes = {
  show: _propTypes.default.bool,
  onEvent: _propTypes.default.func,
  label: _propTypes.default.string,
  save: _propTypes.default.string,
  period: _propTypes.default.string,
  price: _propTypes.default.string,
  unit: _propTypes.default.string,
  subscription: _propTypes.default.string,
  cta: _propTypes.default.string,
  note: _propTypes.default.string,
  className: _propTypes.default.string
};
var _default = VHCardPricing;
exports.default = _default;