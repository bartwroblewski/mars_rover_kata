"use strict";
exports.__esModule = true;
exports.assert = void 0;
// var assert = require('assert')
var Mars = require('./planet').Mars;
var _a = require('./rover'), Rover = _a.Rover, RoverLocation = _a.RoverLocation;
var sendMessage = require('./nasa').sendMessage;
var parsedInput = require('./helpers').parsedInput;
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
    sendMessage(rover1, rover1Message);
    sendMessage(rover2, rover2Message);
    (0, exports.assert)(rover1.location.x === 1);
    (0, exports.assert)(rover1.location.y === 3);
    (0, exports.assert)(rover1.location.direction === 'N');
    (0, exports.assert)(rover2.location.x === 5);
    (0, exports.assert)(rover2.location.y === 1);
    (0, exports.assert)(rover2.location.direction === 'E');
};
testOne();
