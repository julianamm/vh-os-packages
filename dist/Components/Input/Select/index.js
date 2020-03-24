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

var _reactPreloadSkeleton = require("react-preload-skeleton");

var _Grid = require("../../../Grid");

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

var VHSelect = function VHSelect(props) {
  var animatedComponents = (0, _animated.default)();

  if (props.preLoading) {
    return /*#__PURE__*/_react.default.createElement(_reactPreloadSkeleton.TitleDescriptionSkeleton, null);
  }

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

  if (props.removeIndicator) {
    animatedComponents = {
      DropdownIndicator: function DropdownIndicator() {
        return null;
      },
      IndicatorSeparator: function IndicatorSeparator() {
        return null;
      }
    };
  }

  return /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    responsive: true,
    style: {
      position: 'relative',
      marginBottom: props.marginBottom ? props.marginBottom : '21px'
    }
  }, props.caption && /*#__PURE__*/_react.default.createElement(_Text.default, {
    text: props.caption,
    variant: "subtitle3",
    color: props.captionColor
  }), /*#__PURE__*/_react.default.createElement(_reactSelect.default, {
    styles: props.removeBorder ? style : styled,
    closeMenuOnSelect: !props.isMulti,
    className: props.className,
    placeholder: props.placeholder,
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