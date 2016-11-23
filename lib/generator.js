'use strict';

var FizzBuzz = regeneratorRuntime.mark(function _callee() {
    var num;
    return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    num = 1;

                case 1:
                    if (!(num <= process.argv[2])) {
                        _context.next = 24;
                        break;
                    }

                    if (!(num % 15 === 0)) {
                        _context.next = 8;
                        break;
                    }

                    num++;
                    _context.next = 6;
                    return 'FizzBuzz';

                case 6:
                    _context.next = 22;
                    break;

                case 8:
                    if (!(num % 3 === 0)) {
                        _context.next = 14;
                        break;
                    }

                    num++;
                    _context.next = 12;
                    return 'Fizz';

                case 12:
                    _context.next = 22;
                    break;

                case 14:
                    if (!(num % 5 === 0)) {
                        _context.next = 20;
                        break;
                    }

                    num++;
                    _context.next = 18;
                    return 'Buzz';

                case 18:
                    _context.next = 22;
                    break;

                case 20:
                    _context.next = 22;
                    return num++;

                case 22:
                    _context.next = 1;
                    break;

                case 24:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
})();

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = FizzBuzz[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var n = _step.value;

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