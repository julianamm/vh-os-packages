"use strict";

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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* babel-plugin-inline-import '../../../assets/icons/icon_business.svg' */
var CompanyIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiMzMzMiIGQ9Ik0xMiA3VjNIMnYxOGgyMFY3SDEyek02IDE5SDR2LTJoMnYyem0wLTRINHYtMmgydjJ6bTAtNEg0VjloMnYyem0wLTRINFY1aDJ2MnptNCAxMkg4di0yaDJ2MnptMC00SDh2LTJoMnYyem0wLTRIOFY5aDJ2MnptMC00SDhWNWgydjJ6bTEwIDEyaC04di0yaDJ2LTJoLTJ2LTJoMnYtMmgtMlY5aDh2MTB6bS0yLThoLTJ2Mmgydi0yem0wIDRoLTJ2Mmgydi0yeiIvPgo8L3N2Zz4K";

/* babel-plugin-inline-import '../../../assets/icons/icon_skills.svg' */
var PositionIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0xNy44MjggMS41NjZIMi4xNzJBMi4xNzUgMi4xNzUgMCAwIDAgMCAzLjczOHYxMi41MjRjMCAxLjE5OC45NzQgMi4xNzIgMi4xNzIgMi4xNzJoMTUuNjU2QTIuMTc1IDIuMTc1IDAgMCAwIDIwIDE2LjI2MlYzLjczOGEyLjE3NSAyLjE3NSAwIDAgMC0yLjE3Mi0yLjE3MnptMS41ODUgMTQuNjk2YzAgLjg3NC0uNzExIDEuNTg1LTEuNTg1IDEuNTg1SDIuMTcyYTEuNTg3IDEuNTg3IDAgMCAxLTEuNTg1LTEuNTg1VjMuNzM4YzAtLjg3NC43MTEtMS41ODUgMS41ODUtMS41ODVoMTUuNjU2Yy44NzQgMCAxLjU4NS43MSAxLjU4NSAxLjU4NXYxMi41MjR6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNMTguNDU0IDQuNjk3SDEuNTQ2YS4yOTQuMjk0IDAgMSAwIDAgLjU4N2gxNi45MDhhLjI5NC4yOTQgMCAxIDAgMC0uNTg3ek0yLjE3MiAzLjcxOGEuMjk0LjI5NCAwIDEgMCAwLS41ODguMjk0LjI5NCAwIDAgMCAwIC41ODh6TTQuNjc3IDMuNzE4YS4yOTUuMjk1IDAgMCAwIC4yOTQtLjI5My4yOTUuMjk1IDAgMCAwLS41MDEtLjIwOC4yOTUuMjk1IDAgMCAwIDAgLjQxNWMuMDU0LjA1NS4xMy4wODYuMjA3LjA4NnpNMy40MjUgMy43MThhLjI5NC4yOTQgMCAxIDAtLjAwMS0uNTg4LjI5NC4yOTQgMCAwIDAgMCAuNTg4ek03LjM5IDguMjI3YS4yOTQuMjk0IDAgMCAwLS40MTYgMGwtMy4xMyAzLjEzMWEuMjk0LjI5NCAwIDAgMCAwIC40MTVsMy4xMyAzLjEzMWEuMjkzLjI5MyAwIDAgMCAuNDE2IDAgLjI5NC4yOTQgMCAwIDAgMC0uNDE1bC0yLjkyNC0yLjkyM0w3LjM5IDguNjQyYS4yOTQuMjk0IDAgMCAwIDAtLjQxNXpNMTMuMDI1IDguMjI3YS4yOTQuMjk0IDAgMCAwLS40MTUuNDE1bDIuOTI0IDIuOTI0LTIuOTI0IDIuOTIzYS4yOTQuMjk0IDAgMCAwIC40MTUuNDE1bDMuMTMyLTMuMTNhLjI5NC4yOTQgMCAwIDAgMC0uNDE2bC0zLjEzMi0zLjEzMXpNMTEuMzUzIDcuODQ1YS4yOTQuMjk0IDAgMCAwLS4zNzYuMTc2bC0yLjUwNSA2Ljg4OGEuMjk0LjI5NCAwIDEgMCAuNTUxLjIwMWwyLjUwNS02Ljg4OGEuMjk0LjI5NCAwIDAgMC0uMTc1LS4zNzd6Ii8+Cjwvc3ZnPgo=";

