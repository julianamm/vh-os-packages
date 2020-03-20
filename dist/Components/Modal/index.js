"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("../Button"));

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* babel-plugin-inline-import '../../../assets/icons/close.svg' */
var CloseIcon = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5hcnJvdy1kb3duPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkFydGJvYXJkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTgwLjAwMDAwMCwgLTEwMC4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9ImNsb3NlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1ODAuMDAwMDAwLCAxMDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0idmgtLy1pY29ucy0vLW1hdGVyaWFsLS8tMjQiPgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJib3VuZHMiIGZpbGw9IiMwNjc1Q0UiIG9wYWNpdHk9IjAiIHg9IjAiIHk9IjAiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSLul40iIGZpbGw9IiM5NUExQUMiIGZpbGwtcnVsZT0ibm9uemVybyIgcG9pbnRzPSIxOC45ODQzNzUgNi40MjE4NzUgMTMuNDA2MjUgMTIgMTguOTg0Mzc1IDE3LjU3ODEyNSAxNy41NzgxMjUgMTguOTg0Mzc1IDEyIDEzLjQwNjI1IDYuNDIxODc1IDE4Ljk4NDM3NSA1LjAxNTYyNSAxNy41NzgxMjUgMTAuNTkzNzUgMTIgNS4wMTU2MjUgNi40MjE4NzUgNi40MjE4NzUgNS4wMTU2MjUgMTIgMTAuNTkzNzUgMTcuNTc4MTI1IDUuMDE1NjI1Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==";

var VHModal = function VHModal(props) {
  return _react.default.createElement(S.ModalContainer, {
    open: props.open
  }, _react.default.createElement(S.ModalBox, {
    width: props.width,
    minWidth: props.minWidth
  }, _react.default.createElement(S.Header, null, _react.default.createElement("div", null, props.header && props.header), !props.hideBtnClose && _react.default.createElement(S.Close, {
    onClick: function onClick() {
      props.onEvent({
        event: 'onClose',
        target: 'VHModal'
      });
      props.onClose();
    }
  }, _react.default.createElement("img", {
    src: CloseIcon,
    alt: "Close icon"
  }))), _react.default.createElement(S.Content, null, props.content), props.confirmation && _react.default.createElement(S.ConfirmationSection, null, _react.default.createElement(_Button.default, {
    primary: true,
    outline: true,
    label: props.cancelTitle,
    onClick: props.onClose
  }), _react.default.createElement(_Button.default, {
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
  }))));
};

