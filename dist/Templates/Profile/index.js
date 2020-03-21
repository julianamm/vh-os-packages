"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _General = _interopRequireDefault(require("../../Sections/General"));

var _skills = _interopRequireDefault(require("../../Sections/skills"));

var _Relocation = _interopRequireDefault(require("../../Sections/Relocation"));

var _Education = _interopRequireDefault(require("../../Sections/Education"));

var _Social = _interopRequireDefault(require("../../Sections/Social"));

var _UserCompanyExperience = _interopRequireDefault(require("../../Sections/UserCompanyExperience"));

var _index = _interopRequireDefault(require("../PageSection/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var VHProfileTemplate = function VHProfileTemplate(props) {
  return /*#__PURE__*/_react.default.createElement(_Grid.Container, {
    md: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom: 10
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "general"
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    content: /*#__PURE__*/_react.default.createElement(_General.default, _extends({}, props, {
      onEvent: props.onEvent
    }))
  }))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom: 10
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "skills"
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    content: /*#__PURE__*/_react.default.createElement(_skills.default, _extends({}, props, {
      onEvent: props.onEvent
    }))
  }))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom: 10
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "relocation"
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    content: /*#__PURE__*/_react.default.createElement(_Relocation.default, _extends({}, props, {
      onEvent: props.onEvent
    }))
  }))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom: 10
  }, /*#__PURE__*/_react.default.createElement(_Social.default, _extends({}, props, {
    onEvent: props.onEvent
  }))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom: 10
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "education"
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    content: /*#__PURE__*/_react.default.createElement(_Education.default, _extends({}, props, {
      onEvent: props.onEvent
    }))
  }))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom: 10
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "education"
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    content: /*#__PURE__*/_react.default.createElement(_UserCompanyExperience.default, _extends({}, props, {
      onEvent: props.onEvent
    }))
  }))));
};

