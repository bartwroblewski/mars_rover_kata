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
exports.sendMessage = void 0;
var _a = require('./helpers'), rotate = _a.rotate, move = _a.move;
var sendMessage = function (rover, message) {
    var _a = rover.location, x = _a.x, y = _a.y;
    if (message === 'L' || message === 'R') {
        return __assign(__assign({}, rover), { location: {
                x: rover.location.x,
                y: rover.location.y,
                direction: rotate(rover.location.direction, message)
            } });
    }
    var newLocation = move({ x: x, y: y }, message);
    console.log(newLocation);
    return __assign(__assign({}, rover), { location: __assign(__assign({}, newLocation), { direction: rover.location.direction }) });
};
exports.sendMessage = sendMessage;
