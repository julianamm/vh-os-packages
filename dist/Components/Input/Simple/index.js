"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var S = _interopRequireWildcard(require("./styles"));

var _Preloader = _interopRequireDefault(require("../../Preloader"));

var _VHInput$propTypes;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHInput = function VHInput(props) {
  var _React$useState = _react.default.useState(props.value),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      handleChange = _React$useState2[1];

  var _React$useState3 = _react.default.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      inputValid = _React$useState4[0],
      setInputInvalid = _React$useState4[1];

  _react.default.useEffect(function () {
    handleChange(props.value);
  }, [props.value]);

  return /*#__PURE__*/_react.default.createElement(S.Container, null, /*#__PURE__*/_react.default.createElement(S.Input, {
    id: props.id,
    type: props.type,
    placeholder: props.placeholder,
    className: "vh-input ".concat(props.className ? props.className : ''),
    disabled: props.disabled || props.loading,
    error: props.error,
    loading: props.loading,
    autoFocus: props.autoFocus,
    value: value,
    noBorder: props.noBorder,
    onChange: function onChange(e) {
      handleChange(e.currentTarget.value);
    },
    onKeyUp: function onKeyUp(e) {
      if (e.key === "Enter") {
        props.onEvent({
          data: {
            value: value,
            data: props.data
          },
          event: "onKeyUpAction",
          origin: "VHInput"
        });
      } else {
        handleChange(e.currentTarget.value);
        props.onEvent({
          data: {
            value: e.currentTarget.value,
            data: props.data
          },
          event: "onKeyUp",
          origin: "VHInput"
        });
      }
    },
    onFocus: function onFocus() {
      props.onEvent({
        data: {
          value: value,
          data: props.data
        },
        event: "onFocus",
        origin: "VHInput"
      });
    },
    onBlur: function onBlur() {
      props.onEvent({
        data: {
          value: value,
          key: props.data
        },
        event: "onBlur",
        origin: "VHInput"
      });
    }
  }), props.loading && /*#__PURE__*/_react.default.createElement(S.LoaderContainer, null, /*#__PURE__*/_react.default.createElement(_Preloader.default, {
    type: "bubble",
    size: "xs"
  })));
};

