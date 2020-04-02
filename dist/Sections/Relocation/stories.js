"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var education = [{
  title: 'Specilist, Interaction Desing',
  subTitle: 'Pontifícia Universidade Católica de Minas Gerais'
}, {
  title: 'Specilist, Interaction Desing',
  subTitle: 'Pontifícia Universidade Católica de Minas Gerais'
}];
var items = [{
  value: 0,
  label: 'No degree'
}, {
  value: 1,
  label: 'College (two-year degree)'
}, {
  value: 2,
  label: 'Bachelor’s'
}, {
  value: 3,
  label: 'Master’s'
}, {
  value: 4,
  label: 'PhD'
}];
var currentItem = [items[4]];
var controls = {
  salaryRangeCad: {
    loading: false,
    success: true,
    error: false
  },
  salaryRangeEur: {
    loading: false,
    success: true,
    error: false
  },
  visaStatusEU: {
    loading: false,
    success: true,
    error: false
  },
  visaStatusCanadian: {
    loading: false,
    success: true,
    error: false
  },
  companySize: {
    loading: false,
    success: true,
    error: false
  }
};
(0, _react2.storiesOf)("Sections|Relocation", module).add("Default", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    education: education,
    items: items,
    currentItem: currentItem,
    controls: controls,
    loading: true,
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
}).add("preloading", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    education: education,
    items: items,
    currentItem: currentItem,
    controls: controls,
    preLoading: true,
    loading: true,
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
});