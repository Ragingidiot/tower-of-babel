//let evenOrOdd = +process.argv[2];
//let evenOrOddKey = evenOrOdd % 2 === 0 ? "even" : "odd";
//let sum = +process.argv[3] + evenOrOdd;

//let obj = {
//        [evenOrOddKey]: evenOrOdd,
//        [sum]: sum
//};

//console.log(obj);

console.log({
  [+process.argv[2] % 2 === 0 ? "even" : "odd"]: +process.argv[2],
  [+process.argv[2] + +process.argv[3]]: +process.argv[2] + +process.argv[3],
});
