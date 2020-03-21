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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHInputRadio = function VHInputRadio(props) {
  var _useState = (0, _react.useState)(props.checked),
      _useState2 = _slicedToArray(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  _react.default.useEffect(function () {
    setChecked(props.checked);
  }, [props.checked]);

  return /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    column: true,
    alignItemsLeft: true,
    className: "vh-radio ".concat(props.className ? props.className : '')
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom5: true
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    variant: props.variant,
    color: props.color,
    text: props.text
  })), /*#__PURE__*/_react.default.createElement(S.Wrapper, null, /*#__PURE__*/_react.default.createElement(S.Input, {
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
  }), /*#__PURE__*/_react.default.createElement(S.Label, {
    for: props.text
  }, 'Yes'), /*#__PURE__*/_react.default.createElement(S.Input, {
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
  }), /*#__PURE__*/_react.default.createElement(S.Label, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvSW5wdXQvcmFkaW8vaW5kZXguanN4Il0sIm5hbWVzIjpbIlZISW5wdXRSYWRpbyIsInByb3BzIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJSZWFjdCIsInVzZUVmZmVjdCIsImNsYXNzTmFtZSIsInZhcmlhbnQiLCJjb2xvciIsInRleHQiLCJkaXNhYmxlZCIsIm9uRXZlbnQiLCJ0eXBlIiwib3JpZ2luIiwiZGF0YSIsImRlZmF1bHRQcm9wcyIsInRpdGxlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxLQUFLLEVBQUk7QUFBQSxrQkFDSSxxQkFBU0EsS0FBSyxDQUFDQyxPQUFmLENBREo7QUFBQTtBQUFBLE1BQ25CQSxPQURtQjtBQUFBLE1BQ1ZDLFVBRFU7O0FBRzFCQyxpQkFBTUMsU0FBTixDQUFnQixZQUFNO0FBQ2xCRixJQUFBQSxVQUFVLENBQUNGLEtBQUssQ0FBQ0MsT0FBUCxDQUFWO0FBQ0gsR0FGRCxFQUVHLENBQUNELEtBQUssQ0FBQ0MsT0FBUCxDQUZIOztBQUtBLHNCQUNJLDZCQUFDLFNBQUQ7QUFBSyxJQUFBLE1BQU0sTUFBWDtBQUFZLElBQUEsY0FBYyxNQUExQjtBQUEyQixJQUFBLFNBQVMscUJBQWNELEtBQUssQ0FBQ0ssU0FBTixHQUFrQkwsS0FBSyxDQUFDSyxTQUF4QixHQUFvQyxFQUFsRDtBQUFwQyxrQkFDSSw2QkFBQyxTQUFEO0FBQUssSUFBQSxhQUFhO0FBQWxCLGtCQUNJLDZCQUFDLGFBQUQ7QUFBUSxJQUFBLE9BQU8sRUFBRUwsS0FBSyxDQUFDTSxPQUF2QjtBQUFnQyxJQUFBLEtBQUssRUFBRU4sS0FBSyxD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IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgKiBhcyBTIGZyb20gXCIuL3N0eWxlc1wiXG5pbXBvcnQgVkhUZXh0IGZyb20gJy4uLy4uL1RleHQnXG5pbXBvcnQgeyBSb3cgfSBmcm9tICcuLi8uLi8uLi9HcmlkJ1xuXG5jb25zdCBWSElucHV0UmFkaW8gPSBwcm9wcyA9PiB7XG4gICAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gdXNlU3RhdGUocHJvcHMuY2hlY2tlZClcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldENoZWNrZWQocHJvcHMuY2hlY2tlZCk7XG4gICAgfSwgW3Byb3BzLmNoZWNrZWRdKVxuXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJvdyBjb2x1bW4gYWxpZ25JdGVtc0xlZnQgY2xhc3NOYW1lPXtgdmgtcmFkaW8gJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJ31gfSA+XG4gICAgICAgICAgICA8Um93IG1hcmdpbkJvdHRvbTU+XG4gICAgICAgICAgICAgICAgPFZIVGV4dCB2YXJpYW50PXtwcm9wcy52YXJpYW50fSBjb2xvcj17cHJvcHMuY29sb3J9IHRleHQ9e3Byb3BzLnRleHR9IC8+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxTLldyYXBwZXI+XG4gICAgICAgICAgICAgICAgPFMuSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17cHJvcHMudGV4dH1cbiAgICAgICAgICAgICAgICAgICAgaWQ9eydZZXMnfVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENoZWNrZWQodHJ1ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMub25FdmVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiT25DbGlja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW46IFwiVkhJbnB1dFJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBwcm9wcy5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogY2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTLkxhYmVsIGZvcj17cHJvcHMudGV4dH0+eydZZXMnfTwvUy5MYWJlbD5cbiAgICAgICAgICAgICAgICA8Uy5JbnB1dFxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtwcm9wcy50ZXh0fVxuICAgICAgICAgICAgICAgICAgICBpZD17XCJOb1wifVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXshY2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDaGVja2VkKGZhbHNlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbkV2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJPbkNsaWNrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbjogXCJWSElucHV0UmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHByb3BzLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBjaGVja2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFMuTGFiZWwgZm9yPXtwcm9wcy50ZXh0fT57J05vJ308L1MuTGFiZWw+XG4gICAgICAgICAgICA8L1MuV3JhcHBlcj5cbiAgICAgICAgPC9Sb3c+XG4gICAgKVxufVxuXG5WSElucHV0UmFkaW8uZGVmYXVsdFByb3BzID0ge1xuICAgIHRpdGxlOiBcIlwiLFxuICAgIGNvbG9yOiBcImdyYXktMTAwXCIsXG4gICAgdmFyaWFudDogXCJwbGF0Zm9ybTFcIixcbiAgICBvbkV2ZW50OiBudWxsLFxuICAgIGRhdGE6IG51bGwsXG4gICAgY2hlY2tlZDogbnVsbCxcbiAgICBkaXNhYmxlZDogbnVsbCxcbiAgICBjbGFzc05hbWU6ICcnLFxufVxuXG5WSElucHV0UmFkaW8ucHJvcFR5cGVzID0ge1xuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZhcmlhbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25FdmVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBkYXRhOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZISW5wdXRSYWRpb1xuIl19