// var assert = require('assert')
var Mars = require('./planet').Mars;
var _a = require('./rover'), Rover = _a.Rover, RoverLocation = _a.RoverLocation;
var assert = function (cond) {
    if (!cond) {
        throw new Error('Assertion error');
    }
};
var testOne = function () {
    var input = [
        '5 5',
        '1 2 N',
        'LMLMLMLMM',
        '3 3 E',
        'MMRMMRMRRM',
    ].reduce(function (acc, curr) { return acc + ' ' + curr; });
    console.log(input);
};
testOne();
