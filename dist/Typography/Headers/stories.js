"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Typography|Headers', module).add('Default', function () {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_.default, {
    h1: true,
    label: "H1 - med 36/48"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    h2: true,
    label: "H2 - med 32/40"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    h3: true,
    label: "H3 - med 28/36"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    h4: true,
    label: "H4 - med 24/32"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    h5: true,
    label: "H5 - med 20/24"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    h6: true,
    label: "H6 - med 16/20"
  }));
}).add('Reverse', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      background: _Colors.default["primary-dark"],
      padding: '8px'
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    reverse: true,
    h1: true,
    label: "H1 - med 36/48"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    reverse: true,
    h2: true,
    label: "H2 - med 32/40"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    reverse: true,
    h3: true,
    label: "H3 - med 28/36"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    reverse: true,
    h4: true,
    label: "H4 - med 24/32"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    reverse: true,
    h5: true,
    label: "H5 - med 20/24"
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    reverse: true,
    h6: true,
    label: "H6 - med 16/20"
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL1R5cG9ncmFwaHkvSGVhZGVycy9zdG9yaWVzLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImFkZCIsImJhY2tncm91bmQiLCJDb2xvciIsInBhZGRpbmciXSwibWFwcGluZ3MiOiI7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSx1QkFBVSxvQkFBVixFQUFnQ0EsTUFBaEMsRUFDR0MsR0FESCxDQUNPLFNBRFAsRUFDa0I7QUFBQSxzQkFDZCw2QkFBQyxjQUFELENBQU8sUUFBUCxxQkFDRSw2QkFBQyxTQUFEO0FBQVMsSUFBQSxFQUFFLE1BQVg7QUFBWSxJQUFBLEtBQUssRUFBQztBQUFsQixJQURGLGVBRUUsNkJBQUMsU0FBRDtBQUFTLElBQUEsRUFBRSxNQUFYO0FBQVksSUFBQSxLQUFLLEVBQUM7QUFBbEIsSUFGRixlQUdFLDZCQUFDLFNBQUQ7QUFBUyxJQUFBLEVBQUUsTUFBWDtBQUFZLElBQUEsS0FBSyxFQUFDO0FBQWxCLElBSEYsZUFJRSw2QkFBQyxTQUFEO0FBQVMsSUFBQSxFQUFFLE1BQVg7QUFBWSxJQUFBLEtBQUssRUFBQztBQUFsQixJQUpGLGVBS0UsNkJBQUMsU0FBRDtBQUFTLElBQUEsRUFBRSxNQUFYO0FBQVksSUFBQSxLQUFLLEVBQUM7QUFBbEIsSUFMRixlQU1FLDZCQUFDLFNBQUQ7QUFBUyxJQUFBLEVBQUUsTUFBWDtBQUFZLElBQUEsS0FBSyxFQUFDO0FBQWxCLElBTkYsQ0FEYztBQUFBLENBRGxCLEVBV0dBLEdBWEgsQ0FXTyxTQVhQLEVBV2tCO0FBQUEsc0JBQ2Q7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxVQUFVLEVBQUVDLGdCQUFNLGNBQU4sQ0FBZDtBQUFxQ0MsTUFBQUEsT0FBTyxFQUFFO0FBQTlDO0FBQVosa0JBQ0UsNkJBQUMsU0FBRDtBQUFTLElBQUEsT0FBTyxNQUFoQjtBQUFpQixJQUFBLEVBQUUsTUFBbkI7QUFBb0IsSUFBQSxLQUFLLEVBQUM7QUFBMUIsSUFERixlQUVFLDZCQUFDLFNBQUQ7QUFBUyxJQUFBLE9BQU8sTUFBaEI7QUFBaUIsSUFBQSxFQUFFLE1BQW5CO0FBQW9CLElBQUEsS0FBSyxFQUFDO0FBQTFCLElBRkYsZUFHRSw2QkFBQyxTQUFEO0FBQVMsSUFBQSxPQUFPLE1BQWhCO0FBQWlCLElBQUEsRUFBRSxNQUFuQjtBQUFvQixJQUFBLEtBQUssRUFBQztBQUExQixJQUhGLGVBSUUsNkJBQUMsU0FBRDtBQUFTLElBQUEsT0FBTyxNQUFoQjtBQUFpQixJQUFBLEVBQUUsTUFBbkI7QUFBb0IsSUFBQSxLQUFLLEVBQUM7QUFBMUIsSUFKRixlQUtFLDZCQUFDLFNBQUQ7QUFBUyxJQUFBLE9BQU8sTUFBaEI7QUFBaUIsSUFBQSxFQUFFLE1BQW5CO0FBQW9CLElBQUEsS0FBSyxFQUFDO0FBQTFCLElBTEYsZUFNRSw2QkFBQyxTQUFEO0FBQVMsSUFBQSxPQUFPLE1BQWhCO0FBQWlCLElBQUEsRUFBRSxNQUFuQjtBQUFvQixJQUFBLEtBQUssRUFBQztBQUExQixJQU5GLENBRGM7QUFBQSxDQVhsQiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHN0b3JpZXNPZiB9IGZyb20gJ0BzdG9yeWJvb2svcmVhY3QnO1xuaW1wb3J0IFZIVGl0bGUgZnJvbSAnLic7XG5pbXBvcnQgQ29sb3IgZnJvbSAnLi4vLi4vQ29sb3JzJ1xuXG5zdG9yaWVzT2YoJ1R5cG9ncmFwaHl8SGVhZGVycycsIG1vZHVsZSlcbiAgLmFkZCgnRGVmYXVsdCcsICgpID0+IChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8VkhUaXRsZSBoMSBsYWJlbD1cIkgxIC0gbWVkIDM2LzQ4XCIgLz5cbiAgICAgIDxWSFRpdGxlIGgyIGxhYmVsPVwiSDIgLSBtZWQgMzIvNDBcIiAvPlxuICAgICAgPFZIVGl0bGUgaDMgbGFiZWw9XCJIMyAtIG1lZCAyOC8zNlwiIC8+XG4gICAgICA8VkhUaXRsZSBoNCBsYWJlbD1cIkg0IC0gbWVkIDI0LzMyXCIgLz5cbiAgICAgIDxWSFRpdGxlIGg1IGxhYmVsPVwiSDUgLSBtZWQgMjAvMjRcIiAvPlxuICAgICAgPFZIVGl0bGUgaDYgbGFiZWw9XCJINiAtIG1lZCAxNi8yMFwiIC8+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKSlcbiAgLmFkZCgnUmV2ZXJzZScsICgpID0+IChcbiAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6IENvbG9yW1wicHJpbWFyeS1kYXJrXCJdLCBwYWRkaW5nOiAnOHB4JyB9fT5cbiAgICAgIDxWSFRpdGxlIHJldmVyc2UgaDEgbGFiZWw9XCJIMSAtIG1lZCAzNi80OFwiIC8+XG4gICAgICA8VkhUaXRsZSByZXZlcnNlIGgyIGxhYmVsPVwiSDIgLSBtZWQgMzIvNDBcIiAvPlxuICAgICAgPFZIVGl0bGUgcmV2ZXJzZSBoMyBsYWJlbD1cIkgzIC0gbWVkIDI4LzM2XCIgLz5cbiAgICAgIDxWSFRpdGxlIHJldmVyc2UgaDQgbGFiZWw9XCJINCAtIG1lZCAyNC8zMlwiIC8+XG4gICAgICA8VkhUaXRsZSByZXZlcnNlIGg1IGxhYmVsPVwiSDUgLSBtZWQgMjAvMjRcIiAvPlxuICAgICAgPFZIVGl0bGUgcmV2ZXJzZSBoNiBsYWJlbD1cIkg2IC0gbWVkIDE2LzIwXCIgLz5cbiAgICA8L2Rpdj5cbiAgKSlcbiJdfQ==