"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Components|Testimonial', module).add('default', function () {
  return _react.default.createElement("div", {
    style: {
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    sizeImg: "md",
    testimonial: "\u201DAll their tips were very valuable!\u201D - First Last Name",
    color: "gray-90"
  }));
}).add('xs', function () {
  return _react.default.createElement("div", {
    style: {
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    sizeImg: "sm",
    testimonial: "\u201DAll their tips were very valuable!\u201D - First Last Name",
    color: "gray-90",
    xs: true
  }));
}).add('sm', function () {
  return _react.default.createElement("div", {
    style: {
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    sizeImg: "sm",
    testimonial: "\u201DAll their tips were very valuable!\u201D - First Last Name",
    color: "gray-90",
    sm: true
  }));
}).add('lg', function () {
  return _react.default.createElement("div", {
    style: {
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    sizeImg: "lg",
    testimonial: "\u201DAll their tips were very valuable!\u201D - First Last Name",
    color: "gray-90",
    lg: true
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVGVzdGltb25pYWwvc3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJhZGQiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOzs7O0FBRUEsdUJBQVUsd0JBQVYsRUFBb0NBLE1BQXBDLEVBRUNDLEdBRkQsQ0FFSyxTQUZMLEVBRWdCO0FBQUEsU0FDWjtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYO0FBQVosS0FDSSw2QkFBQyxTQUFEO0FBQ0ksSUFBQSxLQUFLLEVBQUMsb0VBRFY7QUFFSSxJQUFBLE9BQU8sRUFBRSxJQUZiO0FBR0ksSUFBQSxXQUFXLEVBQUMsa0VBSGhCO0FBSUksSUFBQSxLQUFLLEVBQUM7QUFKVixJQURKLENBRFk7QUFBQSxDQUZoQixFQVlDRCxHQVpELENBWUssSUFaTCxFQVlXO0FBQUEsU0FDUDtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYO0FBQVosS0FDSSw2QkFBQyxTQUFEO0FBQ0ksSUFBQSxLQUFLLEVBQUMsb0VBRFY7QUFFSSxJQUFBLE9BQU8sRUFBRSxJQUZiO0FBR0ksSUFBQSxXQUFXLEVBQUMsa0VBSGhCO0FBSUksSUFBQSxLQUFLLEVBQUMsU0FKVjtBQUtJLElBQUEsRUFBRTtBQUxOLElBREosQ0FETztBQUFBLENBWlgsRUF3QkNELEdBeEJELENBd0JLLElBeEJMLEVBd0JXO0FBQUEsU0FDUDtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYO0FBQVosS0FDSSw2QkFBQyxTQUFEO0FBQ0ksSUFBQSxLQUFLLEVBQUMsb0VBRFY7QUFFSSxJQUFBLE9BQU8sRUFBRSxJQUZiO0FBR0ksSUFBQSxXQUFXLEVBQUMsa0VBSGhCO0FBSUksSUFBQSxLQUFLLEVBQUMsU0FKVjtBQUtJLElBQUEsRUFBRTtBQUxOLElBREosQ0FETztBQUFBLENBeEJYLEVBbUNDRCxHQW5DRCxDQW1DSyxJQW5DTCxFQW1DVztBQUFBLFNBQ1A7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBWDtBQUFaLEtBQ0ksNkJBQUMsU0FBRDtBQUNJLElBQUEsS0FBSyxFQUFDLG9FQURWO0FBRUksSUFBQSxPQUFPLEVBQUUsSUFGYjtBQUdJLElBQUEsV0FBVyxFQUFDLGtFQUhoQjtBQUlJLElBQUEsS0FBSyxFQUFDLFNBSlY7QUFLSSxJQUFBLEVBQUU7QUFMTixJQURKLENBRE87QUFBQSxDQW5DWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHN0b3JpZXNPZiB9IGZyb20gJ0BzdG9yeWJvb2svcmVhY3QnXG5pbXBvcnQgVkhUZXN0aW1vbmlhbCBmcm9tICcuJ1xuXG5zdG9yaWVzT2YoJ0NvbXBvbmVudHN8VGVzdGltb25pYWwnLCBtb2R1bGUpXG5cbi5hZGQoJ2RlZmF1bHQnLCAoKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjI0cHhcIiB9fT5cbiAgICAgICAgPFZIVGVzdGltb25pYWwgXG4gICAgICAgICAgICBpbWFnZT1cImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS91aWZhY2VzL2ZhY2VzL3R3aXR0ZXIvZGFuY291bnNlbGwvMTI4LmpwZ1wiXG4gICAgICAgICAgICBzaXplSW1nPXtcIm1kXCJ9XG4gICAgICAgICAgICB0ZXN0aW1vbmlhbD0n4oCdQWxsIHRoZWlyIHRpcHMgd2VyZSB2ZXJ5IHZhbHVhYmxlIeKAnSAtIEZpcnN0IExhc3QgTmFtZSdcbiAgICAgICAgICAgIGNvbG9yPVwiZ3JheS05MFwiXG4gICAgICAgIC8+XG4gICAgPC9kaXY+XG4pKVxuLmFkZCgneHMnLCAoKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjI0cHhcIiB9fT5cbiAgICAgICAgPFZIVGVzdGltb25pYWwgXG4gICAgICAgICAgICBpbWFnZT1cImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS91aWZhY2VzL2ZhY2VzL3R3aXR0ZXIvZGFuY291bnNlbGwvMTI4LmpwZ1wiXG4gICAgICAgICAgICBzaXplSW1nPXtcInNtXCJ9XG4gICAgICAgICAgICB0ZXN0aW1vbmlhbD0n4oCdQWxsIHRoZWlyIHRpcHMgd2VyZSB2ZXJ5IHZhbHVhYmxlIeKAnSAtIEZpcnN0IExhc3QgTmFtZSdcbiAgICAgICAgICAgIGNvbG9yPVwiZ3JheS05MFwiXG4gICAgICAgICAgICB4c1xuXG4gICAgICAgIC8+XG4gICAgPC9kaXY+XG4pKVxuLmFkZCgnc20nLCAoKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjI0cHhcIiB9fT5cbiAgICAgICAgPFZIVGVzdGltb25pYWwgXG4gICAgICAgICAgICBpbWFnZT1cImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS91aWZhY2VzL2ZhY2VzL3R3aXR0ZXIvZGFuY291bnNlbGwvMTI4LmpwZ1wiXG4gICAgICAgICAgICBzaXplSW1nPXtcInNtXCJ9XG4gICAgICAgICAgICB0ZXN0aW1vbmlhbD0n4oCdQWxsIHRoZWlyIHRpcHMgd2VyZSB2ZXJ5IHZhbHVhYmxlIeKAnSAtIEZpcnN0IExhc3QgTmFtZSdcbiAgICAgICAgICAgIGNvbG9yPVwiZ3JheS05MFwiXG4gICAgICAgICAgICBzbVxuICAgICAgICAvPlxuICAgIDwvZGl2PlxuKSlcbi5hZGQoJ2xnJywgKCkgPT4gKFxuICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIyNHB4XCIgfX0+XG4gICAgICAgIDxWSFRlc3RpbW9uaWFsIFxuICAgICAgICAgICAgaW1hZ2U9XCJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vdWlmYWNlcy9mYWNlcy90d2l0dGVyL2RhbmNvdW5zZWxsLzEyOC5qcGdcIlxuICAgICAgICAgICAgc2l6ZUltZz17XCJsZ1wifVxuICAgICAgICAgICAgdGVzdGltb25pYWw9J+KAnUFsbCB0aGVpciB0aXBzIHdlcmUgdmVyeSB2YWx1YWJsZSHigJ0gLSBGaXJzdCBMYXN0IE5hbWUnXG4gICAgICAgICAgICBjb2xvcj1cImdyYXktOTBcIlxuICAgICAgICAgICAgbGdcbiAgICAgICAgLz5cbiAgICA8L2Rpdj5cbikpO1xuIl19