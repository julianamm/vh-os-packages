"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var S = _interopRequireWildcard(require("./styles"));

var _Text = _interopRequireDefault(require("../Text"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHIconText = function VHIconText(props) {
  return _react.default.createElement(S.Wrapper, {
    inline: props.inline,
    className: "".concat(props.className ? props.className : ""),
    onClick: function onClick() {
      return props.onEvent({
        type: "Click",
        origin: "VHIconText",
        props: {
          data: props.data
        }
      });
    }
  }, _react.default.createElement(_Icon.default, {
    color: props.iconColor,
    sm: true,
    title: props.text,
    icon: props.icon
  }), _react.default.createElement(_Text.default, {
    color: props.textColor,
    variant: props.variant,
    text: props.text,
    onEvent: props.onEvent
  }));
};

VHIconText.defaultProps = {
  iconColor: "black-50",
  textColor: "black-100",
  onEvent: null,
  data: null,
  text: "",
  icon: "bullet",
  className: "vh-icon-text",
  variant: "body2"
};
VHIconText.propTypes = {
  iconColor: _propTypes.default.string,
  textColor: _propTypes.default.string,
  onEvent: _propTypes.default.func,
  data: _propTypes.default.string,
  text: _propTypes.default.string.isRequired,
  icon: _propTypes.default.string,
  className: _propTypes.default.string,
  variant: _propTypes.default.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "body1", "body2", "body3", "bodyWeb", "subtitle1", "subtitle2", "subtitle3", "caption", "platform1", "platform2", "platform3"])
};
var _default = VHIconText;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvSWNvblRleHQvaW5kZXguanMiXSwibmFtZXMiOlsiVkhJY29uVGV4dCIsInByb3BzIiwiaW5saW5lIiwiY2xhc3NOYW1lIiwib25FdmVudCIsInR5cGUiLCJvcmlnaW4iLCJkYXRhIiwiaWNvbkNvbG9yIiwidGV4dCIsImljb24iLCJ0ZXh0Q29sb3IiLCJ2YXJpYW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJvbmVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQUMsS0FBSyxFQUFJO0FBRTFCLFNBQ0UsNkJBQUMsQ0FBRCxDQUFHLE9BQUg7QUFDRSxJQUFBLE1BQU0sRUFBRUEsS0FBSyxDQUFDQyxNQURoQjtBQUVFLElBQUEsU0FBUyxZQUFLRCxLQUFLLENBQUNFLFNBQU4sR0FBa0JGLEtBQUssQ0FBQ0UsU0FBeEIsR0FBb0MsRUFBekMsQ0FGWDtBQUdFLElBQUEsT0FBTyxFQUFFO0FBQUEsYUFBTUYsS0FBSyxDQUFDRyxPQUFOLENBQWM7QUFDM0JDLFFBQUFBLElBQUksRUFBRSxPQURxQjtBQUUzQkMsUUFBQUEsTUFBTSxFQUFFLFlBRm1CO0FBRzNCTCxRQUFBQSxLQUFLLEVBQUU7QUFDTE0sVUFBQUEsSUFBSSxFQUFFTixLQUFLLENBQUNNO0FBRFA7QUFIb0IsT0FBZCxDQUFOO0FBQUE7QUFIWCxLQVdFLDZCQUFDLGFBQUQ7QUFDRSxJQUFBLEtBQUssRUFBRU4sS0FBSyxDQUFDTyxTQURmO0FBRUUsSUFBQSxFQUFFLE1BRko7QUFHRSxJQUFBLEtBQUssRUFBRVAsS0FBSyxDQUFDUSxJQUhmO0FBSUUsSUFBQSxJQUFJLEVBQUVSLEtBQUssQ0FBQ1M7QUFKZCxJQVhGLEVBZ0JFLDZCQUFDLGFBQUQ7QUFDRSxJQUFBLEtBQUssRUFBRVQsS0FBSyxDQUFDVSxTQURmO0FBRUUsSUFBQSxPQUFPLEVBQUVWLEtBQUssQ0FBQ1csT0FGakI7QUFHRSxJQUFBLElBQUksRUFBRVgsS0FBSyxDQUFDUSxJQUhkO0FBSUUsSUFBQSxPQUFPLEVBQUVSLEtBQUssQ0FBQ0c7QUFKakIsSUFoQkYsQ0FERjtBQXlCRCxDQTNCRDs7QUE2QkFKLFVBQVUsQ0FBQ2EsWUFBWCxHQUEwQjtBQUN4QkwsRUFBQUEsU0FBUyxFQUFFLFVBRGE7QUFFeEJHLEVBQUFBLFNBQVMsRUFBRSxXQUZhO0FBR3hCUCxFQUFBQSxPQUFPLEVBQUUsSUFIZTtBQUl4QkcsRUFBQUEsSUFBSSxFQUFFLElBSmtCO0FBS3hCRSxFQUFBQSxJQUFJLEVBQUUsRUFMa0I7QUFNeEJDLEVBQUFBLElBQUksRUFBRSxRQU5rQjtBQU94QlAsRUFBQUEsU0FBUyxFQUFFLGNBUGE7QUFReEJTLEVBQUFBLE9BQU8sRUFBRTtBQVJlLENBQTFCO0FBV0FaLFVBQVUsQ0FBQ2MsU0FBWCxHQUF1QjtBQUNyQk4sRUFBQUEsU0FBUyxFQUFFTyxtQkFBVUMsTUFEQTtBQUVyQkwsRUFBQUEsU0FBUyxFQUFFSSxtQkFBVUMsTUFGQTtBQUdyQlosRUFBQUEsT0FBTyxFQUFFVyxtQkFBVUUsSUFIRTtBQUlyQlYsRUFBQUEsSUFBSSxFQUFFUSxtQkFBVUMsTUFKSztBQUtyQlAsRUFBQUEsSUFBSSxFQUFFTSxtQkFBVUMsTUFBVixDQUFpQkUsVUFMRjtBQU1yQlIsRUFBQUEsSUFBSSxFQUFFSyxtQkFBVUMsTUFOSztBQU9yQmIsRUFBQUEsU0FBUyxFQUFFWSxtQkFBVUMsTUFQQTtBQVFyQkosRUFBQUEsT0FBTyxFQUFFRyxtQkFBVUksS0FBVixDQUFnQixDQUN2QixJQUR1QixFQUV2QixJQUZ1QixFQUd2QixJQUh1QixFQUl2QixJQUp1QixFQUt2QixJQUx1QixFQU12QixJQU51QixFQU92QixPQVB1QixFQVF2QixPQVJ1QixFQVN2QixPQVR1QixFQVV2QixTQVZ1QixFQVd2QixXQVh1QixFQVl2QixXQVp1QixFQWF2QixXQWJ1QixFQWN2QixTQWR1QixFQWV2QixXQWZ1QixFQWdCdkIsV0FoQnVCLEVBaUJ2QixXQWpCdUIsQ0FBaEI7QUFSWSxDQUF2QjtlQTZCZW5CLFUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgKiBhcyBTIGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IFZIVGV4dCBmcm9tIFwiLi4vVGV4dFwiO1xuaW1wb3J0IFZISWNvbiBmcm9tIFwiLi4vSWNvblwiO1xuXG5jb25zdCBWSEljb25UZXh0ID0gcHJvcHMgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPFMuV3JhcHBlclxuICAgICAgaW5saW5lPXtwcm9wcy5pbmxpbmV9XG4gICAgICBjbGFzc05hbWU9e2Ake3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6IFwiXCJ9YH1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uRXZlbnQoe1xuICAgICAgICB0eXBlOiBcIkNsaWNrXCIsXG4gICAgICAgIG9yaWdpbjogXCJWSEljb25UZXh0XCIsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgZGF0YTogcHJvcHMuZGF0YVxuICAgICAgICB9XG4gICAgICB9KX1cbiAgID5cbiAgICAgIDxWSEljb24gXG4gICAgICAgIGNvbG9yPXtwcm9wcy5pY29uQ29sb3J9XG4gICAgICAgIHNtIFxuICAgICAgICB0aXRsZT17cHJvcHMudGV4dH1cbiAgICAgICAgaWNvbj17cHJvcHMuaWNvbn0gLz5cbiAgICAgIDxWSFRleHRcbiAgICAgICAgY29sb3I9e3Byb3BzLnRleHRDb2xvcn1cbiAgICAgICAgdmFyaWFudD17cHJvcHMudmFyaWFudH1cbiAgICAgICAgdGV4dD17cHJvcHMudGV4dH1cbiAgICAgICAgb25FdmVudD17cHJvcHMub25FdmVudH1cbiAgICAgIC8+XG4gICAgPC9TLldyYXBwZXI+XG4gICk7XG59O1xuXG5WSEljb25UZXh0LmRlZmF1bHRQcm9wcyA9IHtcbiAgaWNvbkNvbG9yOiBcImJsYWNrLTUwXCIsXG4gIHRleHRDb2xvcjogXCJibGFjay0xMDBcIixcbiAgb25FdmVudDogbnVsbCxcbiAgZGF0YTogbnVsbCxcbiAgdGV4dDogXCJcIixcbiAgaWNvbjogXCJidWxsZXRcIixcbiAgY2xhc3NOYW1lOiBcInZoLWljb24tdGV4dFwiLFxuICB2YXJpYW50OiBcImJvZHkyXCJcbn07XG5cblZISWNvblRleHQucHJvcFR5cGVzID0ge1xuICBpY29uQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRleHRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25FdmVudDogUHJvcFR5cGVzLmZ1bmMsXG4gIGRhdGE6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwiaDFcIixcbiAgICBcImgyXCIsXG4gICAgXCJoM1wiLFxuICAgIFwiaDRcIixcbiAgICBcImg1XCIsXG4gICAgXCJoNlwiLFxuICAgIFwiYm9keTFcIixcbiAgICBcImJvZHkyXCIsXG4gICAgXCJib2R5M1wiLFxuICAgIFwiYm9keVdlYlwiLFxuICAgIFwic3VidGl0bGUxXCIsXG4gICAgXCJzdWJ0aXRsZTJcIixcbiAgICBcInN1YnRpdGxlM1wiLFxuICAgIFwiY2FwdGlvblwiLFxuICAgIFwicGxhdGZvcm0xXCIsXG4gICAgXCJwbGF0Zm9ybTJcIixcbiAgICBcInBsYXRmb3JtM1wiXG4gIF0pXG59O1xuXG5leHBvcnQgZGVmYXVsdCBWSEljb25UZXh0O1xuIl19