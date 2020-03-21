"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _index = _interopRequireDefault(require("../Text/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHHeaderVisaPipeline = function VHHeaderVisaPipeline(props) {
  return /*#__PURE__*/_react.default.createElement(_Grid.Container, {
    lg: true,
    className: "vh-header-visa-pipe-line ".concat(props.className ? props.className : '')
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_index.default, {
    variant: 'h2',
    text: "Visa Pipeline"
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, null), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    justifySpaceAround: true
  }))), props.children);
};

VHHeaderVisaPipeline.defaultProps = {
  title: "Pipeline",
  inputPlaceholder: "search",
  inputValue: "search",
  onEvent: null
};
VHHeaderVisaPipeline.propTypes = {
  title: _propTypes.default.string,
  inputPlaceholder: _propTypes.default.string,
  inputValue: _propTypes.default.string,
  onEvent: _propTypes.default.func.isRequired
};
var _default = VHHeaderVisaPipeline;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvSGVhZGVyVmlzYVBpcGVsaW5lL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJWSEhlYWRlclZpc2FQaXBlbGluZSIsInByb3BzIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJkZWZhdWx0UHJvcHMiLCJ0aXRsZSIsImlucHV0UGxhY2Vob2xkZXIiLCJpbnB1dFZhbHVlIiwib25FdmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUFDLEtBQUssRUFBSTtBQUNwQyxzQkFDRSw2QkFBQyxlQUFEO0FBQVcsSUFBQSxFQUFFLE1BQWI7QUFBYyxJQUFBLFNBQVMscUNBQThCQSxLQUFLLENBQUNDLFNBQU4sR0FBa0JELEtBQUssQ0FBQ0MsU0FBeEIsR0FBb0MsRUFBbEU7QUFBdkIsa0JBQ0UsNkJBQUMsU0FBRDtBQUFLLElBQUEsR0FBRyxNQUFSO0FBQVMsSUFBQSxnQkFBZ0I7QUFBekIsa0JBQ0UsNkJBQUMsU0FBRCxxQkFDRSw2QkFBQyxjQUFEO0FBQ0UsSUFBQSxPQUFPLEVBQUUsSUFEWDtBQUNpQixJQUFBLElBQUksRUFBQztBQUR0QixJQURGLENBREYsZUFNRSw2QkFBQyxTQUFEO0FBQUssSUFBQSxHQUFHLE1BQVI7QUFBUyxJQUFBLGdCQUFnQjtBQUF6QixrQkFDRSw2QkFBQyxTQUFELE9BREYsZUFHRSw2QkFBQyxTQUFEO0FBQUssSUFBQSxHQUFHLE1BQVI7QUFBUyxJQUFBLGtCQUFrQjtBQUEzQixJQUhGLENBTkYsQ0FERixFQWNHRCxLQUFLLENBQUNFLFFBZFQsQ0FERjtBQWtCRCxDQW5CRDs7QUFxQkFILG9CQUFvQixDQUFDSSxZQUFyQixHQUFvQztBQUNoQ0MsRUFBQUEsS0FBSyxFQUFFLFVBRHlCO0FBRWhDQyxFQUFBQSxnQkFBZ0IsRUFBRSxRQUZjO0FBR2hDQyxFQUFBQSxVQUFVLEVBQUUsUUFIb0I7QUFJaENDLEVBQUFBLE9BQU8sRUFBRTtBQUp1QixDQUFwQztBQU9BUixvQkFBb0IsQ0FBQ1MsU0FBckIsR0FBaUM7QUFDN0JKLEVBQUFBLEtBQUssRUFBRUssbUJBQVVDLE1BRFk7QUFFN0JMLEVBQUFBLGdCQUFnQixFQUFFSSxtQkFBVUMsTUFGQztBQUc3QkosRUFBQUEsVUFBVSxFQUFFRyxtQkFBVUMsTUFITztBQUk3QkgsRUFBQUEsT0FBTyxFQUFFRSxtQkFBVUUsSUFBVixDQUFlQztBQUpLLENBQWpDO2VBT2ViLG9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgUm93LCBDb250YWluZXIgfSBmcm9tIFwiLi4vLi4vR3JpZFwiO1xuaW1wb3J0IFZIVGV4dCBmcm9tICcuLi9UZXh0L2luZGV4J1xuXG5jb25zdCBWSEhlYWRlclZpc2FQaXBlbGluZSA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGxnIGNsYXNzTmFtZT17YHZoLWhlYWRlci12aXNhLXBpcGUtbGluZSAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9PlxuICAgICAgPFJvdyByb3cgYWxpZ25JdGVtc0NlbnRlcj5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8VkhUZXh0XG4gICAgICAgICAgICB2YXJpYW50PXsnaDInfSB0ZXh0PVwiVmlzYSBQaXBlbGluZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3cgcm93IGFsaWduSXRlbXNDZW50ZXI+XG4gICAgICAgICAgPFJvdz5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8Um93IHJvdyBqdXN0aWZ5U3BhY2VBcm91bmQ+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9Sb3c+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5WSEhlYWRlclZpc2FQaXBlbGluZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdGl0bGU6IFwiUGlwZWxpbmVcIixcbiAgICBpbnB1dFBsYWNlaG9sZGVyOiBcInNlYXJjaFwiLFxuICAgIGlucHV0VmFsdWU6IFwic2VhcmNoXCIsXG4gICAgb25FdmVudDogbnVsbCxcbn07XG5cblZISGVhZGVyVmlzYVBpcGVsaW5lLnByb3BUeXBlcyA9IHtcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpbnB1dFBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlucHV0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25FdmVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZISGVhZGVyVmlzYVBpcGVsaW5lO1xuIl19