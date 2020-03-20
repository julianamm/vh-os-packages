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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
    return _react.default.createElement(_multi.default, props);
  }

  return _react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true,
    className: "vh-checkbox ".concat(props.className ? props.className : '')
  }, _react.default.createElement(S.Wrapper, null, _react.default.createElement(S.Input, {
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
  })), _react.default.createElement(_Text.default, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvSW5wdXQvY2hlY2tib3gvaW5kZXguanN4Il0sIm5hbWVzIjpbIlZISW5wdXRDaGVja2JveCIsInByb3BzIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJSZWFjdCIsInVzZUVmZmVjdCIsIm11bHRpIiwiY2xhc3NOYW1lIiwibmFtZSIsImlkIiwiZGlzYWJsZWQiLCJvbkV2ZW50IiwidHlwZSIsIm9yaWdpbiIsImRhdGEiLCJ2YXJpYW50IiwiY29sb3IiLCJ0aXRsZSIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLEtBQUssRUFBSTtBQUFBLGtCQUNELHFCQUFTQSxLQUFLLENBQUNDLE9BQWYsQ0FEQztBQUFBO0FBQUEsTUFDeEJBLE9BRHdCO0FBQUEsTUFDZkMsVUFEZTs7QUFHL0JDLGlCQUFNQyxTQUFOLENBQWdCLFlBQU07QUFDcEJGLElBQUFBLFVBQVUsQ0FBQ0YsS0FBSyxDQUFDQyxPQUFQLENBQVY7QUFDSCxHQUZDLEVBRUMsQ0FBQ0QsS0FBSyxDQUFDQyxPQUFQLENBRkQ7O0FBSUEsTUFBR0QsS0FBSyxDQUFDSyxLQUFULEVBQWdCO0FBQ2QsV0FBTyw2QkFBQyxjQUFELEVBQTBCTCxLQUExQixDQUFQO0FBQ0Q7O0FBRUQsU0FDRSw2QkFBQyxTQUFEO0FBQUssSUFBQSxHQUFHLE1BQVI7QUFBUyxJQUFBLGdCQUFnQixNQUF6QjtBQUEwQixJQUFBLFNBQVMsd0JBQWlCQSxLQUFLLENBQUNNLFNBQU4sR0FBa0JOLEtBQUssQ0FBQ00sU0FBeEIsR0FBb0MsRUFBckQ7QUFBbkMsS0FDRSw2QkFBQyxDQUFELENBQUcsT0FBSCxRQUNFLDZCQUFDLENBQUQsQ0FBRyxLQUFIO0FBQ0UsSUFBQSxJQUFJLEVBQUVOLEtBQUssQ0FBQ08sSUFEZDtBQUVFLElBQUEsRUFBRSxFQUFFUCxLQUFLLENBQUNRLEVBRlo7QUFHRSxJQUFBLE9BQU8sRUFBRVAsT0FIWDtBQUlFLElBQUEsUUFBUSxFQUFFRCxLQUFLLENBQUNTLFFBSmxCO0FBS0UsSUFBQSxJQUFJLEVBQUMsVUFMUDtBQU1FLElBQUEsT0FBTyxFQUFFLG1CQUFNO0FBQ2JQLE1BQUFBLFVBQVUsQ0FBQyxDQUFDRCxPQUFGLENBQVYsRUFDQUQsS0FBSyxDQUFDVSxPQUFOLENBQWM7QUFDWkMsUUFBQUEsSUFBSSxFQUFFLFNBRE07QUFFWkMsUUFBQUEsTUFBTSxFQUFFLFlBRkk7QUFHWlosUUFBQUEsS0FBSyxFQUFFO0FBQ0xhLFVBQUFBLElBQUksRUFBRWIsS0FBSyxDQUFDYSxJQURQO0FBRUxaLFVBQUFBLE9BQU8sRUFBRSxDQUFDQTtBQUZMO0FBSEssT0FBZCxDQURBO0FBU0g7QUFoQkQsSUFERixDQURGLEVBb0JFLDZCQUFDLGFBQUQ7QUFBUSxJQUFBLE9BQU8sRUFBQyxZQUFoQjtBQUE2QixJQUFBLE9BQU8sRUFBRUQsS0FBSyxDQUFDYyxPQUE1QztBQUFxRCxJQUFBLEtBQUssRUFBRWQsS0FBSyxDQUFDZSxLQUFsRTtBQUF5RSxJQUFBLElBQUksRUFBRWYsS0FBSyxDQUFDZ0I7QUFBckYsSUFwQkYsQ0FERjtBQXdCRCxDQW5DRDs7QUFxQ0FqQixlQUFlLENBQUNrQixZQUFoQixHQUErQjtBQUM3QkQsRUFBQUEsS0FBSyxFQUFFLEVBRHNCO0FBRTdCRCxFQUFBQSxLQUFLLEVBQUUsVUFGc0I7QUFHN0JELEVBQUFBLE9BQU8sRUFBRSxXQUhvQjtBQUk3QkosRUFBQUEsT0FBTyxFQUFFLElBSm9CO0FBSzdCRyxFQUFBQSxJQUFJLEVBQUUsSUFMdUI7QUFNN0JaLEVBQUFBLE9BQU8sRUFBRyxJQU5tQjtBQU83QlEsRUFBQUEsUUFBUSxFQUFFLElBUG1CO0FBUTdCSCxFQUFBQSxTQUFTLEVBQUU7QUFSa0IsQ0FBL0I7QUFXQVAsZUFBZSxDQUFDbUIsU0FBaEIsR0FBNEI7QUFDMUJGLEVBQUFBLEtBQUssRUFBRUcsbUJBQVVDLE1BRFM7QUFFMUJMLEVBQUFBLEtBQUssRUFBRUksbUJBQVVDLE1BRlM7QUFHMUJOLEVBQUFBLE9BQU8sRUFBRUssbUJBQVVDLE1BSE87QUFJMUJWLEVBQUFBLE9BQU8sRUFBRVMsbUJBQVVFLElBQVYsQ0FBZUMsVUFKRTtBQUsxQlQsRUFBQUEsSUFBSSxFQUFFTSxtQkFBVUMsTUFMVTtBQU0xQm5CLEVBQUFBLE9BQU8sRUFBR2tCLG1CQUFVSSxJQU5NO0FBTzFCZCxFQUFBQSxRQUFRLEVBQUVVLG1CQUFVSSxJQVBNO0FBUTFCakIsRUFBQUEsU0FBUyxFQUFFYSxtQkFBVUM7QUFSSyxDQUE1QjtlQVdlckIsZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0ICogYXMgUyBmcm9tIFwiLi9zdHlsZXNcIlxuaW1wb3J0IFZIVGV4dCBmcm9tICcuLi8uLi9UZXh0J1xuaW1wb3J0IHsgUm93IH0gZnJvbSAnLi4vLi4vLi4vR3JpZCdcbmltcG9ydCBWSElucHV0Q2hlY2tib3hNdWx0aSBmcm9tICcuL211bHRpJ1xuXG5jb25zdCBWSElucHV0Q2hlY2tib3ggPSBwcm9wcyA9PiB7XG4gIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlKHByb3BzLmNoZWNrZWQpXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDaGVja2VkKHByb3BzLmNoZWNrZWQpO1xufSwgW3Byb3BzLmNoZWNrZWRdKVxuXG4gIGlmKHByb3BzLm11bHRpKSB7XG4gICAgcmV0dXJuIDxWSElucHV0Q2hlY2tib3hNdWx0aSB7Li4ucHJvcHN9Lz5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFJvdyByb3cgYWxpZ25JdGVtc0NlbnRlciBjbGFzc05hbWU9e2B2aC1jaGVja2JveCAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9ID5cbiAgICAgIDxTLldyYXBwZXI+XG4gICAgICAgIDxTLklucHV0XG4gICAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cbiAgICAgICAgICBpZD17cHJvcHMuaWR9XG4gICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgICBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9XG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRDaGVja2VkKCFjaGVja2VkKSxcbiAgICAgICAgICAgIHByb3BzLm9uRXZlbnQoe1xuICAgICAgICAgICAgICB0eXBlOiBcIk9uQ2xpY2tcIixcbiAgICAgICAgICAgICAgb3JpZ2luOiBcIlZIQ2hlY2tib3hcIixcbiAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICBkYXRhOiBwcm9wcy5kYXRhLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6ICFjaGVja2VkXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9fS8+XG4gICAgICA8L1MuV3JhcHBlcj5cbiAgICAgIDxWSFRleHQgaHRtbEZvcj1cInNxdWFyZWRPbmVcIiB2YXJpYW50PXtwcm9wcy52YXJpYW50fSBjb2xvcj17cHJvcHMuY29sb3J9IHRleHQ9e3Byb3BzLnRpdGxlfS8+XG4gICAgPC9Sb3c+XG4gIClcbn1cblxuVkhJbnB1dENoZWNrYm94LmRlZmF1bHRQcm9wcyA9IHtcbiAgdGl0bGU6IFwiXCIsXG4gIGNvbG9yOiBcImdyYXktMTAwXCIsXG4gIHZhcmlhbnQ6IFwicGxhdGZvcm0xXCIsXG4gIG9uRXZlbnQ6IG51bGwsXG4gIGRhdGE6IG51bGwsXG4gIGNoZWNrZWRcdDogbnVsbCxcbiAgZGlzYWJsZWQ6IG51bGwsXG4gIGNsYXNzTmFtZTogJycsXG59XG5cblZISW5wdXRDaGVja2JveC5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFyaWFudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25FdmVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZGF0YTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hlY2tlZFx0OiBQcm9wVHlwZXMuYm9vbCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZISW5wdXRDaGVja2JveFxuIl19