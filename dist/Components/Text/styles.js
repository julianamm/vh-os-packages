"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Caption = exports.BodyPlatform2 = exports.BodyPlatform = exports.BodyWeb = exports.Subtitle3 = exports.Subtitle2 = exports.Subtitle1 = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n    margin: 0;\n    padding: 0;\n    color: ", ";\n    font-family: Roboto;\n    font-size: 12px;\n    font-weight: 'regular';\n\n    ", "\n\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    margin: 0;\n    padding: 0;\n    color: ", ";\n    font-family: Roboto;\n    font-size: 14px;\n    font-weight: 'regular';\n\n    ", "\n\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    margin: 0;\n    padding: 0;\n    color: ", ";\n    font-family: Roboto;\n    font-size: 14px;\n    font-weight: 'regular';\n    line-height: 21.5px;\n\n    ", "\n\n    ", "\n\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    margin: 0;\n    padding: 0;\n    color: ", ";\n    font-family: Roboto;\n    font-size: 16px;\n    font-weight: 'regular';\n    line-height: 28px;\n\n    ", "\n\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    margin: 0;\n    padding: 0;\n    color: ", ";\n    font-family: Roboto;\n    font-size: 16px;\n    font-weight: 'lighter';\n    line-height: 23.1px;\n\n    ", "\n\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    margin: 0;\n    padding: 0;\n    color: ", ";\n    font-family: Roboto;\n    font-size: 16px;\n    font-weight: 'bold';\n\n    ", "\n\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    margin: 0;\n    padding: 0;\n    color: ", ";\n    font-family: Roboto;\n    font-size: 18px;\n    font-weight: 'regular';\n    line-height: 22.4px;\n\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    margin: 0;\n    padding: 0;\n    color: ", ";\n    font-family: Nunito Sans;\n    font-size: 20px;\n    font-weight: 'regular';\n\n    ", "\n\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    margin: 0;\n    padding: 0;\n    color: ", ";\n    font-family: Nunito Sans;\n    font-size: 22px;\n    font-weight: 'regular';\n\n    ", "\n\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    margin: 0;\n    padding: 0;\n    color: ", ";\n    font-family: Nunito Sans;\n    font-size: 22px;\n    font-weight: 'bold';\n\n    ", "\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    margin: 0;\n    padding: 0;\n    color: ", ";\n    font-family: Nunito Sans;\n    font-size: 24px;\n    font-weight: 'normal';\n\n    ", "\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    margin: 0;\n    padding: 0;\n    color: ", ";\n    font-family: Nunito Sans;\n    font-size: 34px;\n    font-weight: 'lighter';\n\n    ", "\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    margin: 0;\n    padding: 0;\n    color: ", ";\n    font-family: Nunito Sans;\n    font-size: 48px;\n    font-weight: 'lighter';\n\n    ", "\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var H1 = _styledComponents.default.h1(_templateObject(), function (props) {
  return _Colors.default[props.color];
}, function (_ref) {
  var alignCenter = _ref.alignCenter;
  return alignCenter && "\n        text-align: center;\n    ";
});

exports.H1 = H1;

var H2 = _styledComponents.default.h2(_templateObject2(), function (props) {
  return _Colors.default[props.color];
}, function (_ref2) {
  var alignCenter = _ref2.alignCenter;
  return alignCenter && "\n        text-align: center;\n    ";
});

exports.H2 = H2;

var H3 = _styledComponents.default.h3(_templateObject3(), function (props) {
  return _Colors.default[props.color];
}, function (_ref3) {
  var alignCenter = _ref3.alignCenter;
  return alignCenter && "\n        text-align: center;\n    ";
});

exports.H3 = H3;

var H4 = _styledComponents.default.h4(_templateObject4(), function (props) {
  return _Colors.default[props.color];
}, function (_ref4) {
  var alignCenter = _ref4.alignCenter;
  return alignCenter && "\n        text-align: center;\n    ";
});

exports.H4 = H4;

var H5 = _styledComponents.default.h5(_templateObject5(), function (props) {
  return _Colors.default[props.color];
}, function (_ref5) {
  var alignCenter = _ref5.alignCenter;
  return alignCenter && "\n        text-align: center;\n    ";
});

exports.H5 = H5;

var H6 = _styledComponents.default.h6(_templateObject6(), function (props) {
  return _Colors.default[props.color];
}, function (_ref6) {
  var alignCenter = _ref6.alignCenter;
  return alignCenter && "\n        text-align: center;\n    ";
});

exports.H6 = H6;

var Subtitle1 = _styledComponents.default.p(_templateObject7(), function (props) {
  return _Colors.default[props.color];
});

exports.Subtitle1 = Subtitle1;

var Subtitle2 = _styledComponents.default.p(_templateObject8(), function (props) {
  return _Colors.default[props.color];
}, function (_ref7) {
  var alignCenter = _ref7.alignCenter;
  return alignCenter && "\n        text-align: center;\n    ";
});

