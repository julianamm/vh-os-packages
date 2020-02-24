"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Avatar = _interopRequireDefault(require("../Avatar"));

var _Text = _interopRequireDefault(require("../Text"));

var _TitleDescription = _interopRequireDefault(require("../TitleDescription"));

var S = _interopRequireWildcard(require("./styles"));

var _Grid = require("../../Grid");

var _Modal = _interopRequireDefault(require("../Modal"));

var _Comments = _interopRequireDefault(require("../Comments"));

var _TimeLine = _interopRequireDefault(require("../TimeLine"));

var _Assign = _interopRequireDefault(require("../Assign"));

var _Textarea = _interopRequireDefault(require("../Textarea"));

var _IconText = _interopRequireDefault(require("../IconText"));

var _index = _interopRequireDefault(require("../Preloader/index"));

var _index2 = _interopRequireDefault(require("../Img/index"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHModalVisaPipeline = function VHModalVisaPipeline(props) {
  return _react.default.createElement(_Grid.Row, {
    className: "vh-modal-visa-pipeline ".concat(props.className ? props.className : "")
  }, _react.default.createElement(_Modal.default, {
    width: "70",
    minWidth: "660",
    open: true,
    header: _react.default.createElement(_Grid.Row, {
      row: true
    }, _react.default.createElement(_Grid.Row, {
      autoWidth: true,
      paddingRight8: true
    }, _react.default.createElement(_Avatar.default, {
      image: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
      size: "lg",
      showCursor: true
    })), _react.default.createElement(_TitleDescription.default, {
      title: "Manuel Barros Reyes",
      description: "manuca@gmail.com",
      titleVariant: "h4",
      titleColor: "gray-90",
      descriptionColor: "gray-80",
      descriptionVariant: "platform",
      onEvent: props.onEvent
    })),
    onEvent: props.onEvent,
    content: _react.default.createElement(_Grid.Row, null, _react.default.createElement(_Grid.Row, {
      row: true
    }, _react.default.createElement(S.Wrapper, null, _react.default.createElement(_Grid.Row, {
      marginBottom5: true
    }), _react.default.createElement(_Grid.Row, {
      marginBottom5: true
    }, _react.default.createElement(_Textarea.default, {
      description: props.description,
      onEvent: props.onEvent
    }))), _react.default.createElement(_Grid.Row, {
      marginBottom5: true
    }, props.assignedSession.loading ? _react.default.createElement(_index.default, {
      size: "sm"
    }) : _react.default.createElement(_Assign.default, {
      items: props.assign.items,
      onEvent: props.onEvent
    }))), _react.default.createElement(_Grid.Row, {
      row: true
    }, _react.default.createElement(S.Wrapper, null, _react.default.createElement(_Grid.Row, null, props.commentsSession.loading ? _react.default.createElement(_index.default, {
      size: "sm"
    }) : _react.default.createElement(_Comments.default, {
      comments: props.comments,
      onEvent: props.onEvent
    }))), _react.default.createElement(_Grid.Row, {
      margin: true
    }, props.activitiesSession.loading ? _react.default.createElement(_index.default, {
      size: "sm"
    }) : _react.default.createElement(_TimeLine.default, {
      items: props.timeLine.items,
      totalDays: props.timeLine.totalDays,
      onEvent: props.onEvent
    }), _react.default.createElement(S.InfoDate, null, "Projected Start Date: Apr, 19"))))
  }));
};

VHModalVisaPipeline.defaultProps = {
  onEvent: null,
  className: ""
};
VHModalVisaPipeline.propTypes = {
  onEvent: _propTypes.default.func,
  className: _propTypes.default.stringc
};
var _default = VHModalVisaPipeline;
exports.default = _default;