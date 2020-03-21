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

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var VHDateInput = /*#__PURE__*/function (_React$Component) {
  _inherits(VHDateInput, _React$Component);

  var _super = _createSuper(VHDateInput);

  function VHDateInput(props) {
    var _this;

    _classCallCheck(this, VHDateInput);

    _this = _super.call(this);
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
      return /*#__PURE__*/_react.default.createElement("input", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvRGF0ZUlucHV0L2luZGV4LmpzeCJdLCJuYW1lcyI6WyJWSERhdGVJbnB1dCIsInByb3BzIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImtleVByZXNzRnVuYyIsInN0YXRlIiwidmFsdWUiLCJlIiwid2hpY2giLCJ2YWwiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwic2xpY2UiLCJzZXRTdGF0ZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsVzs7Ozs7QUFFRix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsK0JBQXBCO0FBQ0MsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQiwrQkFBcEI7QUFDRCxVQUFLRSxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsS0FBSyxFQUFFO0FBREksS0FBYjtBQUppQjtBQVFsQjs7OztpQ0FDWUMsQyxFQUFHO0FBRWQsVUFBR0EsQ0FBQyxDQUFDQyxLQUFGLEtBQVksQ0FBZixFQUFrQjtBQUNoQixZQUFJQyxHQUFHLEdBQUcsS0FBS0osS0FBTCxDQUFXQyxLQUFyQjtBQUNBSSxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjs7QUFDQSxZQUFHQSxHQUFHLENBQUNHLE1BQUosSUFBYyxDQUFkLElBQW1CSCxHQUFHLENBQUNHLE1BQUosSUFBYyxDQUFwQyxFQUF1QztBQUNuQ0gsVUFBQUEsR0FBRyxHQUFHQSxHQUFHLENBQUNJLEtBQUosQ0FBVSxDQUFWLEVBQWFKLEdBQUcsQ0FBQ0csTUFBSixHQUFXLENBQXhCLENBQU47QUFDQUYsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDQSxlQUFLSyxRQUFMLENBQWM7QUFBQ1IsWUFBQUEsS0FBSyxFQUFFRztBQUFSLFdBQWQ7QUFDSDtBQUNGO0FBQ0Y7OztpQ0FFWUYsQyxFQUFHO0FBQ2QsVUFBSUUsR0FBRyxHQUFHRixDQUFDLENBQUNRLE1BQUYsQ0FBU1QsS0FBbkI7QUFDRUksTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQkYsR0FBdEI7O0FBQ0EsVUFBSUEsR0FBRyxDQUFDRyxNQUFKLEtBQWUsQ0FBbkIsRUFBc0I7QUFFcEJILFFBQUFBLEdBQUcsSUFBSSxHQUFQO0FBRUQsT0FKRCxNQUlPLElBQUlBLEdBQUcsQ0FBQ0csTUFBSixLQUFlLENBQW5CLEVBQXNCO0FBRTNCSCxRQUFBQSxHQUFHLElBQUksR0FBUDtBQUVEOztBQUVELFdBQUtLLFFBQUwsQ0FBYztBQUNaUixRQUFBQSxLQUFLLEVBQUVHO0FBREssT0FBZDtBQU1IOzs7NkJBR1E7QUFBQSxVQUVBSCxLQUZBLEdBRVMsS0FBS0QsS0FGZCxDQUVBQyxLQUZBO0FBR1AsVUFBTVUsV0FBVyxHQUFHLG9CQUFwQjtBQUVBLDBCQUFTO0FBQU8sUUFBQSxJQUFJLEVBQUcsTUFBZDtBQUFxQixRQUFBLEtBQUssRUFBRVYsS0FBNUI7QUFBbUMsUUFBQSxXQUFXLEVBQUVVLFdBQWhEO0FBQ1AsUUFBQSxRQUFRLEVBQUksS0FBS2QsWUFEVjtBQUN3QixRQUFBLFNBQVMsRUFBRSxLQUFLRTtBQUR4QyxRQUFUO0FBSUQ7Ozs7RUF2RHFCYSxlQUFNQyxTOztlQTREZmxCLFciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNsYXNzIFZIRGF0ZUlucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgIHRoaXMua2V5UHJlc3NGdW5jID0gdGhpcy5rZXlQcmVzc0Z1bmMuYmluZCh0aGlzKSBcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIHZhbHVlOiAnJ1xuICAgICAgfVxuICBcbiAgICB9XG4gICAga2V5UHJlc3NGdW5jKGUpIHtcbiAgICAgXG4gICAgICBpZihlLndoaWNoID09PSA4KSB7XG4gICAgICAgIHZhciB2YWwgPSB0aGlzLnN0YXRlLnZhbHVlO1xuICAgICAgICBjb25zb2xlLmxvZyh2YWwpO1xuICAgICAgICBpZih2YWwubGVuZ3RoID09IDMgfHwgdmFsLmxlbmd0aCA9PSA2KSB7XG4gICAgICAgICAgICB2YWwgPSB2YWwuc2xpY2UoMCwgdmFsLmxlbmd0aC0xKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbClcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiB2YWx9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBcbiAgICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgdmFyIHZhbCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICBjb25zb2xlLmxvZygnY2FsbGVkJywgdmFsKVxuICAgICAgICBpZiAodmFsLmxlbmd0aCA9PT0gMikge1xuICBcbiAgICAgICAgICB2YWwgKz0gJy8nO1xuICBcbiAgICAgICAgfSBlbHNlIGlmICh2YWwubGVuZ3RoID09PSA1KSB7XG4gIFxuICAgICAgICAgIHZhbCArPSAnLyc7XG4gIFxuICAgICAgICB9XG4gIFxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB2YWx1ZTogdmFsXG4gICAgICAgIH0pO1xuICBcbiAgICAgIFxuICAgICAgXG4gICAgfVxuICBcbiAgXG4gICAgcmVuZGVyKCkge1xuICBcbiAgICAgIGNvbnN0IHt2YWx1ZX0gPSB0aGlzLnN0YXRlO1xuICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSAnREFZIC8gTU9OVEggLyBZRUFSJztcbiAgXG4gICAgICByZXR1cm4gKCA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIHZhbHVlPXt2YWx1ZX0gcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICBvbkNoYW5nZSA9IHt0aGlzLmhhbmRsZUNoYW5nZX0gb25LZXlEb3duPXt0aGlzLmtleVByZXNzRnVuY30vPlxuICAgICAgKTtcbiAgXG4gICAgfVxuICBcbiAgfVxuXG5cbiAgZXhwb3J0IGRlZmF1bHQgVkhEYXRlSW5wdXQ7Il19