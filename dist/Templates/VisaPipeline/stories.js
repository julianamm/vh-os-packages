"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _OffersMock = _interopRequireDefault(require("./OffersMock"));

var _ = _interopRequireDefault(require("."));

var _WorkPermitMock = _interopRequireDefault(require("./WorkPermitMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MockData = [_OffersMock.default, _WorkPermitMock.default];
(0, _react2.storiesOf)("Templates|VisaPipeline", module).add("default", function () {
  return _react.default.createElement(_.default, {
    data: MockData
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL1RlbXBsYXRlcy9WaXNhUGlwZWxpbmUvc3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJNb2NrRGF0YSIsIk9mZmVyc01vY2siLCJXb3JrUGVybWl0TW9jayIsIm1vZHVsZSIsImFkZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLFFBQVEsR0FBRyxDQUFDQyxtQkFBRCxFQUFhQyx1QkFBYixDQUFqQjtBQUVBLHVCQUFVLHdCQUFWLEVBQW9DQyxNQUFwQyxFQUVDQyxHQUZELENBRUssU0FGTCxFQUVnQjtBQUFBLFNBQ1osNkJBQUMsU0FBRDtBQUF3QixJQUFBLElBQUksRUFBRUo7QUFBOUIsSUFEWTtBQUFBLENBRmhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc3Rvcmllc09mIH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIjtcbmltcG9ydCBPZmZlcnNNb2NrIGZyb20gXCIuL09mZmVyc01vY2tcIjtcbmltcG9ydCBWSFZpc2FQaXBlbGluZVRlbXBsYXRlIGZyb20gXCIuXCI7XG5pbXBvcnQgV29ya1Blcm1pdE1vY2sgZnJvbSBcIi4vV29ya1Blcm1pdE1vY2tcIjtcblxuY29uc3QgTW9ja0RhdGEgPSBbT2ZmZXJzTW9jaywgV29ya1Blcm1pdE1vY2tdXG5cbnN0b3JpZXNPZihcIlRlbXBsYXRlc3xWaXNhUGlwZWxpbmVcIiwgbW9kdWxlKVxuXG4uYWRkKFwiZGVmYXVsdFwiLCAoKSA9PiAoXG4gICAgPFZIVmlzYVBpcGVsaW5lVGVtcGxhdGUgZGF0YT17TW9ja0RhdGF9IC8+XG4pKSAgIl19