exports.Subtitle2 = Subtitle2;

var Subtitle3 = _styledComponents.default.p(_templateObject9(), function (props) {
  return _Colors.default[props.color];
}, function (_ref8) {
  var alignCenter = _ref8.alignCenter;
  return alignCenter && "\n        text-align: center;\n    ";
});

exports.Subtitle3 = Subtitle3;

var BodyWeb = _styledComponents.default.p(_templateObject10(), function (props) {
  return _Colors.default[props.color];
}, function (_ref9) {
  var alignCenter = _ref9.alignCenter;
  return alignCenter && "\n        text-align: center;\n    ";
});

exports.BodyWeb = BodyWeb;

var BodyPlatform = _styledComponents.default.p(_templateObject11(), function (props) {
  return _Colors.default[props.color];
}, function (_ref10) {
  var alignCenter = _ref10.alignCenter;
  return alignCenter && "\n        text-align: center;\n    ";
}, function (_ref11) {
  var cursor = _ref11.cursor;
  return cursor && "\n        cursor: pointer;\n    ";
});

exports.BodyPlatform = BodyPlatform;

var BodyPlatform2 = _styledComponents.default.p(_templateObject12(), function (props) {
  return _Colors.default[props.color];
}, function (_ref12) {
  var alignCenter = _ref12.alignCenter;
  return alignCenter && "\n        text-align: center;\n    ";
});

exports.BodyPlatform2 = BodyPlatform2;

var Caption = _styledComponents.default.p(_templateObject13(), function (props) {
  return _Colors.default[props.color];
}, function (_ref13) {
  var alignCenter = _ref13.alignCenter;
  return alignCenter && "\n        text-align: center;\n    ";
});

