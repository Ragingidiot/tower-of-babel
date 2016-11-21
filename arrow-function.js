var inputs = process.argv.slice(2);
var result = inputs.map(x => x[0].toUpperCase())
                   .reduce((accumulator, current) => accumulator + current);
console.log(result);

/*
var inputs = process.argv.slice(2);
var result = inputs.map((x) => x[0]).reduce((result, x) => result += x);

console.log(result);
*/
