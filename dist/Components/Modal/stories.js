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
  return _react.default.createElement("div", {
    style: {
      width: '100vw',
      height: '100vh'
    }
  }, _react.default.createElement(_.default, {
    open: true,
    header: "VanHack",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  }));
}).add('VHModal without title', function () {
  return _react.default.createElement("div", {
    style: {
      width: '100vw',
      height: '100vh'
    }
  }, _react.default.createElement(_.default, {
    open: true,
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    hideBtnClose: false,
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  }));
}).add('VHModal without Close Icon', function () {
  return _react.default.createElement("div", {
    style: {
      width: '100vw',
      height: '100vh'
    }
  }, _react.default.createElement(_.default, {
    open: true,
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    hideBtnClose: true,
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  }));
}).add('VHModal with component', function () {
  return _react.default.createElement("div", {
    style: {
      width: '100vw',
      height: '100vh'
    }
  }, _react.default.createElement(_.default, {
    open: true,
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    content: _react.default.createElement("div", null, "teste")
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvTW9kYWwvc3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJ1c2VyIiwiZmlyc3ROYW1lIiwiaW1hZ2UiLCJtb2R1bGUiLCJhZGQiLCJ3aWR0aCIsImhlaWdodCIsImV2ZW50IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLElBQUksR0FBRztBQUNYQyxFQUFBQSxTQUFTLEVBQUUsTUFEQTtBQUVYQyxFQUFBQSxLQUFLLEVBQUU7QUFGSSxDQUFiO0FBS0EsdUJBQVUsa0JBQVYsRUFBOEJDLE1BQTlCLEVBQ0dDLEdBREgsQ0FDTyxvQkFEUCxFQUM2QjtBQUFBLFNBQ3pCO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLE9BQVQ7QUFBa0JDLE1BQUFBLE1BQU0sRUFBRTtBQUExQjtBQUFaLEtBQ0UsNkJBQUMsU0FBRDtBQUNFLElBQUEsSUFBSSxNQUROO0FBRUUsSUFBQSxNQUFNLEVBQUMsU0FGVDtBQUdFLElBQUEsT0FBTyxFQUFDLDRFQUhWO0FBS0UsSUFBQSxPQUFPLEVBQUUsaUJBQUFDLEtBQUs7QUFBQSxhQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWixDQUFKO0FBQUE7QUFMaEIsSUFERixDQUR5QjtBQUFBLENBRDdCLEVBWUdILEdBWkgsQ0FZTyx1QkFaUCxFQVlnQztBQUFBLFNBQzVCO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLE9BQVQ7QUFBa0JDLE1BQUFBLE1BQU0sRUFBRTtBQUExQjtBQUFaLEtBQ0UsNkJBQUMsU0FBRDtBQUNFLElBQUEsSUFBSSxNQUROO0FBRUUsSUFBQSxPQUFPLEVBQUMsNEVBRlY7QUFJRSxJQUFBLFlBQVksRUFBRSxLQUpoQjtBQUtFLElBQUEsT0FBTyxFQUFFLGlCQUFBQyxLQUFLO0FBQUEsYUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVosQ0FBSjtBQUFBO0FBTGhCLElBREYsQ0FENEI7QUFBQSxDQVpoQyxFQXVCR0gsR0F2QkgsQ0F1Qk8sNEJBdkJQLEVBdUJxQztBQUFBLFNBQ2pDO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLE9BQVQ7QUFBa0JDLE1BQUFBLE1BQU0sRUFBRTtBQUExQjtBQUFaLEtBQ0UsNkJBQUMsU0FBRDtBQUNFLElBQUEsSUFBSSxNQUROO0FBRUUsSUFBQSxPQUFPLEVBQUMsNEVBRlY7QUFJRSxJQUFBLFlBQVksTUFKZDtBQUtFLElBQUEsT0FBTyxFQUFFLGlCQUFBQyxLQUFLO0FBQUEsYUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVosQ0FBSjtBQUFBO0FBTGhCLElBREYsQ0FEaUM7QUFBQSxDQXZCckMsRUFrQ0dILEdBbENILENBa0NPLHdCQWxDUCxFQWtDaUM7QUFBQSxTQUM3QjtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxPQUFUO0FBQWtCQyxNQUFBQSxNQUFNLEVBQUU7QUFBMUI7QUFBWixLQUNFLDZCQUFDLFNBQUQ7QUFDRSxJQUFBLElBQUksRUFBRSxJQURSO0FBRUUsSUFBQSxPQUFPLEVBQUUsaUJBQUFDLEtBQUs7QUFBQSxhQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWixDQUFKO0FBQUEsS0FGaEI7QUFHRSxJQUFBLE9BQU8sRUFBRTtBQUhYLElBREYsQ0FENkI7QUFBQSxDQWxDakMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdG9yaWVzT2YgfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiO1xuaW1wb3J0IFZITW9kYWwgZnJvbSBcIi5cIjtcblxuY29uc3QgdXNlciA9IHtcbiAgZmlyc3ROYW1lOiAnSm9obicsXG4gIGltYWdlOiAnaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL3VpZmFjZXMvZmFjZXMvdHdpdHRlci9kYW5jb3Vuc2VsbC8xMjguanBnJ1xufTtcblxuc3Rvcmllc09mKCdDb21wb25lbnRzfE1vZGFsJywgbW9kdWxlKVxuICAuYWRkKCdWSE1vZGFsIHdpdGggdGl0bGUnLCAoKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMHZ3JywgaGVpZ2h0OiAnMTAwdmgnIH19PlxuICAgICAgPFZITW9kYWxcbiAgICAgICAgb3BlblxuICAgICAgICBoZWFkZXI9XCJWYW5IYWNrXCJcbiAgICAgICAgY29udGVudD1cIkxvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmdcbiAgICAgICAgaW5kdXN0cnkuXCJcbiAgICAgICAgb25FdmVudD17ZXZlbnQgPT4gY29uc29sZS5sb2coZXZlbnQpfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKSlcbiAgLmFkZCgnVkhNb2RhbCB3aXRob3V0IHRpdGxlJywgKCkgPT4gKFxuICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDB2dycsIGhlaWdodDogJzEwMHZoJyB9fT5cbiAgICAgIDxWSE1vZGFsXG4gICAgICAgIG9wZW5cbiAgICAgICAgY29udGVudD1cIkxvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmdcbiAgICAgICAgaW5kdXN0cnkuXCJcbiAgICAgICAgaGlkZUJ0bkNsb3NlPXtmYWxzZX1cbiAgICAgICAgb25FdmVudD17ZXZlbnQgPT4gY29uc29sZS5sb2coZXZlbnQpfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKSlcbiAgLmFkZCgnVkhNb2RhbCB3aXRob3V0IENsb3NlIEljb24nLCAoKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMHZ3JywgaGVpZ2h0OiAnMTAwdmgnIH19PlxuICAgICAgPFZITW9kYWxcbiAgICAgICAgb3BlblxuICAgICAgICBjb250ZW50PVwiTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZ1xuICAgICAgICBpbmR1c3RyeS5cIlxuICAgICAgICBoaWRlQnRuQ2xvc2VcbiAgICAgICAgb25FdmVudD17ZXZlbnQgPT4gY29uc29sZS5sb2coZXZlbnQpfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKSlcbiAgLmFkZCgnVkhNb2RhbCB3aXRoIGNvbXBvbmVudCcsICgpID0+IChcbiAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwdncnLCBoZWlnaHQ6ICcxMDB2aCcgfX0+XG4gICAgICA8VkhNb2RhbFxuICAgICAgICBvcGVuPXt0cnVlfVxuICAgICAgICBvbkV2ZW50PXtldmVudCA9PiBjb25zb2xlLmxvZyhldmVudCl9XG4gICAgICAgIGNvbnRlbnQ9ezxkaXY+dGVzdGU8L2Rpdj59XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApKTtcbiJdfQ==