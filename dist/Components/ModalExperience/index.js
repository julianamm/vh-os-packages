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

var _radio = _interopRequireDefault(require("../../Components/Input/radio"));

var _checkbox = _interopRequireDefault(require("../../Components/Input/checkbox"));

var _index3 = _interopRequireDefault(require("../../Components/Textarea/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHModalExperience = function VHModalExperience(props) {
  var _React$useState = _react.default.useState(props.currentItem),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      handleChange = _React$useState2[1];

  return _react.default.createElement(_Modal.default, {
    minWidth: "700",
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
      onEvent: function onEvent(e) {
        console.log(e);
      }
    })), _react.default.createElement("div", {
      style: {
        width: '40%'
      }
    }, _react.default.createElement(_Select.default, {
      caption: "Location",
      captionColor: props.controls.location.loading ? "gray-40" : props.controls.location.error ? "red" : null,
      className: "vh-general-section-location ".concat(props.className ? props.className : ''),
      currentItem: props.currentItem,
      data: "location",
      onEvent: function onEvent(e) {
        if (e.type === 'OnChange') {
          handleChange(e.props.item);
        }
      },
      items: props.items,
      isLoading: props.controls.location.loading,
      description: props.controls.location.error && props.controls.location.message,
      descriptionColor: "red-light"
    }))), _react.default.createElement(_Grid.Row, {
      row: true
    }, _react.default.createElement(_radio.default, {
      color: "gray-100",
      variant: "platform1",
      onEvent: function onEvent(event) {
        return console.log(event);
      },
      data: props.data
    }), _react.default.createElement("div", {
      style: {
        width: '66%'
      }
    }, _react.default.createElement(_Select.default, {
      caption: "Industry",
      captionColor: props.controls.industry.loading ? "gray-40" : props.controls.industry.error ? "red" : null,
      className: "vh-general-section-industry ".concat(props.className ? props.className : ''),
      currentItem: props.currentItem,
      data: "industry",
      onEvent: function onEvent(e) {
        if (e.type === 'OnChange') {
          handleChange(e.props.item);
        }
      },
      items: props.items,
      isLoading: props.controls.industry.loading,
      description: props.controls.industry.error && props.controls.industry.message,
      descriptionColor: "red-light"
    }))), _react.default.createElement(_Grid.Row, {
      marginBottom5: true
    }, _react.default.createElement(_index.default, {
      color: "gray-100",
      variant: 'platform',
      text: "Role Title"
    }), _react.default.createElement(_Simple.default, {
      placeholder: "",
      onEvent: function onEvent(e) {
        console.log(e);
      }
    })), _react.default.createElement(_Grid.Row, {
      marginBottom5: true
    }, _react.default.createElement(_checkbox.default, {
      title: 'I am currently working in this role',
      color: "gray-100",
      variant: "platform1",
      data: '',
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
      onEvent: function onEvent(e) {
        console.log(e);
      }
    })), _react.default.createElement(_Grid.Row, {
      width: '40%'
    }, _react.default.createElement(_index.default, {
      color: "gray-100",
      variant: 'platform',
      text: "End Date"
    }), _react.default.createElement(_Simple.default, {
      placeholder: "",
      onEvent: function onEvent(e) {
        console.log(e);
      }
    }))), _react.default.createElement(_Grid.Row, {
      marginBottom5: true
    }, _react.default.createElement(_index.default, {
      color: "gray-100",
      variant: 'platform',
      text: "Description"
    }), _react.default.createElement(_index3.default, {
      description: props.description,
      onEvent: props.onEvent
    })), _react.default.createElement(_Grid.Row, {
      marginBottom5: true
    }, _react.default.createElement(_Select.default, {
      caption: "Skills used on this position",
      isMulti: true,
      captionColor: props.controls.skillsUsed.loading ? "gray-40" : props.controls.skillsUsed.error ? "red" : null,
      className: "vh-skillsUsed-section-skillsUsed ".concat(props.className ? props.className : ''),
      currentItem: props.workAs.current,
      data: "skillsUsed",
      onEvent: props.onEvent,
      items: props.workAs,
      isLoading: props.controls.skillsUsed.loading,
      description: props.controls.skillsUsed.error && props.controls.skillsUsed.message,
      descriptionColor: "red-light"
    })), _react.default.createElement(_Grid.Row, {
      alignItemsRight: true
    }, _react.default.createElement(_index2.default, {
      primary: true,
      onEvent: function onEvent(e) {},
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