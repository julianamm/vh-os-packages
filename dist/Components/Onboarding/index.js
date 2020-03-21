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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHOnboarding = function VHOnboarding(props) {
  console.log('props', props);

  var _useState = (0, _react.useState)(props.currentStep),
      _useState2 = _slicedToArray(_useState, 2),
      currentStep = _useState2[0],
      setCurrentStep = _useState2[1];

  return /*#__PURE__*/_react.default.createElement(_Grid.Container, {
    justifyCenter: true,
    fullHeight: true,
    style: {
      backgroundColor: 'blue'
    },
    fullWidth: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(_Base.default, {
    noPadding: true,
    width: "50%",
    height: "50vh"
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_ProgressBar.default, {
    steps: props.steps,
    currentStep: currentStep,
    onEvent: function onEvent(e) {
      console.log(e);
    }
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    alignItemsCenter: true,
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    style: {
      width: '90%',
      height: 'calc(100% - 10px)'
    }
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    style: {
      height: '100%',
      overflow: 'scroll'
    }
  }, props.children), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    justifySpaceBetween: true,
    alignItemsCenter: true,
    style: {
      padding: '12px 0'
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, currentStep > 1 && /*#__PURE__*/_react.default.createElement(_Button.default, {
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
  })), /*#__PURE__*/_react.default.createElement(_Text.default, {
    text: "".concat(currentStep, " / ").concat(props.steps),
    variant: "platform1",
    color: "gray-60"
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvT25ib2FyZGluZy9pbmRleC5qc3giXSwibmFtZXMiOlsiVkhPbmJvYXJkaW5nIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudFN0ZXAiLCJzZXRDdXJyZW50U3RlcCIsImJhY2tncm91bmRDb2xvciIsInN0ZXBzIiwiZSIsImhlaWdodCIsIndpZHRoIiwib3ZlcmZsb3ciLCJjaGlsZHJlbiIsInBhZGRpbmciLCJvbkV2ZW50IiwidHlwZSIsIm9yaWdpbiIsImRhdGEiLCJzdGVwTWlub3IiLCJzdGVwIiwic3RlcFBsdXMiLCJkZWZhdWx0UHJvcHMiLCJjbGFzc05hbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsS0FBSyxFQUFJO0FBRTVCQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCRixLQUFyQjs7QUFGNEIsa0JBSVUscUJBQVNBLEtBQUssQ0FBQ0csV0FBZixDQUpWO0FBQUE7QUFBQSxNQUlyQkEsV0FKcUI7QUFBQSxNQUlSQyxjQUpROztBQU01QixzQkFDRSw2QkFBQyxlQUFEO0FBQVcsSUFBQSxhQUFhLE1BQXhCO0FBQXlCLElBQUEsVUFBVSxNQUFuQztBQUFvQyxJQUFBLEtBQUssRUFBRTtBQUFDQyxNQUFBQSxlQUFlLEVBQUM7QUFBakIsS0FBM0M7QUFBcUUsSUFBQSxTQUFTO0FBQTlFLGtCQUNFLDZCQUFDLFNBQUQ7QUFBSyxJQUFBLGdCQUFnQjtBQUFyQixrQkFDRSw2QkFBQyxhQUFEO0FBQU0sSUFBQSxTQUFTLE1BQWY7QUFBZ0IsSUFBQSxLQUFLLEVBQUMsS0FBdEI7QUFB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QVcsR0FBRyxDQUFmLENBQWQ7QUFDRCxLQWpCSDtBQWtCRSxJQUFBLE9BQU8sTUFsQlQ7QUFtQkUsSUFBQSxJQUFJLEVBQUVIO0FBbkJSLElBbENGLENBTkYsQ0FERixDQVZKLENBREYsQ0FERixDQURGO0FBbUZELENBekZEOztBQTJGQUQsWUFBWSxDQUFDcUIsWUFBYixHQUE0QjtBQUMxQkMsRUFBQUEsU0FBUyxFQUFFO0FBRGUsQ0FBNUI7QUFJQXRCLFlBQVksQ0FBQ3VCLFNBQWIsR0FBeUI7QUFDdkJoQixFQUFBQSxLQUFLLEVBQUVpQixtQkFBVUMsTUFBVixDQUFpQkMsVUFERDtBQUV2QnRCLEVBQUFBLFdBQVcsRUFBRW9CLG1CQUFVQyxNQUFWLENBQWlCQyxVQUZQO0FBR3ZCSixFQUFBQSxTQUFTLEVBQUVFLG1CQUFVRyxNQUhFO0FBSXZCYixFQUFBQSxPQUFPLEVBQUVVLG1CQUFVSSxJQUFWLENBQWVGO0FBSkQsQ0FBekI7ZUFPZTFCLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3cgfSBmcm9tICcuLi8uLi9HcmlkJ1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vQ2FyZHMvQmFzZSdcbmltcG9ydCBWSFByb2dyZXNzQmFyIGZyb20gJy4uL1Byb2dyZXNzQmFyJ1xuaW1wb3J0IFZIQnV0dG9uIGZyb20gJy4uL0J1dHRvbidcbmltcG9ydCBWSFRleHQgZnJvbSAnLi4vVGV4dCdcblxuXG5jb25zdCBWSE9uYm9hcmRpbmcgPSBwcm9wcyA9PiB7XG5cbiAgY29uc29sZS5sb2coJ3Byb3BzJywgcHJvcHMpXG5cbiAgY29uc3QgW2N1cnJlbnRTdGVwLCBzZXRDdXJyZW50U3RlcF0gPSB1c2VTdGF0ZShwcm9wcy5jdXJyZW50U3RlcClcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIganVzdGlmeUNlbnRlciBmdWxsSGVpZ2h0IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOidibHVlJ319IGZ1bGxXaWR0aD5cbiAgICAgIDxSb3cgYWxpZ25JdGVtc0NlbnRlcj5cbiAgICAgICAgPENhcmQgbm9QYWRkaW5nIHdpZHRoPSc1MCUnIGhlaWdodD0nNTB2aCc+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICA8VkhQcm9ncmVzc0JhclxuICAgICAgICAgICAgICAgIHN0ZXBzPXtwcm9wcy5zdGVwc31cbiAgICAgICAgICAgICAgICBjdXJyZW50U3RlcD17Y3VycmVudFN0ZXB9XG4gICAgICAgICAgICAgICAgb25FdmVudD17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxSb3cgYWxpZ25JdGVtc0NlbnRlciAgc3R5bGU9e3toZWlnaHQ6ICcxMDAlJ319PlxuICAgICAgICAgICAgICA8Um93IHN0eWxlPXt7d2lkdGg6ICc5MCUnLCBoZWlnaHQ6ICdjYWxjKDEwMCUgLSAxMHB4KSd9fSA+XG4gICAgICAgICAgICAgICAgPFJvdyBzdHlsZT17e2hlaWdodDogJzEwMCUnLCBvdmVyZmxvdzonc2Nyb2xsJ319PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgIDxSb3cgcm93IGp1c3RpZnlTcGFjZUJldHdlZW4gYWxpZ25JdGVtc0NlbnRlciBzdHlsZT17e3BhZGRpbmc6ICcxMnB4IDAnfX0+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdGVwID4gMSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VkhCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkJhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Y3VycmVudFN0ZXAgPT09ICAxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkV2ZW50PXtlPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMub25FdmVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIk9uQ2hhbmdlU3RlcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luOiBcIlZIT25ib2FyZGluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBNaW5vcjogY3VycmVudFN0ZXAgLSAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA6IGN1cnJlbnRTdGVwIC0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwUGx1czogY3VycmVudFN0ZXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFN0ZXAoY3VycmVudFN0ZXAgLSAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3Byb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxWSFRleHRcbiAgICAgICAgICAgICAgICAgICAgdGV4dD17YCR7Y3VycmVudFN0ZXB9IC8gJHtwcm9wcy5zdGVwc31gfVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PXtcInBsYXRmb3JtMVwifVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17XCJncmF5LTYwXCJ9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPFZIQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTmV4dFwiXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtjdXJyZW50U3RlcCA9PT0gKHByb3BzLnN0ZXBzICsgMSl9XG4gICAgICAgICAgICAgICAgICAgIG9uRXZlbnQ9e2U9PntcbiAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbkV2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiT25DaGFuZ2VTdGVwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW46IFwiVkhPbmJvYXJkaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcE1pbm9yOiBjdXJyZW50U3RlcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwOiBjdXJyZW50U3RlcCArIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcFBsdXM6IGN1cnJlbnRTdGVwICsgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFN0ZXAoY3VycmVudFN0ZXAgKyAxKVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e3Byb3BzfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9Sb3c+XG4gICAgPC9Db250YWluZXI+XG4gIClcblxufVxuXG5WSE9uYm9hcmRpbmcuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IFwiXCIsXG59O1xuXG5WSE9uYm9hcmRpbmcucHJvcFR5cGVzID0ge1xuICBzdGVwczogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBjdXJyZW50U3RlcDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uRXZlbnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZIT25ib2FyZGluZ1xuIl19