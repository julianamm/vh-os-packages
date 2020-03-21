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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVGV4dC9zdHlsZXMuanMiXSwibmFtZXMiOlsiSDEiLCJzdHlsZWQiLCJoMSIsInByb3BzIiwiQ29sb3IiLCJjb2xvciIsImFsaWduQ2VudGVyIiwiSDIiLCJoMiIsIkgzIiwiaDMiLCJINCIsImg0IiwiSDUiLCJoNSIsIkg2IiwiaDYiLCJTdWJ0aXRsZTEiLCJwIiwiU3VidGl0bGUyIiwiU3VidGl0bGUzIiwiQm9keVdlYiIsIkJvZHlQbGF0Zm9ybSIsImN1cnNvciIsIkJvZHlQbGF0Zm9ybTIiLCJDYXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxFQUFFLEdBQUdDLDBCQUFPQyxFQUFWLG9CQUdGLFVBQUFDLEtBQUs7QUFBQSxTQUFJQyxnQkFBTUQsS0FBSyxDQUFDRSxLQUFaLENBQUo7QUFBQSxDQUhILEVBUVQ7QUFBQSxNQUFFQyxXQUFGLFFBQUVBLFdBQUY7QUFBQSxTQUFtQkEsV0FBVyx5Q0FBOUI7QUFBQSxDQVJTLENBQVI7Ozs7QUFhQSxJQUFNQyxFQUFFLEdBQUdOLDBCQUFPTyxFQUFWLHFCQUdGLFVBQUFMLEtBQUs7QUFBQSxTQUFJQyxnQkFBTUQsS0FBSyxDQUFDRSxLQUFaLENBQUo7QUFBQSxDQUhILEVBUVQ7QUFBQSxNQUFFQyxXQUFGLFNBQUVBLFdBQUY7QUFBQSxTQUFtQkEsV0FBVyx5Q0FBOUI7QUFBQSxDQVJTLENBQVI7Ozs7QUFhQSxJQUFNRyxFQUFFLEdBQUdSLDBCQUFPUyxFQUFWLHFCQUdGLFVBQUFQLEtBQUs7QUFBQSxTQUFJQyxnQkFBTUQsS0FBSyxDQUFDRSxLQUFaLENBQUo7QUFBQSxDQUhI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RjtBQUFBLFNBQW1CQSxXQUFXLHlDQUE5QjtBQUFBLENBUmMsQ0FBYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgQ29sb3IgZnJvbSAnLi4vLi4vQ29sb3JzJ1xuXG5leHBvcnQgY29uc3QgSDEgPSBzdHlsZWQuaDFgXG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gQ29sb3JbcHJvcHMuY29sb3JdfTtcbiAgICBmb250LWZhbWlseTogTnVuaXRvIFNhbnM7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAnbGlnaHRlcic7XG5cbiAgICAkeyh7YWxpZ25DZW50ZXJ9KSA9PiBhbGlnbkNlbnRlciAmJiBgXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBgfVxuXG5gXG5leHBvcnQgY29uc3QgSDIgPSBzdHlsZWQuaDJgXG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gQ29sb3JbcHJvcHMuY29sb3JdfTtcbiAgICBmb250LWZhbWlseTogTnVuaXRvIFNhbnM7XG4gICAgZm9udC1zaXplOiAzNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAnbGlnaHRlcic7XG5cbiAgICAkeyh7YWxpZ25DZW50ZXJ9KSA9PiBhbGlnbkNlbnRlciAmJiBgXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBgfVxuXG5gXG5leHBvcnQgY29uc3QgSDMgPSBzdHlsZWQuaDNgXG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gQ29sb3JbcHJvcHMuY29sb3JdfTtcbiAgICBmb250LWZhbWlseTogTnVuaXRvIFNhbnM7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAnbm9ybWFsJztcblxuICAgICR7KHthbGlnbkNlbnRlcn0pID0+IGFsaWduQ2VudGVyICYmIGBcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGB9XG5cbmBcbmV4cG9ydCBjb25zdCBINCA9IHN0eWxlZC5oNGBcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBDb2xvcltwcm9wcy5jb2xvcl19O1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG8gU2FucztcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6ICdib2xkJztcblxuICAgICR7KHthbGlnbkNlbnRlcn0pID0+IGFsaWduQ2VudGVyICYmIGBcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGB9XG5cbmBcbmV4cG9ydCBjb25zdCBINSA9IHN0eWxlZC5oNWBcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBDb2xvcltwcm9wcy5jb2xvcl19O1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG8gU2FucztcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6ICdyZWd1bGFyJztcblxuICAgICR7KHthbGlnbkNlbnRlcn0pID0+IGFsaWduQ2VudGVyICYmIGBcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGB9XG5cbmBcbmV4cG9ydCBjb25zdCBINiA9IHN0eWxlZC5oNmBcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBDb2xvcltwcm9wcy5jb2xvcl19O1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG8gU2FucztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6ICdyZWd1bGFyJztcblxuICAgICR7KHthbGlnbkNlbnRlcn0pID0+IGFsaWduQ2VudGVyICYmIGBcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGB9XG5cbmBcbmV4cG9ydCBjb25zdCBTdWJ0aXRsZTEgPSBzdHlsZWQucGBcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBDb2xvcltwcm9wcy5jb2xvcl19O1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAncmVndWxhcic7XG4gICAgbGluZS1oZWlnaHQ6IDIyLjRweDtcblxuYFxuZXhwb3J0IGNvbnN0IFN1YnRpdGxlMiA9IHN0eWxlZC5wYFxuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IENvbG9yW3Byb3BzLmNvbG9yXX07XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6ICdib2xkJztcblxuICAgICR7KHthbGlnbkNlbnRlcn0pID0+IGFsaWduQ2VudGVyICYmIGBcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGB9XG5cbmBcbmV4cG9ydCBjb25zdCBTdWJ0aXRsZTMgPSBzdHlsZWQucGBcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBDb2xvcltwcm9wcy5jb2xvcl19O1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAnbGlnaHRlcic7XG4gICAgbGluZS1oZWlnaHQ6IDIzLjFweDtcblxuICAgICR7KHthbGlnbkNlbnRlcn0pID0+IGFsaWduQ2VudGVyICYmIGBcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGB9XG5cbmBcbmV4cG9ydCBjb25zdCBCb2R5V2ViID0gc3R5bGVkLnBgXG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gQ29sb3JbcHJvcHMuY29sb3JdfTtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogJ3JlZ3VsYXInO1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuXG4gICAgJHsoe2FsaWduQ2VudGVyfSkgPT4gYWxpZ25DZW50ZXIgJiYgYFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYH1cblxuYFxuZXhwb3J0IGNvbnN0IEJvZHlQbGF0Zm9ybSA9IHN0eWxlZC5wYFxuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IENvbG9yW3Byb3BzLmNvbG9yXX07XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6ICdyZWd1bGFyJztcbiAgICBsaW5lLWhlaWdodDogMjEuNXB4O1xuXG4gICAgJHsoe2FsaWduQ2VudGVyfSkgPT4gYWxpZ25DZW50ZXIgJiYgYFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYH1cblxuICAgICR7KHtjdXJzb3J9KSA9PiBjdXJzb3IgJiYgYFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYH1cblxuYFxuZXhwb3J0IGNvbnN0IEJvZHlQbGF0Zm9ybTIgPSBzdHlsZWQucGBcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBDb2xvcltwcm9wcy5jb2xvcl19O1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAncmVndWxhcic7XG5cbiAgICAkeyh7YWxpZ25DZW50ZXJ9KSA9PiBhbGlnbkNlbnRlciAmJiBgXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBgfVxuXG5gXG5leHBvcnQgY29uc3QgQ2FwdGlvbiA9IHN0eWxlZC5wYFxuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IENvbG9yW3Byb3BzLmNvbG9yXX07XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6ICdyZWd1bGFyJztcblxuICAgICR7KHthbGlnbkNlbnRlcn0pID0+IGFsaWduQ2VudGVyICYmIGBcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGB9XG5cbmBcbiJdfQ==