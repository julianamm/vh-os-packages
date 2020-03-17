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
        fontWeight: '500'
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
      marginBottom: '21px'
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
    isDisabled: props.isLoading,
    components: animatedComponents,
    value: value,
    isMulti: props.isMulti,
    isClearable: true,
    options: props.items,
    onChange: function onChange(newValue, actionMeta) {
      switch (true) {
        case actionMeta.action === "remove-value":
          var finalValue = [];
          handleChange(newValue);
          newValue.map(function (item) {
            finalValue.push(parseInt(item.value));
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
          handleChange(newValue);

          if (props.isMulti) {
            newValue.map(function (item) {
              finalValueChange.push(parseInt(item.value));
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