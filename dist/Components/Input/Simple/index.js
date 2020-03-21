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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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

  return _react.default.createElement(S.Container, null, _react.default.createElement(S.Input, {
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
  }), props.loading && _react.default.createElement(S.LoaderContainer, null, _react.default.createElement(_Preloader.default, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvSW5wdXQvU2ltcGxlL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJWSElucHV0IiwicHJvcHMiLCJSZWFjdCIsInVzZVN0YXRlIiwidmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJpbnB1dFZhbGlkIiwic2V0SW5wdXRJbnZhbGlkIiwidXNlRWZmZWN0IiwiaWQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJjbGFzc05hbWUiLCJkaXNhYmxlZCIsImxvYWRpbmciLCJlcnJvciIsImF1dG9Gb2N1cyIsIm5vQm9yZGVyIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJrZXkiLCJvbkV2ZW50IiwiZGF0YSIsImV2ZW50Iiwib3JpZ2luIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQUMsS0FBSyxFQUFJO0FBQUEsd0JBQ09DLGVBQU1DLFFBQU4sQ0FBZUYsS0FBSyxDQUFDRyxLQUFyQixDQURQO0FBQUE7QUFBQSxNQUNoQkEsS0FEZ0I7QUFBQSxNQUNUQyxZQURTOztBQUFBLHlCQUVlSCxlQUFNQyxRQUFOLENBQWUsS0FBZixDQUZmO0FBQUE7QUFBQSxNQUVoQkcsVUFGZ0I7QUFBQSxNQUVKQyxlQUZJOztBQUl2QkwsaUJBQU1NLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQkgsSUFBQUEsWUFBWSxDQUFDSixLQUFLLENBQUNHLEtBQVAsQ0FBWjtBQUNILEdBRkMsRUFFQyxDQUFDSCxLQUFLLENBQUNHLEtBQVAsQ0FGRDs7QUFJQSxTQUNFLDZCQUFDLENBQUQsQ0FBRyxTQUFILFFBQ0UsNkJBQUMsQ0FBRCxDQUFHLEtBQUg7QUFDRSxJQUFBLEVBQUUsRUFBRUgsS0FBSyxDQUFDUSxFQURaO0FBRUUsSUFB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RUFBQUEsT0FBTyxFQUFFLEtBSlk7QUFLckJGLEVBQUFBLFNBQVMsRUFBRSxFQUxVO0FBTXJCRCxFQUFBQSxXQUFXLEVBQUUsRUFOUTtBQU9yQk0sRUFBQUEsUUFBUSxFQUFFO0FBUFcsQ0FBdkI7QUFVQWpCLE9BQU8sQ0FBQzBCLFNBQVI7QUFDRWIsRUFBQUEsUUFBUSxFQUFFYyxtQkFBVUMsSUFEdEI7QUFFRVosRUFBQUEsU0FBUyxFQUFFVyxtQkFBVUMsSUFGdkI7QUFHRWQsRUFBQUEsT0FBTyxFQUFFYSxtQkFBVUM7QUFIckIsb0RBSWFELG1CQUFVRSxNQUp2QixzREFLZUYsbUJBQVVFLE1BTHpCLG1EQU1ZRixtQkFBVUMsSUFOdEIsK0NBT1FELG1CQUFVRSxNQVBsQjtlQVVlN0IsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCAqIGFzIFMgZnJvbSBcIi4vc3R5bGVzXCJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vUHJlbG9hZGVyJztcblxuY29uc3QgVkhJbnB1dCA9IHByb3BzID0+IHtcbiAgY29uc3QgW3ZhbHVlLCBoYW5kbGVDaGFuZ2VdID0gUmVhY3QudXNlU3RhdGUocHJvcHMudmFsdWUpO1xuICBjb25zdCBbaW5wdXRWYWxpZCwgc2V0SW5wdXRJbnZhbGlkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGhhbmRsZUNoYW5nZShwcm9wcy52YWx1ZSk7XG59LCBbcHJvcHMudmFsdWVdKVxuXG4gIHJldHVybiAoXG4gICAgPFMuQ29udGFpbmVyPlxuICAgICAgPFMuSW5wdXRcbiAgICAgICAgaWQ9e3Byb3BzLmlkfVxuICAgICAgICB0eXBlPXtwcm9wcy50eXBlfVxuICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXJ9XG4gICAgICAgIGNsYXNzTmFtZT17YHZoLWlucHV0ICR7cHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogJyd9YH1cbiAgICAgICAgZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkIHx8IHByb3BzLmxvYWRpbmd9XG4gICAgICAgIGVycm9yPXtwcm9wcy5lcnJvcn1cbiAgICAgICAgbG9hZGluZz17cHJvcHMubG9hZGluZ31cbiAgICAgICAgYXV0b0ZvY3VzPXtwcm9wcy5hdXRvRm9jdXN9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgbm9Cb3JkZXI9e3Byb3BzLm5vQm9yZGVyfVxuICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgaGFuZGxlQ2hhbmdlKGUuY3VycmVudFRhcmdldC52YWx1ZSlcbiAgICAgICAgfX1cbiAgICAgICAgb25LZXlVcD17ZSA9PiB7XG4gICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgIHByb3BzLm9uRXZlbnQoe1xuICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgZGF0YTogcHJvcHMuZGF0YVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBldmVudDogXCJvbktleVVwQWN0aW9uXCIsXG4gICAgICAgICAgICAgIG9yaWdpbjogXCJWSElucHV0XCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpXG4gICAgICAgICAgICBwcm9wcy5vbkV2ZW50KHtcbiAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBlLmN1cnJlbnRUYXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgZGF0YTogcHJvcHMuZGF0YVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBldmVudDogXCJvbktleVVwXCIsXG4gICAgICAgICAgICAgIG9yaWdpbjogXCJWSElucHV0XCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9fVxuXG4gICAgICAgIG9uRm9jdXM9eygpID0+IHtcbiAgICAgICAgICBwcm9wcy5vbkV2ZW50KHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgIGRhdGE6IHByb3BzLmRhdGFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBldmVudDogXCJvbkZvY3VzXCIsXG4gICAgICAgICAgICBvcmlnaW46IFwiVkhJbnB1dFwiXG4gICAgICAgICAgfSlcbiAgICAgICAgfX1cblxuICAgICAgICBvbkJsdXI9eygpID0+IHtcbiAgICAgICAgICBwcm9wcy5vbkV2ZW50KHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgIGtleTogcHJvcHMuZGF0YVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV2ZW50OiBcIm9uQmx1clwiLFxuICAgICAgICAgICAgb3JpZ2luOiBcIlZISW5wdXRcIlxuICAgICAgICAgIH0pXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAge1xuICAgICAgICBwcm9wcy5sb2FkaW5nICYmIChcbiAgICAgICAgICA8Uy5Mb2FkZXJDb250YWluZXI+XG4gICAgICAgICAgICA8TG9hZGVyIHR5cGU9XCJidWJibGVcIiBzaXplPVwieHNcIiAvPlxuICAgICAgICAgIDwvUy5Mb2FkZXJDb250YWluZXI+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICA8L1MuQ29udGFpbmVyPlxuICApXG59XG5cblZISW5wdXQuZGVmYXVsdFByb3BzID0ge1xuICB0eXBlOiBcInRleHRcIixcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBhdXRvRm9jdXM6IGZhbHNlLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgcGxhY2Vob2xkZXI6ICcnLFxuICBub0JvcmRlcjogZmFsc2Vcbn1cblxuVkhJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcbiAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIGF1dG9Gb2N1czogUHJvcFR5cGVzLnN0cmluZyxcbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG5vQm9yZGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgVkhJbnB1dFxuIl19