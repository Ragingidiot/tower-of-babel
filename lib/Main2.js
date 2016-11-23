'use strict';

var _Math = require('./Math2');

var _Math2 = _interopRequireDefault(_Math);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var arg1 = process.argv[2];
var arg2 = process.argv[3];

console.log(_Math2.default.PI);
console.log(_Math2.default.sqrt(+arg1));
console.log(_Math2.default.square(+arg2));