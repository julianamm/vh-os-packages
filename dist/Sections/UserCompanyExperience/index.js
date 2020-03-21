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

var _Button = _interopRequireDefault(require("../../Components/Button"));

var _UserCompanyPositonExperience = _interopRequireDefault(require("../../Components/UserCompanyPositonExperience"));

var _ModalExperience = _interopRequireDefault(require("../../Components/ModalExperience"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHUserCompanyExperienceSection = function VHUserCompanyExperienceSection(props) {
  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      openModal = _React$useState2[0],
      setOpenModal = _React$useState2[1];

  var _React$useState3 = _react.default.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      newExperience = _React$useState4[0],
      _setNewExperience = _React$useState4[1];

  var experience = props.experience.experiences ? props.experience.experiences : [];

  var _React$useState5 = _react.default.useState({}),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      currentItem = _React$useState6[0],
      setCurrentItem = _React$useState6[1];

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, openModal && /*#__PURE__*/_react.default.createElement(_ModalExperience.default, {
    openModal: openModal,
    onClose: function onClose() {
      return setOpenModal(false);
    },
    modalExperience: props.modalExperience,
    currentItem: currentItem,
    controls: props.controls,
    onEvent: props.onEvent,
    newExperience: newExperience,
    countries: props.countries,
    companyList: props.companyList,
    industryList: props.industryList,
    positions: props.positions
  }), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom: 5
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    className: "vh-skills-section-title ".concat(props.className ? props.className : ''),
    text: "Experience ".concat(props.yearsOfExperience),
    color: "black-50",
    variant: "h2"
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_Base.default, {
    className: "vh-skills-section-card ".concat(props.className ? props.className : '')
  }, experience.map(function (userPosition) {
    return /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      marginBottom: 10
    }, /*#__PURE__*/_react.default.createElement(_UserCompanyPositonExperience.default, {
      item: userPosition,
      companyList: props.companyList,
      industryList: props.industryList,
      onOpen: function onOpen() {
        setOpenModal(true);
      },
      onEvent: props.onEvent
    }));
  }), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    paddingRight8: true,
    autoWidth: true
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    nowrap: true,
    primary: true,
    onEvent: props.onEvent,
    data: "AddExperience",
    label: "Add Experience",
    closeModal: props.closeModal,
    onOpen: function onOpen() {
      setOpenModal(true);
    },
    setNewExperience: function setNewExperience() {
      _setNewExperience(true);
    }
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    outline: true,
    primary: true,
    onEvent: props.onEvent,
    data: "RequestProfileReview",
    label: "Request Profile Review"
  }))))));
};

