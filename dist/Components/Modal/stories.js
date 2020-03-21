"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var user = {
  firstName: 'John',
  image: 'https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg'
};
(0, _react2.storiesOf)('Components|Modal', module).add('VHModal with title', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100vw',
      height: '100vh'
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    open: true,
    header: "VanHack",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  }));
}).add('VHModal without title', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100vw',
      height: '100vh'
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    open: true,
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    hideBtnClose: false,
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  }));
}).add('VHModal without Close Icon', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100vw',
      height: '100vh'
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    open: true,
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    hideBtnClose: true,
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  }));
}).add('VHModal with component', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100vw',
      height: '100vh'
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    open: true,
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    content: /*#__PURE__*/_react.default.createElement("div", null, "teste")
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvTW9kYWwvc3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJ1c2VyIiwiZmlyc3ROYW1lIiwiaW1hZ2UiLCJtb2R1bGUiLCJhZGQiLCJ3aWR0aCIsImhlaWdodCIsImV2ZW50IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLElBQUksR0FBRztBQUNYQyxFQUFBQSxTQUFTLEVBQUUsTUFEQTtBQUVYQyxFQUFBQSxLQUFLLEVBQUU7QUFGSSxDQUFiO0FBS0EsdUJBQVUsa0JBQVYsRUFBOEJDLE1BQTlCLEVBQ0dDLEdBREgsQ0FDTyxvQkFEUCxFQUM2QjtBQUFBLHNCQUN6QjtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxPQUFUO0FBQWtCQyxNQUFBQSxNQUFNLEVBQUU7QUFBMUI7QUFBWixrQkFDRSw2QkFBQyxTQUFEO0FBQ0UsSUFBQSxJQUFJLE1BRE47QUFFRSxJQUFBLE1BQU0sRUFBQyxTQUZUO0FBR0UsSUFBQSxPQUFPLEVBQUMsNEVBSFY7QUFLRSxJQUFBLE9BQU8sRUFBRSxpQkFBQUMsS0FBSztBQUFBLGFBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaLENBQUo7QUFBQTtBQUxoQixJQURGLENBRHlCO0FBQUEsQ0FEN0IsRUFZR0gsR0FaSCxDQVlPLHVCQVpQLEVBWWdDO0FBQUEsc0JBQzVCO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLE9BQVQ7QUFBa0JDLE1BQUFBLE1BQU0sRUFBRTtBQUExQjtBQUFaLGtCQUNFLDZCQUFDLFNBQUQ7QUFDRSxJQUFBLElBQUksTUFETjtBQUVFLElBQUEsT0FBTyxFQUFDLDRFQUZWO0FBSUUsSUFBQSxZQUFZLEVBQUUsS0FKaEI7QUFLRSxJQUFBLE9BQU8sRUFBRSxpQkFBQUMsS0FBSztBQUFBLGFBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaLENBQUo7QUFBQTtBQUxoQixJQURGLENBRDRCO0FBQUEsQ0FaaEMsRUF1QkdILEdBdkJILENBdUJPLDRCQXZCUCxFQXVCcUM7QUFBQSxzQkFDakM7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsT0FBVDtBQUFrQkMsTUFBQUEsTUFBTSxFQUFFO0FBQTFCO0FBQVosa0JBQ0UsNkJBQUMsU0FBRDtBQUNFLElBQUEsSUFBSSxNQUROO0FBRUUsSUFBQSxPQUFPLEVBQUMsNEVBRlY7QUFJRSxJQUFBLFlBQVksTUFKZDtBQUtFLElBQUEsT0FBTyxFQUFFLGlCQUFBQyxLQUFLO0FBQUEsYUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVosQ0FBSjtBQUFBO0FBTGhCLElBREYsQ0FEaUM7QUFBQSxDQXZCckMsRUFrQ0dILEdBbENILENBa0NPLHdCQWxDUCxFQWtDaUM7QUFBQSxzQkFDN0I7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsT0FBVDtBQUFrQkMsTUFBQUEsTUFBTSxFQUFFO0FBQTFCO0FBQVosa0JBQ0UsNkJBQUMsU0FBRDtBQUNFLElBQUEsSUFBSSxFQUFFLElBRFI7QUFFRSxJQUFBLE9BQU8sRUFBRSxpQkFBQUMsS0FBSztBQUFBLGFBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaLENBQUo7QUFBQSxLQUZoQjtBQUdFLElBQUEsT0FBTyxlQUFFO0FBSFgsSUFERixDQUQ2QjtBQUFBLENBbENqQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0b3JpZXNPZiB9IGZyb20gXCJAc3Rvcnlib29rL3JlYWN0XCI7XG5pbXBvcnQgVkhNb2RhbCBmcm9tIFwiLlwiO1xuXG5jb25zdCB1c2VyID0ge1xuICBmaXJzdE5hbWU6ICdKb2huJyxcbiAgaW1hZ2U6ICdodHRwczovL3MzLmFtYXpvbmF3cy5jb20vdWlmYWNlcy9mYWNlcy90d2l0dGVyL2RhbmNvdW5zZWxsLzEyOC5qcGcnXG59O1xuXG5zdG9yaWVzT2YoJ0NvbXBvbmVudHN8TW9kYWwnLCBtb2R1bGUpXG4gIC5hZGQoJ1ZITW9kYWwgd2l0aCB0aXRsZScsICgpID0+IChcbiAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwdncnLCBoZWlnaHQ6ICcxMDB2aCcgfX0+XG4gICAgICA8VkhNb2RhbFxuICAgICAgICBvcGVuXG4gICAgICAgIGhlYWRlcj1cIlZhbkhhY2tcIlxuICAgICAgICBjb250ZW50PVwiTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZ1xuICAgICAgICBpbmR1c3RyeS5cIlxuICAgICAgICBvbkV2ZW50PXtldmVudCA9PiBjb25zb2xlLmxvZyhldmVudCl9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApKVxuICAuYWRkKCdWSE1vZGFsIHdpdGhvdXQgdGl0bGUnLCAoKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMHZ3JywgaGVpZ2h0OiAnMTAwdmgnIH19PlxuICAgICAgPFZITW9kYWxcbiAgICAgICAgb3BlblxuICAgICAgICBjb250ZW50PVwiTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZ1xuICAgICAgICBpbmR1c3RyeS5cIlxuICAgICAgICBoaWRlQnRuQ2xvc2U9e2ZhbHNlfVxuICAgICAgICBvbkV2ZW50PXtldmVudCA9PiBjb25zb2xlLmxvZyhldmVudCl9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApKVxuICAuYWRkKCdWSE1vZGFsIHdpdGhvdXQgQ2xvc2UgSWNvbicsICgpID0+IChcbiAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwdncnLCBoZWlnaHQ6ICcxMDB2aCcgfX0+XG4gICAgICA8VkhNb2RhbFxuICAgICAgICBvcGVuXG4gICAgICAgIGNvbnRlbnQ9XCJMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nXG4gICAgICAgIGluZHVzdHJ5LlwiXG4gICAgICAgIGhpZGVCdG5DbG9zZVxuICAgICAgICBvbkV2ZW50PXtldmVudCA9PiBjb25zb2xlLmxvZyhldmVudCl9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApKVxuICAuYWRkKCdWSE1vZGFsIHdpdGggY29tcG9uZW50JywgKCkgPT4gKFxuICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDB2dycsIGhlaWdodDogJzEwMHZoJyB9fT5cbiAgICAgIDxWSE1vZGFsXG4gICAgICAgIG9wZW49e3RydWV9XG4gICAgICAgIG9uRXZlbnQ9e2V2ZW50ID0+IGNvbnNvbGUubG9nKGV2ZW50KX1cbiAgICAgICAgY29udGVudD17PGRpdj50ZXN0ZTwvZGl2Pn1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICkpO1xuIl19