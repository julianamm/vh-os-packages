"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

var _index = _interopRequireDefault(require("../../../assets/svg/background/img_bubble.svg/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = {
  sectionTitle: "Our Success Cases",
  title: "VANHACK PREMIUM CHANGE LIVES",
  highlight: "We've helped over 800 VanHackers get hired abroad in amazing companies in Canada and Europe.",
  // imgBackgroundCards: require("../../../../assets/images/img_bubble.svg"),
  // imgBackgroundCards: require("../../../assets/svg/background/img_bubble.svg/index.js"),
  cardLeft: {
    title: "250+",
    description: "VanHack Premium Members have been hired internationally"
  },
  cardRight: {
    title: "80%",
    description: "of Premium Members recommend Premium to their friends"
  },
  imgVideo: require("../../../assets/general/background/img_video_premium_success_case.png"),
  icon: "world",
  videoDescription: "How Marcelo got hired in Saskatoon, Canada as an Engineering Manager from Brazil",
  label: "See our youtube channel",
  to: "#",
  linkIcon: require("../../../assets/svg/icons/icon_arrow_right.svg/index.js")
};
(0, _react2.storiesOf)("Sections|Premium/Success Cases", module).add("Default", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#ffffff",
      height: "100vh",
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    sectionTitle: items.sectionTitle,
    title: items.title,
    highlight: items.highlight,
    imgBackgroundCards: _index.default,
    cardLeftTitle: items.cardLeft.title,
    cardLeftDescription: items.cardLeft.description,
    cardRightTitle: items.cardRight.title,
    cardRightDescription: items.cardRight.description,
    imgVideo: items.imgVideo,
    icon: items.icon,
    videoDescription: items.videoDescription,
    label: items.label,
    to: items.to,
    linkIcon: items.linkIcon
  }));
});