"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = {
  items: [{
    id: 0,
    name: "Carlos",
    email: "carlos@gmail.com",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
  }, {
    id: 1,
    name: "Fabio",
    email: "fabio@gmail.com",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg"
  }, {
    id: 2,
    name: "Fred",
    email: "fred@gmail.com",
    avatar: "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg"
  }, {
    id: 3,
    name: "Jose",
    email: "jose@gmail.com",
    avatar: "https://randomuser.me/api/portraits/men/29.jpg"
  }]
};
(0, _react2.storiesOf)("Components|Assign", module).add("VHAssign", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "300px",
      padding: "60px 24px 24px 24px",
      height: "450px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    items: data.items,
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQXNzaWduL3N0b3JpZXMuanMiXSwibmFtZXMiOlsiZGF0YSIsIml0ZW1zIiwiaWQiLCJuYW1lIiwiZW1haWwiLCJhdmF0YXIiLCJtb2R1bGUiLCJhZGQiLCJ3aWR0aCIsInBhZGRpbmciLCJoZWlnaHQiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUc7QUFDWEMsRUFBQUEsS0FBSyxFQUFFLENBQ0w7QUFDRUMsSUFBQUEsRUFBRSxFQUFFLENBRE47QUFFRUMsSUFBQUEsSUFBSSxFQUFFLFFBRlI7QUFHRUMsSUFBQUEsS0FBSyxFQUFFLGtCQUhUO0FBSUVDLElBQUFBLE1BQU0sRUFDSjtBQUxKLEdBREssRUFRTDtBQUNFSCxJQUFBQSxFQUFFLEVBQUUsQ0FETjtBQUVFQyxJQUFBQSxJQUFJLEVBQUUsT0FGUjtBQUdFQyxJQUFBQSxLQUFLLEVBQUUsaUJBSFQ7QUFJRUMsSUFBQUEsTUFBTSxFQUNKO0FBTEosR0FSSyxFQWVMO0FBQ0VILElBQUFBLEVBQUUsRUFBRSxDQUROO0FBRUVDLElBQUFBLElBQUksRUFBRSxNQUZSO0FBR0VDLElBQUFBLEtBQUssRUFBRSxnQkFIVDtBQUlFQyxJQUFBQSxNQUFNLEVBQ0o7QUFMSixHQWZLLEVBc0JMO0FBQ0VILElBQUFBLEVBQUUsRUFBRSxDQUROO0FBRUVDLElBQUFBLElBQUksRUFBRSxNQUZSO0FBR0VDLElBQUFBLEtBQUssRUFBRSxnQkFIVDtBQUlFQyxJQUFBQSxNQUFNLEVBQ0o7QUFMSixHQXRCSztBQURJLENBQWI7QUFpQ0EsdUJBQVUsbUJBQVYsRUFBK0JDLE1BQS9CLEVBQXVDQyxHQUF2QyxDQUEyQyxVQUEzQyxFQUF1RDtBQUFBLHNCQUNyRDtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxPQUFUO0FBQWtCQyxNQUFBQSxPQUFPLEVBQUUscUJBQTNCO0FBQWtEQyxNQUFBQSxNQUFNLEVBQUU7QUFBMUQ7QUFBWixrQkFDRSw2QkFBQyxTQUFEO0FBQVUsSUFBQSxLQUFLLEVBQUVWLElBQUksQ0FBQ0MsS0FBdEI7QUFBNkIsSUFBQSxPQUFPLEVBQUUsaUJBQUFVLEtBQUs7QUFBQSxhQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWixDQUFKO0FBQUE7QUFBM0MsSUFERixDQURxRDtBQUFBLENBQXZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc3Rvcmllc09mIH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIjtcbmltcG9ydCBWSEFzc2lnbiBmcm9tIFwiLlwiO1xuXG5jb25zdCBkYXRhID0ge1xuICBpdGVtczogW1xuICAgIHtcbiAgICAgIGlkOiAwLFxuICAgICAgbmFtZTogXCJDYXJsb3NcIixcbiAgICAgIGVtYWlsOiBcImNhcmxvc0BnbWFpbC5jb21cIixcbiAgICAgIGF2YXRhcjpcbiAgICAgICAgXCJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vdWlmYWNlcy9mYWNlcy90d2l0dGVyL2RhbmNvdW5zZWxsLzEyOC5qcGdcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICBuYW1lOiBcIkZhYmlvXCIsXG4gICAgICBlbWFpbDogXCJmYWJpb0BnbWFpbC5jb21cIixcbiAgICAgIGF2YXRhcjpcbiAgICAgICAgXCJodHRwczovL3JhbmRvbXVzZXIubWUvYXBpL3BvcnRyYWl0cy9tZW4vNDYuanBnXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgbmFtZTogXCJGcmVkXCIsXG4gICAgICBlbWFpbDogXCJmcmVkQGdtYWlsLmNvbVwiLFxuICAgICAgYXZhdGFyOlxuICAgICAgICBcImh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy85NzQ3MzY3ODQ5MDYyNDgxOTIvZ1Bad0NiZFMuanBnXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAzLFxuICAgICAgbmFtZTogXCJKb3NlXCIsXG4gICAgICBlbWFpbDogXCJqb3NlQGdtYWlsLmNvbVwiLFxuICAgICAgYXZhdGFyOlxuICAgICAgICBcImh0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvcG9ydHJhaXRzL21lbi8yOS5qcGdcIlxuICAgIH0sXG4gIF1cbn07XG5cbnN0b3JpZXNPZihcIkNvbXBvbmVudHN8QXNzaWduXCIsIG1vZHVsZSkuYWRkKFwiVkhBc3NpZ25cIiwgKCkgPT4gKFxuICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjMwMHB4XCIsIHBhZGRpbmc6IFwiNjBweCAyNHB4IDI0cHggMjRweFwiLCBoZWlnaHQ6IFwiNDUwcHhcIiB9fT5cbiAgICA8VkhBc3NpZ24gaXRlbXM9e2RhdGEuaXRlbXN9IG9uRXZlbnQ9e2V2ZW50ID0+IGNvbnNvbGUubG9nKGV2ZW50KX0gLz5cbiAgPC9kaXY+XG4pKTtcbiJdfQ==