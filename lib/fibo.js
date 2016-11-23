'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FizzBuzz = _defineProperty({}, Symbol.iterator, function () {
    var num = 1;

    return {
        next: function next() {

            if (num > process.argv[2]) return { done: true };

            var value = num;

            if (num % 15 === 0) value = 'FizzBuzz';else if (num % 3 === 0) value = 'Fizz';else if (num % 5 === 0) value = 'Buzz';

            ++num;

            return { done: false, value: value };
        }
    };
});

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = FizzBuzz[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var n = _step.value;

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
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}