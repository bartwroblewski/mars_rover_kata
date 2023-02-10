// var assert = require('assert')
var { Mars } = require('./planet')
var { Rover, RoverLocation } = require('./rover')
var { sendMessage } = require('./nasa')
var { parsedInput } = require('./helpers')

export const assert = (cond) => {
  if(!cond) {
    throw new Error('Assertion error')
  }
}
const testOne = () => {
  const input = [
    '5 5',
    '1 2 N',
    'LMLMLMLMM',
    '3 3 E',
    'MMRMMRMRRM',
  ]
  const expected = [
    '1 3 N',
    '5 1 E',
  ]
    const parsedInput = parseInput(input);

    const rover1 = parsedInput.rovers[0];
    const rover1Message = parsedInput.rovers[0].nasaMessage;

    const rover2 = parsedInput.rovers[1];
    const rover2Message = parsedInput.rovers[1].nasaMessage;

    sendMessage(rover1, rover1Message);
    sendMessage(rover2, rover2Message);

    // assert(rover1.location.x === 1)
    // assert(rover1.location.y === 3)
    // assert(rover1.location.direction === 'N')

    // assert(rover2.location.x === 5)
    // assert(rover2.location.y === 1)
    // assert(rover2.location.direction === 'E')

}

testOne()