VHUserCompanyExperienceSection.propTypes = {
  onEvent: _propTypes.default.func,
  title: _propTypes.default.string.isRequired,
  data: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  className: _propTypes.default.string
};
var _default = VHUserCompanyExperienceSection;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL1NlY3Rpb25zL1VzZXJDb21wYW55RXhwZXJpZW5jZS9pbmRleC5qc3giXSwibmFtZXMiOlsiVkhVc2VyQ29tcGFueUV4cGVyaWVuY2VTZWN0aW9uIiwicHJvcHMiLCJSZWFjdCIsInVzZVN0YXRlIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwibmV3RXhwZXJpZW5jZSIsInNldE5ld0V4cGVyaWVuY2UiLCJleHBlcmllbmNlIiwiZXhwZXJpZW5jZXMiLCJjdXJyZW50SXRlbSIsInNldEN1cnJlbnRJdGVtIiwibW9kYWxFeHBlcmllbmNlIiwiY29udHJvbHMiLCJvbkV2ZW50IiwiY291bnRyaWVzIiwiY29tcGFueUxpc3QiLCJpbmR1c3RyeUxpc3QiLCJwb3NpdGlvbnMiLCJjbGFzc05hbWUiLCJ5ZWFyc09mRXhwZXJpZW5jZSIsIm1hcCIsInVzZXJQb3NpdGlvbiIsImNsb3NlTW9kYWwiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwidGl0bGUiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiZGF0YSIsIm9uZU9mVHlwZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBTUEsOEJBQThCLEdBQUcsU0FBakNBLDhCQUFpQyxDQUFBQyxLQUFLLEVBQUk7QUFBQSx3QkFDWkMsZUFBTUMsUUFBTixDQUFlLEtBQWYsQ0FEWTtBQUFBO0FBQUEsTUFDdkNDLFNBRHVDO0FBQUEsTUFDNUJDLFlBRDRCOztBQUFBLHlCQUVKSCxlQUFNQyxRQUFOLENBQWUsS0FBZixDQUZJO0FBQUE7QUFBQSxNQUV2Q0csYUFGdUM7QUFBQSxNQUV4QkMsaUJBRndCOztBQUc5QyxNQUFNQyxVQUFVLEdBQUdQLEtBQUssQ0FBQ08sVUFBTixDQUFpQkMsV0FBakIsR0FBK0JSLEtBQUssQ0FBQ08sVUFBTixDQUFpQkMs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QU8sTUFGVDtBQUdFLElBQUEsT0FBTyxFQUFFTixLQUFLLENBQUNhLE9BSGpCO0FBSUUsSUFBQSxJQUFJLEVBQUUsc0JBSlI7QUFLRSxJQUFBLEtBQUssRUFBQztBQUxSLElBREYsQ0FiRixDQWxCRixDQURGLENBckJGLENBREY7QUFvRUQsQ0F6RUQ7O0FBMkVBZCw4QkFBOEIsQ0FBQ3dCLFNBQS9CLEdBQTJDO0FBQ3pDVixFQUFBQSxPQUFPLEVBQUVXLG1CQUFVQyxJQURzQjtBQUV6Q0MsRUFBQUEsS0FBSyxFQUFFRixtQkFBVUcsTUFBVixDQUFpQkMsVUFGaUI7QUFHekNDLEVBQUFBLElBQUksRUFBRUwsbUJBQVVNLFNBQVYsQ0FBb0IsQ0FBQ04sbUJBQVVHLE1BQVgsRUFBbUJILG1CQUFVTyxNQUE3QixDQUFwQixDQUhtQztBQUl6Q2IsRUFBQUEsU0FBUyxFQUFFTSxtQkFBVUc7QUFKb0IsQ0FBM0M7ZUFPZTVCLDhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBSb3cgfSBmcm9tIFwiLi4vLi4vR3JpZFwiO1xuaW1wb3J0IFZIQ2FyZEJhc2UgZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvQ2FyZHMvQmFzZVwiO1xuaW1wb3J0IFZIVGV4dCBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9UZXh0XCI7XG5pbXBvcnQgVkhCdXR0b24gZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvQnV0dG9uXCI7XG5pbXBvcnQgVkhVc2VyQ29tcGFueVBvc2l0aW9uRXhwZXJpZW5jZSBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9Vc2VyQ29tcGFueVBvc2l0b25FeHBlcmllbmNlXCI7XG5pbXBvcnQgVkhNb2RhbEV4cGVyaWVuY2UgZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9Nb2RhbEV4cGVyaWVuY2UnXG5cblxuY29uc3QgVkhVc2VyQ29tcGFueUV4cGVyaWVuY2VTZWN0aW9uID0gcHJvcHMgPT4ge1xuICBjb25zdCBbb3Blbk1vZGFsLCBzZXRPcGVuTW9kYWxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbmV3RXhwZXJpZW5jZSwgc2V0TmV3RXhwZXJpZW5jZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGV4cGVyaWVuY2UgPSBwcm9wcy5leHBlcmllbmNlLmV4cGVyaWVuY2VzID8gcHJvcHMuZXhwZXJpZW5jZS5leHBlcmllbmNlcyA6IFtdO1xuICBjb25zdCBbY3VycmVudEl0ZW0sIHNldEN1cnJlbnRJdGVtXSA9IFJlYWN0LnVzZVN0YXRlKHt9KTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIHtvcGVuTW9kYWwgJiZcbiAgICAgICAgPFZITW9kYWxFeHBlcmllbmNlIG9wZW5Nb2RhbD17b3Blbk1vZGFsfSBvbkNsb3NlPXsoKSA9PiBzZXRPcGVuTW9kYWwoZmFsc2UpfVxuICAgICAgICAgIG1vZGFsRXhwZXJpZW5jZT17cHJvcHMubW9kYWxFeHBlcmllbmNlfVxuICAgICAgICAgIGN1cnJlbnRJdGVtPXtjdXJyZW50SXRlbX1cbiAgICAgICAgICBjb250cm9scz17cHJvcHMuY29udHJvbHN9XG4gICAgICAgICAgb25FdmVudD17cHJvcHMub25FdmVudH1cbiAgICAgICAgICBuZXdFeHBlcmllbmNlPXtuZXdFeHBlcmllbmNlfVxuICAgICAgICAgIGNvdW50cmllcz17cHJvcHMuY291bnRyaWVzfVxuICAgICAgICAgIGNvbXBhbnlMaXN0PXtwcm9wcy5jb21wYW55TGlzdH1cbiAgICAgICAgICBpbmR1c3RyeUxpc3Q9e3Byb3BzLmluZHVzdHJ5TGlzdH1cbiAgICAgICAgICBwb3NpdGlvbnM9e3Byb3BzLnBvc2l0aW9uc30vPlxuICAgICAgfVxuICAgICAgPFJvdyBtYXJnaW5Cb3R0b209ezV9PlxuICAgICAgICA8VkhUZXh0XG4gICAgICAgICAgY2xhc3NOYW1lPXtgdmgtc2tpbGxzLXNlY3Rpb24tdGl0bGUgJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJ31gfVxuICAgICAgICAgIHRleHQ9e2BFeHBlcmllbmNlICR7cHJvcHMueWVhcnNPZkV4cGVyaWVuY2V9YH1cbiAgICAgICAgICBjb2xvcj1cImJsYWNrLTUwXCJcbiAgICAgICAgICB2YXJpYW50PVwiaDJcIlxuICAgICAgICAvPlxuICAgICAgPC9Sb3c+XG4gICAgICA8Um93PlxuICAgICAgICA8VkhDYXJkQmFzZVxuICAgICAgICAgIGNsYXNzTmFtZT17YHZoLXNraWxscy1zZWN0aW9uLWNhcmQgJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJ31gfVxuICAgICAgICA+XG4gICAgICAgICAge1xuICAgICAgICAgICAgZXhwZXJpZW5jZS5tYXAodXNlclBvc2l0aW9uID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Um93IG1hcmdpbkJvdHRvbT17MTB9PlxuICAgICAgICAgICAgICAgICAgPFZIVXNlckNvbXBhbnlQb3NpdGlvbkV4cGVyaWVuY2VcbiAgICAgICAgICAgICAgICAgICAgaXRlbT17dXNlclBvc2l0aW9ufVxuICAgICAgICAgICAgICAgICAgICBjb21wYW55TGlzdD17cHJvcHMuY29tcGFueUxpc3R9XG4gICAgICAgICAgICAgICAgICAgIGluZHVzdHJ5TGlzdD17cHJvcHMuaW5kdXN0cnlMaXN0fVxuICAgICAgICAgICAgICAgICAgICBvbk9wZW49eygpID0+IHtzZXRPcGVuTW9kYWwodHJ1ZSl9fVxuICAgICAgICAgICAgICAgICAgICBvbkV2ZW50PXtwcm9wcy5vbkV2ZW50fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgPFJvdyByb3c+XG4gICAgICAgICAgICA8Um93IHBhZGRpbmdSaWdodDggYXV0b1dpZHRoPlxuICAgICAgICAgICAgICA8VkhCdXR0b25cbiAgICAgICAgICAgICAgICBub3dyYXBcbiAgICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAgICAgb25FdmVudD17cHJvcHMub25FdmVudH1cbiAgICAgICAgICAgICAgICBkYXRhPXtcIkFkZEV4cGVyaWVuY2VcIn1cbiAgICAgICAgICAgICAgICBsYWJlbD1cIkFkZCBFeHBlcmllbmNlXCJcbiAgICAgICAgICAgICAgICBjbG9zZU1vZGFsPXtwcm9wcy5jbG9zZU1vZGFsfSBcbiAgICAgICAgICAgICAgICBvbk9wZW49eygpID0+IHtzZXRPcGVuTW9kYWwodHJ1ZSl9fVxuICAgICAgICAgICAgICAgIHNldE5ld0V4cGVyaWVuY2U9eygpPT57c2V0TmV3RXhwZXJpZW5jZSh0cnVlKX19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxSb3cgcm93PlxuICAgICAgICAgICAgICA8VkhCdXR0b25cbiAgICAgICAgICAgICAgICBvdXRsaW5lXG4gICAgICAgICAgICAgICAgcHJpbWFyeVxuICAgICAgICAgICAgICAgIG9uRXZlbnQ9e3Byb3BzLm9uRXZlbnR9XG4gICAgICAgICAgICAgICAgZGF0YT17XCJSZXF1ZXN0UHJvZmlsZVJldmlld1wifVxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUmVxdWVzdCBQcm9maWxlIFJldmlld1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9WSENhcmRCYXNlPlxuICAgICAgPC9Sb3c+XG4gICAgPC8+XG4gIClcbn1cblxuVkhVc2VyQ29tcGFueUV4cGVyaWVuY2VTZWN0aW9uLnByb3BUeXBlcyA9IHtcbiAgb25FdmVudDogUHJvcFR5cGVzLmZ1bmMsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGRhdGE6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZIVXNlckNvbXBhbnlFeHBlcmllbmNlU2VjdGlvbjtcbiJdfQ==