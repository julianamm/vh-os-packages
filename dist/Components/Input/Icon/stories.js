"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)("Components|Input/Icon", module).add("default", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '80%',
      marginLeft: '1%',
      padding: '9px'
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    placeholder: "http://Isobelle.com/",
    value: "http://Isobelle.com/",
    icon: "world",
    data: {},
    onEvent: function onEvent() {
      return console.log(event);
    }
  }));
}).add("gitHub", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '80%',
      marginLeft: '1%',
      padding: '9px'
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    placeholder: "http://github.com/",
    value: "http://github.com/",
    icon: "github",
    data: {},
    onEvent: function onEvent() {
      return console.log(event);
    }
  }), /*#__PURE__*/_react.default.createElement(_.default, {
    placeholder: "http://github.com/",
    value: "http://github.com/",
    icon: "github",
    data: {},
    loading: true,
    onEvent: function onEvent() {
      return console.log(event);
    }
  }));
}).add("linkedIn", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '80%',
      marginLeft: '1%',
      padding: '9px'
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    placeholder: "http://linkedIn.com/",
    value: "http://linkedIn.com/",
    icon: "linkedin",
    data: {},
    onEvent: function onEvent() {
      return console.log(event);
    }
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvSW5wdXQvSWNvbi9zdG9yaWVzLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImFkZCIsIndpZHRoIiwibWFyZ2luTGVmdCIsInBhZGRpbmciLCJjb25zb2xlIiwibG9nIiwiZXZlbnQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSx1QkFBVSx1QkFBVixFQUFtQ0EsTUFBbkMsRUFDR0MsR0FESCxDQUNPLFNBRFAsRUFDa0I7QUFBQSxzQkFDZDtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUNDLE1BQUFBLEtBQUssRUFBRSxLQUFSO0FBQWVDLE1BQUFBLFVBQVUsRUFBQyxJQUExQjtBQUFnQ0MsTUFBQUEsT0FBTyxFQUFFO0FBQXpDO0FBQVosa0JBQ0UsNkJBQUMsU0FBRDtBQUNFLElBQUEsV0FBVyxFQUFDLHNCQURkO0FBRUUsSUFBQSxLQUFLLEVBQUMsc0JBRlI7QUFHRSxJQUFBLElBQUksRUFBQyxPQUhQO0FBSUUsSUFBQSxJQUFJLEVBQUUsRUFKUjtBQUtFLElBQUEsT0FBTyxFQUFFO0FBQUEsYUFBTUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLEtBQVosQ0FBTjtBQUFBO0FBTFgsSUFERixDQURjO0FBQUEsQ0FEbEIsRUFZR04sR0FaSCxDQVlPLFFBWlAsRUFZaUI7QUFBQSxzQkFDYjtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUNDLE1BQUFBLEtBQUssRUFBRSxLQUFSO0FBQWVDLE1BQUFBLFVBQVUsRUFBQyxJQUExQjtBQUFnQ0MsTUFBQUEsT0FBTyxFQUFFO0FBQXpDO0FBQVosa0JBQ0UsNkJBQUMsU0FBRDtBQUNFLElBQUEsV0FBVyxFQUFDLG9CQURkO0FBRUUsSUFBQSxLQUFLLEVBQUMsb0JBRlI7QUFHRSxJQUFBLElBQUksRUFBQyxRQUhQO0FBSUUsSUFBQSxJQUFJLEVBQUUsRUFKUjtBQUtFLElBQUEsT0FBTyxFQUFFO0FBQUEsYUFBTUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLEtBQVosQ0FBTjtBQUFBO0FBTFgsSUFERixlQVFFLDZCQUFDLFNBQUQ7QUFDRSxJQUFBLFdBQVcsRUFBQyxvQkFEZDtBQUVFLElBQUEsS0FBSyxFQUFDLG9CQUZSO0FBR0UsSUFBQSxJQUFJLEVBQUMsUUFIUDtBQUlFLElBQUEsSUFBSSxFQUFFLEVBSlI7QUFLRSxJQUFBLE9BQU8sTUFMVDtBQU1FLElBQUEsT0FBTyxFQUFFO0FBQUEsYUFBTUYsT0FBTyxDQUFDQyxHQUFSLENBQVlDLEtBQVosQ0FBTjtBQUFBO0FBTlgsSUFSRixDQURhO0FBQUEsQ0FaakIsRUErQkdOLEdBL0JILENBK0JPLFVBL0JQLEVBK0JtQjtBQUFBLHNCQUNmO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBQ0MsTUFBQUEsS0FBSyxFQUFFLEtBQVI7QUFBZUMsTUFBQUEsVUFBVSxFQUFDLElBQTFCO0FBQWdDQyxNQUFBQSxPQUFPLEVBQUU7QUFBekM7QUFBWixrQkFDRSw2QkFBQyxTQUFEO0FBQ0UsSUFBQSxXQUFXLEVBQUMsc0JBRGQ7QUFFRSxJQUFBLEtBQUssRUFBQyxzQkFGUjtBQUdFLElBQUEsSUFBSSxFQUFDLFVBSFA7QUFJRSxJQUFBLElBQUksRUFBRSxFQUpSO0FBS0UsSUFBQSxPQUFPLEVBQUU7QUFBQSxhQUFNQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsS0FBWixDQUFOO0FBQUE7QUFMWCxJQURGLENBRGU7QUFBQSxDQS9CbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdG9yaWVzT2YgfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiO1xuaW1wb3J0IFZISW5wdXRJY29uIGZyb20gXCIuXCI7XG5cbnN0b3JpZXNPZihcIkNvbXBvbmVudHN8SW5wdXQvSWNvblwiLCBtb2R1bGUpXG4gIC5hZGQoXCJkZWZhdWx0XCIsICgpID0+IChcbiAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6ICc4MCUnLCBtYXJnaW5MZWZ0OicxJScsIHBhZGRpbmc6ICc5cHgnfX0+XG4gICAgICA8VkhJbnB1dEljb25cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJodHRwOi8vSXNvYmVsbGUuY29tL1wiXG4gICAgICAgIHZhbHVlPVwiaHR0cDovL0lzb2JlbGxlLmNvbS9cIlxuICAgICAgICBpY29uPVwid29ybGRcIlxuICAgICAgICBkYXRhPXt7fX1cbiAgICAgICAgb25FdmVudD17KCkgPT4gY29uc29sZS5sb2coZXZlbnQpfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKSlcbiAgLmFkZChcImdpdEh1YlwiLCAoKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnODAlJywgbWFyZ2luTGVmdDonMSUnLCBwYWRkaW5nOiAnOXB4J319PlxuICAgICAgPFZISW5wdXRJY29uXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiaHR0cDovL2dpdGh1Yi5jb20vXCJcbiAgICAgICAgdmFsdWU9XCJodHRwOi8vZ2l0aHViLmNvbS9cIlxuICAgICAgICBpY29uPVwiZ2l0aHViXCJcbiAgICAgICAgZGF0YT17e319XG4gICAgICAgIG9uRXZlbnQ9eygpID0+IGNvbnNvbGUubG9nKGV2ZW50KX1cbiAgICAgIC8+XG4gICAgICA8VkhJbnB1dEljb25cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJodHRwOi8vZ2l0aHViLmNvbS9cIlxuICAgICAgICB2YWx1ZT1cImh0dHA6Ly9naXRodWIuY29tL1wiXG4gICAgICAgIGljb249XCJnaXRodWJcIlxuICAgICAgICBkYXRhPXt7fX1cbiAgICAgICAgbG9hZGluZ1xuICAgICAgICBvbkV2ZW50PXsoKSA9PiBjb25zb2xlLmxvZyhldmVudCl9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApKVxuICAuYWRkKFwibGlua2VkSW5cIiwgKCkgPT4gKFxuICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogJzgwJScsIG1hcmdpbkxlZnQ6JzElJywgcGFkZGluZzogJzlweCd9fT5cbiAgICAgIDxWSElucHV0SWNvblxuICAgICAgICBwbGFjZWhvbGRlcj1cImh0dHA6Ly9saW5rZWRJbi5jb20vXCJcbiAgICAgICAgdmFsdWU9XCJodHRwOi8vbGlua2VkSW4uY29tL1wiXG4gICAgICAgIGljb249XCJsaW5rZWRpblwiXG4gICAgICAgIGRhdGE9e3t9fVxuICAgICAgICBvbkV2ZW50PXsoKSA9PiBjb25zb2xlLmxvZyhldmVudCl9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApKTtcbiJdfQ==