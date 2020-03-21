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

var _skeleton = _interopRequireDefault(require("./skeleton"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHComments = function VHComments(props) {
  var totalComments = props.comments ? props.comments.length : 0;
  var comments = props.comments ? props.comments : [];
  return _react.default.createElement(_Grid.Row, {
    className: "vh-comments ".concat(props.className ? props.className : '')
  }, props.loading ? _react.default.createElement(_skeleton.default, null) : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Grid.Row, {
    marginBottom5: true
  }, _react.default.createElement(_Text.default, {
    variant: "platform2",
    color: "gray-80",
    text: "Comments (".concat(totalComments, ")")
  })), _react.default.createElement(_Grid.Row, {
    margin: true
  }, _react.default.createElement(S.Wrapper, null, comments.map(function (comment) {
    return _react.default.createElement(_Grid.Row, {
      row: true,
      margin: true,
      justifyBottom: true
    }, _react.default.createElement(_Grid.Row, {
      margin: true,
      autoWidth: true,
      paddingRight8: true
    }, _react.default.createElement(_Avatar.default, {
      image: comment.user.avatar,
      size: "md"
    })), _react.default.createElement(_Grid.Row, {
      margin: true
    }, _react.default.createElement(_Grid.Row, {
      margin: true,
      row: true,
      alignItemsCenter: true
    }, _react.default.createElement(_Text.default, {
      variant: "platform",
      color: "gray-100",
      text: comment.user.name
    }), _react.default.createElement(S.TextWrapper, null, _react.default.createElement(_Text.default, {
      variant: "caption",
      color: "gray-50",
      text: comment.createdOn
    }))), _react.default.createElement(_Grid.Row, {
      margin: true,
      marginBottom5: true
    }, _react.default.createElement(_Text.default, {
      variant: "platform",
      color: "gray-80",
      text: comment.note
    }))));
  })))), _react.default.createElement(_Grid.Row, {
    row: true,
    margin: true,
    alignItemsCenter: true
  }, _react.default.createElement(_Avatar.default, {
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    size: "md"
  }), _react.default.createElement(S.Area, {
    placeholder: "Ask a question or post a uptade",
    onKeyUp: function onKeyUp(event) {
      if (props.onEvent && event.key === 'Enter') {
        props.onEvent({
          data: props.data,
          type: 'onEnter',
          target: 'VHComments',
          comment: event.currentTarget.value.replace(/\n/g, " ")
        });
        event.currentTarget.value = '';
      }

      ;
    }
  })));
};

