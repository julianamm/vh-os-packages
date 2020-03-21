"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = [{
  color: '#00B8D9',
  isFixed: true,
  label: 'Item 1',
  value: 'c'
}, {
  color: '#0052CC',
  isDisabled: false,
  label: 'Item 2',
  value: 'b'
}, {
  color: '#0052CC',
  isDisabled: true,
  label: 'Item 3',
  value: 'o'
}];
(0, _react2.storiesOf)("Sections|General", module).add("Default", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    controls: {
      gender: {
        loading: false,
        error: true,
        success: false,
        message: 'Database error'
      },
      citizenship: {
        loading: false,
        error: false,
        success: false,
        message: 'Database error'
      },
      location: {
        loading: true,
        error: false,
        success: false,
        message: 'Database error'
      },
      phone: {
        loading: true,
        error: false,
        success: false,
        message: 'Database error'
      }
    },
    options: {
      gender: {
        items: items,
        currentItem: [items[1]]
      },
      currentLocation: {
        items: items,
        currentItem: [items[0]]
      },
      citizenship: {
        items: items,
        currentItem: [items[2]]
      }
    },
    phone: "+1 778 834 7347",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
});