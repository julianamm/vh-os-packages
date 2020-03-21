"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var links = [{
  name: 'General',
  href: '#general'
}, {
  name: 'Skills',
  href: '#skills'
}, {
  name: 'Relocation',
  href: '#relocation'
}, {
  name: 'Languages',
  href: '#languages'
}, {
  name: 'Experience',
  href: '#experience'
}, {
  name: 'Education',
  href: '#education'
}];
(0, _react2.storiesOf)('Components|Profile Menu', module).add('default', function () {
  return _react.default.createElement(_.default, {
    links: links
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvUHJvZmlsZU1lbnUvc3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJsaW5rcyIsIm5hbWUiLCJocmVmIiwibW9kdWxlIiwiYWRkIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLENBQ1Y7QUFDSUMsRUFBQUEsSUFBSSxFQUFFLFNBRFY7QUFFSUMsRUFBQUEsSUFBSSxFQUFFO0FBRlYsQ0FEVSxFQUtWO0FBQ0lELEVBQUFBLElBQUksRUFBRSxRQURWO0FBRUlDLEVBQUFBLElBQUksRUFBRTtBQUZWLENBTFUsRUFTVjtBQUNJRCxFQUFBQSxJQUFJLEVBQUUsWUFEVjtBQUVJQyxFQUFBQSxJQUFJLEVBQUU7QUFGVixDQVRVLEVBYVY7QUFDSUQsRUFBQUEsSUFBSSxFQUFFLFdBRFY7QUFFSUMsRUFBQUEsSUFBSSxFQUFFO0FBRlYsQ0FiVSxFQWlCVjtBQUNJRCxFQUFBQSxJQUFJLEVBQUUsWUFEVjtBQUVJQyxFQUFBQSxJQUFJLEVBQUU7QUFGVixDQWpCVSxFQXFCVjtBQUNJRCxFQUFBQSxJQUFJLEVBQUUsV0FEVjtBQUVJQyxFQUFBQSxJQUFJLEVBQUU7QUFGVixDQXJCVSxDQUFkO0FBMkJBLHVCQUFVLHlCQUFWLEVBQXFDQyxNQUFyQyxFQUVLQyxHQUZMLENBRVMsU0FGVCxFQUVvQjtBQUFBLFNBQ1osNkJBQUMsU0FBRDtBQUFlLElBQUEsS0FBSyxFQUFFSjtBQUF0QixJQURZO0FBQUEsQ0FGcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBzdG9yaWVzT2YgfSBmcm9tICdAc3Rvcnlib29rL3JlYWN0J1xuaW1wb3J0IFZIUHJvZmlsZU1lbnUgZnJvbSAnLidcblxuY29uc3QgbGlua3MgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiAnR2VuZXJhbCcsXG4gICAgICAgIGhyZWY6ICcjZ2VuZXJhbCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdTa2lsbHMnLFxuICAgICAgICBocmVmOiAnI3NraWxscycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdSZWxvY2F0aW9uJyxcbiAgICAgICAgaHJlZjogJyNyZWxvY2F0aW9uJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0xhbmd1YWdlcycsXG4gICAgICAgIGhyZWY6ICcjbGFuZ3VhZ2VzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0V4cGVyaWVuY2UnLFxuICAgICAgICBocmVmOiAnI2V4cGVyaWVuY2UnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnRWR1Y2F0aW9uJyxcbiAgICAgICAgaHJlZjogJyNlZHVjYXRpb24nLFxuICAgIH1cbl1cblxuc3Rvcmllc09mKCdDb21wb25lbnRzfFByb2ZpbGUgTWVudScsIG1vZHVsZSlcblxuICAgIC5hZGQoJ2RlZmF1bHQnLCAoKSA9PiAoXG4gICAgICAgIDxWSFByb2ZpbGVNZW51IGxpbmtzPXtsaW5rc31cbiAgICAgICAgLz5cbiAgICApKVxuIl19