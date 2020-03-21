"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _OffersMock = _interopRequireDefault(require("./OffersMock"));

var _ = _interopRequireDefault(require("."));

var _WorkPermitMock = _interopRequireDefault(require("./WorkPermitMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MockData = [_OffersMock.default, _WorkPermitMock.default];
(0, _react2.storiesOf)("Templates|VisaPipeline", module).add("default", function () {
  return /*#__PURE__*/_react.default.createElement(_.default, {
    data: MockData
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL1RlbXBsYXRlcy9WaXNhUGlwZWxpbmUvc3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJNb2NrRGF0YSIsIk9mZmVyc01vY2siLCJXb3JrUGVybWl0TW9jayIsIm1vZHVsZSIsImFkZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLFFBQVEsR0FBRyxDQUFDQyxtQkFBRCxFQUFhQyx1QkFBYixDQUFqQjtBQUVBLHVCQUFVLHdCQUFWLEVBQW9DQyxNQUFwQyxFQUVDQyxHQUZELENBRUssU0FGTCxFQUVnQjtBQUFBLHNCQUNaLDZCQUFDLFNBQUQ7QUFBd0IsSUFBQSxJQUFJLEVBQUVKO0FBQTlCLElBRFk7QUFBQSxDQUZoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0b3JpZXNPZiB9IGZyb20gXCJAc3Rvcnlib29rL3JlYWN0XCI7XG5pbXBvcnQgT2ZmZXJzTW9jayBmcm9tIFwiLi9PZmZlcnNNb2NrXCI7XG5pbXBvcnQgVkhWaXNhUGlwZWxpbmVUZW1wbGF0ZSBmcm9tIFwiLlwiO1xuaW1wb3J0IFdvcmtQZXJtaXRNb2NrIGZyb20gXCIuL1dvcmtQZXJtaXRNb2NrXCI7XG5cbmNvbnN0IE1vY2tEYXRhID0gW09mZmVyc01vY2ssIFdvcmtQZXJtaXRNb2NrXVxuXG5zdG9yaWVzT2YoXCJUZW1wbGF0ZXN8VmlzYVBpcGVsaW5lXCIsIG1vZHVsZSlcblxuLmFkZChcImRlZmF1bHRcIiwgKCkgPT4gKFxuICAgIDxWSFZpc2FQaXBlbGluZVRlbXBsYXRlIGRhdGE9e01vY2tEYXRhfSAvPlxuKSkgICJdfQ==