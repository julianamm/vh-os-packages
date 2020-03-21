"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Components|Header Visa Pipeline', module).add('Header', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: _Colors.default['gray-10'],
      height: '100vh'
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    title: "Visa Pipeline",
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    inputPlaceholder: "Search for companies, vanhackers, position...",
    inputValue: "search"
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvSGVhZGVyVmlzYVBpcGVsaW5lL3N0b3JpZXMuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiYWRkIiwiYmFja2dyb3VuZENvbG9yIiwiQ29sb3IiLCJoZWlnaHQiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSx1QkFBVSxpQ0FBVixFQUE2Q0EsTUFBN0MsRUFFQ0MsR0FGRCxDQUVLLFFBRkwsRUFFZTtBQUFBLHNCQUNYO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBQ0MsTUFBQUEsZUFBZSxFQUFFQyxnQkFBTSxTQUFOLENBQWxCO0FBQW9DQyxNQUFBQSxNQUFNLEVBQUU7QUFBNUM7QUFBWixrQkFDSSw2QkFBQyxTQUFEO0FBQ0ksSUFBQSxLQUFLLEVBQUMsZUFEVjtBQUVJLElBQUEsT0FBTyxFQUFFLGlCQUFDQyxLQUFEO0FBQUEsYUFBV0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVosQ0FBWDtBQUFBLEtBRmI7QUFHSSxJQUFBLGdCQUFnQixFQUFDLCtDQUhyQjtBQUlJLElBQUEsVUFBVSxFQUFDO0FBSmYsSUFESixDQURXO0FBQUEsQ0FGZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHN0b3JpZXNPZiB9IGZyb20gJ0BzdG9yeWJvb2svcmVhY3QnXG5pbXBvcnQgVkhIZWFkZXJWaXNhUGlwZWxpbmUgZnJvbSAnLidcbmltcG9ydCBDb2xvciBmcm9tICcuLi8uLi9Db2xvcnMnXG5cbnN0b3JpZXNPZignQ29tcG9uZW50c3xIZWFkZXIgVmlzYSBQaXBlbGluZScsIG1vZHVsZSlcblxuLmFkZCgnSGVhZGVyJywgKCkgPT4gKFxuICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IENvbG9yWydncmF5LTEwJ10sIGhlaWdodDogJzEwMHZoJ319PlxuICAgICAgICA8VkhIZWFkZXJWaXNhUGlwZWxpbmVcbiAgICAgICAgICAgIHRpdGxlPVwiVmlzYSBQaXBlbGluZVwiXG4gICAgICAgICAgICBvbkV2ZW50PXsoZXZlbnQpID0+IGNvbnNvbGUubG9nKGV2ZW50KX1cbiAgICAgICAgICAgIGlucHV0UGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIGNvbXBhbmllcywgdmFuaGFja2VycywgcG9zaXRpb24uLi5cIlxuICAgICAgICAgICAgaW5wdXRWYWx1ZT1cInNlYXJjaFwiXG4gICAgICAgIC8+XG4gICAgPC9kaXY+XG4pKVxuXG5cbiJdfQ==