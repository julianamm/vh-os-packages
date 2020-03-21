"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Components|Buttons/WhiteBorder', module).add('Outlined', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#0074D9",
      width: "100%",
      height: "200px",
      textAlign: "center",
      paddingTop: "30px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    white: true,
    outline: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)(e);
    },
    label: "VHButton"
  }));
}).add('Disabled', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#0074D9",
      width: "100%",
      height: "200px",
      textAlign: "center",
      paddingTop: "30px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    white: true,
    outline: true,
    disabled: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)(e);
    },
    label: "VHButton"
  }));
}).add('Full size', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#0074D9",
      width: "100%",
      height: "200px",
      textAlign: "center",
      padding: "30px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    white: true,
    outline: true,
    disabled: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)(e);
    },
    label: "VHButton"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_.default, {
    white: true,
    outline: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)(e);
    },
    label: "VHButton"
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQnV0dG9uL3dpdGhlQm9yZGVyLnN0b3JpZXMuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiYWRkIiwiYmFja2dyb3VuZENvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nVG9wIiwiZSIsInBhZGRpbmciXSwibWFwcGluZ3MiOiI7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7QUFFQSx1QkFBVSxnQ0FBVixFQUE0Q0EsTUFBNUMsRUFFR0MsR0FGSCxDQUVPLFVBRlAsRUFFbUI7QUFBQSxzQkFDZjtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLGVBQWUsRUFBRSxTQUFuQjtBQUE4QkMsTUFBQUEsS0FBSyxFQUFFLE1BQXJDO0FBQTZDQyxNQUFBQSxNQUFNLEVBQUUsT0FBckQ7QUFBOERDLE1BQUFBLFNBQVMsRUFBRSxRQUF6RTtBQUFtRkMsTUFBQUEsVUFBVSxFQUFFO0FBQS9GO0FBQVosa0JBQ0UsNkJBQUMsU0FBRDtBQUFVLElBQUEsS0FBSyxNQUFmO0FBQWdCLElBQUEsT0FBTyxNQUF2QjtBQUF3QixJQUFBLE9BQU8sRUFBRSxpQkFBQUMsQ0FBQyxFQUFJO0FBQ3BDLGdDQUFPQSxDQUFQO0FBQ0QsS0FGRDtBQUVHLElBQUEsS0FBSyxFQUFDO0FBRlQsSUFERixDQURlO0FBQUEsQ0FGbkIsRUFVR04sR0FWSCxDQVVPLFVBVlAsRUFVbUI7QUFBQSxzQkFDZjtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLGVBQWUsRUFBRSxTQUFuQjtBQUE4QkMsTUFBQUEsS0FBSyxFQUFFLE1BQXJDO0FBQTZDQyxNQUFBQSxNQUFNLEVBQUUsT0FBckQ7QUFBOERDLE1BQUFBLFNBQVMsRUFBRSxRQUF6RTtBQUFtRkMsTUFBQUEsVUFBVSxFQUFFO0FBQS9GO0FBQVosa0JBQ0UsNkJBQUMsU0FBRDtBQUFVLElBQUEsS0FBSyxNQUFmO0FBQWdCLElBQUEsT0FBTyxNQUF2QjtBQUF3QixJQUFBLFFBQVEsTUFBaEM7QUFBaUMsSUFBQSxPQUFPLEVBQUUsaUJBQUFDLENBQUMsRUFBSTtBQUM3QyxnQ0FBT0EsQ0FBUDtBQUNELEtBRkQ7QUFFRyxJQUFBLEtBQUssRUFBQztBQUZULElBREYsQ0FEZTtBQUFBLENBVm5CLEVBa0JHTixHQWxCSCxDQWtCTyxXQWxCUCxFQWtCb0I7QUFBQSxzQkFDaEI7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxlQUFlLEVBQUUsU0FBbkI7QUFBOEJDLE1BQUFBLEtBQUssRUFBRSxNQUFyQztBQUE2Q0MsTUFBQUEsTUFBTSxFQUFFLE9BQXJEO0FBQThEQyxNQUFBQSxTQUFTLEVBQUUsUUFBekU7QUFBbUZHLE1BQUFBLE9BQU8sRUFBRTtBQUE1RjtBQUFaLGtCQUNFLDZCQUFDLFNBQUQ7QUFBVSxJQUFBLEtBQUssTUFBZjtBQUFnQixJQUFBLE9BQU8sTUFBdkI7QUFBd0IsSUFBQSxRQUFRLE1BQWhDO0FBQWlDLElBQUEsSUFBSSxNQUFyQztBQUFzQyxJQUFBLE9BQU8sRUFBRSxpQkFBQUQsQ0FBQyxFQUFJO0FBQ2xELGdDQUFPQSxDQUFQO0FBQ0QsS0FGRDtBQUVHLElBQUEsS0FBSyxFQUFDO0FBRlQsSUFERixlQUlFLHdDQUpGLGVBS0Usd0NBTEYsZUFNRSw2QkFBQyxTQUFEO0FBQVUsSUFBQSxLQUFLLE1BQWY7QUFBZ0IsSUFBQSxPQUFPLE1BQXZCO0FBQXdCLElBQUEsSUFBSSxNQUE1QjtBQUE2QixJQUFBLE9BQU8sRUFBRSxpQkFBQUEsQ0FBQyxFQUFJO0FBQ3pDLGdDQUFPQSxDQUFQO0FBQ0QsS0FGRDtBQUVHLElBQUEsS0FBSyxFQUFDO0FBRlQsSUFORixDQURnQjtBQUFBLENBbEJwQiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgc3Rvcmllc09mIH0gZnJvbSAnQHN0b3J5Ym9vay9yZWFjdCc7XG5pbXBvcnQgeyBhY3Rpb24gfSBmcm9tICdAc3Rvcnlib29rL2FkZG9uLWFjdGlvbnMnO1xuXG5pbXBvcnQgVkhCdXR0b24gZnJvbSAnLic7XG5cbnN0b3JpZXNPZignQ29tcG9uZW50c3xCdXR0b25zL1doaXRlQm9yZGVyJywgbW9kdWxlKVxuXG4gIC5hZGQoJ091dGxpbmVkJywgKCkgPT4gKFxuICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMwMDc0RDlcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMjAwcHhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBwYWRkaW5nVG9wOiBcIjMwcHhcIiB9fT5cbiAgICAgIDxWSEJ1dHRvbiB3aGl0ZSBvdXRsaW5lIG9uRXZlbnQ9e2UgPT4ge1xuICAgICAgICBhY3Rpb24oZSlcbiAgICAgIH19IGxhYmVsPVwiVkhCdXR0b25cIiAvPlxuICAgIDwvZGl2PlxuICApKVxuXG4gIC5hZGQoJ0Rpc2FibGVkJywgKCkgPT4gKFxuICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMwMDc0RDlcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMjAwcHhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBwYWRkaW5nVG9wOiBcIjMwcHhcIiB9fT5cbiAgICAgIDxWSEJ1dHRvbiB3aGl0ZSBvdXRsaW5lIGRpc2FibGVkIG9uRXZlbnQ9e2UgPT4ge1xuICAgICAgICBhY3Rpb24oZSlcbiAgICAgIH19IGxhYmVsPVwiVkhCdXR0b25cIiAvPlxuICAgIDwvZGl2PlxuICApKVxuXG4gIC5hZGQoJ0Z1bGwgc2l6ZScsICgpID0+IChcbiAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjMDA3NEQ5XCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjIwMHB4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgcGFkZGluZzogXCIzMHB4XCIgfX0+XG4gICAgICA8VkhCdXR0b24gd2hpdGUgb3V0bGluZSBkaXNhYmxlZCBmdWxsIG9uRXZlbnQ9e2UgPT4ge1xuICAgICAgICBhY3Rpb24oZSlcbiAgICAgIH19IGxhYmVsPVwiVkhCdXR0b25cIiAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxWSEJ1dHRvbiB3aGl0ZSBvdXRsaW5lIGZ1bGwgb25FdmVudD17ZSA9PiB7XG4gICAgICAgIGFjdGlvbihlKVxuICAgICAgfX0gbGFiZWw9XCJWSEJ1dHRvblwiIC8+XG4gICAgPC9kaXYgPlxuICApKVxuIl19