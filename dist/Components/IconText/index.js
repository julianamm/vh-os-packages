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
  return /*#__PURE__*/_react.default.createElement(S.Wrapper, {
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
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    color: props.iconColor,
    sm: true,
    title: props.text,
    icon: props.icon
  }), /*#__PURE__*/_react.default.createElement(_Text.default, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvSWNvblRleHQvaW5kZXguanMiXSwibmFtZXMiOlsiVkhJY29uVGV4dCIsInByb3BzIiwiaW5saW5lIiwiY2xhc3NOYW1lIiwib25FdmVudCIsInR5cGUiLCJvcmlnaW4iLCJkYXRhIiwiaWNvbkNvbG9yIiwidGV4dCIsImljb24iLCJ0ZXh0Q29sb3IiLCJ2YXJpYW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJvbmVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQUMsS0FBSyxFQUFJO0FBRTFCLHNCQUNFLDZCQUFDLENBQUQsQ0FBRyxPQUFIO0FBQ0UsSUFBQSxNQUFNLEVBQUVBLEtBQUssQ0FBQ0MsTUFEaEI7QUFFRSxJQUFBLFNBQVMsWUFBS0QsS0FBSyxDQUFDRSxTQUFOLEdBQWtCRixLQUFLLENBQUNFLFNBQXhCLEdBQW9DLEVBQXpDLENBRlg7QUFHRSxJQUFBLE9BQU8sRUFBRTtBQUFBLGFBQU1GLEtBQUssQ0FBQ0csT0FBTixDQUFjO0FBQzNCQyxRQUFBQSxJQUFJLEVBQUUsT0FEcUI7QUFFM0JDLFFBQUFBLE1BQU0sRUFBRSxZQUZtQjtBQUczQkwsUUFBQUEsS0FBSyxFQUFFO0FBQ0xNLFVBQUFBLElBQUksRUFBRU4sS0FBSyxDQUFDTTtBQURQO0FBSG9CLE9BQWQsQ0FBTjtBQUFBO0FBSFgsa0JBV0UsNkJBQUMsYUFBRDtBQUNFLElBQUEsS0FBSyxFQUFFTixLQUFLLENBQUNPLFNBRGY7QUFFRSxJQUFBLEVBQUUsTUFGSjtBQUdFLElBQUEsS0FBSyxFQUFFUCxLQUFLLENBQUNRLElBSGY7QUFJRSxJQUFBLElBQUksRUFBRVIsS0FBSyxDQUFDUztBQUpkLElBWEYsZUFnQkUsNkJBQUMsYUFBRDtBQUNFLElBQUEsS0FBSyxFQUFFVCxLQUFLLENBQUNVLFNBRGY7QUFFRSxJQUFBLE9BQU8sRUFBRVYsS0FBSyxDQUFDVyxPQUZqQjtBQUdFLElBQUEsSUFBSSxFQUFFWCxLQUFLLENBQUNRLElBSGQ7QUFJRSxJQUFBLE9BQU8sRUFBRVIsS0FBSyxDQUFDRztBQUpqQixJQWhCRixDQURGO0FBeUJELENBM0JEOztBQTZCQUosVUFBVSxDQUFDYSxZQUFYLEdBQTBCO0FBQ3hCTCxFQUFBQSxTQUFTLEVBQUUsVUFEYTtBQUV4QkcsRUFBQUEsU0FBUyxFQUFFLFdBRmE7QUFHeEJQLEVBQUFBLE9BQU8sRUFBRSxJQUhlO0FBSXhCRyxFQUFBQSxJQUFJLEVBQUUsSUFKa0I7QUFLeEJFLEVBQUFBLElBQUksRUFBRSxFQUxrQjtBQU14QkMsRUFBQUEsSUFBSSxFQUFFLFFBTmtCO0FBT3hCUCxFQUFBQSxTQUFTLEVBQUUsY0FQYTtBQVF4QlMsRUFBQUEsT0FBTyxFQUFFO0FBUmUsQ0FBMUI7QUFXQVosVUFBVSxDQUFDYyxTQUFYLEdBQXVCO0FBQ3JCTixFQUFBQSxTQUFTLEVBQUVPLG1CQUFVQyxNQURBO0FBRXJCTCxFQUFBQSxTQUFTLEVBQUVJLG1CQUFVQyxNQUZBO0FBR3JCWixFQUFBQSxPQUFPLEVBQUVXLG1CQUFVRSxJQUhFO0FBSXJCVixFQUFBQSxJQUFJLEVBQUVRLG1CQUFVQyxNQUpLO0FBS3JCUCxFQUFBQSxJQUFJLEVBQUVNLG1CQUFVQyxNQUFWLENBQWlCRSxVQUxGO0FBTXJCUixFQUFBQSxJQUFJLEVBQUVLLG1CQUFVQyxNQU5LO0FBT3JCYixFQUFBQSxTQUFTLEVBQUVZLG1CQUFVQyxNQVBBO0FBUXJCSixFQUFBQSxPQUFPLEVBQUVHLG1CQUFVSSxLQUFWLENBQWdCLENBQ3ZCLElBRHVCLEVBRXZCLElBRnVCLEVBR3ZCLElBSHVCLEVBSXZCLElBSnVCLEVBS3ZCLElBTHVCLEVBTXZCLElBTnVCLEVBT3ZCLE9BUHVCLEVBUXZCLE9BUnVCLEVBU3ZCLE9BVHVCLEVBVXZCLFNBVnVCLEVBV3ZCLFdBWHVCLEVBWXZCLFdBWnVCLEVBYXZCLFdBYnVCLEVBY3ZCLFNBZHVCLEVBZXZCLFdBZnVCLEVBZ0J2QixXQWhCdUIsRUFpQnZCLFdBakJ1QixDQUFoQjtBQVJZLENBQXZCO2VBNkJlbkIsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCAqIGFzIFMgZnJvbSBcIi4vc3R5bGVzXCI7XG5pbXBvcnQgVkhUZXh0IGZyb20gXCIuLi9UZXh0XCI7XG5pbXBvcnQgVkhJY29uIGZyb20gXCIuLi9JY29uXCI7XG5cbmNvbnN0IFZISWNvblRleHQgPSBwcm9wcyA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8Uy5XcmFwcGVyXG4gICAgICBpbmxpbmU9e3Byb3BzLmlubGluZX1cbiAgICAgIGNsYXNzTmFtZT17YCR7cHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogXCJcIn1gfVxuICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMub25FdmVudCh7XG4gICAgICAgIHR5cGU6IFwiQ2xpY2tcIixcbiAgICAgICAgb3JpZ2luOiBcIlZISWNvblRleHRcIixcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBkYXRhOiBwcm9wcy5kYXRhXG4gICAgICAgIH1cbiAgICAgIH0pfVxuICAgPlxuICAgICAgPFZISWNvbiBcbiAgICAgICAgY29sb3I9e3Byb3BzLmljb25Db2xvcn1cbiAgICAgICAgc20gXG4gICAgICAgIHRpdGxlPXtwcm9wcy50ZXh0fVxuICAgICAgICBpY29uPXtwcm9wcy5pY29ufSAvPlxuICAgICAgPFZIVGV4dFxuICAgICAgICBjb2xvcj17cHJvcHMudGV4dENvbG9yfVxuICAgICAgICB2YXJpYW50PXtwcm9wcy52YXJpYW50fVxuICAgICAgICB0ZXh0PXtwcm9wcy50ZXh0fVxuICAgICAgICBvbkV2ZW50PXtwcm9wcy5vbkV2ZW50fVxuICAgICAgLz5cbiAgICA8L1MuV3JhcHBlcj5cbiAgKTtcbn07XG5cblZISWNvblRleHQuZGVmYXVsdFByb3BzID0ge1xuICBpY29uQ29sb3I6IFwiYmxhY2stNTBcIixcbiAgdGV4dENvbG9yOiBcImJsYWNrLTEwMFwiLFxuICBvbkV2ZW50OiBudWxsLFxuICBkYXRhOiBudWxsLFxuICB0ZXh0OiBcIlwiLFxuICBpY29uOiBcImJ1bGxldFwiLFxuICBjbGFzc05hbWU6IFwidmgtaWNvbi10ZXh0XCIsXG4gIHZhcmlhbnQ6IFwiYm9keTJcIlxufTtcblxuVkhJY29uVGV4dC5wcm9wVHlwZXMgPSB7XG4gIGljb25Db2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGV4dENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkV2ZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgZGF0YTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJoMVwiLFxuICAgIFwiaDJcIixcbiAgICBcImgzXCIsXG4gICAgXCJoNFwiLFxuICAgIFwiaDVcIixcbiAgICBcImg2XCIsXG4gICAgXCJib2R5MVwiLFxuICAgIFwiYm9keTJcIixcbiAgICBcImJvZHkzXCIsXG4gICAgXCJib2R5V2ViXCIsXG4gICAgXCJzdWJ0aXRsZTFcIixcbiAgICBcInN1YnRpdGxlMlwiLFxuICAgIFwic3VidGl0bGUzXCIsXG4gICAgXCJjYXB0aW9uXCIsXG4gICAgXCJwbGF0Zm9ybTFcIixcbiAgICBcInBsYXRmb3JtMlwiLFxuICAgIFwicGxhdGZvcm0zXCJcbiAgXSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZISWNvblRleHQ7XG4iXX0=