"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _index = require("../../../Grid/index");

var _index2 = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var features = [{
  icon: require('../../../../assets/icons/icon_interview.svg'),
  title: "Improve your Interviewing Skills",
  description: "We help you learn the cultural and professional nuances with 40+ hours of live classes every month"
}, {
  icon: require('../../../../assets/icons/icon_interview.svg'),
  title: "Craft a world-class professional profile",
  description: "Our experts will help you update your profile. Using the right  format can make all the difference in your quest for an international job"
}, {
  icon: require('../../../../assets/icons/icon_interview.svg'),
  title: "Network with a global community",
  description: "Join thousands of motivated premium members from all over the world. Learn from your peers in a judgement-free environment"
}];
(0, _react2.storiesOf)("Components|Cards/Features", module).add("Default", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_index.Row, null, /*#__PURE__*/_react.default.createElement(_index2.default, {
    features: features
  })));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQ2FyZHMvRmVhdHVyZXMvc3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJmZWF0dXJlcyIsImljb24iLCJyZXF1aXJlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm1vZHVsZSIsImFkZCIsInBhZGRpbmciXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsQ0FDYjtBQUNJQyxFQUFBQSxJQUFJLEVBQUVDLE9BQU8sQ0FBQyw2Q0FBRCxDQURqQjtBQUVJQyxFQUFBQSxLQUFLLEVBQUUsa0NBRlg7QUFHSUMsRUFBQUEsV0FBVyxFQUFFO0FBSGpCLENBRGEsRUFNYjtBQUNJSCxFQUFBQSxJQUFJLEVBQUVDLE9BQU8sQ0FBQyw2Q0FBRCxDQURqQjtBQUVJQyxFQUFBQSxLQUFLLEVBQUUsMENBRlg7QUFHSUMsRUFBQUEsV0FBVyxFQUFFO0FBSGpCLENBTmEsRUFXYjtBQUNJSCxFQUFBQSxJQUFJLEVBQUVDLE9BQU8sQ0FBQyw2Q0FBRCxDQURqQjtBQUVJQyxFQUFBQSxLQUFLLEVBQUUsaUNBRlg7QUFHSUMsRUFBQUEsV0FBVyxFQUFFO0FBSGpCLENBWGEsQ0FBakI7QUFrQkEsdUJBQVUsMkJBQVYsRUFBdUNDLE1BQXZDLEVBQ0tDLEdBREwsQ0FDUyxTQURULEVBQ29CO0FBQUEsc0JBQ1o7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBWDtBQUFaLGtCQUNJLDZCQUFDLFVBQUQscUJBQ0ksNkJBQUMsZUFBRDtBQUNJLElBQUEsUUFBUSxFQUFFUDtBQURkLElBREosQ0FESixDQURZO0FBQUEsQ0FEcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdG9yaWVzT2YgfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiO1xuaW1wb3J0IHsgUm93IH0gZnJvbSBcIi4uLy4uLy4uL0dyaWQvaW5kZXhcIjtcbmltcG9ydCBWSENhcmRGZWF0dXJlcyBmcm9tIFwiLi9pbmRleFwiO1xuXG5jb25zdCBmZWF0dXJlcyA9IFsgIFxuICAgIHsgICBcbiAgICAgICAgaWNvbjogcmVxdWlyZSgnLi4vLi4vLi4vLi4vYXNzZXRzL2ljb25zL2ljb25faW50ZXJ2aWV3LnN2ZycpLFxuICAgICAgICB0aXRsZTogXCJJbXByb3ZlIHlvdXIgSW50ZXJ2aWV3aW5nIFNraWxsc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJXZSBoZWxwIHlvdSBsZWFybiB0aGUgY3VsdHVyYWwgYW5kIHByb2Zlc3Npb25hbCBudWFuY2VzIHdpdGggNDArIGhvdXJzIG9mIGxpdmUgY2xhc3NlcyBldmVyeSBtb250aFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGljb246IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9pY29uX2ludGVydmlldy5zdmcnKSxcbiAgICAgICAgdGl0bGU6IFwiQ3JhZnQgYSB3b3JsZC1jbGFzcyBwcm9mZXNzaW9uYWwgcHJvZmlsZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJPdXIgZXhwZXJ0cyB3aWxsIGhlbHAgeW91IHVwZGF0ZSB5b3VyIHByb2ZpbGUuIFVzaW5nIHRoZSByaWdodCAgZm9ybWF0IGNhbiBtYWtlIGFsbCB0aGUgZGlmZmVyZW5jZSBpbiB5b3VyIHF1ZXN0IGZvciBhbiBpbnRlcm5hdGlvbmFsIGpvYlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGljb246IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9pY29uX2ludGVydmlldy5zdmcnKSxcbiAgICAgICAgdGl0bGU6IFwiTmV0d29yayB3aXRoIGEgZ2xvYmFsIGNvbW11bml0eVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJKb2luIHRob3VzYW5kcyBvZiBtb3RpdmF0ZWQgcHJlbWl1bSBtZW1iZXJzIGZyb20gYWxsIG92ZXIgdGhlIHdvcmxkLiBMZWFybiBmcm9tIHlvdXIgcGVlcnMgaW4gYSBqdWRnZW1lbnQtZnJlZSBlbnZpcm9ubWVudFwiXG4gICAgfVxuXTtcblxuc3Rvcmllc09mKFwiQ29tcG9uZW50c3xDYXJkcy9GZWF0dXJlc1wiLCBtb2R1bGUpXG4gICAgLmFkZChcIkRlZmF1bHRcIiwgKCkgPT4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMjRweFwiIH19PlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8VkhDYXJkRmVhdHVyZXNcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZXM9e2ZlYXR1cmVzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9kaXY+XG4gICAgKSk7ICJdfQ==