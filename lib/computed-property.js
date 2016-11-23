"use strict";

var _console$log;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//let evenOrOdd = +process.argv[2];
//let evenOrOddKey = evenOrOdd % 2 === 0 ? "even" : "odd";
//let sum = +process.argv[3] + evenOrOdd;

//let obj = {
//        [evenOrOddKey]: evenOrOdd,
//        [sum]: sum
//};

//console.log(obj);

console.log((_console$log = {}, _defineProperty(_console$log, +process.argv[2] % 2 === 0 ? "even" : "odd", +process.argv[2]), _defineProperty(_console$log, +process.argv[2] + +process.argv[3], +process.argv[2] + +process.argv[3]), _console$log));