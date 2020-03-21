"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject(), function (_ref) {
  var loading = _ref.loading;
  return !loading && "\n    border-radius: 6px;\n    border: solid 1px ".concat(_Colors.default["gray-30"], ";\n    background-color: ").concat(_Colors.default["gray-20"], ";\n    padding-left: 0.563rem;\n    display: grid;\n    grid-template-columns: 9px 100%;\n    align-items: center;\n  ");
}, function (_ref2) {
  var error = _ref2.error;
  return error && "\n    border-radius: 6px;\n    border: solid 1px ".concat(_Colors.default["red-dark"], ";\n    background-color: ").concat(_Colors.default["gray-20"], ";\n    padding-left: 0.563rem;\n    display: grid;\n    grid-template-columns: 9px 100%;\n    align-items: center;\n  ");
});

exports.Wrapper = Wrapper;