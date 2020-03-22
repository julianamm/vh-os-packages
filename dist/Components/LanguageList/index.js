"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var S = _interopRequireWildcard(require("./styles"));

var _Text = _interopRequireDefault(require("../Text"));

var _Select = _interopRequireDefault(require("../Input/Select"));

var _Grid = require("../../Grid");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHLanguageList = function VHLanguageList(props) {
  var items = props.items ? props.items : [];

  if (items.length > 0) {
    items.sort(function (a, b) {
      return a.order > b.order ? 1 : -1;
    });
  }

  var list = props.list ? props.list : [];
  var secondList = props.secondList ? props.secondList : [];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(S.Wrapper, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    width: '30%',
    alignItemsCenter: true,
    row: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    width: '70%'
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    preLoading: props.controls.language.preLoading,
    marginBottom: '0px',
    removeBorder: true,
    caption: "",
    data: 'defaultLanguage',
    className: 'language',
    currentItem: {
      value: 'en',
      label: 'English'
    },
    items: [{
      value: 'en',
      label: 'English'
    }],
    description: "",
    descriptionColor: "primary",
    onEvent: props.onEvent,
    order: 0
  }))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    width: '20%'
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    preLoading: props.controls.language.preLoading,
    marginBottom: '0px',
    removeBorder: true,
    caption: "",
    data: 'proficiency',
    className: 'proficiency',
    currentItem: items[0] ? [secondList[items[0].level]] : {},
    items: secondList,
    description: "",
    descriptionColor: "primary",
    leftText: "",
    onEvent: props.onEvent,
    order: 0
  }))), /*#__PURE__*/_react.default.createElement(S.Wrapper, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    width: '30%',
    alignItemsCenter: true,
    row: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    width: '70%'
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    preLoading: props.controls.language.preLoading,
    marginBottom: '0px',
    removeBorder: true,
    caption: "",
    data: 'defaultLanguage',
    className: 'language',
    currentItem: {
      value: 'fr',
      label: 'French'
    },
    items: [{
      value: 'fr',
      label: 'French'
    }],
    description: "",
    descriptionColor: "primary",
    onEvent: props.onEvent,
    order: 1
  }))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    width: '20%'
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    preLoading: props.controls.language.preLoading,
    marginBottom: '0px',
    removeBorder: true,
    caption: "",
    data: 'proficiency',
    className: 'proficiency',
    currentItem: items[1] ? [secondList[items[1].level]] : {},
    items: secondList,
    description: "",
    descriptionColor: "primary",
    leftText: "",
    onEvent: props.onEvent,
    order: 1
  }))), /*#__PURE__*/_react.default.createElement(S.Wrapper, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    width: '30%',
    alignItemsCenter: true,
    row: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    width: '70%'
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    preLoading: props.controls.language.preLoading,
    marginBottom: '0px',
    removeBorder: true,
    caption: "",
    data: 'language',
    className: 'language',
    currentItem: items[2] ? list.find(function (element) {
      return element.value === items[2].id;
    }) : {},
    items: props.list,
    description: "",
    descriptionColor: "primary",
    onEvent: props.onEvent,
    order: 2
  }))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    width: '20%'
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    preLoading: props.controls.language.preLoading,
    isDisabled: !items[2] ? true : false,
    marginBottom: '0px',
    removeBorder: true,
    caption: "",
    data: 'proficiency',
    className: 'proficiency',
    currentItem: items[2] ? [secondList[items[2].level]] : {},
    items: secondList,
    description: "",
    descriptionColor: "primary",
    leftText: "",
    onEvent: props.onEvent,
    order: items[2] ? items[2] : ''
  }))));
};

var _default = VHLanguageList;
exports.default = _default;