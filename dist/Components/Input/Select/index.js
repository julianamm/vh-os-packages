"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _animated = _interopRequireDefault(require("react-select/animated"));

var _Text = _interopRequireDefault(require("../../Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var animatedComponents = (0, _animated.default)();

var VHSelect = function VHSelect(props) {
  var _React$useState = _react.default.useState(props.currentItem),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      handleChange = _React$useState2[1];

  _react.default.useEffect(function () {
    handleChange(props.currentItem);
  }, [props.currentItem]);

  var style = {
    control: function control(base) {
      return _objectSpread({}, base, {
        border: 0,
        boxShadow: "none",
        fontWeight: props.bold ? 'bold' : '500'
      });
    },
    indicatorSeparator: function indicatorSeparator(styles) {
      return {
        display: 'none'
      };
    },
    clearIndicator: function clearIndicator(styles) {
      return {
        display: 'none'
      };
    }
  };
  var styled = {
    indicatorSeparator: function indicatorSeparator(styles) {
      return {
        display: 'none'
      };
    },
    clearIndicator: function clearIndicator(styles) {
      return {
        display: 'none'
      };
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'relative',
      marginBottom: props.marginBottom ? props.marginBottom : '21px'
    }
  }, props.caption && /*#__PURE__*/_react.default.createElement(_Text.default, {
    text: props.caption,
    variant: "platform1",
    color: props.captionColor
  }), /*#__PURE__*/_react.default.createElement(_reactSelect.default, {
    styles: props.removeBorder ? style : styled,
    closeMenuOnSelect: !props.isMulti,
    className: props.className,
    isLoading: props.isLoading,
    isDisabled: props.isLoading || props.isDisabled,
    components: animatedComponents,
    value: value,
    isMulti: props.isMulti,
    isClearable: true,
    options: props.items,
    onChange: function onChange(newValue, actionMeta) {
      switch (true) {
        case actionMeta.action === "remove-value":
          var finalValue = [];

          if (newValue.value === 'zero') {
            newValue.value = 0;
          }

          handleChange(newValue);
          newValue.map(function (item) {
            finalValue.push(parseInt(item.value === 'zero' ? 0 : item.value));
          });
          props.onEvent({
            type: "OnChange",
            origin: "VHSelect",
            props: {
              data: props.data,
              item: finalValue,
              action: 'delete',
              order: props.order
            }
          });
          break;

        case actionMeta.action === "clear":
          props.onEvent({
            type: "OnChange",
            origin: "VHSelect",
            props: {
              data: props.data,
              item: null,
              action: "clear"
            }
          });
          break;

        case actionMeta.action === "select-option":
          var finalValueChange = [];

          if (newValue.value === 'zero') {
            newValue.value = 0;
          }

          handleChange(newValue);

          if (props.isMulti) {
            newValue.map(function (item) {
              finalValueChange.push(parseInt(item.value === 'zero' ? 0 : item.value));
            });
          }

          props.onEvent({
            type: "OnChange",
            origin: "VHSelect",
            props: {
              data: props.data,
              item: props.isMulti ? finalValueChange : newValue,
              action: 'add',
              order: props.order
            }
          });
          break;
      }
    }
  }), props.description && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'absolute',
      top: '60px'
    }
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    text: props.description,
    variant: "caption",
    color: props.descriptionColor
  })));
};

