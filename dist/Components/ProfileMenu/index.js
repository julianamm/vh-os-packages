"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactScrollableAnchor = _interopRequireDefault(require("react-scrollable-anchor"));

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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var VHProfileMenu = /*#__PURE__*/function (_Component) {
  _inherits(VHProfileMenu, _Component);

  function VHProfileMenu() {
    _classCallCheck(this, VHProfileMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(VHProfileMenu).apply(this, arguments));
  }

  _createClass(VHProfileMenu, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_Grid.Container, {
        fullWidth: true
      }, _react.default.createElement(_Grid.Row, {
        column: true,
        fixed: true,
        width: '310px'
      }, this.props.links.map(function (link, index) {
        return _react.default.createElement(S.Wrapper, null, _react.default.createElement(_Img.default, {
          source: link.img,
          sm: true
        }), _react.default.createElement(S.Link, {
          href: link.href
        }, link.name));
      })));
    }
  }]);

  return VHProfileMenu;
}(_react.Component);

exports.default = VHProfileMenu;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvUHJvZmlsZU1lbnUvaW5kZXguanN4Il0sIm5hbWVzIjpbIlZIUHJvZmlsZU1lbnUiLCJwcm9wcyIsImxpbmtzIiwibWFwIiwibGluayIsImluZGV4IiwiaW1nIiwiaHJlZiIsIm5hbWUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLGE7Ozs7Ozs7Ozs7OzZCQUNSO0FBQ0wsYUFDSSw2QkFBQyxlQUFEO0FBQVcsUUFBQSxTQUFTO0FBQXBCLFNBQ0ksNkJBQUMsU0FBRDtBQUFLLFFBQUEsTUFBTSxNQUFYO0FBQVksUUFBQSxLQUFLLE1BQWpCO0FBQWtCLFFBQUEsS0FBSyxFQUFFO0FBQXpCLFNBRVEsS0FBS0MsS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxHQUFqQixDQUFxQixVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDbEMsZUFDSSw2QkFBQyxDQUFELENBQUcsT0FBSCxRQUNJLDZCQUFDLFlBQUQ7QUFBTyxVQUFBLE1BQU0sRUFBRUQsSUFBSSxDQUFDRSxHQUFwQjtBQUF5QixVQUFBLEVBQUU7QUFBM0IsVUFESixFQUVJLDZCQUFDLENBQUQsQ0FBRyxJQUFIO0FBQVEsVUFBQSxJQUFJLEVBQUVGLElBQUksQ0FBQ0c7QUFBbkIsV0FBMEJILElBQUksQ0FBQ0ksSUFBL0IsQ0FGSixDQURKO0FBTUgsT0FQRCxDQUZSLENBREosQ0FESjtBQWdCSDs7OztFQWxCc0NDLGdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNjcm9sbGFibGVBbmNob3IgZnJvbSAncmVhY3Qtc2Nyb2xsYWJsZS1hbmNob3InXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vc3R5bGVzJ1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3cgfSBmcm9tICcuLi8uLi9HcmlkLyc7XG5pbXBvcnQgVkhJbWcgZnJvbSBcIi4uL0ltZ1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVkhQcm9maWxlTWVudSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENvbnRhaW5lciBmdWxsV2lkdGg+XG4gICAgICAgICAgICAgICAgPFJvdyBjb2x1bW4gZml4ZWQgd2lkdGg9eyczMTBweCd9PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmxpbmtzLm1hcCgobGluaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Uy5XcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZISW1nIHNvdXJjZT17bGluay5pbWd9IHNtIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Uy5MaW5rIGhyZWY9e2xpbmsuaHJlZn0+e2xpbmsubmFtZX08L1MuTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TLldyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIClcbiAgICB9XG59Il19