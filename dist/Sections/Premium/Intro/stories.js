"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = {
  title: "VanHack Premium",
  highlight: "Get ready to get hired abroad",
  description: "Acquire career skills that will make you stand out from the herd! Live interview practice, profile review, exclusive webinars and more.",
  label: "JOIN VANHACK PREMIUM",
  image: require("../../../../assets/images/img_hero_premium.png")
};
var features = [{
  icon: require('../../../../assets/icons/icon_interview.svg'),
  title: "Improve your Interviewing Skills",
  description: "We help you learn the cultural and professional nuances with 40+ hours of live classes every month"
}, {
  icon: require('../../../../assets/icons/icon_profile.svg'),
  title: "Craft a world-class professional profile",
  description: "Our experts will help you update your profile. Using the right  format can make all the difference in your quest for an international job"
}, {
  icon: require('../../../../assets/icons/icon_community.svg'),
  title: "Network with a global community",
  description: "Join thousands of motivated premium members from all over the world. Learn from your peers in a judgement-free environment"
}];
(0, _react2.storiesOf)("Sections|Premium/Intro", module).add("Default", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f8fc",
      height: "100vh",
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    title: items.title,
    highlight: items.highlight,
    description: items.description,
    label: items.label,
    image: items.image,
    features: features
  }));
});