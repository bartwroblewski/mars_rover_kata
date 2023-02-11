"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.assert = void 0;
var parseInput = require('./helpers').parseInput;
var assert = function (cond) {
    if (!cond) {
        throw new Error('Assertion error');
    }
};
exports.assert = assert;
// const isRotation = (action: RoverAction): action is Rotation => action === 'R' || action === 'L'
// const isMove = (action: RoverAction): action is Move => action === 'M'
var rotations = {
    N: { L: 'W', R: 'E' },
    S: { L: 'E', R: 'W' },
    E: { L: 'N', R: 'S' },
    W: { L: 'S', R: 'N' }
};
var rotate = function (facing, rotation) { return rotations[facing][rotation]; };
var moves = {
    N: function (p) { return ({ x: p.x, y: p.y + 1 }); },
    S: function (p) { return ({ x: p.x, y: p.y - 1 }); },
    E: function (p) { return ({ x: p.x + 1, y: p.y }); },
    W: function (p) { return ({ x: p.x - 1, y: p.y }); }
};
var move = function (facing, point) {
    return moves[facing](point);
};
var roverReducer = function (rover, action) {
    var newLocation;
    var result;
    switch (action) {
        case 'L':
            newLocation = __assign(__assign({}, rover.location), { direction: rotate(rover.location.direction, action) });
            result = __assign(__assign({}, rover), { location: newLocation });
            return result;
        case 'R':
            newLocation = __assign(__assign({}, rover.location), { direction: rotate(rover.location.direction, action) });
            result = __assign(__assign({}, rover), { location: newLocation });
            return result;
        case 'M':
            newLocation = __assign(__assign({}, move(rover.location.direction, __assign({}, rover.location))), { direction: rover.location.direction });
            result = __assign(__assign({}, rover), { location: newLocation });
            return result;
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
    console.log(result);
    // assert(expected.join('_') === result.join('_'))
};
testOne();
