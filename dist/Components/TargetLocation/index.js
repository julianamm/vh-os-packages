"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = _interopRequireDefault(require("../Img/index"));

var _index2 = _interopRequireDefault(require("../Text/index"));

var _Grid = require("../../Grid");

var S = _interopRequireWildcard(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* babel-plugin-inline-import '../../../assets/flags/flag_usa.svg' */
var USA = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSIzOCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDUwIDM4Ij4KICAgIDxnIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1wYXRoPSJ1cmwoI3ByZWZpeF9fY2xpcDApIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGZpbGw9IiNCRDNENDQiIGQ9Ik0wIDBoNzEuMjV2Mi44ODZIMFYwem0wIDUuNzcxaDcxLjI1djIuODg2SDBWNS43NzF6bTAgNS43NjVoNzEuMjV2Mi44OTNIMHYtMi44OTN6bTAgNS43NzFoNzEuMjV2Mi44ODZIMHYtMi44ODZ6bTAgNS43NzJoNzEuMjV2Mi44ODVIMFYyMy4wOHptMCA1Ljc2NGg3MS4yNXYyLjg4Nkgwdi0yLjg4NnptMCA1Ljc3MWg3MS4yNVYzNy41SDB2LTIuODg2eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDIuODg2aDcxLjI1VjUuNzdIMFYyLjg4NnptMCA1Ljc3MWg3MS4yNXYyLjg3OUgwVjguNjU3em0wIDUuNzY0aDcxLjI1djIuODg2SDB2LTIuODg2em0wIDUuNzcyaDcxLjI1djIuODg2SDB2LTIuODg2em0wIDUuNzcxaDcxLjI1djIuODg2SDB2LTIuODg2em0wIDUuNzY1aDcxLjI1djIuODg1SDBWMzEuNzN6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzE5MkY1RCIgZD0iTTAgMGgyOC40OTh2MjAuMTkzSDBWMHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMi4zNzMuODY0bC4yNjQuNzk5aC44MzVsLS42NzQuNDkuMjU2LjgwNi0uNjgtLjQ5OC0uNjc1LjQ5LjI1Ny0uNzk4LS42ODItLjQ5aC44NWwuMjQ5LS43OTl6bTQuNzUzIDBsLjI1Ny43OTloLjg0MmwtLjY4MS40OS4yNTYuODA2LS42NzQtLjQ5OC0uNjguNDkuMjU2LS43OTgtLjY3NC0uNDloLjgzNWwuMjYzLS43OTl6bTQuNzQ3IDBsLjI2My43OTloLjgyOGwtLjY3NC40OS4yNTYuODA2LS42OC0uNDk4LS42NzUuNDkuMjU3LS43OTgtLjY4MS0uNDloLjg0MmwuMjY0LS43OTl6bTQuNzUzIDBsLjI1Ni43OTloLjg0M2wtLjY4MS40OS4yNjMuODA2LS42ODEtLjQ5OC0uNjgxLjQ5LjI2NC0uNzk4LS42ODItLjQ5aC44MzVsLjI2NC0uNzk5em00Ljc0NiAwbC4yNjQuNzk5aC44MzVsLS42NzQuNDkuMjU2LjgwNi0uNjgtLjQ5OC0uNjc1LjQ5LjI1Ny0uNzk4LS42NzQtLjQ5aC44MzVsLjI1Ni0uNzk5em00Ljc1MyAwbC4yNTcuNzk5aC44NDJsLS42ODEuNDkuMjY0LjgwNi0uNjgxLS40OTgtLjY4Mi40OS4yNjQtLjc5OC0uNjgxLS40OWguODQybC4yNTYtLjc5OXpNNC43NTMgMi44ODZsLjI1Ny43OThoLjg0MmwtLjY4MS40OS4yNDkuOC0uNjYtLjQ5Mi0uNjguNDkxLjI0MS0uNzk4LS42NTktLjQ5aC44MzVsLjI1Ni0uOHptNC43NDcgMGwuMjYzLjc5OGguODM1bC0uNjgxLjQ5LjI2NC44LS42ODEtLjQ5Mi0uNjgyLjQ5MS4yNjQtLjc5OC0uNjgxLS40OWguODQybC4yNTctLjh6bTQuNzUzIDBsLjI1Ni43OThoLjg0M2wtLjY4Mi40OS4yNTcuOC0uNjc0LS40OTItLjY4MS40OTEuMjU2LS43OTgtLjY3NC0uNDloLjgzNWwuMjY0LS44em00Ljc0NiAwbC4yNjQuNzk4aC44MzVsLS42ODEuNDkuMjYzLjhMMTkgNC40ODFsLS42NzQuNDkxLjI1Ni0uNzk4LS42OC0uNDloLjg0OWwuMjQ5LS44em00Ljc1MyAwbC4yNTcuNzk4aC44NDJsLS42ODEuNDkuMjU2LjgtLjY3NC0uNDkyLS42OC40OTEuMjU2LS43OTgtLjY3NC0uNDloLjgzNWwuMjYzLS44ek0yLjM3MyA0LjlsLjI2NC44MTNoLjgzNWwtLjY3NC40OS4yNTYuNzk5LS42OC0uNDk4LS42NzUuNDk4LjI1Ny0uODA2LS42ODItLjQ5aC44NWwuMjQ5LS44MDZ6bTQuNzUzIDBsLjI1Ny44MDZoLjg0MmwtLjY4MS40OS4yNTYuNzk5LS42NzQtLjQ5OC0uNjguNDk4LjI1Ni0uODA2LS42NzQtLjQ5aC44MzVsLjI2My0uOHptNC43NDcgMGwuMjYzLjgwNmguODI4bC0uNjc0LjQ5LjI1Ni43OTktLjY4LS40OTgtLjY3NS40OTguMjU3LS44MDYtLjY4MS0uNDloLjg0MmwuMjY0LS44em00Ljc1MyAwbC4yNTYuODA2aC44NDNsLS42ODEuNDkuMjYzLjc5OS0uNjgxLS40OTgtLjY4MS40OTguMjY0LS44MDYtLjY4Mi0uNDloLjgzNWwuMjY0LS44em00Ljc0NiAwbC4yNjQuODA2aC44MzVsLS42NzQuNDkuMjU2Ljc5OS0uNjgtLjQ5OC0uNjc1LjQ5OC4yNTctLjgwNi0uNjc0LS40OWguODM1bC4yNTYtLjh6bTQuNzUzIDBsLjI1Ny44MDZoLjg0MmwtLjY4MS40OS4yNjQuNzk5LS42ODEtLjQ5OC0uNjgyLjQ5OC4yNjQtLjgwNi0uNjgxLS40OWguODQybC4yNTYtLjh6TTQuNzUzIDYuOTJsLjI1Ny43OTloLjg0MmwtLjY4MS40OS4yNTYuODA2LS42NzQtLjQ5OC0uNjguNDkuMjU2LS43OTgtLjY3NC0uNDloLjgzNWwuMjYzLS43OTl6bTQuNzQ3IDBsLjI2My43OTloLjgzNWwtLjY4MS40OS4yNjQuODA2LS42ODEtLjQ5OC0uNjgyLjQ5LjI2NC0uNzk4LS42ODEtLjQ5aC44NDJMOS41IDYuOTJ6bTQuNzUzIDBsLjI1Ni43OTloLjg0M2wtLjY4Mi40OS4yNTcuODA2LS42NzQtLjQ5OC0uNjgxLjQ5LjI1Ni0uNzk4LS42NzQtLjQ5aC44MzVsLjI2NC0uNzk5em00Ljc0NiAwbC4yNjQuNzk5aC44MzVsLS42NzQuNDkuMjU2LjgwNkwxOSA4LjUxOGwtLjY3NC40OS4yNTYtLjc5OC0uNjgtLjQ5aC44NDlsLjI0OS0uNzk5em00Ljc1MyAwbC4yNTcuNzk5aC44NDJsLS42ODEuNDkuMjU2LjgwNi0uNjc0LS40OTgtLjY4LjQ5LjI1Ni0uNzk4LS42NzQtLjQ5aC44MzVsLjI2My0uNzk5ek0yLjM3MyA4Ljk0M2wuMjY0Ljc5OGguODM1bC0uNjc0LjQ5LjI1Ni44MDctLjY4LS40OTgtLjY3NS40OS4yNTctLjc5OC0uNjgyLS40OWguODVsLjI0OS0uOHptNC43NTMgMGwuMjU3Ljc5OGguODQybC0uNjgxLjQ5LjI1Ni44LS42NzQtLjQ5Mi0uNjguNDkxLjI1Ni0uNzk4LS42NzQtLjQ5aC44MzVsLjI2My0uOHptNC43NDcgMGwuMjYzLjc5OGguODI4bC0uNjc0LjQ5LjI1Ni44MDctLjY4LS40OTgtLjY3NS40OS4yNTctLjc5OC0uNjgxLS40OWguODQybC4yNjQtLjh6bTQuNzUzIDBsLjI1Ni43OThoLjg0M2wtLjY4MS40OS4yNjMuODA3LS42ODEtLjQ5OC0uNjgxLjQ5LjI2NC0uNzk4LS42ODItLjQ5aC44MzVsLjI2NC0uOHptNC43NDYgMGwuMjY0Ljc5OGguODM1bC0uNjc0LjQ5LjI1Ni44MDctLjY4LS40OTgtLjY3NS40OS4yNTctLjc5OC0uNjc0LS40OWguODM1bC4yNTYtLjh6bTQuNzUzIDBsLjI1Ny43OThoLjg0MmwtLjY4MS40OS4yNjQuODA3LS42ODEtLjQ5OC0uNjgyLjQ5LjI2NC0uNzk4LS42ODEtLjQ5aC44NDJsLjI1Ni0uOHpNNC43NTMgMTAuOTY0bC4yNTcuNzk5aC44NDJsLS42ODEuNDkuMjU2Ljc5OS0uNjc0LS40OTgtLjY4LjQ5OC4yNTYtLjgwNi0uNjc0LS40OWguODM1bC4yNjMtLjc5MnptNC43NDcgMGwuMjYzLjc5OWguODM1bC0uNjgxLjQ5LjI2NC43OTktLjY4MS0uNDk4LS42ODIuNDk4LjI2NC0uODA2LS42ODEtLjQ5aC44NDJsLjI1Ny0uNzkyem00Ljc1MyAwbC4yNTYuNzk5aC44NDNsLS42ODIuNDkuMjU3Ljc5OS0uNjc0LS40OTgtLjY4MS40OTguMjU2LS44MDYtLjY3NC0uNDloLjgzNWwuMjY0LS43OTJ6bTQuNzQ2IDBsLjI2NC43OTloLjgzNWwtLjY3NC40OS4yNTYuNzk5LS42ODEtLjQ5OC0uNjc0LjQ5OC4yNTYtLjgwNi0uNjgtLjQ5aC44NDlsLjI0OS0uNzkyem00Ljc1MyAwbC4yNTcuNzk5aC44NDJsLS42ODEuNDkuMjU2Ljc5OS0uNjc0LS40OTgtLjY4LjQ5OC4yNTYtLjgwNi0uNjc0LS40OWguODM1bC4yNjMtLjc5MnpNMi4zNzMgMTIuOTc4bC4yNjQuODA2aC44MzVsLS42NzQuNDkuMjU2Ljc5Mi0uNjgtLjQ5LS42NzUuNDkuMjU3LS43OTgtLjY4Mi0uNDkxaC44NWwuMjQ5LS43OTh6bTQuNzUzIDBsLjI1Ny44MDZoLjg0MmwtLjY4MS40OS4yNjQuNzkyLS42ODItLjQ5LS42OC40OS4yNjMtLjc5OC0uNjgxLS40OTFoLjgzNWwuMjYzLS43OTh6bTQuNzQ3IDBsLjI2My44MDZoLjgyOGwtLjY3NC40OS4yNTYuNzkyLS42OC0uNDktLjY3NS40OS4yNTctLjc5OC0uNjgxLS40OTFoLjg0MmwuMjY0LS43OTh6bTQuNzUzIDBsLjI1Ni44MDZoLjg0M2wtLjY4MS40OS4yNjMuNzkyLS42ODEtLjQ5LS42ODEuNDkuMjY0LS43OTgtLjY4Mi0uNDkxaC44MzVsLjI2NC0uNzk4em00Ljc0NiAwbC4yNjQuODA2aC44MzVsLS42NzQuNDkuMjU2Ljc5Mi0uNjgtLjQ5LS42NzUuNDkuMjU3LS43OTgtLjY3NC0uNDkxaC44MzVsLjI1Ni0uNzk4em00Ljc1MyAwbC4yNTcuODA2aC44NDJsLS42ODEuNDkuMjY0Ljc5Mi0uNjgxLS40OS0uNjgyLjQ5LjI2NC0uNzk4LS42ODEtLjQ5MWguODQybC4yNTYtLjc5OHpNNC43NTMgMTVsLjI1Ny43OThoLjg0MmwtLjY4MS40OTEuMjU2LjgwNi0uNjc0LS40OTgtLjY4LjQ5LjI1Ni0uNzk4LS42NzQtLjQ5aC44MzVMNC43NTMgMTV6TTkuNSAxNWwuMjYzLjc5OGguODM1bC0uNjgxLjQ5MS4yNjQuODA2LS42ODEtLjQ5OC0uNjgyLjQ5LjI2NC0uNzk4LS42ODEtLjQ5aC44NDJMOS41IDE1em00Ljc1MyAwbC4yNTYuNzk4aC44NDNsLS42ODIuNDkxLjI1Ny44MDYtLjY3NC0uNDk4LS42ODEuNDkuMjU2LS43OTgtLjY3NC0uNDloLjgzNWwuMjY0LS43OTl6bTQuNzQ2IDBsLjI2NC43OThoLjgzNWwtLjY3NC40OTEuMjU2LjgwNi0uNjgxLS40OTgtLjY3NC40OS4yNTYtLjc5OC0uNjgtLjQ5aC44NDlsLjI0OS0uNzk5em00Ljc1MyAwbC4yNTcuNzk4aC44NDJsLS42ODEuNDkxLjI1Ni44MDYtLjY3NC0uNDk4LS42OC40OS4yNTYtLjc5OC0uNjc0LS40OWguODM1bC4yNjMtLjc5OXpNMi4zNzMgMTcuMDIxbC4yNjQuNzk5aC44MzVsLS42NzQuNDkuMjU2Ljc5OS0uNjgtLjQ5LS42NzUuNDkuMjU3LS44MDYtLjY4Mi0uNDloLjg1bC4yNDktLjc5MXptNC43NTMgMGwuMjU3Ljc5OWguODQybC0uNjgxLjQ5LjI2NC43OTktLjY4Mi0uNDktLjY4LjQ5LjI2My0uODA2LS42ODEtLjQ5aC44MzVsLjI2My0uNzkxem00Ljc0NyAwbC4yNjMuNzk5aC44MjhsLS42Ni40OS4yNTcuNzk5LS42ODEtLjQ5LS42NzQuNDkuMjU2LS44MDYtLjY4LS40OWguODQxbC4yNS0uNzkxem00Ljc1MyAwbC4yNTYuNzk5aC44NDNsLS42ODEuNDkuMjYzLjc5OS0uNjgxLS40OS0uNjgxLjQ5LjI2NC0uODA2LS42ODItLjQ5aC44MzVsLjI2NC0uNzkxem00Ljc0NiAwbC4yNjQuNzk5aC44MzVsLS42NzQuNDkuMjU2Ljc5OS0uNjgtLjQ5LS42NzUuNDkuMjU3LS44MDYtLjY3NC0uNDloLjgzNWwuMjU2LS43OTF6bTQuNzUzIDBsLjI1Ny43OTloLjg0MmwtLjY4MS40OS4yNjQuNzk5LS42ODEtLjQ5LS42ODIuNDkuMjY0LS44MDYtLjY4MS0uNDloLjg0MmwuMjU2LS43OTF6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9InByZWZpeF9fY2xpcDAiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDUwdjM3LjVIMFYweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=";

/* babel-plugin-inline-import '../../../assets/flags/flag_canada.svg' */
var Canada = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NCIgaGVpZ2h0PSIzOCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDU0IDM4Ij4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMy40OTkgMGgyNy4wMDN2MzcuOTgySDEzLjVWMHoiLz4KICAgIDxwYXRoIGZpbGw9InJlZCIgZD0iTTAgMGgxMy40OTh2MzcuOTgySDBWMHptNDAuNTAyIDBINTR2MzcuOTgySDQwLjUxTDQwLjUwMSAwek0xNy41NDUgMTguMzUzbC0xLjA1OC4zNTYgNC44ODIgNC4yNjZjLjM3MyAxLjA5LS4xMjcgMS40MS0uNDQ3IDEuOTg4bDUuMjkyLS42NjgtLjEyNyA1LjMwNCAxLjEwMy0uMDMtLjI0Ni01LjI2NiA1LjMwNy42M2MtLjMyOC0uNjktLjYxOS0xLjA1My0uMzItMi4xNTFsNC44NzQtNC4wNDMtLjg1LS4zMTJjLS43LS41MzQuMjk4LTIuNTc0LjQ0OC0zLjg2NSAwIDAtMi44NC45NzItMy4wMjcuNDZsLS43My0xLjM4Ny0yLjU4NiAyLjgzNGMtLjI4NC4wNjctLjQwMy0uMDQ1LS40Ny0uMjgybDEuMTkzLTUuOTItMS44OTQgMS4wNmMtLjE1Ni4wNzUtLjMxMy4wMTYtLjQxNy0uMTdsLTEuODI2LTMuNjM1LTEuODc4IDMuNzc2Yy0uMTQyLjEzNC0uMjg0LjE0OS0uNDAzLjA2bC0xLjgwMy0xLjAxIDEuMDg4IDUuODY5Yy0uMDkuMjM3LS4yOTguMjk2LS41MzcuMTdsLTIuNDgyLTIuNzk2Yy0uMzIuNTE5LS41MzcgMS4zNTctLjk2OSAxLjU1LS40MjUuMTc4LTEuODYzLS4zNTYtMi44MjUtLjU2NC4zMjggMS4xOCAxLjM1NyAzLjEzOC43MDggMy43ODR2LS4wMDh6Ii8+Cjwvc3ZnPgo=";

/* babel-plugin-inline-import '../../../assets/flags/flag_germany.svg' */
var Germany = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSIzOCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDUwIDM4Ij4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNwcmVmaXhfX2NsaXAwKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZGQ0UwMCIgZD0iTTAgMjVoNTB2MTIuNUgwVjI1eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0wIDBoNTB2MTIuNUgwVjB6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0QwMCIgZD0iTTAgMTIuNWg1MFYyNUgwVjEyLjV6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9InByZWZpeF9fY2xpcDAiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDUwdjM3LjVIMFYweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=";

/* babel-plugin-inline-import '../../../assets/flags/flag_ireland.svg' */
var Ireland = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MyIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDUzIDQwIj4KICAgIDxnIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1wYXRoPSJ1cmwoI3ByZWZpeF9fY2xpcDApIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoNTN2MzkuNzVIMFYweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMDlBNDkiIGQ9Ik0wIDBoMTcuNjY0djM5Ljc1SDBWMHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkY3OTAwIiBkPSJNMzUuMzM2IDBINTN2MzkuNzVIMzUuMzM2VjB6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9InByZWZpeF9fY2xpcDAiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDUzdjM5Ljc1SDBWMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K";

/* babel-plugin-inline-import '../../../assets/flags/flag_netherlands.svg' */
var Netherlands = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSIzOCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDUwIDM4Ij4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNwcmVmaXhfX2NsaXAwKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTUwIDBIMHYzNy4zMzloNTBWMHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMjE0NjhCIiBkPSJNNTAgMjUuMDU2SDBWMzcuNWg1MFYyNS4wNTZ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0FFMUMyOCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMCAwaDUwdjEyLjQ1MUgwVjB6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0icHJlZml4X19jbGlwMCI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoNTB2MzcuNUgwVjB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==";

/* babel-plugin-inline-import '../../../assets/flags/flag_uk.svg' */
var UK = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSIzOCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDUwIDM4Ij4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNwcmVmaXhfX2NsaXAwKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAxMjE2OSIgZD0iTS0xMi41NSAwaDc1LjJ2MzcuNmgtNzUuMlYweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0tMTIuNTUgMHY0LjJsNjYuNzkyIDMzLjRoOC40MDh2LTQuMkwtNC4xNCAwaC04LjQwOXptNzUuMiAwdjQuMkwtNC4xNCAzNy42aC04LjQwOXYtNC4yTDU0LjI0MiAwaDguNDA4eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOC43ODYgMHYzNy42aDEyLjUyOFYwSDE4Ljc4NnpNLTEyLjU1IDEyLjUzNnYxMi41MjhoNzUuMlYxMi41MzZoLTc1LjJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0M4MTAyRSIgZD0iTS0xMi41NSAxNS4wNHY3LjUyaDc1LjJ2LTcuNTJoLTc1LjJ6TTIxLjI5IDB2MzcuNmg3LjUyVjBoLTcuNTJ6bS0zMy44NCAzNy42bDI1LjA2NC0xMi41MzZoNS42MTFMLTYuOTQ3IDM3LjZoLTUuNjAzem0wLTM3LjZsMjUuMDY0IDEyLjUzNkg2LjkxMWwtMTkuNDYtOS43M1Ywem00NC41MzMgMTIuNTM2TDU3LjA0NyAwaDUuNjAzTDM3LjU4NiAxMi41MzZoLTUuNjAzek02Mi42NSAzNy42TDM3LjU4NiAyNS4wNjRoNS42MDNsMTkuNDYxIDkuNzNWMzcuNnoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0icHJlZml4X19jbGlwMCI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoNTB2MzcuNUgwVjB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==";

var VHTargetLocation = function VHTargetLocation(props) {
  var items = Object.keys(props.items).length > 0 ? props.items : [{
    status: false
  }, {
    status: false
  }, {
    status: false
  }, {
    status: false
  }, {
    status: false
  }, {
    status: false
  }];

  var _useState = (0, _react.useState)(items[0].status),
      _useState2 = _slicedToArray(_useState, 2),
      canada = _useState2[0],
      setCanada = _useState2[1];

  var _useState3 = (0, _react.useState)(items[1].status),
      _useState4 = _slicedToArray(_useState3, 2),
      germany = _useState4[0],
      setGermany = _useState4[1];

  var _useState5 = (0, _react.useState)(items[2].status),
      _useState6 = _slicedToArray(_useState5, 2),
      ireland = _useState6[0],
      setIreland = _useState6[1];

  var _useState7 = (0, _react.useState)(items[3].status),
      _useState8 = _slicedToArray(_useState7, 2),
      netherlands = _useState8[0],
      setNetherlands = _useState8[1];

  var _useState9 = (0, _react.useState)(items[4].status),
      _useState10 = _slicedToArray(_useState9, 2),
      uk = _useState10[0],
      setUk = _useState10[1];

  var _useState11 = (0, _react.useState)(items[5].status),
      _useState12 = _slicedToArray(_useState11, 2),
      usa = _useState12[0],
      setUsa = _useState12[1];

  _react.default.useEffect(function () {
    setCanada(items[0].status), setGermany(items[1].status), setIreland(items[2].status), setNetherlands(items[3].status), setUk(items[4].status), setUsa(items[5].status);
  }, [items[0].status, items[1].status, items[2].status, items[3].status, items[4].status, items[5].status]);

  return _react.default.createElement(_Grid.Row, {
    className: "vh-target-location ".concat(props.className ? props.className : ''),
    row: true,
    justifySpaceBetween: true
  }, _react.default.createElement(S.Wrapper, {
    disabled: !canada,
    onClick: function onClick() {
      setCanada(!canada);
      props.onEvent({
        type: "OnClick",
        origin: "VHTargetLocation",
        props: {
          data: {
            id: items[0].id,
            status: canada ? 0 : 1
          },
          position: 0
        }
      });
    }
  }, _react.default.createElement(_index.default, {
    source: Canada,
    title: "city",
    lg: true
  }), _react.default.createElement(_index2.default, {
    variant: "platform2",
    color: "black-100",
    text: 'Canada'
  })), _react.default.createElement(S.Wrapper, {
    disabled: !germany,
    onClick: function onClick() {
      setGermany(!germany);
      props.onEvent({
        type: "OnClick",
        origin: "VHTargetLocation",
        props: {
          data: {
            id: items[1].id,
            status: germany ? 0 : 1
          },
          position: 1
        }
      });
    }
  }, _react.default.createElement(_index.default, {
    source: Germany,
    title: "city",
    lg: true
  }), _react.default.createElement(_index2.default, {
    variant: "platform2",
    color: "black-100",
    text: 'Germany'
  })), _react.default.createElement(S.Wrapper, {
    disabled: !ireland,
    onClick: function onClick() {
      setIreland(!ireland);
      props.onEvent({
        type: "OnClick",
        origin: "VHTargetLocation",
        props: {
          data: {
            id: items[2].id,
            status: ireland ? 0 : 1
          },
          position: 2
        }
      });
    }
  }, _react.default.createElement(_index.default, {
    source: Ireland,
    title: "city",
    lg: true
  }), _react.default.createElement(_index2.default, {
    variant: "platform2",
    color: "black-100",
    text: 'Ireland'
  })), _react.default.createElement(S.Wrapper, {
    disabled: !netherlands,
    onClick: function onClick() {
      setNetherlands(!netherlands);
      props.onEvent({
        type: "OnClick",
        origin: "VHTargetLocation",
        props: {
          data: {
            id: items[3].id,
            status: netherlands ? 0 : 1
          },
          position: 3
        }
      });
    }
  }, _react.default.createElement(_index.default, {
    source: Netherlands,
    title: "city",
    lg: true
  }), _react.default.createElement(_index2.default, {
    variant: "platform2",
    color: "black-100",
    text: 'Netherlands'
  })), _react.default.createElement(S.Wrapper, {
    disabled: !uk,
    onClick: function onClick() {
      setUk(!uk);
      props.onEvent({
        type: "OnClick",
        origin: "VHTargetLocation",
        props: {
          data: {
            id: items[4].id,
            status: uk ? 0 : 1
          },
          position: 4
        }
      });
    }
  }, _react.default.createElement(_index.default, {
    source: UK,
    title: "city",
    lg: true
  }), _react.default.createElement(_index2.default, {
    variant: "platform2",
    color: "black-100",
    text: 'U.K'
  })), _react.default.createElement(S.Wrapper, {
    disabled: !usa,
    onClick: function onClick() {
      setUsa(!usa);
      props.onEvent({
        type: "OnClick",
        origin: "VHTargetLocation",
        props: {
          data: {
            id: items[5].id,
            status: usa ? 0 : 1
          },
          position: 5
        }
      });
    }
  }, _react.default.createElement(_index.default, {
    source: USA,
    title: "city",
    lg: true
  }), _react.default.createElement(_index2.default, {
    variant: "platform2",
    color: "black-100",
    text: 'U.S.A'
  })));
};

VHTargetLocation.defaultProps = {
  description: "",
  onEvent: null,
  className: ""
};
VHTargetLocation.propTypes = {
  description: _propTypes.default.string,
  onEvent: _propTypes.default.func,
  className: _propTypes.default.string
};
var _default = VHTargetLocation;
exports.default = _default;