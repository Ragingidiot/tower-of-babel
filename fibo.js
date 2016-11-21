let FizzBuzz = {
    [Symbol.iterator]() {
        let num = 1;

        return {
            next() {


                if(num > process.argv[2])
                    return {done: true};

                let value = num;

                if(num % 15 === 0)
                    value = 'FizzBuzz';
                else if(num % 3 === 0)
                    value = 'Fizz';
                else if(num % 5 === 0)
                    value = 'Buzz';

                ++num;

                return {done: false, value: value};
            }
        };
    }

};

for(var n of FizzBuzz) {
    console.log(n);
}

/*const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
      let pre = 0, cur = 1;
      return {
          next() {
              [pre, cur] = [cur, pre + cur];
              if (pre < max) return {done: false, value: pre};
              return {done: true};
          }
      }
      for (var n of FizzBuzz) {
          if ((n / 3) && (n / 5)) {
              console.log('FizzBuzz');
          } else if (n / 3) {
              console.log('Fizz');
          } else if (n / 5) {
              console.log('Buzz');
          } else {
              console.log(n);
          }
    }
    // here belongs the FizzBuzz logic
    // Hint：
    // When it's finished you have to return an object
    // with the property `done: true` but before you
    // have to set `done: false`
  }
}
*/
