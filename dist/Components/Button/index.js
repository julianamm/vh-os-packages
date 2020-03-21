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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
    return _react.default.createElement(_styles.OutlinedButton, {
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

  return _react.default.createElement(_styles.default, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQnV0dG9uL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJWSEJ1dHRvbiIsInByb3BzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImNsb3NlTW9kYWwiLCJzZXRDbG9zZU1vZGFsIiwidXNlRWZmZWN0Iiwib3V0bGluZSIsImlkIiwicHJpbWFyeSIsIndoaXRlIiwic2Vjb25kYXJ5IiwiZGFuZ2VyIiwiZnVsbCIsIm5vd3JhcCIsImRpc2FibGVkIiwiY2xhc3NOYW1lIiwieHMiLCJzbSIsImxnIiwib25FdmVudCIsInR5cGUiLCJvcmlnaW4iLCJkYXRhIiwibGFiZWwiLCJvbk9wZW4iLCJvbkNsb3NlIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsImZ1bmMiLCJpc1JlcXVpcmVkIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFDLEtBQUssRUFBSTtBQUFBLHdCQUVZQyxlQUFNQyxRQUFOLENBQWVGLEtBQUssQ0FBQ0csVUFBckIsQ0FGWjtBQUFBO0FBQUEsTUFFakJBLFVBRmlCO0FBQUEsTUFFTEMsYUFGSzs7QUFHeEJILGlCQUFNSSxTQUFOLENBQWdCLFlBQU07QUFDcEJELElBQUFBLGFBQWEsQ0FBQ0osS0FBSyxDQUFDRyxVQUFQLENBQWI7QUFDRCxHQUZELEVBRUcsQ0FBQ0gsS0FBSyxDQUFDRyxVQUFQLENBRkg7O0FBSUEsTUFBSUgsS0FBSyxDQUFDTSxPQUFWLEVBQW1CO0FBQ2pCLFdBQ0UsNkJBQUMsc0JBQUQ7QUFDRSxNQUFBLEVBQUUsRUFBRU4sS0FBSyxDQUFDTyxFQURaO0FBRUUsTUFBQSxPQUFPLEVBQUVQLEtBQUssQ0FBQ1EsT0FGakI7QUFHRSxNQUFBLEtBQUssRUFBRVIsS0FBSyxDQUFDUyxLQUhmO0FBSUUsTUFBQSxTQUFTLEVBQUVULEtBQUssQ0FBQ1UsU0FKbkI7QUFLRSxNQUFBLE1BQU0sRUFBRVYsS0FBSyxDQUFDVyxNQUxoQjtBQU1FLE1BQUEsSUFBSSxFQUFFWCxLQUFLLENBQUNZLElBTmQ7QUFPRSxNQUFBLE1BQU0sRUFBRVosS0FBSyxDQUFDYSxNQVBoQjtBQVFFLE1BQUEsUUFBUSxFQUFFYixLQUFLLENBQUNjLFFBUmxCO0FBU0UsTUFBQSxTQUFTLGdDQUF5QmQsS0FBSyxDQUFDZSxTQUFOLEdBQWtCZixLQUFLLENBQUNlLFNBQXhCLEdBQW9DLEVBQTdELENBVFg7QUFVRSxNQUFBLEVBQUUsRUFBRWYsS0FBSyxDQUFDZ0IsRUFWWjtBQVdFLE1BQUEsRUFBRSxFQUFFaEIsS0FBSyxDQUFDaUIsRUFYWjtBQVlFLE1BQUEsRUFBRSxFQUFFakIsS0FBSyxDQUFDa0IsRUFaWjtBQWFFLE1BQUEsSUFBSSxFQUFDLFFBYlA7QUFjRSxNQUFBLE9BQU8sRUFBRSxtQkFBTTtBQUNibEIsUUFBQUEsS0FBSyxDQUFDbUIsT0FBTixDQUFjO0FBQ1pDLFVBQUFBLElBQUksRUFBRSxTQURNO0FBRVpDLFVBQUFBLE1BQU0sRUFBRSxVQUZJO0FBR1pyQixVQUFBQSxLQUFLLEVBQUU7QUFDTHNCLFlBQUFBLElBQUksRUFBRXRCLEtBQUssQ0FBQ3NCO0FBRFA7QUFISyxTQUFkO0FBT0Q7QUF0QkgsT0F3Qkl0QixLQUFLLENBQUN1QixLQXhCVixDQURGO0FBNkJEOztBQUNELFNBQ0UsNkJBQUMsZUFBRDtBQUNFLElBQUEsRUFBRSxFQUFFdkIsS0FBSyxDQUFDTyxFQURaO0FBRUUsSUFBQSxPQUFPLEVBQUVQLEtBQUssQ0FBQ1EsT0FGakI7QUFHRSxJQUFBLFNBQVMsRUFBRVIsS0FBSyxDQUFDVSxTQUhuQjtBQUlFLElBQUEsTUFBTSxFQUFFVixLQUFLLENBQUNXLE1BSmhCO0FBS0UsSUFBQSxJQUFJLEVBQUVYLEtBQUssQ0FBQ1ksSUFMZDtBQU1FLElBQUEsUUFBUSxFQUFFWixLQUFLLENBQUNjLFFBTmxCO0FBT0UsSUFBQSxTQUFTLGdDQUF5QmQsS0FBSyxDQUFDZSxTQUFOLEdBQWtCZixLQUFLLENBQUNlLFNBQXhCLEdBQW9DLEVBQTdELENBUFg7QUFRRSxJQUFBLEVBQUUsRUFBRWYsS0FBSyxDQUFDZ0IsRUFSWjtBQVNFLElBQUEsRUFBRSxFQUFFaEIsS0FBSyxDQUFDaUIsRUFUWjtBQVVFLElBQUEsRUFBRSxFQUFFakIsS0FBSyxDQUFDa0IsRUFWWjtBQVdFLElBQUEsTUFBTSxFQUFFbEIsS0FBSyxDQUFDYSxNQVhoQjtBQVlFLElBQUEsSUFBSSxFQUFDLFFBWlA7QUFhRSxJQUFBLE9BQU8sRUFBRSxtQkFBTTtBQUNiLFVBQUliLEtBQUssQ0FBQ3dCLE1BQVYsRUFBa0I7QUFDaEJ4QixRQUFBQSxLQUFLLENBQUN3QixNQUFOO0FBQ0QsT0FGRCxNQUdLLElBQUlyQixVQUFKLEVBQWdCO0FBQ25CSCxRQUFBQSxLQUFLLENBQUN5QixPQUFOO0FBQ0Q7O0FBQ0R6QixNQUFBQSxLQUFLLENBQUNtQixPQUFOLENBQWM7QUFDWkMsUUFBQUEsSUFBSSxFQUFFLFNBRE07QUFFWkMsUUFBQUEsTUFBTSxFQUFFLFVBRkk7QUFHWnJCLFFBQUFBLEtBQUssRUFBRTtBQUNMc0IsVUFBQUEsSUFBSSxFQUFFdEIsS0FBSyxDQUFDc0I7QUFEUDtBQUhLLE9BQWQ7QUFPRDtBQTNCSCxLQTZCSXRCLEtBQUssQ0FBQ3VCLEtBN0JWLENBREY7QUFrQ0QsQ0F4RUQ7O0FBMEVBeEIsUUFBUSxDQUFDMkIsWUFBVCxHQUF3QjtBQUN0QlosRUFBQUEsUUFBUSxFQUFFLEtBRFk7QUFFdEJILEVBQUFBLE1BQU0sRUFBRSxLQUZjO0FBR3RCRSxFQUFBQSxNQUFNLEVBQUUsS0FIYztBQUl0QkgsRUFBQUEsU0FBUyxFQUFFLEtBSlc7QUFLdEJLLEVBQUFBLFNBQVMsRUFBRSxFQUxXO0FBTXRCUCxFQUFBQSxPQUFPLEVBQUU7QUFOYSxDQUF4QjtBQVNBVCxRQUFRLENBQUM0QixTQUFULEdBQXFCO0FBQ25CbkIsRUFBQUEsT0FBTyxFQUFFb0IsbUJBQVVDLElBREE7QUFFbkJuQixFQUFBQSxTQUFTLEVBQUVrQixtQkFBVUMsSUFGRjtBQUduQmxCLEVBQUFBLE1BQU0sRUFBRWlCLG1CQUFVQyxJQUhDO0FBSW5CaEIsRUFBQUEsTUFBTSxFQUFFZSxtQkFBVUMsSUFKQztBQUtuQmYsRUFBQUEsUUFBUSxFQUFFYyxtQkFBVUMsSUFMRDtBQU1uQlYsRUFBQUEsT0FBTyxFQUFFUyxtQkFBVUUsSUFBVixDQUFlQyxVQU5MO0FBT25CaEIsRUFBQUEsU0FBUyxFQUFFYSxtQkFBVUksTUFQRjtBQVFuQlQsRUFBQUEsS0FBSyxFQUFFSyxtQkFBVUksTUFBVixDQUFpQkQ7QUFSTCxDQUFyQjtlQVdlaEMsUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCdXR0b24sIHsgT3V0bGluZWRCdXR0b24sIH0gZnJvbSAnLi9zdHlsZXMnXG5cbmNvbnN0IFZIQnV0dG9uID0gcHJvcHMgPT4ge1xuXG4gIGNvbnN0IFtjbG9zZU1vZGFsLCBzZXRDbG9zZU1vZGFsXSA9IFJlYWN0LnVzZVN0YXRlKHByb3BzLmNsb3NlTW9kYWwpO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldENsb3NlTW9kYWwocHJvcHMuY2xvc2VNb2RhbCk7XG4gIH0sIFtwcm9wcy5jbG9zZU1vZGFsXSlcblxuICBpZiAocHJvcHMub3V0bGluZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8T3V0bGluZWRCdXR0b25cbiAgICAgICAgaWQ9e3Byb3BzLmlkfVxuICAgICAgICBwcmltYXJ5PXtwcm9wcy5wcmltYXJ5fVxuICAgICAgICB3aGl0ZT17cHJvcHMud2hpdGV9XG4gICAgICAgIHNlY29uZGFyeT17cHJvcHMuc2Vjb25kYXJ5fVxuICAgICAgICBkYW5nZXI9e3Byb3BzLmRhbmdlcn1cbiAgICAgICAgZnVsbD17cHJvcHMuZnVsbH1cbiAgICAgICAgbm93cmFwPXtwcm9wcy5ub3dyYXB9XG4gICAgICAgIGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgY2xhc3NOYW1lPXtgdmgtYnV0dG9uLWNvbXBvbmVudCAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9XG4gICAgICAgIHhzPXtwcm9wcy54c31cbiAgICAgICAgc209e3Byb3BzLnNtfVxuICAgICAgICBsZz17cHJvcHMubGd9XG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgcHJvcHMub25FdmVudCh7XG4gICAgICAgICAgICB0eXBlOiBcIk9uQ2xpY2tcIixcbiAgICAgICAgICAgIG9yaWdpbjogXCJWSEJ1dHRvblwiLFxuICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgZGF0YTogcHJvcHMuZGF0YVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH19PlxuICAgICAgICB7XG4gICAgICAgICAgcHJvcHMubGFiZWxcbiAgICAgICAgfVxuICAgICAgPC9PdXRsaW5lZEJ1dHRvbj5cbiAgICApXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uXG4gICAgICBpZD17cHJvcHMuaWR9XG4gICAgICBwcmltYXJ5PXtwcm9wcy5wcmltYXJ5fVxuICAgICAgc2Vjb25kYXJ5PXtwcm9wcy5zZWNvbmRhcnl9XG4gICAgICBkYW5nZXI9e3Byb3BzLmRhbmdlcn1cbiAgICAgIGZ1bGw9e3Byb3BzLmZ1bGx9XG4gICAgICBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9XG4gICAgICBjbGFzc05hbWU9e2B2aC1idXR0b24tY29tcG9uZW50ICR7cHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogJyd9YH1cbiAgICAgIHhzPXtwcm9wcy54c31cbiAgICAgIHNtPXtwcm9wcy5zbX1cbiAgICAgIGxnPXtwcm9wcy5sZ31cbiAgICAgIG5vd3JhcD17cHJvcHMubm93cmFwfVxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIGlmIChwcm9wcy5vbk9wZW4pIHtcbiAgICAgICAgICBwcm9wcy5vbk9wZW4oKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNsb3NlTW9kYWwpIHtcbiAgICAgICAgICBwcm9wcy5vbkNsb3NlKClcbiAgICAgICAgfVxuICAgICAgICBwcm9wcy5vbkV2ZW50KHtcbiAgICAgICAgICB0eXBlOiBcIk9uQ2xpY2tcIixcbiAgICAgICAgICBvcmlnaW46IFwiVkhCdXR0b25cIixcbiAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZGF0YTogcHJvcHMuZGF0YVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH19PlxuICAgICAge1xuICAgICAgICBwcm9wcy5sYWJlbFxuICAgICAgfVxuICAgIDwvQnV0dG9uPlxuICApXG59XG5cblZIQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBkYW5nZXI6IGZhbHNlLFxuICBub3dyYXA6IGZhbHNlLFxuICBzZWNvbmRhcnk6IGZhbHNlLFxuICBjbGFzc05hbWU6ICcnLFxuICBwcmltYXJ5OiB0cnVlLFxufVxuXG5WSEJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIHByaW1hcnk6IFByb3BUeXBlcy5ib29sLFxuICBzZWNvbmRhcnk6IFByb3BUeXBlcy5ib29sLFxuICBkYW5nZXI6IFByb3BUeXBlcy5ib29sLFxuICBub3dyYXA6IFByb3BUeXBlcy5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIG9uRXZlbnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgVkhCdXR0b25cbiJdfQ==