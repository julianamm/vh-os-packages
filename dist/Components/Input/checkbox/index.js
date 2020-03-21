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

var _multi = _interopRequireDefault(require("./multi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHInputCheckbox = function VHInputCheckbox(props) {
  var _useState = (0, _react.useState)(props.checked),
      _useState2 = _slicedToArray(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  _react.default.useEffect(function () {
    setChecked(props.checked);
  }, [props.checked]);

  if (props.multi) {
    return /*#__PURE__*/_react.default.createElement(_multi.default, props);
  }

  return /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true,
    className: "vh-checkbox ".concat(props.className ? props.className : '')
  }, /*#__PURE__*/_react.default.createElement(S.Wrapper, null, /*#__PURE__*/_react.default.createElement(S.Input, {
    name: props.name,
    id: props.id,
    checked: checked,
    disabled: props.disabled,
    type: "checkbox",
    onClick: function onClick() {
      setChecked(!checked), props.onEvent({
        type: "OnClick",
        origin: "VHCheckbox",
        props: {
          data: props.data,
          checked: !checked
        }
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_Text.default, {
    htmlFor: "squaredOne",
    variant: props.variant,
    color: props.color,
    text: props.title
  }));
};

VHInputCheckbox.defaultProps = {
  title: "",
  color: "gray-100",
  variant: "platform1",
  onEvent: null,
  data: null,
  checked: null,
  disabled: null,
  className: ''
};
VHInputCheckbox.propTypes = {
  title: _propTypes.default.string,
  color: _propTypes.default.string,
  variant: _propTypes.default.string,
  onEvent: _propTypes.default.func.isRequired,
  data: _propTypes.default.string,
  checked: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  className: _propTypes.default.string
};
var _default = VHInputCheckbox;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvSW5wdXQvY2hlY2tib3gvaW5kZXguanN4Il0sIm5hbWVzIjpbIlZISW5wdXRDaGVja2JveCIsInByb3BzIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJSZWFjdCIsInVzZUVmZmVjdCIsIm11bHRpIiwiY2xhc3NOYW1lIiwibmFtZSIsImlkIiwiZGlzYWJsZWQiLCJvbkV2ZW50IiwidHlwZSIsIm9yaWdpbiIsImRhdGEiLCJ2YXJpYW50IiwiY29sb3IiLCJ0aXRsZSIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxLQUFLLEVBQUk7QUFBQSxrQkFDRCxxQkFBU0EsS0FBSyxDQUFDQyxPQUFmLENBREM7QUFBQTtBQUFBLE1BQ3hCQSxPQUR3QjtBQUFBLE1BQ2ZDLFVBRGU7O0FBRy9CQyxpQkFBTUMsU0FBTixDQUFnQixZQUFNO0FBQ3BCRixJQUFBQSxVQUFVLENBQUNGLEtBQUssQ0FBQ0MsT0FBUCxDQUFWO0FBQ0gsR0FGQyxFQUVDLENBQUNELEtBQUssQ0FBQ0MsT0FBUCxDQUZEOztBQUlBLE1BQUdELEtBQUssQ0FBQ0ssS0FBVCxFQUFnQjtBQUNkLHdCQUFPLDZCQUFDLGNBQUQsRUFBMEJMLEtBQTFCLENBQVA7QUFDRDs7QUFFRCxzQkFDRSw2QkFBQyxTQUFEO0FBQUssSUFBQSxHQUFHLE1BQVI7QUFBUyxJQUFBLGdCQUFnQixNQUF6QjtBQUEwQixJQUFBLFNBQVMsd0JBQWlCQSxLQUFLLENBQUNNLFNBQU4sR0FBa0JOLEtBQUssQ0FBQ00sU0FBeEIsR0FBb0MsRUFBckQ7QUFBbkMsa0JBQ0UsNkJBQUMsQ0FBRCxDQUFHLE9BQUgscUJBQ0UsNkJBQUMsQ0FBRCxDQUFHLEtBQUg7QUFDRSxJQUFBLElBQUksRUFBRU4sS0FBSyxDQUFDTyxJQURkO0FBRUUsSUFBQSxFQUFFLEVBQUVQLEtBQUssQ0FBQ1EsRUFGWjtBQUdFLElBQUEsT0FBTyxFQUFFUCxPQUhYO0FBSUUsSUFBQSxRQUFRLEVBQUVELEtBQUssQ0FBQ1MsUUFKbEI7QUFLRSxJQUFBLElBQUksRUFBQyxVQUxQO0FBTUUsSUFBQSxPQUFPLEVBQUUsbUJBQU07QUFDYlAsTUFBQUEsVUFBVSxDQUFDLENBQUNELE9BQUYsQ0FBVixFQUNBRCxLQUFLLENBQUNVLE9BQU4sQ0FBYztBQUNaQyxRQUFBQSxJQUFJLEVBQUUsU0FETTtBQUVaQyxRQUFBQSxNQUFNLEVBQUUsWUFGSTtBQUdaWixRQUFBQSxLQUFLLEVBQUU7QUFDTGEsVUFBQUEsSUFBSSxFQUFFYixLQUFLLENBQUNhLElBRFA7QUFFTFosVUFBQUEsT0FBTyxFQUFFLENBQUNBO0FBRkw7QUFISyxPQUFkLENBREE7QUFTSDtBQWhCRCxJQURGLENBREYsZUFvQkUsNkJBQUMsYUFBRDtBQUFRLElBQUEsT0FBTyxFQUFDLFlBQWhCO0FBQTZCLElBQUEsT0FBTyxFQUFFRCxLQUFLLENBQUNjLE9BQTVDO0FBQXFELElBQUEsS0FBSyxFQUFFZCxLQUFLLENBQUNlLEtBQWxFO0FBQXlFLElBQUEsSUFBSSxFQUFFZixLQUFLLENBQUNnQjtBQUFyRixJQXBCRixDQURGO0FBd0JELENBbkNEOztBQXFDQWpCLGVBQWUsQ0FBQ2tCLFlBQWhCLEdBQStCO0FBQzdCRCxFQUFBQSxLQUFLLEVBQUUsRUFEc0I7QUFFN0JELEVBQUFBLEtBQUssRUFBRSxVQUZzQjtBQUc3QkQsRUFBQUEsT0FBTyxFQUFFLFdBSG9CO0FBSTdCSixFQUFBQSxPQUFPLEVBQUUsSUFKb0I7QUFLN0JHLEVBQUFBLElBQUksRUFBRSxJQUx1QjtBQU03QlosRUFBQUEsT0FBTyxFQUFHLElBTm1CO0FBTzdCUSxFQUFBQSxRQUFRLEVBQUUsSUFQbUI7QUFRN0JILEVBQUFBLFNBQVMsRUFBRTtBQVJrQixDQUEvQjtBQVdBUCxlQUFlLENBQUNtQixTQUFoQixHQUE0QjtBQUMxQkYsRUFBQUEsS0FBSyxFQUFFRyxtQkFBVUMsTUFEUztBQUUxQkwsRUFBQUEsS0FBSyxFQUFFSSxtQkFBVUMsTUFGUztBQUcxQk4sRUFBQUEsT0FBTyxFQUFFSyxtQkFBVUMsTUFITztBQUkxQlYsRUFBQUEsT0FBTyxFQUFFUyxtQkFBVUUsSUFBVixDQUFlQyxVQUpFO0FBSzFCVCxFQUFBQSxJQUFJLEVBQUVNLG1CQUFVQyxNQUxVO0FBTTFCbkIsRUFBQUEsT0FBTyxFQUFHa0IsbUJBQVVJLElBTk07QUFPMUJkLEVBQUFBLFFBQVEsRUFBRVUsbUJBQVVJLElBUE07QUFRMUJqQixFQUFBQSxTQUFTLEVBQUVhLG1CQUFVQztBQVJLLENBQTVCO2VBV2VyQixlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgKiBhcyBTIGZyb20gXCIuL3N0eWxlc1wiXG5pbXBvcnQgVkhUZXh0IGZyb20gJy4uLy4uL1RleHQnXG5pbXBvcnQgeyBSb3cgfSBmcm9tICcuLi8uLi8uLi9HcmlkJ1xuaW1wb3J0IFZISW5wdXRDaGVja2JveE11bHRpIGZyb20gJy4vbXVsdGknXG5cbmNvbnN0IFZISW5wdXRDaGVja2JveCA9IHByb3BzID0+IHtcbiAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gdXNlU3RhdGUocHJvcHMuY2hlY2tlZClcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldENoZWNrZWQocHJvcHMuY2hlY2tlZCk7XG59LCBbcHJvcHMuY2hlY2tlZF0pXG5cbiAgaWYocHJvcHMubXVsdGkpIHtcbiAgICByZXR1cm4gPFZISW5wdXRDaGVja2JveE11bHRpIHsuLi5wcm9wc30vPlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Um93IHJvdyBhbGlnbkl0ZW1zQ2VudGVyIGNsYXNzTmFtZT17YHZoLWNoZWNrYm94ICR7cHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogJyd9YH0gPlxuICAgICAgPFMuV3JhcHBlcj5cbiAgICAgICAgPFMuSW5wdXRcbiAgICAgICAgICBuYW1lPXtwcm9wcy5uYW1lfVxuICAgICAgICAgIGlkPXtwcm9wcy5pZH1cbiAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgIGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNldENoZWNrZWQoIWNoZWNrZWQpLFxuICAgICAgICAgICAgcHJvcHMub25FdmVudCh7XG4gICAgICAgICAgICAgIHR5cGU6IFwiT25DbGlja1wiLFxuICAgICAgICAgICAgICBvcmlnaW46IFwiVkhDaGVja2JveFwiLFxuICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgIGRhdGE6IHByb3BzLmRhdGEsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogIWNoZWNrZWRcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH19Lz5cbiAgICAgIDwvUy5XcmFwcGVyPlxuICAgICAgPFZIVGV4dCBodG1sRm9yPVwic3F1YXJlZE9uZVwiIHZhcmlhbnQ9e3Byb3BzLnZhcmlhbnR9IGNvbG9yPXtwcm9wcy5jb2xvcn0gdGV4dD17cHJvcHMudGl0bGV9Lz5cbiAgICA8L1Jvdz5cbiAgKVxufVxuXG5WSElucHV0Q2hlY2tib3guZGVmYXVsdFByb3BzID0ge1xuICB0aXRsZTogXCJcIixcbiAgY29sb3I6IFwiZ3JheS0xMDBcIixcbiAgdmFyaWFudDogXCJwbGF0Zm9ybTFcIixcbiAgb25FdmVudDogbnVsbCxcbiAgZGF0YTogbnVsbCxcbiAgY2hlY2tlZFx0OiBudWxsLFxuICBkaXNhYmxlZDogbnVsbCxcbiAgY2xhc3NOYW1lOiAnJyxcbn1cblxuVkhJbnB1dENoZWNrYm94LnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YXJpYW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkV2ZW50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBkYXRhOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGVja2VkXHQ6IFByb3BUeXBlcy5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgVkhJbnB1dENoZWNrYm94XG4iXX0=