VHInput.defaultProps = {
  type: "text",
  disabled: false,
  autoFocus: false,
  loading: false,
  className: '',
  placeholder: '',
  noBorder: false
};
VHInput.propTypes = (_VHInput$propTypes = {
  disabled: _propTypes.default.bool,
  autoFocus: _propTypes.default.bool,
  loading: _propTypes.default.bool
}, _defineProperty(_VHInput$propTypes, "autoFocus", _propTypes.default.string), _defineProperty(_VHInput$propTypes, "placeholder", _propTypes.default.string), _defineProperty(_VHInput$propTypes, "noBorder", _propTypes.default.bool), _defineProperty(_VHInput$propTypes, "type", _propTypes.default.string), _VHInput$propTypes);
var _default = VHInput;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvSW5wdXQvU2ltcGxlL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJWSElucHV0IiwicHJvcHMiLCJSZWFjdCIsInVzZVN0YXRlIiwidmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJpbnB1dFZhbGlkIiwic2V0SW5wdXRJbnZhbGlkIiwidXNlRWZmZWN0IiwiaWQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJjbGFzc05hbWUiLCJkaXNhYmxlZCIsImxvYWRpbmciLCJlcnJvciIsImF1dG9Gb2N1cyIsIm5vQm9yZGVyIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJrZXkiLCJvbkV2ZW50IiwiZGF0YSIsImV2ZW50Iiwib3JpZ2luIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUFDLEtBQUssRUFBSTtBQUFBLHdCQUNPQyxlQUFNQyxRQUFOLENBQWVGLEtBQUssQ0FBQ0csS0FBckIsQ0FEUDtBQUFBO0FBQUEsTUFDaEJBLEtBRGdCO0FBQUEsTUFDVEMsWUFEUzs7QUFBQSx5QkFFZUgsZUFBTUMsUUFBTixDQUFlLEtBQWYsQ0FGZjtBQUFBO0FBQUEsTUFFaEJHLFVBRmdCO0FBQUEsTUFFSkMsZUFGSTs7QUFJdkJMLGlCQUFNTSxTQUFOLENBQWdCLFlBQU07QUFDcEJILElBQUFBLFlBQVksQ0FBQ0osS0FBSyxDQUFDRyxLQUFQLENBQVo7QUFDSCxHQUZDLEVBRUMsQ0FBQ0gsS0FBSyxDQUFDRyxLQUFQLENBRkQ7O0FBSUEsc0JBQ0UsNkJBQUMsQ0FBRCxDQUFHLFNBQUgscUJBQ0UsNkJBQUMsQ0FBRCxDQUFHLEtBQUg7QUFDRSxJQUFBLEVBQUUsRUFBRUgsS0FBSyxDQUFDUSxFQURaO0FB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O0FBSXJCRixFQUFBQSxPQUFPLEVBQUUsS0FKWTtBQUtyQkYsRUFBQUEsU0FBUyxFQUFFLEVBTFU7QUFNckJELEVBQUFBLFdBQVcsRUFBRSxFQU5RO0FBT3JCTSxFQUFBQSxRQUFRLEVBQUU7QUFQVyxDQUF2QjtBQVVBakIsT0FBTyxDQUFDMEIsU0FBUjtBQUNFYixFQUFBQSxRQUFRLEVBQUVjLG1CQUFVQyxJQUR0QjtBQUVFWixFQUFBQSxTQUFTLEVBQUVXLG1CQUFVQyxJQUZ2QjtBQUdFZCxFQUFBQSxPQUFPLEVBQUVhLG1CQUFVQztBQUhyQixvREFJYUQsbUJBQVVFLE1BSnZCLHNEQUtlRixtQkFBVUUsTUFMekIsbURBTVlGLG1CQUFVQyxJQU50QiwrQ0FPUUQsbUJBQVVFLE1BUGxCO2VBVWU3QixPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0ICogYXMgUyBmcm9tIFwiLi9zdHlsZXNcIlxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9QcmVsb2FkZXInO1xuXG5jb25zdCBWSElucHV0ID0gcHJvcHMgPT4ge1xuICBjb25zdCBbdmFsdWUsIGhhbmRsZUNoYW5nZV0gPSBSZWFjdC51c2VTdGF0ZShwcm9wcy52YWx1ZSk7XG4gIGNvbnN0IFtpbnB1dFZhbGlkLCBzZXRJbnB1dEludmFsaWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaGFuZGxlQ2hhbmdlKHByb3BzLnZhbHVlKTtcbn0sIFtwcm9wcy52YWx1ZV0pXG5cbiAgcmV0dXJuIChcbiAgICA8Uy5Db250YWluZXI+XG4gICAgICA8Uy5JbnB1dFxuICAgICAgICBpZD17cHJvcHMuaWR9XG4gICAgICAgIHR5cGU9e3Byb3BzLnR5cGV9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlcn1cbiAgICAgICAgY2xhc3NOYW1lPXtgdmgtaW5wdXQgJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJ31gfVxuICAgICAgICBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWQgfHwgcHJvcHMubG9hZGluZ31cbiAgICAgICAgZXJyb3I9e3Byb3BzLmVycm9yfVxuICAgICAgICBsb2FkaW5nPXtwcm9wcy5sb2FkaW5nfVxuICAgICAgICBhdXRvRm9jdXM9e3Byb3BzLmF1dG9Gb2N1c31cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBub0JvcmRlcj17cHJvcHMubm9Cb3JkZXJ9XG4gICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICBoYW5kbGVDaGFuZ2UoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKVxuICAgICAgICB9fVxuICAgICAgICBvbktleVVwPXtlID0+IHtcbiAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgcHJvcHMub25FdmVudCh7XG4gICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICBkYXRhOiBwcm9wcy5kYXRhXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV2ZW50OiBcIm9uS2V5VXBBY3Rpb25cIixcbiAgICAgICAgICAgICAgb3JpZ2luOiBcIlZISW5wdXRcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlKGUuY3VycmVudFRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgIHByb3BzLm9uRXZlbnQoe1xuICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGUuY3VycmVudFRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICBkYXRhOiBwcm9wcy5kYXRhXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV2ZW50OiBcIm9uS2V5VXBcIixcbiAgICAgICAgICAgICAgb3JpZ2luOiBcIlZISW5wdXRcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH19XG5cbiAgICAgICAgb25Gb2N1cz17KCkgPT4ge1xuICAgICAgICAgIHByb3BzLm9uRXZlbnQoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgZGF0YTogcHJvcHMuZGF0YVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV2ZW50OiBcIm9uRm9jdXNcIixcbiAgICAgICAgICAgIG9yaWdpbjogXCJWSElucHV0XCJcbiAgICAgICAgICB9KVxuICAgICAgICB9fVxuXG4gICAgICAgIG9uQmx1cj17KCkgPT4ge1xuICAgICAgICAgIHByb3BzLm9uRXZlbnQoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAga2V5OiBwcm9wcy5kYXRhXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXZlbnQ6IFwib25CbHVyXCIsXG4gICAgICAgICAgICBvcmlnaW46IFwiVkhJbnB1dFwiXG4gICAgICAgICAgfSlcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICB7XG4gICAgICAgIHByb3BzLmxvYWRpbmcgJiYgKFxuICAgICAgICAgIDxTLkxvYWRlckNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxMb2FkZXIgdHlwZT1cImJ1YmJsZVwiIHNpemU9XCJ4c1wiIC8+XG4gICAgICAgICAgPC9TLkxvYWRlckNvbnRhaW5lcj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIDwvUy5Db250YWluZXI+XG4gIClcbn1cblxuVkhJbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG4gIHR5cGU6IFwidGV4dFwiLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIGF1dG9Gb2N1czogZmFsc2UsXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBjbGFzc05hbWU6ICcnLFxuICBwbGFjZWhvbGRlcjogJycsXG4gIG5vQm9yZGVyOiBmYWxzZVxufVxuXG5WSElucHV0LnByb3BUeXBlcyA9IHtcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgbm9Cb3JkZXI6IFByb3BUeXBlcy5ib29sLFxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxufVxuXG5leHBvcnQgZGVmYXVsdCBWSElucHV0XG4iXX0=