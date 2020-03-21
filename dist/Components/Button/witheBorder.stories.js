"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Components|Buttons/WhiteBorder', module).add('Outlined', function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#0074D9",
      width: "100%",
      height: "200px",
      textAlign: "center",
      paddingTop: "30px"
    }
  }, _react.default.createElement(_.default, {
    white: true,
    outline: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)(e);
    },
    label: "VHButton"
  }));
}).add('Disabled', function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#0074D9",
      width: "100%",
      height: "200px",
      textAlign: "center",
      paddingTop: "30px"
    }
  }, _react.default.createElement(_.default, {
    white: true,
    outline: true,
    disabled: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)(e);
    },
    label: "VHButton"
  }));
}).add('Full size', function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#0074D9",
      width: "100%",
      height: "200px",
      textAlign: "center",
      padding: "30px"
    }
  }, _react.default.createElement(_.default, {
    white: true,
    outline: true,
    disabled: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)(e);
    },
    label: "VHButton"
  }), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement(_.default, {
    white: true,
    outline: true,
    full: true,
    onEvent: function onEvent(e) {
      (0, _addonActions.action)(e);
    },
    label: "VHButton"
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQnV0dG9uL3dpdGhlQm9yZGVyLnN0b3JpZXMuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiYWRkIiwiYmFja2dyb3VuZENvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nVG9wIiwiZSIsInBhZGRpbmciXSwibWFwcGluZ3MiOiI7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7QUFFQSx1QkFBVSxnQ0FBVixFQUE0Q0EsTUFBNUMsRUFFR0MsR0FGSCxDQUVPLFVBRlAsRUFFbUI7QUFBQSxTQUNmO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsZUFBZSxFQUFFLFNBQW5CO0FBQThCQyxNQUFBQSxLQUFLLEVBQUUsTUFBckM7QUFBNkNDLE1BQUFBLE1BQU0sRUFBRSxPQUFyRDtBQUE4REMsTUFBQUEsU0FBUyxFQUFFLFFBQXpFO0FBQW1GQyxNQUFBQSxVQUFVLEVBQUU7QUFBL0Y7QUFBWixLQUNFLDZCQUFDLFNBQUQ7QUFBVSxJQUFBLEtBQUssTUFBZjtBQUFnQixJQUFBLE9BQU8sTUFBdkI7QUFBd0IsSUFBQSxPQUFPLEVBQUUsaUJBQUFDLENBQUMsRUFBSTtBQUNwQyxnQ0FBT0EsQ0FBUDtBQUNELEtBRkQ7QUFFRyxJQUFBLEtBQUssRUFBQztBQUZULElBREYsQ0FEZTtBQUFBLENBRm5CLEVBVUdOLEdBVkgsQ0FVTyxVQVZQLEVBVW1CO0FBQUEsU0FDZjtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLGVBQWUsRUFBRSxTQUFuQjtBQUE4QkMsTUFBQUEsS0FBSyxFQUFFLE1BQXJDO0FBQTZDQyxNQUFBQSxNQUFNLEVBQUUsT0FBckQ7QUFBOERDLE1BQUFBLFNBQVMsRUFBRSxRQUF6RTtBQUFtRkMsTUFBQUEsVUFBVSxFQUFFO0FBQS9GO0FBQVosS0FDRSw2QkFBQyxTQUFEO0FBQVUsSUFBQSxLQUFLLE1BQWY7QUFBZ0IsSUFBQSxPQUFPLE1BQXZCO0FBQXdCLElBQUEsUUFBUSxNQUFoQztBQUFpQyxJQUFBLE9BQU8sRUFBRSxpQkFBQUMsQ0FBQyxFQUFJO0FBQzdDLGdDQUFPQSxDQUFQO0FBQ0QsS0FGRDtBQUVHLElBQUEsS0FBSyxFQUFDO0FBRlQsSUFERixDQURlO0FBQUEsQ0FWbkIsRUFrQkdOLEdBbEJILENBa0JPLFdBbEJQLEVBa0JvQjtBQUFBLFNBQ2hCO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsZUFBZSxFQUFFLFNBQW5CO0FBQThCQyxNQUFBQSxLQUFLLEVBQUUsTUFBckM7QUFBNkNDLE1BQUFBLE1BQU0sRUFBRSxPQUFyRDtBQUE4REMsTUFBQUEsU0FBUyxFQUFFLFFBQXpFO0FBQW1GRyxNQUFBQSxPQUFPLEVBQUU7QUFBNUY7QUFBWixLQUNFLDZCQUFDLFNBQUQ7QUFBVSxJQUFBLEtBQUssTUFBZjtBQUFnQixJQUFBLE9BQU8sTUFBdkI7QUFBd0IsSUFBQSxRQUFRLE1BQWhDO0FBQWlDLElBQUEsSUFBSSxNQUFyQztBQUFzQyxJQUFBLE9BQU8sRUFBRSxpQkFBQUQsQ0FBQyxFQUFJO0FBQ2xELGdDQUFPQSxDQUFQO0FBQ0QsS0FGRDtBQUVHLElBQUEsS0FBSyxFQUFDO0FBRlQsSUFERixFQUlFLHdDQUpGLEVBS0Usd0NBTEYsRUFNRSw2QkFBQyxTQUFEO0FBQVUsSUFBQSxLQUFLLE1BQWY7QUFBZ0IsSUFBQSxPQUFPLE1BQXZCO0FBQXdCLElBQUEsSUFBSSxNQUE1QjtBQUE2QixJQUFBLE9BQU8sRUFBRSxpQkFBQUEsQ0FBQyxFQUFJO0FBQ3pDLGdDQUFPQSxDQUFQO0FBQ0QsS0FGRDtBQUVHLElBQUEsS0FBSyxFQUFDO0FBRlQsSUFORixDQURnQjtBQUFBLENBbEJwQiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgc3Rvcmllc09mIH0gZnJvbSAnQHN0b3J5Ym9vay9yZWFjdCc7XG5pbXBvcnQgeyBhY3Rpb24gfSBmcm9tICdAc3Rvcnlib29rL2FkZG9uLWFjdGlvbnMnO1xuXG5pbXBvcnQgVkhCdXR0b24gZnJvbSAnLic7XG5cbnN0b3JpZXNPZignQ29tcG9uZW50c3xCdXR0b25zL1doaXRlQm9yZGVyJywgbW9kdWxlKVxuXG4gIC5hZGQoJ091dGxpbmVkJywgKCkgPT4gKFxuICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMwMDc0RDlcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMjAwcHhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBwYWRkaW5nVG9wOiBcIjMwcHhcIiB9fT5cbiAgICAgIDxWSEJ1dHRvbiB3aGl0ZSBvdXRsaW5lIG9uRXZlbnQ9e2UgPT4ge1xuICAgICAgICBhY3Rpb24oZSlcbiAgICAgIH19IGxhYmVsPVwiVkhCdXR0b25cIiAvPlxuICAgIDwvZGl2PlxuICApKVxuXG4gIC5hZGQoJ0Rpc2FibGVkJywgKCkgPT4gKFxuICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMwMDc0RDlcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMjAwcHhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBwYWRkaW5nVG9wOiBcIjMwcHhcIiB9fT5cbiAgICAgIDxWSEJ1dHRvbiB3aGl0ZSBvdXRsaW5lIGRpc2FibGVkIG9uRXZlbnQ9e2UgPT4ge1xuICAgICAgICBhY3Rpb24oZSlcbiAgICAgIH19IGxhYmVsPVwiVkhCdXR0b25cIiAvPlxuICAgIDwvZGl2PlxuICApKVxuXG4gIC5hZGQoJ0Z1bGwgc2l6ZScsICgpID0+IChcbiAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjMDA3NEQ5XCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjIwMHB4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgcGFkZGluZzogXCIzMHB4XCIgfX0+XG4gICAgICA8VkhCdXR0b24gd2hpdGUgb3V0bGluZSBkaXNhYmxlZCBmdWxsIG9uRXZlbnQ9e2UgPT4ge1xuICAgICAgICBhY3Rpb24oZSlcbiAgICAgIH19IGxhYmVsPVwiVkhCdXR0b25cIiAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxWSEJ1dHRvbiB3aGl0ZSBvdXRsaW5lIGZ1bGwgb25FdmVudD17ZSA9PiB7XG4gICAgICAgIGFjdGlvbihlKVxuICAgICAgfX0gbGFiZWw9XCJWSEJ1dHRvblwiIC8+XG4gICAgPC9kaXYgPlxuICApKVxuIl19