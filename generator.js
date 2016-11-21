let FizzBuzz = function*() {
    let num = 1;

    while(num <= process.argv[2]) {
        if(num % 15 === 0) {
            num++;
            yield 'FizzBuzz';
        } else if(num % 3 === 0) {
            num++;
            yield 'Fizz';
        } else if(num % 5 === 0) {
            num++;
            yield 'Buzz';
        } else {
            yield num++;
        }
    }
}();

for (var n of FizzBuzz) {
    console.log(n);
}

/*

const max = process.argv[2];
let FizzBuzz = function* (){
let num = 1;
while (num <= max) {
    let value = num;
    num++;
        if (value % 15 === 0) {
            value = 'FizzBuzz';
        } else if (value % 3 === 0) {
            value = 'Fizz';
        } else if (value % 5 === 0) {
            value = 'Buzz';
        }
            yield value;
        }
}();

for (var n of FizzBuzz) {
console.log(n);
}

*/
