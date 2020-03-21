"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var VHDateInput = /*#__PURE__*/function (_React$Component) {
  _inherits(VHDateInput, _React$Component);

  function VHDateInput(props) {
    var _this;

    _classCallCheck(this, VHDateInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VHDateInput).call(this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.keyPressFunc = _this.keyPressFunc.bind(_assertThisInitialized(_this));
    _this.state = {
      value: ''
    };
    return _this;
  }

  _createClass(VHDateInput, [{
    key: "keyPressFunc",
    value: function keyPressFunc(e) {
      if (e.which === 8) {
        var val = this.state.value;
        console.log(val);

        if (val.length == 3 || val.length == 6) {
          val = val.slice(0, val.length - 1);
          console.log(val);
          this.setState({
            value: val
          });
        }
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      var val = e.target.value;
      console.log('called', val);

      if (val.length === 2) {
        val += '/';
      } else if (val.length === 5) {
        val += '/';
      }

      this.setState({
        value: val
      });
    }
  }, {
    key: "render",
    value: function render() {
      var value = this.state.value;
      var placeholder = 'DAY / MONTH / YEAR';
      return _react.default.createElement("input", {
        type: "text",
        value: value,
        placeholder: placeholder,
        onChange: this.handleChange,
        onKeyDown: this.keyPressFunc
      });
    }
  }]);

  return VHDateInput;
}(_react.default.Component);

var _default = VHDateInput;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvRGF0ZUlucHV0L2luZGV4LmpzeCJdLCJuYW1lcyI6WyJWSERhdGVJbnB1dCIsInByb3BzIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImtleVByZXNzRnVuYyIsInN0YXRlIiwidmFsdWUiLCJlIiwid2hpY2giLCJ2YWwiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwic2xpY2UiLCJzZXRTdGF0ZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxXOzs7QUFFRix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsK0JBQXBCO0FBQ0MsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQiwrQkFBcEI7QUFDRCxVQUFLRSxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsS0FBSyxFQUFFO0FBREksS0FBYjtBQUppQjtBQVFsQjs7OztpQ0FDWUMsQyxFQUFHO0FBRWQsVUFBR0EsQ0FBQyxDQUFDQyxLQUFGLEtBQVksQ0FBZixFQUFrQjtBQUNoQixZQUFJQyxHQUFHLEdBQUcsS0FBS0osS0FBTCxDQUFXQyxLQUFyQjtBQUNBSSxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjs7QUFDQSxZQUFHQSxHQUFHLENBQUNHLE1BQUosSUFBYyxDQUFkLElBQW1CSCxHQUFHLENBQUNHLE1BQUosSUFBYyxDQUFwQyxFQUF1QztBQUNuQ0gsVUFBQUEsR0FBRyxHQUFHQSxHQUFHLENBQUNJLEtBQUosQ0FBVSxDQUFWLEVBQWFKLEdBQUcsQ0FBQ0csTUFBSixHQUFXLENBQXhCLENBQU47QUFDQUYsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDQSxlQUFLSyxRQUFMLENBQWM7QUFBQ1IsWUFBQUEsS0FBSyxFQUFFRztBQUFSLFdBQWQ7QUFDSDtBQUNGO0FBQ0Y7OztpQ0FFWUYsQyxFQUFHO0FBQ2QsVUFBSUUsR0FBRyxHQUFHRixDQUFDLENBQUNRLE1BQUYsQ0FBU1QsS0FBbkI7QUFDRUksTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQkYsR0FBdEI7O0FBQ0EsVUFBSUEsR0FBRyxDQUFDRyxNQUFKLEtBQWUsQ0FBbkIsRUFBc0I7QUFFcEJILFFBQUFBLEdBQUcsSUFBSSxHQUFQO0FBRUQsT0FKRCxNQUlPLElBQUlBLEdBQUcsQ0FBQ0csTUFBSixLQUFlLENBQW5CLEVBQXNCO0FBRTNCSCxRQUFBQSxHQUFHLElBQUksR0FBUDtBQUVEOztBQUVELFdBQUtLLFFBQUwsQ0FBYztBQUNaUixRQUFBQSxLQUFLLEVBQUVHO0FBREssT0FBZDtBQU1IOzs7NkJBR1E7QUFBQSxVQUVBSCxLQUZBLEdBRVMsS0FBS0QsS0FGZCxDQUVBQyxLQUZBO0FBR1AsVUFBTVUsV0FBVyxHQUFHLG9CQUFwQjtBQUVBLGFBQVM7QUFBTyxRQUFBLElBQUksRUFBRyxNQUFkO0FBQXFCLFFBQUEsS0FBSyxFQUFFVixLQUE1QjtBQUFtQyxRQUFBLFdBQVcsRUFBRVUsV0FBaEQ7QUFDUCxRQUFBLFFBQVEsRUFBSSxLQUFLZCxZQURWO0FBQ3dCLFFBQUEsU0FBUyxFQUFFLEtBQUtFO0FBRHhDLFFBQVQ7QUFJRDs7OztFQXZEcUJhLGVBQU1DLFM7O2VBNERmbEIsVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY2xhc3MgVkhEYXRlSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgdGhpcy5rZXlQcmVzc0Z1bmMgPSB0aGlzLmtleVByZXNzRnVuYy5iaW5kKHRoaXMpIFxuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgdmFsdWU6ICcnXG4gICAgICB9XG4gIFxuICAgIH1cbiAgICBrZXlQcmVzc0Z1bmMoZSkge1xuICAgICBcbiAgICAgIGlmKGUud2hpY2ggPT09IDgpIHtcbiAgICAgICAgdmFyIHZhbCA9IHRoaXMuc3RhdGUudmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKHZhbCk7XG4gICAgICAgIGlmKHZhbC5sZW5ndGggPT0gMyB8fCB2YWwubGVuZ3RoID09IDYpIHtcbiAgICAgICAgICAgIHZhbCA9IHZhbC5zbGljZSgwLCB2YWwubGVuZ3RoLTEpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codmFsKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IHZhbH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgICB2YXIgdmFsID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjYWxsZWQnLCB2YWwpXG4gICAgICAgIGlmICh2YWwubGVuZ3RoID09PSAyKSB7XG4gIFxuICAgICAgICAgIHZhbCArPSAnLyc7XG4gIFxuICAgICAgICB9IGVsc2UgaWYgKHZhbC5sZW5ndGggPT09IDUpIHtcbiAgXG4gICAgICAgICAgdmFsICs9ICcvJztcbiAgXG4gICAgICAgIH1cbiAgXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHZhbHVlOiB2YWxcbiAgICAgICAgfSk7XG4gIFxuICAgICAgXG4gICAgICBcbiAgICB9XG4gIFxuICBcbiAgICByZW5kZXIoKSB7XG4gIFxuICAgICAgY29uc3Qge3ZhbHVlfSA9IHRoaXMuc3RhdGU7XG4gICAgICBjb25zdCBwbGFjZWhvbGRlciA9ICdEQVkgLyBNT05USCAvIFlFQVInO1xuICBcbiAgICAgIHJldHVybiAoIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgdmFsdWU9e3ZhbHVlfSBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgIG9uQ2hhbmdlID0ge3RoaXMuaGFuZGxlQ2hhbmdlfSBvbktleURvd249e3RoaXMua2V5UHJlc3NGdW5jfS8+XG4gICAgICApO1xuICBcbiAgICB9XG4gIFxuICB9XG5cblxuICBleHBvcnQgZGVmYXVsdCBWSERhdGVJbnB1dDsiXX0=