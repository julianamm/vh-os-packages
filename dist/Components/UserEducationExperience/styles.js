"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    padding-bottom: 21px;\n\n    ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject(), function (_ref) {
  var hideTimeline = _ref.hideTimeline;
  return !hideTimeline && "\n        border-left: 1px solid ".concat(_Colors.default["gray-30"], ";\n        padding-left: 15px;\n        position: relative;\n\n        &::after {\n            content: \"\";\n            position: absolute;\n            width: 12px;\n            height: 12px;\n            top: 0px;\n            left: -6px;\n            background-color: ").concat(_Colors.default["gray-30"], ";\n            border-radius: 50%;\n            z-index: 1;\n        }\n    ");
});

exports.Wrapper = Wrapper;