VHProfileTemplate.defaultProps = {};
VHProfileTemplate.propTypes = {};
var _default = VHProfileTemplate;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL1RlbXBsYXRlcy9Qcm9maWxlL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJWSFByb2ZpbGVUZW1wbGF0ZSIsInByb3BzIiwib25FdmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUFDLEtBQUs7QUFBQSxzQkFDN0IsNkJBQUMsZUFBRDtBQUFXLElBQUEsRUFBRTtBQUFiLGtCQUNFLDZCQUFDLFNBQUQ7QUFBSyxJQUFBLFlBQVksRUFBRTtBQUFuQixrQkFDRTtBQUFLLElBQUEsRUFBRSxFQUFFO0FBQVQsa0JBQ0UsNkJBQUMsY0FBRDtBQUFlLElBQUEsT0FBTyxlQUNwQiw2QkFBQyxnQkFBRCxlQUNNQSxLQUROO0FBRUUsTUFBQSxPQUFPLEVBQUVBLEtBQUssQ0FBQ0M7QUFGakI7QUFERixJQURGLENBREYsQ0FERixlQVdFLDZCQUFDLFNBQUQ7QUFBSyxJQUFBLFlBQVksRUFBRTtBQUFuQixrQkFDRTtBQUFLLElBQUEsRUFBRSxFQUFFO0FBQVQsa0JBQ0UsNkJBQUMsY0FBRDtBQUFlLElBQUEsT0FBTyxlQUNwQiw2QkFBQyxlQUFELGVBQ01ELEtBRE47QUFFRSxNQUFBLE9BQU8sRUFBRUEsS0FBSyxDQUFDQztBQUZqQjtBQURGLElBREYsQ0FERixDQVhGLGVBcUJFLDZCQUFDLFNBQUQ7QUFBSyxJQUFBLFlBQVksRUFBRTtBQUFuQixrQkFDRTtBQUFLLElBQUEsRUFBRSxFQUFFO0FBQVQsa0JBQ0UsNkJBQUMsY0FBRDtBQUFlLElBQUEsT0FBTyxlQUNwQiw2QkFBQyxtQkFBRCxlQUNNRCxLQUROO0FBRUUsTUFBQSxPQUFPLEVBQUVBLEtBQUssQ0FBQ0M7QUFGakI7QUFERixJQURGLENBREYsQ0FyQkYsZUErQkUsNkJBQUMsU0FBRDtBQUFLLElBQUEsWUFBWSxFQUFFO0FBQW5CLGtCQUNFLDZCQUFDLGVBQUQsZUFDTUQsS0FETjtBQUVFLElBQUEsT0FBTyxFQUFFQSxLQUFLLENBQUNDO0FBRmpCLEtBREYsQ0EvQkYsZUFxQ0UsNkJBQUMsU0FBRDtBQUFLLElBQUEsWUFBWSxFQUFFO0FBQW5CLGtCQUNFO0FBQUssSUFBQSxFQUFFLEVBQUU7QUFBVCxrQkFDRSw2QkFBQyxjQUFEO0FBQWUsSUFBQSxPQUFPLGVBQ3BCLDZCQUFDLGtCQUFELGVBQ01ELEtBRE47QUFFRSxNQUFBLE9BQU8sRUFBRUEsS0FBSyxDQUFDQztBQUZqQjtBQURGLElBREYsQ0FERixDQXJDRixlQStDRSw2QkFBQyxTQUFEO0FBQUssSUFBQSxZQUFZLEVBQUU7QUFBbkIsa0JBQ0U7QUFBSyxJQUFBLEVBQUUsRUFBRTtBQUFULGtCQUNFLDZCQUFDLGNBQUQ7QUFBZSxJQUFBLE9BQU8sZUFDcEIsNkJBQUMsOEJBQUQsZUFDTUQsS0FETjtBQUVFLE1BQUEsT0FBTyxFQUFFQSxLQUFLLENBQUNDO0FBRmpCO0FBREYsSUFERixDQURGLENBL0NGLENBRDZCO0FBQUEsQ0FBL0I7O0FBbUVBRixpQkFBaUIsQ0FBQ0csWUFBbEIsR0FBaUMsRUFBakM7QUFHQUgsaUJBQWlCLENBQUNJLFNBQWxCLEdBQThCLEVBQTlCO2VBR2VKLGlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IENvbnRhaW5lciwgUm93IH0gZnJvbSAnLi4vLi4vR3JpZCc7XG5pbXBvcnQgVkhHZW5lcmFsU2VjdGlvbiBmcm9tICcuLi8uLi9TZWN0aW9ucy9HZW5lcmFsJ1xuaW1wb3J0IFZIU2tpbGxzU2VjdGlvbiBmcm9tICcuLi8uLi9TZWN0aW9ucy9za2lsbHMnXG5pbXBvcnQgVkhSZWxvY2F0aW9uU2VjdGlvbiBmcm9tICcuLi8uLi9TZWN0aW9ucy9SZWxvY2F0aW9uJ1xuaW1wb3J0IFZIRWR1Y2F0aW9uU2VjdGlvbiBmcm9tICcuLi8uLi9TZWN0aW9ucy9FZHVjYXRpb24nXG5pbXBvcnQgVkhTb2NpYWxTZWN0aW9uIGZyb20gJy4uLy4uL1NlY3Rpb25zL1NvY2lhbCdcbmltcG9ydCBWSFVzZXJDb21wYW55RXhwZXJpZW5jZVNlY3Rpb24gZnJvbSAnLi4vLi4vU2VjdGlvbnMvVXNlckNvbXBhbnlFeHBlcmllbmNlJ1xuaW1wb3J0IFZIUGFnZVNlY3Rpb24gZnJvbSAnLi4vUGFnZVNlY3Rpb24vaW5kZXgnXG5cbmNvbnN0IFZIUHJvZmlsZVRlbXBsYXRlID0gcHJvcHMgPT4gKFxuICA8Q29udGFpbmVyIG1kPlxuICAgIDxSb3cgbWFyZ2luQm90dG9tPXsxMH0+XG4gICAgICA8ZGl2IGlkPXtcImdlbmVyYWxcIn0+XG4gICAgICAgIDxWSFBhZ2VTZWN0aW9uIGNvbnRlbnQ9e1xuICAgICAgICAgIDxWSEdlbmVyYWxTZWN0aW9uXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICBvbkV2ZW50PXtwcm9wcy5vbkV2ZW50fVxuICAgICAgICAgIC8+XG4gICAgICAgIH0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvUm93PlxuICAgIDxSb3cgbWFyZ2luQm90dG9tPXsxMH0+XG4gICAgICA8ZGl2IGlkPXtcInNraWxsc1wifT5cbiAgICAgICAgPFZIUGFnZVNlY3Rpb24gY29udGVudD17XG4gICAgICAgICAgPFZIU2tpbGxzU2VjdGlvblxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgb25FdmVudD17cHJvcHMub25FdmVudH1cbiAgICAgICAgICAvPlxuICAgICAgICB9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L1Jvdz5cbiAgICA8Um93IG1hcmdpbkJvdHRvbT17MTB9PlxuICAgICAgPGRpdiBpZD17XCJyZWxvY2F0aW9uXCJ9PlxuICAgICAgICA8VkhQYWdlU2VjdGlvbiBjb250ZW50PXtcbiAgICAgICAgICA8VkhSZWxvY2F0aW9uU2VjdGlvblxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgb25FdmVudD17cHJvcHMub25FdmVudH1cbiAgICAgICAgICAvPlxuICAgICAgICB9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L1Jvdz5cbiAgICA8Um93IG1hcmdpbkJvdHRvbT17MTB9PlxuICAgICAgPFZIU29jaWFsU2VjdGlvblxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIG9uRXZlbnQ9e3Byb3BzLm9uRXZlbnR9XG4gICAgICAvPlxuICAgIDwvUm93PlxuICAgIDxSb3cgbWFyZ2luQm90dG9tPXsxMH0+XG4gICAgICA8ZGl2IGlkPXtcImVkdWNhdGlvblwifT5cbiAgICAgICAgPFZIUGFnZVNlY3Rpb24gY29udGVudD17XG4gICAgICAgICAgPFZIRWR1Y2F0aW9uU2VjdGlvblxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgb25FdmVudD17cHJvcHMub25FdmVudH1cbiAgICAgICAgICAvPlxuICAgICAgICB9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L1Jvdz5cbiAgICA8Um93IG1hcmdpbkJvdHRvbT17MTB9PlxuICAgICAgPGRpdiBpZD17XCJlZHVjYXRpb25cIn0+XG4gICAgICAgIDxWSFBhZ2VTZWN0aW9uIGNvbnRlbnQ9e1xuICAgICAgICAgIDxWSFVzZXJDb21wYW55RXhwZXJpZW5jZVNlY3Rpb25cbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIG9uRXZlbnQ9e3Byb3BzLm9uRXZlbnR9XG4gICAgICAgICAgLz5cbiAgICAgICAgfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9Sb3c+XG4gICAgey8qPFJvdyBtYXJnaW5Cb3R0b209ezEwfT5cbiAgICAgIDxWSFVzZXJDb21wYW55RXhwZXJpZW5jZVNlY3Rpb25cbiAgICAgICAgey4uLnByb3BzLnVzZXJDb21wYW55RXhwZXJpZW5jZX1cbiAgICAgICAgb25FdmVudD17cHJvcHMub25FdmVudH1cbiAgICAgIC8+XG4gICAgPC9Sb3c+ICovfVxuICA8L0NvbnRhaW5lcj5cbilcblxuVkhQcm9maWxlVGVtcGxhdGUuZGVmYXVsdFByb3BzID0ge1xufVxuXG5WSFByb2ZpbGVUZW1wbGF0ZS5wcm9wVHlwZXMgPSB7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZIUHJvZmlsZVRlbXBsYXRlXG4iXX0=