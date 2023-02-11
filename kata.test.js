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
var _a = require('./helpers'), assert = _a.assert, parseInput = _a.parseInput;
var rotations = {
    N: { L: 'W', R: 'E' },
    S: { L: 'E', R: 'W' },
    E: { L: 'N', R: 'S' },
    W: { L: 'S', R: 'N' }
};
var rotate = function (facing, rotation) { return rotations[facing][rotation]; };
var moves = {
    N: function (p) { return (__assign(__assign({}, p), { y: p.y + 1 })); },
    S: function (p) { return (__assign(__assign({}, p), { y: p.y - 1 })); },
    E: function (p) { return (__assign(__assign({}, p), { x: p.x + 1 })); },
    W: function (p) { return (__assign(__assign({}, p), { x: p.x - 1 })); }
};
var move = function (facing, point) { return moves[facing](point); };
var rotateRover = function (rover, rotation) {
    return __assign(__assign({}, rover), { location: __assign(__assign({}, rover.location), { direction: rotate(rover.location.direction, rotation) }) });
};
var moveRover = function (rover) {
    return __assign(__assign({}, rover), { location: __assign(__assign({}, move(rover.location.direction, __assign({}, rover.location))), { direction: rover.location.direction }) });
};
var roverReducer = function (rover, action) {
    if (action === 'L' || action === 'R') {
        return rotateRover(rover, action);
    }
    if (action === 'M') {
        return moveRover(rover);
    }
};
var executeRoverMessage = function (rover) {
    return Array.from(rover.nasaMessage).reduce(roverReducer, rover);
};
var testKata = function () {
    var input = [
        '5 5',
        '1 2 N',
        'LMLMLMLMM',
        '3 3 E',
        'MMRMMRMRRM',
    ];
    // const expected = [
    //   '1 3 N',
    //   '5 1 E',
    // ]
    var parsedInput = parseInput(input);
    var rovers = parsedInput.rovers.map(executeRoverMessage);
    assert(rovers[0].location.x === 1 && rovers[0].location.y === 3 && rovers[0].location.direction === 'N');
    assert(rovers[1].location.x === 5 && rovers[1].location.y === 1 && rovers[1].location.direction === 'E');
};
testKata();
