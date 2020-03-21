"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = _interopRequireDefault(require("../../../assets/icons/close.svg/index.jsx"));

var _Button = _interopRequireDefault(require("../Button"));

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHModal = function VHModal(props) {
  return /*#__PURE__*/_react.default.createElement(S.ModalWrapper, null, /*#__PURE__*/_react.default.createElement(S.ModalContainer, {
    open: props.open
  }, /*#__PURE__*/_react.default.createElement(S.ModalBox, {
    width: props.width,
    minWidth: props.minWidth
  }, /*#__PURE__*/_react.default.createElement(S.Header, null, /*#__PURE__*/_react.default.createElement("div", null, props.header && props.header), !props.hideBtnClose && /*#__PURE__*/_react.default.createElement(S.Close, {
    onClick: function onClick() {
      props.onEvent({
        event: 'onClose',
        target: 'VHModal'
      });
      props.onClose();
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _index.default,
    alt: "Close icon"
  }))), /*#__PURE__*/_react.default.createElement(S.Content, null, props.content), props.confirmation && /*#__PURE__*/_react.default.createElement(S.ConfirmationSection, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    primary: true,
    outline: true,
    label: props.cancelTitle,
    onClick: props.onClose
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    disabled: props.disableAction,
    primary: true,
    label: props.confirmType,
    onClick: function onClick() {
      props.onEvent({
        event: 'onConfirm',
        target: 'VHModal',
        type: props.confirmType,
        data: props.data
      });
      props.onClose();
    }
  })))));
};