var _default = VHSelect;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvSW5wdXQvU2VsZWN0L2luZGV4LmpzeCJdLCJuYW1lcyI6WyJhbmltYXRlZENvbXBvbmVudHMiLCJWSFNlbGVjdCIsInByb3BzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImN1cnJlbnRJdGVtIiwidmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJ1c2VFZmZlY3QiLCJzdHlsZSIsImNvbnRyb2wiLCJiYXNlIiwiYm9yZGVyIiwiYm94U2hhZG93IiwiZm9udFdlaWdodCIsImJvbGQiLCJpbmRpY2F0b3JTZXBhcmF0b3IiLCJzdHlsZXMiLCJkaXNwbGF5IiwiY2xlYXJJbmRpY2F0b3IiLCJzdHlsZWQiLCJwb3NpdGlvbiIsIm1hcmdpbkJvdHRvbSIsImNhcHRpb24iLCJjYXB0aW9uQ29sb3IiLCJyZW1vdmVCb3JkZXIiLCJpc011bHRpIiwiY2xhc3NOYW1lIiwiaXNMb2FkaW5nIiwiaXNEaXNhYmxlZCIsIml0ZW1zIiwibmV3VmFsdWUiLCJhY3Rpb25NZXRhIiwiYWN0aW9uIiwiZmluYWxWYWx1ZSIsIm1hcCIsIml0ZW0iLCJwdXNoIiwicGFyc2VJbnQiLCJvbkV2ZW50IiwidHlwZSIsIm9yaWdpbiIsImRhdGEiLCJvcmRlciIsImZpbmFsVmFsdWVDaGFuZ2UiLCJkZXNjcmlwdGlvbiIsInRvcCIsImRlc2NyaXB0aW9uQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGtCQUFrQixHQUFHLHdCQUEzQjs7QUFFQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxLQUFLLEVBQUk7QUFBQSx3QkFFTUMsZUFBTUMsUUFBTixDQUFlRixLQUFLLENBQUNHLFdBQXJCLENBRk47QUFBQTtBQUFBLE1BRWpCQyxLQUZpQjtBQUFBLE1BRVZDLFlBRlU7O0FBR3hCSixpQkFBTUssU0FBTixDQUFnQixZQUFNO0FB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QUFMLEtBQWUsTUFBZixHQUF3QixDQUF4QixHQUE0QjhCLElBQUksQ0FBQzlCLEtBQWxDLENBQTlCO0FBQ0QsYUFGRDtBQUdEOztBQUNESixVQUFBQSxLQUFLLENBQUNxQyxPQUFOLENBQWM7QUFDWkMsWUFBQUEsSUFBSSxFQUFFLFVBRE07QUFFWkMsWUFBQUEsTUFBTSxFQUFFLFVBRkk7QUFHWnZDLFlBQUFBLEtBQUssRUFBRTtBQUNMd0MsY0FBQUEsSUFBSSxFQUFFeEMsS0FBSyxDQUFDd0MsSUFEUDtBQUVMTixjQUFBQSxJQUFJLEVBQUVsQyxLQUFLLENBQUN3QixPQUFOLEdBQWdCa0IsZ0JBQWhCLEdBQW1DYixRQUZwQztBQUdMRSxjQUFBQSxNQUFNLEVBQUUsS0FISDtBQUlMVSxjQUFBQSxLQUFLLEVBQUV6QyxLQUFLLENBQUN5QztBQUpSO0FBSEssV0FBZDtBQVVBO0FBckRKO0FBdUREO0FBbkVILElBVEYsRUErRUl6QyxLQUFLLENBQUMyQyxXQUFOLGlCQUNBO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRXhCLE1BQUFBLFFBQVEsRUFBRSxVQUFaO0FBQXdCeUIsTUFBQUEsR0FBRyxFQUFFO0FBQTdCO0FBQVosa0JBQ0UsNkJBQUMsYUFBRDtBQUNFLElBQUEsSUFBSSxFQUFFNUMsS0FBSyxDQUFDMkMsV0FEZDtBQUVFLElBQUEsT0FBTyxFQUFDLFNBRlY7QUFHRSxJQUFBLEtBQUssRUFBRTNDLEtBQUssQ0FBQzZDO0FBSGYsSUFERixDQWhGSixDQURGO0FBMkZELENBbEhEOztlQW9IZTlDLFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCc7XG5pbXBvcnQgbWFrZUFuaW1hdGVkIGZyb20gJ3JlYWN0LXNlbGVjdC9hbmltYXRlZCc7XG5pbXBvcnQgVkhUZXh0IGZyb20gJy4uLy4uL1RleHQnXG5cbmNvbnN0IGFuaW1hdGVkQ29tcG9uZW50cyA9IG1ha2VBbmltYXRlZCgpO1xuXG5jb25zdCBWSFNlbGVjdCA9IHByb3BzID0+IHtcblxuICBjb25zdCBbdmFsdWUsIGhhbmRsZUNoYW5nZV0gPSBSZWFjdC51c2VTdGF0ZShwcm9wcy5jdXJyZW50SXRlbSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaGFuZGxlQ2hhbmdlKHByb3BzLmN1cnJlbnRJdGVtKTtcbiAgfSwgW3Byb3BzLmN1cnJlbnRJdGVtXSlcblxuICBjb25zdCBzdHlsZSA9IHtcbiAgICBjb250cm9sOiBiYXNlID0+ICh7XG4gICAgICAuLi5iYXNlLFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICAgIGZvbnRXZWlnaHQ6IHByb3BzLmJvbGQgPyAnYm9sZCcgOiAnNTAwJ1xuICAgIH0pLFxuICAgIGluZGljYXRvclNlcGFyYXRvcjogKHN0eWxlcykgPT4gKHsgZGlzcGxheTogJ25vbmUnIH0pLFxuICAgIGNsZWFySW5kaWNhdG9yOiAoc3R5bGVzKSA9PiAoeyBkaXNwbGF5OiAnbm9uZScgfSlcbiAgfTtcblxuICBjb25zdCBzdHlsZWQgPSB7XG4gICAgaW5kaWNhdG9yU2VwYXJhdG9yOiAoc3R5bGVzKSA9PiAoeyBkaXNwbGF5OiAnbm9uZScgfSksXG4gICAgY2xlYXJJbmRpY2F0b3I6IChzdHlsZXMpID0+ICh7IGRpc3BsYXk6ICdub25lJyB9KVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgbWFyZ2luQm90dG9tOiBwcm9wcy5tYXJnaW5Cb3R0b20gPyBwcm9wcy5tYXJnaW5Cb3R0b20gOiAnMjFweCcgfX0+XG4gICAgICB7XG4gICAgICAgIHByb3BzLmNhcHRpb24gJiZcbiAgICAgICAgPFZIVGV4dFxuICAgICAgICAgIHRleHQ9e3Byb3BzLmNhcHRpb259XG4gICAgICAgICAgdmFyaWFudD1cInBsYXRmb3JtMVwiXG4gICAgICAgICAgY29sb3I9e3Byb3BzLmNhcHRpb25Db2xvcn1cbiAgICAgICAgLz5cbiAgICAgIH1cbiAgICAgIDxTZWxlY3RcbiAgICAgICAgc3R5bGVzPXtwcm9wcy5yZW1vdmVCb3JkZXIgPyBzdHlsZSA6IHN0eWxlZH1cbiAgICAgICAgY2xvc2VNZW51T25TZWxlY3Q9eyFwcm9wcy5pc011bHRpfVxuICAgICAgICBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgaXNMb2FkaW5nPXtwcm9wcy5pc0xvYWRpbmd9XG4gICAgICAgIGlzRGlzYWJsZWQ9e3Byb3BzLmlzTG9hZGluZyB8fCBwcm9wcy5pc0Rpc2FibGVkfVxuICAgICAgICBjb21wb25lbnRzPXthbmltYXRlZENvbXBvbmVudHN9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgaXNNdWx0aT17cHJvcHMuaXNNdWx0aX1cbiAgICAgICAgaXNDbGVhcmFibGU9e3RydWV9XG4gICAgICAgIG9wdGlvbnM9e3Byb3BzLml0ZW1zfVxuICAgICAgICBvbkNoYW5nZT17KG5ld1ZhbHVlLCBhY3Rpb25NZXRhKSA9PiB7XG4gICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlIGFjdGlvbk1ldGEuYWN0aW9uID09PSBcInJlbW92ZS12YWx1ZVwiOlxuICAgICAgICAgICAgICBsZXQgZmluYWxWYWx1ZSA9IFtdXG4gICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS52YWx1ZSA9PT0gJ3plcm8nKSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUudmFsdWUgPSAwXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgbmV3VmFsdWUubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGZpbmFsVmFsdWUucHVzaChwYXJzZUludChpdGVtLnZhbHVlID09PSAnemVybycgPyAwIDogaXRlbS52YWx1ZSkpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIHByb3BzLm9uRXZlbnQoe1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiT25DaGFuZ2VcIixcbiAgICAgICAgICAgICAgICBvcmlnaW46IFwiVkhTZWxlY3RcIixcbiAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgZGF0YTogcHJvcHMuZGF0YSxcbiAgICAgICAgICAgICAgICAgIGl0ZW06IGZpbmFsVmFsdWUsXG4gICAgICAgICAgICAgICAgICBhY3Rpb246ICdkZWxldGUnLFxuICAgICAgICAgICAgICAgICAgb3JkZXI6IHByb3BzLm9yZGVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBhY3Rpb25NZXRhLmFjdGlvbiA9PT0gXCJjbGVhclwiOlxuICAgICAgICAgICAgICBwcm9wcy5vbkV2ZW50KHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIk9uQ2hhbmdlXCIsXG4gICAgICAgICAgICAgICAgb3JpZ2luOiBcIlZIU2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgIGRhdGE6IHByb3BzLmRhdGEsXG4gICAgICAgICAgICAgICAgICBpdGVtOiBudWxsLFxuICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcImNsZWFyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIGFjdGlvbk1ldGEuYWN0aW9uID09PSBcInNlbGVjdC1vcHRpb25cIjpcbiAgICAgICAgICAgICAgbGV0IGZpbmFsVmFsdWVDaGFuZ2UgPSBbXVxuICAgICAgICAgICAgICBpZiAobmV3VmFsdWUudmFsdWUgPT09ICd6ZXJvJykge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnZhbHVlID0gMFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGhhbmRsZUNoYW5nZShuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgIGlmIChwcm9wcy5pc011bHRpKSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgZmluYWxWYWx1ZUNoYW5nZS5wdXNoKHBhcnNlSW50KGl0ZW0udmFsdWUgPT09ICd6ZXJvJyA/IDAgOiBpdGVtLnZhbHVlKSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHByb3BzLm9uRXZlbnQoe1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiT25DaGFuZ2VcIixcbiAgICAgICAgICAgICAgICBvcmlnaW46IFwiVkhTZWxlY3RcIixcbiAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgZGF0YTogcHJvcHMuZGF0YSxcbiAgICAgICAgICAgICAgICAgIGl0ZW06IHByb3BzLmlzTXVsdGkgPyBmaW5hbFZhbHVlQ2hhbmdlIDogbmV3VmFsdWUsXG4gICAgICAgICAgICAgICAgICBhY3Rpb246ICdhZGQnLFxuICAgICAgICAgICAgICAgICAgb3JkZXI6IHByb3BzLm9yZGVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICB7XG4gICAgICAgIHByb3BzLmRlc2NyaXB0aW9uICYmXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogJzYwcHgnIH19PlxuICAgICAgICAgIDxWSFRleHRcbiAgICAgICAgICAgIHRleHQ9e3Byb3BzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgdmFyaWFudD1cImNhcHRpb25cIlxuICAgICAgICAgICAgY29sb3I9e3Byb3BzLmRlc2NyaXB0aW9uQ29sb3J9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZIU2VsZWN0XG4iXX0=