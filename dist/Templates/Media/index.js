"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _index = _interopRequireDefault(require("../../Components/MediaContactCard/index"));

var S = _interopRequireWildcard(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var VHMediaTemplate = /*#__PURE__*/function (_Component) {
  _inherits(VHMediaTemplate, _Component);

  var _super = _createSuper(VHMediaTemplate);

  function VHMediaTemplate(props) {
    var _this;

    _classCallCheck(this, VHMediaTemplate);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  _createClass(VHMediaTemplate, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(S.Wrapper1, null, /*#__PURE__*/_react.default.createElement(_Grid.Container, {
        md: true,
        alignItemsCenter: true
      }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
        alignItemsCenter: true
      }, /*#__PURE__*/_react.default.createElement(S.Press, null, this.props.press)))), /*#__PURE__*/_react.default.createElement(S.Wrapper2, null, /*#__PURE__*/_react.default.createElement(_Grid.Container, {
        md: true
      }, /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_index.default, {
        title: this.props.title,
        name: this.props.name,
        email: this.props.email,
        phone: this.props.phone
      }))))));
    }
  }]);

  return VHMediaTemplate;
}(_react.Component);

VHMediaTemplate.defaultProps = {};
VHMediaTemplate.propTypes = {};
var _default = VHMediaTemplate;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL1RlbXBsYXRlcy9NZWRpYS9pbmRleC5qc3giXSwibmFtZXMiOlsiVkhNZWRpYVRlbXBsYXRlIiwicHJvcHMiLCJzdGF0ZSIsInByZXNzIiwidGl0bGUiLCJuYW1lIiwiZW1haWwiLCJwaG9uZSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsZTs7Ozs7QUFDRiwyQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhLEVBQWI7QUFGZTtBQUtsQjs7Ozs2QkFFUTtBQUNMLDBCQUNJLDZCQUFDLGNBQUQsQ0FBTyxRQUFQLHFCQUNJLDZCQUFDLFNBQUQscUJBQ0ksNkJBQUMsQ0FBRCxDQUFHLFFBQUgscUJBQ0ksNkJBQUMsZUFBRDtBQUFXLFFBQUEsRUFBRSxNQUFiO0FBQWMsUUFBQSxnQkFBZ0I7QUFBOUIsc0JBQ0ksNkJBQUMsU0FBRDtBQUFLLFFBQUEsZ0JBQWdCO0FBQXJCLHNCQUNJLDZCQUFDLENBQUQsQ0FBRyxLQUFILFFBQVUsS0FBS0QsS0FBTCxDQUFXRSxLQUFyQixDQURKLENBREosQ0FESixDQURKLGVBUUksNkJBQUMsQ0FBRCxDQUFHLFFBQUgscUJBQ0ksNkJBQUMsZUFBRDtBQUFXLFFBQUEsRUFBRTtBQUFiLHNCQUNRLDZCQUFDLFNBQUQscUJBQ0ksNkJBQUMsY0FBRDtBQUNJLFFBQUEsS0FBSyxFQUFFLEtBQUtGLEtBQUwsQ0FBV0csS0FEdEI7QUFFSSxRQUFBLElBQUksRUFBRSxLQUFLSCxLQUFMLENBQVdJLElBRnJCO0FBR0ksUUFBQSxLQUFLLEVBQUUsS0FBS0osS0FBTCxDQUFXSyxLQUh0QjtBQUlJLFFBQUEsS0FBSyxFQUFFLEtBQUtMLEtBQUwsQ0FBV007QUFKdEIsUUFESixDQURSLENBREosQ0FSSixDQURKLENBREo7QUF5Qkg7Ozs7RUFsQ3lCQyxnQjs7QUFxQzlCUixlQUFlLENBQUNTLFlBQWhCLEdBQStCLEVBQS9CO0FBR0FULGVBQWUsQ0FBQ1UsU0FBaEIsR0FBNEIsRUFBNUI7ZUFHZVYsZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBSb3csIENvbnRhaW5lciB9IGZyb20gJy4uLy4uL0dyaWQnO1xuaW1wb3J0IFZITWVkaWFDb250YWN0Q2FyZCBmcm9tICcuLi8uLi9Db21wb25lbnRzL01lZGlhQ29udGFjdENhcmQvaW5kZXgnO1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL3N0eWxlcyc7XG5cbmNsYXNzIFZITWVkaWFUZW1wbGF0ZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICA8Uy5XcmFwcGVyMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWluZXIgbWQgYWxpZ25JdGVtc0NlbnRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93IGFsaWduSXRlbXNDZW50ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTLlByZXNzPnt0aGlzLnByb3BzLnByZXNzfTwvUy5QcmVzcz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L1MuV3JhcHBlcjE+XG4gICAgICAgICAgICAgICAgICAgIDxTLldyYXBwZXIyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lciBtZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWSE1lZGlhQ29udGFjdENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGlzLnByb3BzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw9e3RoaXMucHJvcHMuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmU9e3RoaXMucHJvcHMucGhvbmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L1MuV3JhcHBlcjI+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApXG4gICAgfVxufVxuXG5WSE1lZGlhVGVtcGxhdGUuZGVmYXVsdFByb3BzID0ge1xufVxuXG5WSE1lZGlhVGVtcGxhdGUucHJvcFR5cGVzID0ge1xufVxuXG5leHBvcnQgZGVmYXVsdCBWSE1lZGlhVGVtcGxhdGU7XG4iXX0=