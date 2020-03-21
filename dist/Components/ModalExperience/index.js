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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHModalExperience = function VHModalExperience(props) {
  var item = props.modalExperience;

  var _React$useState = _react.default.useState(item.companyName.value),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      country = _React$useState2[0],
      setCompanyName = _React$useState2[1];

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
        label: item.country
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
        label: item.companySizeStr
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
        label: item.industry
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
          label: experience.position
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
      data: 'saveExperience',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvTW9kYWxFeHBlcmllbmNlL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJWSE1vZGFsRXhwZXJpZW5jZSIsInByb3BzIiwiaXRlbSIsIm1vZGFsRXhwZXJpZW5jZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJjb21wYW55TmFtZSIsInZhbHVlIiwiY291bnRyeSIsInNldENvbXBhbnlOYW1lIiwib25DbG9zZSIsIm9uRXZlbnQiLCJ3aWR0aCIsImlkIiwiZmllbGQiLCJjbGFzc05hbWUiLCJjb3VudHJ5SWQiLCJsYWJlbCIsImNvdW50cmllcyIsIm1lc3NhZ2VFcnJvciIsImNvbXBhbnlTaXplIiwiY29tcGFueVNpemVTdHIiLCJjb21wYW55TGlzdCIsImluZHVzdHJ5SWQiLCJpbmR1c3RyeSIsImluZHVzdHJ5TGlzdCIsIndvcmtFeHBlcmllbmNlcyIsIm1hcCIsImV4cGVyaWVuY2UiLCJpbmRleCIsInBvc2l0aW9uSWQiLCJwb3NpdGlvbiIsInBvc2l0aW9ucyIsImxlbmd0aCIsImNoZWNrZWQiLCJpc0N1cnJlbnRSb2xlIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImRlc2NyaXB0aW9uIiwiY2xvc2VNb2RhbCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJzdHJpbmdjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUFDLEtBQUssRUFBSTtBQUUvQixNQUFNQyxJQUFJLEdBQUdELEtBQUssQ0FBQ0UsZUFBbkI7O0FBRitCLHdCQUdHQyxlQUFNQyxRQUFOLENBQWVILElBQUksQ0FBQ0ksV0FBTCxDQUFpQkMsS0FBaEMsQ0FISDtB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QjtBQUMxQjlCLEVBQUFBLE9BQU8sRUFBRStCLG1CQUFVQyxJQURPO0FBRTFCNUIsRUFBQUEsU0FBUyxFQUFFMkIsbUJBQVVFO0FBRkssQ0FBOUI7ZUFLZTVDLGlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgUm93IH0gZnJvbSBcIi4uLy4uL0dyaWRcIjtcbmltcG9ydCBWSE1vZGFsIGZyb20gXCIuLi9Nb2RhbFwiO1xuaW1wb3J0IFZIVGl0bGVEZXNjcmlwdGlvbiBmcm9tIFwiLi4vVGl0bGVEZXNjcmlwdGlvblwiO1xuaW1wb3J0IFZIU2VsZWN0IGZyb20gXCIuLi8uLi9Db21wb25lbnRzL0lucHV0L1NlbGVjdFwiO1xuaW1wb3J0IFZISW5wdXQgZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvSW5wdXQvU2ltcGxlXCI7XG5pbXBvcnQgVkhUZXh0IGZyb20gXCIuLi8uLi9Db21wb25lbnRzL1RleHQvaW5kZXhcIjtcbmltcG9ydCBWSEJ1dHRvbiBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9CdXR0b24vaW5kZXhcIjtcbmltcG9ydCBWSElucHV0UmFkaW8gZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvSW5wdXQvcmFkaW9cIlxuaW1wb3J0IFZISW5wdXRDaGVja2JveCBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9JbnB1dC9jaGVja2JveFwiXG5pbXBvcnQgVkhUZXh0YXJlYSBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9UZXh0YXJlYS9pbmRleFwiXG5pbXBvcnQgeyBnZXRGb3JtYXRlZERhdGUgfSBmcm9tICcuLi8uLi91dGlsL2luZGV4J1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL3N0eWxlcy5qcydcblxuY29uc3QgVkhNb2RhbEV4cGVyaWVuY2UgPSBwcm9wcyA9PiB7XG5cbiAgICBjb25zdCBpdGVtID0gcHJvcHMubW9kYWxFeHBlcmllbmNlO1xuICAgIGNvbnN0IFtjb3VudHJ5LCBzZXRDb21wYW55TmFtZV0gPSBSZWFjdC51c2VTdGF0ZShpdGVtLmNvbXBhbnlOYW1lLnZhbHVlKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8VkhNb2RhbFxuICAgICAgICAgICAgd2lkdGg9XCI3MzJcIlxuICAgICAgICAgICAgbWluV2lkdGg9XCI2NjBcIlxuICAgICAgICAgICAgb3Blbj17dHJ1ZX1cbiAgICAgICAgICAgIG9uQ2xvc2U9e3Byb3BzLm9uQ2xvc2V9XG4gICAgICAgICAgICBvbkV2ZW50PXtwcm9wcy5vbkV2ZW50fVxuICAgICAgICAgICAgaGVhZGVyPXtcbiAgICAgICAgICAgICAgICA8Um93IHJvdz5cbiAgICAgICAgICAgICAgICAgICAgPFZIVGl0bGVEZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydBZGQgRXhwZXJpZW5jZSd9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17Jyd9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZVZhcmlhbnQ9XCJoM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUNvbG9yPVwiYmxhY2stNTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25Db2xvcj1cImdyYXktMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uVmFyaWFudD1cInBsYXRmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRXZlbnQ9e3Byb3BzLm9uRXZlbnR9IC8+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICA8Um93IGNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgPFJvdyByb3cganVzdGlmeVNwYWNlQmV0d2Vlbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICc0MCUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWSFRleHQgY29sb3I9XCJncmF5LTEwMFwiIHZhcmlhbnQ9eydwbGF0Zm9ybSd9IHRleHQ9XCJDb21wYW55IE5hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWSElucHV0IHBsYWNlaG9sZGVyPVwiXCIgb25FdmVudD17cHJvcHMub25FdmVudH0gdmFsdWU9e2l0ZW0uY29tcGFueU5hbWUudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3sgaWQ6IFwiTW9kYWxFeHBlcmllbmNlXCIsIGZpZWxkOiBcImNvbXBhbnlOYW1lXCIgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzQwJScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZIU2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHRpb249XCJMb2NhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHRpb25Db2xvcj17bnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHZoLWdlbmVyYWwtc2VjdGlvbi1sb2NhdGlvbiAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtPXt7IHZhbHVlOiBpdGVtLmNvdW50cnlJZC52YWx1ZSwgbGFiZWw6IGl0ZW0uY291bnRyeSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXt7IGlkOiBcIk1vZGFsRXhwZXJpZW5jZVwiLCBmaWVsZDogXCJjb3VudHJ5SWRcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkV2ZW50PXtwcm9wcy5vbkV2ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17cHJvcHMuY291bnRyaWVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkNvbG9yPVwicmVkLWxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmNvdW50cnlJZC5tZXNzYWdlRXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Uy5FcnJvck1lc3NhZ2U+RmllbGQgcmVxdWlyZWQ8L1MuRXJyb3JNZXNzYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDxSb3cgcm93IGp1c3RpZnlTcGFjZUJldHdlZW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnNDAlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VkhTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdGlvbj1cIkNvbXBhbnkgU2l6ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHRpb25Db2xvcj17bnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHZoLWdlbmVyYWwtc2VjdGlvbi1jb21wYW55LXNpemUgJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJ31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SXRlbT17eyB2YWx1ZTogaXRlbS5jb21wYW55U2l6ZS52YWx1ZSwgbGFiZWw6IGl0ZW0uY29tcGFueVNpemVTdHIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17eyBpZDogXCJNb2RhbEV4cGVyaWVuY2VcIiwgZmllbGQ6IFwiY29tcGFueVNpemVcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkV2ZW50PXtwcm9wcy5vbkV2ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17cHJvcHMuY29tcGFueUxpc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uQ29sb3I9XCJyZWQtbGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uY29tcGFueVNpemUubWVzc2FnZUVycm9yICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFMuRXJyb3JNZXNzYWdlPkZpZWxkIHJlcXVpcmVkPC9TLkVycm9yTWVzc2FnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnNDAlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VkhTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdGlvbj1cIkluZHVzdHJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdGlvbkNvbG9yPXtudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdmgtZ2VuZXJhbC1zZWN0aW9uLWluZHVzdHJ5ICR7cHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEl0ZW09e3sgdmFsdWU6IGl0ZW0uaW5kdXN0cnlJZC52YWx1ZSwgbGFiZWw6IGl0ZW0uaW5kdXN0cnkgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17eyBpZDogXCJNb2RhbEV4cGVyaWVuY2VcIiwgZmllbGQ6IFwiaW5kdXN0cnlJZFwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRXZlbnQ9e3Byb3BzLm9uRXZlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtwcm9wcy5pbmR1c3RyeUxpc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uQ29sb3I9XCJyZWQtbGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uaW5kdXN0cnlJZC5tZXNzYWdlRXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Uy5FcnJvck1lc3NhZ2U+RmllbGQgcmVxdWlyZWQ8L1MuRXJyb3JNZXNzYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLndvcmtFeHBlcmllbmNlcy5tYXAoKGV4cGVyaWVuY2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyB3aWR0aD17JzcwJSd9IG1hcmdpbkJvdHRvbTU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VkhTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0aW9uPVwiUm9sZSBUaXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdGlvbkNvbG9yPXtudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHZoLWdlbmVyYWwtc2VjdGlvbi1wb3NpdGlvbiAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEl0ZW09e3sgdmFsdWU6IGV4cGVyaWVuY2UucG9zaXRpb25JZC52YWx1ZSwgbGFiZWw6IGV4cGVyaWVuY2UucG9zaXRpb24gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXt7IGlkOiBcIk1vZGFsRXhwZXJpZW5jZVwiLCBmaWVsZDogXCJwb3NpdGlvbklkXCIsIGluZGV4OiBpbmRleCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRXZlbnQ9e3Byb3BzLm9uRXZlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e3Byb3BzLnBvc2l0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkNvbG9yPVwicmVkLWxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXhwZXJpZW5jZS5wb3NpdGlvbklkLm1lc3NhZ2VFcnJvciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFMuRXJyb3JNZXNzYWdlPkZpZWxkIHJlcXVpcmVkPC9TLkVycm9yTWVzc2FnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggPT09IGl0ZW0ud29ya0V4cGVyaWVuY2VzLmxlbmd0aCAtIDEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgbWFyZ2luQm90dG9tNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VkhJbnB1dENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnSSBhbSBjdXJyZW50bHkgd29ya2luZyBpbiB0aGlzIHJvbGUnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImdyYXktMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInBsYXRmb3JtMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGV4cGVyaWVuY2UuaXNDdXJyZW50Um9sZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnaXNDdXJyZW50Um9sZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZXhwZXJpZW5jZS5pc0N1cnJlbnRSb2xlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Jyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2Akeyd3b3JraW5nLXJvbGUnfS1pbnB1dC1jaGVja2JveGB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgJHsnd29ya2luZy1yb2xlJ30tdmgtaW5wdXQtY2hlY2tib3hgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkV2ZW50PXtwcm9wcy5vbkV2ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93IG1hcmdpbkJvdHRvbTUgcm93IGp1c3RpZnlTcGFjZUJldHdlZW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93IHdpZHRoPXsnNDAlJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZIVGV4dCBjb2xvcj1cImdyYXktMTAwXCIgdmFyaWFudD17J3BsYXRmb3JtJ30gdGV4dD1cIlN0YXJ0IERhdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWSElucHV0IHBsYWNlaG9sZGVyPVwiXCIgdHlwZT17J2RhdGUnfSBvbkV2ZW50PXtwcm9wcy5vbkV2ZW50fSB2YWx1ZT17Z2V0Rm9ybWF0ZWREYXRlKGV4cGVyaWVuY2Uuc3RhcnREYXRlLnZhbHVlKX0gZGF0YT17eyBpZDogXCJNb2RhbEV4cGVyaWVuY2VcIiwgZmllbGQ6IFwic3RhcnREYXRlXCIsIGluZGV4OiBpbmRleCB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtleHBlcmllbmNlLnN0YXJ0RGF0ZS5tZXNzYWdlRXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Uy5FcnJvck1lc3NhZ2U+RmllbGQgcmVxdWlyZWQ8L1MuRXJyb3JNZXNzYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgd2lkdGg9eyc0MCUnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VkhUZXh0IGNvbG9yPVwiZ3JheS0xMDBcIiB2YXJpYW50PXsncGxhdGZvcm0nfSB0ZXh0PVwiRW5kIERhdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWSElucHV0IHBsYWNlaG9sZGVyPVwiXCIgdHlwZT17J2RhdGUnfSBvbkV2ZW50PXtwcm9wcy5vbkV2ZW50fSB2YWx1ZT17Z2V0Rm9ybWF0ZWREYXRlKGV4cGVyaWVuY2UuZW5kRGF0ZS52YWx1ZSl9IGRhdGE9e3sgaWQ6IFwiTW9kYWxFeHBlcmllbmNlXCIsIGZpZWxkOiBcImVuZERhdGVcIiwgaW5kZXg6IGluZGV4IH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgbWFyZ2luQm90dG9tNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWSFRleHQgY29sb3I9XCJncmF5LTEwMFwiIHZhcmlhbnQ9eydwbGF0Zm9ybSd9IHRleHQ9XCJEZXNjcmlwdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VkhJbnB1dCBwbGFjZWhvbGRlcj1cIlwiIG9uRXZlbnQ9e3Byb3BzLm9uRXZlbnR9IHZhbHVlPXtleHBlcmllbmNlLmRlc2NyaXB0aW9uLnZhbHVlfSBkYXRhPXt7IGlkOiBcIk1vZGFsRXhwZXJpZW5jZVwiLCBmaWVsZDogXCJkZXNjcmlwdGlvblwiLCBpbmRleDogaW5kZXggfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXhwZXJpZW5jZS5kZXNjcmlwdGlvbi5tZXNzYWdlRXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTLkVycm9yTWVzc2FnZT5GaWVsZCByZXF1aXJlZDwvUy5FcnJvck1lc3NhZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4ID09PSBpdGVtLndvcmtFeHBlcmllbmNlcy5sZW5ndGggLSAxICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93IG1hcmdpbkJvdHRvbTU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZIVGV4dCBjb2xvcj1cImdyYWRpZW50LXByaW1hcnlcIiBvbkV2ZW50PXtwcm9wcy5vbkV2ZW50fSBkYXRhPXsnYWRkUm9sZSd9IHZhcmlhbnQ9eydwbGF0Zm9ybSd9IHRleHQ9XCIrIEFkZCBvdGhlciByb2xlIGZvciB0aGlzIGNvbXBhbnlcIiBjdXJzb3IgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDxSb3cgYWxpZ25JdGVtc1JpZ2h0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZIQnV0dG9uIHByaW1hcnkgZGF0YT17J3NhdmVFeHBlcmllbmNlJ30gb25FdmVudD17cHJvcHMub25FdmVudH0gb25DbG9zZT17cHJvcHMub25DbG9zZX0gY2xvc2VNb2RhbD17cHJvcHMuY2xvc2VNb2RhbH0gbGFiZWw9XCJTYXZlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICB9PlxuICAgICAgICA8L1ZITW9kYWw+XG4gICAgKVxufVxuXG5WSE1vZGFsRXhwZXJpZW5jZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgb25FdmVudDogbnVsbCxcbiAgICBjbGFzc05hbWU6IFwiXCJcbn07XG5cblZITW9kYWxFeHBlcmllbmNlLnByb3BUeXBlcyA9IHtcbiAgICBvbkV2ZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdjXG59O1xuXG5leHBvcnQgZGVmYXVsdCBWSE1vZGFsRXhwZXJpZW5jZTsiXX0=