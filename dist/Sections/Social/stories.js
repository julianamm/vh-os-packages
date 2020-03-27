"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)("Sections|Social", module).add("Default", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    controls: {
      linkedin: {
        loading: true,
        error: false,
        success: false,
        message: 'Database error'
      },
      github: {
        loading: false,
        error: true,
        success: false,
        message: 'Database error'
      },
      world: {
        loading: false,
        error: false,
        success: false,
        message: 'Database error'
      }
    },
    data: {
      linkedin: {
        value: '123'
      },
      github: {
        value: '123'
      },
      world: {
        value: '123'
      }
    },
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
}).add("Preloading", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    preLoading: true,
    controls: {
      linkedin: {
        loading: true,
        error: false,
        success: false,
        message: 'Database error'
      },
      github: {
        loading: false,
        error: true,
        success: false,
        message: 'Database error'
      },
      world: {
        loading: false,
        error: false,
        success: false,
        message: 'Database error'
      }
    },
    data: {
      linkedin: {
        value: '123'
      },
      github: {
        value: '123'
      },
      world: {
        value: '123'
      }
    },
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
});