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
  return _react.default.createElement("div", {
    style: {
      width: "300px",
      padding: "60px 24px 24px 24px",
      height: "450px"
    }
  }, _react.default.createElement(_.default, {
    items: data.items,
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQXNzaWduL3N0b3JpZXMuanMiXSwibmFtZXMiOlsiZGF0YSIsIml0ZW1zIiwiaWQiLCJuYW1lIiwiZW1haWwiLCJhdmF0YXIiLCJtb2R1bGUiLCJhZGQiLCJ3aWR0aCIsInBhZGRpbmciLCJoZWlnaHQiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUc7QUFDWEMsRUFBQUEsS0FBSyxFQUFFLENBQ0w7QUFDRUMsSUFBQUEsRUFBRSxFQUFFLENBRE47QUFFRUMsSUFBQUEsSUFBSSxFQUFFLFFBRlI7QUFHRUMsSUFBQUEsS0FBSyxFQUFFLGtCQUhUO0FBSUVDLElBQUFBLE1BQU0sRUFDSjtBQUxKLEdBREssRUFRTDtBQUNFSCxJQUFBQSxFQUFFLEVBQUUsQ0FETjtBQUVFQyxJQUFBQSxJQUFJLEVBQUUsT0FGUjtBQUdFQyxJQUFBQSxLQUFLLEVBQUUsaUJBSFQ7QUFJRUMsSUFBQUEsTUFBTSxFQUNKO0FBTEosR0FSSyxFQWVMO0FBQ0VILElBQUFBLEVBQUUsRUFBRSxDQUROO0FBRUVDLElBQUFBLElBQUksRUFBRSxNQUZSO0FBR0VDLElBQUFBLEtBQUssRUFBRSxnQkFIVDtBQUlFQyxJQUFBQSxNQUFNLEVBQ0o7QUFMSixHQWZLLEVBc0JMO0FBQ0VILElBQUFBLEVBQUUsRUFBRSxDQUROO0FBRUVDLElBQUFBLElBQUksRUFBRSxNQUZSO0FBR0VDLElBQUFBLEtBQUssRUFBRSxnQkFIVDtBQUlFQyxJQUFBQSxNQUFNLEVBQ0o7QUFMSixHQXRCSztBQURJLENBQWI7QUFpQ0EsdUJBQVUsbUJBQVYsRUFBK0JDLE1BQS9CLEVBQXVDQyxHQUF2QyxDQUEyQyxVQUEzQyxFQUF1RDtBQUFBLFNBQ3JEO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLE9BQVQ7QUFBa0JDLE1BQUFBLE9BQU8sRUFBRSxxQkFBM0I7QUFBa0RDLE1BQUFBLE1BQU0sRUFBRTtBQUExRDtBQUFaLEtBQ0UsNkJBQUMsU0FBRDtBQUFVLElBQUEsS0FBSyxFQUFFVixJQUFJLENBQUNDLEtBQXRCO0FBQTZCLElBQUEsT0FBTyxFQUFFLGlCQUFBVSxLQUFLO0FBQUEsYUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVosQ0FBSjtBQUFBO0FBQTNDLElBREYsQ0FEcUQ7QUFBQSxDQUF2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0b3JpZXNPZiB9IGZyb20gXCJAc3Rvcnlib29rL3JlYWN0XCI7XG5pbXBvcnQgVkhBc3NpZ24gZnJvbSBcIi5cIjtcblxuY29uc3QgZGF0YSA9IHtcbiAgaXRlbXM6IFtcbiAgICB7XG4gICAgICBpZDogMCxcbiAgICAgIG5hbWU6IFwiQ2FybG9zXCIsXG4gICAgICBlbWFpbDogXCJjYXJsb3NAZ21haWwuY29tXCIsXG4gICAgICBhdmF0YXI6XG4gICAgICAgIFwiaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL3VpZmFjZXMvZmFjZXMvdHdpdHRlci9kYW5jb3Vuc2VsbC8xMjguanBnXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgbmFtZTogXCJGYWJpb1wiLFxuICAgICAgZW1haWw6IFwiZmFiaW9AZ21haWwuY29tXCIsXG4gICAgICBhdmF0YXI6XG4gICAgICAgIFwiaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS9wb3J0cmFpdHMvbWVuLzQ2LmpwZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMixcbiAgICAgIG5hbWU6IFwiRnJlZFwiLFxuICAgICAgZW1haWw6IFwiZnJlZEBnbWFpbC5jb21cIixcbiAgICAgIGF2YXRhcjpcbiAgICAgICAgXCJodHRwczovL3Bicy50d2ltZy5jb20vcHJvZmlsZV9pbWFnZXMvOTc0NzM2Nzg0OTA2MjQ4MTkyL2dQWndDYmRTLmpwZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMyxcbiAgICAgIG5hbWU6IFwiSm9zZVwiLFxuICAgICAgZW1haWw6IFwiam9zZUBnbWFpbC5jb21cIixcbiAgICAgIGF2YXRhcjpcbiAgICAgICAgXCJodHRwczovL3JhbmRvbXVzZXIubWUvYXBpL3BvcnRyYWl0cy9tZW4vMjkuanBnXCJcbiAgICB9LFxuICBdXG59O1xuXG5zdG9yaWVzT2YoXCJDb21wb25lbnRzfEFzc2lnblwiLCBtb2R1bGUpLmFkZChcIlZIQXNzaWduXCIsICgpID0+IChcbiAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIzMDBweFwiLCBwYWRkaW5nOiBcIjYwcHggMjRweCAyNHB4IDI0cHhcIiwgaGVpZ2h0OiBcIjQ1MHB4XCIgfX0+XG4gICAgPFZIQXNzaWduIGl0ZW1zPXtkYXRhLml0ZW1zfSBvbkV2ZW50PXtldmVudCA9PiBjb25zb2xlLmxvZyhldmVudCl9IC8+XG4gIDwvZGl2PlxuKSk7XG4iXX0=