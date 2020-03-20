"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)("Components|Skeleton/Avatar", module).add("Default", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh"
    }
  }, _react.default.createElement(_.default, null));
}).add("red", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh"
    }
  }, _react.default.createElement(_.default, {
    red: true
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvU2tlbGV0b24vQXZhdGFyL3N0b3JpZXMuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiYWRkIiwiYmFja2dyb3VuZENvbG9yIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOzs7O0FBRUEsdUJBQVUsNEJBQVYsRUFBd0NBLE1BQXhDLEVBQ0tDLEdBREwsQ0FDUyxTQURULEVBQ29CO0FBQUEsU0FDWjtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLGVBQWUsRUFBRSxTQUFuQjtBQUE4QkMsTUFBQUEsTUFBTSxFQUFFO0FBQXRDO0FBQVosS0FDSSw2QkFBQyxTQUFELE9BREosQ0FEWTtBQUFBLENBRHBCLEVBTUtGLEdBTkwsQ0FNUyxLQU5ULEVBTWdCO0FBQUEsU0FDUjtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLGVBQWUsRUFBRSxTQUFuQjtBQUE4QkMsTUFBQUEsTUFBTSxFQUFFO0FBQXRDO0FBQVosS0FDSSw2QkFBQyxTQUFEO0FBQWtCLElBQUEsR0FBRztBQUFyQixJQURKLENBRFE7QUFBQSxDQU5oQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0b3JpZXNPZiB9IGZyb20gXCJAc3Rvcnlib29rL3JlYWN0XCI7XG5pbXBvcnQgVkhBdmF0YXJTa2VsZXRvbiBmcm9tIFwiLlwiO1xuXG5zdG9yaWVzT2YoXCJDb21wb25lbnRzfFNrZWxldG9uL0F2YXRhclwiLCBtb2R1bGUpXG4gICAgLmFkZChcIkRlZmF1bHRcIiwgKCkgPT4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjZjJmMmYyXCIsIGhlaWdodDogXCIxMDB2aFwifX0+XG4gICAgICAgICAgICA8VkhBdmF0YXJTa2VsZXRvbiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApKVxuICAgIC5hZGQoXCJyZWRcIiwgKCkgPT4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjZjJmMmYyXCIsIGhlaWdodDogXCIxMDB2aFwifX0+XG4gICAgICAgICAgICA8VkhBdmF0YXJTa2VsZXRvbiByZWQvPlxuICAgICAgICA8L2Rpdj5cbiAgICApKVxuIl19