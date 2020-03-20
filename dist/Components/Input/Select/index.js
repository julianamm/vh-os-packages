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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
  return _react.default.createElement("div", {
    style: {
      position: 'relative',
      marginBottom: props.marginBottom ? props.marginBottom : '21px'
    }
  }, props.caption && _react.default.createElement(_Text.default, {
    text: props.caption,
    variant: "platform1",
    color: props.captionColor
  }), _react.default.createElement(_reactSelect.default, {
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
  }), props.description && _react.default.createElement("div", {
    style: {
      position: 'absolute',
      top: '60px'
    }
  }, _react.default.createElement(_Text.default, {
    text: props.description,
    variant: "caption",
    color: props.descriptionColor
  })));
};

var _default = VHSelect;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvSW5wdXQvU2VsZWN0L2luZGV4LmpzeCJdLCJuYW1lcyI6WyJhbmltYXRlZENvbXBvbmVudHMiLCJWSFNlbGVjdCIsInByb3BzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImN1cnJlbnRJdGVtIiwidmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJ1c2VFZmZlY3QiLCJzdHlsZSIsImNvbnRyb2wiLCJiYXNlIiwiYm9yZGVyIiwiYm94U2hhZG93IiwiZm9udFdlaWdodCIsImJvbGQiLCJpbmRpY2F0b3JTZXBhcmF0b3IiLCJzdHlsZXMiLCJkaXNwbGF5IiwiY2xlYXJJbmRpY2F0b3IiLCJzdHlsZWQiLCJwb3NpdGlvbiIsIm1hcmdpbkJvdHRvbSIsImNhcHRpb24iLCJjYXB0aW9uQ29sb3IiLCJyZW1vdmVCb3JkZXIiLCJpc011bHRpIiwiY2xhc3NOYW1lIiwiaXNMb2FkaW5nIiwiaXNEaXNhYmxlZCIsIml0ZW1zIiwibmV3VmFsdWUiLCJhY3Rpb25NZXRhIiwiYWN0aW9uIiwiZmluYWxWYWx1ZSIsIm1hcCIsIml0ZW0iLCJwdXNoIiwicGFyc2VJbnQiLCJvbkV2ZW50IiwidHlwZSIsIm9yaWdpbiIsImRhdGEiLCJvcmRlciIsImZpbmFsVmFsdWVDaGFuZ2UiLCJkZXNjcmlwdGlvbiIsInRvcCIsImRlc2NyaXB0aW9uQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCLEdBQUcsd0JBQTNCOztBQUVBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFDLEtBQUssRUFBSTtBQUFBLHdCQUVNQyxlQUFNQyxRQUFOLENBQWVGLEtBQUssQ0FBQ0csV0FBckIsQ0FGTjtBQUFBO0FBQUEsTUFFakJDLEtBRmlCO0FBQUEsTUFFVkMsWUFGVTs7QUFHeEJKLGlCQUFNSyxTQUFOLENBQWdCLFlBQU07QUFDcEJELElBQUFBLFlBQVksQ0FBQ0wsS0FBSyxDQUFDRyxXQUFQLENBQVo7QUFDRCxHQUZELEVBRUcsQ0FBQ0gsS0FBSyxDQUFDRyxXQUFQLENBRkg7O0FBSUEsTUFBTUksS0FBSyxHQUFHO0FBQ1pDLElBQUFBLE9BQU8sRUFBRSxpQkFBQUMsSUFBSTtBQUFBLCtCQUNSQSxJQURRO0FBRVhDLFFBQUFBLE1BQU0sRUFBRSxDQUZHO0FBR1hDLFFBQUFBLFNBQVMsRUFBRSxNQUhBO0FBSVhDLFFBQUFBLFVBQVUsRUFBRVosS0FBSyxDQUFDYSxJQUFOLEdBQWEsTUFBYixHQUFzQjtBQUp2QjtBQUFBLEtBREQ7QUFPWkMsSUFBQUEsa0JBQWtCLEVBQUUsNEJBQUNDLE1BQUQ7QUFBQSxhQUFhO0FBQUVDLFFBQUFBLE9BQU8sRUFBRTtBQUFYLE9BQWI7QUFBQSxLQVBSO0FBUVpDLElBQUFBLGNBQWMsRUFBRSx3QkFBQ0YsTUFBRDtBQUFBLGFBQWE7QUFBRUMsUUFBQUEsT0FBTyxFQUFFO0FBQVgsT0FBYjtBQUFBO0FBUkosR0FBZDtBQVdBLE1BQU1FLE1BQU0sR0FBRztBQUNiSixJQUFBQSxrQkFBa0IsRUFBRSw0QkFBQ0MsTUFBRDtBQUFBLGFBQWE7QUFBRUMsUUFBQUEsT0FBTyxFQUFFO0FBQVgsT0FBYjtBQUFBLEtBRFA7QUFFYkMsSUFBQUEsY0FBYyxFQUFFLHdCQUFDRixNQUFEO0FBQUEsYUFBYTtBQUFFQyxRQUFBQSxPQUFPLEVBQUU7QUFBWCxPQUFiO0FBQUE7QUFGSCxHQUFmO0FBS0EsU0FDRTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVHLE1BQUFBLFFBQVEsRUFBRSxVQUFaO0FBQXdCQyxNQUFBQSxZQUFZLEVBQUVwQixLQUFLLENBQUNvQixZQUFOLEdBQXFCcEIsS0FBSyxDQUFDb0IsWUFBM0IsR0FBMEM7QUFBaEY7QUFBWixLQUVJcEIsS0FBSyxDQUFDcUIsT0FBTixJQUNBLDZCQUFDLGFBQUQ7QUFDRSxJQUFBLElBQUksRUFBRXJCLEtBQUssQ0FBQ3FCLE9BRGQ7QUFFRSxJQUFBLE9BQU8sRUFBQyxXQUZWO0FBR0UsSUFBQSxLQUFLLEVBQUVyQixLQUFLLENBQUNzQjtBQUhmLElBSEosRUFTRSw2QkFBQyxvQkFBRDtBQUNFLElBQUEsTUFBTSxFQUFFdEIsS0FBSyxDQUFDdUIsWUFBTixHQUFxQmhCLEtBQXJCLEdBQTZCVyxNQUR2QztBQUVFLElBQUEsaUJBQWlCLEVBQUUsQ0FBQ2xCLEtBQUssQ0FBQ3dCLE9BRjVCO0FBR0UsSUFBQSxTQUFTLEVBQUV4QixLQUFLLENBQUN5QixTQUhuQjtBQUlFLElBQUEsU0FBUyxFQUFFekIsS0FBSyxDQUFDMEIsU0FKbkI7QUFLRSxJQUFBLFVBQVUsRUFBRTFCLEtBQUssQ0FBQzBCLFNBQU4sSUFBbUIxQixLQUFLLENBQUMyQixVQUx2QztBQU1FLElBQUEsVUFBVSxFQUFFN0Isa0JBTmQ7QUFPRSxJQUFBLEtBQUssRUFBRU0sS0FQVDtBQVFFLElBQUEsT0FBTyxFQUFFSixLQUFLLENBQUN3QixPQVJqQjtBQVNFLElBQUEsV0FBVyxFQUFFLElBVGY7QUFVRSxJQUFBLE9BQU8sRUFBRXhCLEtBQUssQ0FBQzRCLEtBVmpCO0FBV0UsSUFBQSxRQUFRLEVBQUUsa0JBQUNDLFFBQUQsRUFBV0MsVUFBWCxFQUEwQjtBQUNsQyxjQUFRLElBQVI7QUFDRSxhQUFLQSxVQUFVLENBQUNDLE1BQVgsS0FBc0IsY0FBM0I7QUFDRSxjQUFJQyxVQUFVLEdBQUcsRUFBakI7O0FBQ0EsY0FBSUgsUUFBUSxDQUFDekIsS0FBVCxLQUFtQixNQUF2QixFQUErQjtBQUM3QnlCLFlBQUFBLFFBQVEsQ0FBQ3pCLEtBQVQsR0FBaUIsQ0FBakI7QUFDRDs7QUFDREMsVUFBQUEsWUFBWSxDQUFDd0IsUUFBRCxDQUFaO0FBQ0FBLFVBQUFBLFFBQVEsQ0FBQ0ksR0FBVCxDQUFhLFVBQUFDLElBQUksRUFBSTtBQUNuQkYsWUFBQUEsVUFBVSxDQUFDRyxJQUFYLENBQWdCQyxRQUFRLENBQUNGLElBQUksQ0FBQzlCLEtBQUwsS0FBZSxNQUFmLEdBQXdCLENBQXhCLEdBQTRCOEIsSUFBSSxDQUFDOUIsS0FBbEMsQ0FBeEI7QUFDRCxXQUZEO0FBR0FKLFVBQUFBLEtBQUssQ0FBQ3FDLE9BQU4sQ0FBYztBQUNaQyxZQUFBQSxJQUFJLEVBQUUsVUFETTtBQUVaQyxZQUFBQSxNQUFNLEVBQUUsVUFGSTtBQUdadkMsWUFBQUEsS0FBSyxFQUFFO0FBQ0x3QyxjQUFBQSxJQUFJLEVBQUV4QyxLQUFLLENBQUN3QyxJQURQO0FBRUxOLGNBQUFBLElBQUksRUFBRUYsVUFGRDtBQUdMRCxjQUFBQSxNQUFNLEVBQUUsUUFISDtBQUlMVSxjQUFBQSxLQUFLLEVBQUV6QyxLQUFLLENBQUN5QztBQUpSO0FBSEssV0FBZDtBQVVBOztBQUNGLGFBQUtYLFVBQVUsQ0FBQ0MsTUFBWCxLQUFzQixPQUEzQjtBQUNFL0IsVUFBQUEsS0FBSyxDQUFDcUMsT0FBTixDQUFjO0FBQ1pDLFlBQUFBLElBQUksRUFBRSxVQURNO0FBRVpDLFlBQUFBLE1BQU0sRUFBRSxVQUZJO0FBR1p2QyxZQUFBQSxLQUFLLEVBQUU7QUFDTHdDLGNBQUFBLElBQUksRUFBRXhDLEtBQUssQ0FBQ3dDLElBRFA7QUFFTE4sY0FBQUEsSUFBSSxFQUFFLElBRkQ7QUFHTEgsY0FBQUEsTUFBTSxFQUFFO0FBSEg7QUFISyxXQUFkO0FBU0E7O0FBQ0YsYUFBS0QsVUFBVSxDQUFDQyxNQUFYLEtBQXNCLGVBQTNCO0FBQ0UsY0FBSVcsZ0JBQWdCLEdBQUcsRUFBdkI7O0FBQ0EsY0FBSWIsUUFBUSxDQUFDekIsS0FBVCxLQUFtQixNQUF2QixFQUErQjtBQUM3QnlCLFlBQUFBLFFBQVEsQ0FBQ3pCLEtBQVQsR0FBaUIsQ0FBakI7QUFDRDs7QUFDREMsVUFBQUEsWUFBWSxDQUFDd0IsUUFBRCxDQUFaOztBQUNBLGNBQUk3QixLQUFLLENBQUN3QixPQUFWLEVBQW1CO0FBQ2pCSyxZQUFBQSxRQUFRLENBQUNJLEdBQVQsQ0FBYSxVQUFBQyxJQUFJLEVBQUk7QUFDbkJRLGNBQUFBLGdCQUFnQixDQUFDUCxJQUFqQixDQUFzQkMsUUFBUSxDQUFDRixJQUFJLENBQUM5QixLQUFMLEtBQWUsTUFBZixHQUF3QixDQUF4QixHQUE0QjhCLElBQUksQ0FBQzlCLEtBQWxDLENBQTlCO0FBQ0QsYUFGRDtBQUdEOztBQUNESixVQUFBQSxLQUFLLENBQUNxQyxPQUFOLENBQWM7QUFDWkMsWUFBQUEsSUFBSSxFQUFFLFVBRE07QUFFWkMsWUFBQUEsTUFBTSxFQUFFLFVBRkk7QUFHWnZDLFlBQUFBLEtBQUssRUFBRTtBQUNMd0MsY0FBQUEsSUFBSSxFQUFFeEMsS0FBSyxDQUFDd0MsSUFEUDtBQUVMTixjQUFBQSxJQUFJLEVBQUVsQyxLQUFLLENBQUN3QixPQUFOLEdBQWdCa0IsZ0JBQWhCLEdBQW1DYixRQUZwQztBQUdMRSxjQUFBQSxNQUFNLEVBQUUsS0FISDtBQUlMVSxjQUFBQSxLQUFLLEVBQUV6QyxLQUFLLENBQUN5QztBQUpSO0FBSEssV0FBZDtBQVVBO0FBckRKO0FBdUREO0FBbkVILElBVEYsRUErRUl6QyxLQUFLLENBQUMyQyxXQUFOLElBQ0E7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFeEIsTUFBQUEsUUFBUSxFQUFFLFVBQVo7QUFBd0J5QixNQUFBQSxHQUFHLEVBQUU7QUFBN0I7QUFBWixLQUNFLDZCQUFDLGFBQUQ7QUFDRSxJQUFBLElBQUksRUFBRTVDLEtBQUssQ0FBQzJDLFdBRGQ7QUFFRSxJQUFBLE9BQU8sRUFBQyxTQUZWO0FBR0UsSUFBQSxLQUFLLEVBQUUzQyxLQUFLLENBQUM2QztBQUhmLElBREYsQ0FoRkosQ0FERjtBQTJGRCxDQWxIRDs7ZUFvSGU5QyxRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnO1xuaW1wb3J0IG1ha2VBbmltYXRlZCBmcm9tICdyZWFjdC1zZWxlY3QvYW5pbWF0ZWQnO1xuaW1wb3J0IFZIVGV4dCBmcm9tICcuLi8uLi9UZXh0J1xuXG5jb25zdCBhbmltYXRlZENvbXBvbmVudHMgPSBtYWtlQW5pbWF0ZWQoKTtcblxuY29uc3QgVkhTZWxlY3QgPSBwcm9wcyA9PiB7XG5cbiAgY29uc3QgW3ZhbHVlLCBoYW5kbGVDaGFuZ2VdID0gUmVhY3QudXNlU3RhdGUocHJvcHMuY3VycmVudEl0ZW0pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGhhbmRsZUNoYW5nZShwcm9wcy5jdXJyZW50SXRlbSk7XG4gIH0sIFtwcm9wcy5jdXJyZW50SXRlbV0pXG5cbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgY29udHJvbDogYmFzZSA9PiAoe1xuICAgICAgLi4uYmFzZSxcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgICBmb250V2VpZ2h0OiBwcm9wcy5ib2xkID8gJ2JvbGQnIDogJzUwMCdcbiAgICB9KSxcbiAgICBpbmRpY2F0b3JTZXBhcmF0b3I6IChzdHlsZXMpID0+ICh7IGRpc3BsYXk6ICdub25lJyB9KSxcbiAgICBjbGVhckluZGljYXRvcjogKHN0eWxlcykgPT4gKHsgZGlzcGxheTogJ25vbmUnIH0pXG4gIH07XG5cbiAgY29uc3Qgc3R5bGVkID0ge1xuICAgIGluZGljYXRvclNlcGFyYXRvcjogKHN0eWxlcykgPT4gKHsgZGlzcGxheTogJ25vbmUnIH0pLFxuICAgIGNsZWFySW5kaWNhdG9yOiAoc3R5bGVzKSA9PiAoeyBkaXNwbGF5OiAnbm9uZScgfSlcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIG1hcmdpbkJvdHRvbTogcHJvcHMubWFyZ2luQm90dG9tID8gcHJvcHMubWFyZ2luQm90dG9tIDogJzIxcHgnIH19PlxuICAgICAge1xuICAgICAgICBwcm9wcy5jYXB0aW9uICYmXG4gICAgICAgIDxWSFRleHRcbiAgICAgICAgICB0ZXh0PXtwcm9wcy5jYXB0aW9ufVxuICAgICAgICAgIHZhcmlhbnQ9XCJwbGF0Zm9ybTFcIlxuICAgICAgICAgIGNvbG9yPXtwcm9wcy5jYXB0aW9uQ29sb3J9XG4gICAgICAgIC8+XG4gICAgICB9XG4gICAgICA8U2VsZWN0XG4gICAgICAgIHN0eWxlcz17cHJvcHMucmVtb3ZlQm9yZGVyID8gc3R5bGUgOiBzdHlsZWR9XG4gICAgICAgIGNsb3NlTWVudU9uU2VsZWN0PXshcHJvcHMuaXNNdWx0aX1cbiAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9XG4gICAgICAgIGlzTG9hZGluZz17cHJvcHMuaXNMb2FkaW5nfVxuICAgICAgICBpc0Rpc2FibGVkPXtwcm9wcy5pc0xvYWRpbmcgfHwgcHJvcHMuaXNEaXNhYmxlZH1cbiAgICAgICAgY29tcG9uZW50cz17YW5pbWF0ZWRDb21wb25lbnRzfVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIGlzTXVsdGk9e3Byb3BzLmlzTXVsdGl9XG4gICAgICAgIGlzQ2xlYXJhYmxlPXt0cnVlfVxuICAgICAgICBvcHRpb25zPXtwcm9wcy5pdGVtc31cbiAgICAgICAgb25DaGFuZ2U9eyhuZXdWYWx1ZSwgYWN0aW9uTWV0YSkgPT4ge1xuICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgY2FzZSBhY3Rpb25NZXRhLmFjdGlvbiA9PT0gXCJyZW1vdmUtdmFsdWVcIjpcbiAgICAgICAgICAgICAgbGV0IGZpbmFsVmFsdWUgPSBbXVxuICAgICAgICAgICAgICBpZiAobmV3VmFsdWUudmFsdWUgPT09ICd6ZXJvJykge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnZhbHVlID0gMFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGhhbmRsZUNoYW5nZShuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgIG5ld1ZhbHVlLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBmaW5hbFZhbHVlLnB1c2gocGFyc2VJbnQoaXRlbS52YWx1ZSA9PT0gJ3plcm8nID8gMCA6IGl0ZW0udmFsdWUpKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBwcm9wcy5vbkV2ZW50KHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIk9uQ2hhbmdlXCIsXG4gICAgICAgICAgICAgICAgb3JpZ2luOiBcIlZIU2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgIGRhdGE6IHByb3BzLmRhdGEsXG4gICAgICAgICAgICAgICAgICBpdGVtOiBmaW5hbFZhbHVlLFxuICAgICAgICAgICAgICAgICAgYWN0aW9uOiAnZGVsZXRlJyxcbiAgICAgICAgICAgICAgICAgIG9yZGVyOiBwcm9wcy5vcmRlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgYWN0aW9uTWV0YS5hY3Rpb24gPT09IFwiY2xlYXJcIjpcbiAgICAgICAgICAgICAgcHJvcHMub25FdmVudCh7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJPbkNoYW5nZVwiLFxuICAgICAgICAgICAgICAgIG9yaWdpbjogXCJWSFNlbGVjdFwiLFxuICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICBkYXRhOiBwcm9wcy5kYXRhLFxuICAgICAgICAgICAgICAgICAgaXRlbTogbnVsbCxcbiAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJjbGVhclwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBhY3Rpb25NZXRhLmFjdGlvbiA9PT0gXCJzZWxlY3Qtb3B0aW9uXCI6XG4gICAgICAgICAgICAgIGxldCBmaW5hbFZhbHVlQ2hhbmdlID0gW11cbiAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLnZhbHVlID09PSAnemVybycpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZS52YWx1ZSA9IDBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UobmV3VmFsdWUpO1xuICAgICAgICAgICAgICBpZiAocHJvcHMuaXNNdWx0aSkge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgIGZpbmFsVmFsdWVDaGFuZ2UucHVzaChwYXJzZUludChpdGVtLnZhbHVlID09PSAnemVybycgPyAwIDogaXRlbS52YWx1ZSkpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBwcm9wcy5vbkV2ZW50KHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIk9uQ2hhbmdlXCIsXG4gICAgICAgICAgICAgICAgb3JpZ2luOiBcIlZIU2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgIGRhdGE6IHByb3BzLmRhdGEsXG4gICAgICAgICAgICAgICAgICBpdGVtOiBwcm9wcy5pc011bHRpID8gZmluYWxWYWx1ZUNoYW5nZSA6IG5ld1ZhbHVlLFxuICAgICAgICAgICAgICAgICAgYWN0aW9uOiAnYWRkJyxcbiAgICAgICAgICAgICAgICAgIG9yZGVyOiBwcm9wcy5vcmRlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAge1xuICAgICAgICBwcm9wcy5kZXNjcmlwdGlvbiAmJlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6ICc2MHB4JyB9fT5cbiAgICAgICAgICA8VkhUZXh0XG4gICAgICAgICAgICB0ZXh0PXtwcm9wcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjYXB0aW9uXCJcbiAgICAgICAgICAgIGNvbG9yPXtwcm9wcy5kZXNjcmlwdGlvbkNvbG9yfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBWSFNlbGVjdFxuIl19