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
    var result = rovers.map(function (rover) { return rover.nasaMessage.reduce(roverReducer); });
    var assert;
    (expected.join('_') === result.join('_'));
};
testOne();
