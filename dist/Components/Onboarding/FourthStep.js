"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _Icon = _interopRequireDefault(require("../Icon"));

var _Text = _interopRequireDefault(require("../Text"));

var _Select = _interopRequireDefault(require("../Input/Select"));

var _radio = _interopRequireDefault(require("../Input/radio"));

var _TargetLocation = _interopRequireDefault(require("../TargetLocation/"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FourthStep = function FourthStep(props) {
  var visaStatusCanadianList = props.visaStatusCanadianList;
  var visaStatusEUList = props.visaStatusEUList;
  var targetLocation = props.targetLocation ? props.targetLocation.items : [];
  var visaStatusCanadian = props.visaStatusCanadian != undefined ? visaStatusCanadianList[props.visaStatusCanadian] : [];
  var visaStatusEU = props.visaStatusEU != undefined ? visaStatusEUList[props.visaStatusEU] : [];
  return /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    column: true,
    marginLeft: 1,
    marginRight: 1
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    marginBottom: 10,
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    autoWidth: true,
    marginRight: 5
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon: 'relocation',
    title: "city",
    md: true,
    color: "gray-50"
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    width: '70%'
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    variant: "h4",
    color: "gray-90",
    text: 'Relocation'
  }))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    column: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom: 10
  }, /*#__PURE__*/_react.default.createElement(_radio.default, {
    data: 'openForRemoteJobs',
    color: "gray-90",
    variant: "platform1",
    onEvent: props.onEvent,
    text: 'Are you open to remote jobs?',
    checked: props.openForRemoteJobs
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom: 5,
    width: '100%'
  }, /*#__PURE__*/_react.default.createElement(_TargetLocation.default, {
    onEvent: props.onEvent,
    items: targetLocation
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    responsive: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    paddingRight8: true
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    caption: "Canadian Visa Status",
    className: "vh-general-section-visaStatusCanadian ".concat(props.className ? props.className : ''),
    currentItem: visaStatusCanadian,
    data: "visaStatusCanadian",
    items: visaStatusCanadianList,
    onEvent: props.onEvent,
    isLoading: props.controls.visaStatusCanadian.loading,
    description: props.controls.visaStatusCanadian.error && props.controls.visaStatusCanadian.message,
    descriptionColor: "red",
    captionColor: props.controls.visaStatusCanadian.loading ? "gray-40" : props.controls.visaStatusCanadian.error ? "red" : "gray-90"
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_Select.default, {
    caption: "EU Visa Status",
    className: "vh-general-section-visaStatusEU ".concat(props.className ? props.className : ''),
    currentItem: visaStatusEU,
    data: "visaStatusEU",
    items: visaStatusEUList,
    onEvent: props.onEvent,
    isLoading: props.controls.visaStatusEU.loading,
    description: props.controls.visaStatusEU.error && props.controls.visaStatusEU.message,
    descriptionColor: "red",
    captionColor: props.controls.visaStatusEU.loading ? "gray-40" : props.controls.visaStatusEU.error ? "red" : "gray-90"
  })))));
};

FourthStep.defaultProps = {
  className: ""
};
FourthStep.propTypes = {
  className: _propTypes.default.string,
  onEvent: _propTypes.default.func.isRequired
};
var _default = FourthStep;
exports.default = _default;