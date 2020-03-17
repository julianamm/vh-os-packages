"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("react-image-crop/dist/ReactCrop.css");

var _reactImageCrop = _interopRequireDefault(require("react-image-crop"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHImgCrop = function VHImgCrop(props) {
  return _react.default.createElement("p", null, "img crop");
};

VHImgCrop.defaultProps = {
  className: ''
};
VHImgCrop.propTypes = {};
var _default = VHImgCrop;
exports.default = _default;