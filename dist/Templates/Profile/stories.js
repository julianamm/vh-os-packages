"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

var _Mock = _interopRequireDefault(require("./Mock"));

var _controls;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var controls = (_controls = {
  gender: {
    loading: false,
    error: true,
    success: false,
    message: 'Database error'
  },
  citizenship: {
    loading: false,
    error: false,
    success: false,
    message: 'Database error'
  },
  location: {
    loading: true,
    error: false,
    success: false,
    message: 'Database error'
  },
  phone: {
    loading: true,
    error: false,
    success: false,
    message: 'Database error'
  },
  position: {
    loading: true,
    error: false,
    success: false,
    message: 'Database error'
  },
  yearsOfExperience: {
    loading: false,
    error: true,
    success: false,
    message: 'Database error'
  },
  workAs: {
    loading: true,
    error: false,
    success: false,
    message: 'Database error'
  },
  openedPosition: {
    loading: true,
    error: false,
    success: false,
    message: 'Database error'
  },
  positionSkill: {
    loading: false,
    error: false,
    success: false,
    message: 'Database error'
  }
}, _defineProperty(_controls, "yearsOfExperience", {
  loading: false,
  error: true,
  success: false,
  message: 'Database error'
}), _defineProperty(_controls, "workAs", {
  loading: false,
  error: false,
  success: false,
  message: 'Database error'
}), _defineProperty(_controls, "openForDifferentRole", {
  loading: false,
  error: false,
  success: false,
  message: 'Database error'
}), _defineProperty(_controls, "topSkill", {
  loading: false,
  error: false,
  success: false,
  message: 'Database error'
}), _defineProperty(_controls, "salaryExpectationCad", {
  loading: false,
  error: false,
  success: false,
  message: 'Database error'
}), _defineProperty(_controls, "salaryExpectationEur", {
  loading: false,
  error: false,
  success: false,
  message: 'Database error'
}), _controls);
(0, _react2.storiesOf)("Templates|Profile", module).add("default", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100%"
    }
  }, _react.default.createElement(_.default, {
    controls: controls
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL1RlbXBsYXRlcy9Qcm9maWxlL3N0b3JpZXMuanMiXSwibmFtZXMiOlsiY29udHJvbHMiLCJnZW5kZXIiLCJsb2FkaW5nIiwiZXJyb3IiLCJzdWNjZXNzIiwibWVzc2FnZSIsImNpdGl6ZW5zaGlwIiwibG9jYXRpb24iLCJwaG9uZSIsInBvc2l0aW9uIiwieWVhcnNPZkV4cGVyaWVuY2UiLCJ3b3JrQXMiLCJvcGVuZWRQb3NpdGlvbiIsInBvc2l0aW9uU2tpbGwiLCJtb2R1bGUiLCJhZGQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUTtBQUNaQyxFQUFBQSxNQUFNLEVBQUU7QUFDTkMsSUFBQUEsT0FBTyxFQUFFLEtBREg7QUFFTkMsSUFBQUEsS0FBSyxFQUFFLElBRkQ7QUFHTkMsSUFBQUEsT0FBTyxFQUFFLEtBSEg7QUFJTkMsSUFBQUEsT0FBTyxFQUFFO0FBSkgsR0FESTtBQU9aQyxFQUFBQSxXQUFXLEVBQUU7QUFDWEosSUFBQUEsT0FBTyxFQUFFLEtBREU7QUFFWEMsSUFBQUEsS0FBSyxFQUFFLEtBRkk7QUFHWEMsSUFBQUEsT0FBTyxFQUFFLEtBSEU7QUFJWEMsSUFBQUEsT0FBTyxFQUFFO0FBSkUsR0FQRDtBQWFaRSxFQUFBQSxRQUFRLEVBQUU7QUFDUkwsSUFBQUEsT0FBTyxFQUFFLElBREQ7QUFFUkMsSUFBQUEsS0FBSyxFQUFFLEtBRkM7QUFHUkMsSUFBQUEsT0FBTyxFQUFFLEtBSEQ7QUFJUkMsSUFBQUEsT0FBTyxFQUFFO0FBSkQsR0FiRTtBQW1CWkcsRUFBQUEsS0FBSyxFQUFFO0FBQ0xOLElBQUFBLE9BQU8sRUFBRSxJQURKO0FBRUxDLElBQUFBLEtBQUssRUFBRSxLQUZGO0FBR0xDLElBQUFBLE9BQU8sRUFBRSxLQUhKO0FBSUxDLElBQUFBLE9BQU8sRUFBRTtBQUpKLEdBbkJLO0FBeUJaSSxFQUFBQSxRQUFRLEVBQUU7QUFDUlAsSUFBQUEsT0FBTyxFQUFFLElBREQ7QUFFUkMsSUFBQUEsS0FBSyxFQUFFLEtBRkM7QUFHUkMsSUFBQUEsT0FBTyxFQUFFLEtBSEQ7QUFJUkMsSUFBQUEsT0FBTyxFQUFFO0FBSkQsR0F6QkU7QUErQlpLLEVBQUFBLGlCQUFpQixFQUFFO0FBQ2pCUixJQUFBQSxPQUFPLEVBQUUsS0FEUTtBQUVqQkMsSUFBQUEsS0FBSyxFQUFFLElBRlU7QUFHakJDLElBQUFBLE9BQU8sRUFBRSxLQUhRO0FBSWpCQyxJQUFBQSxPQUFPLEVBQUU7QUFKUSxHQS9CUDtBQXFDWk0sRUFBQUEsTUFBTSxFQUFFO0FBQ05ULElBQUFBLE9BQU8sRUFBRSxJQURIO0FBRU5DLElBQUFBLEtBQUssRUFBRSxLQUZEO0FBR05DLElBQUFBLE9BQU8sRUFBRSxLQUhIO0FBSU5DLElBQUFBLE9BQU8sRUFBRTtBQUpILEdBckNJO0FBMkNaTyxFQUFBQSxjQUFjLEVBQUU7QUFDZFYsSUFBQUEsT0FBTyxFQUFFLElBREs7QUFFZEMsSUFBQUEsS0FBSyxFQUFFLEtBRk87QUFHZEMsSUFBQUEsT0FBTyxFQUFFLEtBSEs7QUFJZEMsSUFBQUEsT0FBTyxFQUFFO0FBSkssR0EzQ0o7QUFpRFpRLEVBQUFBLGFBQWEsRUFBRTtBQUNiWCxJQUFBQSxPQUFPLEVBQUUsS0FESTtBQUViQyxJQUFBQSxLQUFLLEVBQUUsS0FGTTtBQUdiQyxJQUFBQSxPQUFPLEVBQUUsS0FISTtBQUliQyxJQUFBQSxPQUFPLEVBQUU7QUFKSTtBQWpESCxtREF1RE87QUFDakJILEVBQUFBLE9BQU8sRUFBRSxLQURRO0FBRWpCQyxFQUFBQSxLQUFLLEVBQUUsSUFGVTtBQUdqQkMsRUFBQUEsT0FBTyxFQUFFLEtBSFE7QUFJakJDLEVBQUFBLE9BQU8sRUFBRTtBQUpRLENBdkRQLHdDQTZESjtBQUNOSCxFQUFBQSxPQUFPLEVBQUUsS0FESDtBQUVOQyxFQUFBQSxLQUFLLEVBQUUsS0FGRDtBQUdOQyxFQUFBQSxPQUFPLEVBQUUsS0FISDtBQUlOQyxFQUFBQSxPQUFPLEVBQUU7QUFKSCxDQTdESSxzREFtRVU7QUFDcEJILEVBQUFBLE9BQU8sRUFBRSxLQURXO0FBRXBCQyxFQUFBQSxLQUFLLEVBQUUsS0FGYTtBQUdwQkMsRUFBQUEsT0FBTyxFQUFFLEtBSFc7QUFJcEJDLEVBQUFBLE9BQU8sRUFBRTtBQUpXLENBbkVWLDBDQXlFRjtBQUNSSCxFQUFBQSxPQUFPLEVBQUUsS0FERDtBQUVSQyxFQUFBQSxLQUFLLEVBQUUsS0FGQztBQUdSQyxFQUFBQSxPQUFPLEVBQUUsS0FIRDtBQUlSQyxFQUFBQSxPQUFPLEVBQUU7QUFKRCxDQXpFRSxzREErRVU7QUFDcEJILEVBQUFBLE9BQU8sRUFBRSxLQURXO0FBRXBCQyxFQUFBQSxLQUFLLEVBQUUsS0FGYTtBQUdwQkMsRUFBQUEsT0FBTyxFQUFFLEtBSFc7QUFJcEJDLEVBQUFBLE9BQU8sRUFBRTtBQUpXLENBL0VWLHNEQXFGVTtBQUNwQkgsRUFBQUEsT0FBTyxFQUFFLEtBRFc7QUFFcEJDLEVBQUFBLEtBQUssRUFBRSxLQUZhO0FBR3BCQyxFQUFBQSxPQUFPLEVBQUUsS0FIVztBQUlwQkMsRUFBQUEsT0FBTyxFQUFFO0FBSlcsQ0FyRlYsYUFBZDtBQTZGQSx1QkFBVSxtQkFBVixFQUErQlMsTUFBL0IsRUFFR0MsR0FGSCxDQUVPLFNBRlAsRUFFa0I7QUFBQSxTQUNkO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsZUFBZSxFQUFFLFNBQW5CO0FBQThCQyxNQUFBQSxNQUFNLEVBQUU7QUFBdEM7QUFBWixLQUNFLDZCQUFDLFNBQUQ7QUFDRSxJQUFBLFFBQVEsRUFBRWpCO0FBRFosSUFERixDQURjO0FBQUEsQ0FGbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdG9yaWVzT2YgfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiO1xuaW1wb3J0IFZIUHJvZmlsZVRlbXBsYXRlIGZyb20gXCIuXCI7XG5pbXBvcnQgTW9jayBmcm9tIFwiLi9Nb2NrXCI7XG5cbmNvbnN0IGNvbnRyb2xzID0ge1xuICBnZW5kZXI6IHtcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBlcnJvcjogdHJ1ZSxcbiAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICBtZXNzYWdlOiAnRGF0YWJhc2UgZXJyb3InXG4gIH0sXG4gIGNpdGl6ZW5zaGlwOiB7XG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgZXJyb3I6IGZhbHNlLFxuICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgIG1lc3NhZ2U6ICdEYXRhYmFzZSBlcnJvcidcbiAgfSxcbiAgbG9jYXRpb246IHtcbiAgICBsb2FkaW5nOiB0cnVlLFxuICAgIGVycm9yOiBmYWxzZSxcbiAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICBtZXNzYWdlOiAnRGF0YWJhc2UgZXJyb3InXG4gIH0sXG4gIHBob25lOiB7XG4gICAgbG9hZGluZzogdHJ1ZSxcbiAgICBlcnJvcjogZmFsc2UsXG4gICAgc3VjY2VzczogZmFsc2UsXG4gICAgbWVzc2FnZTogJ0RhdGFiYXNlIGVycm9yJ1xuICB9LFxuICBwb3NpdGlvbjoge1xuICAgIGxvYWRpbmc6IHRydWUsXG4gICAgZXJyb3I6IGZhbHNlLFxuICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgIG1lc3NhZ2U6ICdEYXRhYmFzZSBlcnJvcidcbiAgfSxcbiAgeWVhcnNPZkV4cGVyaWVuY2U6IHtcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBlcnJvcjogdHJ1ZSxcbiAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICBtZXNzYWdlOiAnRGF0YWJhc2UgZXJyb3InXG4gIH0sXG4gIHdvcmtBczoge1xuICAgIGxvYWRpbmc6IHRydWUsXG4gICAgZXJyb3I6IGZhbHNlLFxuICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgIG1lc3NhZ2U6ICdEYXRhYmFzZSBlcnJvcidcbiAgfSxcbiAgb3BlbmVkUG9zaXRpb246IHtcbiAgICBsb2FkaW5nOiB0cnVlLFxuICAgIGVycm9yOiBmYWxzZSxcbiAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICBtZXNzYWdlOiAnRGF0YWJhc2UgZXJyb3InXG4gIH0sXG4gIHBvc2l0aW9uU2tpbGw6IHtcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBlcnJvcjogZmFsc2UsXG4gICAgc3VjY2VzczogZmFsc2UsXG4gICAgbWVzc2FnZTogJ0RhdGFiYXNlIGVycm9yJ1xuICB9LFxuICB5ZWFyc09mRXhwZXJpZW5jZToge1xuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIGVycm9yOiB0cnVlLFxuICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgIG1lc3NhZ2U6ICdEYXRhYmFzZSBlcnJvcidcbiAgfSxcbiAgd29ya0FzOiB7XG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgZXJyb3I6IGZhbHNlLFxuICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgIG1lc3NhZ2U6ICdEYXRhYmFzZSBlcnJvcidcbiAgfSxcbiAgb3BlbkZvckRpZmZlcmVudFJvbGU6IHtcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBlcnJvcjogZmFsc2UsXG4gICAgc3VjY2VzczogZmFsc2UsXG4gICAgbWVzc2FnZTogJ0RhdGFiYXNlIGVycm9yJ1xuICB9LFxuICB0b3BTa2lsbDoge1xuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIGVycm9yOiBmYWxzZSxcbiAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICBtZXNzYWdlOiAnRGF0YWJhc2UgZXJyb3InXG4gIH0sXG4gIHNhbGFyeUV4cGVjdGF0aW9uQ2FkOiB7XG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgZXJyb3I6IGZhbHNlLFxuICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgIG1lc3NhZ2U6ICdEYXRhYmFzZSBlcnJvcidcbiAgfSxcbiAgc2FsYXJ5RXhwZWN0YXRpb25FdXI6IHtcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBlcnJvcjogZmFsc2UsXG4gICAgc3VjY2VzczogZmFsc2UsXG4gICAgbWVzc2FnZTogJ0RhdGFiYXNlIGVycm9yJ1xuICB9XG59XG5cbnN0b3JpZXNPZihcIlRlbXBsYXRlc3xQcm9maWxlXCIsIG1vZHVsZSlcblxuICAuYWRkKFwiZGVmYXVsdFwiLCAoKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2YyZjJmMlwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19PlxuICAgICAgPFZIUHJvZmlsZVRlbXBsYXRlXG4gICAgICAgIGNvbnRyb2xzPXtjb250cm9sc31cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICkpIl19