"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Text = _interopRequireDefault(require("../Text"));

var _Grid = require("../../Grid");

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHTextarea = function VHTextarea(props) {
  return /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    className: "vh-textarea-description ".concat(props.className ? props.className : '')
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    color: "gray-80",
    variant: 'platform',
    text: "Description"
  }), /*#__PURE__*/_react.default.createElement(S.Textarea, {
    data: "data",
    type: "textarea",
    value: props.description,
    placeholder: props.description,
    onEvent: props.onEvent
  }));
};

VHTextarea.defaultProps = {
  description: "",
  onEvent: null,
  className: ""
};
VHTextarea.propTypes = {
  description: _propTypes.default.string,
  onEvent: _propTypes.default.func,
  className: _propTypes.default.string
};
var _default = VHTextarea;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVGV4dGFyZWEvaW5kZXguanN4Il0sIm5hbWVzIjpbIlZIVGV4dGFyZWEiLCJwcm9wcyIsImNsYXNzTmFtZSIsImRlc2NyaXB0aW9uIiwib25FdmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFDLEtBQUssRUFBSTtBQUV4QixzQkFDSSw2QkFBQyxTQUFEO0FBQUssSUFBQSxTQUFTLG9DQUE2QkEsS0FBSyxDQUFDQyxTQUFOLEdBQWtCRCxLQUFLLENBQUNDLFNBQXhCLEdBQW9DLEVBQWpFO0FBQWQsa0JBQ0ksNkJBQUMsYUFBRDtBQUFRLElBQUEsS0FBSyxFQUFDLFNBQWQ7QUFBd0IsSUFBQSxPQUFPLEVBQUUsVUFBakM7QUFBNkMsSUFBQSxJQUFJLEVBQUM7QUFBbEQsSUFESixlQUVJLDZCQUFDLENBQUQsQ0FBRyxRQUFIO0FBQ0ksSUFBQSxJQUFJLEVBQUMsTUFEVDtBQUVJLElBQUEsSUFBSSxFQUFDLFVBRlQ7QUFHSSxJQUFBLEtBQUssRUFBRUQsS0FBSyxDQUFDRSxXQUhqQjtBQUlJLElBQUEsV0FBVyxFQUFFRixLQUFLLENBQUNFLFdBSnZCO0FBS0ksSUFBQSxPQUFPLEVBQUVGLEtBQUssQ0FBQ0c7QUFMbkIsSUFGSixDQURKO0FBWUgsQ0FkRDs7QUFlQUosVUFBVSxDQUFDSyxZQUFYLEdBQTBCO0FBQ3RCRixFQUFBQSxXQUFXLEVBQUUsRUFEUztBQUV0QkMsRUFBQUEsT0FBTyxFQUFFLElBRmE7QUFHdEJGLEVBQUFBLFNBQVMsRUFBRTtBQUhXLENBQTFCO0FBTUFGLFVBQVUsQ0FBQ00sU0FBWCxHQUF1QjtBQUNuQkgsRUFBQUEsV0FBVyxFQUFFSSxtQkFBVUMsTUFESjtBQUVuQkosRUFBQUEsT0FBTyxFQUFFRyxtQkFBVUUsSUFGQTtBQUduQlAsRUFBQUEsU0FBUyxFQUFFSyxtQkFBVUM7QUFIRixDQUF2QjtlQU1lUixVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFZIVGV4dCBmcm9tICcuLi9UZXh0J1xuaW1wb3J0IHsgUm93IH0gZnJvbSAnLi4vLi4vR3JpZCdcbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9zdHlsZXMnXG5cbmNvbnN0IFZIVGV4dGFyZWEgPSBwcm9wcyA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Um93IGNsYXNzTmFtZT17YHZoLXRleHRhcmVhLWRlc2NyaXB0aW9uICR7cHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogJyd9YH0+XG4gICAgICAgICAgICA8VkhUZXh0IGNvbG9yPVwiZ3JheS04MFwiIHZhcmlhbnQ9eydwbGF0Zm9ybSd9IHRleHQ9XCJEZXNjcmlwdGlvblwiLz5cbiAgICAgICAgICAgIDxTLlRleHRhcmVhIFxuICAgICAgICAgICAgICAgIGRhdGE9XCJkYXRhXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgb25FdmVudD17cHJvcHMub25FdmVudH0vPlxuICAgICAgICA8L1Jvdz5cbiAgICApXG5cbn1cblZIVGV4dGFyZWEuZGVmYXVsdFByb3BzID0ge1xuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIG9uRXZlbnQ6IG51bGwsXG4gICAgY2xhc3NOYW1lOiBcIlwiLFxufVxuXG5WSFRleHRhcmVhLnByb3BUeXBlcyA9IHtcbiAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkV2ZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZIVGV4dGFyZWFcbiJdfQ==