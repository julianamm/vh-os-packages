"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _General = _interopRequireDefault(require("../../Sections/General"));

var _skills = _interopRequireDefault(require("../../Sections/skills"));

var _Relocation = _interopRequireDefault(require("../../Sections/Relocation"));

var _Education = _interopRequireDefault(require("../../Sections/Education"));

var _Social = _interopRequireDefault(require("../../Sections/Social"));

var _UserCompanyExperience = _interopRequireDefault(require("../../Sections/UserCompanyExperience"));

var _index = _interopRequireDefault(require("../PageSection/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var VHProfileTemplate = function VHProfileTemplate(props) {
  return _react.default.createElement(_Grid.Container, {
    md: true
  }, _react.default.createElement(_Grid.Row, {
    marginBottom: 10
  }, _react.default.createElement("div", {
    id: "general"
  }, _react.default.createElement(_index.default, {
    content: _react.default.createElement(_General.default, _extends({}, props, {
      onEvent: props.onEvent
    }))
  }))), _react.default.createElement(_Grid.Row, {
    marginBottom: 10
  }, _react.default.createElement("div", {
    id: "skills"
  }, _react.default.createElement(_index.default, {
    content: _react.default.createElement(_skills.default, _extends({}, props, {
      onEvent: props.onEvent
    }))
  }))), _react.default.createElement(_Grid.Row, {
    marginBottom: 10
  }, _react.default.createElement("div", {
    id: "relocation"
  }, _react.default.createElement(_index.default, {
    content: _react.default.createElement(_Relocation.default, _extends({}, props, {
      onEvent: props.onEvent
    }))
  }))), _react.default.createElement(_Grid.Row, {
    marginBottom: 10
  }, _react.default.createElement(_Social.default, _extends({}, props, {
    onEvent: props.onEvent
  }))), _react.default.createElement(_Grid.Row, {
    marginBottom: 10
  }, _react.default.createElement("div", {
    id: "education"
  }, _react.default.createElement(_index.default, {
    content: _react.default.createElement(_Education.default, _extends({}, props, {
      onEvent: props.onEvent
    }))
  }))));
};

VHProfileTemplate.defaultProps = {};
VHProfileTemplate.propTypes = {};
var _default = VHProfileTemplate;
exports.default = _default;