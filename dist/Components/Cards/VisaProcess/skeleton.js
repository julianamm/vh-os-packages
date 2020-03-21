"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Base = _interopRequireDefault(require("../Base"));

var _Grid = require("../../../Grid");

var S = _interopRequireWildcard(require("./styles"));

var _Avatar = _interopRequireDefault(require("../../Skeleton/Avatar"));

var _Text = _interopRequireDefault(require("../../Skeleton/Text"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHCardVisaProcessSkeleton = function VHCardVisaProcessSkeleton(props) {
  var arr = [1, 2, 3, 4, 5, 6];

  if (props.random) {
    var x = Math.floor(Math.random() * 3 + 1);
    arr.length = x;
  } else {
    arr.length = 1;
  }

  return _react.default.createElement(_react.default.Fragment, null, arr.map(function (item) {
    return _react.default.createElement(_Grid.Row, {
      marginBottom: 10
    }, _react.default.createElement(_Base.default, null, _react.default.createElement(_Grid.Row, {
      margin: true
    }, _react.default.createElement(_Text.default, null)), _react.default.createElement(_Grid.Row, {
      margin: true
    }, _react.default.createElement(_Grid.Row, {
      row: true,
      alignItemsCenter: true
    }, _react.default.createElement(_Grid.Row, {
      autoWidth: true,
      paddingRight2: true
    }, _react.default.createElement(_Avatar.default, null)), _react.default.createElement(_Grid.Row, null, _react.default.createElement(_Text.default, {
      color: 'black-20'
    })))), _react.default.createElement(_Grid.Row, {
      margin: true
    }, _react.default.createElement(_Grid.Row, {
      row: true,
      alignItemsCenter: true
    }, _react.default.createElement(_Grid.Row, {
      autoWidth: true,
      paddingRight2: true
    }, _react.default.createElement(_Avatar.default, null)), _react.default.createElement(_Grid.Row, null, _react.default.createElement(_Text.default, null)))), _react.default.createElement(_Grid.Row, {
      margin: true
    }, _react.default.createElement(_Grid.Row, {
      row: true,
      alignItemsCenter: true
    }, _react.default.createElement(_Grid.Row, {
      autoWidth: true,
      paddingRight2: true
    }, _react.default.createElement(_Avatar.default, null)), _react.default.createElement(_Grid.Row, null, _react.default.createElement(_Text.default, null)))), _react.default.createElement(S.Footer, null, _react.default.createElement(_Grid.Row, {
      row: true,
      alignItemsRight: true
    }, _react.default.createElement(_Grid.Row, null, _react.default.createElement(_Text.default, {
      color: 'black-20'
    })), _react.default.createElement(_Grid.Row, {
      alignItemsRight: true
    }, _react.default.createElement(_Avatar.default, null))))));
  }));
};

var _default = VHCardVisaProcessSkeleton;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQ2FyZHMvVmlzYVByb2Nlc3Mvc2tlbGV0b24uanN4Il0sIm5hbWVzIjpbIlZIQ2FyZFZpc2FQcm9jZXNzU2tlbGV0b24iLCJwcm9wcyIsImFyciIsInJhbmRvbSIsIngiLCJNYXRoIiwiZmxvb3IiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSx5QkFBeUIsR0FBRyxTQUE1QkEseUJBQTRCLENBQUFDLEtBQUssRUFBSTtBQUN6QyxNQUFNQyxHQUFHLEdBQUcsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsQ0FBWjs7QUFDQSxNQUFLRCxLQUFLLENBQUNFLE1BQVgsRUFBb0I7QUFDbEIsUUFBTUMsQ0FBQyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBWUQsSUFBSSxDQUFDRixNQUFMLEtBQWdCLENBQWpCLEdBQXNCLENBQWpDLENBQVY7QUFDQUQsSUFBQUEsR0FBRyxDQUFDSyxNQUFKLEdBQWFILENBQWI7QUFDRCxHQUhELE1BR087QUFDTEYsSUFBQUEsR0FBRyxDQUFDSyxNQUFKLEdBQWEsQ0FBYjtBQUNEOztBQUVDLFNBQ0UsNERBRUVMLEdBQUcsQ0FBQ00sR0FBSixDQUFRLFVBQUFDLElBQUksRUFBSTtBQUNkLFdBQ0UsNkJBQUMsU0FBRDtBQUFLLE1BQUEsWUFBWSxFQUFFO0FBQW5CLE9BQ0YsNkJBQUMsYUFBRCxRQUNFLDZCQUFDLFNBQUQ7QUFBSyxNQUFBLE1BQU07QUFBWCxPQUNFLDZCQUFDLGFBQUQsT0FERixDQURGLEVBSUUsNkJBQUMsU0FBRDtBQUFLLE1BQUEsTUFBTTtBQUFYLE9BQ0ksNkJBQUMsU0FBRDtBQUFLLE1BQUEsR0FBRyxNQUFSO0FBQVMsTUFBQSxnQkFBZ0I7QUFBekIsT0FDRSw2QkFBQyxTQUFEO0FBQUssTUFBQSxTQUFTLE1BQWQ7QUFBZSxNQUFBLGFBQWE7QUFBNUIsT0FDRSw2QkFBQyxlQUFELE9BREYsQ0FERixFQUlFLDZCQUFDLFNBQUQsUUFDRSw2QkFBQyxhQUFEO0FBQWdCLE1BQUEsS0FBSyxFQUFFO0FBQXZCLE1BREYsQ0FKRixDQURKLENBSkYsRUFjRSw2QkFBQyxTQUFEO0FBQUssTUFBQSxNQUFNO0FBQVgsT0FDSSw2QkFBQyxTQUFEO0FBQUssTUFBQSxHQUFHLE1BQVI7QUFBUyxNQUFBLGdCQUFnQjtBQUF6QixPQUNFLDZCQUFDLFNBQUQ7QUFBSyxNQUFBLFNBQVMsTUFBZDtBQUFlLE1BQUEsYUFBYTtBQUE1QixPQUNFLDZCQUFDLGVBQUQsT0FERixDQURGLEVBSUUsNkJBQUMsU0FBRCxRQUNFLDZCQUFDLGFBQUQsT0FERixDQUpGLENBREosQ0FkRixFQXdCRSw2QkFBQyxTQUFEO0FBQUssTUFBQSxNQUFNO0FBQVgsT0FDSSw2QkFBQyxTQUFEO0FBQUssTUFBQSxHQUFHLE1BQVI7QUFBUyxNQUFBLGdCQUFnQjtBQUF6QixPQUNFLDZCQUFDLFNBQUQ7QUFBSyxNQUFBLFNBQVMsTUFBZDtBQUFlLE1BQUEsYUFBYTtBQUE1QixPQUNFLDZCQUFDLGVBQUQsT0FERixDQURGLEVBSUUsNkJBQUMsU0FBRCxRQUNFLDZCQUFDLGFBQUQsT0FERixDQUpGLENBREosQ0F4QkYsRUFrQ0ksNkJBQUMsQ0FBRCxDQUFHLE1BQUgsUUFDRSw2QkFBQyxTQUFEO0FBQUssTUFBQSxHQUFHLE1BQVI7QUFBUyxNQUFBLGVBQWU7QUFBeEIsT0FDRSw2QkFBQyxTQUFELFFBQ0UsNkJBQUMsYUFBRDtBQUFnQixNQUFBLEtBQUssRUFBRTtBQUF2QixNQURGLENBREYsRUFJRSw2QkFBQyxTQUFEO0FBQUssTUFBQSxlQUFlO0FBQXBCLE9BQ0UsNkJBQUMsZUFBRCxPQURGLENBSkYsQ0FERixDQWxDSixDQURFLENBREY7QUFrREQsR0FuREQsQ0FGRixDQURGO0FBNkRILENBdEVEOztlQXdFZVQseUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgVkhDYXJkQmFzZSBmcm9tIFwiLi4vQmFzZVwiO1xuaW1wb3J0IHsgUm93IH0gZnJvbSBcIi4uLy4uLy4uL0dyaWRcIjtcbmltcG9ydCAqIGFzIFMgZnJvbSBcIi4vc3R5bGVzXCI7XG5pbXBvcnQgVkhBdmF0YXJTa2VsZXRvbiBmcm9tICcuLi8uLi9Ta2VsZXRvbi9BdmF0YXInXG5pbXBvcnQgVkhUZXh0U2tlbGV0b24gZnJvbSAnLi4vLi4vU2tlbGV0b24vVGV4dCdcblxuY29uc3QgVkhDYXJkVmlzYVByb2Nlc3NTa2VsZXRvbiA9IHByb3BzID0+IHtcbiAgY29uc3QgYXJyID0gWzEsMiwzLDQsNSw2XVxuICBpZiAoIHByb3BzLnJhbmRvbSApIHtcbiAgICBjb25zdCB4ID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDMpICsgMSk7XG4gICAgYXJyLmxlbmd0aCA9IHhcbiAgfSBlbHNlIHtcbiAgICBhcnIubGVuZ3RoID0gMVxuICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAge1xuICAgICAgICBhcnIubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Um93IG1hcmdpbkJvdHRvbT17MTB9PlxuICAgICAgICAgIDxWSENhcmRCYXNlPlxuICAgICAgICAgICAgPFJvdyBtYXJnaW4+XG4gICAgICAgICAgICAgIDxWSFRleHRTa2VsZXRvbi8+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxSb3cgbWFyZ2luPlxuICAgICAgICAgICAgICAgIDxSb3cgcm93IGFsaWduSXRlbXNDZW50ZXI+XG4gICAgICAgICAgICAgICAgICA8Um93IGF1dG9XaWR0aCBwYWRkaW5nUmlnaHQyPlxuICAgICAgICAgICAgICAgICAgICA8VkhBdmF0YXJTa2VsZXRvbiAvPlxuICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICA8VkhUZXh0U2tlbGV0b24gY29sb3I9eydibGFjay0yMCd9Lz5cbiAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8Um93IG1hcmdpbj5cbiAgICAgICAgICAgICAgICA8Um93IHJvdyBhbGlnbkl0ZW1zQ2VudGVyPlxuICAgICAgICAgICAgICAgICAgPFJvdyBhdXRvV2lkdGggcGFkZGluZ1JpZ2h0Mj5cbiAgICAgICAgICAgICAgICAgICAgPFZIQXZhdGFyU2tlbGV0b24gLz5cbiAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgPFZIVGV4dFNrZWxldG9uLz5cbiAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8Um93IG1hcmdpbj5cbiAgICAgICAgICAgICAgICA8Um93IHJvdyBhbGlnbkl0ZW1zQ2VudGVyPlxuICAgICAgICAgICAgICAgICAgPFJvdyBhdXRvV2lkdGggcGFkZGluZ1JpZ2h0Mj5cbiAgICAgICAgICAgICAgICAgICAgPFZIQXZhdGFyU2tlbGV0b24gLz5cbiAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgPFZIVGV4dFNrZWxldG9uLz5cbiAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgIDxTLkZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8Um93IHJvdyBhbGlnbkl0ZW1zUmlnaHQ+XG4gICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICA8VkhUZXh0U2tlbGV0b24gY29sb3I9eydibGFjay0yMCd9Lz5cbiAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgPFJvdyBhbGlnbkl0ZW1zUmlnaHQ+XG4gICAgICAgICAgICAgICAgICAgIDxWSEF2YXRhclNrZWxldG9uIC8+XG4gICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICA8L1MuRm9vdGVyPlxuICAgICAgICAgIDwvVkhDYXJkQmFzZT5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICApXG5cbiAgICAgICAgfSlcblxuICAgICAgICB9XG5cbiAgICAgICAgPC8+XG4gICAgKVxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBWSENhcmRWaXNhUHJvY2Vzc1NrZWxldG9uO1xuIl19