VHComments.defaultProps = {
  comments: [],
  onEvent: null,
  className: ""
};
VHComments.propTypes = {
  comments: _propTypes.default.array,
  onEvent: _propTypes.default.func,
  className: _propTypes.default.string
};
var _default = VHComments;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQ29tbWVudHMvaW5kZXguanN4Il0sIm5hbWVzIjpbIlZIQ29tbWVudHMiLCJwcm9wcyIsInRvdGFsQ29tbWVudHMiLCJjb21tZW50cyIsImxlbmd0aCIsImNsYXNzTmFtZSIsImxvYWRpbmciLCJtYXAiLCJjb21tZW50IiwidXNlciIsImF2YXRhciIsIm5hbWUiLCJjcmVhdGVkT24iLCJub3RlIiwiZXZlbnQiLCJvbkV2ZW50Iiwia2V5IiwiZGF0YSIsInR5cGUiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJyZXBsYWNlIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXkiLCJmdW5jIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBQyxLQUFLLEVBQUk7QUFDMUIsTUFBTUMsYUFBYSxHQUFHRCxLQUFLLENBQUNFLFFBQU4sR0FBaUJGLEtBQUssQ0FBQ0UsUUFBTixDQUFlQyxNQUFoQyxHQUF5QyxDQUEvRDtBQUNBLE1BQU1ELFFBQVEsR0FBR0YsS0FBSyxDQUFDRSxRQUFOLEdBQWlCRixLQUFLLENBQUNFLFFBQXZCLEdBQWtDLEVBQW5EO0FBQ0EsU0FDRSw2QkFBQyxTQUFEO0FBQUssSUFBQSxTQUFTLHdCQUFpQkYsS0FBSyxDQUFDSSxTQUFOLEdBQWtCSixLQUFLLENBQUNJLFNBQXhCLEdBQW9DLEVBQXJEO0FBQWQsS0FFSUosS0FBSyxDQUFDSyxPQUFOLEdBQ0UsNkJBQUMsaUJBQUQsT0FERixHQUVFLDREQUNGLDZCQUFDLFNBQUQ7QUFBSyxJQUFBLGFBQWE7QUFBbEIsS0FDRSw2QkFBQyxhQUFEO0FBQ0UsSUFBQSxPQUFPLEVBQUUsV0FEWDtBQUVFLElBQUEsS0FBSyxFQUFDLFNBRlI7QUFH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QUFBQSxRQUFRLEVBQUVzQixtQkFBVUMsS0FEQztBQUVyQlgsRUFBQUEsT0FBTyxFQUFFVSxtQkFBVUUsSUFGRTtBQUdyQnRCLEVBQUFBLFNBQVMsRUFBRW9CLG1CQUFVRztBQUhBLENBQXZCO2VBTWU1QixVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFZIQXZhdGFyIGZyb20gXCIuLi9BdmF0YXJcIjtcbmltcG9ydCBWSFRleHQgZnJvbSBcIi4uL1RleHRcIjtcbmltcG9ydCAqIGFzIFMgZnJvbSBcIi4vc3R5bGVzXCI7XG5pbXBvcnQgeyBSb3cgfSBmcm9tIFwiLi4vLi4vR3JpZFwiO1xuaW1wb3J0IFNrZWxldG9uIGZyb20gJy4vc2tlbGV0b24nXG5cbmNvbnN0IFZIQ29tbWVudHMgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHRvdGFsQ29tbWVudHMgPSBwcm9wcy5jb21tZW50cyA/IHByb3BzLmNvbW1lbnRzLmxlbmd0aCA6IDBcbiAgY29uc3QgY29tbWVudHMgPSBwcm9wcy5jb21tZW50cyA/IHByb3BzLmNvbW1lbnRzIDogW11cbiAgcmV0dXJuIChcbiAgICA8Um93IGNsYXNzTmFtZT17YHZoLWNvbW1lbnRzICR7cHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogJyd9YH0+XG4gICAgICB7XG4gICAgICAgIHByb3BzLmxvYWRpbmdcbiAgICAgICAgPyA8U2tlbGV0b24gLz5cbiAgICAgICAgOiA8PlxuICAgICAgICA8Um93IG1hcmdpbkJvdHRvbTU+XG4gICAgICAgICAgPFZIVGV4dFxuICAgICAgICAgICAgdmFyaWFudD17XCJwbGF0Zm9ybTJcIn1cbiAgICAgICAgICAgIGNvbG9yPVwiZ3JheS04MFwiXG4gICAgICAgICAgICB0ZXh0PXtgQ29tbWVudHMgKCR7dG90YWxDb21tZW50c30pYH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPFJvdyBtYXJnaW4+XG4gICAgICAgICAgPFMuV3JhcHBlcj5cbiAgICAgICAgICAgIHtjb21tZW50cy5tYXAoY29tbWVudCA9PiAoXG4gICAgICAgICAgICAgIDxSb3cgcm93IG1hcmdpbiBqdXN0aWZ5Qm90dG9tID5cbiAgICAgICAgICAgICAgICA8Um93IG1hcmdpbiBhdXRvV2lkdGggcGFkZGluZ1JpZ2h0OD5cbiAgICAgICAgICAgICAgICAgIDxWSEF2YXRhciBpbWFnZT17Y29tbWVudC51c2VyLmF2YXRhcn0gc2l6ZT17XCJtZFwifSAvPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgIDxSb3cgbWFyZ2luPlxuICAgICAgICAgICAgICAgICAgPFJvdyBtYXJnaW4gcm93IGFsaWduSXRlbXNDZW50ZXIgPlxuICAgICAgICAgICAgICAgICAgICA8VkhUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD17XCJwbGF0Zm9ybVwifVxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZ3JheS0xMDBcIlxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e2NvbW1lbnQudXNlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8Uy5UZXh0V3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgICA8VkhUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PXtcImNhcHRpb25cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZ3JheS01MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtjb21tZW50LmNyZWF0ZWRPbn1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L1MuVGV4dFdyYXBwZXI+XG4gICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgIDxSb3cgbWFyZ2luIG1hcmdpbkJvdHRvbTU+XG4gICAgICAgICAgICAgICAgICAgIDxWSFRleHRcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PXtcInBsYXRmb3JtXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJncmF5LTgwXCJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtjb21tZW50Lm5vdGV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1MuV3JhcHBlcj5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvPlxuICAgICAgfVxuICAgICAgPFJvdyByb3cgbWFyZ2luIGFsaWduSXRlbXNDZW50ZXI+XG4gICAgICAgIDxWSEF2YXRhclxuICAgICAgICAgIGltYWdlPXtcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL3VpZmFjZXMvZmFjZXMvdHdpdHRlci9kYW5jb3Vuc2VsbC8xMjguanBnXCJcbiAgICAgICAgICB9XG4gICAgICAgICAgc2l6ZT17XCJtZFwifVxuICAgICAgICAvPlxuICAgICAgICA8Uy5BcmVhIHBsYWNlaG9sZGVyPVwiQXNrIGEgcXVlc3Rpb24gb3IgcG9zdCBhIHVwdGFkZVwiXG4gICAgICAgICAgb25LZXlVcD17ZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKHByb3BzLm9uRXZlbnQgJiYgZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgIHByb3BzLm9uRXZlbnQoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHByb3BzLmRhdGEsXG4gICAgICAgICAgICAgICAgdHlwZTogJ29uRW50ZXInLFxuICAgICAgICAgICAgICAgIHRhcmdldDogJ1ZIQ29tbWVudHMnLFxuICAgICAgICAgICAgICAgIGNvbW1lbnQ6IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUucmVwbGFjZSgvXFxuL2csIFwiIFwiKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlID0gJydcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfX0+PC9TLkFyZWE+XG4gICAgICA8L1Jvdz5cbiAgICA8L1Jvdz5cbiAgKTtcbn07XG5cblZIQ29tbWVudHMuZGVmYXVsdFByb3BzID0ge1xuICBjb21tZW50czogW10sXG4gIG9uRXZlbnQ6IG51bGwsXG4gIGNsYXNzTmFtZTogXCJcIlxufTtcblxuVkhDb21tZW50cy5wcm9wVHlwZXMgPSB7XG4gIGNvbW1lbnRzOiBQcm9wVHlwZXMuYXJyYXksXG4gIG9uRXZlbnQ6IFByb3BUeXBlcy5mdW5jLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZIQ29tbWVudHM7XG4iXX0=