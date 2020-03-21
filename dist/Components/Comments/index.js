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
  return /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    className: "vh-comments ".concat(props.className ? props.className : '')
  }, props.loading ? /*#__PURE__*/_react.default.createElement(_skeleton.default, null) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom5: true
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    variant: "platform2",
    color: "gray-80",
    text: "Comments (".concat(totalComments, ")")
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    margin: true
  }, /*#__PURE__*/_react.default.createElement(S.Wrapper, null, comments.map(function (comment) {
    return /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      row: true,
      margin: true,
      justifyBottom: true
    }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      margin: true,
      autoWidth: true,
      paddingRight8: true
    }, /*#__PURE__*/_react.default.createElement(_Avatar.default, {
      image: comment.user.avatar,
      size: "md"
    })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      margin: true
    }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      margin: true,
      row: true,
      alignItemsCenter: true
    }, /*#__PURE__*/_react.default.createElement(_Text.default, {
      variant: "platform",
      color: "gray-100",
      text: comment.user.name
    }), /*#__PURE__*/_react.default.createElement(S.TextWrapper, null, /*#__PURE__*/_react.default.createElement(_Text.default, {
      variant: "caption",
      color: "gray-50",
      text: comment.createdOn
    }))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      margin: true,
      marginBottom5: true
    }, /*#__PURE__*/_react.default.createElement(_Text.default, {
      variant: "platform",
      color: "gray-80",
      text: comment.note
    }))));
  })))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    margin: true,
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(_Avatar.default, {
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    size: "md"
  }), /*#__PURE__*/_react.default.createElement(S.Area, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQ29tbWVudHMvaW5kZXguanN4Il0sIm5hbWVzIjpbIlZIQ29tbWVudHMiLCJwcm9wcyIsInRvdGFsQ29tbWVudHMiLCJjb21tZW50cyIsImxlbmd0aCIsImNsYXNzTmFtZSIsImxvYWRpbmciLCJtYXAiLCJjb21tZW50IiwidXNlciIsImF2YXRhciIsIm5hbWUiLCJjcmVhdGVkT24iLCJub3RlIiwiZXZlbnQiLCJvbkV2ZW50Iiwia2V5IiwiZGF0YSIsInR5cGUiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJyZXBsYWNlIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXkiLCJmdW5jIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBQyxLQUFLLEVBQUk7QUFDMUIsTUFBTUMsYUFBYSxHQUFHRCxLQUFLLENBQUNFLFFBQU4sR0FBaUJGLEtBQUssQ0FBQ0UsUUFBTixDQUFlQyxNQUFoQyxHQUF5QyxDQUEvRDtBQUNBLE1BQU1ELFFBQVEsR0FBR0YsS0FBSyxDQUFDRSxRQUFOLEdBQWlCRixLQUFLLENBQUNFLFFBQXZCLEdBQWtDLEVBQW5EO0FBQ0Esc0JBQ0UsNkJBQUMsU0FBRDtBQUFLLElBQUEsU0FBUyx3QkFBaUJGLEtBQUssQ0FBQ0ksU0FBTixHQUFrQkosS0FBSyxDQUFDSSxTQUF4QixHQUFvQyxFQUFyRDtBQUFkLEtBRUlKLEtBQUssQ0FBQ0ssT0FBTixnQkFDRSw2QkFBQyxpQkFBRCxPQURGLGdCQUVFLHlFQUNGLDZCQUFDLFNBQUQ7QUFBSyxJQUFBLGFBQWE7QUFBbEIsa0JBQ0UsNkJBQUMsYUFBRDtBQUNFLElBQUEsT0FBTyxFQUFFLFdBRFg7QUFFRSxJQUFBLEtBQUssRUFBQyxTQUZS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QXVCO0FBQ3JCckIsRUFBQUEsUUFBUSxFQUFFc0IsbUJBQVVDLEtBREM7QUFFckJYLEVBQUFBLE9BQU8sRUFBRVUsbUJBQVVFLElBRkU7QUFHckJ0QixFQUFBQSxTQUFTLEVBQUVvQixtQkFBVUc7QUFIQSxDQUF2QjtlQU1lNUIsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBWSEF2YXRhciBmcm9tIFwiLi4vQXZhdGFyXCI7XG5pbXBvcnQgVkhUZXh0IGZyb20gXCIuLi9UZXh0XCI7XG5pbXBvcnQgKiBhcyBTIGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHsgUm93IH0gZnJvbSBcIi4uLy4uL0dyaWRcIjtcbmltcG9ydCBTa2VsZXRvbiBmcm9tICcuL3NrZWxldG9uJ1xuXG5jb25zdCBWSENvbW1lbnRzID0gcHJvcHMgPT4ge1xuICBjb25zdCB0b3RhbENvbW1lbnRzID0gcHJvcHMuY29tbWVudHMgPyBwcm9wcy5jb21tZW50cy5sZW5ndGggOiAwXG4gIGNvbnN0IGNvbW1lbnRzID0gcHJvcHMuY29tbWVudHMgPyBwcm9wcy5jb21tZW50cyA6IFtdXG4gIHJldHVybiAoXG4gICAgPFJvdyBjbGFzc05hbWU9e2B2aC1jb21tZW50cyAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9PlxuICAgICAge1xuICAgICAgICBwcm9wcy5sb2FkaW5nXG4gICAgICAgID8gPFNrZWxldG9uIC8+XG4gICAgICAgIDogPD5cbiAgICAgICAgPFJvdyBtYXJnaW5Cb3R0b201PlxuICAgICAgICAgIDxWSFRleHRcbiAgICAgICAgICAgIHZhcmlhbnQ9e1wicGxhdGZvcm0yXCJ9XG4gICAgICAgICAgICBjb2xvcj1cImdyYXktODBcIlxuICAgICAgICAgICAgdGV4dD17YENvbW1lbnRzICgke3RvdGFsQ29tbWVudHN9KWB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3cgbWFyZ2luPlxuICAgICAgICAgIDxTLldyYXBwZXI+XG4gICAgICAgICAgICB7Y29tbWVudHMubWFwKGNvbW1lbnQgPT4gKFxuICAgICAgICAgICAgICA8Um93IHJvdyBtYXJnaW4ganVzdGlmeUJvdHRvbSA+XG4gICAgICAgICAgICAgICAgPFJvdyBtYXJnaW4gYXV0b1dpZHRoIHBhZGRpbmdSaWdodDg+XG4gICAgICAgICAgICAgICAgICA8VkhBdmF0YXIgaW1hZ2U9e2NvbW1lbnQudXNlci5hdmF0YXJ9IHNpemU9e1wibWRcIn0gLz5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICA8Um93IG1hcmdpbj5cbiAgICAgICAgICAgICAgICAgIDxSb3cgbWFyZ2luIHJvdyBhbGlnbkl0ZW1zQ2VudGVyID5cbiAgICAgICAgICAgICAgICAgICAgPFZIVGV4dFxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9e1wicGxhdGZvcm1cIn1cbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImdyYXktMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtjb21tZW50LnVzZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPFMuVGV4dFdyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPFZIVGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD17XCJjYXB0aW9uXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImdyYXktNTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17Y29tbWVudC5jcmVhdGVkT259XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9TLlRleHRXcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICA8Um93IG1hcmdpbiBtYXJnaW5Cb3R0b201PlxuICAgICAgICAgICAgICAgICAgICA8VkhUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD17XCJwbGF0Zm9ybVwifVxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZ3JheS04MFwiXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dD17Y29tbWVudC5ub3RlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9TLldyYXBwZXI+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8Lz5cbiAgICAgIH1cbiAgICAgIDxSb3cgcm93IG1hcmdpbiBhbGlnbkl0ZW1zQ2VudGVyPlxuICAgICAgICA8VkhBdmF0YXJcbiAgICAgICAgICBpbWFnZT17XG4gICAgICAgICAgICBcImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS91aWZhY2VzL2ZhY2VzL3R3aXR0ZXIvZGFuY291bnNlbGwvMTI4LmpwZ1wiXG4gICAgICAgICAgfVxuICAgICAgICAgIHNpemU9e1wibWRcIn1cbiAgICAgICAgLz5cbiAgICAgICAgPFMuQXJlYSBwbGFjZWhvbGRlcj1cIkFzayBhIHF1ZXN0aW9uIG9yIHBvc3QgYSB1cHRhZGVcIlxuICAgICAgICAgIG9uS2V5VXA9e2V2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5vbkV2ZW50ICYmIGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgICBwcm9wcy5vbkV2ZW50KHtcbiAgICAgICAgICAgICAgICBkYXRhOiBwcm9wcy5kYXRhLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdvbkVudGVyJyxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICdWSENvbW1lbnRzJyxcbiAgICAgICAgICAgICAgICBjb21tZW50OiBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1xcbi9nLCBcIiBcIilcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSA9ICcnXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH19PjwvUy5BcmVhPlxuICAgICAgPC9Sb3c+XG4gICAgPC9Sb3c+XG4gICk7XG59O1xuXG5WSENvbW1lbnRzLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29tbWVudHM6IFtdLFxuICBvbkV2ZW50OiBudWxsLFxuICBjbGFzc05hbWU6IFwiXCJcbn07XG5cblZIQ29tbWVudHMucHJvcFR5cGVzID0ge1xuICBjb21tZW50czogUHJvcFR5cGVzLmFycmF5LFxuICBvbkV2ZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBWSENvbW1lbnRzO1xuIl19