"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Image = exports.PreloaderSection = exports.ImageSection = exports.Container = exports.PreloaderCircle = exports.PreloaderBubble = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 100px;\n  height: 100px;\n  background-image: url(", ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin-left: -6px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 0 16px 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  justify-items: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  div {\n    width: 50px;\n    height: 50px;\n    display: block;\n    background: transparent;\n    border-radius: 50%;\n    border: 7px solid rgba(28, 128, 128, 0.2);\n    border-left: 7px solid ", ";\n    animation: 1.5s rotate infinite linear;\n    margin: 0 auto;\n    @keyframes rotate {\n      from {\n        transform: rotateZ(0deg);\n      }\n      to {\n        transform: rotateZ(360deg);\n      }\n    }\n\n    ", "\n\n    ", "\n\n    ", "\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: repeat(3, 32px);\n  grid-column-gap: 16px;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  div {\n    width: 32px;\n    height: 32px;\n    border-radius: 100%;\n    background: ", ";\n    -webkit-animation: bounce 1.48s ease-in-out infinite both;\n    animation: bounce 1.48s ease-in-out infinite both;\n    ", "\n\n    ", "\n\n    ", "\n\n    :nth-child(1) {\n      -webkit-animation-delay: -0.32s;\n      animation-delay: -0.32s;\n    }\n    :nth-child(2) {\n      -webkit-animation-delay: -0.16s;\n      animation-delay: -0.16s;\n    }\n    @-webkit-keyframes bounce {\n      0%,\n      80%,\n      100% {\n        -webkit-transform: scale(0);\n        transform: scale(0);\n      }\n      40% {\n        -webkit-transform: scale(1);\n        transform: scale(1);\n      }\n    }\n\n    @keyframes bounce {\n      0%,\n      80%,\n      100% {\n        -webkit-transform: scale(0);\n        transform: scale(0);\n      }\n      40% {\n        -webkit-transform: scale(1);\n        transform: scale(1);\n      }\n    }\n    @-webkit-keyframes beat {\n      to {\n        -webkit-transform: scale(1.5);\n        transform: scale(1.5);\n      }\n    }\n    @keyframes beat {\n      to {\n        -webkit-transform: scale(1.5);\n        transform: scale(1.5);\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PreloaderBubble = _styledComponents.default.div(_templateObject(), function (_ref) {
  var size = _ref.size;
  return size === 'md' && "\n      grid-template-columns: repeat(3, 24px);\n      grid-column-gap: 12px;\n    ";
}, function (_ref2) {
  var size = _ref2.size;
  return size === 'sm' && "\n      grid-template-columns: repeat(3, 16px);\n      grid-column-gap: 8px;\n    ";
}, function (_ref3) {
  var size = _ref3.size;
  return size === 'xs' && "\n      grid-template-columns: repeat(3, 8px);\n      grid-column-gap: 12px;\n    ";
}, _Colors.default['primary-light'], function (_ref4) {
  var size = _ref4.size;
  return size === 'md' && "\n      width: 32px;\n      height: 32px;\n    ";
}, function (_ref5) {
  var size = _ref5.size;
  return size === 'sm' && "\n      width: 24px;\n      height: 24px;\n    ";
}, function (_ref6) {
  var size = _ref6.size;
  return size === 'xs' && "\n      width: 16px;\n      height: 16px;\n    ";
});

exports.PreloaderBubble = PreloaderBubble;

var PreloaderCircle = _styledComponents.default.div(_templateObject2(), _Colors.default['primary-light'], function (_ref7) {
  var size = _ref7.size;
  return size === 'md' && "\n      width: 32px;\n      height: 32px;\n      border: 6px solid rgba(28, 128, 128, 0.2);\n      border-left: 6px solid ".concat(_Colors.default['primary-light'], ";\n    ");
}, function (_ref8) {
  var size = _ref8.size;
  return size === 'sm' && "\n      width: 24px;\n      height: 24px;\n      border: 3px solid rgba(28, 128, 128, 0.2);\n      border-left: 3px solid ".concat(_Colors.default['primary-light'], ";\n    ");
}, function (_ref9) {
  var size = _ref9.size;
  return size === 'xs' && "\n      width: 16px;\n      height: 16px;\n      border: 2px solid rgba(28, 128, 128, 0.2);\n      border-left: 2px solid ".concat(_Colors.default['primary-light'], ";\n    ");
});

exports.PreloaderCircle = PreloaderCircle;

var Container = _styledComponents.default.div(_templateObject3());

exports.Container = Container;

var ImageSection = _styledComponents.default.div(_templateObject4());

exports.ImageSection = ImageSection;

var PreloaderSection = _styledComponents.default.div(_templateObject5());

exports.PreloaderSection = PreloaderSection;

var Image = _styledComponents.default.div(_templateObject6(), function (props) {
  return props.image && props.image;
});

exports.Image = Image;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvUHJlbG9hZGVyL3N0eWxlcy5qcyJdLCJuYW1lcyI6WyJQcmVsb2FkZXJCdWJibGUiLCJzdHlsZWQiLCJkaXYiLCJzaXplIiwiQ29sb3IiLCJQcmVsb2FkZXJDaXJjbGUiLCJDb250YWluZXIiLCJJbWFnZVNlY3Rpb24iLCJQcmVsb2FkZXJTZWN0aW9uIiwiSW1hZ2UiLCJwcm9wcyIsImltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLElBQU1BLGVBQWUsR0FBR0MsMEJBQU9DLEdBQVYsb0JBS3hCO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsU0FDQUEsSUFBSSxLQUFLLElBQVQseUZBREE7QUFBQSxDQUx3QixFQVl4QjtBQUFBLE1BQUdBLElBQUgsU0FBR0EsSUFBSDtBQUFBLFNBQ0FBLElBQUksS0FBSyxJQUFULHdGQURBO0FBQUEsQ0Fad0IsRUFtQnhCO0FBQUEsTUFBR0EsSUFBSCxTQUFHQSxJQUFIO0FBQUEsU0FDQUEsSUFBSSxLQUFLLElBQVQsd0ZBREE7QUFBQSxDQW5Cd0IsRUE4QlZDLGdCQUFNLGVBQU4sQ0E5QlUsRUFpQ3RCO0FBQUEsTUFBR0QsSUFBSCxTQUFHQSxJQUFIO0FBQUEsU0FDRkEsSUFBSSxLQUFLLElBQVQscURBREU7QUFBQSxDQWpDc0IsRUF3Q3RCO0FBQUEsTUFBR0EsSUFBSCxTQUFHQSxJQUFIO0FBQUEsU0FDRkEsSUFBSSxLQUFLLElBQVQscURBREU7QUFBQSxDQXhDc0IsRUErQ3RCO0FBQUEsTUFBR0EsSUFBSCxTQUFHQSxJQUFIO0FBQUEsU0FDRkEsSUFBSSxLQUFLLElBQVQscURBREU7QUFBQSxDQS9Dc0IsQ0FBckI7Ozs7QUFzR0EsSUFBTUUsZUFBZSxHQUFHSiwwQkFBT0MsR0FBVixxQkFRQ0UsZ0JBQU0sZUFBTixDQVJELEVBb0J0QjtBQUFBLE1BQUdELElBQUgsU0FBR0EsSUFBSDtBQUFBLFNBQ0ZBLElBQUksS0FBSyxJQUFULHdJQUsyQkMsZ0JBQU0sZUFBTixDQUwzQixZQURFO0FBQUEsQ0FwQnNCLEVBNkJ0QjtBQUFBLE1BQUdELElBQUgsU0FBR0EsSUFBSDtBQUFBLFNBQ0ZBLElBQUksS0FBSyxJQUFULHdJQUsyQkMsZ0JBQU0sZUFBTixDQUwzQixZQURFO0FBQUEsQ0E3QnNCLEVBc0N0QjtBQUFBLE1BQUdELElBQUgsU0FBR0EsSUFBSDtBQUFBLFNBQ0ZBLElBQUksS0FBSyxJQUFULHdJQUsyQkMsZ0JBQU0sZUFBTixDQUwzQixZQURFO0FBQUEsQ0F0Q3NCLENBQXJCOzs7O0FBaURBLElBQU1FLFNBQVMsR0FBR0wsMEJBQU9DLEdBQVYsb0JBQWY7Ozs7QUFLQSxJQUFNSyxZQUFZLEdBQUdOLDBCQUFPQyxHQUFWLG9CQUFsQjs7OztBQUlBLElBQU1NLGdCQUFnQixHQUFHUCwwQkFBT0MsR0FBVixvQkFBdEI7Ozs7QUFJQSxJQUFNTyxLQUFLLEdBQUdSLDBCQUFPQyxHQUFWLHFCQUdRLFVBQUFRLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sSUFBZUQsS0FBSyxDQUFDQyxLQUF6QjtBQUFBLENBSGIsQ0FBWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IENvbG9yIGZyb20gJy4uLy4uL0NvbG9ycyc7XG5cbmV4cG9ydCBjb25zdCBQcmVsb2FkZXJCdWJibGUgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAzMnB4KTtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxNnB4O1xuXG4gICR7KHsgc2l6ZSB9KSA9PlxuICAgIHNpemUgPT09ICdtZCcgJiZcbiAgICBgXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAyNHB4KTtcbiAgICAgIGdyaWQtY29sdW1uLWdhcDogMTJweDtcbiAgICBgfVxuXG4gICR7KHsgc2l6ZSB9KSA9PlxuICAgIHNpemUgPT09ICdzbScgJiZcbiAgICBgXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxNnB4KTtcbiAgICAgIGdyaWQtY29sdW1uLWdhcDogOHB4O1xuICAgIGB9XG5cbiAgJHsoeyBzaXplIH0pID0+XG4gICAgc2l6ZSA9PT0gJ3hzJyAmJlxuICAgIGBcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDhweCk7XG4gICAgICBncmlkLWNvbHVtbi1nYXA6IDEycHg7XG4gICAgYH1cblxuICBkaXYge1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICR7Q29sb3JbJ3ByaW1hcnktbGlnaHQnXX07XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJvdW5jZSAxLjQ4cyBlYXNlLWluLW91dCBpbmZpbml0ZSBib3RoO1xuICAgIGFuaW1hdGlvbjogYm91bmNlIDEuNDhzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJvdGg7XG4gICAgJHsoeyBzaXplIH0pID0+XG4gICAgc2l6ZSA9PT0gJ21kJyAmJlxuICAgIGBcbiAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgIGB9XG5cbiAgICAkeyh7IHNpemUgfSkgPT5cbiAgICBzaXplID09PSAnc20nICYmXG4gICAgYFxuICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgYH1cblxuICAgICR7KHsgc2l6ZSB9KSA9PlxuICAgIHNpemUgPT09ICd4cycgJiZcbiAgICBgXG4gICAgICB3aWR0aDogMTZweDtcbiAgICAgIGhlaWdodDogMTZweDtcbiAgICBgfVxuXG4gICAgOm50aC1jaGlsZCgxKSB7XG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XG4gICAgfVxuICAgIDpudGgtY2hpbGQoMikge1xuICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjE2cztcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xuICAgIH1cbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlIHtcbiAgICAgIDAlLFxuICAgICAgODAlLFxuICAgICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgIH1cbiAgICAgIDQwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIGJvdW5jZSB7XG4gICAgICAwJSxcbiAgICAgIDgwJSxcbiAgICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICB9XG4gICAgICA0MCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICB9XG4gICAgfVxuICAgIEAtd2Via2l0LWtleWZyYW1lcyBiZWF0IHtcbiAgICAgIHRvIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBiZWF0IHtcbiAgICAgIHRvIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBQcmVsb2FkZXJDaXJjbGUgPSBzdHlsZWQuZGl2YFxuICBkaXYge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiA3cHggc29saWQgcmdiYSgyOCwgMTI4LCAxMjgsIDAuMik7XG4gICAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCAke0NvbG9yWydwcmltYXJ5LWxpZ2h0J119O1xuICAgIGFuaW1hdGlvbjogMS41cyByb3RhdGUgaW5maW5pdGUgbGluZWFyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIEBrZXlmcmFtZXMgcm90YXRlIHtcbiAgICAgIGZyb20ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XG4gICAgICB9XG4gICAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpO1xuICAgICAgfVxuICAgIH1cblxuICAgICR7KHsgc2l6ZSB9KSA9PlxuICAgIHNpemUgPT09ICdtZCcgJiZcbiAgICBgXG4gICAgICB3aWR0aDogMzJweDtcbiAgICAgIGhlaWdodDogMzJweDtcbiAgICAgIGJvcmRlcjogNnB4IHNvbGlkIHJnYmEoMjgsIDEyOCwgMTI4LCAwLjIpO1xuICAgICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAke0NvbG9yWydwcmltYXJ5LWxpZ2h0J119O1xuICAgIGB9XG5cbiAgICAkeyh7IHNpemUgfSkgPT5cbiAgICBzaXplID09PSAnc20nICYmXG4gICAgYFxuICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDI4LCAxMjgsIDEyOCwgMC4yKTtcbiAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgJHtDb2xvclsncHJpbWFyeS1saWdodCddfTtcbiAgICBgfVxuXG4gICAgJHsoeyBzaXplIH0pID0+XG4gICAgc2l6ZSA9PT0gJ3hzJyAmJlxuICAgIGBcbiAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyOCwgMTI4LCAxMjgsIDAuMik7XG4gICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICR7Q29sb3JbJ3ByaW1hcnktbGlnaHQnXX07XG4gICAgYH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBJbWFnZVNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDAgMCAxNnB4IDA7XG5gO1xuXG5leHBvcnQgY29uc3QgUHJlbG9hZGVyU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiAtNnB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IEltYWdlID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwcm9wcyA9PiBwcm9wcy5pbWFnZSAmJiBwcm9wcy5pbWFnZX0pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5gO1xuIl19