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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHModalExperience = function VHModalExperience(props) {
  var item = props.modalExperience;

  var _React$useState = _react.default.useState(item.companyName.value),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      country = _React$useState2[0],
      setCompanyName = _React$useState2[1];

  return _react.default.createElement(_Modal.default, {
    width: "732",
    minWidth: "660",
    open: true,
    onClose: props.onClose,
    onEvent: props.onEvent,
    header: _react.default.createElement(_Grid.Row, {
      row: true
    }, _react.default.createElement(_TitleDescription.default, {
      title: 'Add Experience',
      description: '',
      titleVariant: "h3",
      titleColor: "black-50",
      descriptionColor: "gray-100",
      descriptionVariant: "platform",
      onEvent: props.onEvent
    })),
    content: _react.default.createElement(_Grid.Row, {
      column: true
    }, _react.default.createElement(_Grid.Row, {
      row: true,
      justifySpaceBetween: true
    }, _react.default.createElement("div", {
      style: {
        width: '40%'
      }
    }, _react.default.createElement(_index.default, {
      color: "gray-100",
      variant: 'platform',
      text: "Company Name"
    }), _react.default.createElement(_Simple.default, {
      placeholder: "",
      onEvent: props.onEvent,
      value: item.companyName.value,
      data: {
        id: "ModalExperience",
        field: "companyName"
      }
    })), _react.default.createElement("div", {
      style: {
        width: '40%'
      }
    }, _react.default.createElement(_Select.default, {
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
    }), item.countryId.messageError && _react.default.createElement(S.ErrorMessage, null, "Field required"))), _react.default.createElement(_Grid.Row, {
      row: true,
      justifySpaceBetween: true
    }, _react.default.createElement("div", {
      style: {
        width: '40%'
      }
    }, _react.default.createElement(_Select.default, {
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
    }), item.companySize.messageError && _react.default.createElement(S.ErrorMessage, null, "Field required")), _react.default.createElement("div", {
      style: {
        width: '40%'
      }
    }, _react.default.createElement(_Select.default, {
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
    }), item.industryId.messageError && _react.default.createElement(S.ErrorMessage, null, "Field required"))), item.workExperiences.map(function (experience, index) {
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Grid.Row, {
        width: '70%',
        marginBottom5: true
      }, _react.default.createElement(_Select.default, {
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
      }), experience.positionId.messageError && _react.default.createElement(S.ErrorMessage, null, "Field required")), index === item.workExperiences.length - 1 && _react.default.createElement(_Grid.Row, {
        marginBottom5: true
      }, _react.default.createElement(_checkbox.default, {
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
      })), _react.default.createElement(_Grid.Row, {
        marginBottom5: true,
        row: true,
        justifySpaceBetween: true
      }, _react.default.createElement(_Grid.Row, {
        width: '40%'
      }, _react.default.createElement(_index.default, {
        color: "gray-100",
        variant: 'platform',
        text: "Start Date"
      }), _react.default.createElement(_Simple.default, {
        placeholder: "",
        type: 'date',
        onEvent: props.onEvent,
        value: (0, _index4.getFormatedDate)(experience.startDate.value),
        data: {
          id: "ModalExperience",
          field: "startDate",
          index: index
        }
      }), experience.startDate.messageError && _react.default.createElement(S.ErrorMessage, null, "Field required")), _react.default.createElement(_Grid.Row, {
        width: '40%'
      }, _react.default.createElement(_index.default, {
        color: "gray-100",
        variant: 'platform',
        text: "End Date"
      }), _react.default.createElement(_Simple.default, {
        placeholder: "",
        type: 'date',
        onEvent: props.onEvent,
        value: (0, _index4.getFormatedDate)(experience.endDate.value),
        data: {
          id: "ModalExperience",
          field: "endDate",
          index: index
        }
      }))), _react.default.createElement(_Grid.Row, {
        marginBottom5: true
      }, _react.default.createElement(_index.default, {
        color: "gray-100",
        variant: 'platform',
        text: "Description"
      }), _react.default.createElement(_Simple.default, {
        placeholder: "",
        onEvent: props.onEvent,
        value: experience.description.value,
        data: {
          id: "ModalExperience",
          field: "description",
          index: index
        }
      }), experience.description.messageError && _react.default.createElement(S.ErrorMessage, null, "Field required")), index === item.workExperiences.length - 1 && _react.default.createElement(_Grid.Row, {
        marginBottom5: true
      }, _react.default.createElement(_index.default, {
        color: "gradient-primary",
        onEvent: props.onEvent,
        data: 'addRole',
        variant: 'platform',
        text: "+ Add other role for this company",
        cursor: true
      })));
    }), _react.default.createElement(_Grid.Row, {
      alignItemsRight: true
    }, _react.default.createElement(_index2.default, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvTW9kYWxFeHBlcmllbmNlL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJWSE1vZGFsRXhwZXJpZW5jZSIsInByb3BzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImN1cnJlbnRJdGVtIiwidmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJvbkNsb3NlIiwib25FdmVudCIsIndpZHRoIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJjb250cm9scyIsImxvY2F0aW9uIiwibG9hZGluZyIsImVycm9yIiwiY2xhc3NOYW1lIiwidHlwZSIsIml0ZW0iLCJpdGVtcyIsIm1lc3NhZ2UiLCJldmVudCIsImRhdGEiLCJpbmR1c3RyeSIsImRlc2NyaXB0aW9uIiwic2tpbGxzVXNlZCIsIndvcmtBcyIsImN1cnJlbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwic3RyaW5nYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUFDLEtBQUssRUFBSTtBQUFBLHdCQUNEQyxlQUFNQyxRQUFOLENBQWVGLEtBQUssQ0FBQ0csV0FBckIsQ0FEQztBQUFBO0FBQUEsTUFDeEJDLEtBRHdCO0FBQUEsTUFDakJDLFlBRGlCOztBQUUvQixTQUNJLDZCQUFDLGNBQUQ7QUFDSSxJQUFBLFFBQVEsRUFBQyxLQURiO0FBRUksSUFBQSxJQUFJLEVBQUUsSUFGVjtBQUdJLElBQUEsT0FBTyxFQUFFTCxLQUFLLENBQUNNLE9BSG5CO0FBSUksSUFBQSxPQUFPLEVBQUVOLEtBQUssQ0FBQ08sT0FKbkI7QUFLSSxJQUFBLE1BQU0sRUFDRiw2QkFBQyxTQUFEO0FBQUssTUFBQSxHQUFHO0FBQVIsT0FDSSw2QkFBQyx5QkFBRDtB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S0FBSyxDQUFDWSxRQUFOLENBQWVhLFVBQWYsQ0FBMEJMLE9BaEI5RTtBQWlCSSxNQUFBLGdCQUFnQixFQUFDO0FBakJyQixNQURKLENBbEdKLEVBdUhJLDZCQUFDLFNBQUQ7QUFBSyxNQUFBLGVBQWU7QUFBcEIsT0FDSSw2QkFBQyxlQUFEO0FBQVUsTUFBQSxPQUFPLE1BQWpCO0FBQWtCLE1BQUEsT0FBTyxFQUFFLGlCQUFBWCxDQUFDLEVBQUksQ0FDL0IsQ0FERDtBQUNHLE1BQUEsS0FBSyxFQUFDO0FBRFQsTUFESixDQXZISjtBQWxCUixJQURKO0FBa0pILENBcEpEOztBQXNKQVYsaUJBQWlCLENBQUM2QixZQUFsQixHQUFpQztBQUM3QnJCLEVBQUFBLE9BQU8sRUFBRSxJQURvQjtBQUU3QlMsRUFBQUEsU0FBUyxFQUFFO0FBRmtCLENBQWpDO0FBS0FqQixpQkFBaUIsQ0FBQzhCLFNBQWxCLEdBQThCO0FBQzFCdEIsRUFBQUEsT0FBTyxFQUFFdUIsbUJBQVVDLElBRE87QUFFMUJmLEVBQUFBLFNBQVMsRUFBRWMsbUJBQVVFO0FBRkssQ0FBOUI7ZUFLZWpDLGlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgUm93IH0gZnJvbSBcIi4uLy4uL0dyaWRcIjtcbmltcG9ydCBWSE1vZGFsIGZyb20gXCIuLi9Nb2RhbFwiO1xuaW1wb3J0IFZIVGl0bGVEZXNjcmlwdGlvbiBmcm9tIFwiLi4vVGl0bGVEZXNjcmlwdGlvblwiO1xuaW1wb3J0IFZIU2VsZWN0IGZyb20gXCIuLi8uLi9Db21wb25lbnRzL0lucHV0L1NlbGVjdFwiO1xuaW1wb3J0IFZISW5wdXQgZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvSW5wdXQvU2ltcGxlXCI7XG5pbXBvcnQgVkhUZXh0IGZyb20gXCIuLi8uLi9Db21wb25lbnRzL1RleHQvaW5kZXhcIjtcbmltcG9ydCBWSEJ1dHRvbiBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9CdXR0b24vaW5kZXhcIjtcbmltcG9ydCBWSElucHV0UmFkaW8gZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvSW5wdXQvcmFkaW9cIlxuaW1wb3J0IFZISW5wdXRDaGVja2JveCBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9JbnB1dC9jaGVja2JveFwiXG5pbXBvcnQgVkhUZXh0YXJlYSBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9UZXh0YXJlYS9pbmRleFwiXG5jb25zdCBWSE1vZGFsRXhwZXJpZW5jZSA9IHByb3BzID0+IHtcbiAgICBjb25zdCBbdmFsdWUsIGhhbmRsZUNoYW5nZV0gPSBSZWFjdC51c2VTdGF0ZShwcm9wcy5jdXJyZW50SXRlbSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZITW9kYWxcbiAgICAgICAgICAgIG1pbldpZHRoPVwiNzAwXCJcbiAgICAgICAgICAgIG9wZW49e3RydWV9XG4gICAgICAgICAgICBvbkNsb3NlPXtwcm9wcy5vbkNsb3NlfVxuICAgICAgICAgICAgb25FdmVudD17cHJvcHMub25FdmVudH1cbiAgICAgICAgICAgIGhlYWRlcj17XG4gICAgICAgICAgICAgICAgPFJvdyByb3c+XG4gICAgICAgICAgICAgICAgICAgIDxWSFRpdGxlRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnQWRkIEV4cGVyaWVuY2UnfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249eycnfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVWYXJpYW50PVwiaDNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVDb2xvcj1cImJsYWNrLTUwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uQ29sb3I9XCJncmF5LTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblZhcmlhbnQ9XCJwbGF0Zm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkV2ZW50PXtwcm9wcy5vbkV2ZW50fSAvPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgPFJvdyBjb2x1bW4+XG4gICAgICAgICAgICAgICAgICAgIDxSb3cgcm93IGp1c3RpZnlTcGFjZUJldHdlZW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnNDAlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VkhUZXh0IGNvbG9yPVwiZ3JheS0xMDBcIiB2YXJpYW50PXsncGxhdGZvcm0nfSB0ZXh0PVwiQ29tcGFueSBOYW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VkhJbnB1dCBwbGFjZWhvbGRlcj1cIlwiIG9uRXZlbnQ9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICc0MCUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWSFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0aW9uPVwiTG9jYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0aW9uQ29sb3I9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuY29udHJvbHMubG9jYXRpb24ubG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJncmF5LTQwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHByb3BzLmNvbnRyb2xzLmxvY2F0aW9uLmVycm9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B2aC1nZW5lcmFsLXNlY3Rpb24tbG9jYXRpb24gJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJ31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SXRlbT17cHJvcHMuY3VycmVudEl0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9XCJsb2NhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRXZlbnQ9e2UgPT4geyBpZiAoZS50eXBlID09PSAnT25DaGFuZ2UnKSB7IGhhbmRsZUNoYW5nZShlLnByb3BzLml0ZW0pIH0gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e3Byb3BzLml0ZW1zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmc9e3Byb3BzLmNvbnRyb2xzLmxvY2F0aW9uLmxvYWRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9wcy5jb250cm9scy5sb2NhdGlvbi5lcnJvciAmJiBwcm9wcy5jb250cm9scy5sb2NhdGlvbi5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkNvbG9yPVwicmVkLWxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICA8Um93IHJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWSElucHV0UmFkaW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImdyYXktMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwicGxhdGZvcm0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkV2ZW50PXsoZXZlbnQpID0+IGNvbnNvbGUubG9nKGV2ZW50KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtwcm9wcy5kYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICc2NiUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWSFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0aW9uPVwiSW5kdXN0cnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0aW9uQ29sb3I9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuY29udHJvbHMuaW5kdXN0cnkubG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJncmF5LTQwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHByb3BzLmNvbnRyb2xzLmluZHVzdHJ5LmVycm9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B2aC1nZW5lcmFsLXNlY3Rpb24taW5kdXN0cnkgJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJ31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SXRlbT17cHJvcHMuY3VycmVudEl0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9XCJpbmR1c3RyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRXZlbnQ9e2UgPT4geyBpZiAoZS50eXBlID09PSAnT25DaGFuZ2UnKSB7IGhhbmRsZUNoYW5nZShlLnByb3BzLml0ZW0pIH0gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e3Byb3BzLml0ZW1zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmc9e3Byb3BzLmNvbnRyb2xzLmluZHVzdHJ5LmxvYWRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9wcy5jb250cm9scy5pbmR1c3RyeS5lcnJvciAmJiBwcm9wcy5jb250cm9scy5pbmR1c3RyeS5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkNvbG9yPVwicmVkLWxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICA8Um93IG1hcmdpbkJvdHRvbTU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VkhUZXh0IGNvbG9yPVwiZ3JheS0xMDBcIiB2YXJpYW50PXsncGxhdGZvcm0nfSB0ZXh0PVwiUm9sZSBUaXRsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VkhJbnB1dCBwbGFjZWhvbGRlcj1cIlwiIG9uRXZlbnQ9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICA8Um93IG1hcmdpbkJvdHRvbTU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VkhJbnB1dENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydJIGFtIGN1cnJlbnRseSB3b3JraW5nIGluIHRoaXMgcm9sZSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJncmF5LTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInBsYXRmb3JtMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17Jyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eycnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2Akeyd3b3JraW5nLXJvbGUnfS1pbnB1dC1jaGVja2JveGB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2Akeyd3b3JraW5nLXJvbGUnfS12aC1pbnB1dC1jaGVja2JveGB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FdmVudD17cHJvcHMub25FdmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICA8Um93IG1hcmdpbkJvdHRvbTUgcm93IGp1c3RpZnlTcGFjZUJldHdlZW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93IHdpZHRoPXsnNDAlJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZIVGV4dCBjb2xvcj1cImdyYXktMTAwXCIgdmFyaWFudD17J3BsYXRmb3JtJ30gdGV4dD1cIlN0YXJ0IERhdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWSElucHV0IHBsYWNlaG9sZGVyPVwiXCIgb25FdmVudD17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyB3aWR0aD17JzQwJSd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWSFRleHQgY29sb3I9XCJncmF5LTEwMFwiIHZhcmlhbnQ9eydwbGF0Zm9ybSd9IHRleHQ9XCJFbmQgRGF0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZISW5wdXQgcGxhY2Vob2xkZXI9XCJcIiBvbkV2ZW50PXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICA8Um93IG1hcmdpbkJvdHRvbTU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VkhUZXh0IGNvbG9yPVwiZ3JheS0xMDBcIiB2YXJpYW50PXsncGxhdGZvcm0nfSB0ZXh0PVwiRGVzY3JpcHRpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZIVGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Byb3BzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICBvbkV2ZW50PXtwcm9wcy5vbkV2ZW50fVxuICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdyBtYXJnaW5Cb3R0b201PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZIU2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdGlvbj1cIlNraWxscyB1c2VkIG9uIHRoaXMgcG9zaXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTXVsdGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0aW9uQ29sb3I9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5jb250cm9scy5za2lsbHNVc2VkLmxvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJncmF5LTQwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcHJvcHMuY29udHJvbHMuc2tpbGxzVXNlZC5lcnJvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B2aC1za2lsbHNVc2VkLXNlY3Rpb24tc2tpbGxzVXNlZCAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEl0ZW09e3Byb3BzLndvcmtBcy5jdXJyZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9XCJza2lsbHNVc2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkV2ZW50PXtwcm9wcy5vbkV2ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtwcm9wcy53b3JrQXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nPXtwcm9wcy5jb250cm9scy5za2lsbHNVc2VkLmxvYWRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Byb3BzLmNvbnRyb2xzLnNraWxsc1VzZWQuZXJyb3IgJiYgcHJvcHMuY29udHJvbHMuc2tpbGxzVXNlZC5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uQ29sb3I9XCJyZWQtbGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDxSb3cgYWxpZ25JdGVtc1JpZ2h0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZIQnV0dG9uIHByaW1hcnkgb25FdmVudD17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fSBsYWJlbD1cIlNhdmVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIH0+XG4gICAgICAgIDwvVkhNb2RhbD5cbiAgICApXG59XG5cblZITW9kYWxFeHBlcmllbmNlLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBvbkV2ZW50OiBudWxsLFxuICAgIGNsYXNzTmFtZTogXCJcIlxufTtcblxuVkhNb2RhbEV4cGVyaWVuY2UucHJvcFR5cGVzID0ge1xuICAgIG9uRXZlbnQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ2Ncbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZITW9kYWxFeHBlcmllbmNlOyJdfQ==