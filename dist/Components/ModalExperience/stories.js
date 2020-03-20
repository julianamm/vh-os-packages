"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = [{
  value: 0,
  label: 'No degree'
}, {
  value: 1,
  label: 'College (two-year degree)'
}, {
  value: 2,
  label: 'Bachelor’s'
}, {
  value: 3,
  label: 'Master’s'
}, {
  value: 4,
  label: 'PhD'
}];
var currentItem = [items[4]];
var controls = {
  location: {
    loading: false,
    success: true,
    error: false
  },
  industry: {
    loading: false,
    success: true,
    error: false
  },
  skillsUsed: {
    loading: false,
    success: true,
    error: false
  }
};
var data = {
  text: 'Company Size',
  items: [{
    name: 'Startup'
  }, {
    name: 'Midsize'
  }, {
    name: 'Corporate'
  }]
};
var skillsUsed = [{
  label: 'C#',
  value: 'c'
}, {
  label: 'Java',
  value: 'b'
}, {
  label: 'Python',
  value: 'o'
}];
var workAs = {
  current: skillsUsed
};
(0, _react2.storiesOf)('Components|Modal Experience', module).add('VHModalExperience', function () {
  return _react.default.createElement("div", {
    style: {
      width: '100vw',
      height: '100vh'
    }
  }, _react.default.createElement(_.default, {
    data: data,
    workAs: workAs,
    currentItem: currentItem,
    items: items,
    controls: controls,
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvTW9kYWxFeHBlcmllbmNlL3N0b3JpZXMuanMiXSwibmFtZXMiOlsiaXRlbXMiLCJ2YWx1ZSIsImxhYmVsIiwiY3VycmVudEl0ZW0iLCJjb250cm9scyIsImxvY2F0aW9uIiwibG9hZGluZyIsInN1Y2Nlc3MiLCJlcnJvciIsImluZHVzdHJ5Iiwic2tpbGxzVXNlZCIsImRhdGEiLCJ0ZXh0IiwibmFtZSIsIndvcmtBcyIsImN1cnJlbnQiLCJtb2R1bGUiLCJhZGQiLCJ3aWR0aCIsImhlaWdodCIsImUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLENBQ1o7QUFBRUMsRUFBQUEsS0FBSyxFQUFFLENBQVQ7QUFBWUMsRUFBQUEsS0FBSyxFQUFFO0FBQW5CLENBRFksRUFFWjtBQUFFRCxFQUFBQSxLQUFLLEVBQUUsQ0FBVDtBQUFZQyxFQUFBQSxLQUFLLEVBQUU7QUFBbkIsQ0FGWSxFQUdaO0FBQUVELEVBQUFBLEtBQUssRUFBRSxDQUFUO0FBQVlDLEVBQUFBLEtBQUssRUFBRTtBQUFuQixDQUhZLEVBSVo7QUFBRUQsRUFBQUEsS0FBSyxFQUFFLENBQVQ7QUFBWUMsRUFBQUEsS0FBSyxFQUFFO0FBQW5CLENBSlksRUFLWjtBQUFFRCxFQUFBQSxLQUFLLEVBQUUsQ0FBVDtBQUFZQyxFQUFBQSxLQUFLLEVBQUU7QUFBbkIsQ0FMWSxDQUFkO0FBUUEsSUFBTUMsV0FBVyxHQUFHLENBQUNILEtBQUssQ0FBQyxDQUFELENBQU4sQ0FBcEI7QUFFQSxJQUFNSSxRQUFRLEdBQUc7QUFBQ0MsRUFBQUEsUUFBUSxFQUFFO0FBQUNDLElBQUFBLE9BQU8sRUFBRSxLQUFWO0FBQWlCQyxJQUFBQSxPQUFPLEVBQUUsSUFBMUI7QUFBZ0NDLElBQUFBLEtBQUssRUFBRTtBQUF2QyxHQUFYO0FBQ0NDLEVBQUFBLFFBQVEsRUFBRTtBQUFDSCxJQUFBQSxPQUFPLEVBQUUsS0FBVjtBQUFpQkMsSUFBQUEsT0FBTyxFQUFFLElBQTFCO0FBQWdDQyxJQUFBQSxLQUFLLEVBQUU7QUFBdkMsR0FEWDtBQUVDRSxFQUFBQSxVQUFVLEVBQUU7QUFBQ0osSUFBQUEsT0FBTyxFQUFFLEtBQVY7QUFBaUJDLElBQUFBLE9BQU8sRUFBRSxJQUExQjtBQUFnQ0MsSUFBQUEsS0FBSyxFQUFFO0FBQXZDO0FBRmIsQ0FBakI7QUFJQSxJQUFNRyxJQUFJLEdBQUc7QUFDWEMsRUFBQUEsSUFBSSxFQUFFLGNBREs7QUFFWFosRUFBQUEsS0FBSyxFQUFFLENBQ0w7QUFDRWEsSUFBQUEsSUFBSSxFQUFFO0FBRFIsR0FESyxFQUlMO0FBQ0VBLElBQUFBLElBQUksRUFBRTtBQURSLEdBSkssRUFPTDtBQUNFQSxJQUFBQSxJQUFJLEVBQUU7QUFEUixHQVBLO0FBRkksQ0FBYjtBQWVBLElBQU1ILFVBQVUsR0FBRyxDQUNqQjtBQUNFUixFQUFBQSxLQUFLLEVBQUUsSUFEVDtBQUVFRCxFQUFBQSxLQUFLLEVBQUU7QUFGVCxDQURpQixFQUtqQjtBQUNFQyxFQUFBQSxLQUFLLEVBQUUsTUFEVDtBQUVFRCxFQUFBQSxLQUFLLEVBQUU7QUFGVCxDQUxpQixFQVNqQjtBQUNFQyxFQUFBQSxLQUFLLEVBQUUsUUFEVDtBQUVFRCxFQUFBQSxLQUFLLEVBQUU7QUFGVCxDQVRpQixDQUFuQjtBQWVBLElBQU1hLE1BQU0sR0FBRztBQUNiQyxFQUFBQSxPQUFPLEVBQUVMO0FBREksQ0FBZjtBQUlBLHVCQUFVLDZCQUFWLEVBQXlDTSxNQUF6QyxFQUNHQyxHQURILENBQ08sbUJBRFAsRUFDNEI7QUFBQSxTQUN4QjtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxPQUFUO0FBQWtCQyxNQUFBQSxNQUFNLEVBQUU7QUFBMUI7QUFBWixLQUNFLDZCQUFDLFNBQUQ7QUFBbUIsSUFBQSxJQUFJLEVBQUVSLElBQXpCO0FBQStCLElBQUEsTUFBTSxFQUFFRyxNQUF2QztBQUNBLElBQUEsV0FBVyxFQUFFWCxXQURiO0FBQzBCLElBQUEsS0FBSyxFQUFFSCxLQURqQztBQUN3QyxJQUFBLFFBQVEsRUFBRUksUUFEbEQ7QUFDNEQsSUFBQSxPQUFPLEVBQUUsaUJBQUFnQixDQUFDLEVBQUk7QUFDdEVDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaO0FBQ0Q7QUFISCxJQURGLENBRHdCO0FBQUEsQ0FENUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdG9yaWVzT2YgfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiO1xuaW1wb3J0IFZITW9kYWxFeHBlcmllbmNlIGZyb20gXCIuXCI7XG5cbmNvbnN0IGl0ZW1zID0gW1xuICB7IHZhbHVlOiAwLCBsYWJlbDogJ05vIGRlZ3JlZScgfSxcbiAgeyB2YWx1ZTogMSwgbGFiZWw6ICdDb2xsZWdlICh0d28teWVhciBkZWdyZWUpJyB9LFxuICB7IHZhbHVlOiAyLCBsYWJlbDogJ0JhY2hlbG9y4oCZcycgfSxcbiAgeyB2YWx1ZTogMywgbGFiZWw6ICdNYXN0ZXLigJlzJyB9LFxuICB7IHZhbHVlOiA0LCBsYWJlbDogJ1BoRCcgIH1cbl1cblxuY29uc3QgY3VycmVudEl0ZW0gPSBbaXRlbXNbNF1dXG5cbmNvbnN0IGNvbnRyb2xzID0ge2xvY2F0aW9uOiB7bG9hZGluZzogZmFsc2UsIHN1Y2Nlc3M6IHRydWUsIGVycm9yOiBmYWxzZX0sIFxuICAgICAgICAgICAgICAgICAgaW5kdXN0cnk6IHtsb2FkaW5nOiBmYWxzZSwgc3VjY2VzczogdHJ1ZSwgZXJyb3I6IGZhbHNlfSxcbiAgICAgICAgICAgICAgICAgIHNraWxsc1VzZWQ6IHtsb2FkaW5nOiBmYWxzZSwgc3VjY2VzczogdHJ1ZSwgZXJyb3I6IGZhbHNlfX1cblxuY29uc3QgZGF0YSA9IHtcbiAgdGV4dDogJ0NvbXBhbnkgU2l6ZScsXG4gIGl0ZW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ1N0YXJ0dXAnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnTWlkc2l6ZSdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdDb3Jwb3JhdGUnXG4gICAgfVxuICBdXG59XG5cbmNvbnN0IHNraWxsc1VzZWQgPSBbXG4gIHtcbiAgICBsYWJlbDogJ0MjJyxcbiAgICB2YWx1ZTogJ2MnXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ0phdmEnLFxuICAgIHZhbHVlOiAnYidcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnUHl0aG9uJyxcbiAgICB2YWx1ZTogJ28nXG4gIH0sXG5dXG5cbmNvbnN0IHdvcmtBcyA9IHtcbiAgY3VycmVudDogc2tpbGxzVXNlZFxufVxuXG5zdG9yaWVzT2YoJ0NvbXBvbmVudHN8TW9kYWwgRXhwZXJpZW5jZScsIG1vZHVsZSlcbiAgLmFkZCgnVkhNb2RhbEV4cGVyaWVuY2UnLCAoKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMHZ3JywgaGVpZ2h0OiAnMTAwdmgnIH19PlxuICAgICAgPFZITW9kYWxFeHBlcmllbmNlIGRhdGE9e2RhdGF9IHdvcmtBcz17d29ya0FzfVxuICAgICAgY3VycmVudEl0ZW09e2N1cnJlbnRJdGVtfSBpdGVtcz17aXRlbXN9IGNvbnRyb2xzPXtjb250cm9sc30gb25FdmVudD17ZSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgfX0vPlxuICAgIDwvZGl2PlxuICApKSJdfQ==