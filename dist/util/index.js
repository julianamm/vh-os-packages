"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFormatedDate = exports.requiredField = void 0;

var requiredField = function requiredField(val) {
  return val !== 'undefined' && val !== '';
};

exports.requiredField = requiredField;

var getFormatedDate = function getFormatedDate(date) {
  var result = '';

  if (date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) {
      month = '0' + month;
    }

    if (day.length < 2) {
      day = '0' + day;
    }

    result = [year, month, day].join('-');
  }

  return result;
};

exports.getFormatedDate = getFormatedDate;