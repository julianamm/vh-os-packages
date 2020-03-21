"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Components|Chips', module).add('primary', function () {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_.default, {
    primary: true,
    marginRight: true,
    onEvent: function onEvent(event) {
      console.log(event);
    },
    label: "VH chip"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    primary: true,
    marginRight: true,
    transparent: true,
    onEvent: function onEvent(event) {
      console.log(event);
    },
    label: "VH chip transparent"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    marginRight: true,
    danger: true,
    onEvent: function onEvent(event) {
      console.log(event);
    },
    label: "VH chip"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    marginRight: true,
    danger: true,
    transparent: true,
    onEvent: function onEvent(event) {
      console.log(event);
    },
    label: "VH chip transparent"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    marginRight: true,
    secondary: true,
    onEvent: function onEvent(event) {
      console.log(event);
    },
    label: "VH chip"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    marginRight: true,
    secondary: true,
    transparent: true,
    onEvent: function onEvent(event) {
      console.log(event);
    },
    label: "VH chip transparent"
  }));
}).add('round', function () {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_.default, {
    round: true,
    primary: true,
    marginRight: true,
    onEvent: function onEvent(event) {
      console.log(event);
    },
    label: "VH chip"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    round: true,
    primary: true,
    marginRight: true,
    transparent: true,
    onEvent: function onEvent(event) {
      console.log(event);
    },
    label: "VH chip transparent"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    round: true,
    marginRight: true,
    danger: true,
    onEvent: function onEvent(event) {
      console.log(event);
    },
    label: "VH chip"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    round: true,
    marginRight: true,
    danger: true,
    transparent: true,
    onEvent: function onEvent(event) {
      console.log(event);
    },
    label: "VH chip transparent"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    round: true,
    marginRight: true,
    secondary: true,
    onEvent: function onEvent(event) {
      console.log(event);
    },
    label: "VH chip"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    round: true,
    marginRight: true,
    secondary: true,
    transparent: true,
    onEvent: function onEvent(event) {
      console.log(event);
    },
    label: "VH chip transparent"
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQ2hpcHMvc3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJhZGQiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSx1QkFBVSxrQkFBVixFQUE4QkEsTUFBOUIsRUFFQ0MsR0FGRCxDQUVLLFNBRkwsRUFFZ0I7QUFBQSxzQkFDWiw2QkFBQyxjQUFELENBQU8sUUFBUCxxQkFDQSw2QkFBQyxTQUFEO0FBQ0ksSUFBQSxPQUFPLE1BRFg7QUFFSSxJQUFBLFdBQVcsTUFGZjtBQUdJLElBQUEsT0FBTyxFQUFFLGlCQUFBQyxLQUFLLEVBQUk7QUFDZEMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDSCxLQUxMO0FBTUksSUFBQSxLQUFLLEVBQUM7QUFOVixJQURBLGVBU0EsNkJBQUMsU0FBRDtBQUNJLElBQUEsT0FBTyxNQURYO0FBRUksSUFBQSxXQUFXLE1BRmY7QUFHSSxJQUFBLFdBQVcsTUFIZjtBQUlJLElBQUEsT0FBTyxFQUFFLGlCQUFBQSxLQUFLLEVBQUk7QUFDZEMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDSCxLQU5MO0FBT0ksSUFBQSxLQUFLLEVBQUM7QUFQVixJQVRBLGVBa0JBLDZCQUFDLFNBQUQ7QUFDSSxJQUFBLFdBQVcsTUFEZjtBQUVJLElBQUEsTUFBTSxNQUZWO0FBR0ksSUFBQSxPQUFPLEVBQUUsaUJBQUFBLEtBQUssRUFBSTtBQUNkQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNILEtBTEw7QUFNSSxJQUFBLEtBQUssRUFBQztBQU5WLElBbEJBLGVBMEJBLDZCQUFDLFNBQUQ7QUFDSSxJQUFBLFdBQVcsTUFEZjtBQUVJLElBQUEsTUFBTSxNQUZWO0FBR0ksSUFBQSxXQUFXLE1BSGY7QUFJSSxJQUFBLE9BQU8sRUFBRSxpQkFBQUEsS0FBSyxFQUFJO0FB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J3JlYWN0J1xuaW1wb3J0IHsgc3Rvcmllc09mIH0gZnJvbSAnQHN0b3J5Ym9vay9yZWFjdCdcbmltcG9ydCBWSENoaXAgZnJvbSAnLidcblxuc3Rvcmllc09mKCdDb21wb25lbnRzfENoaXBzJywgbW9kdWxlKVxuXG4uYWRkKCdwcmltYXJ5JywgKCkgPT4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8VkhDaGlwXG4gICAgICAgIHByaW1hcnlcbiAgICAgICAgbWFyZ2luUmlnaHRcbiAgICAgICAgb25FdmVudD17ZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpXG4gICAgICAgIH19XG4gICAgICAgIGxhYmVsPVwiVkggY2hpcFwiXG4gICAgLz5cbiAgICA8VkhDaGlwXG4gICAgICAgIHByaW1hcnlcbiAgICAgICAgbWFyZ2luUmlnaHRcbiAgICAgICAgdHJhbnNwYXJlbnRcbiAgICAgICAgb25FdmVudD17ZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpXG4gICAgICAgIH19XG4gICAgICAgIGxhYmVsPVwiVkggY2hpcCB0cmFuc3BhcmVudFwiXG4gICAgLz5cbiAgICA8VkhDaGlwXG4gICAgICAgIG1hcmdpblJpZ2h0XG4gICAgICAgIGRhbmdlclxuICAgICAgICBvbkV2ZW50PXtldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudClcbiAgICAgICAgfX1cbiAgICAgICAgbGFiZWw9XCJWSCBjaGlwXCJcbiAgICAvPlxuICAgIDxWSENoaXBcbiAgICAgICAgbWFyZ2luUmlnaHRcbiAgICAgICAgZGFuZ2VyXG4gICAgICAgIHRyYW5zcGFyZW50XG4gICAgICAgIG9uRXZlbnQ9e2V2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KVxuICAgICAgICB9fVxuICAgICAgICBsYWJlbD1cIlZIIGNoaXAgdHJhbnNwYXJlbnRcIlxuICAgIC8+XG4gICAgPFZIQ2hpcFxuICAgICAgICBtYXJnaW5SaWdodFxuICAgICAgICBzZWNvbmRhcnlcbiAgICAgICAgb25FdmVudD17ZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpXG4gICAgICAgIH19XG4gICAgICAgIGxhYmVsPVwiVkggY2hpcFwiXG4gICAgLz5cbiAgICA8VkhDaGlwXG4gICAgICAgIG1hcmdpblJpZ2h0XG4gICAgICAgIHNlY29uZGFyeVxuICAgICAgICB0cmFuc3BhcmVudFxuICAgICAgICBvbkV2ZW50PXtldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudClcbiAgICAgICAgfX1cbiAgICAgICAgbGFiZWw9XCJWSCBjaGlwIHRyYW5zcGFyZW50XCJcbiAgICAvPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4pKVxuLmFkZCgncm91bmQnLCAoKSA9PiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxWSENoaXBcbiAgICAgICAgcm91bmRcbiAgICAgICAgcHJpbWFyeVxuICAgICAgICBtYXJnaW5SaWdodFxuICAgICAgICBvbkV2ZW50PXtldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudClcbiAgICAgICAgfX1cbiAgICAgICAgbGFiZWw9XCJWSCBjaGlwXCJcbiAgICAvPlxuICAgIDxWSENoaXBcbiAgICAgICAgcm91bmRcbiAgICAgICAgcHJpbWFyeVxuICAgICAgICBtYXJnaW5SaWdodFxuICAgICAgICB0cmFuc3BhcmVudFxuICAgICAgICBvbkV2ZW50PXtldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudClcbiAgICAgICAgfX1cbiAgICAgICAgbGFiZWw9XCJWSCBjaGlwIHRyYW5zcGFyZW50XCJcbiAgICAvPlxuICAgIDxWSENoaXBcbiAgICAgICAgcm91bmRcbiAgICAgICAgbWFyZ2luUmlnaHRcbiAgICAgICAgZGFuZ2VyXG4gICAgICAgIG9uRXZlbnQ9e2V2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KVxuICAgICAgICB9fVxuICAgICAgICBsYWJlbD1cIlZIIGNoaXBcIlxuICAgIC8+XG4gICAgPFZIQ2hpcFxuICAgICAgICByb3VuZFxuICAgICAgICBtYXJnaW5SaWdodFxuICAgICAgICBkYW5nZXJcbiAgICAgICAgdHJhbnNwYXJlbnRcbiAgICAgICAgb25FdmVudD17ZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpXG4gICAgICAgIH19XG4gICAgICAgIGxhYmVsPVwiVkggY2hpcCB0cmFuc3BhcmVudFwiXG4gICAgLz5cbiAgICA8VkhDaGlwXG4gICAgICAgIHJvdW5kXG4gICAgICAgIG1hcmdpblJpZ2h0XG4gICAgICAgIHNlY29uZGFyeVxuICAgICAgICBvbkV2ZW50PXtldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudClcbiAgICAgICAgfX1cbiAgICAgICAgbGFiZWw9XCJWSCBjaGlwXCJcbiAgICAvPlxuICAgIDxWSENoaXBcbiAgICAgICAgcm91bmRcbiAgICAgICAgbWFyZ2luUmlnaHRcbiAgICAgICAgc2Vjb25kYXJ5XG4gICAgICAgIHRyYW5zcGFyZW50XG4gICAgICAgIG9uRXZlbnQ9e2V2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KVxuICAgICAgICB9fVxuICAgICAgICBsYWJlbD1cIlZIIGNoaXAgdHJhbnNwYXJlbnRcIlxuICAgIC8+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbikpXG4iXX0=