/* babel-plugin-inline-import '../../../assets/icons/icon_passport.svg' */
var CityIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9IiMzMzMiIGNsaXAtcGF0aD0idXJsKCNhKSI+CiAgICAgICAgPHBhdGggZD0iTTcuOTA4IDYuODYyYTQuOTEgNC45MSAwIDEgMCAwIDkuODIyIDQuOTEgNC45MSAwIDAgMCAwLTkuODIyem0zLjYzNCAzLjA3aC0xLjc3YTcuOTUgNy45NSAwIDAgMC0uNzAzLTIuMDYzIDQuMDg0IDQuMDg0IDAgMCAxIDIuNDczIDIuMDYzem0tMi40MDcgMS44NDFjMCAuMzY2LS4wMjcuNzAxLS4wNjUgMS4wMjNINi43NDVhOC42NjcgOC42NjcgMCAwIDEtLjA2NS0xLjAyM2MwLS4zNjUuMDI3LS43LjA2NC0xLjAyM2gyLjMyN2MuMDM3LjMyMi4wNjQuNjU4LjA2NCAxLjAyM3pNNy43OSA3LjY5M2MuMDQtLjAwMS4wNzgtLjAxMi4xMTktLjAxMi4wNCAwIC4wNzkuMDEuMTIuMDEyLjMwNy40NzEuNjggMS4yMTcuOTA3IDIuMjM5SDYuODhjLjIyNy0xLjAyNi42MDItMS43Ny45MDgtMi4yNHptLTEuMDQyLjE3NmE3Ljk3NCA3Ljk3NCAwIDAgMC0uNzAzIDIuMDYzaC0xLjc3YTQuMDg1IDQuMDg1IDAgMCAxIDIuNDczLTIuMDYzem0tMi45MzIgMy45MDRjMC0uMzU1LjA2LS42OTQuMTQ2LTEuMDIzaDEuOTU4YTkuNjU4IDkuNjU4IDAgMCAwLS4wNTcgMS4wMjNjMCAuMzYyLjAyNC42OTkuMDU5IDEuMDIzSDMuOTZhNC4wNDMgNC4wNDMgMCAwIDEtLjE0Ni0xLjAyM3ptLjQ1OCAxLjg0MmgxLjc3M2MuMTcuODUuNDM2IDEuNTQxLjcgMi4wNjJhNC4wODUgNC4wODUgMCAwIDEtMi40NzMtMi4wNjJ6bTMuNzU0IDIuMjM5Yy0uMDQgMC0uMDc5LjAxMi0uMTIuMDEyLS4wNCAwLS4wNzgtLjAxMS0uMTE4LS4wMTItLjI5NC0uNDUyLS42NzYtMS4xOTktLjkwNy0yLjI0aDIuMDUyYy0uMjMxIDEuMDQtLjYxMyAxLjc4Ny0uOTA3IDIuMjR6bTEuMDQzLS4xNzdhOC4wOTMgOC4wOTMgMCAwIDAgLjctMi4wNjJoMS43NzJhNC4wODYgNC4wODYgMCAwIDEtMi40NzIgMi4wNjJ6bS44MjUtMi44OGE5LjU0IDkuNTQgMCAwIDAgLjA1OS0xLjAyNCA5LjY2IDkuNjYgMCAwIDAtLjA1OC0xLjAyM2gxLjk1OWMuMDg1LjMzLjE0NS42NjguMTQ1IDEuMDIzIDAgLjM1Ni0uMDYuNjk0LS4xNDUgMS4wMjNoLTEuOTZ6TTEyIDE5LjE0SDMuODE1di44MThIMTJ2LS44MTl6TTE3LjY5OCAxMy4yNDRsLS40MjQgMS41OC43OS4yMTMuNDI0LTEuNTgxLS43OS0uMjEyek0xNi44NSAxNi40MDRsLTEuNDgyIDUuNTM0Ljc5LjIxMiAxLjQ4My01LjUzNC0uNzktLjIxMnoiLz4KICAgICAgICA8cGF0aCBkPSJNMjIuMjQ1IDIuNTk4TDEyLjc1OC4wNTZhMS42MzggMS42MzggMCAwIDAtMi4wMDUgMS4xNThsLS44NTUgMy4xOTNIMS4zNmEuODE4LjgxOCAwIDAgMC0uODE5LjgxOXYxNi4zNjljMCAuNDUyLjM2Ny44MTguODE5LjgxOGg5LjQ1M2w1LjcxMiAxLjUzYTEuNjM4IDEuNjM4IDAgMCAwIDIuMDA1LTEuMTU3bDQuODcyLTE4LjE4M2ExLjYzNyAxLjYzNyAwIDAgMC0xLjE1Ny0yLjAwNXpNMS4zNiAyMS41OTVWNS4yMjVoMTIuMjc3YS44Mi44MiAwIDAgMSAuODE4LjgxOXYxNC43MzJhLjgyLjgyIDAgMCAxLS44MTguODE5SDEuMzZ6TTIyLjYxMiA0LjM5TDE3Ljc0IDIyLjU3NWEuODIuODIgMCAwIDEtMS4wMDMuNTc4bC0yLjg1NC0uNzY0YTEuNjMzIDEuNjMzIDAgMCAwIDEuMzktMS42MTN2LTYuNDg4bC40Mi4xMTIuNDI0LTEuNTgxLS43OS0uMjEyLS4wNTMuMTk2VjYuMjk5bC44MzUuMjIzLjk2OCAzLjE2NS42NzguMTgyLS4wNjUtMi45MjNjLjQ0NS4xMi45LjI0MSAxLjE5OC4zMmwuNTI2LjkyOS40NTEuMTItLjA3Ny0xLjI5MS43MTMtMS4wOC0uNDUyLS4xMjEtLjkyLjU0LTEuMTk3LS4zMiAxLjUxNy0yLjQ5OS0uNjc3LS4xODItMi40MiAyLjI1Ny0xLjI3Ny0uMzQyYTEuNjMgMS42MyAwIDAgMC0xLjQzOC0uODdoLTIuODkybC43OTktMi45ODFhLjgyLjgyIDAgMCAxIDEuMDAyLS41OGw5LjQ4NyAyLjU0M2EuODEzLjgxMyAwIDAgMSAuNDk3LjM4MWMuMTEuMTkuMTM4LjQxLjA4Mi42MjF6Ii8+CiAgICAgICAgPHBhdGggZD0iTTE3LjQ4NSAxMS4wOGwtLjIxLjc5MS43NzguMjA2LjIxLS43OS0uNzc4LS4yMDd6TTE5LjAzOCAxMS40OTNsLS4yMS43OTEuNzc5LjIwNi4yMDktLjc5MS0uNzc4LS4yMDZ6TTE1LjkzMiAxMC42NjlsLS4yMS43OTEuNzc4LjIwNi4yMS0uNzkxLS43NzgtLjIwNnoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMFYweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=";

