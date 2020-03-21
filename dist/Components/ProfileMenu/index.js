"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactScrollableAnchor = require("react-scrollable-anchor");

var S = _interopRequireWildcard(require("./styles"));

var _Grid = require("../../Grid/");

var _Img = _interopRequireDefault(require("../Img"));

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

var VHProfileMenu = /*#__PURE__*/function (_Component) {
  _inherits(VHProfileMenu, _Component);

  var _super = _createSuper(VHProfileMenu);

  function VHProfileMenu() {
    _classCallCheck(this, VHProfileMenu);

    return _super.apply(this, arguments);
  }

  _createClass(VHProfileMenu, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_Grid.Container, {
        fullWidth: true
      }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
        column: true,
        fixed: true,
        width: '310px'
      }, this.props.links.map(function (link, index) {
        return /*#__PURE__*/_react.default.createElement(S.Wrapper, null, /*#__PURE__*/_react.default.createElement(_Img.default, {
          source: link.img,
          sm: true
        }), /*#__PURE__*/_react.default.createElement(S.Link, {
          onClick: function onClick() {
            (0, _reactScrollableAnchor.removeHash)();
          },
          href: link.href
        }, link.name));
      })));
    }
  }]);

  return VHProfileMenu;
}(_react.Component);

exports.default = VHProfileMenu;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvUHJvZmlsZU1lbnUvaW5kZXguanN4Il0sIm5hbWVzIjpbIlZIUHJvZmlsZU1lbnUiLCJwcm9wcyIsImxpbmtzIiwibWFwIiwibGluayIsImluZGV4IiwiaW1nIiwiaHJlZiIsIm5hbWUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxhOzs7Ozs7Ozs7Ozs7OzZCQUNSO0FBQ0wsMEJBQ0ksNkJBQUMsZUFBRDtBQUFXLFFBQUEsU0FBUztBQUFwQixzQkFDSSw2QkFBQyxTQUFEO0FBQUssUUFBQSxNQUFNLE1BQVg7QUFBWSxRQUFBLEtBQUssTUFBakI7QUFBa0IsUUFBQSxLQUFLLEVBQUU7QUFBekIsU0FFUSxLQUFLQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLEdBQWpCLENBQXFCLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUNsQyw0QkFDSSw2QkFBQyxDQUFELENBQUcsT0FBSCxxQkFDSSw2QkFBQyxZQUFEO0FBQU8sVUFBQSxNQUFNLEVBQUVELElBQUksQ0FBQ0UsR0FBcEI7QUFBeUIsVUFBQSxFQUFFO0FBQTNCLFVBREosZUFFSSw2QkFBQyxDQUFELENBQUcsSUFBSDtBQUFRLFVBQUEsT0FBTyxFQUFFLG1CQUFJO0FBQUM7QUFBYSxXQUFuQztBQUFxQyxVQUFBLElBQUksRUFBRUYsSUFBSSxDQUFDRztBQUFoRCxXQUF1REgsSUFBSSxDQUFDSSxJQUE1RCxDQUZKLENBREo7QUFNSCxPQVBELENBRlIsQ0FESixDQURKO0FBZ0JIOzs7O0VBbEJzQ0MsZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTY3JvbGxhYmxlQW5jaG9yLCByZW1vdmVIYXNoIH0gZnJvbSAncmVhY3Qtc2Nyb2xsYWJsZS1hbmNob3InXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vc3R5bGVzJ1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3cgfSBmcm9tICcuLi8uLi9HcmlkLyc7XG5pbXBvcnQgVkhJbWcgZnJvbSBcIi4uL0ltZ1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVkhQcm9maWxlTWVudSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENvbnRhaW5lciBmdWxsV2lkdGg+XG4gICAgICAgICAgICAgICAgPFJvdyBjb2x1bW4gZml4ZWQgd2lkdGg9eyczMTBweCd9PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmxpbmtzLm1hcCgobGluaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Uy5XcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZISW1nIHNvdXJjZT17bGluay5pbWd9IHNtIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Uy5MaW5rIG9uQ2xpY2s9eygpPT57cmVtb3ZlSGFzaCgpfX0gaHJlZj17bGluay5ocmVmfT57bGluay5uYW1lfTwvUy5MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1MuV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgKVxuICAgIH1cbn0iXX0=