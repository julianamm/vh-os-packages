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
  return /*#__PURE__*/_react.default.createElement(_Grid.Container, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    alignItemsCenter: true,
    marginTop: 90
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    text: props.title,
    variant: "h4"
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    alignItemsCenter: true,
    marginTop: 39
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    alignCenter: true,
    text: props.description,
    variant: "bodyweb"
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    alignItemsCenter: true,
    marginTop: 39
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL1RlbXBsYXRlcy9Db25maXJtYXRpb24vaW5kZXguanN4Il0sIm5hbWVzIjpbIlZIQ29uZmlybWF0aW9uVGVtcGxhdGUiLCJwcm9wcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjdGFMYWJlbCIsIm9uRXZlbnQiLCJsb2FkaW5nIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFHQSxJQUFNQSxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUFDLEtBQUssRUFBSTtBQUNwQyxzQkFDSSw2QkFBQyxlQUFELHFCQUNJLDZCQUFDLFNBQUQ7QUFBSyxJQUFBLGdCQUFnQixNQUFyQjtBQUFzQixJQUFBLFNBQVMsRUFBRTtBQUFqQyxrQkFDSSw2QkFBQyxhQUFEO0FBQVEsSUFBQSxJQUFJLEVBQUVBLEtBQUssQ0FBQ0MsS0FBcEI7QUFBMkIsSUFBQSxPQUFPLEVBQUM7QUFBbkMsSUFESixDQURKLGVBSUksNkJBQUMsU0FBRDtBQUFLLElBQUEsZ0JBQWdCLE1BQXJCO0FBQXNCLElBQUEsU0FBUyxFQUFFO0FBQWpDLGtCQUNJLDZCQUFDLGFBQUQ7QUFBUSxJQUFBLFdBQVcsTUFBbkI7QUFBb0IsSUFBQSxJQUFJLEVBQUVELEtBQUssQ0FBQ0UsV0FBaEM7QUFBNkMsSUFBQSxPQUFPLEVBQUM7QUFBckQsSUFESixDQUpKLGVBT0ksNkJBQUMsU0FBRDtBQUFLLElBQUEsZ0JBQWdCLE1BQXJCO0FBQXNCLElBQUEsU0FBUyxFQUFFO0FBQWpDLGtCQUNBLDZCQUFDLGVBQUQ7QUFDSSxJQUFBLFNBQVMsRUFBQyxFQURkO0FBRUksSUFBQSxLQUFLLEVBQUVGLEtBQUssQ0FBQ0csUUFGakI7QUFHSSxJQUFBLE9BQU8sRUFBRUgsS0FBSyxDQUFDSSxPQUhuQjtBQUlJLElBQUEsT0FBTyxNQUpYO0FBS0ksSUFBQSxRQUFRLEVBQUVKLEtBQUssQ0FBQ0s7QUFMcEIsSUFEQSxDQVBKLENBREo7QUFvQkgsQ0FyQkQ7O0FBc0JBTixzQkFBc0IsQ0FBQ08sWUFBdkIsR0FBc0MsRUFBdEM7QUFHQVAsc0JBQXNCLENBQUNRLFNBQXZCLEdBQW1DLEVBQW5DO2VBR2VSLHNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUm93LCBDb250YWluZXIgfSBmcm9tICcuLi8uLi9HcmlkJ1xuaW1wb3J0IFZIVGV4dCBmcm9tICcuLi8uLi9Db21wb25lbnRzL1RleHQnXG5pbXBvcnQgVkhCdXR0b24gZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9CdXR0b24nXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cblxuY29uc3QgVkhDb25maXJtYXRpb25UZW1wbGF0ZSA9IHByb3BzID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgPFJvdyBhbGlnbkl0ZW1zQ2VudGVyIG1hcmdpblRvcD17OTB9PlxuICAgICAgICAgICAgICAgIDxWSFRleHQgdGV4dD17cHJvcHMudGl0bGV9IHZhcmlhbnQ9XCJoNFwiLz5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPFJvdyBhbGlnbkl0ZW1zQ2VudGVyIG1hcmdpblRvcD17Mzl9PlxuICAgICAgICAgICAgICAgIDxWSFRleHQgYWxpZ25DZW50ZXIgdGV4dD17cHJvcHMuZGVzY3JpcHRpb259IHZhcmlhbnQ9XCJib2R5d2ViXCIvPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8Um93IGFsaWduSXRlbXNDZW50ZXIgbWFyZ2luVG9wPXszOX0+XG4gICAgICAgICAgICA8VkhCdXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgICAgICAgIGxhYmVsPXtwcm9wcy5jdGFMYWJlbH1cbiAgICAgICAgICAgICAgICBvbkV2ZW50PXtwcm9wcy5vbkV2ZW50fVxuICAgICAgICAgICAgICAgIHByaW1hcnlcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17cHJvcHMubG9hZGluZ31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgKVxufVxuVkhDb25maXJtYXRpb25UZW1wbGF0ZS5kZWZhdWx0UHJvcHMgPSB7XG59XG5cblZIQ29uZmlybWF0aW9uVGVtcGxhdGUucHJvcFR5cGVzID0ge1xufVxuXG5leHBvcnQgZGVmYXVsdCBWSENvbmZpcm1hdGlvblRlbXBsYXRlXG4iXX0=