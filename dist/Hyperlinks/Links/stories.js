"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Colors = _interopRequireDefault(require("../../Colors"));

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Hyperlinks|Links', module).add('xs', function () {
  return _react.default.createElement("div", {
    style: {
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    to: "#",
    xs: true,
    label: "VH link"
  }));
}).add('sm', function () {
  return _react.default.createElement("div", {
    style: {
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    to: "#",
    sm: true,
    label: "VH link"
  }));
}).add('lg', function () {
  return _react.default.createElement("div", {
    style: {
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    to: "#",
    lg: true,
    label: "VH link"
  }));
}).add('reverse', function () {
  return _react.default.createElement("div", {
    style: {
      width: '200px',
      height: '200px',
      backgroundColor: _Colors.default["primary-dark"],
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    reverse: true,
    to: "#",
    lg: true,
    label: "VH link reverse"
  }));
}).add('noUnderscore', function () {
  return _react.default.createElement("div", {
    style: {
      width: '200px',
      height: '200px',
      backgroundColor: _Colors.default["primary-dark"],
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    reverse: true,
    to: "#",
    lg: true,
    label: "VH link reverse",
    noUnderscore: true
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0h5cGVybGlua3MvTGlua3Mvc3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJhZGQiLCJwYWRkaW5nIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJDb2xvciJdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLHVCQUFVLGtCQUFWLEVBQThCQSxNQUE5QixFQUNHQyxHQURILENBQ08sSUFEUCxFQUNhO0FBQUEsU0FDVDtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYO0FBQVosS0FDRSw2QkFBQyxTQUFEO0FBQVEsSUFBQSxFQUFFLEVBQUUsR0FBWjtBQUFpQixJQUFBLEVBQUUsTUFBbkI7QUFBb0IsSUFBQSxLQUFLLEVBQUM7QUFBMUIsSUFERixDQURTO0FBQUEsQ0FEYixFQU1HRCxHQU5ILENBTU8sSUFOUCxFQU1hO0FBQUEsU0FDVDtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYO0FBQVosS0FDRSw2QkFBQyxTQUFEO0FBQVEsSUFBQSxFQUFFLEVBQUUsR0FBWjtBQUFpQixJQUFBLEVBQUUsTUFBbkI7QUFBb0IsSUFBQSxLQUFLLEVBQUM7QUFBMUIsSUFERixDQURTO0FBQUEsQ0FOYixFQVlHRCxHQVpILENBWU8sSUFaUCxFQVlhO0FBQUEsU0FDVDtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYO0FBQVosS0FDRSw2QkFBQyxTQUFEO0FBQVEsSUFBQSxFQUFFLEVBQUUsR0FBWjtBQUFpQixJQUFBLEVBQUUsTUFBbkI7QUFBb0IsSUFBQSxLQUFLLEVBQUM7QUFBMUIsSUFERixDQURTO0FBQUEsQ0FaYixFQWtCR0QsR0FsQkgsQ0FrQk8sU0FsQlAsRUFrQmtCO0FBQUEsU0FDZDtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVFLE1BQUFBLEtBQUssRUFBRSxPQUFUO0FBQWtCQyxNQUFBQSxNQUFNLEVBQUUsT0FBMUI7QUFBbUNDLE1BQUFBLGVBQWUsRUFBRUMsZ0JBQU0sY0FBTixDQUFwRDtBQUEyRUosTUFBQUEsT0FBTyxFQUFFO0FBQXBGO0FBQVosS0FDRSw2QkFBQyxTQUFEO0FBQVEsSUFBQSxPQUFPLE1BQWY7QUFBZ0IsSUFBQSxFQUFFLEVBQUUsR0FBcEI7QUFBeUIsSUFBQSxFQUFFLE1BQTNCO0FBQTRCLElBQUEsS0FBSyxFQUFDO0FBQWxDLElBREYsQ0FEYztBQUFBLENBbEJsQixFQXdCR0QsR0F4QkgsQ0F3Qk8sY0F4QlAsRUF3QnVCO0FBQUEsU0FDbkI7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFRSxNQUFBQSxLQUFLLEVBQUUsT0FBVDtBQUFrQkMsTUFBQUEsTUFBTSxFQUFFLE9BQTFCO0FBQW1DQyxNQUFBQSxlQUFlLEVBQUVDLGdCQUFNLGNBQU4sQ0FBcEQ7QUFBMkVKLE1BQUFBLE9BQU8sRUFBRTtBQUFwRjtBQUFaLEtBQ0UsNkJBQUMsU0FBRDtBQUFRLElBQUEsT0FBTyxNQUFmO0FBQWdCLElBQUEsRUFBRSxFQUFFLEdBQXBCO0FBQXlCLElBQUEsRUFBRSxNQUEzQjtBQUE0QixJQUFBLEtBQUssRUFBQyxpQkFBbEM7QUFBb0QsSUFBQSxZQUFZO0FBQWhFLElBREYsQ0FEbUI7QUFBQSxDQXhCdkIiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzdG9yaWVzT2YgfSBmcm9tICdAc3Rvcnlib29rL3JlYWN0JztcbmltcG9ydCBDb2xvciBmcm9tICcuLi8uLi9Db2xvcnMnXG5pbXBvcnQgVkhMaW5rIGZyb20gJy4nO1xuXG5zdG9yaWVzT2YoJ0h5cGVybGlua3N8TGlua3MnLCBtb2R1bGUpXG4gIC5hZGQoJ3hzJywgKCkgPT4gKFxuICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIyNHB4XCIgfX0+XG4gICAgICA8VkhMaW5rIHRvPXtcIiNcIn0geHMgbGFiZWw9XCJWSCBsaW5rXCIgLz5cbiAgICA8L2Rpdj5cbiAgKSlcbiAgLmFkZCgnc20nLCAoKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjI0cHhcIiB9fT5cbiAgICAgIDxWSExpbmsgdG89e1wiI1wifSBzbSBsYWJlbD1cIlZIIGxpbmtcIiAvPlxuICAgIDwvZGl2PlxuICApKVxuXG4gIC5hZGQoJ2xnJywgKCkgPT4gKFxuICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIyNHB4XCIgfX0+XG4gICAgICA8VkhMaW5rIHRvPXtcIiNcIn0gbGcgbGFiZWw9XCJWSCBsaW5rXCIgLz5cbiAgICA8L2Rpdj5cbiAgKSlcblxuICAuYWRkKCdyZXZlcnNlJywgKCkgPT4gKFxuICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGhlaWdodDogJzIwMHB4JywgYmFja2dyb3VuZENvbG9yOiBDb2xvcltcInByaW1hcnktZGFya1wiXSwgcGFkZGluZzogXCIyNHB4XCIgfX0+XG4gICAgICA8VkhMaW5rIHJldmVyc2UgdG89e1wiI1wifSBsZyBsYWJlbD1cIlZIIGxpbmsgcmV2ZXJzZVwiIC8+XG4gICAgPC9kaXY+XG4gICkpXG5cbiAgLmFkZCgnbm9VbmRlcnNjb3JlJywgKCkgPT4gKFxuICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGhlaWdodDogJzIwMHB4JywgYmFja2dyb3VuZENvbG9yOiBDb2xvcltcInByaW1hcnktZGFya1wiXSwgcGFkZGluZzogXCIyNHB4XCIgfX0+XG4gICAgICA8VkhMaW5rIHJldmVyc2UgdG89e1wiI1wifSBsZyBsYWJlbD1cIlZIIGxpbmsgcmV2ZXJzZVwiIG5vVW5kZXJzY29yZS8+XG4gICAgPC9kaXY+XG4gICkpIl19