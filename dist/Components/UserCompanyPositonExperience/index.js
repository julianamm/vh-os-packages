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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHUserCompanyExperience = function VHUserCompanyExperience(props) {
  var industryList = props.industryList;
  var companyList = props.companyList;

  var _React$useState = _react.default.useState({}),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      currentItem = _React$useState2[0],
      setCurrentItem = _React$useState2[1];

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Grid.Row, {
    marginBottom: 5
  }, _react.default.createElement(_MainTitleDescription.default, {
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
  })), _react.default.createElement(_Grid.Row, null, props.item.workExperiences.map(function (userPosition) {
    return _react.default.createElement(_UserPositonExperience.default, _extends({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVXNlckNvbXBhbnlQb3NpdG9uRXhwZXJpZW5jZS9pbmRleC5qc3giXSwibmFtZXMiOlsiVkhVc2VyQ29tcGFueUV4cGVyaWVuY2UiLCJwcm9wcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJyaWdodFRpdGxlIiwiY2xhc3NOYW1lIiwidXNlclBvc2l0aW9ucyIsIm1hcCIsInVzZXJQb3NpdGlvbiIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJzaGFwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLENBQUFDLEtBQUssRUFBSTtBQUN2QyxTQUNFLDREQUNFLDZCQUFDLFNBQUQ7QUFBSyxJQUFBLFlBQVksRUFBRTtBQUFuQixLQUNFLDZCQUFDLDZCQUFEO0FBQ0UsSUFBQSxLQUFLLEVBQUVBLEtBQUssQ0FBQ0MsS0FEZjtBQUVFLElBQUEsV0FBVyxFQUFFRCxLQUFLLENBQUNFLFdBRnJCO0FBR0UsSUFBQSxVQUFVLEVBQUVGLEtBQUssQ0FBQ0csVUFIcEI7QUFJRSxJQUFBLFNBQVMsZ0RBQXlDSCxLQUFLLENBQUNJLFNBQU4sR0FBa0JKLEtBQUssQ0FBQ0ksU0FBeEIsR0FBb0MsRUFBN0U7QUFKWCxJQURGLENBREYsRUFTRSw2QkFBQyxTQUFELFFBRUlKLEtBQUssQ0FBQ0ssYUFBTixDQUFvQkMsR0FBcEIsQ0FBeUIsVUFBQUMsWUFBWTtBQUFBLFdBQ25DLDZCQUFDLDhCQUFEO0FBQ0UsTUFBQSxTQUFTLGdEQUF5Q1AsS0FBSyxDQUFDSSxTQUFOLEdBQWtCSixLQUFLLENBQUNJLFNBQXhCLEdBQW9DLEVBQTdFO0FBRFgsT0FFTUcsWUFGTixFQURtQztBQUFBLEdBQXJDLENBRkosQ0FURixDQURGO0FBc0JELENBdkJEOztBQXlCQVIsdUJBQXVCLENBQUNTLFlBQXhCLEdBQXVDO0FBQ3JDSixFQUFBQSxTQUFTLEVBQUUsRUFEMEI7QUFFckNELEVBQUFBLFVBQVUsRUFBRTtBQUZ5QixDQUF2QztBQUtBSix1QkFBdUIsQ0FBQ1UsU0FBeEIsR0FBb0M7QUFDbENSLEVBQUFBLEtBQUssRUFBRVMsbUJBQVVDLE1BQVYsQ0FBaUJDLFVBRFU7QUFFbENWLEVBQUFBLFdBQVcsRUFBRVEsbUJBQVVDLE1BQVYsQ0FBaUJDLFVBRkk7QUFHbENULEVBQUFBLFVBQVUsRUFBRU8sbUJBQVVDLE1BSFk7QUFJbENQLEVBQUFBLFNBQVMsRUFBRU0sbUJBQVVDLE1BSmE7QUFLbENOLEVBQUFBLGFBQWEsRUFBRUssbUJBQVVHLEtBQVYsQ0FBZ0IsRUFBaEI7QUFMbUIsQ0FBcEM7ZUFRZWQsdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFJvdyB9IGZyb20gJy4uLy4uL0dyaWQnO1xuaW1wb3J0IFZITWFpblRpdGxlRGVzY3JpcHRpb24gZnJvbSBcIi4uL01haW5UaXRsZURlc2NyaXB0aW9uXCI7XG5pbXBvcnQgVkhVc2VyUG9zaXRvbkV4cGVyaWVuY2UgZnJvbSBcIi4uL1VzZXJQb3NpdG9uRXhwZXJpZW5jZVwiXG5cbmNvbnN0IFZIVXNlckNvbXBhbnlFeHBlcmllbmNlID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Um93IG1hcmdpbkJvdHRvbT17NX0+XG4gICAgICAgIDxWSE1haW5UaXRsZURlc2NyaXB0aW9uXG4gICAgICAgICAgdGl0bGU9e3Byb3BzLnRpdGxlfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9wcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICByaWdodFRpdGxlPXtwcm9wcy5yaWdodFRpdGxlfVxuICAgICAgICAgIGNsYXNzTmFtZT17YHZoLXVzZXItY29tcGFueS1wb3NpdGlvbi1leHBlcmllbmNlICR7cHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogJyd9YH1cbiAgICAgICAgLz5cbiAgICAgIDwvUm93PlxuICAgICAgPFJvdz5cbiAgICAgICAge1xuICAgICAgICAgIHByb3BzLnVzZXJQb3NpdGlvbnMubWFwKCB1c2VyUG9zaXRpb24gPT4gKFxuICAgICAgICAgICAgPFZIVXNlclBvc2l0b25FeHBlcmllbmNlXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHZoLXVzZXItY29tcGFueS1wb3NpdGlvbi1leHBlcmllbmNlICR7cHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogJyd9YH1cbiAgICAgICAgICAgICAgey4uLnVzZXJQb3NpdGlvbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgPC9Sb3c+XG4gICAgPC8+XG4gIClcbn1cblxuVkhVc2VyQ29tcGFueUV4cGVyaWVuY2UuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IFwiXCIsXG4gIHJpZ2h0VGl0bGU6IFwiXCIsXG59O1xuXG5WSFVzZXJDb21wYW55RXhwZXJpZW5jZS5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHJpZ2h0VGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdXNlclBvc2l0aW9uczogUHJvcFR5cGVzLnNoYXBlKHt9KSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgVkhVc2VyQ29tcGFueUV4cGVyaWVuY2U7XG4iXX0=