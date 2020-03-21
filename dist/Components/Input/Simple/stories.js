"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)("Components|Input/Simple", module).add("default", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '80%',
      marginLeft: '1%',
      padding: '9px'
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    placeholder: "VH Simple Input",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
}).add("value", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '80%',
      marginLeft: '1%',
      padding: '9px'
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    value: "durand",
    placeholder: "VH Simple Input",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
}).add("loading", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '80%',
      marginLeft: '1%',
      padding: '9px'
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    value: "durand",
    loading: true,
    placeholder: "VH Simple Input",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
}).add("error", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '80%',
      marginLeft: '1%',
      padding: '9px'
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    value: "durand",
    error: "error from server",
    placeholder: "VH Simple Input",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvSW5wdXQvU2ltcGxlL3N0b3JpZXMuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiYWRkIiwid2lkdGgiLCJtYXJnaW5MZWZ0IiwicGFkZGluZyIsImUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOzs7O0FBRUEsdUJBQVUseUJBQVYsRUFBcUNBLE1BQXJDLEVBQ0dDLEdBREgsQ0FDTyxTQURQLEVBQ2tCO0FBQUEsc0JBQ2Q7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFDQyxNQUFBQSxLQUFLLEVBQUUsS0FBUjtBQUFlQyxNQUFBQSxVQUFVLEVBQUMsSUFBMUI7QUFBZ0NDLE1BQUFBLE9BQU8sRUFBRTtBQUF6QztBQUFaLGtCQUNFLDZCQUFDLFNBQUQ7QUFBUyxJQUFBLFdBQVcsRUFBQyxpQkFBckI7QUFBdUMsSUFBQSxPQUFPLEVBQUUsaUJBQUFDLENBQUMsRUFBSTtBQUNyREMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDRDtBQUZDLElBREYsQ0FEYztBQUFBLENBRGxCLEVBUUdKLEdBUkgsQ0FRTyxPQVJQLEVBUWdCO0FBQUEsc0JBQ1o7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFDQyxNQUFBQSxLQUFLLEVBQUUsS0FBUjtBQUFlQyxNQUFBQSxVQUFVLEVBQUMsSUFBMUI7QUFBZ0NDLE1BQUFBLE9BQU8sRUFBRTtBQUF6QztBQUFaLGtCQUNFLDZCQUFDLFNBQUQ7QUFBUyxJQUFBLEtBQUssRUFBQyxRQUFmO0FBQXdCLElBQUEsV0FBVyxFQUFDLGlCQUFwQztBQUFzRCxJQUFBLE9BQU8sRUFBRSxpQkFBQUMsQ0FBQyxFQUFJO0FBQ3BFQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNEO0FBRkMsSUFERixDQURZO0FBQUEsQ0FSaEIsRUFlR0osR0FmSCxDQWVPLFNBZlAsRUFla0I7QUFBQSxzQkFDZDtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUNDLE1BQUFBLEtBQUssRUFBRSxLQUFSO0FBQWVDLE1BQUFBLFVBQVUsRUFBQyxJQUExQjtBQUFnQ0MsTUFBQUEsT0FBTyxFQUFFO0FBQXpDO0FBQVosa0JBQ0UsNkJBQUMsU0FBRDtBQUFTLElBQUEsS0FBSyxFQUFDLFFBQWY7QUFBd0IsSUFBQSxPQUFPLE1BQS9CO0FBQWdDLElBQUEsV0FBVyxFQUFDLGlCQUE1QztBQUE4RCxJQUFBLE9BQU8sRUFBRSxpQkFBQUMsQ0FBQyxFQUFJO0FBQzVFQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNEO0FBRkMsSUFERixDQURjO0FBQUEsQ0FmbEIsRUFzQkdKLEdBdEJILENBc0JPLE9BdEJQLEVBc0JnQjtBQUFBLHNCQUNaO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBQ0MsTUFBQUEsS0FBSyxFQUFFLEtBQVI7QUFBZUMsTUFBQUEsVUFBVSxFQUFDLElBQTFCO0FBQWdDQyxNQUFBQSxPQUFPLEVBQUU7QUFBekM7QUFBWixrQkFDRSw2QkFBQyxTQUFEO0FBQVMsSUFBQSxLQUFLLEVBQUMsUUFBZjtBQUF3QixJQUFBLEtBQUssRUFBQyxtQkFBOUI7QUFBa0QsSUFBQSxXQUFXLEVBQUMsaUJBQTlEO0FBQWdGLElBQUEsT0FBTyxFQUFFLGlCQUFBQyxDQUFDLEVBQUk7QUFDOUZDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaO0FBQ0Q7QUFGQyxJQURGLENBRFk7QUFBQSxDQXRCaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdG9yaWVzT2YgfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiO1xuaW1wb3J0IFZISW5wdXQgZnJvbSBcIi5cIjtcblxuc3Rvcmllc09mKFwiQ29tcG9uZW50c3xJbnB1dC9TaW1wbGVcIiwgbW9kdWxlKVxuICAuYWRkKFwiZGVmYXVsdFwiLCAoKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnODAlJywgbWFyZ2luTGVmdDonMSUnLCBwYWRkaW5nOiAnOXB4J319PlxuICAgICAgPFZISW5wdXQgcGxhY2Vob2xkZXI9XCJWSCBTaW1wbGUgSW5wdXRcIiBvbkV2ZW50PXtlID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgfX0gLz5cbiAgICA8L2Rpdj5cbiAgKSlcbiAgLmFkZChcInZhbHVlXCIsICgpID0+IChcbiAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6ICc4MCUnLCBtYXJnaW5MZWZ0OicxJScsIHBhZGRpbmc6ICc5cHgnfX0+XG4gICAgICA8VkhJbnB1dCB2YWx1ZT1cImR1cmFuZFwiIHBsYWNlaG9sZGVyPVwiVkggU2ltcGxlIElucHV0XCIgb25FdmVudD17ZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlKVxuICAgIH19IC8+XG4gICAgPC9kaXY+XG4gICkpXG4gIC5hZGQoXCJsb2FkaW5nXCIsICgpID0+IChcbiAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6ICc4MCUnLCBtYXJnaW5MZWZ0OicxJScsIHBhZGRpbmc6ICc5cHgnfX0+XG4gICAgICA8VkhJbnB1dCB2YWx1ZT1cImR1cmFuZFwiIGxvYWRpbmcgcGxhY2Vob2xkZXI9XCJWSCBTaW1wbGUgSW5wdXRcIiBvbkV2ZW50PXtlID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgfX0gLz5cbiAgICA8L2Rpdj5cbiAgKSlcbiAgLmFkZChcImVycm9yXCIsICgpID0+IChcbiAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6ICc4MCUnLCBtYXJnaW5MZWZ0OicxJScsIHBhZGRpbmc6ICc5cHgnfX0+XG4gICAgICA8VkhJbnB1dCB2YWx1ZT1cImR1cmFuZFwiIGVycm9yPSdlcnJvciBmcm9tIHNlcnZlcicgcGxhY2Vob2xkZXI9XCJWSCBTaW1wbGUgSW5wdXRcIiBvbkV2ZW50PXtlID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgfX0gLz5cbiAgICA8L2Rpdj5cbiAgKSlcbiJdfQ==