VHModal.defaultProps = {};
VHModal.propTypes = {};
var _default = VHModal;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvTW9kYWwvaW5kZXguanN4Il0sIm5hbWVzIjpbIlZITW9kYWwiLCJwcm9wcyIsIm9wZW4iLCJ3aWR0aCIsIm1pbldpZHRoIiwiaGVhZGVyIiwiaGlkZUJ0bkNsb3NlIiwib25FdmVudCIsImV2ZW50IiwidGFyZ2V0Iiwib25DbG9zZSIsIkNsb3NlSWNvbiIsImNvbnRlbnQiLCJjb25maXJtYXRpb24iLCJjYW5jZWxUaXRsZSIsImRpc2FibGVBY3Rpb24iLCJjb25maXJtVHlwZSIsInR5cGUiLCJkYXRhIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFBQyxLQUFLLEVBQUk7QUFDdkIsc0JBQ0UsNkJBQUMsQ0FBRCxDQUFHLFlBQUgscUJBQ0UsNkJBQUMsQ0FBRCxDQUFHLGNBQUg7QUFBa0IsSUFBQSxJQUFJLEVBQUVBLEtBQUssQ0FBQ0M7QUFBOUIsa0JBQ0UsNkJBQUMsQ0FBRCxDQUFHLFFBQUg7QUFBWSxJQUFBLEtBQUssRUFBRUQsS0FBSyxDQUFDRSxLQUF6QjtBQUFnQyxJQUFBLFFBQVEsRUFBRUYsS0FBSyxDQUFDRztBQUFoRCxrQkFDRSw2QkFBQyxDQUFELENBQUcsTUFBSCxxQkFDRSwwQ0FDQ0gsS0FBSyxDQUFDSSxNQUFOLElBQWdCSixLQUFLLENBQUNJLE1BRHZCLENBREYsRUFJRyxDQUFDSixLQUFLLENBQUNLLFlBQVAsaUJBQ0csNkJBQUMsQ0FBRCxDQUFHLEtBQUg7QUFDRSxJQUFBLE9BQU8sRUFBRSxtQkFBTTtBQUNiTCxNQUFBQSxLQUFLLENBQUNNLE9BQU4sQ0FBYztBQUNaQyxRQUFBQSxLQUFLLEVBQUUsU0FESztBQUVaQyxRQUFBQSxNQUFNLEVBQUU7QUFGSSxPQUFkO0FBSUFSLE1BQUFBLEtBQUssQ0FBQ1MsT0FBTjtBQUFnQjtBQU5wQixrQkFPRTtBQUFLLElBQUEsR0FBRyxFQUFFQyxjQUFWO0FBQXFCLElBQUEsR0FBRyxFQUFDO0FBQXpCLElBUEYsQ0FMTixDQURGLGVBaUJFLDZCQUFDLENBQUQsQ0FBRyxPQUFILFFBQ0dWLEtBQUssQ0FBQ1csT0FEVCxDQWpCRixFQW9CR1gsS0FBSyxDQUFDWSxZQUFOLGlCQUNDLDZCQUFDLENBQUQsQ0FBRyxtQkFBSCxxQkFDSSw2QkFBQyxlQUFEO0FBQ00sSUFBQSxPQUFPLE1BRGI7QUFFTSxJQUFBLE9BQU8sTUFGYjtBQUdNLElBQUEsS0FBSyxFQUFFWixLQUFLLENBQUNhLFdBSG5CO0FBSU0sSUFBQSxPQUFPLEVBQUViLEtBQUssQ0FBQ1M7QUFKckIsSUFESixlQU1NLDZCQUFDLGVBQUQ7QUFDSSxJQUFBLFFBQVEsRUFBRVQsS0FBSyxDQUFDYyxhQURwQjtBQUVJLElBQUEsT0FBTyxNQUZYO0FBR0ksSUFBQSxLQUFLLEVBQUVkLEtBQUssQ0FBQ2UsV0FIakI7QUFJSSxJQUFBLE9BQU8sRUFBRSxtQkFBTTtBQUNiZixNQUFBQSxLQUFLLENBQUNNLE9BQU4sQ0FBYztBQUNaQyxRQUFBQSxLQUFLLEVBQUUsV0FESztBQUVaQyxRQUFBQSxNQUFNLEVBQUUsU0FGSTtBQUdaUSxRQUFBQSxJQUFJLEVBQUVoQixLQUFLLENBQUNlLFdBSEE7QUFJWkUsUUFBQUEsSUFBSSxFQUFFakIsS0FBSyxDQUFDaUI7QUFKQSxPQUFkO0FBTUFqQixNQUFBQSxLQUFLLENBQUNTLE9BQU47QUFBZ0I7QUFYdEIsSUFOTixDQXJCSixDQURGLENBREYsQ0FERjtBQWdERCxDQWpERDs7QUFtREFWLE9BQU8sQ0FBQ21CLFlBQVIsR0FBdUIsRUFBdkI7QUFHQW5CLE9BQU8sQ0FBQ29CLFNBQVIsR0FBb0IsRUFBcEI7ZUFHZXBCLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ljb25zL2Nsb3NlLnN2Zy9pbmRleC5qc3gnXG5pbXBvcnQgVkhCdXR0b24gZnJvbSAnLi4vQnV0dG9uJ1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL3N0eWxlcyc7XG5cbmNvbnN0IFZITW9kYWwgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPFMuTW9kYWxXcmFwcGVyPlxuICAgICAgPFMuTW9kYWxDb250YWluZXIgb3Blbj17cHJvcHMub3Blbn0+XG4gICAgICAgIDxTLk1vZGFsQm94IHdpZHRoPXtwcm9wcy53aWR0aH0gbWluV2lkdGg9e3Byb3BzLm1pbldpZHRofT5cbiAgICAgICAgICA8Uy5IZWFkZXI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3Byb3BzLmhlYWRlciAmJiBwcm9wcy5oZWFkZXJ9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHshcHJvcHMuaGlkZUJ0bkNsb3NlICYmIChcbiAgICAgICAgICAgICAgICA8Uy5DbG9zZVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbkV2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICBldmVudDogJ29uQ2xvc2UnLFxuICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogJ1ZITW9kYWwnXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLm9uQ2xvc2UoKX19PlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0Nsb3NlSWNvbn0gYWx0PVwiQ2xvc2UgaWNvblwiLz5cbiAgICAgICAgICAgICAgICA8L1MuQ2xvc2U+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvUy5IZWFkZXI+XG4gICAgICAgICAgPFMuQ29udGVudD5cbiAgICAgICAgICAgIHtwcm9wcy5jb250ZW50fVxuICAgICAgICAgIDwvUy5Db250ZW50PlxuICAgICAgICAgIHtwcm9wcy5jb25maXJtYXRpb24gJiYgKFxuICAgICAgICAgICAgPFMuQ29uZmlybWF0aW9uU2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8VkhCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgb3V0bGluZVxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtwcm9wcy5jYW5jZWxUaXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsb3NlfS8+XG4gICAgICAgICAgICAgICAgICA8VkhCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZUFjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3Byb3BzLmNvbmZpcm1UeXBlfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm9uRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudDogJ29uQ29uZmlybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogJ1ZITW9kYWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBwcm9wcy5jb25maXJtVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcHJvcHMuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbkNsb3NlKCl9fS8+XG4gICAgICAgICAgICA8L1MuQ29uZmlybWF0aW9uU2VjdGlvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L1MuTW9kYWxCb3g+XG4gICAgICA8L1MuTW9kYWxDb250YWluZXI+XG4gICAgPC9TLk1vZGFsV3JhcHBlcj5cbiAgKTtcbn07XG5cblZITW9kYWwuZGVmYXVsdFByb3BzID0ge1xufVxuXG5WSE1vZGFsLnByb3BUeXBlcyA9IHtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVkhNb2RhbFxuIl19