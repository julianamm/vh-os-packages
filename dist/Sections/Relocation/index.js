"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _Base = _interopRequireDefault(require("../../Components/Cards/Base"));

var _Text = _interopRequireDefault(require("../../Components/Text"));

var _radio = _interopRequireDefault(require("../../Components/Input/radio"));

var _TitleDescription = _interopRequireDefault(require("../../Components/TitleDescription"));

var _Select = _interopRequireDefault(require("../../Components/Input/Select"));

var _checkbox = _interopRequireDefault(require("../../Components/Input/checkbox"));

var _TargetLocation = _interopRequireDefault(require("../../Components/TargetLocation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHRelocationSection = function VHRelocationSection(props) {
  var salaryRangeCadList = props.salaryRangeCadList;
  var salaryRangeEurList = props.salaryRangeEurList;
  var visaStatusCanadianList = props.visaStatusCanadianList;
  var visaStatusEUList = props.visaStatusEUList;
  var noticePeriodList = props.noticePeriodList;
  var salaryRangeCad = props.salaryRangeCad != undefined ? salaryRangeCadList[props.salaryRangeCad] : [];
  var salaryRangeEur = props.salaryRangeEur != undefined ? salaryRangeEurList[parseInt(props.salaryRangeEur)] : [];
  var visaStatusCanadian = props.visaStatusCanadian != undefined ? visaStatusCanadianList[props.visaStatusCanadian] : [];
  var visaStatusEU = props.visaStatusEU != undefined ? visaStatusEUList[props.visaStatusEU] : [];
  var noticePeriod = props.noticePeriod != undefined ? noticePeriodList[props.noticePeriod] : [];
  var companySize = props.companySize ? props.companySize : [{
    value: false
  }, {
    value: false
  }, {
    value: false
  }];
  var targetLocation = props.targetLocation ? props.targetLocation.items : [];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom: 5
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    className: "vh-general-section-title ".concat(props.className ? props.className : ''),
    text: "Relocation",
    color: "black-50",
    variant: "h2"
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_Base.default, {
    className: "vh-general-section-card ".concat(props.className ? props.className : '')
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    column: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom: 5
  }, /*#__PURE__*/_react.default.createElement(_radio.default, {
    data: 'openForRemoteJobs',
    color: "gray-100",
    variant: "subtitle3",
    onEvent: props.onEvent,
    text: 'Are you open to remote jobs?',
    checked: props.openForRemoteJobs
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom: 5
  }, /*#__PURE__*/_react.default.createElement(_TitleDescription.default, {
    className: "vh-general-section-companySize ".concat(props.className ? props.className : ''),
    descriptionColor: props.controls.companySize.loading ? "gray-40" : props.controls.companySize.error ? "red-light" : "gray-90",
    descriptionVariant: "caption",
    inline: true,
    onEvent: props.onEvent,
    title: "Where would you like to work?",
    titleColor: props.controls.companySize.loading ? "gray-40" : props.controls.companySize.error ? "red" : "gray-100",
    titleVariant: "subtitle3"
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom: 10,
    width: '600px'
  }, /*#__PURE__*/_react.default.createElement(_TargetLocation.default, {
    onEvent: props.onEvent,
    items: targetLocation
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    paddingRight8: true
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    caption: 'Annual salary expectation CAD',
    leftText: "$CAD",
    className: "vh-general-section-salaryRangeCad ".concat(props.className ? props.className : ''),
    currentItem: salaryRangeCad,
    data: "salaryRangeCad",
    items: salaryRangeCadList,
    onEvent: props.onEvent,
    isLoading: props.controls.salaryRangeCad.loading,
    description: props.controls.salaryRangeCad.error && props.controls.salaryRangeCad.message,
    descriptionColor: "red-light",
    captionColor: props.controls.salaryRangeCad.loading ? "gray-40" : props.controls.salaryRangeCad.error ? "red" : null
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_Select.default, {
    caption: 'Annual salary expectation EUR',
    className: "vh-general-section-salaryRangeEur ".concat(props.className ? props.className : ''),
    currentItem: salaryRangeEur,
    data: "salaryRangeEur",
    items: salaryRangeEurList,
    onEvent: props.onEvent,
    isLoading: props.controls.salaryRangeEur.loading,
    description: props.controls.salaryRangeEur.error && props.controls.salaryRangeEur.message,
    descriptionColor: "red-light",
    captionColor: props.controls.salaryRangeEur.loading ? "gray-40" : props.controls.salaryRangeEur.error ? "red" : null
  })))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    column: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true
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
    descriptionColor: "red-light",
    captionColor: props.controls.visaStatusCanadian.loading ? "gray-40" : props.controls.visaStatusCanadian.error ? "red" : null
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_Select.default, {
    caption: "EU Visa Status",
    className: "vh-general-section-visaStatusEU ".concat(props.className ? props.className : ''),
    currentItem: visaStatusEU,
    data: "visaStatusEU",
    items: visaStatusEUList,
    onEvent: props.onEvent,
    isLoading: props.controls.visaStatusEU.loading,
    description: props.controls.visaStatusEU.error && props.controls.visaStatusEU.message,
    descriptionColor: "red-light",
    captionColor: props.controls.visaStatusEU.loading ? "gray-40" : props.controls.visaStatusEU.error ? "red" : null
  })))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    column: true,
    marginBottom: 5
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    marginBottom: 5
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    paddingRight8: true
  }, /*#__PURE__*/_react.default.createElement(_radio.default, {
    data: 'passportValid',
    color: "gray-100",
    variant: "subtitle3",
    onEvent: props.onEvent,
    text: 'Do you have a valid passport?',
    checked: props.passportValid
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    column: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom: 5
  }, /*#__PURE__*/_react.default.createElement(_TitleDescription.default, {
    className: "vh-general-section-companySize ".concat(props.className ? props.className : ''),
    descriptionColor: props.controls.companySize.loading ? "gray-40" : props.controls.companySize.error ? "red-light" : "gray-90",
    descriptionVariant: "caption",
    inline: true,
    onEvent: props.onEvent,
    title: "What size company do you prefer?",
    titleColor: props.controls.companySize.loading ? "gray-40" : props.controls.companySize.error ? "red" : "gray-100",
    titleVariant: "subtitle3"
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true
  }, /*#__PURE__*/_react.default.createElement(_checkbox.default, {
    checked: companySize[0].value,
    className: "",
    color: props.controls.companySize.loading ? "gray-40" : props.controls.companySize.error ? "red" : 'gray-100',
    data: {
      id: 'companySize',
      label: 'yes',
      value: '1'
    },
    disabled: props.controls.companySize.loading,
    onEvent: props.onEvent,
    title: "Startup",
    value: "123",
    variant: "platform1"
  }), /*#__PURE__*/_react.default.createElement(_checkbox.default, {
    checked: companySize[1].value,
    className: "",
    color: props.controls.companySize.loading ? "gray-40" : props.controls.companySize.error ? "red" : 'gray-100',
    data: {
      id: 'companySize',
      label: 'yes',
      value: '2'
    },
    disabled: props.controls.companySize.loading,
    onEvent: props.onEvent,
    title: "Midsize",
    value: "123",
    variant: "platform1"
  }), /*#__PURE__*/_react.default.createElement(_checkbox.default, {
    checked: companySize[2].value,
    className: "",
    color: props.controls.companySize.loading ? "gray-40" : props.controls.companySize.error ? "red" : 'gray-100',
    data: {
      id: 'companySize',
      label: 'yes',
      value: '4'
    },
    disabled: props.controls.companySize.loading,
    onEvent: props.onEvent,
    title: "Corporate",
    value: "123",
    variant: "platform1"
  })))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    paddingRight8: true
  }, /*#__PURE__*/_react.default.createElement(_radio.default, {
    data: 'activelyLookingForJob',
    color: "gray-100",
    variant: "subtitle3",
    onEvent: props.onEvent,
    text: 'Are you actively looking for a job?',
    checked: props.activelyLookingForJob
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_Select.default, {
    caption: "What is your notice period?",
    className: "vh-general-section-notice-period ".concat(props.className ? props.className : ''),
    currentItem: noticePeriod,
    data: "noticePeriod",
    items: noticePeriodList,
    onEvent: props.onEvent,
    isLoading: props.controls.noticePeriod.loading,
    description: props.controls.noticePeriod.error && props.controls.noticePeriod.message,
    descriptionColor: "red-light",
    captionColor: props.controls.noticePeriod.loading ? "gray-40" : props.controls.noticePeriod.error ? "red" : null
  })))))));
};

VHRelocationSection.propTypes = {
  onEvent: _propTypes.default.func,
  title: _propTypes.default.string.isRequired,
  data: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  className: _propTypes.default.string
};
var _default = VHRelocationSection;
exports.default = _default;