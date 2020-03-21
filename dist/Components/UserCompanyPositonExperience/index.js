"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _MainTitleDescription = _interopRequireDefault(require("../MainTitleDescription"));

var _UserPositonExperience = _interopRequireDefault(require("../UserPositonExperience"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHUserCompanyExperience = function VHUserCompanyExperience(props) {
  var industryList = props.industryList;
  var companyList = props.companyList;

  var _React$useState = _react.default.useState({}),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      currentItem = _React$useState2[0],
      setCurrentItem = _React$useState2[1];

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom: 5
  }, /*#__PURE__*/_react.default.createElement(_MainTitleDescription.default, {
    setNewExperience: props.setNewExperience,
    pointer: true,
    onEvent: props.onEvent,
    data: {
      label: 'openModalExperience',
      item: props.item
    },
    onOpen: props.onOpen,
    setCurrentItem: props.setCurrentItem,
    item: props.item,
    title: props.item.companyName,
    description: "".concat(industryList[0].label, " - ").concat(companyList[0].label, " - ").concat(props.item.country),
    rightTitle: props.rightTitle,
    className: "vh-user-company-position-experience ".concat(props.className ? props.className : '')
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, null, props.item.workExperiences.map(function (userPosition) {
    return /*#__PURE__*/_react.default.createElement(_UserPositonExperience.default, _extends({
      className: "vh-user-company-position-experience ".concat(props.className ? props.className : '')
    }, userPosition));
  })));
};

VHUserCompanyExperience.defaultProps = {
  className: "",
  rightTitle: ""
};
VHUserCompanyExperience.propTypes = {
  title: _propTypes.default.string.isRequired,
  description: _propTypes.default.string.isRequired,
  rightTitle: _propTypes.default.string,
  className: _propTypes.default.string,
  userPositions: _propTypes.default.shape({})
};
var _default = VHUserCompanyExperience;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVXNlckNvbXBhbnlQb3NpdG9uRXhwZXJpZW5jZS9pbmRleC5qc3giXSwibmFtZXMiOlsiVkhVc2VyQ29tcGFueUV4cGVyaWVuY2UiLCJwcm9wcyIsImluZHVzdHJ5TGlzdCIsImNvbXBhbnlMaXN0IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImN1cnJlbnRJdGVtIiwic2V0Q3VycmVudEl0ZW0iLCJzZXROZXdFeHBlcmllbmNlIiwib25FdmVudCIsImxhYmVsIiwiaXRlbSIsIm9uT3BlbiIsImNvbXBhbnlOYW1lIiwiY291bnRyeSIsInJpZ2h0VGl0bGUiLCJjbGFzc05hbWUiLCJ3b3JrRXhwZXJpZW5jZXMiLCJtYXAiLCJ1c2VyUG9zaXRpb24iLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJ0aXRsZSIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJkZXNjcmlwdGlvbiIsInVzZXJQb3NpdGlvbnMiLCJzaGFwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLENBQUFDLEtBQUssRUFBSTtBQUN2QyxNQUFNQyxZQUFZLEdBQUdELEtBQUssQ0FBQ0MsWUFBM0I7QUFDQSxNQUFNQyxXQUFXLEdBQUdGLEtBQUssQ0FBQ0UsV0FBMUI7O0FBRnVDLHdCQUdEQyxlQUFNQyxRQUFOLENBQWUsRUFBZixDQUhDO0FBQUE7QUFBQSxNQUdoQ0MsV0FIZ0M7QUFBQSxNQUduQkMsY0FIbUI7O0FBSXZDLHNCQUNFLHlFQUNFLDZCQUFDLFNBQUQ7QUFBSyxJQUFBLFlBQVksRUFBRTtBQUFuQixrQkFDRSw2QkFBQyw2QkFBRDtBQUNFLElBQUEsZ0JBQWdCLEVBQUVOLEtBQUssQ0FBQ08sZ0JBRDFCO0FBRUUsSUFBQSxPQUFPLE1BRlQ7QUFHRSxJQUFBLE9BQU8sRUFBRVAsS0FBSyxDQUFDUSxPQUhqQjtBQUlFLElBQUEsSUFBSSxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxxQkFBVDtBQUFnQ0MsTUFBQUEsSUFBSSxFQUFFVixLQUFLLENBQUNVO0FBQTVDLEtBSlI7QUFLRSxJQUFBLE1BQU0sRUFBRVYsS0FBSyxDQUFDVyxNQUxoQjtBQU1FLElBQUEsY0FBYyxFQUFFWCxLQUFLLENBQUNNLGNBTnhCO0FBT0UsSUFBQSxJQUFJLEVBQUVOLEtBQUssQ0FBQ1UsSUFQZDtBQVFFLElBQUEsS0FBSyxFQUFFVixLQUFLLENBQUNVLElBQU4sQ0FBV0UsV0FScEI7QUFTRSxJQUFBLFdBQVcsWUFBS1gsWUFBWSxDQUFDLENBQUQsQ0FBWixDQUFnQlEsS0FBckIsZ0JBQWdDUCxXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWVPLEtBQS9DLGdCQUEwRFQsS0FBSyxDQUFDVSxJQUFOLENBQVdHLE9BQXJFLENBVGI7QUFVRSxJQUFBLFVBQVUsRUFBRWIsS0FBSyxDQUFDYyxVQVZwQjtBQVdFLElBQUEsU0FBUyxnREFBeUNkLEtBQUssQ0FBQ2UsU0FBTixHQUFrQmYsS0FBSyxDQUFDZSxTQUF4QixHQUFvQyxFQUE3RTtBQVhYLElBREYsQ0FERixlQWdCRSw2QkFBQyxTQUFELFFBRUlmLEtBQUssQ0FBQ1UsSUFBTixDQUFXTSxlQUFYLENBQTJCQyxHQUEzQixDQUErQixVQUFBQyxZQUFZO0FBQUEsd0JBQ3pDLDZCQUFDLDhCQUFEO0FBQ0UsTUFBQSxTQUFTLGdEQUF5Q2xCLEtBQUssQ0FBQ2UsU0FBTixHQUFrQmYsS0FBSyxDQUFDZSxTQUF4QixHQUFvQyxFQUE3RTtBQURYLE9BRU1HLFlBRk4sRUFEeUM7QUFBQSxHQUEzQyxDQUZKLENBaEJGLENBREY7QUE2QkQsQ0FqQ0Q7O0FBbUNBbkIsdUJBQXVCLENBQUNvQixZQUF4QixHQUF1QztBQUNyQ0osRUFBQUEsU0FBUyxFQUFFLEVBRDBCO0FBRXJDRCxFQUFBQSxVQUFVLEVBQUU7QUFGeUIsQ0FBdkM7QUFLQWYsdUJBQXVCLENBQUNxQixTQUF4QixHQUFvQztBQUNsQ0MsRUFBQUEsS0FBSyxFQUFFQyxtQkFBVUMsTUFBVixDQUFpQkMsVUFEVTtBQUVsQ0MsRUFBQUEsV0FBVyxFQUFFSCxtQkFBVUMsTUFBVixDQUFpQkMsVUFGSTtBQUdsQ1YsRUFBQUEsVUFBVSxFQUFFUSxtQkFBVUMsTUFIWTtBQUlsQ1IsRUFBQUEsU0FBUyxFQUFFTyxtQkFBVUMsTUFKYTtBQUtsQ0csRUFBQUEsYUFBYSxFQUFFSixtQkFBVUssS0FBVixDQUFnQixFQUFoQjtBQUxtQixDQUFwQztlQVFlNUIsdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFJvdyB9IGZyb20gJy4uLy4uL0dyaWQnO1xuaW1wb3J0IFZITWFpblRpdGxlRGVzY3JpcHRpb24gZnJvbSBcIi4uL01haW5UaXRsZURlc2NyaXB0aW9uXCI7XG5pbXBvcnQgVkhVc2VyUG9zaXRvbkV4cGVyaWVuY2UgZnJvbSBcIi4uL1VzZXJQb3NpdG9uRXhwZXJpZW5jZVwiXG5cbmNvbnN0IFZIVXNlckNvbXBhbnlFeHBlcmllbmNlID0gcHJvcHMgPT4ge1xuICBjb25zdCBpbmR1c3RyeUxpc3QgPSBwcm9wcy5pbmR1c3RyeUxpc3RcbiAgY29uc3QgY29tcGFueUxpc3QgPSBwcm9wcy5jb21wYW55TGlzdFxuICBjb25zdCBbY3VycmVudEl0ZW0sIHNldEN1cnJlbnRJdGVtXSA9IFJlYWN0LnVzZVN0YXRlKHt9KTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFJvdyBtYXJnaW5Cb3R0b209ezV9PlxuICAgICAgICA8VkhNYWluVGl0bGVEZXNjcmlwdGlvblxuICAgICAgICAgIHNldE5ld0V4cGVyaWVuY2U9e3Byb3BzLnNldE5ld0V4cGVyaWVuY2V9XG4gICAgICAgICAgcG9pbnRlclxuICAgICAgICAgIG9uRXZlbnQ9e3Byb3BzLm9uRXZlbnR9XG4gICAgICAgICAgZGF0YT17eyBsYWJlbDogJ29wZW5Nb2RhbEV4cGVyaWVuY2UnLCBpdGVtOiBwcm9wcy5pdGVtIH19XG4gICAgICAgICAgb25PcGVuPXtwcm9wcy5vbk9wZW59XG4gICAgICAgICAgc2V0Q3VycmVudEl0ZW09e3Byb3BzLnNldEN1cnJlbnRJdGVtfVxuICAgICAgICAgIGl0ZW09e3Byb3BzLml0ZW19XG4gICAgICAgICAgdGl0bGU9e3Byb3BzLml0ZW0uY29tcGFueU5hbWV9XG4gICAgICAgICAgZGVzY3JpcHRpb249e2Ake2luZHVzdHJ5TGlzdFswXS5sYWJlbH0gLSAke2NvbXBhbnlMaXN0WzBdLmxhYmVsfSAtICR7cHJvcHMuaXRlbS5jb3VudHJ5fWB9XG4gICAgICAgICAgcmlnaHRUaXRsZT17cHJvcHMucmlnaHRUaXRsZX1cbiAgICAgICAgICBjbGFzc05hbWU9e2B2aC11c2VyLWNvbXBhbnktcG9zaXRpb24tZXhwZXJpZW5jZSAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9XG4gICAgICAgIC8+XG4gICAgICA8L1Jvdz5cbiAgICAgIDxSb3c+XG4gICAgICAgIHtcbiAgICAgICAgICBwcm9wcy5pdGVtLndvcmtFeHBlcmllbmNlcy5tYXAodXNlclBvc2l0aW9uID0+IChcbiAgICAgICAgICAgIDxWSFVzZXJQb3NpdG9uRXhwZXJpZW5jZVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B2aC11c2VyLWNvbXBhbnktcG9zaXRpb24tZXhwZXJpZW5jZSAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9XG4gICAgICAgICAgICAgIHsuLi51c2VyUG9zaXRpb259XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvUm93PlxuICAgIDwvPlxuICApXG59XG5cblZIVXNlckNvbXBhbnlFeHBlcmllbmNlLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiBcIlwiLFxuICByaWdodFRpdGxlOiBcIlwiLFxufTtcblxuVkhVc2VyQ29tcGFueUV4cGVyaWVuY2UucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICByaWdodFRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHVzZXJQb3NpdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh7fSksXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZIVXNlckNvbXBhbnlFeHBlcmllbmNlO1xuIl19