"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var company = {
  title: 'Google',
  rightTitle: '2006 / 2007',
  description: "Education - Startup - Belo Horizonte - Brazil"
};
var ArrayOfSkills = [{
  label: "JavaScript"
}, {
  label: "React"
}, {
  label: "Docker"
}];
var ArrayOfDescriptions = [{
  label: "Ad tempor proident enim veniam duis. Occaecat veniam irure minim cillum"
}, {
  label: "Ad tempor proident enim veniam duis. Occaecat veniam irure minim cillum"
}, {
  label: "Ad tempor proident enim veniam duis. Occaecat veniam irure minim cillum"
}];
var UserPositionExperience = {
  headline: "Full Stack Developer",
  period: "Oct 2019 - Present . 3 mos",
  skills: ArrayOfSkills,
  description: ArrayOfDescriptions
};
var UserPositionExperience2 = {
  headline: "CTO",
  period: "Oct 2019 - Present . 3 mos",
  skills: ArrayOfSkills,
  description: ArrayOfDescriptions
};
var ArrayOfUserExperience = [];
ArrayOfUserExperience.push(UserPositionExperience);
ArrayOfUserExperience.push(UserPositionExperience2);
company.userPositions = ArrayOfUserExperience;
var userExperience = [company, company];
(0, _react2.storiesOf)("Sections|User Company Experience", module).add("Default", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    yearsOfExperience: "- 6yrs 3 mos",
    userExperience: userExperience,
    onEvent: function onEvent(e) {
      return console.log(e);
    }
  }));
});