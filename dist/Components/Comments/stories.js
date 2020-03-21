"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var comments = [{
  "createdOn": "3 days",
  "note": "Adding a comment 007",
  "user": {
    "id": 141394.0,
    "name": "Anybal Silva",
    "email": "anybal@vanhack.com",
    "avatar": "https://vanhackblobstorageprod.blob.core.windows.net/img/User/1498bcb6-6bb6-4def-bd1a-8c2414e21330.jpg",
    "isPremium": false
  },
  "id": 9021
}];
(0, _react2.storiesOf)("Components|Comments", module).add("default", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '589px',
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    comments: comments,
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  }));
}).add("loading", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '589px',
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    loading: true,
    comments: comments,
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQ29tbWVudHMvc3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJjb21tZW50cyIsIm1vZHVsZSIsImFkZCIsIndpZHRoIiwicGFkZGluZyIsImV2ZW50IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLFFBQVEsR0FBRyxDQUNiO0FBQ0ksZUFBYSxRQURqQjtBQUVJLFVBQVEsc0JBRlo7QUFHSSxVQUFRO0FBQ0osVUFBTSxRQURGO0FBRUosWUFBUSxjQUZKO0FBR0osYUFBUyxvQkFITDtBQUlKLGNBQVUsd0dBSk47QUFLSixpQkFBYTtBQUxULEdBSFo7QUFVSSxRQUFNO0FBVlYsQ0FEYSxDQUFqQjtBQWVBLHVCQUFVLHFCQUFWLEVBQWlDQyxNQUFqQyxFQUNLQyxHQURMLENBQ1MsU0FEVCxFQUNvQjtBQUFBLHNCQUNaO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLE9BQVQ7QUFBa0JDLE1BQUFBLE9BQU8sRUFBRTtBQUEzQjtBQUFaLGtCQUNJLDZCQUFDLFNBQUQ7QUFBWSxJQUFBLFFBQVEsRUFBRUosUUFBdEI7QUFBZ0MsSUFBQSxPQUFPLEVBQUUsaUJBQUNLLEtBQUQ7QUFBQSxhQUFXQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWixDQUFYO0FBQUE7QUFBekMsSUFESixDQURZO0FBQUEsQ0FEcEIsRUFNS0gsR0FOTCxDQU1TLFNBTlQsRUFNb0I7QUFBQSxzQkFDWjtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxPQUFUO0FBQWtCQyxNQUFBQSxPQUFPLEVBQUU7QUFBM0I7QUFBWixrQkFDSSw2QkFBQyxTQUFEO0FBQVksSUFBQSxPQUFPLE1BQW5CO0FBQW9CLElBQUEsUUFBUSxFQUFFSixRQUE5QjtBQUF3QyxJQUFBLE9BQU8sRUFBRSxpQkFBQ0ssS0FBRDtBQUFBLGFBQVdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaLENBQVg7QUFBQTtBQUFqRCxJQURKLENBRFk7QUFBQSxDQU5wQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0b3JpZXNPZiB9IGZyb20gXCJAc3Rvcnlib29rL3JlYWN0XCI7XG5pbXBvcnQgVkhDb21tZW50cyBmcm9tIFwiLlwiO1xuXG5jb25zdCBjb21tZW50cyA9IFtcbiAgICB7XG4gICAgICAgIFwiY3JlYXRlZE9uXCI6IFwiMyBkYXlzXCIsXG4gICAgICAgIFwibm90ZVwiOiBcIkFkZGluZyBhIGNvbW1lbnQgMDA3XCIsXG4gICAgICAgIFwidXNlclwiOiB7XG4gICAgICAgICAgICBcImlkXCI6IDE0MTM5NC4wLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiQW55YmFsIFNpbHZhXCIsXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiYW55YmFsQHZhbmhhY2suY29tXCIsXG4gICAgICAgICAgICBcImF2YXRhclwiOiBcImh0dHBzOi8vdmFuaGFja2Jsb2JzdG9yYWdlcHJvZC5ibG9iLmNvcmUud2luZG93cy5uZXQvaW1nL1VzZXIvMTQ5OGJjYjYtNmJiNi00ZGVmLWJkMWEtOGMyNDE0ZTIxMzMwLmpwZ1wiLFxuICAgICAgICAgICAgXCJpc1ByZW1pdW1cIjogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgXCJpZFwiOiA5MDIxXG4gICAgfVxuXVxuXG5zdG9yaWVzT2YoXCJDb21wb25lbnRzfENvbW1lbnRzXCIsIG1vZHVsZSlcbiAgICAuYWRkKFwiZGVmYXVsdFwiLCAoKSA9PiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICc1ODlweCcsIHBhZGRpbmc6IFwiMjRweFwifX0+XG4gICAgICAgICAgICA8VkhDb21tZW50cyBjb21tZW50cz17Y29tbWVudHN9IG9uRXZlbnQ9eyhldmVudCkgPT4gY29uc29sZS5sb2coZXZlbnQpfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICkpXG4gICAgLmFkZChcImxvYWRpbmdcIiwgKCkgPT4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnNTg5cHgnLCBwYWRkaW5nOiBcIjI0cHhcIn19PlxuICAgICAgICAgICAgPFZIQ29tbWVudHMgbG9hZGluZyBjb21tZW50cz17Y29tbWVudHN9IG9uRXZlbnQ9eyhldmVudCkgPT4gY29uc29sZS5sb2coZXZlbnQpfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICkpXG4iXX0=