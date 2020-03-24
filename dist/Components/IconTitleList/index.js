"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = _interopRequireDefault(require("../IconText/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHIconTitleList = function VHIconTitleList(props) {
  if (!Array.isArray(props.items)) {
    return /*#__PURE__*/_react.default.createElement(_index.default, {
      iconColor: props.color || "gray-30",
      textColor: props.color || "gray-90",
      text: props.items,
      icon: "bullet",
      className: "vh-icon-title-list ".concat(props.className ? props.className : ''),
      variant: "platform",
      data: props.data,
      onEvent: props.onEvent
    });
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.items.map(function (text) {
    return /*#__PURE__*/_react.default.createElement(_index.default, {
      iconColor: props.color || "gray-30",
      textColor: props.color || "gray-90",
      text: text.label,
      icon: "bullet",
      className: "vh-icon-title-list ".concat(props.className ? props.className : ''),
      variant: "platform",
      data: props.data,
      onEvent: props.onEvent
    });
  }));
};

VHIconTitleList.propTypes = {
  onEvent: _propTypes.default.func,
  items: _propTypes.default.array.isRequired,
  data: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  className: _propTypes.default.string
};
var _default = VHIconTitleList;
exports.default = _default;