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
  return _react.default.createElement(_Grid.Container, {
    md: true
  }, _react.default.createElement(_Grid.Row, {
    marginBottom: 10
  }, _react.default.createElement("div", {
    id: "general"
  }, _react.default.createElement(_index.default, {
    content: _react.default.createElement(_General.default, _extends({}, props, {
      onEvent: props.onEvent
    }))
  }))), _react.default.createElement(_Grid.Row, {
    marginBottom: 10
  }, _react.default.createElement("div", {
    id: "skills"
  }, _react.default.createElement(_index.default, {
    content: _react.default.createElement(_skills.default, _extends({}, props, {
      onEvent: props.onEvent
    }))
  }))), _react.default.createElement(_Grid.Row, {
    marginBottom: 10
  }, _react.default.createElement("div", {
    id: "relocation"
  }, _react.default.createElement(_index.default, {
    content: _react.default.createElement(_Relocation.default, _extends({}, props, {
      onEvent: props.onEvent
    }))
  }))), _react.default.createElement(_Grid.Row, {
    marginBottom: 10
  }, _react.default.createElement(_Social.default, _extends({}, props, {
    onEvent: props.onEvent
  }))), _react.default.createElement(_Grid.Row, {
    marginBottom: 10
  }, _react.default.createElement("div", {
    id: "education"
  }, _react.default.createElement(_index.default, {
    content: _react.default.createElement(_Education.default, _extends({}, props, {
      onEvent: props.onEvent
    }))
  }))), _react.default.createElement(_Grid.Row, {
    marginBottom: 10
  }, _react.default.createElement("div", {
    id: "education"
  }, _react.default.createElement(_index.default, {
    content: _react.default.createElement(_UserCompanyExperience.default, _extends({}, props, {
      onEvent: props.onEvent
    }))
  }))));
};

