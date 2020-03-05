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

var VHList = function VHList(props) {
  var items = props.items ? props.items : [];
  var currentItem = props.currentItem ? props.currentItem : [];
  return _react.default.createElement(_react.default.Fragment, null, items.map(function (item) {
    return _react.default.createElement(S.Wrapper, null, _react.default.createElement(_Grid.Row, {
      width: '20%'
    }, _react.default.createElement(_Select.default, {
      removeBorder: true,
      caption: "",
      data: 'AnyObjectOrString',
      className: 'AnyObjectOrString',
      currentItem: currentItem,
      items: items,
      description: "",
      descriptionColor: "primary",
      leftText: "",
      onEvent: function onEvent(e) {
        console.log(e);
      }
    })), _react.default.createElement(_Grid.Row, {
      width: '20%'
    }, _react.default.createElement(_Select.default, {
      removeBorder: true,
      caption: "",
      data: 'AnyObjectOrString',
      className: 'AnyObjectOrString',
      currentItem: currentItem,
      items: items,
      description: "",
      descriptionColor: "primary",
      leftText: "",
      onEvent: function onEvent(e) {
        console.log(e);
      }
    })));
  }));
};

var _default = VHList;
exports.default = _default;