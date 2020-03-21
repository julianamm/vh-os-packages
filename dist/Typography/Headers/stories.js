"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Typography|Headers', module).add('Default', function () {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_.default, {
    h1: true,
    label: "H1 - med 36/48"
  }), _react.default.createElement(_.default, {
    h2: true,
    label: "H2 - med 32/40"
  }), _react.default.createElement(_.default, {
    h3: true,
    label: "H3 - med 28/36"
  }), _react.default.createElement(_.default, {
    h4: true,
    label: "H4 - med 24/32"
  }), _react.default.createElement(_.default, {
    h5: true,
    label: "H5 - med 20/24"
  }), _react.default.createElement(_.default, {
    h6: true,
    label: "H6 - med 16/20"
  }));
}).add('Reverse', function () {
  return _react.default.createElement("div", {
    style: {
      background: _Colors.default["primary-dark"],
      padding: '8px'
    }
  }, _react.default.createElement(_.default, {
    reverse: true,
    h1: true,
    label: "H1 - med 36/48"
  }), _react.default.createElement(_.default, {
    reverse: true,
    h2: true,
    label: "H2 - med 32/40"
  }), _react.default.createElement(_.default, {
    reverse: true,
    h3: true,
    label: "H3 - med 28/36"
  }), _react.default.createElement(_.default, {
    reverse: true,
    h4: true,
    label: "H4 - med 24/32"
  }), _react.default.createElement(_.default, {
    reverse: true,
    h5: true,
    label: "H5 - med 20/24"
  }), _react.default.createElement(_.default, {
    reverse: true,
    h6: true,
    label: "H6 - med 16/20"
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL1R5cG9ncmFwaHkvSGVhZGVycy9zdG9yaWVzLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImFkZCIsImJhY2tncm91bmQiLCJDb2xvciIsInBhZGRpbmciXSwibWFwcGluZ3MiOiI7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSx1QkFBVSxvQkFBVixFQUFnQ0EsTUFBaEMsRUFDR0MsR0FESCxDQUNPLFNBRFAsRUFDa0I7QUFBQSxTQUNkLDZCQUFDLGNBQUQsQ0FBTyxRQUFQLFFBQ0UsNkJBQUMsU0FBRDtBQUFTLElBQUEsRUFBRSxNQUFYO0FBQVksSUFBQSxLQUFLLEVBQUM7QUFBbEIsSUFERixFQUVFLDZCQUFDLFNBQUQ7QUFBUyxJQUFBLEVBQUUsTUFBWDtBQUFZLElBQUEsS0FBSyxFQUFDO0FBQWxCLElBRkYsRUFHRSw2QkFBQyxTQUFEO0FBQVMsSUFBQSxFQUFFLE1BQVg7QUFBWSxJQUFBLEtBQUssRUFBQztBQUFsQixJQUhGLEVBSUUsNkJBQUMsU0FBRDtBQUFTLElBQUEsRUFBRSxNQUFYO0FBQVksSUFBQSxLQUFLLEVBQUM7QUFBbEIsSUFKRixFQUtFLDZCQUFDLFNBQUQ7QUFBUyxJQUFBLEVBQUUsTUFBWDtBQUFZLElBQUEsS0FBSyxFQUFDO0FBQWxCLElBTEYsRUFNRSw2QkFBQyxTQUFEO0FBQVMsSUFBQSxFQUFFLE1BQVg7QUFBWSxJQUFBLEtBQUssRUFBQztBQUFsQixJQU5GLENBRGM7QUFBQSxDQURsQixFQVdHQSxHQVhILENBV08sU0FYUCxFQVdrQjtBQUFBLFNBQ2Q7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxVQUFVLEVBQUVDLGdCQUFNLGNBQU4sQ0FBZDtBQUFxQ0MsTUFBQUEsT0FBTyxFQUFFO0FBQTlDO0FBQVosS0FDRSw2QkFBQyxTQUFEO0FBQVMsSUFBQSxPQUFPLE1BQWhCO0FBQWlCLElBQUEsRUFBRSxNQUFuQjtBQUFvQixJQUFBLEtBQUssRUFBQztBQUExQixJQURGLEVBRUUsNkJBQUMsU0FBRDtBQUFTLElBQUEsT0FBTyxNQUFoQjtBQUFpQixJQUFBLEVBQUUsTUFBbkI7QUFBb0IsSUFBQSxLQUFLLEVBQUM7QUFBMUIsSUFGRixFQUdFLDZCQUFDLFNBQUQ7QUFBUyxJQUFBLE9BQU8sTUFBaEI7QUFBaUIsSUFBQSxFQUFFLE1BQW5CO0FBQW9CLElBQUEsS0FBSyxFQUFDO0FBQTFCLElBSEYsRUFJRSw2QkFBQyxTQUFEO0FBQVMsSUFBQSxPQUFPLE1BQWhCO0FBQWlCLElBQUEsRUFBRSxNQUFuQjtBQUFvQixJQUFBLEtBQUssRUFBQztBQUExQixJQUpGLEVBS0UsNkJBQUMsU0FBRDtBQUFTLElBQUEsT0FBTyxNQUFoQjtBQUFpQixJQUFBLEVBQUUsTUFBbkI7QUFBb0IsSUFBQSxLQUFLLEVBQUM7QUFBMUIsSUFMRixFQU1FLDZCQUFDLFNBQUQ7QUFBUyxJQUFBLE9BQU8sTUFBaEI7QUFBaUIsSUFBQSxFQUFFLE1BQW5CO0FBQW9CLElBQUEsS0FBSyxFQUFDO0FBQTFCLElBTkYsQ0FEYztBQUFBLENBWGxCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc3Rvcmllc09mIH0gZnJvbSAnQHN0b3J5Ym9vay9yZWFjdCc7XG5pbXBvcnQgVkhUaXRsZSBmcm9tICcuJztcbmltcG9ydCBDb2xvciBmcm9tICcuLi8uLi9Db2xvcnMnXG5cbnN0b3JpZXNPZignVHlwb2dyYXBoeXxIZWFkZXJzJywgbW9kdWxlKVxuICAuYWRkKCdEZWZhdWx0JywgKCkgPT4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxWSFRpdGxlIGgxIGxhYmVsPVwiSDEgLSBtZWQgMzYvNDhcIiAvPlxuICAgICAgPFZIVGl0bGUgaDIgbGFiZWw9XCJIMiAtIG1lZCAzMi80MFwiIC8+XG4gICAgICA8VkhUaXRsZSBoMyBsYWJlbD1cIkgzIC0gbWVkIDI4LzM2XCIgLz5cbiAgICAgIDxWSFRpdGxlIGg0IGxhYmVsPVwiSDQgLSBtZWQgMjQvMzJcIiAvPlxuICAgICAgPFZIVGl0bGUgaDUgbGFiZWw9XCJINSAtIG1lZCAyMC8yNFwiIC8+XG4gICAgICA8VkhUaXRsZSBoNiBsYWJlbD1cIkg2IC0gbWVkIDE2LzIwXCIgLz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApKVxuICAuYWRkKCdSZXZlcnNlJywgKCkgPT4gKFxuICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogQ29sb3JbXCJwcmltYXJ5LWRhcmtcIl0sIHBhZGRpbmc6ICc4cHgnIH19PlxuICAgICAgPFZIVGl0bGUgcmV2ZXJzZSBoMSBsYWJlbD1cIkgxIC0gbWVkIDM2LzQ4XCIgLz5cbiAgICAgIDxWSFRpdGxlIHJldmVyc2UgaDIgbGFiZWw9XCJIMiAtIG1lZCAzMi80MFwiIC8+XG4gICAgICA8VkhUaXRsZSByZXZlcnNlIGgzIGxhYmVsPVwiSDMgLSBtZWQgMjgvMzZcIiAvPlxuICAgICAgPFZIVGl0bGUgcmV2ZXJzZSBoNCBsYWJlbD1cIkg0IC0gbWVkIDI0LzMyXCIgLz5cbiAgICAgIDxWSFRpdGxlIHJldmVyc2UgaDUgbGFiZWw9XCJINSAtIG1lZCAyMC8yNFwiIC8+XG4gICAgICA8VkhUaXRsZSByZXZlcnNlIGg2IGxhYmVsPVwiSDYgLSBtZWQgMTYvMjBcIiAvPlxuICAgIDwvZGl2PlxuICApKVxuIl19