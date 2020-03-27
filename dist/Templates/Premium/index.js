"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _index = _interopRequireDefault(require("../../Sections/Premium/Intro/index"));

var _index2 = _interopRequireDefault(require("../../Sections/Premium/Services/index"));

var _index3 = _interopRequireDefault(require("../../Sections/Premium/Pricing/index"));

var _index4 = _interopRequireDefault(require("../../Sections/Premium/Hired/index"));

var _index5 = _interopRequireDefault(require("../../Sections/Premium/Faq/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var VHPremiumTemplate = function VHPremiumTemplate(props) {
  return /*#__PURE__*/_react.default.createElement(_Grid.Container, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom: 10,
    style: {
      backgroundColor: "#f2f8fc",
      height: "100vh",
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    title: props.intro.items.title,
    highlight: props.intro.items.highlight,
    description: props.intro.items.description,
    label: props.intro.items.label,
    image: props.intro.items.image,
    features: props.intro.features,
    onEvent: props.onEvent
  })));
};

VHPremiumTemplate.defaultProps = {};
VHPremiumTemplate.propTypes = {};
var _default = VHPremiumTemplate;
exports.default = _default;