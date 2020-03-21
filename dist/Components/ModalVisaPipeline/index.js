"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Avatar = _interopRequireDefault(require("../Avatar"));

var _Text = _interopRequireDefault(require("../Text"));

var _TitleDescription = _interopRequireDefault(require("../TitleDescription"));

var S = _interopRequireWildcard(require("./styles"));

var _Grid = require("../../Grid");

var _Modal = _interopRequireDefault(require("../Modal"));

var _Comments = _interopRequireDefault(require("../Comments"));

var _TimeLine = _interopRequireDefault(require("../TimeLine"));

var _Assign = _interopRequireDefault(require("../Assign"));

var _Textarea = _interopRequireDefault(require("../Textarea"));

var _IconText = _interopRequireDefault(require("../IconText"));

var _index = _interopRequireDefault(require("../Preloader/index"));

var _index2 = _interopRequireDefault(require("../Img/index"));

var _index3 = _interopRequireDefault(require("../../../assets/icons/icon_business.svg/index.jsx"));

var _index4 = _interopRequireDefault(require("../../../assets/icons/icon_skills.svg/index.jsx"));

var _index5 = _interopRequireDefault(require("../../../assets/icons/icon_passport.svg/index.jsx"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var VHModalVisaPipeline = function VHModalVisaPipeline(props) {
  var projectedDate = '';
  var showDate = false;

  if (props.projectedStartDate != null && _typeof(props.projectedStartDate) != undefined) {
    showDate = true;
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var date = new Date(props.projectedStartDate);
    projectedDate = "".concat(monthNames[date.getMonth()], ", ").concat(date.getDate());
  }

  return /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    className: "vh-modal-visa-pipeline ".concat(props.className ? props.className : "")
  }, /*#__PURE__*/_react.default.createElement(_Modal.default, {
    width: "70",
    minWidth: "660",
    open: true,
    header: /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      row: true
    }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      autoWidth: true,
      paddingRight8: true
    }, /*#__PURE__*/_react.default.createElement(_Avatar.default, {
      image: props.user.avatar,
      size: "lg",
      showCursor: true
    })), /*#__PURE__*/_react.default.createElement(_TitleDescription.default, {
      title: props.user.name,
      description: props.user.email,
      titleVariant: "h4",
      titleColor: "gray-90",
      descriptionColor: "gray-80",
      descriptionVariant: "platform",
      onEvent: props.onEvent
    })),
    onEvent: props.onEvent,
    content: /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      row: true
    }, /*#__PURE__*/_react.default.createElement(S.Wrapper, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      marginBottom5: true,
      row: true,
      alignItemsCenter: true
    }, /*#__PURE__*/_react.default.createElement(S.IconWrapper, null, /*#__PURE__*/_react.default.createElement(_index2.default, {
      source: _index3.default,
      title: "company",
      xs: true
    })), /*#__PURE__*/_react.default.createElement(S.Info, null, props.job.companyName), /*#__PURE__*/_react.default.createElement(S.IconWrapper, null, /*#__PURE__*/_react.default.createElement(_index2.default, {
      source: _index4.default,
      title: "position",
      xs: true
    })), /*#__PURE__*/_react.default.createElement(S.Info, null, props.job.position)), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      marginBottom5: true,
      row: true,
      alignItemsCenter: true
    }, /*#__PURE__*/_react.default.createElement(S.IconWrapper, null, /*#__PURE__*/_react.default.createElement(_index2.default, {
      source: _index5.default,
      title: "city",
      xs: true
    })), /*#__PURE__*/_react.default.createElement(S.Info, null, props.job.location), /*#__PURE__*/_react.default.createElement(S.IconWrapper, null, /*#__PURE__*/_react.default.createElement(_index2.default, {
      source: _index4.default,
      title: "city",
      xs: true
    })), /*#__PURE__*/_react.default.createElement(S.Info, null, props.salary)), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      marginBottom5: true
    }, /*#__PURE__*/_react.default.createElement(_Textarea.default, {
      description: props.description,
      onEvent: props.onEvent
    }))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      marginBottom5: true
    }, props.assignedSession.loading ? /*#__PURE__*/_react.default.createElement(_index.default, {
      size: "sm"
    }) : /*#__PURE__*/_react.default.createElement(_Assign.default, {
      items: props.assign.items,
      onEvent: props.onEvent
    }))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      row: true
    }, /*#__PURE__*/_react.default.createElement(S.Wrapper, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_Comments.default, {
      data: props.user,
      loading: props.commentsSession.loading,
      comments: props.comments,
      onEvent: props.onEvent
    }))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      margin: true
    }, props.activitiesSession.loading ? /*#__PURE__*/_react.default.createElement(_index.default, {
      size: "sm"
    }) : /*#__PURE__*/_react.default.createElement(_TimeLine.default, {
      items: props.timeLine.items,
      totalDays: props.timeLine.totalDays,
      onEvent: props.onEvent
    }), showDate && /*#__PURE__*/_react.default.createElement(S.InfoDate, null, "Projected Start Date: ", /*#__PURE__*/_react.default.createElement("b", null, projectedDate)))))
  }));
};

