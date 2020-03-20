"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var S = _interopRequireWildcard(require("./styles"));

var _Text = _interopRequireDefault(require("../../Text"));

var _Grid = require("../../../Grid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHInputRadio = function VHInputRadio(props) {
  var _useState = (0, _react.useState)(props.checked),
      _useState2 = _slicedToArray(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  _react.default.useEffect(function () {
    setChecked(props.checked);
  }, [props.checked]);

  return _react.default.createElement(_Grid.Row, {
    column: true,
    alignItemsLeft: true,
    className: "vh-radio ".concat(props.className ? props.className : '')
  }, _react.default.createElement(_Grid.Row, {
    marginBottom5: true
  }, _react.default.createElement(_Text.default, {
    variant: props.variant,
    color: props.color,
    text: props.text
  })), _react.default.createElement(S.Wrapper, null, _react.default.createElement(S.Input, {
    name: props.text,
    id: 'Yes',
    checked: checked,
    disabled: props.disabled,
    type: "radio",
    onClick: function onClick() {
      setChecked(true), props.onEvent({
        type: "OnClick",
        origin: "VHInputRadio",
        props: {
          data: props.data,
          checked: checked
        }
      });
    }
  }), _react.default.createElement(S.Label, {
    for: props.text
  }, 'Yes'), _react.default.createElement(S.Input, {
    name: props.text,
    id: "No",
    checked: !checked,
    disabled: props.disabled,
    type: "radio",
    onClick: function onClick() {
      setChecked(false), props.onEvent({
        type: "OnClick",
        origin: "VHInputRadio",
        props: {
          data: props.data,
          checked: checked
        }
      });
    }
  }), _react.default.createElement(S.Label, {
    for: props.text
  }, 'No')));
};

VHInputRadio.defaultProps = {
  title: "",
  color: "gray-100",
  variant: "platform1",
  onEvent: null,
  data: null,
  checked: null,
  disabled: null,
  className: ''
};
VHInputRadio.propTypes = {
  title: _propTypes.default.string,
  color: _propTypes.default.string,
  variant: _propTypes.default.string,
  onEvent: _propTypes.default.func.isRequired,
  data: _propTypes.default.string,
  checked: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  className: _propTypes.default.string
};
var _default = VHInputRadio;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvSW5wdXQvcmFkaW8vaW5kZXguanN4Il0sIm5hbWVzIjpbIlZISW5wdXRSYWRpbyIsInByb3BzIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJSZWFjdCIsInVzZUVmZmVjdCIsImNsYXNzTmFtZSIsInZhcmlhbnQiLCJjb2xvciIsInRleHQiLCJkaXNhYmxlZCIsIm9uRXZlbnQiLCJ0eXBlIiwib3JpZ2luIiwiZGF0YSIsImRlZmF1bHRQcm9wcyIsInRpdGxlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFDLEtBQUssRUFBSTtBQUFBLGtCQUNJLHFCQUFTQSxLQUFLLENBQUNDLE9BQWYsQ0FESjtBQUFBO0FBQUEsTUFDbkJBLE9BRG1CO0FBQUEsTUFDVkMsVUFEVTs7QUFHMUJDLGlCQUFNQyxTQUFOLENBQWdCLFlBQU07QUFDbEJGLElBQUFBLFVBQVUsQ0FBQ0YsS0FBSyxDQUFDQyxPQUFQLENBQVY7QUFDSCxHQUZELEVBRUcsQ0FBQ0QsS0FBSyxDQUFDQyxPQUFQLENBRkg7O0FBS0EsU0FDSSw2QkFBQyxTQUFEO0FBQUssSUFBQSxNQUFNLE1BQVg7QUFBWSxJQUFBLGNBQWMsTUFBMUI7QUFBMkIsSUFBQSxTQUFTLHFCQUFjRCxLQUFLLENBQUNLLFNBQU4sR0FBa0JMLEtBQUssQ0FBQ0ssU0FBeEIsR0FBb0MsRUFBbEQ7QUFBcEMsS0FDSSw2QkFBQyxTQUFEO0FBQUssSUFBQSxhQUFhO0FBQWxCLEtBQ0ksNkJBQUMsYUFBRDtBQUFRLElBQUEsT0FBTyxFQUFFTCxLQUFLLENBQUNNLE9BQXZCO0FBQWdDLElBQUEsS0FBSyxFQUFFTixLQUFLLENBQUNPLEtB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ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0ICogYXMgUyBmcm9tIFwiLi9zdHlsZXNcIlxuaW1wb3J0IFZIVGV4dCBmcm9tICcuLi8uLi9UZXh0J1xuaW1wb3J0IHsgUm93IH0gZnJvbSAnLi4vLi4vLi4vR3JpZCdcblxuY29uc3QgVkhJbnB1dFJhZGlvID0gcHJvcHMgPT4ge1xuICAgIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlKHByb3BzLmNoZWNrZWQpXG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRDaGVja2VkKHByb3BzLmNoZWNrZWQpO1xuICAgIH0sIFtwcm9wcy5jaGVja2VkXSlcblxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxSb3cgY29sdW1uIGFsaWduSXRlbXNMZWZ0IGNsYXNzTmFtZT17YHZoLXJhZGlvICR7cHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogJyd9YH0gPlxuICAgICAgICAgICAgPFJvdyBtYXJnaW5Cb3R0b201PlxuICAgICAgICAgICAgICAgIDxWSFRleHQgdmFyaWFudD17cHJvcHMudmFyaWFudH0gY29sb3I9e3Byb3BzLmNvbG9yfSB0ZXh0PXtwcm9wcy50ZXh0fSAvPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8Uy5XcmFwcGVyPlxuICAgICAgICAgICAgICAgIDxTLklucHV0XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e3Byb3BzLnRleHR9XG4gICAgICAgICAgICAgICAgICAgIGlkPXsnWWVzJ31cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDaGVja2VkKHRydWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm9uRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIk9uQ2xpY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luOiBcIlZISW5wdXRSYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcHJvcHMuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGNoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Uy5MYWJlbCBmb3I9e3Byb3BzLnRleHR9PnsnWWVzJ308L1MuTGFiZWw+XG4gICAgICAgICAgICAgICAgPFMuSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17cHJvcHMudGV4dH1cbiAgICAgICAgICAgICAgICAgICAgaWQ9e1wiTm9cIn1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17IWNoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2hlY2tlZChmYWxzZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMub25FdmVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiT25DbGlja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW46IFwiVkhJbnB1dFJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBwcm9wcy5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogY2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTLkxhYmVsIGZvcj17cHJvcHMudGV4dH0+eydObyd9PC9TLkxhYmVsPlxuICAgICAgICAgICAgPC9TLldyYXBwZXI+XG4gICAgICAgIDwvUm93PlxuICAgIClcbn1cblxuVkhJbnB1dFJhZGlvLmRlZmF1bHRQcm9wcyA9IHtcbiAgICB0aXRsZTogXCJcIixcbiAgICBjb2xvcjogXCJncmF5LTEwMFwiLFxuICAgIHZhcmlhbnQ6IFwicGxhdGZvcm0xXCIsXG4gICAgb25FdmVudDogbnVsbCxcbiAgICBkYXRhOiBudWxsLFxuICAgIGNoZWNrZWQ6IG51bGwsXG4gICAgZGlzYWJsZWQ6IG51bGwsXG4gICAgY2xhc3NOYW1lOiAnJyxcbn1cblxuVkhJbnB1dFJhZGlvLnByb3BUeXBlcyA9IHtcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2YXJpYW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uRXZlbnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgZGF0YTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufVxuXG5leHBvcnQgZGVmYXVsdCBWSElucHV0UmFkaW9cbiJdfQ==