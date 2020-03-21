"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Row = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n    flex-direction: column;\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    width: 96%;\n\n\n    @media only screen and (max-width: 768px) {\n        width: 93%;\n    }\n\n    padding: 0;\n    margin: 0 auto;\n    flex-direction: column;\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n    ", "\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject(), function (_ref) {
  var cover = _ref.cover;
  return cover && "\n        background-image: url(".concat(cover, ");\n        background-repeat: no-repeat;\n        background-attachment: fixed;\n        background-size: cover;\n    ");
}, function (_ref2) {
  var md = _ref2.md;
  return md && "\n        max-width: 980px;\n    ";
}, function (_ref3) {
  var lg = _ref3.lg;
  return lg && "\n        max-width: 1200px;\n    ";
}, function (_ref4) {
  var sm = _ref4.sm;
  return sm && "\n        max-width: 330px;\n    ";
}, function (_ref5) {
  var alignItemsCenter = _ref5.alignItemsCenter;
  return alignItemsCenter && "\n        align-items: center;\n    ";
}, function (_ref6) {
  var fullHeight = _ref6.fullHeight;
  return fullHeight && "\n        height: 100vh;\n    ";
}, function (_ref7) {
  var justifyCenter = _ref7.justifyCenter;
  return justifyCenter && "\n        justify-content: center;\n    ";
}, function (_ref8) {
  var fullWidth = _ref8.fullWidth;
  return fullWidth && "\n        width: 100% !important;\n    ";
}, function (_ref9) {
  var fixed = _ref9.fixed;
  return fixed && "\n        position: fixed;\n    ";
});

exports.Container = Container;

var Row = _styledComponents.default.div(_templateObject2(), function (_ref10) {
  var row = _ref10.row;
  return row && "\n        flex-direction: row;\n    ";
}, function (_ref11) {
  var column = _ref11.column;
  return column && "\n        flex-direction: column;\n    ";
}, function (_ref12) {
  var justifySpaceAround = _ref12.justifySpaceAround;
  return justifySpaceAround && "\n        justify-content: space-around;\n    ";
}, function (_ref13) {
  var justifySpaceBetween = _ref13.justifySpaceBetween;
  return justifySpaceBetween && "\n        justify-content: space-between;\n    ";
}, function (_ref14) {
  var justifyBottom = _ref14.justifyBottom;
  return justifyBottom && "\n        justify-content: flex-end;\n    ";
}, function (_ref15) {
  var alignItemsRight = _ref15.alignItemsRight;
  return alignItemsRight && "\n        align-items: flex-end;\n    ";
}, function (_ref16) {
  var alignItemsLeft = _ref16.alignItemsLeft;
  return alignItemsLeft && "\n        align-items: flex-start;\n    ";
}, function (_ref17) {
  var alignItemsCenter = _ref17.alignItemsCenter;
  return alignItemsCenter && "\n        align-items: center;\n    ";
}, function (_ref18) {
  var responsive = _ref18.responsive;
  return responsive && "\n        @media only screen and (max-width: 768px) {\n            flex-direction: column;\n        }\n    ";
}, function (_ref19) {
  var autoWidth = _ref19.autoWidth;
  return autoWidth && "\n       width: auto;\n    ";
}, function (_ref20) {
  var paddingRight8 = _ref20.paddingRight8;
  return paddingRight8 && "\n       padding-right: 24px;\n    ";
}, function (_ref21) {
  var paddingRight2 = _ref21.paddingRight2;
  return paddingRight2 && "\n       padding-right: 6px;\n    ";
}, function (_ref22) {
  var margin = _ref22.margin;
  return margin && "\n       margin: 3px 0;\n    ";
}, function (_ref23) {
  var marginBottom3 = _ref23.marginBottom3;
  return marginBottom3 && "\n       margin-bottom: 9px;\n    ";
}, function (_ref24) {
  var marginBottom4 = _ref24.marginBottom4;
  return marginBottom4 && "\n       margin-bottom: 12px;\n    ";
}, function (_ref25) {
  var marginBottom5 = _ref25.marginBottom5;
  return marginBottom5 && "\n       margin-bottom: 15px;\n    ";
}, function (_ref26) {
  var marginBottom = _ref26.marginBottom;
  return marginBottom && "\n       margin-bottom: ".concat(marginBottom * 3, "px;\n    ");
}, function (_ref27) {
  var marginTop = _ref27.marginTop;
  return marginTop && "\n       margin-top: ".concat(marginTop, "px;\n    ");
}, function (_ref28) {
  var height = _ref28.height;
  return height && "\n       height: ".concat(height, "px;\n    ");
}, function (_ref29) {
  var overflowY = _ref29.overflowY;
  return overflowY && "\n       overflow-y: ".concat(overflowY, ";\n    ");
}, function (_ref30) {
  var width = _ref30.width;
  return width && "\n       width: ".concat(width, ";\n    ");
}, function (_ref31) {
  var fixed = _ref31.fixed;
  return fixed && "\n       position: fixed;\n    ";
});