VHProfileTemplate.defaultProps = {};
VHProfileTemplate.propTypes = {};
var _default = VHProfileTemplate;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL1RlbXBsYXRlcy9Qcm9maWxlL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJWSFByb2ZpbGVUZW1wbGF0ZSIsInByb3BzIiwib25FdmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUFDLEtBQUs7QUFBQSxTQUM3Qiw2QkFBQyxlQUFEO0FBQVcsSUFBQSxFQUFFO0FBQWIsS0FDRSw2QkFBQyxTQUFEO0FBQUssSUFBQSxZQUFZLEVBQUU7QUFBbkIsS0FDRSw2QkFBQyw4QkFBRDtBQUFrQixJQUFBLEVBQUUsRUFBRTtBQUF0QixLQUNFLDZCQUFDLGNBQUQ7QUFBZSxJQUFBLE9BQU8sRUFDcEIsNkJBQUMsZ0JBQUQsZUFDTUEsS0FETjtBQUVFLE1BQUEsT0FBTyxFQUFFQSxLQUFLLENBQUNDO0FBRmpCO0FBREYsSUFERixDQURGLENBREYsRUFXRSw2QkFBQyxTQUFEO0FBQUssSUFBQSxZQUFZLEVBQUU7QUFBbkIsS0FDRSw2QkFBQyw4QkFBRDtBQUFrQixJQUFBLEVBQUUsRUFBRTtBQUF0QixLQUNFLDZCQUFDLGNBQUQ7QUFBZSxJQUFBLE9BQU8sRUFDcEIsNkJBQUMsZUFBRCxlQUNNRCxLQUROO0FBRUUsTUFBQSxPQUFPLEVBQUVBLEtBQUssQ0FBQ0M7QUFGakI7QUFERixJQURGLENBREYsQ0FYRixFQXFCRSw2QkFBQyxTQUFEO0FBQUssSUFBQSxZQUFZLEVBQUU7QUFBbkIsS0FDRSw2QkFBQyw4QkFBRDtBQUFrQixJQUFBLEVBQUUsRUFBRTtBQUF0QixLQUNFLDZCQUFDLGNBQUQ7QUFBZSxJQUFBLE9BQU8sRUFDcEIsNkJBQUMsbUJBQUQsZUFDTUQsS0FETjtBQUVFLE1BQUEsT0FBTyxFQUFFQSxLQUFLLENBQUNDO0FBRmpCO0FBREYsSUFERixDQURGLENBckJGLEVBZ0NFLDZCQUFDLFNBQUQ7QUFBSyxJQUFBLFlBQVksRUFBRTtBQUFuQixLQUNFLDZCQUFDLDhCQUFEO0FBQWtCLElBQUEsRUFBRSxFQUFFO0FBQXRCLEtBQ0UsNkJBQUMsY0FBRDtBQUFlLElBQUEsT0FBTyxFQUNwQiw2QkFBQyxrQkFBRCxlQUNNRCxLQUROO0FBRUUsTUFBQSxPQUFPLEVBQUVBLEtBQUssQ0FBQ0M7QUFGakI7QUFERixJQURGLENBREYsQ0FoQ0YsQ0FENkI7QUFBQSxDQUEvQjs7QUEyREFGLGlCQUFpQixDQUFDRyxZQUFsQixHQUFpQyxFQUFqQztBQUdBSCxpQkFBaUIsQ0FBQ0ksU0FBbEIsR0FBOEIsRUFBOUI7ZUFHZUosaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3cgfSBmcm9tICcuLi8uLi9HcmlkJztcbmltcG9ydCBWSEdlbmVyYWxTZWN0aW9uIGZyb20gJy4uLy4uL1NlY3Rpb25zL0dlbmVyYWwnXG5pbXBvcnQgVkhTa2lsbHNTZWN0aW9uIGZyb20gJy4uLy4uL1NlY3Rpb25zL3NraWxscydcbmltcG9ydCBWSFJlbG9jYXRpb25TZWN0aW9uIGZyb20gJy4uLy4uL1NlY3Rpb25zL1JlbG9jYXRpb24nXG5pbXBvcnQgVkhFZHVjYXRpb25TZWN0aW9uIGZyb20gJy4uLy4uL1NlY3Rpb25zL0VkdWNhdGlvbidcbmltcG9ydCBWSFNvY2lhbFNlY3Rpb24gZnJvbSAnLi4vLi4vU2VjdGlvbnMvU29jaWFsJ1xuaW1wb3J0IFZIVXNlckNvbXBhbnlFeHBlcmllbmNlU2VjdGlvbiBmcm9tICcuLi8uLi9TZWN0aW9ucy9Vc2VyQ29tcGFueUV4cGVyaWVuY2UnXG5pbXBvcnQgVkhQYWdlU2VjdGlvbiBmcm9tICcuLi9QYWdlU2VjdGlvbi9pbmRleCdcbmltcG9ydCBTY3JvbGxhYmxlQW5jaG9yIGZyb20gJ3JlYWN0LXNjcm9sbGFibGUtYW5jaG9yJztcblxuY29uc3QgVkhQcm9maWxlVGVtcGxhdGUgPSBwcm9wcyA9PiAoXG4gIDxDb250YWluZXIgbWQ+XG4gICAgPFJvdyBtYXJnaW5Cb3R0b209ezEwfT5cbiAgICAgIDxTY3JvbGxhYmxlQW5jaG9yIGlkPXtcImdlbmVyYWxcIn0+XG4gICAgICAgIDxWSFBhZ2VTZWN0aW9uIGNvbnRlbnQ9e1xuICAgICAgICAgIDxWSEdlbmVyYWxTZWN0aW9uXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICBvbkV2ZW50PXtwcm9wcy5vbkV2ZW50fVxuICAgICAgICAgIC8+XG4gICAgICAgIH0gLz5cbiAgICAgIDwvU2Nyb2xsYWJsZUFuY2hvcj5cbiAgICA8L1Jvdz5cbiAgICA8Um93IG1hcmdpbkJvdHRvbT17MTB9PlxuICAgICAgPFNjcm9sbGFibGVBbmNob3IgaWQ9e1wic2tpbGxzXCJ9PlxuICAgICAgICA8VkhQYWdlU2VjdGlvbiBjb250ZW50PXtcbiAgICAgICAgICA8VkhTa2lsbHNTZWN0aW9uXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICBvbkV2ZW50PXtwcm9wcy5vbkV2ZW50fVxuICAgICAgICAgIC8+XG4gICAgICAgIH0gLz5cbiAgICAgIDwvU2Nyb2xsYWJsZUFuY2hvcj5cbiAgICA8L1Jvdz5cbiAgICA8Um93IG1hcmdpbkJvdHRvbT17MTB9PlxuICAgICAgPFNjcm9sbGFibGVBbmNob3IgaWQ9e1wicmVsb2NhdGlvblwifT5cbiAgICAgICAgPFZIUGFnZVNlY3Rpb24gY29udGVudD17XG4gICAgICAgICAgPFZIUmVsb2NhdGlvblNlY3Rpb25cbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIG9uRXZlbnQ9e3Byb3BzLm9uRXZlbnR9XG4gICAgICAgICAgLz5cbiAgICAgICAgfSAvPlxuICAgICAgPC9TY3JvbGxhYmxlQW5jaG9yPlxuICAgIDwvUm93PlxuXG4gICAgPFJvdyBtYXJnaW5Cb3R0b209ezEwfT5cbiAgICAgIDxTY3JvbGxhYmxlQW5jaG9yIGlkPXtcImVkdWNhdGlvblwifT5cbiAgICAgICAgPFZIUGFnZVNlY3Rpb24gY29udGVudD17XG4gICAgICAgICAgPFZIRWR1Y2F0aW9uU2VjdGlvblxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgb25FdmVudD17cHJvcHMub25FdmVudH1cbiAgICAgICAgICAvPlxuICAgICAgICB9IC8+XG4gICAgICA8L1Njcm9sbGFibGVBbmNob3I+XG4gICAgPC9Sb3c+XG5cbiAgICB7Lyo8Um93IG1hcmdpbkJvdHRvbT17MTB9PlxuICAgICAgPFZIU29jaWFsU2VjdGlvblxuICAgICAgICB7Li4ucHJvcHMuc29jaWFsfVxuICAgICAgICBvbkV2ZW50PXtwcm9wcy5vbkV2ZW50fVxuICAgICAgLz5cbiAgICA8L1Jvdz5cbiAgICA8Um93IG1hcmdpbkJvdHRvbT17MTB9PlxuICAgICAgPFZIVXNlckNvbXBhbnlFeHBlcmllbmNlU2VjdGlvblxuICAgICAgICB7Li4ucHJvcHMudXNlckNvbXBhbnlFeHBlcmllbmNlfVxuICAgICAgICBvbkV2ZW50PXtwcm9wcy5vbkV2ZW50fVxuICAgICAgLz5cbiAgICA8L1Jvdz4gKi99XG4gIDwvQ29udGFpbmVyPlxuKVxuXG5WSFByb2ZpbGVUZW1wbGF0ZS5kZWZhdWx0UHJvcHMgPSB7XG59XG5cblZIUHJvZmlsZVRlbXBsYXRlLnByb3BUeXBlcyA9IHtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVkhQcm9maWxlVGVtcGxhdGVcbiJdfQ==