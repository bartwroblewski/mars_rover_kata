"use strict";
exports.__esModule = true;
exports.assert = void 0;
var parseInput = require('./helpers').parseInput;
var assert = function (cond) {
    if (!cond) {
        throw new Error('Assertion error');
    }
};
exports.assert = assert;
var roverReducer = function (rover, action) {
    switch (action) {
        case 'R':
            return '';
        case 'L':
            return '';
        case 'M':
            return '';
    }
};
var executeRoverMessage = function (rover) {
    return Array.from(rover.nasaMessage).reduce(roverReducer, rover);
};
var testOne = function () {
    var input = [
        '5 5',
        '1 2 N',
        'LMLMLMLMM',
        '3 3 E',
        'MMRMMRMRRM',
    ];
    var expected = [
        '1 3 N',
        '5 1 E',
    ];
    var rovers = parseInput(input).rovers;
    var result = rovers.map(executeRoverMessage);
    (0, exports.assert)(expected.join('_') === result.join('_'));
};
testOne();
