"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = _interopRequireDefault(require("../../Components/Column/index"));

var S = _interopRequireWildcard(require("./styles"));

var _Grid = require("../../Grid");

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VHVisaPipelineTemplate = /*#__PURE__*/function (_Component) {
  _inherits(VHVisaPipelineTemplate, _Component);

  var _super = _createSuper(VHVisaPipelineTemplate);

  function VHVisaPipelineTemplate(props) {
    var _this;

    _classCallCheck(this, VHVisaPipelineTemplate);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "shouldComponentUpdate", function (np, ne) {
      return true;
    });

    _defineProperty(_assertThisInitialized(_this), "_resetActionsHandle", function () {
      _this.setState({
        currentPosition: 0,
        currentIndex: -1,
        droppedBoard: -1,
        draggedBoard: -1,
        draggedTarget: '',
        droppedTarget: '',
        currentDrag: -1,
        addPosition: 'fistAll',
        render: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_eventHandle", function (e) {
      _this.props.appHandleEvents(e); // switch (true) {
      // }

    });

    _defineProperty(_assertThisInitialized(_this), "_onDragOver", function (ev) {
      ev.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "_onDragStart", function (ev, id, index, draggedBoard, draggedTarget) {
      _this.setState({
        currentDrag: id,
        currentIndex: index,
        draggedBoard: draggedBoard,
        draggedTarget: draggedTarget
      });

      ev.dataTransfer.setData("text", ev.target.id);
      ev.dataTransfer.dropEffect = "move";
    });

    _defineProperty(_assertThisInitialized(_this), "_onDragEnter", function (droppedBoard, droppedTarget) {
      _this.setState({
        droppedBoard: droppedBoard,
        droppedTarget: droppedTarget
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_onDragLeave", function (ev) {
      // console.log('dragLeave', ev.target.offsetTop, ev.clientY)
      if (ev.target.offsetTop < ev.clientY) {
        // console.log('vou inserir em baixo')
        _this.setState({
          addPosition: 'bottom'
        });
      } else {
        // console.log('vou inserir em cima')
        _this.setState({
          addPosition: 'top'
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_onDrop", function (ev) {
      ev.preventDefault();

      _this.props.changeVisaPipelineCardPosirion(_this.state.addPosition, _this.state.draggedBoard, _this.state.draggedTarget, _this.state.currentIndex, _this.state.droppedTarget, _this.state.droppedBoard, _this.state.currentPosition);
    });

    _this.state = {
      currentPosition: 0,
      currentIndex: -1,
      droppedBoard: -1,
      draggedBoard: -1,
      draggedTarget: '',
      droppedTarget: '',
      currentDrag: -1,
      addPosition: 'fistAll',
      render: true
    };
    return _this;
  }

  _createClass(VHVisaPipelineTemplate, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'row'
        }
      }, this.props.data.map(function (column) {
        return /*#__PURE__*/_react.default.createElement(_index.default, {
          column: column,
          onDrop: _this2._onDrop,
          onDragLeave: _this2._onDragLeave,
          onDragOver: _this2._onDragOver,
          onDragStart: _this2._onDragStart,
          onDragEnter: _this2._onDragEnter
        });
      })));
    }
  }]);

  return VHVisaPipelineTemplate;
}(_react.Component);

