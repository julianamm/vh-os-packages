"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width: ", "px;\n    height: ", "px;\n    background-color: ", ";\n    border-radius: 3px;\n    background-image: linear-gradient(90deg, ", " 0px, ", " 40px, ", "  80px);\n    animation: ", " 1.5s  infinite linear;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    0%   {\n        background-position: -100px;\n    }\n    40% { background-position: 200px}\n    100% { background-position: 1000px}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OffsetWidth = '100%';
var OffsetHeight = 16;
var shine = (0, _styledComponents.keyframes)(_templateObject());

var _default = _styledComponents.default.div(_templateObject2(), OffsetWidth, OffsetHeight, function (props) {
  return props.baseColor ? props.baseColor : '#ccc';
}, function (props) {
  return props.baseColor ? props.baseColor : '#ccc';
}, function (props) {
  return props.shineColor ? props.shineColor : '#ccc';
}, function (props) {
  return props.baseColor ? props.baseColor : '#ccc';
}, shine);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvU2tlbGV0b24vVGV4dC9zdHlsZXMuanMiXSwibmFtZXMiOlsiT2Zmc2V0V2lkdGgiLCJPZmZzZXRIZWlnaHQiLCJzaGluZSIsImtleWZyYW1lcyIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiYmFzZUNvbG9yIiwic2hpbmVDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQU1BLFdBQVcsR0FBRyxNQUFwQjtBQUNBLElBQU1DLFlBQVksR0FBRyxFQUFyQjtBQUVBLElBQU1DLEtBQUssT0FBR0MsMkJBQUgsb0JBQVg7O2VBUWVDLDBCQUFPQyxHLHFCQUNUTCxXLEVBQ0NDLFksRUFDVSxVQUFBSyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxTQUFOLEdBQWtCRCxLQUFLLENBQUNDLFNBQXhCLEdBQW9DLE1BQXhDO0FBQUEsQyxFQUVrQixVQUFBRCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxTQUFOLEdBQWtCRCxLQUFLLENBQUNDLFNBQXhCLEdBQW9DLE1BQXhDO0FBQUEsQyxFQUF1RCxVQUFBRCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxVQUFOLEdBQW1CRixLQUFLLENBQUNFLFVBQXpCLEdBQXNDLE1BQTFDO0FBQUEsQyxFQUEwRCxVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxTQUFOLEdBQWtCRCxLQUFLLENBQUNDLFNBQXhCLEdBQW9DLE1BQXhDO0FBQUEsQyxFQUM5SkwsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsgY3NzLCBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBDb2xvciBmcm9tICcuLi8uLi8uLi9Db2xvcnMnXG5jb25zdCBPZmZzZXRXaWR0aCA9ICcxMDAlJ1xuY29uc3QgT2Zmc2V0SGVpZ2h0ID0gMTZcblxuY29uc3Qgc2hpbmUgPSBrZXlmcmFtZXNgXG4gICAgMCUgICB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMDBweDtcbiAgICB9XG4gICAgNDAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAwcHh9XG4gICAgMTAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IDEwMDBweH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlZC5kaXZgXG4gICAgd2lkdGg6ICR7T2Zmc2V0V2lkdGh9cHg7XG4gICAgaGVpZ2h0OiAke09mZnNldEhlaWdodH1weDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLmJhc2VDb2xvciA/IHByb3BzLmJhc2VDb2xvciA6ICcjY2NjJ307XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgJHtwcm9wcyA9PiBwcm9wcy5iYXNlQ29sb3IgPyBwcm9wcy5iYXNlQ29sb3IgOiAnI2NjYyd9IDBweCwgJHtwcm9wcyA9PiBwcm9wcy5zaGluZUNvbG9yID8gcHJvcHMuc2hpbmVDb2xvciA6ICcjY2NjJ30gNDBweCwgJHtwcm9wcyA9PiBwcm9wcy5iYXNlQ29sb3IgPyBwcm9wcy5iYXNlQ29sb3IgOiAnI2NjYyd9ICA4MHB4KTtcbiAgICBhbmltYXRpb246ICR7c2hpbmV9IDEuNXMgIGluZmluaXRlIGxpbmVhcjtcbmBcbiJdfQ==