/* babel-plugin-inline-import '../../../assets/icons/icon_chat-outline.svg' */
var CommentsIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxwYXRoIGZpbGw9IiM0RjRGNEYiIGQ9Ik0xMi43MTkgMS40MzhIMy4yOEEzLjI4NSAzLjI4NSAwIDAgMCAwIDQuNzE3djUuMDY5YzAgMS40NDMuOTQ4IDIuNyAyLjMyMSAzLjEwM2wxLjU4NSAxLjU4NWEuNDY5LjQ2OSAwIDAgMCAuNjYzIDBsMS40NTQtMS40NTRoNi42OTZBMy4yODUgMy4yODUgMCAwIDAgMTYgOS43NFY0LjcxOWEzLjI4NSAzLjI4NSAwIDAgMC0zLjI4MS0zLjI4MnptMi4zNDQgOC4zMDJhMi4zNDYgMi4zNDYgMCAwIDEtMi4zNDQgMi4zNDRoLTYuODlhLjQ2OS40NjkgMCAwIDAtLjMzMi4xMzdsLTEuMjYgMS4yNi0xLjM0LTEuMzQyYS40NjkuNDY5IDAgMCAwLS4yMi0uMTIzIDIuMjkyIDIuMjkyIDAgMCAxLTEuNzQtMi4yM1Y0LjcyYTIuMzQ2IDIuMzQ2IDAgMCAxIDIuMzQ0LTIuMzQ0aDkuNDM4YTIuMzQ2IDIuMzQ2IDAgMCAxIDIuMzQ0IDIuMzQ0VjkuNzR6Ii8+Cjwvc3ZnPgo=";

