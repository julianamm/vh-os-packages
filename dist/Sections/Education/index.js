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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHEducationSection = function VHEducationSection(props) {
  console.log(props.education);

  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      openModal = _React$useState2[0],
      setOpenModal = _React$useState2[1];

  var education = props.education ? props.education : [];
  return _react.default.createElement(_react.default.Fragment, null, openModal && _react.default.createElement(_ModalEducation.default, {
    openModal: openModal,
    onClose: function onClose() {
      return setOpenModal(false);
    },
    currentItem: props.currentItem,
    items: props.items,
    controls: props.controls,
    onEvent: props.onEvent
  }), _react.default.createElement(_Grid.Row, {
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
      title: item.title,
      titleColor: "primary-light",
      description: item.subTitle,
      titleVariant: "h4",
      descriptionVariant: "bodyweb",
      data: {},
      onEvent: function onEvent(e) {
        return console.log(e);
      }
    }));
  }), _react.default.createElement(_Grid.Row, {
    width: '10%',
    lg: true
  }, _react.default.createElement(_Button.default, {
    primary: true,
    onEvent: function onEvent(e) {
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