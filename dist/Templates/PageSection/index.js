"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _reactScrollableAnchor = require("react-scrollable-anchor");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var VHPageSection = /*#__PURE__*/function (_Component) {
  _inherits(VHPageSection, _Component);

  var _super = _createSuper(VHPageSection);

  function VHPageSection() {
    _classCallCheck(this, VHPageSection);

    return _super.apply(this, arguments);
  }

  _createClass(VHPageSection, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _reactScrollableAnchor.configureAnchors)({
        offset: -80,
        scrollDuration: 1000,
        keepLastAnchorHash: false
      });
      (0, _reactScrollableAnchor.removeHash)();
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.content;
    }
  }]);

  return VHPageSection;
}(_react.Component);

VHPageSection.propTypes = {
  content: _propTypes.default.node.isRequired
};
var _default = VHPageSection;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL1RlbXBsYXRlcy9QYWdlU2VjdGlvbi9pbmRleC5qc3giXSwibmFtZXMiOlsiVkhQYWdlU2VjdGlvbiIsIm9mZnNldCIsInNjcm9sbER1cmF0aW9uIiwia2VlcExhc3RBbmNob3JIYXNoIiwicHJvcHMiLCJjb250ZW50IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsYTs7Ozs7Ozs7Ozs7Ozt3Q0FFZ0I7QUFDbEIsbURBQWlCO0FBQUVDLFFBQUFBLE1BQU0sRUFBRSxDQUFDLEVBQVg7QUFBZUMsUUFBQUEsY0FBYyxFQUFFLElBQS9CO0FBQXFDQyxRQUFBQSxrQkFBa0IsRUFBRTtBQUF6RCxPQUFqQjtBQUNBO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQU8sS0FBS0MsS0FBTCxDQUFXQyxPQUFsQjtBQUNEOzs7O0VBVHlCQyxnQjs7QUFXNUJOLGFBQWEsQ0FBQ08sU0FBZCxHQUEwQjtBQUN4QkYsRUFBQUEsT0FBTyxFQUFFRyxtQkFBVUMsSUFBVixDQUFlQztBQURBLENBQTFCO2VBSWVWLGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdvVG9BbmNob3IsIHJlbW92ZUhhc2gsIGNvbmZpZ3VyZUFuY2hvcnMgfSBmcm9tICdyZWFjdC1zY3JvbGxhYmxlLWFuY2hvcidcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY2xhc3MgVkhQYWdlU2VjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uZmlndXJlQW5jaG9ycyh7IG9mZnNldDogLTgwLCBzY3JvbGxEdXJhdGlvbjogMTAwMCwga2VlcExhc3RBbmNob3JIYXNoOiBmYWxzZSB9KVxuICAgIHJlbW92ZUhhc2goKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmNvbnRlbnRcbiAgfVxufVxuVkhQYWdlU2VjdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGNvbnRlbnQ6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgVkhQYWdlU2VjdGlvbiJdfQ==