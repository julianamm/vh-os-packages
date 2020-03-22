"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _Modal = _interopRequireDefault(require("../Modal"));

var _TitleDescription = _interopRequireDefault(require("../TitleDescription"));

var _Select = _interopRequireDefault(require("../../Components/Input/Select"));

var _Simple = _interopRequireDefault(require("../../Components/Input/Simple"));

var _index = _interopRequireDefault(require("../../Components/Text/index"));

var _index2 = _interopRequireDefault(require("../../Components/Button/index"));

var _radio = _interopRequireDefault(require("../../Components/Input/radio"));

var _checkbox = _interopRequireDefault(require("../../Components/Input/checkbox"));

var _index3 = _interopRequireDefault(require("../../Components/Textarea/index"));

var _index4 = require("../../util/index");

var S = _interopRequireWildcard(require("./styles.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHModalExperience = function VHModalExperience(props) {
  var item = props.modalExperience;
  var currentItem = props.currentItem ? props.currentItem : {};
  return /*#__PURE__*/_react.default.createElement(_Modal.default, {
    width: "732",
    minWidth: "660",
    open: true,
    onClose: props.onClose,
    onEvent: props.onEvent,
    header: /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      row: true
    }, /*#__PURE__*/_react.default.createElement(_TitleDescription.default, {
      title: 'Add Experience',
      description: '',
      titleVariant: "h3",
      titleColor: "black-50",
      descriptionColor: "gray-100",
      descriptionVariant: "platform",
      onEvent: props.onEvent
    })),
    content: /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      column: true
    }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      row: true,
      justifySpaceBetween: true
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        width: '40%'
      }
    }, /*#__PURE__*/_react.default.createElement(_index.default, {
      color: "gray-100",
      variant: 'platform',
      text: "Company Name"
    }), /*#__PURE__*/_react.default.createElement(_Simple.default, {
      placeholder: "",
      onEvent: props.onEvent,
      value: item.companyName.value,
      data: {
        id: "ModalExperience",
        field: "companyName"
      }
    })), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        width: '40%'
      }
    }, /*#__PURE__*/_react.default.createElement(_Select.default, {
      caption: "Location",
      captionColor: null,
      className: "vh-general-section-location ".concat(props.className ? props.className : ''),
      currentItem: {
        value: item.countryId.value,
        label: currentItem.country
      },
      data: {
        id: "ModalExperience",
        field: "countryId"
      },
      onEvent: props.onEvent,
      items: props.countries,
      descriptionColor: "red-light"
    }), item.countryId.messageError && /*#__PURE__*/_react.default.createElement(S.ErrorMessage, null, "Field required"))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      row: true,
      justifySpaceBetween: true
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        width: '40%'
      }
    }, /*#__PURE__*/_react.default.createElement(_Select.default, {
      caption: "Company Size",
      captionColor: null,
      className: "vh-general-section-company-size ".concat(props.className ? props.className : ''),
      currentItem: {
        value: item.companySize.value,
        label: currentItem.companySizeStr
      },
      data: {
        id: "ModalExperience",
        field: "companySize"
      },
      onEvent: props.onEvent,
      items: props.companyList,
      descriptionColor: "red-light"
    }), item.companySize.messageError && /*#__PURE__*/_react.default.createElement(S.ErrorMessage, null, "Field required")), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        width: '40%'
      }
    }, /*#__PURE__*/_react.default.createElement(_Select.default, {
      caption: "Industry",
      captionColor: null,
      className: "vh-general-section-industry ".concat(props.className ? props.className : ''),
      currentItem: {
        value: item.industryId.value,
        label: item.industryId.value ? props.industryList[item.industryId.value].label : ''
      },
      data: {
        id: "ModalExperience",
        field: "industryId"
      },
      onEvent: props.onEvent,
      items: props.industryList,
      descriptionColor: "red-light"
    }), item.industryId.messageError && /*#__PURE__*/_react.default.createElement(S.ErrorMessage, null, "Field required"))), item.workExperiences.map(function (experience, index) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
        width: '70%',
        marginBottom5: true
      }, /*#__PURE__*/_react.default.createElement(_Select.default, {
        caption: "Role Title",
        captionColor: null,
        className: "vh-general-section-position ".concat(props.className ? props.className : ''),
        currentItem: {
          value: experience.positionId.value,
          label: experience.positionId.value ? props.positions[experience.positionId.value].label : ''
        },
        data: {
          id: "ModalExperience",
          field: "positionId",
          index: index
        },
        onEvent: props.onEvent,
        items: props.positions,
        descriptionColor: "red-light"
      }), experience.positionId.messageError && /*#__PURE__*/_react.default.createElement(S.ErrorMessage, null, "Field required")), index === item.workExperiences.length - 1 && /*#__PURE__*/_react.default.createElement(_Grid.Row, {
        marginBottom5: true
      }, /*#__PURE__*/_react.default.createElement(_checkbox.default, {
        title: 'I am currently working in this role',
        color: "gray-100",
        variant: "platform1",
        data: {
          checked: experience.isCurrentRole,
          id: 'isCurrentRole',
          index: index
        },
        checked: experience.isCurrentRole,
        value: '',
        name: 'working-role'.concat("-input-checkbox"),
        id: 'working-role'.concat("-vh-input-checkbox"),
        onEvent: props.onEvent
      })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
        marginBottom5: true,
        row: true,
        justifySpaceBetween: true
      }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
        width: '40%'
      }, /*#__PURE__*/_react.default.createElement(_index.default, {
        color: "gray-100",
        variant: 'platform',
        text: "Start Date"
      }), /*#__PURE__*/_react.default.createElement(_Simple.default, {
        placeholder: "",
        type: 'date',
        onEvent: props.onEvent,
        value: (0, _index4.getFormatedDate)(experience.startDate.value),
        data: {
          id: "ModalExperience",
          field: "startDate",
          index: index
        }
      }), experience.startDate.messageError && /*#__PURE__*/_react.default.createElement(S.ErrorMessage, null, "Field required")), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
        width: '40%'
      }, /*#__PURE__*/_react.default.createElement(_index.default, {
        color: "gray-100",
        variant: 'platform',
        text: "End Date"
      }), /*#__PURE__*/_react.default.createElement(_Simple.default, {
        placeholder: "",
        type: 'date',
        onEvent: props.onEvent,
        value: (0, _index4.getFormatedDate)(experience.endDate.value),
        data: {
          id: "ModalExperience",
          field: "endDate",
          index: index
        }
      }))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
        marginBottom5: true
      }, /*#__PURE__*/_react.default.createElement(_index.default, {
        color: "gray-100",
        variant: 'platform',
        text: "Description"
      }), /*#__PURE__*/_react.default.createElement(_Simple.default, {
        placeholder: "",
        onEvent: props.onEvent,
        value: experience.description.value,
        data: {
          id: "ModalExperience",
          field: "description",
          index: index
        }
      }), experience.description.messageError && /*#__PURE__*/_react.default.createElement(S.ErrorMessage, null, "Field required")), index === item.workExperiences.length - 1 && /*#__PURE__*/_react.default.createElement(_Grid.Row, {
        marginBottom5: true
      }, /*#__PURE__*/_react.default.createElement(_index.default, {
        color: "gradient-primary",
        onEvent: props.onEvent,
        data: 'addRole',
        variant: 'platform',
        text: "+ Add other role for this company",
        cursor: true
      })));
    }), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      alignItemsRight: true
    }, /*#__PURE__*/_react.default.createElement(_index2.default, {
      primary: true,
      data: {
        action: 'saveExperience',
        id: currentItem.id
      },
      onEvent: props.onEvent,
      onClose: props.onClose,
      closeModal: props.closeModal,
      label: "Save"
    })))
  });
};

VHModalExperience.defaultProps = {
  onEvent: null,
  className: ""
};
VHModalExperience.propTypes = {
  onEvent: _propTypes.default.func,
  className: _propTypes.default.stringc
};
var _default = VHModalExperience;
exports.default = _default;