"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHButton = function VHButton(props) {
  var _React$useState = _react.default.useState(props.closeModal),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      closeModal = _React$useState2[0],
      setCloseModal = _React$useState2[1];

  _react.default.useEffect(function () {
    setCloseModal(props.closeModal);
  }, [props.closeModal]);

  if (props.outline) {
    return /*#__PURE__*/_react.default.createElement(_styles.OutlinedButton, {
      id: props.id,
      primary: props.primary,
      white: props.white,
      secondary: props.secondary,
      danger: props.danger,
      full: props.full,
      nowrap: props.nowrap,
      disabled: props.disabled,
      className: "vh-button-component ".concat(props.className ? props.className : ''),
      xs: props.xs,
      sm: props.sm,
      lg: props.lg,
      type: "button",
      onClick: function onClick() {
        props.onEvent({
          type: "OnClick",
          origin: "VHButton",
          props: {
            data: props.data
          }
        });
      }
    }, props.label);
  }

  return /*#__PURE__*/_react.default.createElement(_styles.default, {
    id: props.id,
    primary: props.primary,
    secondary: props.secondary,
    danger: props.danger,
    full: props.full,
    disabled: props.disabled,
    className: "vh-button-component ".concat(props.className ? props.className : ''),
    xs: props.xs,
    sm: props.sm,
    lg: props.lg,
    nowrap: props.nowrap,
    type: "button",
    onClick: function onClick() {
      if (props.setNewExperience) {
        props.setNewExperience();
      }

      if (props.onOpen) {
        props.onOpen();
      } else if (closeModal) {
        props.onClose();
      }

      props.onEvent({
        type: "OnClick",
        origin: "VHButton",
        props: {
          data: props.data
        }
      });
    }
  }, props.label);
};

