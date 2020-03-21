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
  return /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    className: "vh-comments ".concat(props.className ? props.className : '')
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom5: true
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    variant: "platform2",
    color: "gray-80",
    text: "Comments ..."
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    margin: true
  }, /*#__PURE__*/_react.default.createElement(S.Wrapper, null, [1, 2].map(function (comment) {
    return /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      row: true,
      marginBottom: 10
    }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      margin: true,
      autoWidth: true,
      paddingRight8: true
    }, /*#__PURE__*/_react.default.createElement(_Avatar2.default, null)), /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      margin: true
    }, /*#__PURE__*/_react.default.createElement(_Text2.default, null)), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      margin: true
    }, /*#__PURE__*/_react.default.createElement(_Description.default, null))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQ29tbWVudHMvc2tlbGV0b24uanN4Il0sIm5hbWVzIjpbIlZIQ29tbWVudHNTa2VsZXRvbiIsInByb3BzIiwiY2xhc3NOYW1lIiwibWFwIiwiY29tbWVudCIsImRlZmF1bHRQcm9wcyIsImNvbW1lbnRzIiwib25FdmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5IiwiZnVuYyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFBQyxLQUFLLEVBQUk7QUFDbEMsc0JBQ0UsNkJBQUMsU0FBRDtBQUFLLElBQUEsU0FBUyx3QkFBaUJBLEtBQUssQ0FBQ0MsU0FBTixHQUFrQkQsS0FBSyxDQUFDQyxTQUF4QixHQUFvQyxFQUFyRDtBQUFkLGtCQUNFLDZCQUFDLFNBQUQ7QUFBSyxJQUFBLGFBQWE7QUFBbEIsa0JBQ0UsNkJBQUMsYUFBRDtBQUNFLElBQUEsT0FBTyxFQUFFLFdBRFg7QUFFRSxJQUFBLEtBQUssRUFBQyxTQUZSO0FBR0UsSUFBQSxJQUFJO0FBSE4sSUFERixDQURGLGVBUUUsNkJBQUMsU0FBRDtBQUFLLElBQUEsTUFBTTtBQUFYLGtCQUNFLDZCQUFDLENBQUQsQ0FBRyxPQUFILFFBQ0csQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFNQyxHQUFOLENBQVUsVUFBQUMsT0FBTztBQUFBLHdCQUNoQiw2QkFBQyxTQUFEO0FBQUssTUFBQSxHQUFHLE1BQVI7QUFBUyxNQUFBLFlBQVksRUFBRTtBQUF2QixvQkFDRSw2QkFBQyxTQUFEO0FBQUssTUFBQSxNQUFNLE1BQVg7QUFBWSxNQUFBLFNBQVMsTUFBckI7QUFBc0IsTUFBQSxhQUFhO0FBQW5DLG9CQUNFLDZCQUFDLGdCQUFELE9BREYsQ0FERixlQUlFLDZCQUFDLFNBQUQscUJBQ0UsNkJBQUMsU0FBRDtBQUFLLE1BQUEsTUFBTTtBQUFYLG9CQUNFLDZCQUFDLGNBQUQsT0FERixDQURGLGVBSUUsNkJBQUMsU0FBRDtBQUFLLE1BQUEsTUFBTTtBQUFYLG9CQUNFLDZCQUFDLG9CQUFELE9BREYsQ0FKRixDQUpGLENBRGdCO0FBQUEsR0FBakIsQ0FESCxDQURGLENBUkYsQ0FERjtBQThCRCxDQS9CRDs7QUFpQ0FKLGtCQUFrQixDQUFDSyxZQUFuQixHQUFrQztBQUNoQ0MsRUFBQUEsUUFBUSxFQUFFLEVBRHNCO0FBRWhDQyxFQUFBQSxPQUFPLEVBQUUsSUFGdUI7QUFHaENMLEVBQUFBLFNBQVMsRUFBRTtBQUhxQixDQUFsQztBQU1BRixrQkFBa0IsQ0FBQ1EsU0FBbkIsR0FBK0I7QUFDN0JGLEVBQUFBLFFBQVEsRUFBRUcsbUJBQVVDLEtBRFM7QUFFN0JILEVBQUFBLE9BQU8sRUFBRUUsbUJBQVVFLElBRlU7QUFHN0JULEVBQUFBLFNBQVMsRUFBRU8sbUJBQVVHO0FBSFEsQ0FBL0I7ZUFNZVosa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgVkhBdmF0YXIgZnJvbSBcIi4uL0F2YXRhclwiO1xuaW1wb3J0IFZIVGV4dCBmcm9tIFwiLi4vVGV4dFwiO1xuaW1wb3J0ICogYXMgUyBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCB7IFJvdyB9IGZyb20gXCIuLi8uLi9HcmlkXCI7XG5pbXBvcnQgVkhBdmF0YXJTa2VsZXRvbiBmcm9tICcuLi9Ta2VsZXRvbi9BdmF0YXInXG5pbXBvcnQgVkhUZXh0U2tlbGV0b24gZnJvbSAnLi4vU2tlbGV0b24vVGV4dCdcbmltcG9ydCBWSERlc2NyaXB0aW9uU2tlbGV0b24gZnJvbSAnLi4vU2tlbGV0b24vRGVzY3JpcHRpb24nXG5cbmNvbnN0IFZIQ29tbWVudHNTa2VsZXRvbiA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Um93IGNsYXNzTmFtZT17YHZoLWNvbW1lbnRzICR7cHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogJyd9YH0+XG4gICAgICA8Um93IG1hcmdpbkJvdHRvbTU+XG4gICAgICAgIDxWSFRleHRcbiAgICAgICAgICB2YXJpYW50PXtcInBsYXRmb3JtMlwifVxuICAgICAgICAgIGNvbG9yPVwiZ3JheS04MFwiXG4gICAgICAgICAgdGV4dD17YENvbW1lbnRzIC4uLmB9XG4gICAgICAgIC8+XG4gICAgICA8L1Jvdz5cbiAgICAgIDxSb3cgbWFyZ2luPlxuICAgICAgICA8Uy5XcmFwcGVyPlxuICAgICAgICAgIHtbMSwyXS5tYXAoY29tbWVudCA9PiAoXG4gICAgICAgICAgICA8Um93IHJvdyBtYXJnaW5Cb3R0b209ezEwfSAgPlxuICAgICAgICAgICAgICA8Um93IG1hcmdpbiBhdXRvV2lkdGggcGFkZGluZ1JpZ2h0OD5cbiAgICAgICAgICAgICAgICA8VkhBdmF0YXJTa2VsZXRvbi8+XG4gICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxSb3cgbWFyZ2luPlxuICAgICAgICAgICAgICAgICAgPFZIVGV4dFNrZWxldG9uIC8+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPFJvdyBtYXJnaW4+XG4gICAgICAgICAgICAgICAgICA8VkhEZXNjcmlwdGlvblNrZWxldG9uIC8+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvUy5XcmFwcGVyPlxuICAgICAgPC9Sb3c+XG4gICAgPC9Sb3c+XG4gICk7XG59O1xuXG5WSENvbW1lbnRzU2tlbGV0b24uZGVmYXVsdFByb3BzID0ge1xuICBjb21tZW50czogW10sXG4gIG9uRXZlbnQ6IG51bGwsXG4gIGNsYXNzTmFtZTogXCJcIlxufTtcblxuVkhDb21tZW50c1NrZWxldG9uLnByb3BUeXBlcyA9IHtcbiAgY29tbWVudHM6IFByb3BUeXBlcy5hcnJheSxcbiAgb25FdmVudDogUHJvcFR5cGVzLmZ1bmMsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVkhDb21tZW50c1NrZWxldG9uO1xuIl19