"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requiredField = void 0;

var requiredField = function requiredField(val) {
  return val !== 'undefined' && val !== '';
};

exports.requiredField = requiredField;