VHVisaPipelineTemplate.defaultProps = {};
VHVisaPipelineTemplate.propTypes = {};
var _default = VHVisaPipelineTemplate;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL1RlbXBsYXRlcy9WaXNhUGlwZWxpbmUvaW5kZXguanN4Il0sIm5hbWVzIjpbIlZIVmlzYVBpcGVsaW5lVGVtcGxhdGUiLCJwcm9wcyIsIm5wIiwibmUiLCJzZXRTdGF0ZSIsImN1cnJlbnRQb3NpdGlvbiIsImN1cnJlbnRJbmRleCIsImRyb3BwZWRCb2FyZCIsImRyYWdnZWRCb2FyZCIsImRyYWdnZWRUYXJnZXQiLCJkcm9wcGVkVGFyZ2V0IiwiY3VycmVudERyYWciLCJhZGRQb3NpdGlvbiIsInJlbmRlciIsImUiLCJhcHBIYW5kbGVFdmVudHMiLCJldiIsInByZXZlbnREZWZhdWx0IiwiaWQiLCJpbmRleCIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJ0YXJnZXQiLCJkcm9wRWZmZWN0Iiwib2Zmc2V0VG9wIiwiY2xpZW50WSIsImNoYW5nZVZpc2FQaXBlbGluZUNhcmRQb3NpcmlvbiIsInN0YXRlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJkYXRhIiwibWFwIiwiY29sdW1uIiwiX29uRHJvcCIsIl9vbkRyYWdMZWF2ZSIsIl9vbkRyYWdPdmVyIiwiX29uRHJhZ1N0YXJ0IiwiX29uRHJhZ0VudGVyIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLHNCOzs7OztBQUNGLGtDQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsNEVBZUssVUFBQ0MsRUFBRCxFQUFLQyxFQUFMLEVBQVk7QUFDaEMsYUFBTyxJQUFQO0FBQ0gsS0FqQmtCOztBQUFBLDBFQW1CRyxZQUFNO0FBQ3hCLFlBQUtDLFFBQUwsQ0FBYztBQUNaQyxRQUFBQSxlQUFlLEVBQUUsQ0FETDtBQUVaQyxRQUFBQSxZQUFZLEVBQUUsQ0FB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LGNBQUQsQ0FBTyxRQUFQLHFCQUNJO0FBQUssUUFBQSxLQUFLLEVBQUU7QUFBRWUsVUFBQUEsT0FBTyxFQUFFLE1BQVg7QUFBbUJDLFVBQUFBLGFBQWEsRUFBRTtBQUFsQztBQUFaLFNBQ0ssS0FBSzVCLEtBQUwsQ0FBVzZCLElBQVgsQ0FBZ0JDLEdBQWhCLENBQW9CLFVBQUNDLE1BQUQ7QUFBQSw0QkFDakIsNkJBQUMsY0FBRDtBQUFVLFVBQUEsTUFBTSxFQUFFQSxNQUFsQjtBQUNJLFVBQUEsTUFBTSxFQUFFLE1BQUksQ0FBQ0MsT0FEakI7QUFFSSxVQUFBLFdBQVcsRUFBRSxNQUFJLENBQUNDLFlBRnRCO0FBR0ksVUFBQSxVQUFVLEVBQUUsTUFBSSxDQUFDQyxXQUhyQjtBQUlJLFVBQUEsV0FBVyxFQUFFLE1BQUksQ0FBQ0MsWUFKdEI7QUFLSSxVQUFBLFdBQVcsRUFBRSxNQUFJLENBQUNDO0FBTHRCLFVBRGlCO0FBQUEsT0FBcEIsQ0FETCxDQURKLENBREo7QUFjSDs7OztFQWhHZ0NDLGdCOztBQW1HckN0QyxzQkFBc0IsQ0FBQ3VDLFlBQXZCLEdBQXNDLEVBQXRDO0FBR0F2QyxzQkFBc0IsQ0FBQ3dDLFNBQXZCLEdBQW1DLEVBQW5DO2VBR2V4QyxzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgVkhDb2x1bW4gZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9Db2x1bW4vaW5kZXgnXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCB7IFJvdyB9IGZyb20gJy4uLy4uL0dyaWQnO1xuXG5jbGFzcyBWSFZpc2FQaXBlbGluZVRlbXBsYXRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbjogMCxcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleDogLTEsXG4gICAgICAgICAgICBkcm9wcGVkQm9hcmQ6IC0xLFxuICAgICAgICAgICAgZHJhZ2dlZEJvYXJkOiAtMSxcbiAgICAgICAgICAgIGRyYWdnZWRUYXJnZXQ6ICcnLFxuICAgICAgICAgICAgZHJvcHBlZFRhcmdldDogJycsXG4gICAgICAgICAgICBjdXJyZW50RHJhZzogLTEsXG4gICAgICAgICAgICBhZGRQb3NpdGlvbjogJ2Zpc3RBbGwnLFxuICAgICAgICAgICAgcmVuZGVyOiB0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUgPSAobnAsIG5lKSA9PiB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgX3Jlc2V0QWN0aW9uc0hhbmRsZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY3VycmVudFBvc2l0aW9uOiAwLFxuICAgICAgICAgIGN1cnJlbnRJbmRleDogLTEsXG4gICAgICAgICAgZHJvcHBlZEJvYXJkOiAtMSxcbiAgICAgICAgICBkcmFnZ2VkQm9hcmQ6IC0xLFxuICAgICAgICAgIGRyYWdnZWRUYXJnZXQ6ICcnLFxuICAgICAgICAgIGRyb3BwZWRUYXJnZXQ6ICcnLFxuICAgICAgICAgIGN1cnJlbnREcmFnOiAtMSxcbiAgICAgICAgICBhZGRQb3NpdGlvbjogJ2Zpc3RBbGwnLFxuICAgICAgICAgIHJlbmRlcjogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICBcbiAgICBcbiAgICAgIF9ldmVudEhhbmRsZSA9IGUgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLmFwcEhhbmRsZUV2ZW50cyhlKVxuICAgICAgICAvLyBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgLy8gfVxuICAgICAgfVxuICAgIFxuICAgICAgX29uRHJhZ092ZXIgPSBldiA9PiB7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgXG4gICAgICBfb25EcmFnU3RhcnQgPSAoZXYsIGlkLCBpbmRleCwgZHJhZ2dlZEJvYXJkLCBkcmFnZ2VkVGFyZ2V0KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnREcmFnOiBpZCwgY3VycmVudEluZGV4OiBpbmRleCwgZHJhZ2dlZEJvYXJkLCBkcmFnZ2VkVGFyZ2V0fSlcbiAgICAgICAgZXYuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0XCIsIGV2LnRhcmdldC5pZCk7XG4gICAgICAgIGV2LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJtb3ZlXCI7XG4gICAgICB9XG4gICAgXG4gICAgICBfb25EcmFnRW50ZXIgPSAoZHJvcHBlZEJvYXJkLCBkcm9wcGVkVGFyZ2V0KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Ryb3BwZWRCb2FyZCwgZHJvcHBlZFRhcmdldH0pXG4gICAgICB9XG4gICAgXG4gICAgICBfb25EcmFnTGVhdmUgPSBldiA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2RyYWdMZWF2ZScsIGV2LnRhcmdldC5vZmZzZXRUb3AsIGV2LmNsaWVudFkpXG4gICAgICAgIGlmIChldi50YXJnZXQub2Zmc2V0VG9wIDwgZXYuY2xpZW50WSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3ZvdSBpbnNlcmlyIGVtIGJhaXhvJylcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2FkZFBvc2l0aW9uOiAnYm90dG9tJ30pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndm91IGluc2VyaXIgZW0gY2ltYScpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHthZGRQb3NpdGlvbjogJ3RvcCd9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXG4gICAgICBfb25Ecm9wID0gZXYgPT4ge1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFxuICAgICAgICB0aGlzLnByb3BzLmNoYW5nZVZpc2FQaXBlbGluZUNhcmRQb3NpcmlvbihcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYWRkUG9zaXRpb25cbiAgICAgICAgICAsIHRoaXMuc3RhdGUuZHJhZ2dlZEJvYXJkXG4gICAgICAgICAgLCB0aGlzLnN0YXRlLmRyYWdnZWRUYXJnZXRcbiAgICAgICAgICAsIHRoaXMuc3RhdGUuY3VycmVudEluZGV4XG4gICAgICAgICAgLCB0aGlzLnN0YXRlLmRyb3BwZWRUYXJnZXRcbiAgICAgICAgICAsIHRoaXMuc3RhdGUuZHJvcHBlZEJvYXJkXG4gICAgICAgICAgLCB0aGlzLnN0YXRlLmN1cnJlbnRQb3NpdGlvblxuICAgICAgICApXG4gICAgXG4gICAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnIH19PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kYXRhLm1hcCgoY29sdW1uKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZIQ29sdW1uIGNvbHVtbj17Y29sdW1ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJvcD17dGhpcy5fb25Ecm9wfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZ0xlYXZlPXt0aGlzLl9vbkRyYWdMZWF2ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdPdmVyPXt0aGlzLl9vbkRyYWdPdmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZ1N0YXJ0PXt0aGlzLl9vbkRyYWdTdGFydH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdFbnRlcj17dGhpcy5fb25EcmFnRW50ZXJ9PjwvVkhDb2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApXG4gICAgfVxufVxuXG5WSFZpc2FQaXBlbGluZVRlbXBsYXRlLmRlZmF1bHRQcm9wcyA9IHtcbn1cblxuVkhWaXNhUGlwZWxpbmVUZW1wbGF0ZS5wcm9wVHlwZXMgPSB7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZIVmlzYVBpcGVsaW5lVGVtcGxhdGVcbiJdfQ==