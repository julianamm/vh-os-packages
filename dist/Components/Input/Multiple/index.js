"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Simple = _interopRequireDefault(require("../Simple"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHInputMultiple = function VHInputMultiple(props) {
  var it = JSON.parse(props.items);

  var _useState = (0, _react.useState)(it),
      _useState2 = _slicedToArray(_useState, 2),
      items = _useState2[0],
      setItems = _useState2[1];

  var _useState3 = (0, _react.useState)([{
    value: ''
  }]),
      _useState4 = _slicedToArray(_useState3, 2),
      newItems = _useState4[0],
      setNewItems = _useState4[1];

  var _useState5 = (0, _react.useState)(1),
      _useState6 = _slicedToArray(_useState5, 2),
      render = _useState6[0],
      reRender = _useState6[1];

  return _react.default.createElement(_react.default.Fragment, null, items.map(function (item, index) {
    return _react.default.createElement("div", {
      key: "VHInputMultiple-".concat(index),
      style: {
        margin: '9px 0'
      }
    }, _react.default.createElement(_Simple.default, {
      value: item.value,
      data: item,
      placeholder: props.placeholder,
      error: item.error,
      loading: item.loading,
      onEvent: function onEvent(e) {
        switch (true) {
          case e.event === "onKeyUpAction":
            if (e.data.value !== '') {
              items[index] = {
                value: e.data.value,
                loading: e.data.data.id === item.id
              };
              setItems(items);
              reRender(render + 1);
              props.onEvent({
                data: {
                  value: JSON.stringify(items.concat(newItems)),
                  data: props.data
                },
                event: "onKeyUpAction",
                origin: "VHInputMultiple"
              });
            }

            break;
        }
      }
    }));
  }), newItems.map(function (item, index) {
    return _react.default.createElement("div", {
      key: "VHInputMultiple-item-".concat(index),
      style: {
        margin: '9px 0'
      }
    }, _react.default.createElement(_Simple.default, {
      placeholder: props.placeholder,
      error: item.error,
      loading: item.loading,
      value: "",
      autoFocus: true,
      onEvent: function onEvent(e) {
        switch (true) {
          case e.event === "onKeyUpAction":
            if (e.data.value !== '') {
              newItems[index] = {
                value: e.data.value,
                loading: true
              };

              if (items.length + newItems.length < props.max) {
                newItems.push({
                  value: ''
                });
              }

              setNewItems(newItems);
              reRender(render + 1);
              props.onEvent({
                data: {
                  value: JSON.stringify(items.concat(newItems)),
                  data: props.data
                },
                event: "onKeyUpAction",
                origin: "VHInputMultiple"
              });
            }

            break;
        }
      }
    }));
  }));
};

