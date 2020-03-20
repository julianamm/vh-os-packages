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
  return _react.default.createElement(S.Wrapper, {
    contents: props.contents,
    pointer: props.pointer,
    inline: props.inline,
    className: "vh-title-description ".concat(props.className ? props.className : ''),
    onClick: function onClick() {
      props.setCurrentItem ? props.setCurrentItem() : '';
      props.onOpen ? props.onOpen() : '';
    }
  }, _react.default.createElement(_Text.default, {
    color: props.titleColor,
    variant: props.titleVariant,
    text: props.title,
    onEvent: props.onEvent,
    data: props.data
  }), _react.default.createElement(S.Display, {
    inline: props.inline
  }, _react.default.createElement(_Text.default, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVGl0bGVEZXNjcmlwdGlvbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJWSFRpdGxlRGVzY3JpcHRpb24iLCJwcm9wcyIsImNvbnRlbnRzIiwicG9pbnRlciIsImlubGluZSIsImNsYXNzTmFtZSIsInNldEN1cnJlbnRJdGVtIiwib25PcGVuIiwidGl0bGVDb2xvciIsInRpdGxlVmFyaWFudCIsInRpdGxlIiwib25FdmVudCIsImRhdGEiLCJkZXNjcmlwdGlvbkNvbG9yIiwiZGVzY3JpcHRpb25WYXJpYW50IiwiZGVzY3JpcHRpb24iLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIiwib2JqZWN0IiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFBQyxLQUFLLEVBQUk7QUFDbEMsU0FDRSw2QkFBQyxDQUFELENBQUcsT0FBSDtBQUFXLElBQUEsUUFBUSxFQUFFQSxLQUFLLENBQUNDLFFBQTNCO0FBQ0EsSUFBQSxPQUFPLEVBQUVELEtBQUssQ0FBQ0UsT0FEZjtBQUVFLElBQUEsTUFBTSxFQUFFRixLQUFLLENBQUNHLE1BRmhCO0FBR0UsSUFBQSxTQUFTLGlDQUEwQkgsS0FBSyxDQUFDSSxTQUFOLEdBQWtCSixLQUFLLENBQUNJLFNBQXhCLEdBQW9DLEVBQTlELENBSFg7QUFJRSxJQUFBLE9BQU8sRUFBRSxtQkFBTTtBQUNiSixNQUFBQSxLQUFLLENBQUNLLGNBQU4sR0FBdUJMLEtBQUssQ0FBQ0ssY0FBTixFQUF2QixHQUFnRCxFQUFoRDtBQUNBTCxNQUFBQSxLQUFLLENBQUNNLE1BQU4sR0FBZU4sS0FBSyxDQUFDTSxNQUFOLEVBQWYsR0FBZ0MsRUFBaEM7QUFDRDtBQVBILEtBUUUsNkJBQUMsYUFBRDtBQUNFLElBQUEsS0FBSyxFQUFFTixLQUFLLENBQUNPLFVBRGY7QUFFRSxJQUFBLE9BQU8sRUFBRVAsS0FBSyxDQUFDUSxZQUZqQjtBQUdFLElBQUEsSUFBSSxFQUFFUixLQUFLLENBQUNTLEtBSGQ7QUFJRSxJQUFBLE9BQU8sRUFBRVQsS0FBSyxDQUFDVSxPQUpqQjtBQUtFLElBQUEsSUFBSSxFQUFFVixLQUFLLENBQUNXO0FBTGQsSUFSRixFQWVFLDZCQUFDLENBQUQsQ0FBRyxPQUFIO0FBQVcsSUFBQSxNQUFNLEVBQUVYLEtBQUssQ0FBQ0c7QUFBekIsS0FDRSw2QkFBQyxhQUFEO0FBQ0UsSUFBQSxLQUFLLEVBQUVILEtBQUssQ0FBQ1ksZ0JBRGY7QUFFRSxJQUFBLE9BQU8sRUFBRVosS0FBSyxDQUFDYSxrQkFGakI7QUFHRSxJQUFBLElBQUksRUFBRWIsS0FBSyxDQUFDYyxXQUhkO0FBSUUsSUFBQSxPQUFPLEVBQUVkLEtBQUssQ0FBQ1UsT0FKakI7QUFLRSxJQUFBLElBQUksRUFBRVYsS0FBSyxDQUFDVztBQUxkLElBREYsQ0FmRixDQURGO0FBMkJELENBNUJEOztBQThCQVosa0JBQWtCLENBQUNnQixZQUFuQixHQUFrQztBQUNoQ1IsRUFBQUEsVUFBVSxFQUFFLFVBRG9CO0FBRWhDSyxFQUFBQSxnQkFBZ0IsRUFBRSxTQUZjO0FBR2hDSixFQUFBQSxZQUFZLEVBQUUsV0FIa0I7QUFJaENLLEVBQUFBLGtCQUFrQixFQUFFLFdBSlk7QUFLaENILEVBQUFBLE9BQU8sRUFBRSxFQUx1QjtBQU1oQ0MsRUFBQUEsSUFBSSxFQUFFLEVBTjBCO0FBT2hDUixFQUFBQSxNQUFNLEVBQUUsS0FQd0I7QUFRaENNLEVBQUFBLEtBQUssRUFBRSxFQVJ5QjtBQVNoQ0ssRUFBQUEsV0FBVyxFQUFFLEVBVG1CO0FBVWhDVixFQUFBQSxTQUFTLEVBQUU7QUFWcUIsQ0FBbEM7QUFhQUwsa0JBQWtCLENBQUNpQixTQUFuQixHQUErQjtBQUM3QlosRUFBQUEsU0FBUyxFQUFFYSxtQkFBVUMsTUFEUTtBQUU3QlgsRUFBQUEsVUFBVSxFQUFFVSxtQkFBVUMsTUFGTztBQUc3Qk4sRUFBQUEsZ0JBQWdCLEVBQUVLLG1CQUFVQyxNQUhDO0FBSTdCVixFQUFBQSxZQUFZLEVBQUVTLG1CQUFVQyxNQUpLO0FBSzdCTCxFQUFBQSxrQkFBa0IsRUFBRUksbUJBQVVDLE1BTEQ7QUFNN0JSLEVBQUFBLE9BQU8sRUFBRU8sbUJBQVVFLElBTlU7QUFPN0JSLEVBQUFBLElBQUksRUFBRU0sbUJBQVVHLE1BUGE7QUFRN0JqQixFQUFBQSxNQUFNLEVBQUVjLG1CQUFVSSxJQVJXO0FBUzdCWixFQUFBQSxLQUFLLEVBQUVRLG1CQUFVQyxNQVRZO0FBVTdCSixFQUFBQSxXQUFXLEVBQUVHLG1CQUFVQztBQVZNLENBQS9CO2VBYWVuQixrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9zdHlsZXMnXG5pbXBvcnQgVkhUZXh0IGZyb20gJy4uL1RleHQnXG5cbmNvbnN0IFZIVGl0bGVEZXNjcmlwdGlvbiA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Uy5XcmFwcGVyIGNvbnRlbnRzPXtwcm9wcy5jb250ZW50c31cbiAgICBwb2ludGVyPXtwcm9wcy5wb2ludGVyfVxuICAgICAgaW5saW5lPXtwcm9wcy5pbmxpbmV9XG4gICAgICBjbGFzc05hbWU9e2B2aC10aXRsZS1kZXNjcmlwdGlvbiAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9XG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIHByb3BzLnNldEN1cnJlbnRJdGVtID8gcHJvcHMuc2V0Q3VycmVudEl0ZW0oKSA6ICcnXG4gICAgICAgIHByb3BzLm9uT3BlbiA/IHByb3BzLm9uT3BlbigpIDogJydcbiAgICAgIH19PlxuICAgICAgPFZIVGV4dFxuICAgICAgICBjb2xvcj17cHJvcHMudGl0bGVDb2xvcn1cbiAgICAgICAgdmFyaWFudD17cHJvcHMudGl0bGVWYXJpYW50fVxuICAgICAgICB0ZXh0PXtwcm9wcy50aXRsZX1cbiAgICAgICAgb25FdmVudD17cHJvcHMub25FdmVudH1cbiAgICAgICAgZGF0YT17cHJvcHMuZGF0YX1cbiAgICAgIC8+XG4gICAgICA8Uy5EaXNwbGF5IGlubGluZT17cHJvcHMuaW5saW5lfT5cbiAgICAgICAgPFZIVGV4dFxuICAgICAgICAgIGNvbG9yPXtwcm9wcy5kZXNjcmlwdGlvbkNvbG9yfVxuICAgICAgICAgIHZhcmlhbnQ9e3Byb3BzLmRlc2NyaXB0aW9uVmFyaWFudH1cbiAgICAgICAgICB0ZXh0PXtwcm9wcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICBvbkV2ZW50PXtwcm9wcy5vbkV2ZW50fVxuICAgICAgICAgIGRhdGE9e3Byb3BzLmRhdGF9XG4gICAgICAgIC8+XG4gICAgICA8L1MuRGlzcGxheT5cbiAgICA8L1MuV3JhcHBlcj5cbiAgKVxufVxuXG5WSFRpdGxlRGVzY3JpcHRpb24uZGVmYXVsdFByb3BzID0ge1xuICB0aXRsZUNvbG9yOiBcImdyYXktMTAwXCIsXG4gIGRlc2NyaXB0aW9uQ29sb3I6IFwiZ3JheS05MFwiLFxuICB0aXRsZVZhcmlhbnQ6IFwic3VidGl0bGUzXCIsXG4gIGRlc2NyaXB0aW9uVmFyaWFudDogXCJwbGF0Zm9ybTFcIixcbiAgb25FdmVudDogXCJcIixcbiAgZGF0YTogXCJcIixcbiAgaW5saW5lOiBmYWxzZSxcbiAgdGl0bGU6IFwiXCIsXG4gIGRlc2NyaXB0aW9uOiBcIlwiLFxuICBjbGFzc05hbWU6IFwidmgtdGl0bGUtZGVzY3JpcHRpb25cIixcbn1cblxuVkhUaXRsZURlc2NyaXB0aW9uLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0aXRsZUNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZXNjcmlwdGlvbkNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0aXRsZVZhcmlhbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlc2NyaXB0aW9uVmFyaWFudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25FdmVudDogUHJvcFR5cGVzLmZ1bmMsXG4gIGRhdGE6IFByb3BUeXBlcy5vYmplY3QsXG4gIGlubGluZTogUHJvcFR5cGVzLmJvb2wsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgVkhUaXRsZURlc2NyaXB0aW9uXG4iXX0=