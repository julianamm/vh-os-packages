"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = {
  textPromo: "Get up to 50% off on VanHack Premium",
  numDays: "03",
  days: "Days",
  numHours: "12",
  hours: "Hours",
  numMin: "16",
  min: "Min",
  numSec: "22",
  sec: "Sec",
  label: "Get Promo"
};
(0, _react2.storiesOf)("Components|Promo Bar", module).add("Types", function () {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_.default, {
    textPromo: items.textPromo,
    numDays: items.numDays,
    days: items.days,
    numHours: items.numHours,
    hours: items.hours,
    numMin: items.numMin,
    min: items.min,
    numSec: items.numSec,
    sec: items.sec,
    label: items.label,
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
});