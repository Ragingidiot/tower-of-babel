var rawArgs = process.argv.slice(2);
var args = [];

rawArgs.forEach(val => {
  let commaSep = val.split(',');
  commaSep.forEach(val => {
    if(val !== '') args.push(+val);
  });
});

// write a function called `avg` here that calculates the average.

// let avg = function(...nums) {
//     return nums.reduce((total, num) => total + num, 0) / nums.length;
// }

// function avg(...args){
//   return args.reduce((a, b)=>a+b)/args.length;
// }

let avg = (...args) => args.reduce((sum, n) => sum + n) / args.length;

console.log(avg(...args));
