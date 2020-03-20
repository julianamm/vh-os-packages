"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = exports.Bottom = exports.Top = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    border-radius: ", ";\n    padding: 24px;\n    position: relative;\n    box-sizing: border-box;\n    border-top: ", ";\n\n    :hover {\n        box-shadow: ", ";\n    }\n\n    ", "\n\n    ", "\n    ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 50%;\n    left: 0;\n    width: 100%;\n    background: blue;\n    height: 50%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 50%;\n    background: red;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Top = _styledComponents.default.span(_templateObject());

exports.Top = Top;

var Bottom = _styledComponents.default.span(_templateObject2());

exports.Bottom = Bottom;

var Card = _styledComponents.default.div(_templateObject3(), _Colors.default["gray-20"], function (props) {
  return props.noBorder ? "0" : "6px";
}, function (props) {
  return props.favorite ? "3px solid ".concat(_Colors.default["yellow-dark"]) : 'none';
}, function (props) {
  return !props.noHover && "0 4px 14px 0 rgba(0, 0, 0, 0.1)";
}, function (_ref) {
  var noPadding = _ref.noPadding;
  return noPadding && "\n        padding: 0;\n    ";
}, function (_ref2) {
  var width = _ref2.width;
  return width && "\n        width: ".concat(width, ";\n    ");
}, function (_ref3) {
  var height = _ref3.height;
  return height && "\n        height: ".concat(height, ";\n    ");
});

exports.Card = Card;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQ2FyZHMvQmFzZS9zdHlsZXMuanMiXSwibmFtZXMiOlsiVG9wIiwic3R5bGVkIiwic3BhbiIsIkJvdHRvbSIsIkNhcmQiLCJkaXYiLCJDb2xvciIsInByb3BzIiwibm9Cb3JkZXIiLCJmYXZvcml0ZSIsIm5vSG92ZXIiLCJub1BhZGRpbmciLCJ3aWR0aCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxHQUFHLEdBQUdDLDBCQUFPQyxJQUFWLG1CQUFUOzs7O0FBUUEsSUFBTUMsTUFBTSxHQUFHRiwwQkFBT0MsSUFBVixvQkFBWjs7OztBQVFBLElBQU1FLElBQUksR0FBR0gsMEJBQU9JLEdBQVYscUJBQ09DLGdCQUFNLFNBQU4sQ0FEUCxFQUVJLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLFFBQU4sR0FBaUIsR0FBakIsR0FBc0IsS0FBMUI7QUFBQSxDQUZULEVBTUMsVUFBQUQsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0UsUUFBTix1QkFBOEJILGdCQUFNLGFBQU4sQ0FBOUIsSUFBdUQsTUFBM0Q7QUFBQSxDQU5OLEVBU0ssVUFBQUMsS0FBSztBQUFBLFNBQUksQ0FBQ0EsS0FBSyxDQUFDRyxPQUFQLHFDQUFKO0FBQUEsQ0FUVixFQVlYO0FBQUEsTUFBR0MsU0FBSCxRQUFHQSxTQUFIO0FBQUEsU0FBbUJBLFNBQVMsaUNBQTVCO0FBQUEsQ0FaVyxFQWdCWDtBQUFBLE1BQUdDLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssK0JBQ1RBLEtBRFMsWUFBcEI7QUFBQSxDQWhCVyxFQW1CWDtBQUFBLE1BQUdDLE1BQUgsU0FBR0EsTUFBSDtBQUFBLFNBQWdCQSxNQUFNLGdDQUNWQSxNQURVLFlBQXRCO0FBQUEsQ0FuQlcsQ0FBViIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgQ29sb3IgZnJvbSBcIi4uLy4uLy4uL0NvbG9yc1wiO1xuXG5leHBvcnQgY29uc3QgVG9wID0gc3R5bGVkLnNwYW5gXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTAlO1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbmBcbmV4cG9ydCBjb25zdCBCb3R0b20gPSBzdHlsZWQuc3BhbmBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xuICAgIGhlaWdodDogNTAlO1xuYFxuZXhwb3J0IGNvbnN0IENhcmQgPSBzdHlsZWQuZGl2YFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Q29sb3JbXCJncmF5LTIwXCJdfTtcbiAgICBib3JkZXItcmFkaXVzOiAke3Byb3BzID0+IHByb3BzLm5vQm9yZGVyID8gXCIwXCI6IFwiNnB4XCJ9O1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXRvcDogJHtwcm9wcyA9PiBwcm9wcy5mYXZvcml0ZSA/IGAzcHggc29saWQgJHtDb2xvcltcInllbGxvdy1kYXJrXCJdfWAgOiAnbm9uZSd9O1xuXG4gICAgOmhvdmVyIHtcbiAgICAgICAgYm94LXNoYWRvdzogJHtwcm9wcyA9PiAhcHJvcHMubm9Ib3ZlciAmJiBgMCA0cHggMTRweCAwIHJnYmEoMCwgMCwgMCwgMC4xKWB9O1xuICAgIH1cblxuICAgICR7KHsgbm9QYWRkaW5nIH0pID0+IG5vUGFkZGluZyAmJmBcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICBgfVxuXG4gICAgJHsoeyB3aWR0aCB9KSA9PiB3aWR0aCAmJmBcbiAgICAgICAgd2lkdGg6ICR7d2lkdGh9O1xuICAgIGB9XG4gICAgJHsoeyBoZWlnaHQgfSkgPT4gaGVpZ2h0ICYmYFxuICAgICAgICBoZWlnaHQ6ICR7aGVpZ2h0fTtcbiAgICBgfVxuYFxuXG4iXX0=