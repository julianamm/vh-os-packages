"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

var _Mock = _interopRequireDefault(require("./Mock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)("Templates|Profile", module).add("default", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100%"
    }
  }, _react.default.createElement(_.default, {
    general: {
      controls: {
        gender: {
          loading: true,
          error: false,
          success: false,
          message: 'Database error'
        },
        citizenship: {
          loading: false,
          error: true,
          success: false,
          message: 'erro vindo do banco'
        },
        currentLocation: {
          loading: false,
          error: false,
          success: false,
          message: 'Database error'
        },
        phone: {
          loading: true,
          error: false,
          success: false,
          message: 'Database error'
        }
      },
      options: {
        gender: {
          items: _Mock.default.General.gender,
          currentItem: [_Mock.default.General.gender[1]]
        },
        currentLocation: {
          items: _Mock.default.General.currentLocaltion,
          currentItem: [_Mock.default.General.currentLocaltion[0]]
        },
        citizenship: {
          items: _Mock.default.General.citizenship,
          currentItem: [_Mock.default.General.citizenship[2]]
        }
      },
      phone: "+2 778 834 7347"
    },
    onEvent: function onEvent(e) {
      console.log(e);
    },
    skills: {
      controls: {
        position: {
          loading: false,
          error: false,
          success: false,
          message: 'Database error'
        },
        workAs: {
          loading: false,
          error: false,
          success: false,
          message: 'Database error'
        },
        openedPosition: {
          loading: false,
          error: false,
          success: false,
          message: 'Database error'
        }
      },
      workAs: _Mock.default.SkillsItems,
      mainSkills: _Mock.default.SkillsItems,
      positions: _Mock.default.SkillsItems,
      data: _Mock.default.Skills
    },
    social: {
      controls: {
        linkedin: {
          loading: false,
          error: true,
          success: false,
          message: 'Database error'
        },
        github: {
          loading: true,
          error: false,
          success: false,
          message: 'Database error'
        },
        world: {
          loading: false,
          error: false,
          success: false,
          message: 'Database error'
        }
      },
      data: _Mock.default.Social
    },
    userCompanyExperience: _Mock.default.UserExperience
  }));
});