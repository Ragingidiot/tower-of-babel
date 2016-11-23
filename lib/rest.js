'use strict';

var rawArgs = process.argv.slice(2);
var args = [];

rawArgs.forEach(function (val) {
  var commaSep = val.split(',');
  commaSep.forEach(function (val) {
    if (val !== '') args.push(+val);
  });
});

// write a function called `avg` here that calculates the average.

// let avg = function(...nums) {
//     return nums.reduce((total, num) => total + num, 0) / nums.length;
// }

// function avg(...args){
//   return args.reduce((a, b)=>a+b)/args.length;
// }

var avg = function avg() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (sum, n) {
    return sum + n;
  }) / args.length;
};

console.log(avg.apply(undefined, args));