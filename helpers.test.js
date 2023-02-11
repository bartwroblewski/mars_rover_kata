var _a = require('./helpers'), parseInput = _a.parseInput, rotate = _a.rotate;
var assert = require('./kata.test').assert;
var testParseInput = function () {
    var input = [
        '5 5',
        '1 2 N',
        'LMLMLMLMM',
        '3 3 E',
        'MMRMMRMRRM',
    ];
    var parsedInput = parseInput(input);
    assert(parsedInput.rovers[0].location.x === 1);
    assert(parsedInput.rovers[0].location.y === 2);
    assert(parsedInput.rovers[0].location.direction === 'N');
    assert(parsedInput.rovers[0].nasaMessage === 'LMLMLMLMM');
    assert(parsedInput.rovers[1].location.x === 3);
    assert(parsedInput.rovers[1].location.y === 3);
    assert(parsedInput.rovers[1].location.direction === 'E');
    assert(parsedInput.rovers[1].nasaMessage === 'MMRMMRMRRM');
};
testParseInput();
