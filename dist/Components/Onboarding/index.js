"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _Base = _interopRequireDefault(require("../Cards/Base"));

var _ProgressBar = _interopRequireDefault(require("../ProgressBar"));

var _Button = _interopRequireDefault(require("../Button"));

var _Text = _interopRequireDefault(require("../Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHOnboarding = function VHOnboarding(props) {
  console.log('props', props);

  var _useState = (0, _react.useState)(props.currentStep),
      _useState2 = _slicedToArray(_useState, 2),
      currentStep = _useState2[0],
      setCurrentStep = _useState2[1];

  return _react.default.createElement(_Grid.Container, {
    justifyCenter: true,
    fullHeight: true,
    style: {
      backgroundColor: 'blue'
    },
    fullWidth: true
  }, _react.default.createElement(_Grid.Row, {
    alignItemsCenter: true
  }, _react.default.createElement(_Base.default, {
    noPadding: true,
    width: "50%",
    height: "50vh"
  }, _react.default.createElement(_Grid.Row, null, _react.default.createElement(_ProgressBar.default, {
    steps: props.steps,
    currentStep: currentStep,
    onEvent: function onEvent(e) {
      console.log(e);
    }
  })), _react.default.createElement(_Grid.Row, {
    alignItemsCenter: true,
    style: {
      height: '100%'
    }
  }, _react.default.createElement(_Grid.Row, {
    style: {
      width: '90%',
      height: 'calc(100% - 10px)'
    }
  }, _react.default.createElement(_Grid.Row, {
    style: {
      height: '100%',
      overflow: 'scroll'
    }
  }, props.children), _react.default.createElement(_Grid.Row, {
    row: true,
    justifySpaceBetween: true,
    alignItemsCenter: true,
    style: {
      padding: '12px 0'
    }
  }, _react.default.createElement("span", null, currentStep > 1 && _react.default.createElement(_Button.default, {
    className: "",
    outline: true,
    label: "Back",
    disabled: currentStep === 1,
    onEvent: function onEvent(e) {
      props.onEvent({
        type: "OnChangeStep",
        origin: "VHOnboarding",
        props: {
          data: {
            stepMinor: currentStep - 2,
            step: currentStep - 1,
            stepPlus: currentStep
          }
        }
      });
      setCurrentStep(currentStep - 1);
    },
    primary: true,
    data: props
  })), _react.default.createElement(_Text.default, {
    text: "".concat(currentStep, " / ").concat(props.steps),
    variant: "platform1",
    color: "gray-60"
  }), _react.default.createElement(_Button.default, {
    className: "",
    label: "Next",
    disabled: currentStep === props.steps + 1,
    onEvent: function onEvent(e) {
      props.onEvent({
        type: "OnChangeStep",
        origin: "VHOnboarding",
        props: {
          data: {
            stepMinor: currentStep,
            step: currentStep + 1,
            stepPlus: currentStep + 2
          }
        }
      });
      setCurrentStep(currentStep + 1);
    },
    primary: true,
    data: props
  })))))));
};

VHOnboarding.defaultProps = {
  className: ""
};
VHOnboarding.propTypes = {
  steps: _propTypes.default.number.isRequired,
  currentStep: _propTypes.default.number.isRequired,
  className: _propTypes.default.string,
  onEvent: _propTypes.default.func.isRequired
};
var _default = VHOnboarding;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvT25ib2FyZGluZy9pbmRleC5qc3giXSwibmFtZXMiOlsiVkhPbmJvYXJkaW5nIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudFN0ZXAiLCJzZXRDdXJyZW50U3RlcCIsImJhY2tncm91bmRDb2xvciIsInN0ZXBzIiwiZSIsImhlaWdodCIsIndpZHRoIiwib3ZlcmZsb3ciLCJjaGlsZHJlbiIsInBhZGRpbmciLCJvbkV2ZW50IiwidHlwZSIsIm9yaWdpbiIsImRhdGEiLCJzdGVwTWlub3IiLCJzdGVwIiwic3RlcFBsdXMiLCJkZWZhdWx0UHJvcHMiLCJjbGFzc05hbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxLQUFLLEVBQUk7QUFFNUJDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJGLEtBQXJCOztBQUY0QixrQkFJVSxxQkFBU0EsS0FBSyxDQUFDRyxXQUFmLENBSlY7QUFBQTtBQUFBLE1BSXJCQSxXQUpxQjtBQUFBLE1BSVJDLGNBSlE7O0FBTTVCLFNBQ0UsNkJBQUMsZUFBRDtBQUFXLElBQUEsYUFBYSxNQUF4QjtBQUF5QixJQUFBLFVBQVUsTUFBbkM7QUFBb0MsSUFBQSxLQUFLLEVBQUU7QUFBQ0MsTUFBQUEsZUFBZSxFQUFDO0FBQWpCLEtBQTNDO0FBQXFFLElBQUEsU0FBUztBQUE5RSxLQUNFLDZCQUFDLFNBQUQ7QUFBSyxJQUFBLGdCQUFnQjtBQUFyQixLQUNFLDZCQUFDLGFBQUQ7QUFBTSxJQUFBLFNBQVMsTUFBZjtBQUFnQixJQUFBLEtBQUssRUFBQyxLQUF0QjtBQUE0QixJQUFB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Q0FBZDtBQUNELEtBakJIO0FBa0JFLElBQUEsT0FBTyxNQWxCVDtBQW1CRSxJQUFBLElBQUksRUFBRUg7QUFuQlIsSUFsQ0YsQ0FORixDQURGLENBVkosQ0FERixDQURGLENBREY7QUFtRkQsQ0F6RkQ7O0FBMkZBRCxZQUFZLENBQUNxQixZQUFiLEdBQTRCO0FBQzFCQyxFQUFBQSxTQUFTLEVBQUU7QUFEZSxDQUE1QjtBQUlBdEIsWUFBWSxDQUFDdUIsU0FBYixHQUF5QjtBQUN2QmhCLEVBQUFBLEtBQUssRUFBRWlCLG1CQUFVQyxNQUFWLENBQWlCQyxVQUREO0FBRXZCdEIsRUFBQUEsV0FBVyxFQUFFb0IsbUJBQVVDLE1BQVYsQ0FBaUJDLFVBRlA7QUFHdkJKLEVBQUFBLFNBQVMsRUFBRUUsbUJBQVVHLE1BSEU7QUFJdkJiLEVBQUFBLE9BQU8sRUFBRVUsbUJBQVVJLElBQVYsQ0FBZUY7QUFKRCxDQUF6QjtlQU9lMUIsWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdyB9IGZyb20gJy4uLy4uL0dyaWQnXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9DYXJkcy9CYXNlJ1xuaW1wb3J0IFZIUHJvZ3Jlc3NCYXIgZnJvbSAnLi4vUHJvZ3Jlc3NCYXInXG5pbXBvcnQgVkhCdXR0b24gZnJvbSAnLi4vQnV0dG9uJ1xuaW1wb3J0IFZIVGV4dCBmcm9tICcuLi9UZXh0J1xuXG5cbmNvbnN0IFZIT25ib2FyZGluZyA9IHByb3BzID0+IHtcblxuICBjb25zb2xlLmxvZygncHJvcHMnLCBwcm9wcylcblxuICBjb25zdCBbY3VycmVudFN0ZXAsIHNldEN1cnJlbnRTdGVwXSA9IHVzZVN0YXRlKHByb3BzLmN1cnJlbnRTdGVwKVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBqdXN0aWZ5Q2VudGVyIGZ1bGxIZWlnaHQgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6J2JsdWUnfX0gZnVsbFdpZHRoPlxuICAgICAgPFJvdyBhbGlnbkl0ZW1zQ2VudGVyPlxuICAgICAgICA8Q2FyZCBub1BhZGRpbmcgd2lkdGg9JzUwJScgaGVpZ2h0PSc1MHZoJz5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgIDxWSFByb2dyZXNzQmFyXG4gICAgICAgICAgICAgICAgc3RlcHM9e3Byb3BzLnN0ZXBzfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGVwPXtjdXJyZW50U3RlcH1cbiAgICAgICAgICAgICAgICBvbkV2ZW50PXtlID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPFJvdyBhbGlnbkl0ZW1zQ2VudGVyICBzdHlsZT17e2hlaWdodDogJzEwMCUnfX0+XG4gICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3t3aWR0aDogJzkwJScsIGhlaWdodDogJ2NhbGMoMTAwJSAtIDEwcHgpJ319ID5cbiAgICAgICAgICAgICAgICA8Um93IHN0eWxlPXt7aGVpZ2h0OiAnMTAwJScsIG92ZXJmbG93OidzY3JvbGwnfX0+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcHJvcHMuY2hpbGRyZW5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPFJvdyByb3cganVzdGlmeVNwYWNlQmV0d2VlbiBhbGlnbkl0ZW1zQ2VudGVyIHN0eWxlPXt7cGFkZGluZzogJzEycHggMCd9fT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY3VycmVudFN0ZXAgPiAxICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxWSEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQmFja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtjdXJyZW50U3RlcCA9PT0gIDF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uRXZlbnQ9e2U9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbkV2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiT25DaGFuZ2VTdGVwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW46IFwiVkhPbmJvYXJkaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcE1pbm9yOiBjdXJyZW50U3RlcCAtIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcDogY3VycmVudFN0ZXAgLSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBQbHVzOiBjdXJyZW50U3RlcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50U3RlcChjdXJyZW50U3RlcCAtIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17cHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPFZIVGV4dFxuICAgICAgICAgICAgICAgICAgICB0ZXh0PXtgJHtjdXJyZW50U3RlcH0gLyAke3Byb3BzLnN0ZXBzfWB9XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9e1wicGxhdGZvcm0xXCJ9XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXtcImdyYXktNjBcIn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8VkhCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2N1cnJlbnRTdGVwID09PSAocHJvcHMuc3RlcHMgKyAxKX1cbiAgICAgICAgICAgICAgICAgICAgb25FdmVudD17ZT0+e1xuICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm9uRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJPbkNoYW5nZVN0ZXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbjogXCJWSE9uYm9hcmRpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwTWlub3I6IGN1cnJlbnRTdGVwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA6IGN1cnJlbnRTdGVwICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwUGx1czogY3VycmVudFN0ZXAgKyAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50U3RlcChjdXJyZW50U3RlcCArIDEpXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnlcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17cHJvcHN9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L1Jvdz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxuXG59XG5cblZIT25ib2FyZGluZy5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogXCJcIixcbn07XG5cblZIT25ib2FyZGluZy5wcm9wVHlwZXMgPSB7XG4gIHN0ZXBzOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGN1cnJlbnRTdGVwOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25FdmVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVkhPbmJvYXJkaW5nXG4iXX0=