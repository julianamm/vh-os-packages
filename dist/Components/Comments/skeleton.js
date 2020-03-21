"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Avatar = _interopRequireDefault(require("../Avatar"));

var _Text = _interopRequireDefault(require("../Text"));

var S = _interopRequireWildcard(require("./styles"));

var _Grid = require("../../Grid");

var _Avatar2 = _interopRequireDefault(require("../Skeleton/Avatar"));

var _Text2 = _interopRequireDefault(require("../Skeleton/Text"));

var _Description = _interopRequireDefault(require("../Skeleton/Description"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHCommentsSkeleton = function VHCommentsSkeleton(props) {
  return _react.default.createElement(_Grid.Row, {
    className: "vh-comments ".concat(props.className ? props.className : '')
  }, _react.default.createElement(_Grid.Row, {
    marginBottom5: true
  }, _react.default.createElement(_Text.default, {
    variant: "platform2",
    color: "gray-80",
    text: "Comments ..."
  })), _react.default.createElement(_Grid.Row, {
    margin: true
  }, _react.default.createElement(S.Wrapper, null, [1, 2].map(function (comment) {
    return _react.default.createElement(_Grid.Row, {
      row: true,
      marginBottom: 10
    }, _react.default.createElement(_Grid.Row, {
      margin: true,
      autoWidth: true,
      paddingRight8: true
    }, _react.default.createElement(_Avatar2.default, null)), _react.default.createElement(_Grid.Row, null, _react.default.createElement(_Grid.Row, {
      margin: true
    }, _react.default.createElement(_Text2.default, null)), _react.default.createElement(_Grid.Row, {
      margin: true
    }, _react.default.createElement(_Description.default, null))));
  }))));
};

VHCommentsSkeleton.defaultProps = {
  comments: [],
  onEvent: null,
  className: ""
};
VHCommentsSkeleton.propTypes = {
  comments: _propTypes.default.array,
  onEvent: _propTypes.default.func,
  className: _propTypes.default.string
};
var _default = VHCommentsSkeleton;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQ29tbWVudHMvc2tlbGV0b24uanN4Il0sIm5hbWVzIjpbIlZIQ29tbWVudHNTa2VsZXRvbiIsInByb3BzIiwiY2xhc3NOYW1lIiwibWFwIiwiY29tbWVudCIsImRlZmF1bHRQcm9wcyIsImNvbW1lbnRzIiwib25FdmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5IiwiZnVuYyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFBQyxLQUFLLEVBQUk7QUFDbEMsU0FDRSw2QkFBQyxTQUFEO0FBQUssSUFBQSxTQUFTLHdCQUFpQkEsS0FBSyxDQUFDQyxTQUFOLEdBQWtCRCxLQUFLLENBQUNDLFNBQXhCLEdBQW9DLEVBQXJEO0FBQWQsS0FDRSw2QkFBQyxTQUFEO0FBQUssSUFBQSxhQUFhO0FBQWxCLEtBQ0UsNkJBQUMsYUFBRDtBQUNFLElBQUEsT0FBTyxFQUFFLFdBRFg7QUFFRSxJQUFBLEtBQUssRUFBQyxTQUZSO0FBR0UsSUFBQSxJQUFJO0FBSE4sSUFERixDQURGLEVBUUUsNkJBQUMsU0FBRDtBQUFLLElBQUEsTUFBTTtBQUFYLEtBQ0UsNkJBQUMsQ0FBRCxDQUFHLE9BQUgsUUFDRyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQU1DLEdBQU4sQ0FBVSxVQUFBQyxPQUFPO0FBQUEsV0FDaEIsNkJBQUMsU0FBRDtBQUFLLE1BQUEsR0FBRyxNQUFSO0FBQVMsTUFBQSxZQUFZLEVBQUU7QUFBdkIsT0FDRSw2QkFBQyxTQUFEO0FBQUssTUFBQSxNQUFNLE1BQVg7QUFBWSxNQUFBLFNBQVMsTUFBckI7QUFBc0IsTUFBQSxhQUFhO0FBQW5DLE9BQ0UsNkJBQUMsZ0JBQUQsT0FERixDQURGLEVBSUUsNkJBQUMsU0FBRCxRQUNFLDZCQUFDLFNBQUQ7QUFBSyxNQUFBLE1BQU07QUFBWCxPQUNFLDZCQUFDLGNBQUQsT0FERixDQURGLEVBSUUsNkJBQUMsU0FBRDtBQUFLLE1BQUEsTUFBTTtBQUFYLE9BQ0UsNkJBQUMsb0JBQUQsT0FERixDQUpGLENBSkYsQ0FEZ0I7QUFBQSxHQUFqQixDQURILENBREYsQ0FSRixDQURGO0FBOEJELENBL0JEOztBQWlDQUosa0JBQWtCLENBQUNLLFlBQW5CLEdBQWtDO0FBQ2hDQyxFQUFBQSxRQUFRLEVBQUUsRUFEc0I7QUFFaENDLEVBQUFBLE9BQU8sRUFBRSxJQUZ1QjtBQUdoQ0wsRUFBQUEsU0FBUyxFQUFFO0FBSHFCLENBQWxDO0FBTUFGLGtCQUFrQixDQUFDUSxTQUFuQixHQUErQjtBQUM3QkYsRUFBQUEsUUFBUSxFQUFFRyxtQkFBVUMsS0FEUztBQUU3QkgsRUFBQUEsT0FBTyxFQUFFRSxtQkFBVUUsSUFGVTtBQUc3QlQsRUFBQUEsU0FBUyxFQUFFTyxtQkFBVUc7QUFIUSxDQUEvQjtlQU1lWixrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBWSEF2YXRhciBmcm9tIFwiLi4vQXZhdGFyXCI7XG5pbXBvcnQgVkhUZXh0IGZyb20gXCIuLi9UZXh0XCI7XG5pbXBvcnQgKiBhcyBTIGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHsgUm93IH0gZnJvbSBcIi4uLy4uL0dyaWRcIjtcbmltcG9ydCBWSEF2YXRhclNrZWxldG9uIGZyb20gJy4uL1NrZWxldG9uL0F2YXRhcidcbmltcG9ydCBWSFRleHRTa2VsZXRvbiBmcm9tICcuLi9Ta2VsZXRvbi9UZXh0J1xuaW1wb3J0IFZIRGVzY3JpcHRpb25Ta2VsZXRvbiBmcm9tICcuLi9Ta2VsZXRvbi9EZXNjcmlwdGlvbidcblxuY29uc3QgVkhDb21tZW50c1NrZWxldG9uID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSb3cgY2xhc3NOYW1lPXtgdmgtY29tbWVudHMgJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJ31gfT5cbiAgICAgIDxSb3cgbWFyZ2luQm90dG9tNT5cbiAgICAgICAgPFZIVGV4dFxuICAgICAgICAgIHZhcmlhbnQ9e1wicGxhdGZvcm0yXCJ9XG4gICAgICAgICAgY29sb3I9XCJncmF5LTgwXCJcbiAgICAgICAgICB0ZXh0PXtgQ29tbWVudHMgLi4uYH1cbiAgICAgICAgLz5cbiAgICAgIDwvUm93PlxuICAgICAgPFJvdyBtYXJnaW4+XG4gICAgICAgIDxTLldyYXBwZXI+XG4gICAgICAgICAge1sxLDJdLm1hcChjb21tZW50ID0+IChcbiAgICAgICAgICAgIDxSb3cgcm93IG1hcmdpbkJvdHRvbT17MTB9ICA+XG4gICAgICAgICAgICAgIDxSb3cgbWFyZ2luIGF1dG9XaWR0aCBwYWRkaW5nUmlnaHQ4PlxuICAgICAgICAgICAgICAgIDxWSEF2YXRhclNrZWxldG9uLz5cbiAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgPFJvdyBtYXJnaW4+XG4gICAgICAgICAgICAgICAgICA8VkhUZXh0U2tlbGV0b24gLz5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICA8Um93IG1hcmdpbj5cbiAgICAgICAgICAgICAgICAgIDxWSERlc2NyaXB0aW9uU2tlbGV0b24gLz5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TLldyYXBwZXI+XG4gICAgICA8L1Jvdz5cbiAgICA8L1Jvdz5cbiAgKTtcbn07XG5cblZIQ29tbWVudHNTa2VsZXRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbW1lbnRzOiBbXSxcbiAgb25FdmVudDogbnVsbCxcbiAgY2xhc3NOYW1lOiBcIlwiXG59O1xuXG5WSENvbW1lbnRzU2tlbGV0b24ucHJvcFR5cGVzID0ge1xuICBjb21tZW50czogUHJvcFR5cGVzLmFycmF5LFxuICBvbkV2ZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBWSENvbW1lbnRzU2tlbGV0b247XG4iXX0=