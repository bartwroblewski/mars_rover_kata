"use strict";
exports.__esModule = true;
exports.assert = void 0;
// var assert = require('assert')
var Mars = require('./planet').Mars;
var _a = require('./rover'), Rover = _a.Rover, RoverLocation = _a.RoverLocation;
var sendMessage = require('./nasa').sendMessage;
var parseInput = require('./helpers').parseInput;
var assert = function (cond) {
    if (!cond) {
        throw new Error('Assertion error');
    }
};
exports.assert = assert;
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
    var parsedInput = parseInput(input);
    var rover1 = parsedInput.rovers[0];
    var rover1Message = parsedInput.rovers[0].nasaMessage;
    var rover2 = parsedInput.rovers[1];
    var rover2Message = parsedInput.rovers[1].nasaMessage;
    var newRover1 = Array.from(rover1Message).map(function (char) { return sendMessage(rover1, char); });
    newRover1 = newRover1[newRover1.length - 1];
    (0, exports.assert)(newRover1.location.x === 1);
    (0, exports.assert)(newRover1.location.y === 3);
    (0, exports.assert)(newRover1.location.direction === 'N');
    var newRover2 = Array.from(rover2Message).map(function (char) { return sendMessage(rover2, char); });
    newRover2 = newRover2[newRover2.length - 1];
    console.log(newRover2);
    // assert(newRover2.location.x === 5)
    // assert(newRover2.location.y === 1)
    // assert(newRover2.location.direction === 'E')
};
testOne();
