"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = exports.UnderlineText = exports.ImgWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    \n    ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    border-bottom: 3px solid #059ca6;\n    margin: auto 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 90%;\n    height: 90%;\n    background-size: contain;\n    background-image: url(", ");\n    background-repeat: no-repeat;\n    background-position: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ImgWrapper = _styledComponents.default.div(_templateObject(), function (props) {
  return props.image && props.image;
});

exports.ImgWrapper = ImgWrapper;

var UnderlineText = _styledComponents.default.span(_templateObject2());

exports.UnderlineText = UnderlineText;

var Wrapper = _styledComponents.default.div(_templateObject3(), function (_ref) {
  var reverse = _ref.reverse;
  return reverse && "\n        flex-direction: row-reverse;\n  ";
});

exports.Wrapper = Wrapper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVGV4dEhpZ2hsaWdodERlc2NyaXB0aW9uSW1hZ2Uvc3R5bGVzLmpzIl0sIm5hbWVzIjpbIkltZ1dyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsImltYWdlIiwiVW5kZXJsaW5lVGV4dCIsInNwYW4iLCJXcmFwcGVyIiwicmV2ZXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxVQUFVLEdBQUdDLDBCQUFPQyxHQUFWLG9CQUlLLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sSUFBZUQsS0FBSyxDQUFDQyxLQUF6QjtBQUFBLENBSlYsQ0FBaEI7Ozs7QUFTQSxJQUFNQyxhQUFhLEdBQUdKLDBCQUFPSyxJQUFWLG9CQUFuQjs7OztBQUtBLElBQU1DLE9BQU8sR0FBR04sMEJBQU9DLEdBQVYscUJBR2Q7QUFBQSxNQUFHTSxPQUFILFFBQUdBLE9BQUg7QUFBQSxTQUFpQkEsT0FBTyxnREFBeEI7QUFBQSxDQUhjLENBQWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgSW1nV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7cHJvcHMgPT4gcHJvcHMuaW1hZ2UgJiYgcHJvcHMuaW1hZ2V9KTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbmBcblxuZXhwb3J0IGNvbnN0IFVuZGVybGluZVRleHQgPSBzdHlsZWQuc3BhbmBcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzA1OWNhNjtcbiAgICBtYXJnaW46IGF1dG8gMDtcbmBcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgXG4gICAgJHsoeyByZXZlcnNlIH0pID0+IHJldmVyc2UgJiYgYFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGB9XG5gIl19