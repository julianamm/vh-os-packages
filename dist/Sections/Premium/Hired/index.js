"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../../Grid/index");

var _index2 = _interopRequireDefault(require("../../../Components/Text/index"));

var _index3 = _interopRequireDefault(require("../../../Components/Cards/Hired/index"));

var _index4 = _interopRequireDefault(require("../../../Components/Button/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHPremiumHiredSection = function VHPremiumHiredSection(props) {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_index.Row, {
    alignItemsCenter: true,
    marginTop: 40,
    marginBottom: 30
  }, _react.default.createElement(_index2.default, {
    variant: "h2",
    color: "gray-100",
    text: props.sectionTitle
  })), _react.default.createElement(_index.Row, {
    row: true,
    marginBottom: 30
  }, props.candidates.map(function (candidate) {
    return _react.default.createElement(_index.Row, {
      style: {
        backgroundColor: "#f2f6f9",
        width: "180px",
        height: "180px",
        padding: "24px",
        marginRight: "10px"
      }
    }, _react.default.createElement(_index3.default, {
      name: candidate.name,
      position: candidate.position,
      country: candidate.country,
      userPhoto: candidate.userPhoto,
      flag: candidate.flag
    }));
  })), _react.default.createElement(_index.Row, {
    alignItemsCenter: true
  }, _react.default.createElement(_index.Row, {
    width: "30%"
  }, _react.default.createElement(_index4.default, {
    label: props.btnLabel,
    secondary: true,
    lg: true
  }))));
};

VHPremiumHiredSection.propTypes = {
  onEvent: _propTypes.default.func,
  data: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  className: _propTypes.default.string,
  sectionTitle: _propTypes.default.string,
  btnLabel: _propTypes.default.string,
  name: _propTypes.default.string,
  position: _propTypes.default.string,
  country: _propTypes.default.string,
  userPhoto: _propTypes.default.string,
  flag: _propTypes.default.string
};
var _default = VHPremiumHiredSection;
exports.default = _default;