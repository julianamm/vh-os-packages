"use strict";

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHModalEducation = function VHModalEducation(props) {
  var _React$useState = _react.default.useState(props.currentItem),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      handleChange = _React$useState2[1];

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
      captionColor: props.controls.degree.loading ? "gray-40" : props.controls.degree.error ? "red" : null,
      className: "vh-general-section-degree ".concat(props.className ? props.className : ''),
      currentItem: props.currentItem,
      data: "degree",
      onEvent: function onEvent(e) {
        if (e.type === 'OnChange') {
          handleChange(e.props.item);
        }
      },
      items: props.items,
      isLoading: props.controls.degree.loading,
      description: props.controls.degree.error && props.controls.degree.message,
      descriptionColor: "red-light"
    })), _react.default.createElement(_Grid.Row, {
      marginBottom5: true
    }, _react.default.createElement(_index.default, {
      color: "gray-100",
      variant: 'platform',
      text: "Degree Title"
    }), _react.default.createElement(_Simple.default, {
      placeholder: "",
      onEvent: function onEvent(e) {
        console.log(e);
      }
    })), _react.default.createElement(_Grid.Row, {
      marginBottom5: true
    }, _react.default.createElement(_index.default, {
      color: "gray-100",
      variant: 'platform',
      text: "School Name"
    }), _react.default.createElement(_Simple.default, {
      placeholder: "",
      onEvent: function onEvent(e) {
        console.log(e);
      }
    })), _react.default.createElement(_Grid.Row, {
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
      onEvent: function onEvent(e) {
        console.log(e);
      }
    })), _react.default.createElement(_Grid.Row, {
      width: '40%'
    }, _react.default.createElement(_index.default, {
      color: "gray-100",
      variant: 'platform',
      text: "End Year"
    }), _react.default.createElement(_Simple.default, {
      placeholder: "",
      onEvent: function onEvent(e) {
        console.log(e);
      }
    }))), _react.default.createElement(_Grid.Row, {
      alignItemsRight: true
    }, _react.default.createElement(_index2.default, {
      primary: true,
      onEvent: function onEvent(e) {},
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