VHModalVisaPipeline.defaultProps = {
  onEvent: null,
  className: ""
};
VHModalVisaPipeline.propTypes = {
  onEvent: _propTypes.default.func,
  className: _propTypes.default.stringc
};
var _default = VHModalVisaPipeline;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvTW9kYWxWaXNhUGlwZWxpbmUvaW5kZXguanN4Il0sIm5hbWVzIjpbIlZITW9kYWxWaXNhUGlwZWxpbmUiLCJwcm9wcyIsInByb2plY3RlZERhdGUiLCJzaG93RGF0ZSIsInByb2plY3RlZFN0YXJ0RGF0ZSIsInVuZGVmaW5lZCIsIm1vbnRoTmFtZXMiLCJkYXRlIiwiRGF0ZSIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImNsYXNzTmFtZSIsInVzZXIiLCJhdmF0YXIiLCJuYW1lIiwiZW1haWwiLCJvbkV2ZW50IiwiQ29tcGFueUljb24iLCJqb2IiLCJjb21wYW55TmFtZSIsIlBvc2l0aW9uSWNvbiIsInBvc2l0aW9uIiwiQ2l0eUljb24iLCJsb2NhdGlvbiIsInNhbGFyeSIsImRlc2NyaXB0aW9uIiwiYXNzaWduZWRTZXNzaW9uIiwibG9hZGluZyIsImFzc2lnbiIsIml0ZW1zIiwiY29tbWVudHNTZXNzaW9uIiwiY29tbWVudHMiLCJhY3Rpdml0aWVzU2Vzc2lvbiIsInRpbWVMaW5lIiwidG90YWxEYXlzIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsInN0cmluZ2MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQUMsS0FBSyxFQUFJO0FBRW5DLE1BQUlDLGFBQWEsR0FBRyxFQUFwQjtBQUNBLE1BQUlDLFFBQVEsR0FBRyxLQUFmOztBQUVBLE1BQUdGLEtBQUssQ0FBQ0csa0JBQU4sSUFBNEIsSUFBNUIsSUFBb0MsUUFBT0gsS0FBSyxDQUFDRyxrQkFBYixLQUFtQ0MsU0FBMUUsRUFBb0Y7QUFDbEZG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N0Q7QUFBc0UsTUFBQSxRQUFRLEVBQUUxQixLQUFLLENBQUM4QixRQUF0RjtBQUFnRyxNQUFBLE9BQU8sRUFBRTlCLEtBQUssQ0FBQ2U7QUFBL0csTUFERixDQURGLENBREYsZUFNRSw2QkFBQyxTQUFEO0FBQUssTUFBQSxNQUFNO0FBQVgsT0FDR2YsS0FBSyxDQUFDK0IsaUJBQU4sQ0FBd0JMLE9BQXhCLGdCQUFrQyw2QkFBQyxjQUFEO0FBQWEsTUFBQSxJQUFJLEVBQUM7QUFBbEIsTUFBbEMsZ0JBQ0MsNkJBQUMsaUJBQUQ7QUFDRSxNQUFBLEtBQUssRUFBRTFCLEtBQUssQ0FBQ2dDLFFBQU4sQ0FBZUosS0FEeEI7QUFFRSxNQUFBLFNBQVMsRUFBRTVCLEtBQUssQ0FBQ2dDLFFBQU4sQ0FBZUMsU0FGNUI7QUFHRSxNQUFBLE9BQU8sRUFBRWpDLEtBQUssQ0FBQ2U7QUFIakIsTUFGSixFQU9JYixRQUFRLGlCQUNWLDZCQUFDLENBQUQsQ0FBRyxRQUFILCtDQUFzQyx3Q0FBSUQsYUFBSixDQUF0QyxDQVJGLENBTkYsQ0FwQ0Y7QUExQkosSUFMRixDQURGO0FBMkZELENBM0dEOztBQTZHQUYsbUJBQW1CLENBQUNtQyxZQUFwQixHQUFtQztBQUNqQ25CLEVBQUFBLE9BQU8sRUFBRSxJQUR3QjtBQUVqQ0wsRUFBQUEsU0FBUyxFQUFFO0FBRnNCLENBQW5DO0FBS0FYLG1CQUFtQixDQUFDb0MsU0FBcEIsR0FBZ0M7QUFDOUJwQixFQUFBQSxPQUFPLEVBQUVxQixtQkFBVUMsSUFEVztBQUU5QjNCLEVBQUFBLFNBQVMsRUFBRTBCLG1CQUFVRTtBQUZTLENBQWhDO2VBS2V2QyxtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBWSEF2YXRhciBmcm9tIFwiLi4vQXZhdGFyXCI7XG5pbXBvcnQgVkhUZXh0IGZyb20gXCIuLi9UZXh0XCI7XG5pbXBvcnQgVkhUaXRsZURlc2NyaXB0aW9uIGZyb20gXCIuLi9UaXRsZURlc2NyaXB0aW9uXCI7XG5pbXBvcnQgKiBhcyBTIGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHsgUm93IH0gZnJvbSBcIi4uLy4uL0dyaWRcIjtcbmltcG9ydCBWSE1vZGFsIGZyb20gXCIuLi9Nb2RhbFwiO1xuaW1wb3J0IFZIQ29tbWVudHMgZnJvbSBcIi4uL0NvbW1lbnRzXCI7XG5pbXBvcnQgVkhUaW1lTGluZSBmcm9tIFwiLi4vVGltZUxpbmVcIjtcbmltcG9ydCBWSEFzc2lnbiBmcm9tIFwiLi4vQXNzaWduXCI7XG5pbXBvcnQgVkhUZXh0YXJlYSBmcm9tIFwiLi4vVGV4dGFyZWFcIjtcbmltcG9ydCBWSEljb25UZXh0IGZyb20gXCIuLi9JY29uVGV4dFwiO1xuaW1wb3J0IFZIUHJlbG9hZGVyIGZyb20gJy4uL1ByZWxvYWRlci9pbmRleCdcbmltcG9ydCBWSEltZyBmcm9tICcuLi9JbWcvaW5kZXgnXG5cbmltcG9ydCBDb21wYW55SWNvbiBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvaWNvbl9idXNpbmVzcy5zdmcvaW5kZXguanN4J1xuaW1wb3J0IFBvc2l0aW9uSWNvbiBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvaWNvbl9za2lsbHMuc3ZnL2luZGV4LmpzeCdcbmltcG9ydCBDaXR5SWNvbiBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvaWNvbl9wYXNzcG9ydC5zdmcvaW5kZXguanN4J1xuXG5jb25zdCBWSE1vZGFsVmlzYVBpcGVsaW5lID0gcHJvcHMgPT4ge1xuXG4gIGxldCBwcm9qZWN0ZWREYXRlID0gJydcbiAgbGV0IHNob3dEYXRlID0gZmFsc2VcblxuICBpZihwcm9wcy5wcm9qZWN0ZWRTdGFydERhdGUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcHMucHJvamVjdGVkU3RhcnREYXRlICE9IHVuZGVmaW5lZCl7XG4gICAgc2hvd0RhdGUgPSB0cnVlXG4gICAgY29uc3QgbW9udGhOYW1lcyA9IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLFxuICAgICAgICAgICAgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIiwgXCJOb3ZcIiwgXCJEZWNcIlxuICAgICAgICBdO1xuXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShwcm9wcy5wcm9qZWN0ZWRTdGFydERhdGUpXG5cbiAgICBwcm9qZWN0ZWREYXRlID0gYCR7bW9udGhOYW1lc1tkYXRlLmdldE1vbnRoKCldfSwgJHtkYXRlLmdldERhdGUoKX1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxSb3dcbiAgICAgIGNsYXNzTmFtZT17YHZoLW1vZGFsLXZpc2EtcGlwZWxpbmUgJHtcbiAgICAgICAgcHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogXCJcIlxuICAgICAgICB9YH1cbiAgICA+XG4gICAgICA8VkhNb2RhbFxuICAgICAgICB3aWR0aD1cIjcwXCJcbiAgICAgICAgbWluV2lkdGg9XCI2NjBcIlxuICAgICAgICBvcGVuPXt0cnVlfVxuICAgICAgICBoZWFkZXI9e1xuICAgICAgICAgIDxSb3cgcm93PlxuICAgICAgICAgICAgPFJvdyBhdXRvV2lkdGggcGFkZGluZ1JpZ2h0OD5cbiAgICAgICAgICAgICAgPFZIQXZhdGFyXG4gICAgICAgICAgICAgICAgaW1hZ2U9e3Byb3BzLnVzZXIuYXZhdGFyfVxuICAgICAgICAgICAgICAgIHNpemU9e1wibGdcIn1cbiAgICAgICAgICAgICAgICBzaG93Q3Vyc29yXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxWSFRpdGxlRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgdGl0bGU9e3Byb3BzLnVzZXIubmFtZX1cbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Byb3BzLnVzZXIuZW1haWx9XG4gICAgICAgICAgICAgIHRpdGxlVmFyaWFudD1cImg0XCJcbiAgICAgICAgICAgICAgdGl0bGVDb2xvcj1cImdyYXktOTBcIlxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbkNvbG9yPVwiZ3JheS04MFwiXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uVmFyaWFudD1cInBsYXRmb3JtXCJcbiAgICAgICAgICAgICAgb25FdmVudD17cHJvcHMub25FdmVudH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIH1cbiAgICAgICAgb25FdmVudD17cHJvcHMub25FdmVudH1cbiAgICAgICAgY29udGVudD17XG4gICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgIDxSb3cgcm93PlxuICAgICAgICAgICAgICA8Uy5XcmFwcGVyPlxuICAgICAgICAgICAgICAgIDxSb3cgbWFyZ2luQm90dG9tNSByb3cgYWxpZ25JdGVtc0NlbnRlcj5cbiAgICAgICAgICAgICAgICAgIDxTLkljb25XcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICA8VkhJbWcgc291cmNlPXtDb21wYW55SWNvbn0gdGl0bGU9XCJjb21wYW55XCIgeHMgLz5cbiAgICAgICAgICAgICAgICAgIDwvUy5JY29uV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgIDxTLkluZm8+e3Byb3BzLmpvYi5jb21wYW55TmFtZX08L1MuSW5mbz5cbiAgICAgICAgICAgICAgICAgIDxTLkljb25XcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICA8VkhJbWcgc291cmNlPXtQb3NpdGlvbkljb259IHRpdGxlPVwicG9zaXRpb25cIiB4cyAvPlxuICAgICAgICAgICAgICAgICAgPC9TLkljb25XcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgPFMuSW5mbz57cHJvcHMuam9iLnBvc2l0aW9ufTwvUy5JbmZvPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgIDxSb3cgbWFyZ2luQm90dG9tNSByb3cgYWxpZ25JdGVtc0NlbnRlcj5cbiAgICAgICAgICAgICAgICAgIDxTLkljb25XcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICA8VkhJbWcgc291cmNlPXtDaXR5SWNvbn0gdGl0bGU9XCJjaXR5XCIgeHMgLz5cbiAgICAgICAgICAgICAgICAgIDwvUy5JY29uV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgIDxTLkluZm8+e3Byb3BzLmpvYi5sb2NhdGlvbn08L1MuSW5mbz5cbiAgICAgICAgICAgICAgICAgIDxTLkljb25XcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICA8VkhJbWcgc291cmNlPXtQb3NpdGlvbkljb259IHRpdGxlPVwiY2l0eVwiIHhzIC8+XG4gICAgICAgICAgICAgICAgICA8L1MuSWNvbldyYXBwZXI+XG4gICAgICAgICAgICAgICAgICA8Uy5JbmZvPntwcm9wcy5zYWxhcnl9PC9TLkluZm8+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPFJvdyBtYXJnaW5Cb3R0b201PlxuICAgICAgICAgICAgICAgICAgPFZIVGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Byb3BzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICBvbkV2ZW50PXtwcm9wcy5vbkV2ZW50fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgPC9TLldyYXBwZXI+XG4gICAgICAgICAgICAgIDxSb3cgbWFyZ2luQm90dG9tNT5cbiAgICAgICAgICAgICAgICB7cHJvcHMuYXNzaWduZWRTZXNzaW9uLmxvYWRpbmcgPyA8VkhQcmVsb2FkZXIgc2l6ZT0nc20nIC8+IDpcbiAgICAgICAgICAgICAgICAgIDxWSEFzc2lnbiBpdGVtcz17cHJvcHMuYXNzaWduLml0ZW1zfSBvbkV2ZW50PXtwcm9wcy5vbkV2ZW50fSAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxSb3cgcm93PlxuICAgICAgICAgICAgICA8Uy5XcmFwcGVyPlxuICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICA8VkhDb21tZW50cyBkYXRhPXtwcm9wcy51c2VyfSBsb2FkaW5nPXtwcm9wcy5jb21tZW50c1Nlc3Npb24ubG9hZGluZ30gY29tbWVudHM9e3Byb3BzLmNvbW1lbnRzfSBvbkV2ZW50PXtwcm9wcy5vbkV2ZW50fS8+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgIDwvUy5XcmFwcGVyPlxuICAgICAgICAgICAgICA8Um93IG1hcmdpbj5cbiAgICAgICAgICAgICAgICB7cHJvcHMuYWN0aXZpdGllc1Nlc3Npb24ubG9hZGluZyA/IDxWSFByZWxvYWRlciBzaXplPSdzbScgLz4gOlxuICAgICAgICAgICAgICAgICAgPFZIVGltZUxpbmVcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM9e3Byb3BzLnRpbWVMaW5lLml0ZW1zfVxuICAgICAgICAgICAgICAgICAgICB0b3RhbERheXM9e3Byb3BzLnRpbWVMaW5lLnRvdGFsRGF5c31cbiAgICAgICAgICAgICAgICAgICAgb25FdmVudD17cHJvcHMub25FdmVudH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfXtzaG93RGF0ZSAmJlxuICAgICAgICAgICAgICAgIDxTLkluZm9EYXRlPntgUHJvamVjdGVkIFN0YXJ0IERhdGU6IGB9PGI+e3Byb2plY3RlZERhdGV9PC9iPjwvUy5JbmZvRGF0ZT5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgPC9Sb3c+XG4gICk7XG59O1xuXG5WSE1vZGFsVmlzYVBpcGVsaW5lLmRlZmF1bHRQcm9wcyA9IHtcbiAgb25FdmVudDogbnVsbCxcbiAgY2xhc3NOYW1lOiBcIlwiXG59O1xuXG5WSE1vZGFsVmlzYVBpcGVsaW5lLnByb3BUeXBlcyA9IHtcbiAgb25FdmVudDogUHJvcFR5cGVzLmZ1bmMsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ2Ncbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZITW9kYWxWaXNhUGlwZWxpbmU7XG4iXX0=