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
  var data = _taggedTemplateLiteral(["\n    width: ", "px;\n    height: ", "px;\n    border-radius: 6px;\n    background-color: #ccc;\n    background-image: linear-gradient(90deg, ", " 0px, ", " 40px, ", "  80px);\n    animation: ", " 1.5s  infinite linear;\n"]);

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
var OffsetHeight = 100;
var shine = (0, _styledComponents.keyframes)(_templateObject());

var _default = _styledComponents.default.div(_templateObject2(), OffsetWidth, OffsetHeight, function (props) {
  return props.baseColor ? props.baseColor : '#ccc';
}, function (props) {
  return props.shineColor ? props.shineColor : '#ccc';
}, function (props) {
  return props.baseColor ? props.baseColor : '#ccc';
}, shine);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvU2tlbGV0b24vRGVzY3JpcHRpb24vc3R5bGVzLmpzIl0sIm5hbWVzIjpbIk9mZnNldFdpZHRoIiwiT2Zmc2V0SGVpZ2h0Iiwic2hpbmUiLCJrZXlmcmFtZXMiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsImJhc2VDb2xvciIsInNoaW5lQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTUEsV0FBVyxHQUFHLE1BQXBCO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLEdBQXJCO0FBRUEsSUFBTUMsS0FBSyxPQUFHQywyQkFBSCxvQkFBWDs7ZUFTZUMsMEJBQU9DLEcscUJBQ1RMLFcsRUFDQ0MsWSxFQUdpQyxVQUFBSyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxTQUFOLEdBQWtCRCxLQUFLLENBQUNDLFNBQXhCLEdBQW9DLE1BQXhDO0FBQUEsQyxFQUF1RCxVQUFBRCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxVQUFOLEdBQW1CRixLQUFLLENBQUNFLFVBQXpCLEdBQXNDLE1BQTFDO0FBQUEsQyxFQUEwRCxVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxTQUFOLEdBQWtCRCxLQUFLLENBQUNDLFNBQXhCLEdBQW9DLE1BQXhDO0FBQUEsQyxFQUM5SkwsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsgY3NzLCBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmNvbnN0IE9mZnNldFdpZHRoID0gJzEwMCUnXG5jb25zdCBPZmZzZXRIZWlnaHQgPSAxMDBcblxuY29uc3Qgc2hpbmUgPSBrZXlmcmFtZXNgXG4gICAgMCUgICB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMDBweDtcbiAgICB9XG4gICAgNDAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAwcHh9XG4gICAgMTAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IDEwMDBweH1cbmA7XG5cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogJHtPZmZzZXRXaWR0aH1weDtcbiAgICBoZWlnaHQ6ICR7T2Zmc2V0SGVpZ2h0fXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgJHtwcm9wcyA9PiBwcm9wcy5iYXNlQ29sb3IgPyBwcm9wcy5iYXNlQ29sb3IgOiAnI2NjYyd9IDBweCwgJHtwcm9wcyA9PiBwcm9wcy5zaGluZUNvbG9yID8gcHJvcHMuc2hpbmVDb2xvciA6ICcjY2NjJ30gNDBweCwgJHtwcm9wcyA9PiBwcm9wcy5iYXNlQ29sb3IgPyBwcm9wcy5iYXNlQ29sb3IgOiAnI2NjYyd9ICA4MHB4KTtcbiAgICBhbmltYXRpb246ICR7c2hpbmV9IDEuNXMgIGluZmluaXRlIGxpbmVhcjtcbmBcbiJdfQ==