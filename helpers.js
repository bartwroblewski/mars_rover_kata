"use strict";
exports.__esModule = true;
exports.move = exports.rotate = exports.parseInput = void 0;
var parseInput = function (input) {
    // const rovers
    return {
        planetCoordinates: { x0: 0, y0: 0, x1: Number(input[0][0]), y1: Number(input[0][2]) },
        rovers: [
            {
                location: {
                    x: Number(input[1][0]),
                    y: Number(input[1][2]),
                    direction: input[1][4]
                },
                nasaMessage: input[2]
            },
            {
                location: {
                    x: Number(input[3][0]),
                    y: Number(input[3][2]),
                    direction: input[3][4]
                },
                nasaMessage: input[4]
            },
        ]
    };
};
exports.parseInput = parseInput;
var rotate = function (initDirection, rotation) {
    var mapping = {
        N: { L: 'W', R: 'E' },
        S: { L: 'E', R: 'W' },
        E: { L: 'N', R: 'S' },
        W: { L: 'S', R: 'N' }
    };
    return mapping[initDirection][rotation];
};
exports.rotate = rotate;
var move = function (location, direction) {
    var mapping = {
        N: { x: location.x, y: location.y + 1 },
        S: { x: location.x, y: location.y - 1 },
        E: { x: location.x + 1, y: location.y },
        W: { x: location.x - 1, y: location.y }
    };
    return mapping[direction];
};
exports.move = move;
