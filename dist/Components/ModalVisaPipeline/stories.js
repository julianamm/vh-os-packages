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
  return _react.default.createElement("div", {
    style: {
      width: '100vw',
      height: '100vh'
    }
  }, _react.default.createElement(_.default, {
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
  return _react.default.createElement("div", {
    style: {
      width: '100vw',
      height: '100vh'
    }
  }, _react.default.createElement(_.default, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvTW9kYWxWaXNhUGlwZWxpbmUvc3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJjb21tZW50c1Nlc3Npb24iLCJsb2FkaW5nIiwiZXJyb3IiLCJzdWNjZXNzIiwiYXNzaWduZWRTZXNzaW9uIiwiYWN0aXZpdGllc1Nlc3Npb24iLCJjb21tZW50c1Nlc3Npb25Mb2FkaW5nIiwiYXNzaWduZWRTZXNzaW9uTG9hZGluZyIsImFjdGl2aXRpZXNTZXNzaW9uTG9hZGluZyIsInVzZXIiLCJjb21tZW50cyIsImpvYiIsInRpbWVMaW5lRGF0YSIsInRvdGFsRGF5cyIsIml0ZW1zIiwiY3JlYXRlZE9uIiwiY29sdW1uTmFtZSIsInVzZXJOYW1lIiwiYXNzaWduRGF0YSIsImlkIiwibmFtZSIsImVtYWlsIiwiYXZhdGFyIiwiZGVzY3JpcHRpb25EYXRhIiwiZGVzY3JpcHRpb24iLCJtb2R1bGUiLCJhZGQiLCJ3aWR0aCIsImhlaWdodCIsImV2ZW50IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWUsR0FBRztBQUN0QkMsRUFBQUEsT0FBTyxFQUFFLEtBRGE7QUFFdEJDLEVBQUFBLEtBQUssRUFBRSxLQUZlO0FBR3RCQyxFQUFBQSxPQUFPLEVBQUU7QUFIYSxDQUF4QjtBQU1BLElBQU1DLGVBQWUsR0FBRztBQUN0QkgsRUFBQUEsT0FBTyxFQUFFLEtBRGE7QUFFdEJDLEVBQUFBLEtBQUssRUFBRSxLQUZlO0FBR3RCQyxFQUFBQSxPQUFPLEVBQUU7QUFIYSxDQUF4QjtBQU1BLElBQU1FLGlCQUFpQixHQUFHO0FBQ3hCSixFQUFBQSxPQUFPLEVBQUUsS0FEZTtBQUV4QkMsRUFBQUEsS0FBSyxFQUFFLEtBRmlCO0FBR3hCQyxFQUFBQSxPQUFPLEVBQUU7QUFIZSxDQUExQjtBQU1BLElBQU1HLHNCQUFzQixHQUFHO0FBQzdCTCxFQUFBQSxPQUFPLEVB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RixLQUFaLENBQUo7QUFBQSxLQUF4TDtBQUFnTixJQUFBLFFBQVEsRUFBRW5CLFFBQTFOO0FBQW9PLElBQUEsUUFBUSxvQkFBT0UsWUFBUCxDQUE1TztBQUFtUSxJQUFBLE1BQU0sb0JBQU9NLFVBQVAsQ0FBelE7QUFBOFIsSUFBQSxXQUFXLEVBQUVLLGVBQWUsQ0FBQ0M7QUFBM1QsSUFERixDQURjO0FBQUEsQ0FObEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdG9yaWVzT2YgfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiO1xuaW1wb3J0IFZITW9kYWxWaXNhUGlwZWxpbmUgZnJvbSBcIi5cIjtcblxuY29uc3QgY29tbWVudHNTZXNzaW9uID0ge1xuICBsb2FkaW5nOiBmYWxzZSxcbiAgZXJyb3I6IGZhbHNlLFxuICBzdWNjZXNzOiB0cnVlXG59XG5cbmNvbnN0IGFzc2lnbmVkU2Vzc2lvbiA9IHtcbiAgbG9hZGluZzogZmFsc2UsXG4gIGVycm9yOiBmYWxzZSxcbiAgc3VjY2VzczogdHJ1ZVxufVxuXG5jb25zdCBhY3Rpdml0aWVzU2Vzc2lvbiA9IHtcbiAgbG9hZGluZzogZmFsc2UsXG4gIGVycm9yOiBmYWxzZSxcbiAgc3VjY2VzczogdHJ1ZVxufVxuXG5jb25zdCBjb21tZW50c1Nlc3Npb25Mb2FkaW5nID0ge1xuICBsb2FkaW5nOiB0cnVlLFxuICBlcnJvcjogZmFsc2UsXG4gIHN1Y2Nlc3M6IHRydWVcbn1cblxuY29uc3QgYXNzaWduZWRTZXNzaW9uTG9hZGluZyA9IHtcbiAgbG9hZGluZzogdHJ1ZSxcbiAgZXJyb3I6IGZhbHNlLFxuICBzdWNjZXNzOiB0cnVlXG59XG5cbmNvbnN0IGFjdGl2aXRpZXNTZXNzaW9uTG9hZGluZyA9IHtcbiAgbG9hZGluZzogdHJ1ZSxcbiAgZXJyb3I6IGZhbHNlLFxuICBzdWNjZXNzOiB0cnVlXG59XG5cblxuY29uc3QgdXNlciA9IHtcbiAgXCJpZFwiOiAxNDEzOTQuMCxcbiAgXCJuYW1lXCI6IFwiSXZhbiBBdmRvbmluXCIsXG4gIFwiZW1haWxcIjogXCJ2aEBtYWlsaW5hdG9yLmNvbVwiLFxuICBcImF2YXRhclwiOiBcImh0dHBzOi8vdmFuaGFja2Jsb2JzdG9yYWdlcHJvZC5ibG9iLmNvcmUud2luZG93cy5uZXQvaW1nL1VzZXIvLTEuanBnXCIsXG4gIFwiaXNQcmVtaXVtXCI6IGZhbHNlXG59XG5cbmNvbnN0IGNvbW1lbnRzID0gW1xuICB7XG4gICAgXCJjcmVhdGVkT25cIjogXCI0IGRheXNcIixcbiAgICBcIm5vdGVcIjogXCJBZGRpbmcgYSBjb21tZW50IDAwN1wiLFxuICAgIFwidXNlclwiOiB7XG4gICAgICBcImlkXCI6IDE0MTM5NC4wLFxuICAgICAgXCJuYW1lXCI6IFwiQW55YmFsIFNpbHZhXCIsXG4gICAgICBcImVtYWlsXCI6IFwiYW55YmFsQHZhbmhhY2suY29tXCIsXG4gICAgICBcImF2YXRhclwiOiBcImh0dHBzOi8vdmFuaGFja2Jsb2JzdG9yYWdlcHJvZC5ibG9iLmNvcmUud2luZG93cy5uZXQvaW1nL1VzZXIvMTQ5OGJjYjYtNmJiNi00ZGVmLWJkMWEtOGMyNDE0ZTIxMzMwLmpwZ1wiLFxuICAgICAgXCJpc1ByZW1pdW1cIjogZmFsc2VcbiAgICB9LFxuICAgIFwiaWRcIjogOTAyMVxuICB9XG5dXG5cbmNvbnN0IGpvYiA9IHtcbiAgXCJsb2NhdGlvblwiOiBcIlZhbmNvdXZlciwgQ2FuYWRhXCIsXG4gIFwicG9zaXRpb25cIjogXCJpT1MgRGV2ZWxvcGVyXCIsXG4gIFwiY29tcGFueU5hbWVcIjogXCJLaWNrc3RhcnRlclwiLFxuICBcImlkXCI6IDE5OVxufVxuXG5cbmNvbnN0IHRpbWVMaW5lRGF0YSA9IHtcbiAgdG90YWxEYXlzOiBcIjIxIGRheXNcIixcbiAgaXRlbXM6IFtcbiAgICB7XG4gICAgICBjcmVhdGVkT246IFwiMjAxOS0wOS0xNlQxMzo1MjoyOC42NTdcIixcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBjb2x1bW5OYW1lOiBcIkxNSUEgQXBwcm92ZWRcIixcbiAgICAgICAgICB1c2VyTmFtZTogXCJFc3RoZXIgRmxvcmVzIC0gMjo0NSBhbVwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIGNyZWF0ZWRPbjogXCIyMDE5LTA5LTIyVDE4OjMyOjExLjY1N1wiLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGNvbHVtbk5hbWU6IFwiTE1JQSBBcHByb3ZlZFwiLFxuICAgICAgICAgIHVzZXJOYW1lOiBcIkVzdGhlciBGbG9yZXMgLSA2OjMzIHBtXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNvbHVtbk5hbWU6IFwiV29yayBQZXJtaXQgUHJvY2Vzc2VzXCIsXG4gICAgICAgICAgdXNlck5hbWU6IFwiRXN0aGVyIEZsb3JlcyAtIDg6NDUgcG1cIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBjcmVhdGVkT246IFwiMjAxOS0wOS0yNFQxMzoyNDoyOC42NTdcIixcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBjb2x1bW5OYW1lOiBcIkxNSUEgQXBwcm92ZWRcIixcbiAgICAgICAgICB1c2VyTmFtZTogXCJFc3RoZXIgRmxvcmVzIC0gNTo0NSBhbVwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn07XG5cbmNvbnN0IGFzc2lnbkRhdGEgPSB7XG4gIGl0ZW1zOiBbXG4gICAge1xuICAgICAgaWQ6IDAsXG4gICAgICBuYW1lOiBcIkNhcmxvc1wiLFxuICAgICAgZW1haWw6IFwiY2FybG9zQGdtYWlsLmNvbVwiLFxuICAgICAgYXZhdGFyOlxuICAgICAgICBcImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS91aWZhY2VzL2ZhY2VzL3R3aXR0ZXIvZGFuY291bnNlbGwvMTI4LmpwZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIG5hbWU6IFwiRmFiaW9cIixcbiAgICAgIGVtYWlsOiBcImZhYmlvQGdtYWlsLmNvbVwiLFxuICAgICAgYXZhdGFyOlxuICAgICAgICBcImh0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvcG9ydHJhaXRzL21lbi80Ni5qcGdcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICBuYW1lOiBcIkZyZWRcIixcbiAgICAgIGVtYWlsOiBcImZyZWRAZ21haWwuY29tXCIsXG4gICAgICBhdmF0YXI6XG4gICAgICAgIFwiaHR0cHM6Ly9wYnMudHdpbWcuY29tL3Byb2ZpbGVfaW1hZ2VzLzk3NDczNjc4NDkwNjI0ODE5Mi9nUFp3Q2JkUy5qcGdcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDMsXG4gICAgICBuYW1lOiBcIkpvc2VcIixcbiAgICAgIGVtYWlsOiBcImpvc2VAZ21haWwuY29tXCIsXG4gICAgICBhdmF0YXI6XG4gICAgICAgIFwiaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS9wb3J0cmFpdHMvbWVuLzI5LmpwZ1wiXG4gICAgfSxcbiAgXVxufTtcblxuY29uc3QgZGVzY3JpcHRpb25EYXRhID0ge1xuICBkZXNjcmlwdGlvbjogXCJSZWxvY2F0aW9uIGJvbnVzOiBDQSQgMywwMDAgKGhhbGYgb24gc2lnbmluZyBhbmQgaGFsZiB1cG9uICBhcnJpdmFsIGluIENhbmFkYSlcIlxufVxuXG5cblxuXG5cblxuXG5cbnN0b3JpZXNPZignQ29tcG9uZW50c3xNb2RhbCBWaXNhIFBpcGVsaW5lJywgbW9kdWxlKVxuICAuYWRkKCdWSE1vZGFsVmlzYVBpcGVsaW5lJywgKCkgPT4gKFxuICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDB2dycsIGhlaWdodDogJzEwMHZoJyB9fT5cbiAgICAgIDxWSE1vZGFsVmlzYVBpcGVsaW5lIGpvYj17am9ifSB1c2VyPXt1c2VyfSBhY3Rpdml0aWVzU2Vzc2lvbj17YWN0aXZpdGllc1Nlc3Npb259IGFzc2lnbmVkU2Vzc2lvbj17YXNzaWduZWRTZXNzaW9ufSBjb21tZW50c1Nlc3Npb249e2NvbW1lbnRzU2Vzc2lvbn0gb25FdmVudD17ZXZlbnQgPT4gY29uc29sZS5sb2coZXZlbnQpfSBjb21tZW50cz17Y29tbWVudHN9IHRpbWVMaW5lPXt7IC4uLnRpbWVMaW5lRGF0YSB9fSBhc3NpZ249e3sgLi4uYXNzaWduRGF0YSB9fSBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb25EYXRhLmRlc2NyaXB0aW9ufSAvPlxuICAgIDwvZGl2PlxuICApKVxuICAuYWRkKCdsb2FkaW5nJywgKCkgPT4gKFxuICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDB2dycsIGhlaWdodDogJzEwMHZoJyB9fT5cbiAgICAgIDxWSE1vZGFsVmlzYVBpcGVsaW5lIGpvYj17am9ifSB1c2VyPXt1c2VyfSBhY3Rpdml0aWVzU2Vzc2lvbj17YWN0aXZpdGllc1Nlc3Npb25Mb2FkaW5nfSBhc3NpZ25lZFNlc3Npb249e2Fzc2lnbmVkU2Vzc2lvbkxvYWRpbmd9IGNvbW1lbnRzU2Vzc2lvbj17Y29tbWVudHNTZXNzaW9uTG9hZGluZ30gb25FdmVudD17ZXZlbnQgPT4gY29uc29sZS5sb2coZXZlbnQpfSBjb21tZW50cz17Y29tbWVudHN9IHRpbWVMaW5lPXt7IC4uLnRpbWVMaW5lRGF0YSB9fSBhc3NpZ249e3sgLi4uYXNzaWduRGF0YSB9fSBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb25EYXRhLmRlc2NyaXB0aW9ufSAvPlxuICAgIDwvZGl2PlxuICApKSJdfQ==