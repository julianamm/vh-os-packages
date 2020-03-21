"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../Grid/index");

var _index2 = _interopRequireDefault(require("../Text/index"));

var _index3 = _interopRequireDefault(require("../Button/index"));

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHTitleHighlightDescriptionButtonImage = function VHTitleHighlightDescriptionButtonImage(props) {
  return _react.default.createElement(_index.Container, null, _react.default.createElement(_index.Row, {
    row: true
  }, _react.default.createElement(_index.Row, {
    width: "40%",
    marginTop: 150
  }, _react.default.createElement(_index.Row, {
    marginBottom5: true
  }, _react.default.createElement(_index2.default, {
    variant: "h3",
    color: "gray-90",
    text: props.title
  })), _react.default.createElement(_index.Row, {
    marginBottom5: true
  }, _react.default.createElement(_index2.default, {
    variant: "h1",
    color: "gray-90",
    text: props.highlight
  })), _react.default.createElement(_index.Row, {
    marginBottom5: true
  }, _react.default.createElement(_index2.default, {
    variant: "bodyweb",
    color: "gray-90",
    text: props.description
  })), _react.default.createElement(_index.Row, {
    width: "50%",
    marginTop: 30
  }, _react.default.createElement(_index3.default, {
    secondary: true,
    onEvent: function onEvent(e) {},
    label: props.label
  }))), _react.default.createElement(_index.Row, {
    width: "60%",
    height: 500,
    marginTop: 50
  }, _react.default.createElement(S.ImgWrapper, {
    image: props.image
  }))));
};

