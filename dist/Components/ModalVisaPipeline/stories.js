"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var commentsSession = {
  loading: false,
  error: false,
  success: true
};
var assignedSession = {
  loading: false,
  error: false,
  success: true
};
var activitiesSession = {
  loading: false,
  error: false,
  success: true
};
var commentsSessionLoading = {
  loading: true,
  error: false,
  success: true
};
var assignedSessionLoading = {
  loading: true,
  error: false,
  success: true
};
var activitiesSessionLoading = {
  loading: true,
  error: false,
  success: true
};
var user = {
  "id": 141394.0,
  "name": "Ivan Avdonin",
  "email": "vh@mailinator.com",
  "avatar": "https://vanhackblobstorageprod.blob.core.windows.net/img/User/-1.jpg",
  "isPremium": false
};
var comments = [{
  "createdOn": "4 days",
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
var job = {
  "location": "Vancouver, Canada",
  "position": "iOS Developer",
  "companyName": "Kickstarter",
  "id": 199
};
var timeLineData = {
  totalDays: "21 days",
  items: [{
    createdOn: "2019-09-16T13:52:28.657",
    items: [{
      columnName: "LMIA Approved",
      userName: "Esther Flores - 2:45 am"
    }]
  }, {
    createdOn: "2019-09-22T18:32:11.657",
    items: [{
      columnName: "LMIA Approved",
      userName: "Esther Flores - 6:33 pm"
    }, {
      columnName: "Work Permit Processes",
      userName: "Esther Flores - 8:45 pm"
    }]
  }, {
    createdOn: "2019-09-24T13:24:28.657",
    items: [{
      columnName: "LMIA Approved",
      userName: "Esther Flores - 5:45 am"
    }]
  }]
};
var assignData = {
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
var descriptionData = {
  description: "Relocation bonus: CA$ 3,000 (half on signing and half upon  arrival in Canada)"
};
(0, _react2.storiesOf)('Components|Modal Visa Pipeline', module).add('VHModalVisaPipeline', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100vw',
      height: '100vh'
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    job: job,
    user: user,
    activitiesSession: activitiesSession,
    assignedSession: assignedSession,
    commentsSession: commentsSession,
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    comments: comments,
    timeLine: _objectSpread({}, timeLineData),
    assign: _objectSpread({}, assignData),
    description: descriptionData.description
  }));
}).add('loading', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100vw',
      height: '100vh'
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    job: job,
    user: user,
    activitiesSession: activitiesSessionLoading,
    assignedSession: assignedSessionLoading,
    commentsSession: commentsSessionLoading,
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    comments: comments,
    timeLine: _objectSpread({}, timeLineData),
    assign: _objectSpread({}, assignData),
    description: descriptionData.description
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvTW9kYWxWaXNhUGlwZWxpbmUvc3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJjb21tZW50c1Nlc3Npb24iLCJsb2FkaW5nIiwiZXJyb3IiLCJzdWNjZXNzIiwiYXNzaWduZWRTZXNzaW9uIiwiYWN0aXZpdGllc1Nlc3Npb24iLCJjb21tZW50c1Nlc3Npb25Mb2FkaW5nIiwiYXNzaWduZWRTZXNzaW9uTG9hZGluZyIsImFjdGl2aXRpZXNTZXNzaW9uTG9hZGluZyIsInVzZXIiLCJjb21tZW50cyIsImpvYiIsInRpbWVMaW5lRGF0YSIsInRvdGFsRGF5cyIsIml0ZW1zIiwiY3JlYXRlZE9uIiwiY29sdW1uTmFtZSIsInVzZXJOYW1lIiwiYXNzaWduRGF0YSIsImlkIiwibmFtZSIsImVtYWlsIiwiYXZhdGFyIiwiZGVzY3JpcHRpb25EYXRhIiwiZGVzY3JpcHRpb24iLCJtb2R1bGUiLCJhZGQiLCJ3aWR0aCIsImhlaWdodCIsImV2ZW50IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWUsR0FBRztBQUN0QkMsRUFBQUEsT0FBTyxFQUFFLEtBRGE7QUFFdEJDLEVBQUFBLEtBQUssRUFBRSxLQUZlO0FBR3RCQyxFQUFBQSxPQUFPLEVBQUU7QUFIYSxDQUF4QjtBQU1BLElBQU1DLGVBQWUsR0FBRztBQUN0QkgsRUFBQUEsT0FBTyxFQUFFLEtBRGE7QUFFdEJDLEVBQUFBLEtBQUssRUFBRSxLQUZlO0FBR3RCQyxFQUFBQSxPQUFPLEVBQUU7QUFIYSxDQUF4QjtBQU1BLElBQU1FLGlCQUFpQixHQUFHO0FBQ3hCSixFQUFBQSxPQUFPLEVBQUUsS0FEZTtBQUV4QkMsRUFBQUEsS0FBSyxFQUFFLEtBRmlCO0FBR3hCQyxFQUFBQSxPQUFPLEVBQUU7QUFIZSxDQUExQjtBQU1BLElBQU1HLHNCQUFzQixHQUFHO0FBQzdCTCxFQUFBQSxPQUFPLEVB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Q0FBWUYsS0FBWixDQUFKO0FBQUEsS0FBeEw7QUFBZ04sSUFBQSxRQUFRLEVBQUVuQixRQUExTjtBQUFvTyxJQUFBLFFBQVEsb0JBQU9FLFlBQVAsQ0FBNU87QUFBbVEsSUFBQSxNQUFNLG9CQUFPTSxVQUFQLENBQXpRO0FBQThSLElBQUEsV0FBVyxFQUFFSyxlQUFlLENBQUNDO0FBQTNULElBREYsQ0FEYztBQUFBLENBTmxCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc3Rvcmllc09mIH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIjtcbmltcG9ydCBWSE1vZGFsVmlzYVBpcGVsaW5lIGZyb20gXCIuXCI7XG5cbmNvbnN0IGNvbW1lbnRzU2Vzc2lvbiA9IHtcbiAgbG9hZGluZzogZmFsc2UsXG4gIGVycm9yOiBmYWxzZSxcbiAgc3VjY2VzczogdHJ1ZVxufVxuXG5jb25zdCBhc3NpZ25lZFNlc3Npb24gPSB7XG4gIGxvYWRpbmc6IGZhbHNlLFxuICBlcnJvcjogZmFsc2UsXG4gIHN1Y2Nlc3M6IHRydWVcbn1cblxuY29uc3QgYWN0aXZpdGllc1Nlc3Npb24gPSB7XG4gIGxvYWRpbmc6IGZhbHNlLFxuICBlcnJvcjogZmFsc2UsXG4gIHN1Y2Nlc3M6IHRydWVcbn1cblxuY29uc3QgY29tbWVudHNTZXNzaW9uTG9hZGluZyA9IHtcbiAgbG9hZGluZzogdHJ1ZSxcbiAgZXJyb3I6IGZhbHNlLFxuICBzdWNjZXNzOiB0cnVlXG59XG5cbmNvbnN0IGFzc2lnbmVkU2Vzc2lvbkxvYWRpbmcgPSB7XG4gIGxvYWRpbmc6IHRydWUsXG4gIGVycm9yOiBmYWxzZSxcbiAgc3VjY2VzczogdHJ1ZVxufVxuXG5jb25zdCBhY3Rpdml0aWVzU2Vzc2lvbkxvYWRpbmcgPSB7XG4gIGxvYWRpbmc6IHRydWUsXG4gIGVycm9yOiBmYWxzZSxcbiAgc3VjY2VzczogdHJ1ZVxufVxuXG5cbmNvbnN0IHVzZXIgPSB7XG4gIFwiaWRcIjogMTQxMzk0LjAsXG4gIFwibmFtZVwiOiBcIkl2YW4gQXZkb25pblwiLFxuICBcImVtYWlsXCI6IFwidmhAbWFpbGluYXRvci5jb21cIixcbiAgXCJhdmF0YXJcIjogXCJodHRwczovL3ZhbmhhY2tibG9ic3RvcmFnZXByb2QuYmxvYi5jb3JlLndpbmRvd3MubmV0L2ltZy9Vc2VyLy0xLmpwZ1wiLFxuICBcImlzUHJlbWl1bVwiOiBmYWxzZVxufVxuXG5jb25zdCBjb21tZW50cyA9IFtcbiAge1xuICAgIFwiY3JlYXRlZE9uXCI6IFwiNCBkYXlzXCIsXG4gICAgXCJub3RlXCI6IFwiQWRkaW5nIGEgY29tbWVudCAwMDdcIixcbiAgICBcInVzZXJcIjoge1xuICAgICAgXCJpZFwiOiAxNDEzOTQuMCxcbiAgICAgIFwibmFtZVwiOiBcIkFueWJhbCBTaWx2YVwiLFxuICAgICAgXCJlbWFpbFwiOiBcImFueWJhbEB2YW5oYWNrLmNvbVwiLFxuICAgICAgXCJhdmF0YXJcIjogXCJodHRwczovL3ZhbmhhY2tibG9ic3RvcmFnZXByb2QuYmxvYi5jb3JlLndpbmRvd3MubmV0L2ltZy9Vc2VyLzE0OThiY2I2LTZiYjYtNGRlZi1iZDFhLThjMjQxNGUyMTMzMC5qcGdcIixcbiAgICAgIFwiaXNQcmVtaXVtXCI6IGZhbHNlXG4gICAgfSxcbiAgICBcImlkXCI6IDkwMjFcbiAgfVxuXVxuXG5jb25zdCBqb2IgPSB7XG4gIFwibG9jYXRpb25cIjogXCJWYW5jb3V2ZXIsIENhbmFkYVwiLFxuICBcInBvc2l0aW9uXCI6IFwiaU9TIERldmVsb3BlclwiLFxuICBcImNvbXBhbnlOYW1lXCI6IFwiS2lja3N0YXJ0ZXJcIixcbiAgXCJpZFwiOiAxOTlcbn1cblxuXG5jb25zdCB0aW1lTGluZURhdGEgPSB7XG4gIHRvdGFsRGF5czogXCIyMSBkYXlzXCIsXG4gIGl0ZW1zOiBbXG4gICAge1xuICAgICAgY3JlYXRlZE9uOiBcIjIwMTktMDktMTZUMTM6NTI6MjguNjU3XCIsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgY29sdW1uTmFtZTogXCJMTUlBIEFwcHJvdmVkXCIsXG4gICAgICAgICAgdXNlck5hbWU6IFwiRXN0aGVyIEZsb3JlcyAtIDI6NDUgYW1cIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBjcmVhdGVkT246IFwiMjAxOS0wOS0yMlQxODozMjoxMS42NTdcIixcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBjb2x1bW5OYW1lOiBcIkxNSUEgQXBwcm92ZWRcIixcbiAgICAgICAgICB1c2VyTmFtZTogXCJFc3RoZXIgRmxvcmVzIC0gNjozMyBwbVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjb2x1bW5OYW1lOiBcIldvcmsgUGVybWl0IFByb2Nlc3Nlc1wiLFxuICAgICAgICAgIHVzZXJOYW1lOiBcIkVzdGhlciBGbG9yZXMgLSA4OjQ1IHBtXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgY3JlYXRlZE9uOiBcIjIwMTktMDktMjRUMTM6MjQ6MjguNjU3XCIsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgY29sdW1uTmFtZTogXCJMTUlBIEFwcHJvdmVkXCIsXG4gICAgICAgICAgdXNlck5hbWU6IFwiRXN0aGVyIEZsb3JlcyAtIDU6NDUgYW1cIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59O1xuXG5jb25zdCBhc3NpZ25EYXRhID0ge1xuICBpdGVtczogW1xuICAgIHtcbiAgICAgIGlkOiAwLFxuICAgICAgbmFtZTogXCJDYXJsb3NcIixcbiAgICAgIGVtYWlsOiBcImNhcmxvc0BnbWFpbC5jb21cIixcbiAgICAgIGF2YXRhcjpcbiAgICAgICAgXCJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vdWlmYWNlcy9mYWNlcy90d2l0dGVyL2RhbmNvdW5zZWxsLzEyOC5qcGdcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICBuYW1lOiBcIkZhYmlvXCIsXG4gICAgICBlbWFpbDogXCJmYWJpb0BnbWFpbC5jb21cIixcbiAgICAgIGF2YXRhcjpcbiAgICAgICAgXCJodHRwczovL3JhbmRvbXVzZXIubWUvYXBpL3BvcnRyYWl0cy9tZW4vNDYuanBnXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgbmFtZTogXCJGcmVkXCIsXG4gICAgICBlbWFpbDogXCJmcmVkQGdtYWlsLmNvbVwiLFxuICAgICAgYXZhdGFyOlxuICAgICAgICBcImh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy85NzQ3MzY3ODQ5MDYyNDgxOTIvZ1Bad0NiZFMuanBnXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAzLFxuICAgICAgbmFtZTogXCJKb3NlXCIsXG4gICAgICBlbWFpbDogXCJqb3NlQGdtYWlsLmNvbVwiLFxuICAgICAgYXZhdGFyOlxuICAgICAgICBcImh0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvcG9ydHJhaXRzL21lbi8yOS5qcGdcIlxuICAgIH0sXG4gIF1cbn07XG5cbmNvbnN0IGRlc2NyaXB0aW9uRGF0YSA9IHtcbiAgZGVzY3JpcHRpb246IFwiUmVsb2NhdGlvbiBib251czogQ0EkIDMsMDAwIChoYWxmIG9uIHNpZ25pbmcgYW5kIGhhbGYgdXBvbiAgYXJyaXZhbCBpbiBDYW5hZGEpXCJcbn1cblxuXG5cblxuXG5cblxuXG5zdG9yaWVzT2YoJ0NvbXBvbmVudHN8TW9kYWwgVmlzYSBQaXBlbGluZScsIG1vZHVsZSlcbiAgLmFkZCgnVkhNb2RhbFZpc2FQaXBlbGluZScsICgpID0+IChcbiAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwdncnLCBoZWlnaHQ6ICcxMDB2aCcgfX0+XG4gICAgICA8VkhNb2RhbFZpc2FQaXBlbGluZSBqb2I9e2pvYn0gdXNlcj17dXNlcn0gYWN0aXZpdGllc1Nlc3Npb249e2FjdGl2aXRpZXNTZXNzaW9ufSBhc3NpZ25lZFNlc3Npb249e2Fzc2lnbmVkU2Vzc2lvbn0gY29tbWVudHNTZXNzaW9uPXtjb21tZW50c1Nlc3Npb259IG9uRXZlbnQ9e2V2ZW50ID0+IGNvbnNvbGUubG9nKGV2ZW50KX0gY29tbWVudHM9e2NvbW1lbnRzfSB0aW1lTGluZT17eyAuLi50aW1lTGluZURhdGEgfX0gYXNzaWduPXt7IC4uLmFzc2lnbkRhdGEgfX0gZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9uRGF0YS5kZXNjcmlwdGlvbn0gLz5cbiAgICA8L2Rpdj5cbiAgKSlcbiAgLmFkZCgnbG9hZGluZycsICgpID0+IChcbiAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwdncnLCBoZWlnaHQ6ICcxMDB2aCcgfX0+XG4gICAgICA8VkhNb2RhbFZpc2FQaXBlbGluZSBqb2I9e2pvYn0gdXNlcj17dXNlcn0gYWN0aXZpdGllc1Nlc3Npb249e2FjdGl2aXRpZXNTZXNzaW9uTG9hZGluZ30gYXNzaWduZWRTZXNzaW9uPXthc3NpZ25lZFNlc3Npb25Mb2FkaW5nfSBjb21tZW50c1Nlc3Npb249e2NvbW1lbnRzU2Vzc2lvbkxvYWRpbmd9IG9uRXZlbnQ9e2V2ZW50ID0+IGNvbnNvbGUubG9nKGV2ZW50KX0gY29tbWVudHM9e2NvbW1lbnRzfSB0aW1lTGluZT17eyAuLi50aW1lTGluZURhdGEgfX0gYXNzaWduPXt7IC4uLmFzc2lnbkRhdGEgfX0gZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9uRGF0YS5kZXNjcmlwdGlvbn0gLz5cbiAgICA8L2Rpdj5cbiAgKSkiXX0=