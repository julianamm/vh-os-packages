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
  return _react.default.createElement("div", {
    style: {
      width: '589px',
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    comments: comments,
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  }));
}).add("loading", function () {
  return _react.default.createElement("div", {
    style: {
      width: '589px',
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    loading: true,
    comments: comments,
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQ29tbWVudHMvc3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJjb21tZW50cyIsIm1vZHVsZSIsImFkZCIsIndpZHRoIiwicGFkZGluZyIsImV2ZW50IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLFFBQVEsR0FBRyxDQUNiO0FBQ0ksZUFBYSxRQURqQjtBQUVJLFVBQVEsc0JBRlo7QUFHSSxVQUFRO0FBQ0osVUFBTSxRQURGO0FBRUosWUFBUSxjQUZKO0FBR0osYUFBUyxvQkFITDtBQUlKLGNBQVUsd0dBSk47QUFLSixpQkFBYTtBQUxULEdBSFo7QUFVSSxRQUFNO0FBVlYsQ0FEYSxDQUFqQjtBQWVBLHVCQUFVLHFCQUFWLEVBQWlDQyxNQUFqQyxFQUNLQyxHQURMLENBQ1MsU0FEVCxFQUNvQjtBQUFBLFNBQ1o7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsT0FBVDtBQUFrQkMsTUFBQUEsT0FBTyxFQUFFO0FBQTNCO0FBQVosS0FDSSw2QkFBQyxTQUFEO0FBQVksSUFBQSxRQUFRLEVBQUVKLFFBQXRCO0FBQWdDLElBQUEsT0FBTyxFQUFFLGlCQUFDSyxLQUFEO0FBQUEsYUFBV0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVosQ0FBWDtBQUFBO0FBQXpDLElBREosQ0FEWTtBQUFBLENBRHBCLEVBTUtILEdBTkwsQ0FNUyxTQU5ULEVBTW9CO0FBQUEsU0FDWjtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxPQUFUO0FBQWtCQyxNQUFBQSxPQUFPLEVBQUU7QUFBM0I7QUFBWixLQUNJLDZCQUFDLFNBQUQ7QUFBWSxJQUFBLE9BQU8sTUFBbkI7QUFBb0IsSUFBQSxRQUFRLEVBQUVKLFFBQTlCO0FBQXdDLElBQUEsT0FBTyxFQUFFLGlCQUFDSyxLQUFEO0FBQUEsYUFBV0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVosQ0FBWDtBQUFBO0FBQWpELElBREosQ0FEWTtBQUFBLENBTnBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc3Rvcmllc09mIH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIjtcbmltcG9ydCBWSENvbW1lbnRzIGZyb20gXCIuXCI7XG5cbmNvbnN0IGNvbW1lbnRzID0gW1xuICAgIHtcbiAgICAgICAgXCJjcmVhdGVkT25cIjogXCIzIGRheXNcIixcbiAgICAgICAgXCJub3RlXCI6IFwiQWRkaW5nIGEgY29tbWVudCAwMDdcIixcbiAgICAgICAgXCJ1c2VyXCI6IHtcbiAgICAgICAgICAgIFwiaWRcIjogMTQxMzk0LjAsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJBbnliYWwgU2lsdmFcIixcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJhbnliYWxAdmFuaGFjay5jb21cIixcbiAgICAgICAgICAgIFwiYXZhdGFyXCI6IFwiaHR0cHM6Ly92YW5oYWNrYmxvYnN0b3JhZ2Vwcm9kLmJsb2IuY29yZS53aW5kb3dzLm5ldC9pbWcvVXNlci8xNDk4YmNiNi02YmI2LTRkZWYtYmQxYS04YzI0MTRlMjEzMzAuanBnXCIsXG4gICAgICAgICAgICBcImlzUHJlbWl1bVwiOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBcImlkXCI6IDkwMjFcbiAgICB9XG5dXG5cbnN0b3JpZXNPZihcIkNvbXBvbmVudHN8Q29tbWVudHNcIiwgbW9kdWxlKVxuICAgIC5hZGQoXCJkZWZhdWx0XCIsICgpID0+IChcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzU4OXB4JywgcGFkZGluZzogXCIyNHB4XCJ9fT5cbiAgICAgICAgICAgIDxWSENvbW1lbnRzIGNvbW1lbnRzPXtjb21tZW50c30gb25FdmVudD17KGV2ZW50KSA9PiBjb25zb2xlLmxvZyhldmVudCl9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgKSlcbiAgICAuYWRkKFwibG9hZGluZ1wiLCAoKSA9PiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICc1ODlweCcsIHBhZGRpbmc6IFwiMjRweFwifX0+XG4gICAgICAgICAgICA8VkhDb21tZW50cyBsb2FkaW5nIGNvbW1lbnRzPXtjb21tZW50c30gb25FdmVudD17KGV2ZW50KSA9PiBjb25zb2xlLmxvZyhldmVudCl9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgKSlcbiJdfQ==