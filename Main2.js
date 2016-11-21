var arg1 = process.argv[2];
var arg2 = process.argv[3];

import libmath from './Math2';

console.log(libmath.PI);
console.log(libmath.sqrt(+arg1));
console.log(libmath.square(+arg2));