exports.Row = Row;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3BhY2thZ2VzL0dyaWQvaW5kZXguanN4Il0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsImNvdmVyIiwibWQiLCJsZyIsInNtIiwiYWxpZ25JdGVtc0NlbnRlciIsImZ1bGxIZWlnaHQiLCJqdXN0aWZ5Q2VudGVyIiwiZnVsbFdpZHRoIiwiZml4ZWQiLCJSb3ciLCJyb3ciLCJjb2x1bW4iLCJqdXN0aWZ5U3BhY2VBcm91bmQiLCJqdXN0aWZ5U3BhY2VCZXR3ZWVuIiwianVzdGlmeUJvdHRvbSIsImFsaWduSXRlbXNSaWdodCIsImFsaWduSXRlbXNMZWZ0IiwicmVzcG9uc2l2ZSIsImF1dG9XaWR0aCIsInBhZGRpbmdSaWdodDgiLCJwYWRkaW5nUmlnaHQyIiwibWFyZ2luIiwibWFyZ2luQm90dG9tMyIsIm1hcmdpbkJvdHRvbTQiLCJtYXJnaW5Cb3R0b201IiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiaGVpZ2h0Iiwib3ZlcmZsb3dZIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxTQUFTLEdBQUdDLDBCQUFPQyxHQUFWLG9CQWFoQjtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssOENBQ01BLEtBRE4sNEhBQXBCO0FBQUEsQ0FiZ0IsRUFvQmhCO0FBQUEsTUFBR0MsRUFBSCxTQUFHQSxFQUFIO0FBQUEsU0FBWUEsRUFBRSx1Q0FBZDtBQUFBLENBcEJnQixFQXdCaEI7QUFBQSxNQUFHQyxFQUFILFNBQUdBLEVBQUg7QUFBQSxTQUFZQSxFQUFFLHdDQUFkO0FBQUEsQ0F4QmdCLEVBNEJoQjtBQUFBLE1BQUdDLEVBQUgsU0FBR0EsRUFBSDtBQUFBLFNBQVlBLEVBQUUsdUNBQWQ7QUFBQSxDQTVCZ0IsRUErQmhCO0FBQUEsTUFBR0MsZ0JBQUgsU0FBR0EsZ0JBQUg7QUFBQSxTQUEwQkEsZ0JBQWdCLDBDQUExQztB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QUssOEJBQ1ZBLEtBRFUsWUFBcEI7QUFBQSxDQXhGVSxFQTRGVjtBQUFBLE1BQUdyQixLQUFILFVBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLHFDQUFwQjtBQUFBLENBNUZVLENBQVQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA5NiU7XG5cblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgd2lkdGg6IDkzJTtcbiAgICB9XG5cbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAkeyh7IGNvdmVyIH0pID0+IGNvdmVyICYmIGBcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7Y292ZXJ9KTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBgfVxuXG4gICAgJHsoeyBtZCB9KSA9PiBtZCAmJiBgXG4gICAgICAgIG1heC13aWR0aDogOTgwcHg7XG4gICAgYH1cblxuICAgICR7KHsgbGcgfSkgPT4gbGcgJiYgYFxuICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICBgfVxuXG4gICAgJHsoeyBzbSB9KSA9PiBzbSAmJiBgXG4gICAgICAgIG1heC13aWR0aDogMzMwcHg7XG4gICAgYH1cbiAgICAkeyh7IGFsaWduSXRlbXNDZW50ZXIgfSkgPT4gYWxpZ25JdGVtc0NlbnRlciAmJiBgXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYH1cbiAgICAkeyh7IGZ1bGxIZWlnaHQgfSkgPT4gZnVsbEhlaWdodCAmJiBgXG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgYH1cblxuICAgICR7KHsganVzdGlmeUNlbnRlciB9KSA9PiBqdXN0aWZ5Q2VudGVyICYmIGBcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYH1cblxuICAgICR7KHsgZnVsbFdpZHRoIH0pID0+IGZ1bGxXaWR0aCAmJiBgXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgYH1cblxuICAgICR7KHsgZml4ZWQgfSkgPT4gZml4ZWQgJiYgYFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IFJvdyA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgJHsoeyByb3cgfSkgPT4gcm93ICYmIGBcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBgfVxuXG4gICAgJHsoeyBjb2x1bW4gfSkgPT4gY29sdW1uICYmIGBcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBgfVxuXG4gICAgJHsoeyBqdXN0aWZ5U3BhY2VBcm91bmQgfSkgPT4ganVzdGlmeVNwYWNlQXJvdW5kICYmIGBcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYH1cblxuICAgICR7KHsganVzdGlmeVNwYWNlQmV0d2VlbiB9KSA9PiBqdXN0aWZ5U3BhY2VCZXR3ZWVuICYmIGBcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGB9XG5cbiAgICAkeyh7IGp1c3RpZnlCb3R0b20gfSkgPT4ganVzdGlmeUJvdHRvbSAmJiBgXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYH1cblxuICAgICR7KHsgYWxpZ25JdGVtc1JpZ2h0IH0pID0+IGFsaWduSXRlbXNSaWdodCAmJiBgXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBgfVxuXG4gICAgJHsoeyBhbGlnbkl0ZW1zTGVmdCB9KSA9PiBhbGlnbkl0ZW1zTGVmdCAmJiBgXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGB9XG5cbiAgICAkeyh7IGFsaWduSXRlbXNDZW50ZXIgfSkgPT4gYWxpZ25JdGVtc0NlbnRlciAmJiBgXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYH1cblxuICAgICR7KHsgcmVzcG9uc2l2ZSB9KSA9PiByZXNwb25zaXZlICYmIGBcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgIGB9XG5cbiAgICAkeyh7IGF1dG9XaWR0aCB9KSA9PiBhdXRvV2lkdGggJiYgYFxuICAgICAgIHdpZHRoOiBhdXRvO1xuICAgIGB9XG5cbiAgICAkeyh7IHBhZGRpbmdSaWdodDggfSkgPT4gcGFkZGluZ1JpZ2h0OCAmJiBgXG4gICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgICBgfVxuICAgICR7KHsgcGFkZGluZ1JpZ2h0MiB9KSA9PiBwYWRkaW5nUmlnaHQyICYmIGBcbiAgICAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XG4gICAgYH1cblxuICAgICR7KHsgbWFyZ2luIH0pID0+IG1hcmdpbiAmJiBgXG4gICAgICAgbWFyZ2luOiAzcHggMDtcbiAgICBgfVxuXG4gICAgJHsoeyBtYXJnaW5Cb3R0b20zIH0pID0+IG1hcmdpbkJvdHRvbTMgJiYgYFxuICAgICAgIG1hcmdpbi1ib3R0b206IDlweDtcbiAgICBgfVxuXG4gICAgJHsoeyBtYXJnaW5Cb3R0b200IH0pID0+IG1hcmdpbkJvdHRvbTQgJiYgYFxuICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgYH1cblxuICAgICR7KHsgbWFyZ2luQm90dG9tNSB9KSA9PiBtYXJnaW5Cb3R0b201ICYmIGBcbiAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGB9XG5cbiAgICAkeyh7IG1hcmdpbkJvdHRvbSB9KSA9PiBtYXJnaW5Cb3R0b20gJiYgYFxuICAgICAgIG1hcmdpbi1ib3R0b206ICR7bWFyZ2luQm90dG9tICogM31weDtcbiAgICBgfVxuXG4gICAgJHsoeyBtYXJnaW5Ub3B9KSA9PiBtYXJnaW5Ub3AgJiYgYFxuICAgICAgIG1hcmdpbi10b3A6ICR7bWFyZ2luVG9wfXB4O1xuICAgIGB9XG5cbiAgICAkeyh7IGhlaWdodCB9KSA9PiBoZWlnaHQgJiYgYFxuICAgICAgIGhlaWdodDogJHtoZWlnaHR9cHg7XG4gICAgYH1cblxuICAgICR7KHsgb3ZlcmZsb3dZIH0pID0+IG92ZXJmbG93WSAmJiBgXG4gICAgICAgb3ZlcmZsb3cteTogJHtvdmVyZmxvd1l9O1xuICAgIGB9XG5cbiAgICAkeyh7IHdpZHRoIH0pID0+IHdpZHRoICYmIGBcbiAgICAgICB3aWR0aDogJHt3aWR0aH07XG4gICAgYH1cblxuICAgICR7KHsgZml4ZWQgfSkgPT4gZml4ZWQgJiYgYFxuICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBgfVxuXG5gXG5cbiJdfQ==