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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, openModal && /*#__PURE__*/_react.default.createElement(_ModalEducation.default, _defineProperty({
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
  }, "currentItem", currentItem)), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom: 5
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    className: "vh-education-section-title ".concat(props.className ? props.className : ''),
    text: "Education",
    color: "black-50",
    variant: "h2"
  })), /*#__PURE__*/_react.default.createElement(_Base.default, {
    className: "vh-education-section-card ".concat(props.className ? props.className : '')
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    column: true
  }, education.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      marginBottom5: true
    }, /*#__PURE__*/_react.default.createElement(_TitleDescription.default, {
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
    }), /*#__PURE__*/_react.default.createElement(_Text.default, {
      variant: 'caption',
      text: item.start,
      color: 'gray-90',
      onEvent: props.onEvent
    }));
  }), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    width: '20%',
    lg: true
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL1NlY3Rpb25zL0VkdWNhdGlvbi9pbmRleC5qc3giXSwibmFtZXMiOlsiVkhFZHVjYXRpb25TZWN0aW9uIiwicHJvcHMiLCJSZWFjdCIsInVzZVN0YXRlIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwiZWR1Y2F0aW9uIiwiaXRlbXMiLCJkZWdyZWVUeXBlTGlzdCIsImN1cnJlbnRJdGVtIiwic2V0Q3VycmVudEl0ZW0iLCJjbG9zZU1vZGFsIiwibW9kYWxFZHVjYXRpb24iLCJjb250cm9scyIsIm9uRXZlbnQiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwiZGVncmVlVGl0bGUiLCJzY2hvb2xOYW1lIiwibGFiZWwiLCJzdGFydCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJkYXRhIiwib25lT2ZUeXBlIiwic3RyaW5nIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUFDLEtBQUssRUFBSTtBQUFBLHdCQUNBQyxlQUFNQyxRQUFOLENBQWUsS0FBZixDQURBO0FBQUE7QUFBQSxNQUMzQkMsU0FEMkI7QUFBQSxNQUNoQkMsWUFEZ0I7O0FBRWxDLE1BQU1DLFNBQVMsR0FBR0wsS0FBSyxDQUFDSyxTQUFOLEdBQWtCTCxLQUFLLENBQUNLLFNBQXhCLEdBQW9DLEVBQXREO0FBQ0EsTUFBTUMsS0FBSyxHQUFHTixLQUFLLENBQUNPLGNBQXBCOztBQUhrQyx5QkFJSU4sZUFBTUMsUUFBTixDQUFlLEVBQWYsQ0FKSjtBQUFBO0FBQUEsTUFJM0JNLFdBSjJCO0FBQUEsTUFJZEMsZUFKYzs7QUFLbEMsc0JBQ0UsNkJBQUMsY0FBRCxDQUFPLFFBQVAsUUFDR04sU0FBUyxpQkFDUiw2QkFBQyx1QkFBRDtBQUFrQixJQUFB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QURVO0FBRTdCQyxFQUFBQSxJQUFJLEVBQUVGLG1CQUFVRyxTQUFWLENBQW9CLENBQUNILG1CQUFVSSxNQUFYLEVBQW1CSixtQkFBVUssTUFBN0IsQ0FBcEIsQ0FGdUI7QUFHN0JiLEVBQUFBLFNBQVMsRUFBRVEsbUJBQVVJO0FBSFEsQ0FBL0I7ZUFNZTNCLGtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBDb250YWluZXIsIFJvdyB9IGZyb20gXCIuLi8uLi9HcmlkXCI7XG5pbXBvcnQgVkhUaXRsZURlc2NyaXB0aW9uIGZyb20gXCIuLi8uLi9Db21wb25lbnRzL1RpdGxlRGVzY3JpcHRpb25cIjtcbmltcG9ydCBWSE1vZGFsRWR1Y2F0aW9uIGZyb20gXCIuLi8uLi9Db21wb25lbnRzL01vZGFsRWR1Y2F0aW9uXCJcbmltcG9ydCBWSEJ1dHRvbiBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9CdXR0b25cIlxuaW1wb3J0IFZIQ2FyZEJhc2UgZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvQ2FyZHMvQmFzZS9cIlxuaW1wb3J0IFZIVGV4dCBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9UZXh0L1wiXG5cbmNvbnN0IFZIRWR1Y2F0aW9uU2VjdGlvbiA9IHByb3BzID0+IHtcbiAgY29uc3QgW29wZW5Nb2RhbCwgc2V0T3Blbk1vZGFsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgZWR1Y2F0aW9uID0gcHJvcHMuZWR1Y2F0aW9uID8gcHJvcHMuZWR1Y2F0aW9uIDogW107XG4gIGNvbnN0IGl0ZW1zID0gcHJvcHMuZGVncmVlVHlwZUxpc3RcbiAgY29uc3QgW2N1cnJlbnRJdGVtLCBzZXRDdXJyZW50SXRlbV0gPSBSZWFjdC51c2VTdGF0ZSh7fSk7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAge29wZW5Nb2RhbCAmJlxuICAgICAgICA8VkhNb2RhbEVkdWNhdGlvbiBvcGVuTW9kYWw9e29wZW5Nb2RhbH0gb25DbG9zZT17KCkgPT4gc2V0T3Blbk1vZGFsKGZhbHNlKX1cbiAgICAgICAgICBjbG9zZU1vZGFsPXtwcm9wcy5jbG9zZU1vZGFsfVxuICAgICAgICAgIG1vZGFsRWR1Y2F0aW9uPXtwcm9wcy5tb2RhbEVkdWNhdGlvbn1cbiAgICAgICAgICBjdXJyZW50SXRlbT17cHJvcHMuY3VycmVudEl0ZW19XG4gICAgICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgICAgICAgIGNvbnRyb2xzPXtwcm9wcy5jb250cm9sc31cbiAgICAgICAgICBvbkV2ZW50PXtwcm9wcy5vbkV2ZW50fSBcbiAgICAgICAgICBjdXJyZW50SXRlbT17Y3VycmVudEl0ZW19Lz5cbiAgICAgIH1cbiAgICAgIDxSb3cgbWFyZ2luQm90dG9tPXs1fT5cbiAgICAgICAgPFZIVGV4dFxuICAgICAgICAgIGNsYXNzTmFtZT17YHZoLWVkdWNhdGlvbi1zZWN0aW9uLXRpdGxlICR7cHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogJyd9YH1cbiAgICAgICAgICB0ZXh0PXtcIkVkdWNhdGlvblwifVxuICAgICAgICAgIGNvbG9yPVwiYmxhY2stNTBcIlxuICAgICAgICAgIHZhcmlhbnQ9XCJoMlwiXG4gICAgICAgIC8+XG4gICAgICA8L1Jvdz5cbiAgICAgIDxWSENhcmRCYXNlXG4gICAgICAgIGNsYXNzTmFtZT17YHZoLWVkdWNhdGlvbi1zZWN0aW9uLWNhcmQgJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJ31gfVxuICAgICAgPlxuICAgICAgICA8Um93IGNvbHVtbj5cbiAgICAgICAgICB7ZWR1Y2F0aW9uLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxSb3cgbWFyZ2luQm90dG9tNT5cbiAgICAgICAgICAgICAgICA8VkhUaXRsZURlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICBwb2ludGVyXG4gICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS5kZWdyZWVUaXRsZX1cbiAgICAgICAgICAgICAgICAgIHRpdGxlQ29sb3I9XCJwcmltYXJ5LWxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtpdGVtLnNjaG9vbE5hbWV9XG4gICAgICAgICAgICAgICAgICB0aXRsZVZhcmlhbnQ9XCJoNFwiXG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblZhcmlhbnQ9XCJib2R5d2ViXCJcbiAgICAgICAgICAgICAgICAgIG9uRXZlbnQ9e3Byb3BzLm9uRXZlbnR9XG4gICAgICAgICAgICAgICAgICBkYXRhPXt7bGFiZWw6ICdvcGVuTW9kYWxFZHVjYXRpb24nLCAuLi5pdGVtfX1cbiAgICAgICAgICAgICAgICAgIG9uT3Blbj17KCkgPT4gc2V0T3Blbk1vZGFsKHRydWUpfVxuICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudEl0ZW09eygpID0+IHNldEN1cnJlbnRJdGVtKGl0ZW0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFZIVGV4dCB2YXJpYW50PXsnY2FwdGlvbid9IHRleHQ9e2l0ZW0uc3RhcnR9IGNvbG9yPXsnZ3JheS05MCd9IG9uRXZlbnQ9e3Byb3BzLm9uRXZlbnR9IC8+XG4gICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIDxSb3cgd2lkdGg9eycyMCUnfSBsZz5cbiAgICAgICAgICAgIDxWSEJ1dHRvbiBkYXRhPXsnb3Blbk1vZGFsJ30gcHJpbWFyeSBvbkV2ZW50PXtwcm9wcy5vbkV2ZW50fSBjbG9zZU1vZGFsPXtwcm9wcy5jbG9zZU1vZGFsfSBvbk9wZW49eygpID0+IHtzZXRDdXJyZW50SXRlbSh7fSk7IHNldE9wZW5Nb2RhbCh0cnVlKX19IGxhYmVsPVwiQWRkIEVkdWNhdGlvblwiIC8+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9WSENhcmRCYXNlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cblxuVkhFZHVjYXRpb25TZWN0aW9uLnByb3BUeXBlcyA9IHtcbiAgb25FdmVudDogUHJvcFR5cGVzLmZ1bmMsXG4gIGRhdGE6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZIRWR1Y2F0aW9uU2VjdGlvbjtcbiJdfQ==