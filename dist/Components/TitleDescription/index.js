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

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHTitleDescription = function VHTitleDescription(props) {
  return /*#__PURE__*/_react.default.createElement(S.Wrapper, {
    contents: props.contents,
    pointer: props.pointer,
    inline: props.inline,
    className: "vh-title-description ".concat(props.className ? props.className : ''),
    onClick: function onClick() {
      props.setNewExperience ? props.setNewExperience() : '';
      props.setCurrentItem ? props.setCurrentItem() : '';
      props.onOpen ? props.onOpen() : '';
    }
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    color: props.titleColor,
    variant: props.titleVariant,
    text: props.title,
    onEvent: props.onEvent,
    data: props.data
  }), /*#__PURE__*/_react.default.createElement(S.Display, {
    inline: props.inline
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    color: props.descriptionColor,
    variant: props.descriptionVariant,
    text: props.description,
    onEvent: props.onEvent,
    data: props.data
  })));
};

VHTitleDescription.defaultProps = {
  titleColor: "gray-100",
  descriptionColor: "gray-90",
  titleVariant: "subtitle3",
  descriptionVariant: "platform1",
  onEvent: "",
  data: "",
  inline: false,
  title: "",
  description: "",
  className: "vh-title-description"
};
VHTitleDescription.propTypes = {
  className: _propTypes.default.string,
  titleColor: _propTypes.default.string,
  descriptionColor: _propTypes.default.string,
  titleVariant: _propTypes.default.string,
  descriptionVariant: _propTypes.default.string,
  onEvent: _propTypes.default.func,
  data: _propTypes.default.object,
  inline: _propTypes.default.bool,
  title: _propTypes.default.string,
  description: _propTypes.default.string
};
var _default = VHTitleDescription;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVGl0bGVEZXNjcmlwdGlvbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJWSFRpdGxlRGVzY3JpcHRpb24iLCJwcm9wcyIsImNvbnRlbnRzIiwicG9pbnRlciIsImlubGluZSIsImNsYXNzTmFtZSIsInNldE5ld0V4cGVyaWVuY2UiLCJzZXRDdXJyZW50SXRlbSIsIm9uT3BlbiIsInRpdGxlQ29sb3IiLCJ0aXRsZVZhcmlhbnQiLCJ0aXRsZSIsIm9uRXZlbnQiLCJkYXRhIiwiZGVzY3JpcHRpb25Db2xvciIsImRlc2NyaXB0aW9uVmFyaWFudCIsImRlc2NyaXB0aW9uIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsIm9iamVjdCIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQUMsS0FBSyxFQUFJO0FBQ2xDLHNCQUNFLDZCQUFDLENBQUQsQ0FBRyxPQUFIO0FBQVcsSUFBQSxRQUFRLEVBQUVBLEtBQUssQ0FBQ0MsUUFBM0I7QUFDQSxJQUFBLE9BQU8sRUFBRUQsS0FBSyxDQUFDRSxPQURmO0FBRUUsSUFBQSxNQUFNLEVBQUVGLEtBQUssQ0FBQ0csTUFGaEI7QUFHRSxJQUFBLFNBQVMsaUNBQTBCSCxLQUFLLENBQUNJLFNBQU4sR0FBa0JKLEtBQUssQ0FBQ0ksU0FBeEIsR0FBb0MsRUFBOUQsQ0FIWDtBQUlFLElBQUEsT0FBTyxFQUFFLG1CQUFNO0FBQ2JKLE1BQUFBLEtBQUssQ0FBQ0ssZ0JBQU4sR0FBeUJMLEtBQUssQ0FBQ0ssZ0JBQU4sRUFBekIsR0FBb0QsRUFBcEQ7QUFDQUwsTUFBQUEsS0FBSyxDQUFDTSxjQUFOLEdBQXVCTixLQUFLLENBQUNNLGNBQU4sRUFBdkIsR0FBZ0QsRUFBaEQ7QUFDQU4sTUFBQUEsS0FBSyxDQUFDTyxNQUFOLEdBQWVQLEtBQUssQ0FBQ08sTUFBTixFQUFmLEdBQWdDLEVBQWhDO0FBQ0Q7QUFSSCxrQkFTRSw2QkFBQyxhQUFEO0FBQ0UsSUFBQSxLQUFLLEVBQUVQLEtBQUssQ0FBQ1EsVUFEZjtBQUVFLElBQUEsT0FBTyxFQUFFUixLQUFLLENBQUNTLFlBRmpCO0FBR0UsSUFBQSxJQUFJLEVBQUVULEtBQUssQ0FBQ1UsS0FIZDtBQUlFLElBQUEsT0FBTyxFQUFFVixLQUFLLENBQUNXLE9BSmpCO0FBS0UsSUFBQSxJQUFJLEVBQUVYLEtBQUssQ0FBQ1k7QUFMZCxJQVRGLGVBZ0JFLDZCQUFDLENBQUQsQ0FBRyxPQUFIO0FBQVcsSUFBQSxNQUFNLEVBQUVaLEtBQUssQ0FBQ0c7QUFBekIsa0JBQ0UsNkJBQUMsYUFBRDtBQUNFLElBQUEsS0FBSyxFQUFFSCxLQUFLLENBQUNhLGdCQURmO0FBRUUsSUFBQSxPQUFPLEVBQUViLEtBQUssQ0FBQ2Msa0JBRmpCO0FBR0UsSUFBQSxJQUFJLEVBQUVkLEtBQUssQ0FBQ2UsV0FIZDtBQUlFLElBQUEsT0FBTyxFQUFFZixLQUFLLENBQUNXLE9BSmpCO0FBS0UsSUFBQSxJQUFJLEVBQUVYLEtBQUssQ0FBQ1k7QUFMZCxJQURGLENBaEJGLENBREY7QUE0QkQsQ0E3QkQ7O0FBK0JBYixrQkFBa0IsQ0FBQ2lCLFlBQW5CLEdBQWtDO0FBQ2hDUixFQUFBQSxVQUFVLEVBQUUsVUFEb0I7QUFFaENLLEVBQUFBLGdCQUFnQixFQUFFLFNBRmM7QUFHaENKLEVBQUFBLFlBQVksRUFBRSxXQUhrQjtBQUloQ0ssRUFBQUEsa0JBQWtCLEVBQUUsV0FKWTtBQUtoQ0gsRUFBQUEsT0FBTyxFQUFFLEVBTHVCO0FBTWhDQyxFQUFBQSxJQUFJLEVBQUUsRUFOMEI7QUFPaENULEVBQUFBLE1BQU0sRUFBRSxLQVB3QjtBQVFoQ08sRUFBQUEsS0FBSyxFQUFFLEVBUnlCO0FBU2hDSyxFQUFBQSxXQUFXLEVBQUUsRUFUbUI7QUFVaENYLEVBQUFBLFNBQVMsRUFBRTtBQVZxQixDQUFsQztBQWFBTCxrQkFBa0IsQ0FBQ2tCLFNBQW5CLEdBQStCO0FBQzdCYixFQUFBQSxTQUFTLEVBQUVjLG1CQUFVQyxNQURRO0FBRTdCWCxFQUFBQSxVQUFVLEVBQUVVLG1CQUFVQyxNQUZPO0FBRzdCTixFQUFBQSxnQkFBZ0IsRUFBRUssbUJBQVVDLE1BSEM7QUFJN0JWLEVBQUFBLFlBQVksRUFBRVMsbUJBQVVDLE1BSks7QUFLN0JMLEVBQUFBLGtCQUFrQixFQUFFSSxtQkFBVUMsTUFMRDtBQU03QlIsRUFBQUEsT0FBTyxFQUFFTyxtQkFBVUUsSUFOVTtBQU83QlIsRUFBQUEsSUFBSSxFQUFFTSxtQkFBVUcsTUFQYTtBQVE3QmxCLEVBQUFBLE1BQU0sRUFBRWUsbUJBQVVJLElBUlc7QUFTN0JaLEVBQUFBLEtBQUssRUFBRVEsbUJBQVVDLE1BVFk7QUFVN0JKLEVBQUFBLFdBQVcsRUFBRUcsbUJBQVVDO0FBVk0sQ0FBL0I7ZUFhZXBCLGtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL3N0eWxlcydcbmltcG9ydCBWSFRleHQgZnJvbSAnLi4vVGV4dCdcblxuY29uc3QgVkhUaXRsZURlc2NyaXB0aW9uID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTLldyYXBwZXIgY29udGVudHM9e3Byb3BzLmNvbnRlbnRzfVxuICAgIHBvaW50ZXI9e3Byb3BzLnBvaW50ZXJ9XG4gICAgICBpbmxpbmU9e3Byb3BzLmlubGluZX1cbiAgICAgIGNsYXNzTmFtZT17YHZoLXRpdGxlLWRlc2NyaXB0aW9uICR7cHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogJyd9YH1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgcHJvcHMuc2V0TmV3RXhwZXJpZW5jZSA/IHByb3BzLnNldE5ld0V4cGVyaWVuY2UoKSA6ICcnIFxuICAgICAgICBwcm9wcy5zZXRDdXJyZW50SXRlbSA/IHByb3BzLnNldEN1cnJlbnRJdGVtKCkgOiAnJ1xuICAgICAgICBwcm9wcy5vbk9wZW4gPyBwcm9wcy5vbk9wZW4oKSA6ICcnXG4gICAgICB9fT5cbiAgICAgIDxWSFRleHRcbiAgICAgICAgY29sb3I9e3Byb3BzLnRpdGxlQ29sb3J9XG4gICAgICAgIHZhcmlhbnQ9e3Byb3BzLnRpdGxlVmFyaWFudH1cbiAgICAgICAgdGV4dD17cHJvcHMudGl0bGV9XG4gICAgICAgIG9uRXZlbnQ9e3Byb3BzLm9uRXZlbnR9XG4gICAgICAgIGRhdGE9e3Byb3BzLmRhdGF9XG4gICAgICAvPlxuICAgICAgPFMuRGlzcGxheSBpbmxpbmU9e3Byb3BzLmlubGluZX0+XG4gICAgICAgIDxWSFRleHRcbiAgICAgICAgICBjb2xvcj17cHJvcHMuZGVzY3JpcHRpb25Db2xvcn1cbiAgICAgICAgICB2YXJpYW50PXtwcm9wcy5kZXNjcmlwdGlvblZhcmlhbnR9XG4gICAgICAgICAgdGV4dD17cHJvcHMuZGVzY3JpcHRpb259XG4gICAgICAgICAgb25FdmVudD17cHJvcHMub25FdmVudH1cbiAgICAgICAgICBkYXRhPXtwcm9wcy5kYXRhfVxuICAgICAgICAvPlxuICAgICAgPC9TLkRpc3BsYXk+XG4gICAgPC9TLldyYXBwZXI+XG4gIClcbn1cblxuVkhUaXRsZURlc2NyaXB0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGl0bGVDb2xvcjogXCJncmF5LTEwMFwiLFxuICBkZXNjcmlwdGlvbkNvbG9yOiBcImdyYXktOTBcIixcbiAgdGl0bGVWYXJpYW50OiBcInN1YnRpdGxlM1wiLFxuICBkZXNjcmlwdGlvblZhcmlhbnQ6IFwicGxhdGZvcm0xXCIsXG4gIG9uRXZlbnQ6IFwiXCIsXG4gIGRhdGE6IFwiXCIsXG4gIGlubGluZTogZmFsc2UsXG4gIHRpdGxlOiBcIlwiLFxuICBkZXNjcmlwdGlvbjogXCJcIixcbiAgY2xhc3NOYW1lOiBcInZoLXRpdGxlLWRlc2NyaXB0aW9uXCIsXG59XG5cblZIVGl0bGVEZXNjcmlwdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGl0bGVDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVzY3JpcHRpb25Db2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGl0bGVWYXJpYW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZXNjcmlwdGlvblZhcmlhbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uRXZlbnQ6IFByb3BUeXBlcy5mdW5jLFxuICBkYXRhOiBQcm9wVHlwZXMub2JqZWN0LFxuICBpbmxpbmU6IFByb3BUeXBlcy5ib29sLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZIVGl0bGVEZXNjcmlwdGlvblxuIl19