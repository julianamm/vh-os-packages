"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _TitleDescription = _interopRequireDefault(require("../../Components/TitleDescription"));

var _ModalEducation = _interopRequireDefault(require("../../Components/ModalEducation"));

var _Button = _interopRequireDefault(require("../../Components/Button"));

var _Base = _interopRequireDefault(require("../../Components/Cards/Base/"));

var _Text = _interopRequireDefault(require("../../Components/Text/"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHEducationSection = function VHEducationSection(props) {
  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      openModal = _React$useState2[0],
      setOpenModal = _React$useState2[1];

  var education = props.education ? props.education : [];
  var items = props.degreeTypeList;

  var _React$useState3 = _react.default.useState({}),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      currentItem = _React$useState4[0],
      _setCurrentItem = _React$useState4[1];

  return _react.default.createElement(_react.default.Fragment, null, openModal && _react.default.createElement(_ModalEducation.default, _defineProperty({
    openModal: openModal,
    onClose: function onClose() {
      return setOpenModal(false);
    },
    closeModal: props.closeModal,
    modalEducation: props.modalEducation,
    currentItem: props.currentItem,
    items: items,
    controls: props.controls,
    onEvent: props.onEvent
  }, "currentItem", currentItem)), _react.default.createElement(_Grid.Row, {
    marginBottom: 5
  }, _react.default.createElement(_Text.default, {
    className: "vh-education-section-title ".concat(props.className ? props.className : ''),
    text: "Education",
    color: "black-50",
    variant: "h2"
  })), _react.default.createElement(_Base.default, {
    className: "vh-education-section-card ".concat(props.className ? props.className : '')
  }, _react.default.createElement(_Grid.Row, {
    column: true
  }, education.map(function (item) {
    return _react.default.createElement(_Grid.Row, {
      marginBottom5: true
    }, _react.default.createElement(_TitleDescription.default, {
      pointer: true,
      title: item.degreeTitle,
      titleColor: "primary-light",
      description: item.schoolName,
      titleVariant: "h4",
      descriptionVariant: "bodyweb",
      onEvent: props.onEvent,
      data: _objectSpread({
        label: 'openModalEducation'
      }, item),
      onOpen: function onOpen() {
        return setOpenModal(true);
      },
      setCurrentItem: function setCurrentItem() {
        return _setCurrentItem(item);
      }
    }), _react.default.createElement(_Text.default, {
      variant: 'caption',
      text: item.start,
      color: 'gray-90',
      onEvent: props.onEvent
    }));
  }), _react.default.createElement(_Grid.Row, {
    width: '20%',
    lg: true
  }, _react.default.createElement(_Button.default, {
    data: 'openModal',
    primary: true,
    onEvent: props.onEvent,
    closeModal: props.closeModal,
    onOpen: function onOpen() {
      _setCurrentItem({});

      setOpenModal(true);
    },
    label: "Add Education"
  })))));
};

VHEducationSection.propTypes = {
  onEvent: _propTypes.default.func,
  data: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  className: _propTypes.default.string
};
var _default = VHEducationSection;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL1NlY3Rpb25zL0VkdWNhdGlvbi9pbmRleC5qc3giXSwibmFtZXMiOlsiVkhFZHVjYXRpb25TZWN0aW9uIiwicHJvcHMiLCJSZWFjdCIsInVzZVN0YXRlIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwiZWR1Y2F0aW9uIiwiaXRlbXMiLCJkZWdyZWVUeXBlTGlzdCIsImN1cnJlbnRJdGVtIiwic2V0Q3VycmVudEl0ZW0iLCJjbG9zZU1vZGFsIiwibW9kYWxFZHVjYXRpb24iLCJjb250cm9scyIsIm9uRXZlbnQiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwiZGVncmVlVGl0bGUiLCJzY2hvb2xOYW1lIiwibGFiZWwiLCJzdGFydCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJkYXRhIiwib25lT2ZUeXBlIiwic3RyaW5nIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQUMsS0FBSyxFQUFJO0FBQUEsd0JBQ0FDLGVBQU1DLFFBQU4sQ0FBZSxLQUFmLENBREE7QUFBQTtBQUFBLE1BQzNCQyxTQUQyQjtBQUFBLE1BQ2hCQyxZQURnQjs7QUFFbEMsTUFBTUMsU0FBUyxHQUFHTCxLQUFLLENBQUNLLFNBQU4sR0FBa0JMLEtBQUssQ0FBQ0ssU0FBeEIsR0FBb0MsRUFBdEQ7QUFDQSxNQUFNQyxLQUFLLEdBQUdOLEtBQUssQ0FBQ08sY0FBcEI7O0FBSGtDLHlCQUlJTixlQUFNQyxRQUFOLENBQWUsRUFBZixDQUpKO0FBQUE7QUFBQSxNQUkzQk0sV0FKMkI7QUFBQSxNQUlkQyxlQUpjOztBQUtsQyxTQUNFLDZCQUFDLGNBQUQsQ0FBTyxRQUFQLFFBQ0dOLFNBQVMsSUFDUiw2QkFBQyx1QkFBRDtBQUFrQixJQUFBLFNBQVMsRUFBRUEsU0FBN0I7QUFBd0MsSUFBQSxPQUFPLEVBQUU7QUFBQSxhQUFNQyxZQUFZLENBQUMsS0FBRCxDQUFsQjtBQUFBLEtBQWpEO0FBQ0UsSUFBQSxVQUFVLEVBQUVKLEtBQUssQ0FBQ1UsVUFEcEI7QUFFRSxJQUFBLGNBQWMsRUFBRVYsS0FBSyxDQUFDVyxjQUZ4QjtBQUdFLElBQUEsV0FBVyxFQUFFWCxLQUFLLENBQUNRLFdBSHJCO0FBSUUsSUFBQSxLQUFLLEVBQUVGLEtBSlQ7QUFLRSxJQUFBLFFBQVEsRUFBRU4sS0FBSyxDQUFDWSxRQUxsQjtBQU1FLElBQUEsT0FBTyxFQUFFWixLQUFLLENBQUNhO0FBTmpCLG9CQU9lTCxXQVBmLEVBRkosRUFXRSw2QkFBQyxTQUFEO0FBQUssSUFBQSxZQUFZLEVBQUU7QUFBbkIsS0FDRSw2QkFBQyxhQUFEO0FBQ0UsSUFBQSxTQUFTLHVDQUFnQ1IsS0FBSyxDQUFDYyxTQUFOLEdBQWtCZCxLQUFLLENBQUNjLFNBQXhCLEdBQW9DLEVBQXBFLENBRFg7QUFFRSxJQUFBLElBQUksRUFBRSxXQUZSO0FBR0UsSUFBQSxLQUFLLEVBQUMsVUFIUjtBQUlFLElBQUEsT0FBTyxFQUFDO0FBSlYsSUFERixDQVhGLEVBbUJFLDZCQUFDLGFBQUQ7QUFDRSxJQUFBLFNBQVMsc0NBQStCZCxLQUFLLENBQUNjLFNBQU4sR0FBa0JkLEtBQUssQ0FBQ2MsU0FBeEIsR0FBb0MsRUFBbkU7QUFEWCxLQUdFLDZCQUFDLFNBQUQ7QUFBSyxJQUFBLE1BQU07QUFBWCxLQUNHVCxTQUFTLENBQUNVLEdBQVYsQ0FBYyxVQUFBQyxJQUFJLEVBQUk7QUFDckIsV0FDRSw2QkFBQyxTQUFEO0FBQUssTUFBQSxhQUFhO0FBQWxCLE9BQ0UsNkJBQUMseUJBQUQ7QUFDRSxNQUFBLE9BQU8sTUFEVDtBQUVFLE1BQUEsS0FBSyxFQUFFQSxJQUFJLENBQUNDLFdBRmQ7QUFHRSxNQUFBLFVBQVUsRUFBQyxlQUhiO0FBSUUsTUFBQSxXQUFXLEVBQUVELElBQUksQ0FBQ0UsVUFKcEI7QUFLRSxNQUFBLFlBQVksRUFBQyxJQUxmO0FBTUUsTUFBQSxrQkFBa0IsRUFBQyxTQU5yQjtBQU9FLE1BQUEsT0FBTyxFQUFFbEIsS0FBSyxDQUFDYSxPQVBqQjtBQVFFLE1BQUEsSUFBSTtBQUFHTSxRQUFBQSxLQUFLLEVBQUU7QUFBVixTQUFtQ0gsSUFBbkMsQ0FSTjtBQVNFLE1BQUEsTUFBTSxFQUFFO0FBQUEsZUFBTVosWUFBWSxDQUFDLElBQUQsQ0FBbEI7QUFBQSxPQVRWO0FBVUUsTUFBQSxjQUFjLEVBQUU7QUFBQSxlQUFNSyxlQUFjLENBQUNPLElBQUQsQ0FBcEI7QUFBQTtBQVZsQixNQURGLEVBYUUsNkJBQUMsYUFBRDtBQUFRLE1BQUEsT0FBTyxFQUFFLFNBQWpCO0FBQTRCLE1BQUEsSUFBSSxFQUFFQSxJQUFJLENBQUNJLEtBQXZDO0FBQThDLE1BQUEsS0FBSyxFQUFFLFNBQXJEO0FBQWdFLE1BQUEsT0FBTyxFQUFFcEIsS0FBSyxDQUFDYTtBQUEvRSxNQWJGLENBREY7QUFpQkQsR0FsQkEsQ0FESCxFQXFCRSw2QkFBQyxTQUFEO0FBQUssSUFBQSxLQUFLLEVBQUUsS0FBWjtBQUFtQixJQUFBLEVBQUU7QUFBckIsS0FDRSw2QkFBQyxlQUFEO0FBQVUsSUFBQSxJQUFJLEVBQUUsV0FBaEI7QUFBNkIsSUFBQSxPQUFPLE1BQXBDO0FBQXFDLElBQUEsT0FBTyxFQUFFYixLQUFLLENBQUNhLE9BQXBEO0FBQTZELElBQUEsVUFBVSxFQUFFYixLQUFLLENBQUNVLFVBQS9FO0FBQTJGLElBQUEsTUFBTSxFQUFFLGtCQUFNO0FBQUNELE1BQUFBLGVBQWMsQ0FBQyxFQUFELENBQWQ7O0FBQW9CTCxNQUFBQSxZQUFZLENBQUMsSUFBRCxDQUFaO0FBQW1CLEtBQWpKO0FBQW1KLElBQUEsS0FBSyxFQUFDO0FBQXpKLElBREYsQ0FyQkYsQ0FIRixDQW5CRixDQURGO0FBbURELENBeEREOztBQTBEQUwsa0JBQWtCLENBQUNzQixTQUFuQixHQUErQjtBQUM3QlIsRUFBQUEsT0FBTyxFQUFFUyxtQkFBVUMsSUFEVTtBQUU3QkMsRUFBQUEsSUFBSSxFQUFFRixtQkFBVUcsU0FBVixDQUFvQixDQUFDSCxtQkFBVUksTUFBWCxFQUFtQkosbUJBQVVLLE1BQTdCLENBQXBCLENBRnVCO0FBRzdCYixFQUFBQSxTQUFTLEVBQUVRLG1CQUFVSTtBQUhRLENBQS9CO2VBTWUzQixrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3cgfSBmcm9tIFwiLi4vLi4vR3JpZFwiO1xuaW1wb3J0IFZIVGl0bGVEZXNjcmlwdGlvbiBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9UaXRsZURlc2NyaXB0aW9uXCI7XG5pbXBvcnQgVkhNb2RhbEVkdWNhdGlvbiBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9Nb2RhbEVkdWNhdGlvblwiXG5pbXBvcnQgVkhCdXR0b24gZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvQnV0dG9uXCJcbmltcG9ydCBWSENhcmRCYXNlIGZyb20gXCIuLi8uLi9Db21wb25lbnRzL0NhcmRzL0Jhc2UvXCJcbmltcG9ydCBWSFRleHQgZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvVGV4dC9cIlxuXG5jb25zdCBWSEVkdWNhdGlvblNlY3Rpb24gPSBwcm9wcyA9PiB7XG4gIGNvbnN0IFtvcGVuTW9kYWwsIHNldE9wZW5Nb2RhbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGVkdWNhdGlvbiA9IHByb3BzLmVkdWNhdGlvbiA/IHByb3BzLmVkdWNhdGlvbiA6IFtdO1xuICBjb25zdCBpdGVtcyA9IHByb3BzLmRlZ3JlZVR5cGVMaXN0XG4gIGNvbnN0IFtjdXJyZW50SXRlbSwgc2V0Q3VycmVudEl0ZW1dID0gUmVhY3QudXNlU3RhdGUoe30pO1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIHtvcGVuTW9kYWwgJiZcbiAgICAgICAgPFZITW9kYWxFZHVjYXRpb24gb3Blbk1vZGFsPXtvcGVuTW9kYWx9IG9uQ2xvc2U9eygpID0+IHNldE9wZW5Nb2RhbChmYWxzZSl9XG4gICAgICAgICAgY2xvc2VNb2RhbD17cHJvcHMuY2xvc2VNb2RhbH1cbiAgICAgICAgICBtb2RhbEVkdWNhdGlvbj17cHJvcHMubW9kYWxFZHVjYXRpb259XG4gICAgICAgICAgY3VycmVudEl0ZW09e3Byb3BzLmN1cnJlbnRJdGVtfVxuICAgICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgICBjb250cm9scz17cHJvcHMuY29udHJvbHN9XG4gICAgICAgICAgb25FdmVudD17cHJvcHMub25FdmVudH0gXG4gICAgICAgICAgY3VycmVudEl0ZW09e2N1cnJlbnRJdGVtfS8+XG4gICAgICB9XG4gICAgICA8Um93IG1hcmdpbkJvdHRvbT17NX0+XG4gICAgICAgIDxWSFRleHRcbiAgICAgICAgICBjbGFzc05hbWU9e2B2aC1lZHVjYXRpb24tc2VjdGlvbi10aXRsZSAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9XG4gICAgICAgICAgdGV4dD17XCJFZHVjYXRpb25cIn1cbiAgICAgICAgICBjb2xvcj1cImJsYWNrLTUwXCJcbiAgICAgICAgICB2YXJpYW50PVwiaDJcIlxuICAgICAgICAvPlxuICAgICAgPC9Sb3c+XG4gICAgICA8VkhDYXJkQmFzZVxuICAgICAgICBjbGFzc05hbWU9e2B2aC1lZHVjYXRpb24tc2VjdGlvbi1jYXJkICR7cHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogJyd9YH1cbiAgICAgID5cbiAgICAgICAgPFJvdyBjb2x1bW4+XG4gICAgICAgICAge2VkdWNhdGlvbi5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8Um93IG1hcmdpbkJvdHRvbTU+XG4gICAgICAgICAgICAgICAgPFZIVGl0bGVEZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgcG9pbnRlclxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0uZGVncmVlVGl0bGV9XG4gICAgICAgICAgICAgICAgICB0aXRsZUNvbG9yPVwicHJpbWFyeS1saWdodFwiXG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5zY2hvb2xOYW1lfVxuICAgICAgICAgICAgICAgICAgdGl0bGVWYXJpYW50PVwiaDRcIlxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25WYXJpYW50PVwiYm9keXdlYlwiXG4gICAgICAgICAgICAgICAgICBvbkV2ZW50PXtwcm9wcy5vbkV2ZW50fVxuICAgICAgICAgICAgICAgICAgZGF0YT17e2xhYmVsOiAnb3Blbk1vZGFsRWR1Y2F0aW9uJywgLi4uaXRlbX19XG4gICAgICAgICAgICAgICAgICBvbk9wZW49eygpID0+IHNldE9wZW5Nb2RhbCh0cnVlKX1cbiAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRJdGVtPXsoKSA9PiBzZXRDdXJyZW50SXRlbShpdGVtKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxWSFRleHQgdmFyaWFudD17J2NhcHRpb24nfSB0ZXh0PXtpdGVtLnN0YXJ0fSBjb2xvcj17J2dyYXktOTAnfSBvbkV2ZW50PXtwcm9wcy5vbkV2ZW50fSAvPlxuICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICA8Um93IHdpZHRoPXsnMjAlJ30gbGc+XG4gICAgICAgICAgICA8VkhCdXR0b24gZGF0YT17J29wZW5Nb2RhbCd9IHByaW1hcnkgb25FdmVudD17cHJvcHMub25FdmVudH0gY2xvc2VNb2RhbD17cHJvcHMuY2xvc2VNb2RhbH0gb25PcGVuPXsoKSA9PiB7c2V0Q3VycmVudEl0ZW0oe30pOyBzZXRPcGVuTW9kYWwodHJ1ZSl9fSBsYWJlbD1cIkFkZCBFZHVjYXRpb25cIiAvPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvVkhDYXJkQmFzZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG5cblZIRWR1Y2F0aW9uU2VjdGlvbi5wcm9wVHlwZXMgPSB7XG4gIG9uRXZlbnQ6IFByb3BUeXBlcy5mdW5jLFxuICBkYXRhOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBWSEVkdWNhdGlvblNlY3Rpb247XG4iXX0=