"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Components|Header Visa Pipeline', module).add('Header', function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: _Colors.default['gray-10'],
      height: '100vh'
    }
  }, _react.default.createElement(_.default, {
    title: "Visa Pipeline",
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    inputPlaceholder: "Search for companies, vanhackers, position...",
    inputValue: "search"
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvSGVhZGVyVmlzYVBpcGVsaW5lL3N0b3JpZXMuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiYWRkIiwiYmFja2dyb3VuZENvbG9yIiwiQ29sb3IiLCJoZWlnaHQiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSx1QkFBVSxpQ0FBVixFQUE2Q0EsTUFBN0MsRUFFQ0MsR0FGRCxDQUVLLFFBRkwsRUFFZTtBQUFBLFNBQ1g7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFDQyxNQUFBQSxlQUFlLEVBQUVDLGdCQUFNLFNBQU4sQ0FBbEI7QUFBb0NDLE1BQUFBLE1BQU0sRUFBRTtBQUE1QztBQUFaLEtBQ0ksNkJBQUMsU0FBRDtBQUNJLElBQUEsS0FBSyxFQUFDLGVBRFY7QUFFSSxJQUFBLE9BQU8sRUFBRSxpQkFBQ0MsS0FBRDtBQUFBLGFBQVdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaLENBQVg7QUFBQSxLQUZiO0FBR0ksSUFBQSxnQkFBZ0IsRUFBQywrQ0FIckI7QUFJSSxJQUFBLFVBQVUsRUFBQztBQUpmLElBREosQ0FEVztBQUFBLENBRmYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBzdG9yaWVzT2YgfSBmcm9tICdAc3Rvcnlib29rL3JlYWN0J1xuaW1wb3J0IFZISGVhZGVyVmlzYVBpcGVsaW5lIGZyb20gJy4nXG5pbXBvcnQgQ29sb3IgZnJvbSAnLi4vLi4vQ29sb3JzJ1xuXG5zdG9yaWVzT2YoJ0NvbXBvbmVudHN8SGVhZGVyIFZpc2EgUGlwZWxpbmUnLCBtb2R1bGUpXG5cbi5hZGQoJ0hlYWRlcicsICgpID0+IChcbiAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBDb2xvclsnZ3JheS0xMCddLCBoZWlnaHQ6ICcxMDB2aCd9fT5cbiAgICAgICAgPFZISGVhZGVyVmlzYVBpcGVsaW5lXG4gICAgICAgICAgICB0aXRsZT1cIlZpc2EgUGlwZWxpbmVcIlxuICAgICAgICAgICAgb25FdmVudD17KGV2ZW50KSA9PiBjb25zb2xlLmxvZyhldmVudCl9XG4gICAgICAgICAgICBpbnB1dFBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBjb21wYW5pZXMsIHZhbmhhY2tlcnMsIHBvc2l0aW9uLi4uXCJcbiAgICAgICAgICAgIGlucHV0VmFsdWU9XCJzZWFyY2hcIlxuICAgICAgICAvPlxuICAgIDwvZGl2PlxuKSlcblxuXG4iXX0=