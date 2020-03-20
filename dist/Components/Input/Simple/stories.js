"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)("Components|Input/Simple", module).add("default", function () {
  return _react.default.createElement("div", {
    style: {
      width: '80%',
      marginLeft: '1%',
      padding: '9px'
    }
  }, _react.default.createElement(_.default, {
    placeholder: "VH Simple Input",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
}).add("value", function () {
  return _react.default.createElement("div", {
    style: {
      width: '80%',
      marginLeft: '1%',
      padding: '9px'
    }
  }, _react.default.createElement(_.default, {
    value: "durand",
    placeholder: "VH Simple Input",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
}).add("loading", function () {
  return _react.default.createElement("div", {
    style: {
      width: '80%',
      marginLeft: '1%',
      padding: '9px'
    }
  }, _react.default.createElement(_.default, {
    value: "durand",
    loading: true,
    placeholder: "VH Simple Input",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
}).add("error", function () {
  return _react.default.createElement("div", {
    style: {
      width: '80%',
      marginLeft: '1%',
      padding: '9px'
    }
  }, _react.default.createElement(_.default, {
    value: "durand",
    error: "error from server",
    placeholder: "VH Simple Input",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvSW5wdXQvU2ltcGxlL3N0b3JpZXMuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiYWRkIiwid2lkdGgiLCJtYXJnaW5MZWZ0IiwicGFkZGluZyIsImUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOzs7O0FBRUEsdUJBQVUseUJBQVYsRUFBcUNBLE1BQXJDLEVBQ0dDLEdBREgsQ0FDTyxTQURQLEVBQ2tCO0FBQUEsU0FDZDtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUNDLE1BQUFBLEtBQUssRUFBRSxLQUFSO0FBQWVDLE1BQUFBLFVBQVUsRUFBQyxJQUExQjtBQUFnQ0MsTUFBQUEsT0FBTyxFQUFFO0FBQXpDO0FBQVosS0FDRSw2QkFBQyxTQUFEO0FBQVMsSUFBQSxXQUFXLEVBQUMsaUJBQXJCO0FBQXVDLElBQUEsT0FBTyxFQUFFLGlCQUFBQyxDQUFDLEVBQUk7QUFDckRDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaO0FBQ0Q7QUFGQyxJQURGLENBRGM7QUFBQSxDQURsQixFQVFHSixHQVJILENBUU8sT0FSUCxFQVFnQjtBQUFBLFNBQ1o7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFDQyxNQUFBQSxLQUFLLEVBQUUsS0FBUjtBQUFlQyxNQUFBQSxVQUFVLEVBQUMsSUFBMUI7QUFBZ0NDLE1BQUFBLE9BQU8sRUFBRTtBQUF6QztBQUFaLEtBQ0UsNkJBQUMsU0FBRDtBQUFTLElBQUEsS0FBSyxFQUFDLFFBQWY7QUFBd0IsSUFBQSxXQUFXLEVBQUMsaUJBQXBDO0FBQXNELElBQUEsT0FBTyxFQUFFLGlCQUFBQyxDQUFDLEVBQUk7QUFDcEVDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaO0FBQ0Q7QUFGQyxJQURGLENBRFk7QUFBQSxDQVJoQixFQWVHSixHQWZILENBZU8sU0FmUCxFQWVrQjtBQUFBLFNBQ2Q7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFDQyxNQUFBQSxLQUFLLEVBQUUsS0FBUjtBQUFlQyxNQUFBQSxVQUFVLEVBQUMsSUFBMUI7QUFBZ0NDLE1BQUFBLE9BQU8sRUFBRTtBQUF6QztBQUFaLEtBQ0UsNkJBQUMsU0FBRDtBQUFTLElBQUEsS0FBSyxFQUFDLFFBQWY7QUFBd0IsSUFBQSxPQUFPLE1BQS9CO0FBQWdDLElBQUEsV0FBVyxFQUFDLGlCQUE1QztBQUE4RCxJQUFBLE9BQU8sRUFBRSxpQkFBQUMsQ0FBQyxFQUFJO0FBQzVFQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNEO0FBRkMsSUFERixDQURjO0FBQUEsQ0FmbEIsRUFzQkdKLEdBdEJILENBc0JPLE9BdEJQLEVBc0JnQjtBQUFBLFNBQ1o7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFDQyxNQUFBQSxLQUFLLEVBQUUsS0FBUjtBQUFlQyxNQUFBQSxVQUFVLEVBQUMsSUFBMUI7QUFBZ0NDLE1BQUFBLE9BQU8sRUFBRTtBQUF6QztBQUFaLEtBQ0UsNkJBQUMsU0FBRDtBQUFTLElBQUEsS0FBSyxFQUFDLFFBQWY7QUFBd0IsSUFBQSxLQUFLLEVBQUMsbUJBQTlCO0FBQWtELElBQUEsV0FBVyxFQUFDLGlCQUE5RDtBQUFnRixJQUFBLE9BQU8sRUFBRSxpQkFBQUMsQ0FBQyxFQUFJO0FBQzlGQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNEO0FBRkMsSUFERixDQURZO0FBQUEsQ0F0QmhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc3Rvcmllc09mIH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIjtcbmltcG9ydCBWSElucHV0IGZyb20gXCIuXCI7XG5cbnN0b3JpZXNPZihcIkNvbXBvbmVudHN8SW5wdXQvU2ltcGxlXCIsIG1vZHVsZSlcbiAgLmFkZChcImRlZmF1bHRcIiwgKCkgPT4gKFxuICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogJzgwJScsIG1hcmdpbkxlZnQ6JzElJywgcGFkZGluZzogJzlweCd9fT5cbiAgICAgIDxWSElucHV0IHBsYWNlaG9sZGVyPVwiVkggU2ltcGxlIElucHV0XCIgb25FdmVudD17ZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlKVxuICAgIH19IC8+XG4gICAgPC9kaXY+XG4gICkpXG4gIC5hZGQoXCJ2YWx1ZVwiLCAoKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnODAlJywgbWFyZ2luTGVmdDonMSUnLCBwYWRkaW5nOiAnOXB4J319PlxuICAgICAgPFZISW5wdXQgdmFsdWU9XCJkdXJhbmRcIiBwbGFjZWhvbGRlcj1cIlZIIFNpbXBsZSBJbnB1dFwiIG9uRXZlbnQ9e2UgPT4ge1xuICAgICAgY29uc29sZS5sb2coZSlcbiAgICB9fSAvPlxuICAgIDwvZGl2PlxuICApKVxuICAuYWRkKFwibG9hZGluZ1wiLCAoKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnODAlJywgbWFyZ2luTGVmdDonMSUnLCBwYWRkaW5nOiAnOXB4J319PlxuICAgICAgPFZISW5wdXQgdmFsdWU9XCJkdXJhbmRcIiBsb2FkaW5nIHBsYWNlaG9sZGVyPVwiVkggU2ltcGxlIElucHV0XCIgb25FdmVudD17ZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlKVxuICAgIH19IC8+XG4gICAgPC9kaXY+XG4gICkpXG4gIC5hZGQoXCJlcnJvclwiLCAoKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnODAlJywgbWFyZ2luTGVmdDonMSUnLCBwYWRkaW5nOiAnOXB4J319PlxuICAgICAgPFZISW5wdXQgdmFsdWU9XCJkdXJhbmRcIiBlcnJvcj0nZXJyb3IgZnJvbSBzZXJ2ZXInIHBsYWNlaG9sZGVyPVwiVkggU2ltcGxlIElucHV0XCIgb25FdmVudD17ZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlKVxuICAgIH19IC8+XG4gICAgPC9kaXY+XG4gICkpXG4iXX0=