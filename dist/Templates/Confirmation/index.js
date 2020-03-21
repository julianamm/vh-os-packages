"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Grid = require("../../Grid");

var _Text = _interopRequireDefault(require("../../Components/Text"));

var _Button = _interopRequireDefault(require("../../Components/Button"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHConfirmationTemplate = function VHConfirmationTemplate(props) {
  return _react.default.createElement(_Grid.Container, null, _react.default.createElement(_Grid.Row, {
    alignItemsCenter: true,
    marginTop: 90
  }, _react.default.createElement(_Text.default, {
    text: props.title,
    variant: "h4"
  })), _react.default.createElement(_Grid.Row, {
    alignItemsCenter: true,
    marginTop: 39
  }, _react.default.createElement(_Text.default, {
    alignCenter: true,
    text: props.description,
    variant: "bodyweb"
  })), _react.default.createElement(_Grid.Row, {
    alignItemsCenter: true,
    marginTop: 39
  }, _react.default.createElement(_Button.default, {
    className: "",
    label: props.ctaLabel,
    onEvent: props.onEvent,
    primary: true,
    disabled: props.loading
  })));
};

VHConfirmationTemplate.defaultProps = {};
VHConfirmationTemplate.propTypes = {};
var _default = VHConfirmationTemplate;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL1RlbXBsYXRlcy9Db25maXJtYXRpb24vaW5kZXguanN4Il0sIm5hbWVzIjpbIlZIQ29uZmlybWF0aW9uVGVtcGxhdGUiLCJwcm9wcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjdGFMYWJlbCIsIm9uRXZlbnQiLCJsb2FkaW5nIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFHQSxJQUFNQSxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUFDLEtBQUssRUFBSTtBQUNwQyxTQUNJLDZCQUFDLGVBQUQsUUFDSSw2QkFBQyxTQUFEO0FBQUssSUFBQSxnQkFBZ0IsTUFBckI7QUFBc0IsSUFBQSxTQUFTLEVBQUU7QUFBakMsS0FDSSw2QkFBQyxhQUFEO0FBQVEsSUFBQSxJQUFJLEVBQUVBLEtBQUssQ0FBQ0MsS0FBcEI7QUFBMkIsSUFBQSxPQUFPLEVBQUM7QUFBbkMsSUFESixDQURKLEVBSUksNkJBQUMsU0FBRDtBQUFLLElBQUEsZ0JBQWdCLE1BQXJCO0FBQXNCLElBQUEsU0FBUyxFQUFFO0FBQWpDLEtBQ0ksNkJBQUMsYUFBRDtBQUFRLElBQUEsV0FBVyxNQUFuQjtBQUFvQixJQUFBLElBQUksRUFBRUQsS0FBSyxDQUFDRSxXQUFoQztBQUE2QyxJQUFBLE9BQU8sRUFBQztBQUFyRCxJQURKLENBSkosRUFPSSw2QkFBQyxTQUFEO0FBQUssSUFBQSxnQkFBZ0IsTUFBckI7QUFBc0IsSUFBQSxTQUFTLEVBQUU7QUFBakMsS0FDQSw2QkFBQyxlQUFEO0FBQ0ksSUFBQSxTQUFTLEVBQUMsRUFEZDtBQUVJLElBQUEsS0FBSyxFQUFFRixLQUFLLENBQUNHLFFBRmpCO0FBR0ksSUFBQSxPQUFPLEVBQUVILEtBQUssQ0FBQ0ksT0FIbkI7QUFJSSxJQUFBLE9BQU8sTUFKWDtBQUtJLElBQUEsUUFBUSxFQUFFSixLQUFLLENBQUNLO0FBTHBCLElBREEsQ0FQSixDQURKO0FBb0JILENBckJEOztBQXNCQU4sc0JBQXNCLENBQUNPLFlBQXZCLEdBQXNDLEVBQXRDO0FBR0FQLHNCQUFzQixDQUFDUSxTQUF2QixHQUFtQyxFQUFuQztlQUdlUixzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFJvdywgQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vR3JpZCdcbmltcG9ydCBWSFRleHQgZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9UZXh0J1xuaW1wb3J0IFZIQnV0dG9uIGZyb20gJy4uLy4uL0NvbXBvbmVudHMvQnV0dG9uJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5cbmNvbnN0IFZIQ29uZmlybWF0aW9uVGVtcGxhdGUgPSBwcm9wcyA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxSb3cgYWxpZ25JdGVtc0NlbnRlciBtYXJnaW5Ub3A9ezkwfT5cbiAgICAgICAgICAgICAgICA8VkhUZXh0IHRleHQ9e3Byb3BzLnRpdGxlfSB2YXJpYW50PVwiaDRcIi8+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxSb3cgYWxpZ25JdGVtc0NlbnRlciBtYXJnaW5Ub3A9ezM5fT5cbiAgICAgICAgICAgICAgICA8VkhUZXh0IGFsaWduQ2VudGVyIHRleHQ9e3Byb3BzLmRlc2NyaXB0aW9ufSB2YXJpYW50PVwiYm9keXdlYlwiLz5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPFJvdyBhbGlnbkl0ZW1zQ2VudGVyIG1hcmdpblRvcD17Mzl9PlxuICAgICAgICAgICAgPFZIQnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgICBsYWJlbD17cHJvcHMuY3RhTGFiZWx9XG4gICAgICAgICAgICAgICAgb25FdmVudD17cHJvcHMub25FdmVudH1cbiAgICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3Byb3BzLmxvYWRpbmd9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbn1cblZIQ29uZmlybWF0aW9uVGVtcGxhdGUuZGVmYXVsdFByb3BzID0ge1xufVxuXG5WSENvbmZpcm1hdGlvblRlbXBsYXRlLnByb3BUeXBlcyA9IHtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVkhDb25maXJtYXRpb25UZW1wbGF0ZVxuIl19