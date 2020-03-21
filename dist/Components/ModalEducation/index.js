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

var S = _interopRequireWildcard(require("./styles"));

var _index3 = require("../../util/index");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHModalEducation = function VHModalEducation(props) {
  var item = props.currentItem ? props.currentItem : {};

  var _React$useState = _react.default.useState({
    value: item.degreeType,
    label: item.degreeTypeStr
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      degreeType = _React$useState2[0],
      setDegreeType = _React$useState2[1];

  var _React$useState3 = _react.default.useState(item.degreeTitle),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      degreeTitle = _React$useState4[0],
      setDegreeTitle = _React$useState4[1];

  var _React$useState5 = _react.default.useState(item.schoolName),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      schoolName = _React$useState6[0],
      setSchoolName = _React$useState6[1];

  var _React$useState7 = _react.default.useState((0, _index3.getFormatedDate)(item.startDate)),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      startYear = _React$useState8[0],
      setStartYear = _React$useState8[1];

  var _React$useState9 = _react.default.useState((0, _index3.getFormatedDate)(item.endYear)),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      endYear = _React$useState10[0],
      setEndYear = _React$useState10[1];

  return _react.default.createElement(_Modal.default, {
    width: "732",
    minWidth: "660",
    open: props.openModal,
    onClose: props.onClose,
    onEvent: props.onEvent,
    header: _react.default.createElement(_Grid.Row, {
      row: true
    }, _react.default.createElement(_TitleDescription.default, {
      title: 'Add Education',
      description: '',
      titleVariant: "h3",
      titleColor: "black-50",
      descriptionColor: "gray-100",
      descriptionVariant: "platform",
      onEvent: props.onEvent
    })),
    content: _react.default.createElement(_Grid.Row, {
      column: true
    }, _react.default.createElement("div", {
      style: {
        width: '40%'
      }
    }, _react.default.createElement(_Select.default, {
      caption: "Degree Type",
      captionColor: null,
      className: "vh-general-section-degree ".concat(props.className ? props.className : ''),
      currentItem: degreeType,
      data: "degree",
      onEvent: props.onEvent,
      items: props.items
    }), props.modalEducation.degreeType.messageError && _react.default.createElement(S.ErrorMessage, null, "Field required")), _react.default.createElement(_Grid.Row, {
      marginBottom5: true
    }, _react.default.createElement(_index.default, {
      color: "gray-100",
      variant: 'platform',
      text: "Degree Title"
    }), _react.default.createElement(_Simple.default, {
      placeholder: "",
      onEvent: props.onEvent,
      value: degreeTitle,
      data: {
        id: "ModalEducation",
        field: "degreeTitle"
      }
    }), props.modalEducation.degreeTitle.messageError && _react.default.createElement(S.ErrorMessage, null, "Field required")), _react.default.createElement(_Grid.Row, {
      marginBottom5: true
    }, _react.default.createElement(_index.default, {
      color: "gray-100",
      variant: 'platform',
      text: "School Name"
    }), _react.default.createElement(_Simple.default, {
      placeholder: "",
      onEvent: props.onEvent,
      value: schoolName,
      data: {
        id: "ModalEducation",
        field: "schoolName"
      }
    }), props.modalEducation.schoolName.messageError && _react.default.createElement(S.ErrorMessage, null, "Field required")), _react.default.createElement(_Grid.Row, {
      marginBottom5: true,
      row: true,
      justifySpaceBetween: true
    }, _react.default.createElement(_Grid.Row, {
      width: '40%'
    }, _react.default.createElement(_index.default, {
      color: "gray-100",
      variant: 'platform',
      text: "Start Year"
    }), _react.default.createElement(_Simple.default, {
      placeholder: "",
      type: 'date',
      onEvent: props.onEvent,
      value: startYear,
      data: {
        id: "ModalEducation",
        field: "startYear"
      }
    }), props.modalEducation.startYear.messageError && _react.default.createElement(S.ErrorMessage, null, "Field required")), _react.default.createElement(_Grid.Row, {
      width: '40%'
    }, _react.default.createElement(_index.default, {
      color: "gray-100",
      variant: 'platform',
      text: "End Year"
    }), _react.default.createElement(_Simple.default, {
      placeholder: "",
      type: 'date',
      onEvent: props.onEvent,
      value: endYear,
      data: {
        id: "ModalEducation",
        field: "endYear"
      }
    }))), _react.default.createElement(_Grid.Row, {
      alignItemsRight: true
    }, _react.default.createElement(_index2.default, {
      primary: true,
      onEvent: props.onEvent,
      data: 'saveEducation',
      onClose: props.onClose,
      closeModal: props.closeModal,
      label: "Save"
    })))
  });
};

VHModalEducation.defaultProps = {
  onEvent: null,
  className: ""
};
VHModalEducation.propTypes = {
  onEvent: _propTypes.default.func,
  className: _propTypes.default.stringc
};
var _default = VHModalEducation;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvTW9kYWxFZHVjYXRpb24vaW5kZXguanN4Il0sIm5hbWVzIjpbIlZITW9kYWxFZHVjYXRpb24iLCJwcm9wcyIsImdldEZvcm1hdGVkRGF0ZSIsImRhdGUiLCJyZXN1bHQiLCJkIiwiRGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwibGVuZ3RoIiwiam9pbiIsIml0ZW0iLCJjdXJyZW50SXRlbSIsIlJlYWN0IiwidXNlU3RhdGUiLCJ2YWx1ZSIsImRlZ3JlZVR5cGUiLCJsYWJlbCIsImRlZ3JlZVR5cGVTdHIiLCJzZXREZWdyZWVUeXBlIiwiZGVncmVlVGl0bGUiLCJzZXREZWdyZWVUaXRsZSIsInNjaG9vbE5hbWUiLCJzZXRTY2hvb2xOYW1lIiwic3RhcnREYXRlIiwic3RhcnRZZWFyIiwic2V0U3RhcnRZZWFyIiwiZW5kWWVhciIsInNldEVuZFllYXIiLCJvcGVuTW9kYWwiLCJvbkNsb3NlIiwib25FdmVudCIsIndpZHRoIiwiY2xhc3NOYW1lIiwiaXRlbXMiLCJtb2RhbEVkdWNhdGlvbiIsIm1lc3NhZ2VFcnJvciIsImlkIiwiZmllbGQiLCJjbG9zZU1vZGFsIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsInN0cmluZ2MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFBQyxLQUFLLEVBQUk7QUFFOUIsV0FBU0MsZUFBVCxDQUF5QkMsSUFBekIsRUFBK0I7QUFDM0IsUUFBSUMsTUFBTSxHQUFHLEVBQWI7O0FBQ0EsUUFBSUQsSUFBSixFQUFVO0FBQ04sVUFBSUUsQ0FBQyxHQUFHLElBQUlDLElBQUosQ0FB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SSw2QkFBQyxlQUFEO0FBQVMsTUFBQSxXQUFXLEVBQUMsRUFBckI7QUFBd0IsTUFBQSxJQUFJLEVBQUUsTUFBOUI7QUFBc0MsTUFBQSxPQUFPLEVBQUV2QyxLQUFLLENBQUNrQyxPQUFyRDtBQUE4RCxNQUFBLEtBQUssRUFBRUosT0FBckU7QUFBOEUsTUFBQSxJQUFJLEVBQUU7QUFBRVUsUUFBQUEsRUFBRSxFQUFFLGdCQUFOO0FBQXdCQyxRQUFBQSxLQUFLLEVBQUU7QUFBL0I7QUFBcEYsTUFGSixDQVJKLENBN0JKLEVBMENJLDZCQUFDLFNBQUQ7QUFBSyxNQUFBLGVBQWU7QUFBcEIsT0FDSSw2QkFBQyxlQUFEO0FBQVUsTUFBQSxPQUFPLE1BQWpCO0FBQWtCLE1BQUEsT0FBTyxFQUFFekMsS0FBSyxDQUFDa0MsT0FBakM7QUFBMEMsTUFBQSxJQUFJLEVBQUUsZUFBaEQ7QUFBaUUsTUFBQSxPQUFPLEVBQUVsQyxLQUFLLENBQUNpQyxPQUFoRjtBQUF5RixNQUFBLFVBQVUsRUFBRWpDLEtBQUssQ0FBQzBDLFVBQTNHO0FBQXVILE1BQUEsS0FBSyxFQUFDO0FBQTdILE1BREosQ0ExQ0o7QUFuQlIsSUFESjtBQXFFSCxDQWxHRDs7QUFvR0EzQyxnQkFBZ0IsQ0FBQzRDLFlBQWpCLEdBQWdDO0FBQzVCVCxFQUFBQSxPQUFPLEVBQUUsSUFEbUI7QUFFNUJFLEVBQUFBLFNBQVMsRUFBRTtBQUZpQixDQUFoQztBQUtBckMsZ0JBQWdCLENBQUM2QyxTQUFqQixHQUE2QjtBQUN6QlYsRUFBQUEsT0FBTyxFQUFFVyxtQkFBVUMsSUFETTtBQUV6QlYsRUFBQUEsU0FBUyxFQUFFUyxtQkFBVUU7QUFGSSxDQUE3QjtlQUtlaEQsZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBSb3cgfSBmcm9tIFwiLi4vLi4vR3JpZFwiO1xuaW1wb3J0IFZITW9kYWwgZnJvbSBcIi4uL01vZGFsXCI7XG5pbXBvcnQgVkhUaXRsZURlc2NyaXB0aW9uIGZyb20gXCIuLi9UaXRsZURlc2NyaXB0aW9uXCI7XG5pbXBvcnQgVkhTZWxlY3QgZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvSW5wdXQvU2VsZWN0XCI7XG5pbXBvcnQgVkhJbnB1dCBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9JbnB1dC9TaW1wbGVcIjtcbmltcG9ydCBWSFRleHQgZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvVGV4dC9pbmRleFwiO1xuaW1wb3J0IFZIQnV0dG9uIGZyb20gXCIuLi8uLi9Db21wb25lbnRzL0J1dHRvbi9pbmRleFwiO1xuaW1wb3J0ICogYXMgUyBmcm9tIFwiLi9zdHlsZXNcIlxuXG5jb25zdCBWSE1vZGFsRWR1Y2F0aW9uID0gcHJvcHMgPT4ge1xuXG4gICAgZnVuY3Rpb24gZ2V0Rm9ybWF0ZWREYXRlKGRhdGUpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9ICcnXG4gICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICBsZXQgZCA9IG5ldyBEYXRlKGRhdGUpLFxuICAgICAgICAgICAgICAgIG1vbnRoID0gJycgKyAoZC5nZXRNb250aCgpICsgMSksXG4gICAgICAgICAgICAgICAgZGF5ID0gJycgKyBkLmdldERhdGUoKSxcbiAgICAgICAgICAgICAgICB5ZWFyID0gZC5nZXRGdWxsWWVhcigpO1xuXG4gICAgICAgICAgICBpZiAobW9udGgubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgICAgIG1vbnRoID0gJzAnICsgbW9udGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF5Lmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgICAgICBkYXkgPSAnMCcgKyBkYXk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc3VsdCA9IFt5ZWFyLCBtb250aCwgZGF5XS5qb2luKCctJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cblxuICAgIGNvbnN0IGl0ZW0gPSBwcm9wcy5jdXJyZW50SXRlbSA/IHByb3BzLmN1cnJlbnRJdGVtIDoge307XG4gICAgY29uc3QgW2RlZ3JlZVR5cGUsIHNldERlZ3JlZVR5cGVdID0gUmVhY3QudXNlU3RhdGUoeyB2YWx1ZTogaXRlbS5kZWdyZWVUeXBlLCBsYWJlbDogaXRlbS5kZWdyZWVUeXBlU3RyIH0pO1xuICAgIGNvbnN0IFtkZWdyZWVUaXRsZSwgc2V0RGVncmVlVGl0bGVdID0gUmVhY3QudXNlU3RhdGUoaXRlbS5kZWdyZWVUaXRsZSk7XG4gICAgY29uc3QgW3NjaG9vbE5hbWUsIHNldFNjaG9vbE5hbWVdID0gUmVhY3QudXNlU3RhdGUoaXRlbS5zY2hvb2xOYW1lKTtcbiAgICBjb25zdCBbc3RhcnRZZWFyLCBzZXRTdGFydFllYXJdID0gUmVhY3QudXNlU3RhdGUoZ2V0Rm9ybWF0ZWREYXRlKGl0ZW0uc3RhcnREYXRlKSk7XG4gICAgY29uc3QgW2VuZFllYXIsIHNldEVuZFllYXJdID0gUmVhY3QudXNlU3RhdGUoZ2V0Rm9ybWF0ZWREYXRlKGl0ZW0uZW5kWWVhcikpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZITW9kYWxcbiAgICAgICAgICAgIHdpZHRoPVwiNzMyXCJcbiAgICAgICAgICAgIG1pbldpZHRoPVwiNjYwXCJcbiAgICAgICAgICAgIG9wZW49e3Byb3BzLm9wZW5Nb2RhbH1cbiAgICAgICAgICAgIG9uQ2xvc2U9e3Byb3BzLm9uQ2xvc2V9XG4gICAgICAgICAgICBvbkV2ZW50PXtwcm9wcy5vbkV2ZW50fVxuICAgICAgICAgICAgaGVhZGVyPXtcbiAgICAgICAgICAgICAgICA8Um93IHJvdz5cbiAgICAgICAgICAgICAgICAgICAgPFZIVGl0bGVEZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydBZGQgRWR1Y2F0aW9uJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXsnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlVmFyaWFudD1cImgzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlQ29sb3I9XCJibGFjay01MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkNvbG9yPVwiZ3JheS0xMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25WYXJpYW50PVwicGxhdGZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25FdmVudD17cHJvcHMub25FdmVudH0gLz5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgIDxSb3cgY29sdW1uPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnNDAlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWSFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHRpb249XCJEZWdyZWUgVHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdGlvbkNvbG9yPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHZoLWdlbmVyYWwtc2VjdGlvbi1kZWdyZWUgJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJ31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtPXtkZWdyZWVUeXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9XCJkZWdyZWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRXZlbnQ9e3Byb3BzLm9uRXZlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e3Byb3BzLml0ZW1zfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5tb2RhbEVkdWNhdGlvbi5kZWdyZWVUeXBlLm1lc3NhZ2VFcnJvciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFMuRXJyb3JNZXNzYWdlPkZpZWxkIHJlcXVpcmVkPC9TLkVycm9yTWVzc2FnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Um93IG1hcmdpbkJvdHRvbTU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VkhUZXh0IGNvbG9yPVwiZ3JheS0xMDBcIiB2YXJpYW50PXsncGxhdGZvcm0nfSB0ZXh0PVwiRGVncmVlIFRpdGxlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWSElucHV0IHBsYWNlaG9sZGVyPVwiXCIgb25FdmVudD17cHJvcHMub25FdmVudH0gdmFsdWU9e2RlZ3JlZVRpdGxlfSBkYXRhPXt7IGlkOiBcIk1vZGFsRWR1Y2F0aW9uXCIsIGZpZWxkOiBcImRlZ3JlZVRpdGxlXCIgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5tb2RhbEVkdWNhdGlvbi5kZWdyZWVUaXRsZS5tZXNzYWdlRXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTLkVycm9yTWVzc2FnZT5GaWVsZCByZXF1aXJlZDwvUy5FcnJvck1lc3NhZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdyBtYXJnaW5Cb3R0b201PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZIVGV4dCBjb2xvcj1cImdyYXktMTAwXCIgdmFyaWFudD17J3BsYXRmb3JtJ30gdGV4dD1cIlNjaG9vbCBOYW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWSElucHV0IHBsYWNlaG9sZGVyPVwiXCIgb25FdmVudD17cHJvcHMub25FdmVudH0gdmFsdWU9e3NjaG9vbE5hbWV9IGRhdGE9e3sgaWQ6IFwiTW9kYWxFZHVjYXRpb25cIiwgZmllbGQ6IFwic2Nob29sTmFtZVwiIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMubW9kYWxFZHVjYXRpb24uc2Nob29sTmFtZS5tZXNzYWdlRXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTLkVycm9yTWVzc2FnZT5GaWVsZCByZXF1aXJlZDwvUy5FcnJvck1lc3NhZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdyBtYXJnaW5Cb3R0b201IHJvdyBqdXN0aWZ5U3BhY2VCZXR3ZWVuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyB3aWR0aD17JzQwJSd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWSFRleHQgY29sb3I9XCJncmF5LTEwMFwiIHZhcmlhbnQ9eydwbGF0Zm9ybSd9IHRleHQ9XCJTdGFydCBZZWFyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VkhJbnB1dCBwbGFjZWhvbGRlcj1cIlwiIHR5cGU9eydkYXRlJ30gb25FdmVudD17cHJvcHMub25FdmVudH0gdmFsdWU9e3N0YXJ0WWVhcn0gZGF0YT17eyBpZDogXCJNb2RhbEVkdWNhdGlvblwiLCBmaWVsZDogXCJzdGFydFllYXJcIiB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5tb2RhbEVkdWNhdGlvbi5zdGFydFllYXIubWVzc2FnZUVycm9yICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFMuRXJyb3JNZXNzYWdlPkZpZWxkIHJlcXVpcmVkPC9TLkVycm9yTWVzc2FnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93IHdpZHRoPXsnNDAlJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZIVGV4dCBjb2xvcj1cImdyYXktMTAwXCIgdmFyaWFudD17J3BsYXRmb3JtJ30gdGV4dD1cIkVuZCBZZWFyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VkhJbnB1dCBwbGFjZWhvbGRlcj1cIlwiIHR5cGU9eydkYXRlJ30gb25FdmVudD17cHJvcHMub25FdmVudH0gdmFsdWU9e2VuZFllYXJ9IGRhdGE9e3sgaWQ6IFwiTW9kYWxFZHVjYXRpb25cIiwgZmllbGQ6IFwiZW5kWWVhclwiIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDxSb3cgYWxpZ25JdGVtc1JpZ2h0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZIQnV0dG9uIHByaW1hcnkgb25FdmVudD17cHJvcHMub25FdmVudH0gZGF0YT17J3NhdmVFZHVjYXRpb24nfSBvbkNsb3NlPXtwcm9wcy5vbkNsb3NlfSBjbG9zZU1vZGFsPXtwcm9wcy5jbG9zZU1vZGFsfSBsYWJlbD1cIlNhdmVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIH0+XG4gICAgICAgIDwvVkhNb2RhbD5cbiAgICApXG59XG5cblZITW9kYWxFZHVjYXRpb24uZGVmYXVsdFByb3BzID0ge1xuICAgIG9uRXZlbnQ6IG51bGwsXG4gICAgY2xhc3NOYW1lOiBcIlwiXG59O1xuXG5WSE1vZGFsRWR1Y2F0aW9uLnByb3BUeXBlcyA9IHtcbiAgICBvbkV2ZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdjXG59O1xuXG5leHBvcnQgZGVmYXVsdCBWSE1vZGFsRWR1Y2F0aW9uOyJdfQ==