'use strict';

var name = 'jacob';
var add = function add(a, b) {
  return a + b;
};
var sum = function sum() {
  for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  return numbers.reduce(function (prev, curr) {
    return prev + curr;
  });
};