VHButton.defaultProps = {
  disabled: false,
  danger: false,
  nowrap: false,
  secondary: false,
  className: '',
  primary: true
};
VHButton.propTypes = {
  primary: _propTypes.default.bool,
  secondary: _propTypes.default.bool,
  danger: _propTypes.default.bool,
  nowrap: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  onEvent: _propTypes.default.func.isRequired,
  className: _propTypes.default.string,
  label: _propTypes.default.string.isRequired
};
var _default = VHButton;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQnV0dG9uL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJWSEJ1dHRvbiIsInByb3BzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImNsb3NlTW9kYWwiLCJzZXRDbG9zZU1vZGFsIiwidXNlRWZmZWN0Iiwib3V0bGluZSIsImlkIiwicHJpbWFyeSIsIndoaXRlIiwic2Vjb25kYXJ5IiwiZGFuZ2VyIiwiZnVsbCIsIm5vd3JhcCIsImRpc2FibGVkIiwiY2xhc3NOYW1lIiwieHMiLCJzbSIsImxnIiwib25FdmVudCIsInR5cGUiLCJvcmlnaW4iLCJkYXRhIiwibGFiZWwiLCJzZXROZXdFeHBlcmllbmNlIiwib25PcGVuIiwib25DbG9zZSIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJmdW5jIiwiaXNSZXF1aXJlZCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQUMsS0FBSyxFQUFJO0FBQUEsd0JBRVlDLGVBQU1DLFFBQU4sQ0FBZUYsS0FBSyxDQUFDRyxVQUFyQixDQUZaO0FBQUE7QUFBQSxNQUVqQkEsVUFGaUI7QUFBQSxNQUVMQyxhQUZLOztBQUd4QkgsaUJBQU1JLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQkQsSUFBQUEsYUFBYSxDQUFDSixLQUFLLENBQUNHLFVBQVAsQ0FBYjtBQUNELEdBRkQsRUFFRyxDQUFDSCxLQUFLLENBQUNHLFVBQVAsQ0FGSDs7QUFJQSxNQUFJSCxLQUFLLENBQUNNLE9BQVYsRUFBbUI7QUFDakIsd0JBQ0UsNkJBQUMsc0JBQUQ7QUFDRSxNQUFBLEVBQUUsRUFBRU4sS0FBSyxDQUFDTyxFQURaO0FBRUUsTUFBQSxPQUFPLEVBQUVQLEtBQUssQ0FBQ1EsT0FGakI7QUFHRSxNQUFBLEtBQUssRUFBRVIsS0FBSyxDQUFD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QSxPQUFPLEVBQUU7QUFOYSxDQUF4QjtBQVNBVCxRQUFRLENBQUM2QixTQUFULEdBQXFCO0FBQ25CcEIsRUFBQUEsT0FBTyxFQUFFcUIsbUJBQVVDLElBREE7QUFFbkJwQixFQUFBQSxTQUFTLEVBQUVtQixtQkFBVUMsSUFGRjtBQUduQm5CLEVBQUFBLE1BQU0sRUFBRWtCLG1CQUFVQyxJQUhDO0FBSW5CakIsRUFBQUEsTUFBTSxFQUFFZ0IsbUJBQVVDLElBSkM7QUFLbkJoQixFQUFBQSxRQUFRLEVBQUVlLG1CQUFVQyxJQUxEO0FBTW5CWCxFQUFBQSxPQUFPLEVBQUVVLG1CQUFVRSxJQUFWLENBQWVDLFVBTkw7QUFPbkJqQixFQUFBQSxTQUFTLEVBQUVjLG1CQUFVSSxNQVBGO0FBUW5CVixFQUFBQSxLQUFLLEVBQUVNLG1CQUFVSSxNQUFWLENBQWlCRDtBQVJMLENBQXJCO2VBV2VqQyxRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJ1dHRvbiwgeyBPdXRsaW5lZEJ1dHRvbiwgfSBmcm9tICcuL3N0eWxlcydcblxuY29uc3QgVkhCdXR0b24gPSBwcm9wcyA9PiB7XG5cbiAgY29uc3QgW2Nsb3NlTW9kYWwsIHNldENsb3NlTW9kYWxdID0gUmVhY3QudXNlU3RhdGUocHJvcHMuY2xvc2VNb2RhbCk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q2xvc2VNb2RhbChwcm9wcy5jbG9zZU1vZGFsKTtcbiAgfSwgW3Byb3BzLmNsb3NlTW9kYWxdKVxuXG4gIGlmIChwcm9wcy5vdXRsaW5lKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxPdXRsaW5lZEJ1dHRvblxuICAgICAgICBpZD17cHJvcHMuaWR9XG4gICAgICAgIHByaW1hcnk9e3Byb3BzLnByaW1hcnl9XG4gICAgICAgIHdoaXRlPXtwcm9wcy53aGl0ZX1cbiAgICAgICAgc2Vjb25kYXJ5PXtwcm9wcy5zZWNvbmRhcnl9XG4gICAgICAgIGRhbmdlcj17cHJvcHMuZGFuZ2VyfVxuICAgICAgICBmdWxsPXtwcm9wcy5mdWxsfVxuICAgICAgICBub3dyYXA9e3Byb3BzLm5vd3JhcH1cbiAgICAgICAgZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfVxuICAgICAgICBjbGFzc05hbWU9e2B2aC1idXR0b24tY29tcG9uZW50ICR7cHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogJyd9YH1cbiAgICAgICAgeHM9e3Byb3BzLnhzfVxuICAgICAgICBzbT17cHJvcHMuc219XG4gICAgICAgIGxnPXtwcm9wcy5sZ31cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBwcm9wcy5vbkV2ZW50KHtcbiAgICAgICAgICAgIHR5cGU6IFwiT25DbGlja1wiLFxuICAgICAgICAgICAgb3JpZ2luOiBcIlZIQnV0dG9uXCIsXG4gICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICBkYXRhOiBwcm9wcy5kYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfX0+XG4gICAgICAgIHtcbiAgICAgICAgICBwcm9wcy5sYWJlbFxuICAgICAgICB9XG4gICAgICA8L091dGxpbmVkQnV0dG9uPlxuICAgIClcbiAgfVxuICByZXR1cm4gKFxuICAgIDxCdXR0b25cbiAgICAgIGlkPXtwcm9wcy5pZH1cbiAgICAgIHByaW1hcnk9e3Byb3BzLnByaW1hcnl9XG4gICAgICBzZWNvbmRhcnk9e3Byb3BzLnNlY29uZGFyeX1cbiAgICAgIGRhbmdlcj17cHJvcHMuZGFuZ2VyfVxuICAgICAgZnVsbD17cHJvcHMuZnVsbH1cbiAgICAgIGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZH1cbiAgICAgIGNsYXNzTmFtZT17YHZoLWJ1dHRvbi1jb21wb25lbnQgJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJ31gfVxuICAgICAgeHM9e3Byb3BzLnhzfVxuICAgICAgc209e3Byb3BzLnNtfVxuICAgICAgbGc9e3Byb3BzLmxnfVxuICAgICAgbm93cmFwPXtwcm9wcy5ub3dyYXB9XG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgaWYgKHByb3BzLnNldE5ld0V4cGVyaWVuY2UpIHtcbiAgICAgICAgICBwcm9wcy5zZXROZXdFeHBlcmllbmNlKClcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcHMub25PcGVuKSB7XG4gICAgICAgICAgcHJvcHMub25PcGVuKClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjbG9zZU1vZGFsKSB7XG4gICAgICAgICAgcHJvcHMub25DbG9zZSgpXG4gICAgICAgIH1cbiAgICAgICAgcHJvcHMub25FdmVudCh7XG4gICAgICAgICAgdHlwZTogXCJPbkNsaWNrXCIsXG4gICAgICAgICAgb3JpZ2luOiBcIlZIQnV0dG9uXCIsXG4gICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BzLmRhdGFcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9fT5cbiAgICAgIHtcbiAgICAgICAgcHJvcHMubGFiZWxcbiAgICAgIH1cbiAgICA8L0J1dHRvbj5cbiAgKVxufVxuXG5WSEJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgZGFuZ2VyOiBmYWxzZSxcbiAgbm93cmFwOiBmYWxzZSxcbiAgc2Vjb25kYXJ5OiBmYWxzZSxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgcHJpbWFyeTogdHJ1ZSxcbn1cblxuVkhCdXR0b24ucHJvcFR5cGVzID0ge1xuICBwcmltYXJ5OiBQcm9wVHlwZXMuYm9vbCxcbiAgc2Vjb25kYXJ5OiBQcm9wVHlwZXMuYm9vbCxcbiAgZGFuZ2VyOiBQcm9wVHlwZXMuYm9vbCxcbiAgbm93cmFwOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBvbkV2ZW50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZIQnV0dG9uXG4iXX0=