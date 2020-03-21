"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.IconPropTypes = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = _interopRequireDefault(require("../../../assets/icons/dot.svg/index.jsx"));

var _index2 = _interopRequireDefault(require("../../../assets/icons/icon_filter.svg/index.jsx"));

var _index3 = _interopRequireDefault(require("../../../assets/icons/ico-arrow-left.svg/index.jsx"));

var _index4 = _interopRequireDefault(require("../../../assets/icons/icon_swap-vert.svg/index.jsx"));

var _index5 = _interopRequireDefault(require("../../../assets/icons/mdi_search.svg/index.jsx"));

var _index6 = _interopRequireDefault(require("../../../assets/icons/iconGithub.svg/index.jsx"));

var _index7 = _interopRequireDefault(require("../../../assets/icons/iconLikedin-login.svg/index.jsx"));

var _index8 = _interopRequireDefault(require("../../../assets/icons/iconGlobe.svg/index.jsx"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var size = {
  w: 18,
  h: 18
};
var defaultColor = "silver";

var VHIcon = function VHIcon(props) {
  switch (true) {
    default:
    case props.xs:
      size = {
        w: 18,
        h: 18
      };
      break;

    case props.sm:
      size = {
        w: 24,
        h: 24
      };
      break;

    case props.md:
      size = {
        w: 36,
        h: 36
      };
      break;

    case props.lg:
      size = {
        w: 48,
        h: 48
      };
      break;
  }

  switch (true) {
    case props.primary:
      defaultColor = "blue";
      break;

    case props.danger:
      defaultColor = "red";
      break;

    case props.warning:
      defaultColor = "yellow";
      break;

    case props.info:
      defaultColor = "silver";
      break;
  }

  if (props.color) {
    defaultColor = _Colors.default[props.color];
  }

  switch (props.icon) {
    case "bullet":
      return /*#__PURE__*/_react.default.createElement(_index.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case "sort":
      return /*#__PURE__*/_react.default.createElement(_index4.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case "filter":
      return /*#__PURE__*/_react.default.createElement(_index2.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case "search":
      return /*#__PURE__*/_react.default.createElement(_index5.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case "arrow-left":
      return /*#__PURE__*/_react.default.createElement(_index3.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'github':
      return /*#__PURE__*/_react.default.createElement(_index7.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'world':
      return /*#__PURE__*/_react.default.createElement(_index7.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'linkedin':
      return /*#__PURE__*/_react.default.createElement(_index7.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'search':
      return /*#__PURE__*/_react.default.createElement(_index7.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    default:
      return /*#__PURE__*/_react.default.createElement("span", null);
  }
};

VHIcon.defaultProps = {
  className: ''
};
var IconPropTypes = {
  source: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired,
  className: _propTypes.default.string,
  color: _propTypes.default.string,
  icon: _propTypes.default.string
};
exports.IconPropTypes = IconPropTypes;
VHIcon.propTypes = IconPropTypes;
var _default = VHIcon;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvSWNvbi9pbmRleC5qc3giXSwibmFtZXMiOlsic2l6ZSIsInciLCJoIiwiZGVmYXVsdENvbG9yIiwiVkhJY29uIiwicHJvcHMiLCJ4cyIsInNtIiwibWQiLCJsZyIsInByaW1hcnkiLCJkYW5nZXIiLCJ3YXJuaW5nIiwiaW5mbyIsImNvbG9yIiwiQ29sb3IiLCJpY29uIiwiY2xhc3NOYW1lIiwiZGVmYXVsdFByb3BzIiwiSWNvblByb3BUeXBlcyIsInNvdXJjZSIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJ0aXRsZSIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7O0FBRUEsSUFBSUEsSUFBSSxHQUFHO0FBQ1RDLEVBQUFBLENBQUMsRUFBRSxFQURNO0FBRVRDLEVBQUFBLENBQUMsRUFBRTtBQUZNLENBQVg7QUFLQSxJQUFJQyxZQUFZLEdBQUcsUUFBbkI7O0FBRUEsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQUMsS0FBSyxFQUFJO0FBRXRCLFVBQVEsSUFBUjtBQUNFO0FBQ0EsU0FBS0EsS0FBSyxDQUFDQyxFQUFYO0FBQ0VOLE1BQUFBLElBQUksR0FBRztBQUNMQyxRQUFBQSxDQUFDLEVBQUUsRUFERTtBQUVMQyxRQUFBQSxDQUFDLEVBQUU7QUFGRSxPQUFQO0FBSUE7O0FBQ0YsU0FBS0csS0FBSyxDQUFDRSxFQUFYO0FBQ0VQLE1BQUFBLElBQUksR0FBRztBQUNMQyxRQUFBQSxDQUFDLEVBQUUsRUFERTtBQUVMQyxRQUFBQSxDQUFDLEVBQUU7QUFGRSxPQUFQO0FBSUE7O0FBQ0YsU0FBS0csS0FBSyxDQUFDRyxFQUFYO0FBQ0VSLE1BQUFBLElBQUksR0FBRztBQUNMQyxRQUFBQSxDQUFDLEVBQUUsRUFERTtBQUVMQyxRQUFBQSxDQUFDLEVB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RCxDQXhFRDs7QUEwRUFiLE1BQU0sQ0FBQ2MsWUFBUCxHQUFzQjtBQUNwQkQsRUFBQUEsU0FBUyxFQUFFO0FBRFMsQ0FBdEI7QUFHTyxJQUFNRSxhQUFhLEdBQUc7QUFDM0JDLEVBQUFBLE1BQU0sRUFBRUMsbUJBQVVDLE1BQVYsQ0FBaUJDLFVBREU7QUFFM0JDLEVBQUFBLEtBQUssRUFBRUgsbUJBQVVDLE1BQVYsQ0FBaUJDLFVBRkc7QUFHM0JOLEVBQUFBLFNBQVMsRUFBRUksbUJBQVVDLE1BSE07QUFJM0JSLEVBQUFBLEtBQUssRUFBRU8sbUJBQVVDLE1BSlU7QUFLM0JOLEVBQUFBLElBQUksRUFBRUssbUJBQVVDO0FBTFcsQ0FBdEI7O0FBUVBsQixNQUFNLENBQUNxQixTQUFQLEdBQW1CTixhQUFuQjtlQUVlZixNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJ1bGxldEljb24gIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9kb3Quc3ZnL2luZGV4LmpzeCdcbmltcG9ydCBGaWx0ZXJJY29uICBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvaWNvbl9maWx0ZXIuc3ZnL2luZGV4LmpzeCdcbmltcG9ydCBBcnJvd0xlZnRJY29uICBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvaWNvLWFycm93LWxlZnQuc3ZnL2luZGV4LmpzeCdcbmltcG9ydCBTb3J0SWNvbiAgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ljb25zL2ljb25fc3dhcC12ZXJ0LnN2Zy9pbmRleC5qc3gnXG5pbXBvcnQgU2VhcmNoSWNvbiAgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ljb25zL21kaV9zZWFyY2guc3ZnL2luZGV4LmpzeCdcbmltcG9ydCBHaXRIdWJJY29uIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9pY29uR2l0aHViLnN2Zy9pbmRleC5qc3gnXG5pbXBvcnQgTGlua2VkSW5JY29uIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9pY29uTGlrZWRpbi1sb2dpbi5zdmcvaW5kZXguanN4J1xuaW1wb3J0IFdlYlNpdGVJY29uIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9pY29uR2xvYmUuc3ZnL2luZGV4LmpzeCdcblxuaW1wb3J0IENvbG9yIGZyb20gXCIuLi8uLi9Db2xvcnNcIjtcblxubGV0IHNpemUgPSB7XG4gIHc6IDE4LFxuICBoOiAxOFxufVxuXG5sZXQgZGVmYXVsdENvbG9yID0gXCJzaWx2ZXJcIlxuXG5jb25zdCBWSEljb24gPSBwcm9wcyA9PiB7XG5cbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgZGVmYXVsdDpcbiAgICBjYXNlIHByb3BzLnhzOlxuICAgICAgc2l6ZSA9IHtcbiAgICAgICAgdzogMTgsXG4gICAgICAgIGg6IDE4XG4gICAgICB9XG4gICAgICBicmVha1xuICAgIGNhc2UgcHJvcHMuc206XG4gICAgICBzaXplID0ge1xuICAgICAgICB3OiAyNCxcbiAgICAgICAgaDogMjRcbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSBwcm9wcy5tZDpcbiAgICAgIHNpemUgPSB7XG4gICAgICAgIHc6IDM2LFxuICAgICAgICBoOiAzNlxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICBjYXNlIHByb3BzLmxnOlxuICAgICAgc2l6ZSA9IHtcbiAgICAgICAgdzogNDgsXG4gICAgICAgIGg6IDQ4XG4gICAgICB9XG4gICAgICBicmVha1xuICB9XG5cbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBwcm9wcy5wcmltYXJ5OlxuICAgICAgZGVmYXVsdENvbG9yID0gXCJibHVlXCJcbiAgICAgIGJyZWFrXG4gICAgY2FzZSBwcm9wcy5kYW5nZXI6XG4gICAgICBkZWZhdWx0Q29sb3IgPSBcInJlZFwiXG4gICAgICBicmVha1xuICAgIGNhc2UgcHJvcHMud2FybmluZzpcbiAgICAgIGRlZmF1bHRDb2xvciA9IFwieWVsbG93XCJcbiAgICAgIGJyZWFrXG4gICAgY2FzZSBwcm9wcy5pbmZvOlxuICAgICAgZGVmYXVsdENvbG9yID0gXCJzaWx2ZXJcIlxuICAgICAgYnJlYWtcbiAgfVxuXG4gIGlmKHByb3BzLmNvbG9yKSB7XG4gICAgZGVmYXVsdENvbG9yID0gQ29sb3JbcHJvcHMuY29sb3JdO1xuICB9XG5cbiAgc3dpdGNoIChwcm9wcy5pY29uKSB7XG4gICAgY2FzZSBcImJ1bGxldFwiOlxuICAgICAgcmV0dXJuIDxCdWxsZXRJY29uIGZpbGw9e2RlZmF1bHRDb2xvcn0gIHdpZHRoPXtgJHtzaXplLnd9cHhgfSBoZWlnaHQ9e2Ake3NpemUuaH1weGB9IGNsYXNzTmFtZT17YHZoLWljb24gJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJ31gfS8+XG4gICAgY2FzZSBcInNvcnRcIjpcbiAgICAgIHJldHVybiA8U29ydEljb24gZmlsbD17ZGVmYXVsdENvbG9yfSAgd2lkdGg9e2Ake3NpemUud31weGB9IGhlaWdodD17YCR7c2l6ZS5ofXB4YH0gY2xhc3NOYW1lPXtgdmgtaWNvbiAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9Lz5cbiAgICBjYXNlIFwiZmlsdGVyXCI6XG4gICAgICByZXR1cm4gPEZpbHRlckljb24gZmlsbD17ZGVmYXVsdENvbG9yfSAgd2lkdGg9e2Ake3NpemUud31weGB9IGhlaWdodD17YCR7c2l6ZS5ofXB4YH0gY2xhc3NOYW1lPXtgdmgtaWNvbiAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9Lz5cbiAgICBjYXNlIFwic2VhcmNoXCI6XG4gICAgICByZXR1cm4gPFNlYXJjaEljb24gZmlsbD17ZGVmYXVsdENvbG9yfSAgd2lkdGg9e2Ake3NpemUud31weGB9IGhlaWdodD17YCR7c2l6ZS5ofXB4YH0gY2xhc3NOYW1lPXtgdmgtaWNvbiAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9Lz5cbiAgICBjYXNlIFwiYXJyb3ctbGVmdFwiOlxuICAgICAgcmV0dXJuIDxBcnJvd0xlZnRJY29uIGZpbGw9e2RlZmF1bHRDb2xvcn0gIHdpZHRoPXtgJHtzaXplLnd9cHhgfSBoZWlnaHQ9e2Ake3NpemUuaH1weGB9IGNsYXNzTmFtZT17YHZoLWljb24gJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJ31gfS8+XG4gICAgY2FzZSAnZ2l0aHViJzpcbiAgICAgIHJldHVybiA8TGlua2VkSW5JY29uIGZpbGw9e2RlZmF1bHRDb2xvcn0gIHdpZHRoPXtgJHtzaXplLnd9cHhgfSBoZWlnaHQ9e2Ake3NpemUuaH1weGB9IGNsYXNzTmFtZT17YHZoLWljb24gJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJ31gfS8+XG4gICAgY2FzZSAnd29ybGQnOlxuICAgICAgcmV0dXJuIDxMaW5rZWRJbkljb24gZmlsbD17ZGVmYXVsdENvbG9yfSAgd2lkdGg9e2Ake3NpemUud31weGB9IGhlaWdodD17YCR7c2l6ZS5ofXB4YH0gY2xhc3NOYW1lPXtgdmgtaWNvbiAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnfWB9Lz5cbiAgICBjYXNlICdsaW5rZWRpbic6XG4gICAgICByZXR1cm4gPExpbmtlZEluSWNvbiBmaWxsPXtkZWZhdWx0Q29sb3J9ICB3aWR0aD17YCR7c2l6ZS53fXB4YH0gaGVpZ2h0PXtgJHtzaXplLmh9cHhgfSBjbGFzc05hbWU9e2B2aC1pY29uICR7cHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogJyd9YH0vPlxuICAgIGNhc2UgJ3NlYXJjaCc6XG4gICAgICByZXR1cm4gPExpbmtlZEluSWNvbiBmaWxsPXtkZWZhdWx0Q29sb3J9ICB3aWR0aD17YCR7c2l6ZS53fXB4YH0gaGVpZ2h0PXtgJHtzaXplLmh9cHhgfSBjbGFzc05hbWU9e2B2aC1pY29uICR7cHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogJyd9YH0vPlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gPHNwYW4vPlxuXG4gIH1cbn1cblxuVkhJY29uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiAnJyxcbn1cbmV4cG9ydCBjb25zdCBJY29uUHJvcFR5cGVzID0ge1xuICBzb3VyY2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbn1cblxuVkhJY29uLnByb3BUeXBlcyA9IEljb25Qcm9wVHlwZXNcblxuZXhwb3J0IGRlZmF1bHQgVkhJY29uXG4iXX0=