VHInputMultiple.defaultProps = {
  type: "text",
  disabled: false,
  autoFocus: false,
  className: '',
  noBorder: false
};
VHInputMultiple.propTypes = {
  disabled: _propTypes.default.bool,
  autoFocus: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  noBorder: _propTypes.default.bool
};
var _default = VHInputMultiple;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvSW5wdXQvTXVsdGlwbGUvaW5kZXguanN4Il0sIm5hbWVzIjpbIlZISW5wdXRNdWx0aXBsZSIsInByb3BzIiwiaXQiLCJKU09OIiwicGFyc2UiLCJpdGVtcyIsInNldEl0ZW1zIiwidmFsdWUiLCJuZXdJdGVtcyIsInNldE5ld0l0ZW1zIiwicmVuZGVyIiwicmVSZW5kZXIiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJtYXJnaW4iLCJwbGFjZWhvbGRlciIsImVycm9yIiwibG9hZGluZyIsImUiLCJldmVudCIsImRhdGEiLCJpZCIsIm9uRXZlbnQiLCJzdHJpbmdpZnkiLCJjb25jYXQiLCJvcmlnaW4iLCJsZW5ndGgiLCJtYXgiLCJwdXNoIiwiZGVmYXVsdFByb3BzIiwidHlwZSIsImRpc2FibGVkIiwiYXV0b0ZvY3VzIiwiY2xhc3NOYW1lIiwibm9Cb3JkZXIiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsS0FBSyxFQUFJO0FBQy9CLE1BQU1DLEVBQUUsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILEtBQUssQ0FBQ0ksS0FBakIsQ0FBWDs7QUFEK0Isa0JBRUwscUJBQVNILEVBQVQsQ0FGSztBQUFBO0FBQUEsTUFFeEJHLEtBRndCO0FBQUEsTUFFakJDLFFBRmlCOztBQUFBLG1CQUdDLHFCQUFTLENBQUM7QUFBQ0MsSUFBQUEsS0FBSyxFQUFFO0FBQVIsR0FBRCxDQUFULENBSEQ7QUFBQTtBQUFBLE1BR3hCQyxRQUh3QjtBQUFBLE1BR2RDLFdBSGM7O0FBQUEsbUJBS0oscUJBQVMsQ0FBVCxDQUxJO0FBQUE7QUFBQSxNQUt4QkMsTUFMd0I7QUFBQSxNQUtoQkMsUUFMZ0I7O0FBTy9CLFNBQ0UsNERBRUVO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QUFDRDs7QUFFREUsY0FBQUEsV0FBVyxDQUFDRCxRQUFELENBQVg7QUFDQUcsY0FBQUEsUUFBUSxDQUFDRCxNQUFNLEdBQUUsQ0FBVCxDQUFSO0FBQ0FULGNBQUFBLEtBQUssQ0FBQ3NCLE9BQU4sQ0FBYztBQUNaRixnQkFBQUEsSUFBSSxFQUFFO0FBQ0pkLGtCQUFBQSxLQUFLLEVBQUVKLElBQUksQ0FBQ3FCLFNBQUwsQ0FBZW5CLEtBQUssQ0FBQ29CLE1BQU4sQ0FBYWpCLFFBQWIsQ0FBZixDQURIO0FBRUphLGtCQUFBQSxJQUFJLEVBQUVwQixLQUFLLENBQUNvQjtBQUZSLGlCQURNO0FBS1pELGdCQUFBQSxLQUFLLEVBQUUsZUFMSztBQU1aTSxnQkFBQUEsTUFBTSxFQUFFO0FBTkksZUFBZDtBQVNDOztBQUVIO0FBdEJKO0FBd0JEO0FBL0JILE1BSkYsQ0FEVztBQUFBLEdBQWIsQ0F6Q0YsQ0FERjtBQXFGRCxDQTVGRDs7QUE4RkExQixlQUFlLENBQUM4QixZQUFoQixHQUErQjtBQUM3QkMsRUFBQUEsSUFBSSxFQUFFLE1BRHVCO0FBRTdCQyxFQUFBQSxRQUFRLEVBQUUsS0FGbUI7QUFHN0JDLEVBQUFBLFNBQVMsRUFBRSxLQUhrQjtBQUk3QkMsRUFBQUEsU0FBUyxFQUFFLEVBSmtCO0FBSzdCQyxFQUFBQSxRQUFRLEVBQUU7QUFMbUIsQ0FBL0I7QUFRQW5DLGVBQWUsQ0FBQ29DLFNBQWhCLEdBQTRCO0FBQzFCSixFQUFBQSxRQUFRLEVBQUVLLG1CQUFVQyxJQURNO0FBRTFCTCxFQUFBQSxTQUFTLEVBQUVJLG1CQUFVRSxNQUZLO0FBRzFCdkIsRUFBQUEsV0FBVyxFQUFFcUIsbUJBQVVFLE1BSEc7QUFJMUJKLEVBQUFBLFFBQVEsRUFBRUUsbUJBQVVDO0FBSk0sQ0FBNUI7ZUFPZXRDLGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgVkhJbnB1dCBmcm9tICcuLi9TaW1wbGUnXG5cbmNvbnN0IFZISW5wdXRNdWx0aXBsZSA9IHByb3BzID0+IHtcbiAgY29uc3QgaXQgPSBKU09OLnBhcnNlKHByb3BzLml0ZW1zKVxuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKGl0KVxuICBjb25zdCBbbmV3SXRlbXMsIHNldE5ld0l0ZW1zXSA9IHVzZVN0YXRlKFt7dmFsdWU6ICcnfV0pXG5cbiAgY29uc3QgW3JlbmRlciwgcmVSZW5kZXJdID0gdXNlU3RhdGUoMSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAge1xuICAgICAgaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAga2V5PXtgVkhJbnB1dE11bHRpcGxlLSR7aW5kZXh9YH1cbiAgICAgICAgICBzdHlsZT17e21hcmdpbjogJzlweCAwJ319XG4gICAgICAgID5cbiAgICAgICAgICA8VkhJbnB1dFxuICAgICAgICAgICAgdmFsdWU9e2l0ZW0udmFsdWV9XG4gICAgICAgICAgICBkYXRhPXtpdGVtfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgZXJyb3I9e2l0ZW0uZXJyb3J9XG4gICAgICAgICAgICBsb2FkaW5nPXtpdGVtLmxvYWRpbmd9XG4gICAgICAgICAgICBvbkV2ZW50PXtlID0+IHtcbiAgICAgICAgICAgICAgc3dpdGNoKHRydWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIGUuZXZlbnQgPT09ICBcIm9uS2V5VXBBY3Rpb25cIjpcbiAgICAgICAgICAgICAgICAgIGlmIChlLmRhdGEudmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zW2luZGV4XSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZS5kYXRhLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGUuZGF0YS5kYXRhLmlkID09PSBpdGVtLmlkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2V0SXRlbXMoaXRlbXMpXG4gICAgICAgICAgICAgICAgICAgIHJlUmVuZGVyKHJlbmRlciArMSlcblxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbkV2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBKU09OLnN0cmluZ2lmeShpdGVtcy5jb25jYXQobmV3SXRlbXMpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcHJvcHMuZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBcIm9uS2V5VXBBY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbjogXCJWSElucHV0TXVsdGlwbGVcIlxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKVxuICAgIH1cbiAgICB7XG4gICAgICBuZXdJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBrZXk9e2BWSElucHV0TXVsdGlwbGUtaXRlbS0ke2luZGV4fWB9XG4gICAgICAgICAgc3R5bGU9e3ttYXJnaW46ICc5cHggMCd9fVxuICAgICAgICA+XG4gICAgICAgICAgPFZISW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlcn1cbiAgICAgICAgICAgIGVycm9yPXtpdGVtLmVycm9yfVxuICAgICAgICAgICAgbG9hZGluZz17aXRlbS5sb2FkaW5nfVxuICAgICAgICAgICAgdmFsdWU9JydcbiAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgICAgb25FdmVudD17ZSA9PiB7XG4gICAgICAgICAgICAgIHN3aXRjaCh0cnVlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBlLmV2ZW50ID09PSAgXCJvbktleVVwQWN0aW9uXCI6XG4gICAgICAgICAgICAgICAgICBpZiAoZS5kYXRhLnZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBuZXdJdGVtc1tpbmRleF0gPSB7dmFsdWU6IGUuZGF0YS52YWx1ZSwgbG9hZGluZzogdHJ1ZX1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbXMubGVuZ3RoICsgbmV3SXRlbXMubGVuZ3RoIDwgcHJvcHMubWF4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgbmV3SXRlbXMucHVzaCh7dmFsdWU6ICcnfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHNldE5ld0l0ZW1zKG5ld0l0ZW1zKVxuICAgICAgICAgICAgICAgICAgICByZVJlbmRlcihyZW5kZXIgKzEpXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLm9uRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBKU09OLnN0cmluZ2lmeShpdGVtcy5jb25jYXQobmV3SXRlbXMpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHByb3BzLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBcIm9uS2V5VXBBY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICBvcmlnaW46IFwiVkhJbnB1dE11bHRpcGxlXCJcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKVxuICAgIH1cbiAgICA8Lz5cbiAgKVxufVxuXG5WSElucHV0TXVsdGlwbGUuZGVmYXVsdFByb3BzID0ge1xuICB0eXBlOiBcInRleHRcIixcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBhdXRvRm9jdXM6IGZhbHNlLFxuICBjbGFzc05hbWU6ICcnLFxuICBub0JvcmRlcjogZmFsc2Vcbn1cblxuVkhJbnB1dE11bHRpcGxlLnByb3BUeXBlcyA9IHtcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBub0JvcmRlcjogUHJvcFR5cGVzLmJvb2wsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZISW5wdXRNdWx0aXBsZVxuIl19