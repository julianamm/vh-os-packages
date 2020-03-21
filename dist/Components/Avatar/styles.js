"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Avatar = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.2);\n  background-image: url(", ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  border-radius: 50%;\n  text-align: center;\n  align-content: center;\n  margin: ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Avatar = _styledComponents.default.div(_templateObject(), function (props) {
  return props.image && props.image;
}, function (props) {
  return props.center ? "0 auto" : "0";
}, function (_ref) {
  var showCursor = _ref.showCursor;
  return showCursor && "\n      cursor: pointer;\n  ";
}, function (_ref2) {
  var size = _ref2.size;
  return size === "xxl" && "\n    width: 120px;\n    height: 120px;\n  ";
}, function (_ref3) {
  var size = _ref3.size;
  return size === "xl" && "\n    width: 96px;\n    height: 96px;\n  ";
}, function (_ref4) {
  var size = _ref4.size;
  return size === "lg" && "\n    width: 48px;\n    height: 48px;\n  ";
}, function (_ref5) {
  var size = _ref5.size;
  return size === "md" && "\n    width: 32px;\n    height: 32px;\n  ";
}, function (_ref6) {
  var size = _ref6.size;
  return size === "sm" && "\n    width: 24px;\n    height: 24px;\n  ";
}, function (_ref7) {
  var size = _ref7.size;
  return size === "xs" && "\n    width: 16px;\n    height: 16px;\n  ";
});

exports.Avatar = Avatar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvQXZhdGFyL3N0eWxlcy5qcyJdLCJuYW1lcyI6WyJBdmF0YXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsImltYWdlIiwiY2VudGVyIiwic2hvd0N1cnNvciIsInNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLElBQU1BLE1BQU0sR0FBR0MsMEJBQU9DLEdBQVYsb0JBS08sVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixJQUFlRCxLQUFLLENBQUNDLEtBQXpCO0FBQUEsQ0FMWixFQVlQLFVBQUFELEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNFLE1BQU4sR0FBZSxRQUFmLEdBQTBCLEdBQS9CO0FBQUEsQ0FaRSxFQWFiO0FBQUEsTUFBR0MsVUFBSCxRQUFHQSxVQUFIO0FBQUEsU0FDQUEsVUFBVSxrQ0FEVjtBQUFBLENBYmEsRUFrQmI7QUFBQSxNQUFHQyxJQUFILFNBQUdBLElBQUg7QUFBQSxTQUNBQSxJQUFJLEtBQUssS0FBVCxpREFEQTtBQUFBLENBbEJhLEVBd0JiO0FBQUEsTUFBR0EsSUFBSCxTQUFHQSxJQUFIO0FBQUEsU0FDQUEsSUFBSSxLQUFLLElBQVQsK0NBREE7QUFBQSxDQXhCYSxFQThCYjtBQUFBLE1BQUdBLElBQUgsU0FBR0EsSUFBSDtBQUFBLFNBQ0FBLElBQUksS0FBSyxJQUFULCtDQURBO0FBQUEsQ0E5QmEsRUFvQ2I7QUFBQSxNQUFHQSxJQUFILFNBQUdBLElBQUg7QUFBQSxTQUNBQSxJQUFJLEtBQUssSUFBVCwrQ0FEQTtBQUFBLENBcENhLEVBMENiO0FBQUEsTUFBR0EsSUFBSCxTQUFHQSxJQUFIO0FBQUEsU0FDQUEsSUFBSSxLQUFLLElBQVQsK0NBREE7QUFBQSxDQTFDYSxFQWdEYjtBQUFBLE1BQUdBLElBQUgsU0FBR0EsSUFBSDtBQUFBLFNBQ0FBLElBQUksS0FBSyxJQUFULCtDQURBO0FBQUEsQ0FoRGEsQ0FBWiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBBdmF0YXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAwIDAgMCA0cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwcm9wcyA9PiBwcm9wcy5pbWFnZSAmJiBwcm9wcy5pbWFnZX0pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogJHtwcm9wcyA9PiAocHJvcHMuY2VudGVyID8gXCIwIGF1dG9cIiA6IFwiMFwiKX1cbiAgICAkeyh7IHNob3dDdXJzb3IgfSkgPT5cbiAgICAgIHNob3dDdXJzb3IgJiZcbiAgICAgIGBcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgYH1cbiAgICAkeyh7IHNpemUgfSkgPT5cbiAgICAgIHNpemUgPT09IFwieHhsXCIgJiZcbiAgICAgIGBcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgYH1cbiAgICAkeyh7IHNpemUgfSkgPT5cbiAgICAgIHNpemUgPT09IFwieGxcIiAmJlxuICAgICAgYFxuICAgIHdpZHRoOiA5NnB4O1xuICAgIGhlaWdodDogOTZweDtcbiAgYH1cbiAgICAkeyh7IHNpemUgfSkgPT5cbiAgICAgIHNpemUgPT09IFwibGdcIiAmJlxuICAgICAgYFxuICAgIHdpZHRoOiA0OHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgYH1cbiAgICAkeyh7IHNpemUgfSkgPT5cbiAgICAgIHNpemUgPT09IFwibWRcIiAmJlxuICAgICAgYFxuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgYH1cbiAgICAkeyh7IHNpemUgfSkgPT5cbiAgICAgIHNpemUgPT09IFwic21cIiAmJlxuICAgICAgYFxuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgYH1cbiAgICAkeyh7IHNpemUgfSkgPT5cbiAgICAgIHNpemUgPT09IFwieHNcIiAmJlxuICAgICAgYFxuICAgIHdpZHRoOiAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgYH07XG5gO1xuIl19