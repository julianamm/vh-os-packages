"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width: ", "px;\n    height: ", "px;\n    background-color: #ccc;\n    border-radius: 50%;\n    background-image: linear-gradient(90deg, ", " 0px, ", " 40px, ", "  80px);\n    animation: ", " 1.5s  infinite linear;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    0%   {\n        background-position: -", "px;\n    }\n    40% { background-position: ", "px;}\n    100% { background-position: ", "px;}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var avatarOffset = 24;
var shineAvatar = (0, _styledComponents.keyframes)(_templateObject(), avatarOffset, avatarOffset, avatarOffset);

var _default = _styledComponents.default.div(_templateObject2(), avatarOffset, avatarOffset, function (props) {
  return props.baseColor ? props.baseColor : '#ccc';
}, function (props) {
  return props.shineColor ? props.shineColor : '#ccc';
}, function (props) {
  return props.baseColor ? props.baseColor : '#ccc';
}, shineAvatar);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvU2tlbGV0b24vQXZhdGFyL3N0eWxlcy5qcyJdLCJuYW1lcyI6WyJhdmF0YXJPZmZzZXQiLCJzaGluZUF2YXRhciIsImtleWZyYW1lcyIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiYmFzZUNvbG9yIiwic2hpbmVDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsRUFBckI7QUFFQSxJQUFNQyxXQUFXLE9BQUdDLDJCQUFILHFCQUVlRixZQUZmLEVBSWdCQSxZQUpoQixFQUtpQkEsWUFMakIsQ0FBakI7O2VBU2VHLDBCQUFPQyxHLHFCQUNUSixZLEVBQ0NBLFksRUFHaUMsVUFBQUssS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsU0FBTixHQUFrQkQsS0FBSyxDQUFDQyxTQUF4QixHQUFvQyxNQUF4QztBQUFBLEMsRUFBdUQsVUFBQUQsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0UsVUFBTixHQUFtQkYsS0FBSyxDQUFDRSxVQUF6QixHQUFzQyxNQUExQztBQUFBLEMsRUFBMEQsVUFBQUYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsU0FBTixHQUFrQkQsS0FBSyxDQUFDQyxTQUF4QixHQUFvQyxNQUF4QztBQUFBLEMsRUFDOUpMLFciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGNzcywga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmNvbnN0IGF2YXRhck9mZnNldCA9IDI0XG5cbmNvbnN0IHNoaW5lQXZhdGFyID0ga2V5ZnJhbWVzYFxuICAgIDAlICAge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtJHthdmF0YXJPZmZzZXR9cHg7XG4gICAgfVxuICAgIDQwJSB7IGJhY2tncm91bmQtcG9zaXRpb246ICR7YXZhdGFyT2Zmc2V0fXB4O31cbiAgICAxMDAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogJHthdmF0YXJPZmZzZXR9cHg7fVxuYDtcblxuXG5leHBvcnQgZGVmYXVsdCBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiAke2F2YXRhck9mZnNldH1weDtcbiAgICBoZWlnaHQ6ICR7YXZhdGFyT2Zmc2V0fXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgJHtwcm9wcyA9PiBwcm9wcy5iYXNlQ29sb3IgPyBwcm9wcy5iYXNlQ29sb3IgOiAnI2NjYyd9IDBweCwgJHtwcm9wcyA9PiBwcm9wcy5zaGluZUNvbG9yID8gcHJvcHMuc2hpbmVDb2xvciA6ICcjY2NjJ30gNDBweCwgJHtwcm9wcyA9PiBwcm9wcy5iYXNlQ29sb3IgPyBwcm9wcy5iYXNlQ29sb3IgOiAnI2NjYyd9ICA4MHB4KTtcbiAgICBhbmltYXRpb246ICR7c2hpbmVBdmF0YXJ9IDEuNXMgIGluZmluaXRlIGxpbmVhcjtcbmBcbiJdfQ==