VHModal.defaultProps = {};
VHModal.propTypes = {};
var _default = VHModal;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvTW9kYWwvaW5kZXguanN4Il0sIm5hbWVzIjpbIlZITW9kYWwiLCJwcm9wcyIsIm9wZW4iLCJ3aWR0aCIsIm1pbldpZHRoIiwiaGVhZGVyIiwiaGlkZUJ0bkNsb3NlIiwib25FdmVudCIsImV2ZW50IiwidGFyZ2V0Iiwib25DbG9zZSIsIkNsb3NlSWNvbiIsImNvbnRlbnQiLCJjb25maXJtYXRpb24iLCJjYW5jZWxUaXRsZSIsImRpc2FibGVBY3Rpb24iLCJjb25maXJtVHlwZSIsInR5cGUiLCJkYXRhIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFBQyxLQUFLLEVBQUk7QUFDdkIsU0FDRSw2QkFBQyxDQUFELENBQUcsY0FBSDtBQUFrQixJQUFBLElBQUksRUFBRUEsS0FBSyxDQUFDQztBQUE5QixLQUNFLDZCQUFDLENBQUQsQ0FBRyxRQUFIO0FBQVksSUFBQSxLQUFLLEVBQUVELEtBQUssQ0FBQ0UsS0FBekI7QUFBZ0MsSUFBQSxRQUFRLEVBQUVGLEtBQUssQ0FBQ0c7QUFBaEQsS0FDRSw2QkFBQyxDQUFELENBQUcsTUFBSCxRQUNFLDBDQUNFSCxLQUFLLENBQUNJLE1BQU4sSUFBZ0JKLEtBQUssQ0FBQ0ksTUFEeEIsQ0FERixFQUlHLENBQUNKLEtBQUssQ0FBQ0ssWUFBUCxJQUNHLDZCQUFDLENBQUQsQ0FBRyxLQUFIO0FBQ0UsSUFBQSxPQUFPLEVBQUUsbUJBQU07QUFDYkwsTUFBQUEsS0FBSyxDQUFDTSxPQUFOLENBQWM7QUFDWkMsUUFBQUEsS0FBSyxFQUFFLFNBREs7QUFFWkMsUUFBQUEsTUFBTSxFQUFFO0FBRkksT0FBZDtBQUlBUixNQUFBQSxLQUFLLENBQUNTLE9BQU47QUFBZ0I7QUFOcEIsS0FPRTtBQUFLLElBQUEsR0FBRyxFQUFFQyxTQUFWO0FBQXFCLElBQUEsR0FBRyxFQUFDO0FBQXpCLElBUEYsQ0FMTixDQURGLEVBaUJFLDZCQUFDLENBQUQsQ0FBRyxPQUFILFFBQ0dWLEtBQUssQ0FBQ1csT0FEVCxDQWpCRixFQW9CR1gsS0FBSyxDQUFDWSxZQUFOLElBQ0MsNkJBQUMsQ0FBRCxDQUFHLG1CQUFILFFBQ0ssNkJBQUMsZUFBRDtBQUNLLElBQUEsT0FBTyxNQURaO0FBRUssSUFBQSxPQUFPLE1BRlo7QUFHSyxJQUFBLEtBQUssRUFBRVosS0FBSyxDQUFDYSxXQUhsQjtBQUlLLElBQUEsT0FBTyxFQUFFYixLQUFLLENBQUNTO0FBSnBCLElBREwsRUFNTSw2QkFBQyxlQUFEO0FBQ0ksSUFBQSxRQUFRLEVBQUVULEtBQUssQ0FBQ2MsYUFEcEI7QUFFSSxJQUFBLE9BQU8sTUFGWDtBQUdJLElBQUEsS0FBSyxFQUFFZCxLQUFLLENBQUNlLFdBSGpCO0FBSUksSUFBQSxPQUFPLEVBQUUsbUJBQU07QUFDYmYsTUFBQUEsS0FBSyxDQUFDTSxPQUFOLENBQWM7QUFDWkMsUUFBQUEsS0FBSyxFQUFFLFdBREs7QUFFWkMsUUFBQUEsTUFBTSxFQUFFLFNBRkk7QUFHWlEsUUFBQUEsSUFBSSxFQUFFaEIsS0FBSyxDQUFDZSxXQUhBO0FBSVpFLFFBQUFBLElBQUksRUFBRWpCLEtBQUssQ0FBQ2lCO0FBSkEsT0FBZDtBQU1BakIsTUFBQUEsS0FBSyxDQUFDUyxPQUFOO0FBQWdCO0FBWHRCLElBTk4sQ0FyQkosQ0FERixDQURGO0FBOENELENBL0NEOztBQWlEQVYsT0FBTyxDQUFDbUIsWUFBUixHQUF1QixFQUF2QjtBQUdBbkIsT0FBTyxDQUFDb0IsU0FBUixHQUFvQixFQUFwQjtlQUdlcEIsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENsb3NlSWNvbiBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvY2xvc2Uuc3ZnJ1xuaW1wb3J0IFZIQnV0dG9uIGZyb20gJy4uL0J1dHRvbidcbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9zdHlsZXMnO1xuXG5jb25zdCBWSE1vZGFsID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTLk1vZGFsQ29udGFpbmVyIG9wZW49e3Byb3BzLm9wZW59PlxuICAgICAgPFMuTW9kYWxCb3ggd2lkdGg9e3Byb3BzLndpZHRofSBtaW5XaWR0aD17cHJvcHMubWluV2lkdGh9PlxuICAgICAgICA8Uy5IZWFkZXI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAge3Byb3BzLmhlYWRlciAmJiBwcm9wcy5oZWFkZXJ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgeyFwcm9wcy5oaWRlQnRuQ2xvc2UgJiYgKFxuICAgICAgICAgICAgICA8Uy5DbG9zZVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHByb3BzLm9uRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgICBldmVudDogJ29uQ2xvc2UnLFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6ICdWSE1vZGFsJ1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIHByb3BzLm9uQ2xvc2UoKX19PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtDbG9zZUljb259IGFsdD1cIkNsb3NlIGljb25cIi8+XG4gICAgICAgICAgICAgIDwvUy5DbG9zZT5cbiAgICAgICAgICApfVxuICAgICAgICA8L1MuSGVhZGVyPlxuICAgICAgICA8Uy5Db250ZW50PlxuICAgICAgICAgIHtwcm9wcy5jb250ZW50fVxuICAgICAgICA8L1MuQ29udGVudD5cbiAgICAgICAge3Byb3BzLmNvbmZpcm1hdGlvbiAmJiAoXG4gICAgICAgICAgPFMuQ29uZmlybWF0aW9uU2VjdGlvbj5cbiAgICAgICAgICAgICAgIDxWSEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmVcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3Byb3BzLmNhbmNlbFRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsb3NlfS8+XG4gICAgICAgICAgICAgICAgPFZIQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlQWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtwcm9wcy5jb25maXJtVHlwZX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm9uRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6ICdvbkNvbmZpcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiAnVkhNb2RhbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBwcm9wcy5jb25maXJtVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHByb3BzLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbkNsb3NlKCl9fS8+XG4gICAgICAgICAgPC9TLkNvbmZpcm1hdGlvblNlY3Rpb24+XG4gICAgICAgICl9XG4gICAgICA8L1MuTW9kYWxCb3g+XG4gICAgPC9TLk1vZGFsQ29udGFpbmVyPlxuICApO1xufTtcblxuVkhNb2RhbC5kZWZhdWx0UHJvcHMgPSB7XG59XG5cblZITW9kYWwucHJvcFR5cGVzID0ge1xufVxuXG5leHBvcnQgZGVmYXVsdCBWSE1vZGFsXG4iXX0=