exports.Caption = Caption;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVGV4dC9zdHlsZXMuanMiXSwibmFtZXMiOlsiSDEiLCJzdHlsZWQiLCJoMSIsInByb3BzIiwiQ29sb3IiLCJjb2xvciIsImFsaWduQ2VudGVyIiwiSDIiLCJoMiIsIkgzIiwiaDMiLCJINCIsImg0IiwiSDUiLCJoNSIsIkg2IiwiaDYiLCJTdWJ0aXRsZTEiLCJwIiwiU3VidGl0bGUyIiwiU3VidGl0bGUzIiwiQm9keVdlYiIsIkJvZHlQbGF0Zm9ybSIsIkJvZHlQbGF0Zm9ybTIiLCJDYXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxFQUFFLEdBQUdDLDBCQUFPQyxFQUFWLG9CQUdGLFVBQUFDLEtBQUs7QUFBQSxTQUFJQyxnQkFBTUQsS0FBSyxDQUFDRSxLQUFaLENBQUo7QUFBQSxDQUhILEVBUVQ7QUFBQSxNQUFFQyxXQUFGLFFBQUVBLFdBQUY7QUFBQSxTQUFtQkEsV0FBVyx5Q0FBOUI7QUFBQSxDQVJTLENBQVI7Ozs7QUFhQSxJQUFNQyxFQUFFLEdBQUdOLDBCQUFPTyxFQUFWLHFCQUdGLFVBQUFMLEtBQUs7QUFBQSxTQUFJQyxnQkFBTUQsS0FBSyxDQUFDRSxLQUFaLENBQUo7QUFBQSxDQUhILEVBUVQ7QUFBQSxNQUFFQyxXQUFGLFNBQUVBLFdBQUY7QUFBQSxTQUFtQkEsV0FBVyx5Q0FBOUI7QUFBQSxDQVJTLENBQVI7Ozs7QUFhQSxJQUFNRyxFQUFFLEdBQUdSLDBCQUFPUyxFQUFWLHFCQUdGLFVBQUFQLEtBQUs7QUFBQSxTQUFJQyxnQkFBTUQsS0FBSyxDQUFDRSxLQUFaLENBQUo7QUFBQSxDQUhILEVBUVQ7QUFB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b20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IENvbG9yIGZyb20gJy4uLy4uL0NvbG9ycydcblxuZXhwb3J0IGNvbnN0IEgxID0gc3R5bGVkLmgxYFxuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IENvbG9yW3Byb3BzLmNvbG9yXX07XG4gICAgZm9udC1mYW1pbHk6IE51bml0byBTYW5zO1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICBmb250LXdlaWdodDogJ2xpZ2h0ZXInO1xuXG4gICAgJHsoe2FsaWduQ2VudGVyfSkgPT4gYWxpZ25DZW50ZXIgJiYgYFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYH1cblxuYFxuZXhwb3J0IGNvbnN0IEgyID0gc3R5bGVkLmgyYFxuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IENvbG9yW3Byb3BzLmNvbG9yXX07XG4gICAgZm9udC1mYW1pbHk6IE51bml0byBTYW5zO1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICBmb250LXdlaWdodDogJ2xpZ2h0ZXInO1xuXG4gICAgJHsoe2FsaWduQ2VudGVyfSkgPT4gYWxpZ25DZW50ZXIgJiYgYFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYH1cblxuYFxuZXhwb3J0IGNvbnN0IEgzID0gc3R5bGVkLmgzYFxuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IENvbG9yW3Byb3BzLmNvbG9yXX07XG4gICAgZm9udC1mYW1pbHk6IE51bml0byBTYW5zO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogJ25vcm1hbCc7XG5cbiAgICAkeyh7YWxpZ25DZW50ZXJ9KSA9PiBhbGlnbkNlbnRlciAmJiBgXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBgfVxuXG5gXG5leHBvcnQgY29uc3QgSDQgPSBzdHlsZWQuaDRgXG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gQ29sb3JbcHJvcHMuY29sb3JdfTtcbiAgICBmb250LWZhbWlseTogTnVuaXRvIFNhbnM7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAnYm9sZCc7XG5cbiAgICAkeyh7YWxpZ25DZW50ZXJ9KSA9PiBhbGlnbkNlbnRlciAmJiBgXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBgfVxuXG5gXG5leHBvcnQgY29uc3QgSDUgPSBzdHlsZWQuaDVgXG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gQ29sb3JbcHJvcHMuY29sb3JdfTtcbiAgICBmb250LWZhbWlseTogTnVuaXRvIFNhbnM7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAncmVndWxhcic7XG5cbiAgICAkeyh7YWxpZ25DZW50ZXJ9KSA9PiBhbGlnbkNlbnRlciAmJiBgXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBgfVxuXG5gXG5leHBvcnQgY29uc3QgSDYgPSBzdHlsZWQuaDZgXG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gQ29sb3JbcHJvcHMuY29sb3JdfTtcbiAgICBmb250LWZhbWlseTogTnVuaXRvIFNhbnM7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAncmVndWxhcic7XG5cbiAgICAkeyh7YWxpZ25DZW50ZXJ9KSA9PiBhbGlnbkNlbnRlciAmJiBgXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBgfVxuXG5gXG5leHBvcnQgY29uc3QgU3VidGl0bGUxID0gc3R5bGVkLnBgXG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gQ29sb3JbcHJvcHMuY29sb3JdfTtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogJ3JlZ3VsYXInO1xuICAgIGxpbmUtaGVpZ2h0OiAyMi40cHg7XG5cbmBcbmV4cG9ydCBjb25zdCBTdWJ0aXRsZTIgPSBzdHlsZWQucGBcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBDb2xvcltwcm9wcy5jb2xvcl19O1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAnYm9sZCc7XG5cbiAgICAkeyh7YWxpZ25DZW50ZXJ9KSA9PiBhbGlnbkNlbnRlciAmJiBgXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBgfVxuXG5gXG5leHBvcnQgY29uc3QgU3VidGl0bGUzID0gc3R5bGVkLnBgXG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gQ29sb3JbcHJvcHMuY29sb3JdfTtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogJ2xpZ2h0ZXInO1xuICAgIGxpbmUtaGVpZ2h0OiAyMy4xcHg7XG5cbiAgICAkeyh7YWxpZ25DZW50ZXJ9KSA9PiBhbGlnbkNlbnRlciAmJiBgXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBgfVxuXG5gXG5leHBvcnQgY29uc3QgQm9keVdlYiA9IHN0eWxlZC5wYFxuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IENvbG9yW3Byb3BzLmNvbG9yXX07XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6ICdyZWd1bGFyJztcbiAgICBsaW5lLWhlaWdodDogMjhweDtcblxuICAgICR7KHthbGlnbkNlbnRlcn0pID0+IGFsaWduQ2VudGVyICYmIGBcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGB9XG5cbmBcbmV4cG9ydCBjb25zdCBCb2R5UGxhdGZvcm0gPSBzdHlsZWQucGBcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBDb2xvcltwcm9wcy5jb2xvcl19O1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAncmVndWxhcic7XG4gICAgbGluZS1oZWlnaHQ6IDIxLjVweDtcblxuICAgICR7KHthbGlnbkNlbnRlcn0pID0+IGFsaWduQ2VudGVyICYmIGBcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGB9XG5cbmBcbmV4cG9ydCBjb25zdCBCb2R5UGxhdGZvcm0yID0gc3R5bGVkLnBgXG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gQ29sb3JbcHJvcHMuY29sb3JdfTtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogJ3JlZ3VsYXInO1xuXG4gICAgJHsoe2FsaWduQ2VudGVyfSkgPT4gYWxpZ25DZW50ZXIgJiYgYFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYH1cblxuYFxuZXhwb3J0IGNvbnN0IENhcHRpb24gPSBzdHlsZWQucGBcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBDb2xvcltwcm9wcy5jb2xvcl19O1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAncmVndWxhcic7XG5cbiAgICAkeyh7YWxpZ25DZW50ZXJ9KSA9PiBhbGlnbkNlbnRlciAmJiBgXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBgfVxuXG5gXG4iXX0=