VHTitleHighlightDescriptionButtonImage.defaultProps = {
  className: ''
};
VHTitleHighlightDescriptionButtonImage.prototypes = {
  className: _propTypes.default.string,
  title: _propTypes.default.string.isRequired,
  highlight: _propTypes.default.string.isRequired,
  description: _propTypes.default.string.isRequired,
  label: _propTypes.default.string,
  image: _propTypes.default.string.isRequired
};
var _default = VHTitleHighlightDescriptionButtonImage;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVGl0bGVIaWdobGlnaHREZXNjcmlwdGlvbkJ1dHRvbkltYWdlL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJWSFRpdGxlSGlnaGxpZ2h0RGVzY3JpcHRpb25CdXR0b25JbWFnZSIsInByb3BzIiwidGl0bGUiLCJoaWdobGlnaHQiLCJkZXNjcmlwdGlvbiIsImUiLCJsYWJlbCIsImltYWdlIiwiZGVmYXVsdFByb3BzIiwiY2xhc3NOYW1lIiwicHJvdG90eXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLHNDQUFzQyxHQUFHLFNBQXpDQSxzQ0FBeUMsQ0FBQUMsS0FBSyxFQUFJO0FBQ3BELFNBQ0ksNkJBQUMsZ0JBQUQsUUFDSSw2QkFBQyxVQUFEO0FBQUssSUFBQSxHQUFHO0FBQVIsS0FDSSw2QkFBQyxVQUFEO0FBQUssSUFBQSxLQUFLLEVBQUUsS0FBWjtBQUFtQixJQUFBLFNBQVMsRUFBRTtBQUE5QixLQUNJLDZCQUFDLFVBQUQ7QUFBSyxJQUFBLGFBQWE7QUFBbEIsS0FDSSw2QkFBQyxlQUFEO0FBQ0ksSUFBQSxPQUFPLEVBQUUsSUFEYjtBQUVJLElBQUEsS0FBSyxFQUFDLFNBRlY7QUFHSSxJQUFBLElBQUksRUFBRUEsS0FBSyxDQUFDQztBQUhoQixJQURKLENBREosRUFRSSw2QkFBQyxVQUFEO0FBQUssSUFBQSxhQUFhO0FBQWxCLEtBQ0ksNkJBQUMsZUFBRDtBQUNJLElBQUEsT0FBTyxFQUFFLElBRGI7QUFFSSxJQUFBLEtBQUssRUFBQyxTQUZWO0FBR0ksSUFBQSxJQUFJLEVBQUVELEtBQUssQ0FBQ0U7QUFIaEIsSUFESixDQVJKLEVBZUksNkJBQUMsVUFBRDtBQUFLLElBQUEsYUFBYTtBQUFsQixLQUNJLDZCQUFDLGVBQUQ7QUFDSSxJQUFBLE9BQU8sRUFBRSxTQURiO0FBRUksSUFBQSxLQUFLLEVBQUMsU0FGVjtBQUdJLElBQUEsSUFBSSxFQUFFRixLQUFLLENBQUNHO0FBSGhCLElBREosQ0FmSixFQXNCSSw2QkFBQyxVQUFEO0FBQUssSUFBQSxLQUFLLEVBQUUsS0FBWjtBQUFtQixJQUFBLFNBQVMsRUFBRTtBQUE5QixLQUNJLDZCQUFDLGVBQUQ7QUFDSSxJQUFBLFNBQVMsTUFEYjtBQUVJLElBQUEsT0FBTyxFQUFFLGlCQUFBQyxDQUFDLEVBQUksQ0FBRSxDQUZwQjtBQUdJLElBQUEsS0FBSyxFQUFFSixLQUFLLENBQUNLO0FBSGpCLElBREosQ0F0QkosQ0FESixFQStCSSw2QkFBQyxVQUFEO0FBQUssSUFBQSxLQUFLLEVBQUUsS0FBWjtBQUFtQixJQUFBLE1BQU0sRUFBRSxHQUEzQjtBQUFnQyxJQUFBLFNBQVMsRUFBRTtBQUEzQyxLQUNJLDZCQUFDLENBQUQsQ0FBRyxVQUFIO0FBQWMsSUFBQSxLQUFLLEVBQUVMLEtBQUssQ0FBQ007QUFBM0IsSUFESixDQS9CSixDQURKLENBREo7QUF1Q0gsQ0F4Q0Q7O0FBMENBUCxzQ0FBc0MsQ0FBQ1EsWUFBdkMsR0FBc0Q7QUFDbERDLEVBQUFBLFNBQVMsRUFBRTtBQUR1QyxDQUF0RDtBQUlBVCxzQ0FBc0MsQ0FBQ1UsVUFBdkMsR0FBb0Q7QUFDaERELEVBQUFBLFNBQVMsRUFBRUUsbUJBQVVDLE1BRDJCO0FBRWhEVixFQUFBQSxLQUFLLEVBQUVTLG1CQUFVQyxNQUFWLENBQWlCQyxVQUZ3QjtBQUdoRFYsRUFBQUEsU0FBUyxFQUFFUSxtQkFBVUMsTUFBVixDQUFpQkMsVUFIb0I7QUFJaERULEVBQUFBLFdBQVcsRUFBRU8sbUJBQVVDLE1BQVYsQ0FBaUJDLFVBSmtCO0FBS2hEUCxFQUFBQSxLQUFLLEVBQUVLLG1CQUFVQyxNQUwrQjtBQU1oREwsRUFBQUEsS0FBSyxFQUFFSSxtQkFBVUMsTUFBVixDQUFpQkM7QUFOd0IsQ0FBcEQ7ZUFTZWIsc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFJvdywgQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vR3JpZC9pbmRleCc7XG5pbXBvcnQgVkhUZXh0IGZyb20gXCIuLi9UZXh0L2luZGV4XCI7XG5pbXBvcnQgVkhCdXR0b24gZnJvbSBcIi4uL0J1dHRvbi9pbmRleFwiO1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL3N0eWxlcyc7XG5cbmNvbnN0IFZIVGl0bGVIaWdobGlnaHREZXNjcmlwdGlvbkJ1dHRvbkltYWdlID0gcHJvcHMgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICA8Um93IHJvdz5cbiAgICAgICAgICAgICAgICA8Um93IHdpZHRoPXtcIjQwJVwifSBtYXJnaW5Ub3A9ezE1MH0+XG4gICAgICAgICAgICAgICAgICAgIDxSb3cgbWFyZ2luQm90dG9tNT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWSFRleHQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD17XCJoM1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZ3JheS05MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17cHJvcHMudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdyBtYXJnaW5Cb3R0b201PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZIVGV4dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PXtcImgxXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJncmF5LTkwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtwcm9wcy5oaWdobGlnaHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPiAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICA8Um93IG1hcmdpbkJvdHRvbTU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VkhUZXh0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9e1wiYm9keXdlYlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZ3JheS05MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17cHJvcHMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAvPiAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICA8Um93IHdpZHRoPXtcIjUwJVwifSBtYXJnaW5Ub3A9ezMwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWSEJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkV2ZW50PXtlID0+IHt9fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17cHJvcHMubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICA8Um93IHdpZHRoPXtcIjYwJVwifSBoZWlnaHQ9ezUwMH0gbWFyZ2luVG9wPXs1MH0+XG4gICAgICAgICAgICAgICAgICAgIDxTLkltZ1dyYXBwZXIgaW1hZ2U9e3Byb3BzLmltYWdlfS8+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgKVxufVxuXG5WSFRpdGxlSGlnaGxpZ2h0RGVzY3JpcHRpb25CdXR0b25JbWFnZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiAnJyxcbn1cblxuVkhUaXRsZUhpZ2hsaWdodERlc2NyaXB0aW9uQnV0dG9uSW1hZ2UucHJvdG90eXBlcyA9IHtcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBoaWdobGlnaHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGltYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgVkhUaXRsZUhpZ2hsaWdodERlc2NyaXB0aW9uQnV0dG9uSW1hZ2U7Il19