/* babel-plugin-inline-import '../../../assets/icons/icon_time_red.svg' */
var TimeIconRed = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxwYXRoIGZpbGw9IiNEOTMxMzEiIGQ9Ik03Ljk5MyAxLjMzM0E2LjY2MyA2LjY2MyAwIDAgMCAxLjMzMyA4YzAgMy42OCAyLjk4IDYuNjY3IDYuNjYgNi42NjdBNi42NyA2LjY3IDAgMCAwIDE0LjY2NyA4YTYuNjcgNi42NyAwIDAgMC02LjY3NC02LjY2N3ptLjAwNyAxMkE1LjMzMiA1LjMzMiAwIDAgMSAyLjY2NyA4IDUuMzMyIDUuMzMyIDAgMCAxIDggMi42NjcgNS4zMzIgNS4zMzIgMCAwIDEgMTMuMzMzIDggNS4zMzIgNS4zMzIgMCAwIDEgOCAxMy4zMzN6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRDkzMTMxIiBkPSJNOC4zMzMgNC42NjdoLTF2NGwzLjUgMi4xLjUtLjgyLTMtMS43OHYtMy41eiIvPgo8L3N2Zz4K";

/* babel-plugin-inline-import '../../../assets/icons/icon_time_green.svg' */
var TimeIconGreen = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxwYXRoIGZpbGw9IiMyN2FlNjAiIGQ9Ik03Ljk5MyAxLjMzM0E2LjY2MyA2LjY2MyAwIDAgMCAxLjMzMyA4YzAgMy42OCAyLjk4IDYuNjY3IDYuNjYgNi42NjdBNi42NyA2LjY3IDAgMCAwIDE0LjY2NyA4YTYuNjcgNi42NyAwIDAgMC02LjY3NC02LjY2N3ptLjAwNyAxMkE1LjMzMiA1LjMzMiAwIDAgMSAyLjY2NyA4IDUuMzMyIDUuMzMyIDAgMCAxIDggMi42NjcgNS4zMzIgNS4zMzIgMCAwIDEgMTMuMzMzIDggNS4zMzIgNS4zMzIgMCAwIDEgOCAxMy4zMzN6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMjdhZTYwIiBkPSJNOC4zMzMgNC42NjdoLTF2NGwzLjUgMi4xLjUtLjgyLTMtMS43OHYtMy41eiIvPgo8L3N2Zz4K";

/* babel-plugin-inline-import '../../../assets/icons/icon_star_fill.svg' */
var FavoriteIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxwYXRoIGZpbGw9IiNGQ0FCMTAiIGQ9Ik04IDEyLjIxNmw0Ljk0NCAyLjk4NC0xLjMxMi01LjYyNEwxNiA1Ljc5MmwtNS43NTItLjQ4OEw4IDAgNS43NTIgNS4zMDQgMCA1Ljc5Mmw0LjM2OCAzLjc4NEwzLjA1NiAxNS4yIDggMTIuMjE2eiIvPgo8L3N2Zz4K";

var VHModalVisaPipeline = function VHModalVisaPipeline(props) {
  var projectedDate = '';
  var showDate = false;

  if (props.projectedStartDate != null && _typeof(props.projectedStartDate) != undefined) {
    showDate = true;
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var date = new Date(props.projectedStartDate);
    projectedDate = "".concat(monthNames[date.getMonth()], ", ").concat(date.getDate());
  }

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
      image: props.user.avatar,
      size: "lg",
      showCursor: true
    })), _react.default.createElement(_TitleDescription.default, {
      title: props.user.name,
      description: props.user.email,
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
      marginBottom5: true,
      row: true,
      alignItemsCenter: true
    }, _react.default.createElement(S.IconWrapper, null, _react.default.createElement(_index2.default, {
      source: CompanyIcon,
      title: "company",
      xs: true
    })), _react.default.createElement(S.Info, null, props.job.companyName), _react.default.createElement(S.IconWrapper, null, _react.default.createElement(_index2.default, {
      source: PositionIcon,
      title: "position",
      xs: true
    })), _react.default.createElement(S.Info, null, props.job.position)), _react.default.createElement(_Grid.Row, {
      marginBottom5: true,
      row: true,
      alignItemsCenter: true
    }, _react.default.createElement(S.IconWrapper, null, _react.default.createElement(_index2.default, {
      source: CityIcon,
      title: "city",
      xs: true
    })), _react.default.createElement(S.Info, null, props.job.location), _react.default.createElement(S.IconWrapper, null, _react.default.createElement(_index2.default, {
      source: PositionIcon,
      title: "city",
      xs: true
    })), _react.default.createElement(S.Info, null, props.salary)), _react.default.createElement(_Grid.Row, {
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
    }, _react.default.createElement(S.Wrapper, null, _react.default.createElement(_Grid.Row, null, _react.default.createElement(_Comments.default, {
      data: props.user,
      loading: props.commentsSession.loading,
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
    }), showDate && _react.default.createElement(S.InfoDate, null, "Projected Start Date: ", _react.default.createElement("b", null, projectedDate)))))
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