"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = _interopRequireDefault(require("../Img/index"));

var _index2 = _interopRequireDefault(require("../Text/index"));

var _Grid = require("../../Grid");

var S = _interopRequireWildcard(require("./styles"));

var _index3 = _interopRequireDefault(require("../../../assets/flags/flag_usa.svg/index.jsx"));

var _index4 = _interopRequireDefault(require("../../../assets/flags/flag_canada.svg/index.jsx"));

var _index5 = _interopRequireDefault(require("../../../assets/flags/flag_germany.svg/index.jsx"));

var _index6 = _interopRequireDefault(require("../../../assets/flags/flag_ireland.svg/index.jsx"));

var _index7 = _interopRequireDefault(require("../../../assets/flags/flag_netherlands.svg/index.jsx"));

var _index8 = _interopRequireDefault(require("../../../assets/flags/flag_uk.svg/index.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHTargetLocation = function VHTargetLocation(props) {
  var items = Object.keys(props.items).length > 0 ? props.items : [{
    status: false
  }, {
    status: false
  }, {
    status: false
  }, {
    status: false
  }, {
    status: false
  }, {
    status: false
  }];

  var _useState = (0, _react.useState)(items[0].status),
      _useState2 = _slicedToArray(_useState, 2),
      canada = _useState2[0],
      setCanada = _useState2[1];

  var _useState3 = (0, _react.useState)(items[1].status),
      _useState4 = _slicedToArray(_useState3, 2),
      germany = _useState4[0],
      setGermany = _useState4[1];

  var _useState5 = (0, _react.useState)(items[2].status),
      _useState6 = _slicedToArray(_useState5, 2),
      ireland = _useState6[0],
      setIreland = _useState6[1];

  var _useState7 = (0, _react.useState)(items[3].status),
      _useState8 = _slicedToArray(_useState7, 2),
      netherlands = _useState8[0],
      setNetherlands = _useState8[1];

  var _useState9 = (0, _react.useState)(items[4].status),
      _useState10 = _slicedToArray(_useState9, 2),
      uk = _useState10[0],
      setUk = _useState10[1];

  var _useState11 = (0, _react.useState)(items[5].status),
      _useState12 = _slicedToArray(_useState11, 2),
      usa = _useState12[0],
      setUsa = _useState12[1];

  _react.default.useEffect(function () {
    setCanada(items[0].status), setGermany(items[1].status), setIreland(items[2].status), setNetherlands(items[3].status), setUk(items[4].status), setUsa(items[5].status);
  }, [items[0].status, items[1].status, items[2].status, items[3].status, items[4].status, items[5].status]);

  return /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    className: "vh-target-location ".concat(props.className ? props.className : ''),
    row: true,
    justifySpaceBetween: true
  }, /*#__PURE__*/_react.default.createElement(S.Wrapper, {
    disabled: !canada,
    onClick: function onClick() {
      setCanada(!canada);
      props.onEvent({
        type: "OnClick",
        origin: "VHTargetLocation",
        props: {
          data: {
            id: items[0].id,
            status: canada ? 0 : 1
          },
          position: 0
        }
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    source: _index4.default,
    title: "city",
    lg: true
  }), /*#__PURE__*/_react.default.createElement(_index2.default, {
    variant: "platform2",
    color: "black-100",
    text: 'Canada'
  })), /*#__PURE__*/_react.default.createElement(S.Wrapper, {
    disabled: !germany,
    onClick: function onClick() {
      setGermany(!germany);
      props.onEvent({
        type: "OnClick",
        origin: "VHTargetLocation",
        props: {
          data: {
            id: items[1].id,
            status: germany ? 0 : 1
          },
          position: 1
        }
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    source: _index5.default,
    title: "city",
    lg: true
  }), /*#__PURE__*/_react.default.createElement(_index2.default, {
    variant: "platform2",
    color: "black-100",
    text: 'Germany'
  })), /*#__PURE__*/_react.default.createElement(S.Wrapper, {
    disabled: !ireland,
    onClick: function onClick() {
      setIreland(!ireland);
      props.onEvent({
        type: "OnClick",
        origin: "VHTargetLocation",
        props: {
          data: {
            id: items[2].id,
            status: ireland ? 0 : 1
          },
          position: 2
        }
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    source: _index6.default,
    title: "city",
    lg: true
  }), /*#__PURE__*/_react.default.createElement(_index2.default, {
    variant: "platform2",
    color: "black-100",
    text: 'Ireland'
  })), /*#__PURE__*/_react.default.createElement(S.Wrapper, {
    disabled: !netherlands,
    onClick: function onClick() {
      setNetherlands(!netherlands);
      props.onEvent({
        type: "OnClick",
        origin: "VHTargetLocation",
        props: {
          data: {
            id: items[3].id,
            status: netherlands ? 0 : 1
          },
          position: 3
        }
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    source: _index7.default,
    title: "city",
    lg: true
  }), /*#__PURE__*/_react.default.createElement(_index2.default, {
    variant: "platform2",
    color: "black-100",
    text: 'Netherlands'
  })), /*#__PURE__*/_react.default.createElement(S.Wrapper, {
    disabled: !uk,
    onClick: function onClick() {
      setUk(!uk);
      props.onEvent({
        type: "OnClick",
        origin: "VHTargetLocation",
        props: {
          data: {
            id: items[4].id,
            status: uk ? 0 : 1
          },
          position: 4
        }
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    source: _index8.default,
    title: "city",
    lg: true
  }), /*#__PURE__*/_react.default.createElement(_index2.default, {
    variant: "platform2",
    color: "black-100",
    text: 'U.K'
  })), /*#__PURE__*/_react.default.createElement(S.Wrapper, {
    disabled: !usa,
    onClick: function onClick() {
      setUsa(!usa);
      props.onEvent({
        type: "OnClick",
        origin: "VHTargetLocation",
        props: {
          data: {
            id: items[5].id,
            status: usa ? 0 : 1
          },
          position: 5
        }
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    source: _index3.default,
    title: "city",
    lg: true
  }), /*#__PURE__*/_react.default.createElement(_index2.default, {
    variant: "platform2",
    color: "black-100",
    text: 'U.S.A'
  })));
};

VHTargetLocation.defaultProps = {
  description: "",
  onEvent: null,
  className: ""
};
VHTargetLocation.propTypes = {
  description: _propTypes.default.string,
  onEvent: _propTypes.default.func,
  className: _propTypes.default.string
};
var _default = VHTargetLocation;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVGFyZ2V0TG9jYXRpb24vaW5kZXguanN4Il0sIm5hbWVzIjpbIlZIVGFyZ2V0TG9jYXRpb24iLCJwcm9wcyIsIml0ZW1zIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInN0YXR1cyIsImNhbmFkYSIsInNldENhbmFkYSIsImdlcm1hbnkiLCJzZXRHZXJtYW55IiwiaXJlbGFuZCIsInNldElyZWxhbmQiLCJuZXRoZXJsYW5kcyIsInNldE5ldGhlcmxhbmRzIiwidWsiLCJzZXRVayIsInVzYSIsInNldFVzYSIsIlJlYWN0IiwidXNlRWZmZWN0IiwiY2xhc3NOYW1lIiwib25FdmVudCIsInR5cGUiLCJvcmlnaW4iLCJkYXRhIiwiaWQiLCJwb3NpdGlvbiIsIkNhbmFkYSIsIkdlcm1hbnkiLCJJcmVsYW5kIiwiTmV0aGVybGFuZHMiLCJVSyIsIlVTQSIsImRlZmF1bHRQcm9wcyIsImRlc2NyaXB0aW9uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFBQyxLQUFLLEVBQUk7QUFFOUIsTUFBTUMsS0FBSyxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUgsS0FBSyxDQUFDQyxLQUFsQixFQUF5QkcsTUFBekIsR0FBa0MsQ0FBbEMsR0FBc0NKLEtBQUssQ0FBQ0MsS0FBNUMsR0FBb0QsQ0FBQztBQUFFSSxJQUFBQSxNQUFNLEVBQUU7QUFBVixHQUFELEVBQW9CO0FBQUVBLElBQUFBLE1BQU0sRUFBRTtBQUFWLEdBQXBCLEVBQXVDO0FBQUVBLElBQUFBLE1BQU0sRUFBRTtBQUFWLEdBQXZDLEVBQTBEO0FBQUVBLElB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QUFHekJsQixFQUFBQSxTQUFTLEVBQUVnQixtQkFBVUM7QUFISSxDQUE3QjtlQU1ldEMsZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBWSEltZyBmcm9tICcuLi9JbWcvaW5kZXgnXG5pbXBvcnQgVkhUZXh0IGZyb20gJy4uL1RleHQvaW5kZXgnXG5pbXBvcnQgeyBSb3cgfSBmcm9tICcuLi8uLi9HcmlkJ1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL3N0eWxlcydcbmltcG9ydCBVU0EgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ZsYWdzL2ZsYWdfdXNhLnN2Zy9pbmRleC5qc3gnXG5pbXBvcnQgQ2FuYWRhIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9mbGFncy9mbGFnX2NhbmFkYS5zdmcvaW5kZXguanN4J1xuaW1wb3J0IEdlcm1hbnkgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ZsYWdzL2ZsYWdfZ2VybWFueS5zdmcvaW5kZXguanN4J1xuaW1wb3J0IElyZWxhbmQgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ZsYWdzL2ZsYWdfaXJlbGFuZC5zdmcvaW5kZXguanN4J1xuaW1wb3J0IE5ldGhlcmxhbmRzIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9mbGFncy9mbGFnX25ldGhlcmxhbmRzLnN2Zy9pbmRleC5qc3gnXG5pbXBvcnQgVUsgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ZsYWdzL2ZsYWdfdWsuc3ZnL2luZGV4LmpzeCdcblxuY29uc3QgVkhUYXJnZXRMb2NhdGlvbiA9IHByb3BzID0+IHtcblxuICAgIGNvbnN0IGl0ZW1zID0gT2JqZWN0LmtleXMocHJvcHMuaXRlbXMpLmxlbmd0aCA+IDAgPyBwcm9wcy5pdGVtcyA6IFt7IHN0YXR1czogZmFsc2UgfSwgeyBzdGF0dXM6IGZhbHNlIH0sIHsgc3RhdHVzOiBmYWxzZSB9LCB7IHN0YXR1czogZmFsc2UgfSwgeyBzdGF0dXM6IGZhbHNlIH0sIHsgc3RhdHVzOiBmYWxzZSB9XVxuICAgIGNvbnN0IFtjYW5hZGEsIHNldENhbmFkYV0gPSB1c2VTdGF0ZShpdGVtc1swXS5zdGF0dXMpO1xuICAgIGNvbnN0IFtnZXJtYW55LCBzZXRHZXJtYW55XSA9IHVzZVN0YXRlKGl0ZW1zWzFdLnN0YXR1cyk7XG4gICAgY29uc3QgW2lyZWxhbmQsIHNldElyZWxhbmRdID0gdXNlU3RhdGUoaXRlbXNbMl0uc3RhdHVzKTtcbiAgICBjb25zdCBbbmV0aGVybGFuZHMsIHNldE5ldGhlcmxhbmRzXSA9IHVzZVN0YXRlKGl0ZW1zWzNdLnN0YXR1cyk7XG4gICAgY29uc3QgW3VrLCBzZXRVa10gPSB1c2VTdGF0ZShpdGVtc1s0XS5zdGF0dXMpO1xuICAgIGNvbnN0IFt1c2EsIHNldFVzYV0gPSB1c2VTdGF0ZShpdGVtc1s1XS5zdGF0dXMpO1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0Q2FuYWRhKGl0ZW1zWzBdLnN0YXR1cyksXG4gICAgICAgIHNldEdlcm1hbnkoaXRlbXNbMV0uc3RhdHVzKSxcbiAgICAgICAgc2V0SXJlbGFuZChpdGVtc1syXS5zdGF0dXMpLFxuICAgICAgICBzZXROZXRoZXJsYW5kcyhpdGVtc1szXS5zdGF0dXMpLFxuICAgICAgICBzZXRVayhpdGVtc1s0XS5zdGF0dXMpLFxuICAgICAgICBzZXRVc2EoaXRlbXNbNV0uc3RhdHVzKVxuICAgIH0sXG4gICAgICAgIFtpdGVtc1swXS5zdGF0dXMsXG4gICAgICAgIGl0ZW1zWzFdLnN0YXR1cyxcbiAgICAgICAgaXRlbXNbMl0uc3RhdHVzLFxuICAgICAgICBpdGVtc1szXS5zdGF0dXMsXG4gICAgICAgIGl0ZW1zWzRdLnN0YXR1cyxcbiAgICAgICAgaXRlbXNbNV0uc3RhdHVzXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPXtgdmgtdGFyZ2V0LWxvY2F0aW9uICR7cHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogJyd9YH0gcm93IGp1c3RpZnlTcGFjZUJldHdlZW4+XG4gICAgICAgICAgICA8Uy5XcmFwcGVyIGRpc2FibGVkPXshY2FuYWRhfSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0Q2FuYWRhKCFjYW5hZGEpXG4gICAgICAgICAgICAgICAgcHJvcHMub25FdmVudCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiT25DbGlja1wiLFxuICAgICAgICAgICAgICAgICAgICBvcmlnaW46IFwiVkhUYXJnZXRMb2NhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBpZDogaXRlbXNbMF0uaWQsIHN0YXR1czogY2FuYWRhID8gMCA6IDEgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPFZISW1nIHNvdXJjZT17Q2FuYWRhfSB0aXRsZT1cImNpdHlcIiBsZyAvPlxuICAgICAgICAgICAgICAgIDxWSFRleHRcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD17XCJwbGF0Zm9ybTJcIn1cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJibGFjay0xMDBcIlxuICAgICAgICAgICAgICAgICAgICB0ZXh0PXsnQ2FuYWRhJ31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9TLldyYXBwZXI+XG5cbiAgICAgICAgICAgIDxTLldyYXBwZXIgZGlzYWJsZWQ9eyFnZXJtYW55fSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0R2VybWFueSghZ2VybWFueSlcbiAgICAgICAgICAgICAgICBwcm9wcy5vbkV2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJPbkNsaWNrXCIsXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbjogXCJWSFRhcmdldExvY2F0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGlkOiBpdGVtc1sxXS5pZCwgc3RhdHVzOiBnZXJtYW55ID8gMCA6IDEgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAxXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPFZISW1nIHNvdXJjZT17R2VybWFueX0gdGl0bGU9XCJjaXR5XCIgbGcgLz5cbiAgICAgICAgICAgICAgICA8VkhUZXh0XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9e1wicGxhdGZvcm0yXCJ9XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2stMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgdGV4dD17J0dlcm1hbnknfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1MuV3JhcHBlcj5cblxuICAgICAgICAgICAgPFMuV3JhcHBlciBkaXNhYmxlZD17IWlyZWxhbmR9IG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRJcmVsYW5kKCFpcmVsYW5kKVxuICAgICAgICAgICAgICAgIHByb3BzLm9uRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIk9uQ2xpY2tcIixcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luOiBcIlZIVGFyZ2V0TG9jYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgaWQ6IGl0ZW1zWzJdLmlkLCBzdGF0dXM6IGlyZWxhbmQgPyAwIDogMSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IDJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8VkhJbWcgc291cmNlPXtJcmVsYW5kfSB0aXRsZT1cImNpdHlcIiBsZyAvPlxuICAgICAgICAgICAgICAgIDxWSFRleHRcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD17XCJwbGF0Zm9ybTJcIn1cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJibGFjay0xMDBcIlxuICAgICAgICAgICAgICAgICAgICB0ZXh0PXsnSXJlbGFuZCd9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvUy5XcmFwcGVyPlxuXG4gICAgICAgICAgICA8Uy5XcmFwcGVyIGRpc2FibGVkPXshbmV0aGVybGFuZHN9IG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBzZXROZXRoZXJsYW5kcyghbmV0aGVybGFuZHMpXG4gICAgICAgICAgICAgICAgcHJvcHMub25FdmVudCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiT25DbGlja1wiLFxuICAgICAgICAgICAgICAgICAgICBvcmlnaW46IFwiVkhUYXJnZXRMb2NhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBpZDogaXRlbXNbM10uaWQsIHN0YXR1czogbmV0aGVybGFuZHMgPyAwIDogMSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IDNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8VkhJbWcgc291cmNlPXtOZXRoZXJsYW5kc30gdGl0bGU9XCJjaXR5XCIgbGcgLz5cbiAgICAgICAgICAgICAgICA8VkhUZXh0XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9e1wicGxhdGZvcm0yXCJ9XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2stMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgdGV4dD17J05ldGhlcmxhbmRzJ31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9TLldyYXBwZXI+XG5cbiAgICAgICAgICAgIDxTLldyYXBwZXIgZGlzYWJsZWQ9eyF1a30gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFVrKCF1aylcbiAgICAgICAgICAgICAgICBwcm9wcy5vbkV2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJPbkNsaWNrXCIsXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbjogXCJWSFRhcmdldExvY2F0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGlkOiBpdGVtc1s0XS5pZCwgc3RhdHVzOiB1ayA/IDAgOiAxIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogNFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxWSEltZyBzb3VyY2U9e1VLfSB0aXRsZT1cImNpdHlcIiBsZyAvPlxuICAgICAgICAgICAgICAgIDxWSFRleHRcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD17XCJwbGF0Zm9ybTJcIn1cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJibGFjay0xMDBcIlxuICAgICAgICAgICAgICAgICAgICB0ZXh0PXsnVS5LJ31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9TLldyYXBwZXI+XG5cbiAgICAgICAgICAgIDxTLldyYXBwZXIgZGlzYWJsZWQ9eyF1c2F9IG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRVc2EoIXVzYSlcbiAgICAgICAgICAgICAgICBwcm9wcy5vbkV2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJPbkNsaWNrXCIsXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbjogXCJWSFRhcmdldExvY2F0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGlkOiBpdGVtc1s1XS5pZCwgc3RhdHVzOiB1c2EgPyAwIDogMSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IDVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8VkhJbWcgc291cmNlPXtVU0F9IHRpdGxlPVwiY2l0eVwiIGxnIC8+XG4gICAgICAgICAgICAgICAgPFZIVGV4dFxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PXtcInBsYXRmb3JtMlwifVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImJsYWNrLTEwMFwiXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9eydVLlMuQSd9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvUy5XcmFwcGVyPlxuICAgICAgICA8L1Jvdz5cbiAgICApXG5cbn1cblZIVGFyZ2V0TG9jYXRpb24uZGVmYXVsdFByb3BzID0ge1xuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIG9uRXZlbnQ6IG51bGwsXG4gICAgY2xhc3NOYW1lOiBcIlwiLFxufVxuXG5WSFRhcmdldExvY2F0aW9uLnByb3BUeXBlcyA9IHtcbiAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkV2ZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZIVGFyZ2V0TG9jYXRpb25cbiJdfQ==