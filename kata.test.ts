// var assert = require('assert')
var { Mars } = require('./planet')
var { Rover, RoverLocation } = require('./rover')
var { sendMessage } = require('./nasa')
var { parseInput } = require('./helpers')

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
    const rover1Message: string = parsedInput.rovers[0].nasaMessage;

    const rover2 = parsedInput.rovers[1];
    const rover2Message = parsedInput.rovers[1].nasaMessage;

    let newRover1 = Array.from(rover1Message).map(char => sendMessage(rover1, char))
    newRover1 = newRover1[newRover1.length -1]    
    assert(newRover1.location.x === 1)
    assert(newRover1.location.y === 3)
    assert(newRover1.location.direction === 'N')

    // let newRover2 = Array.from(rover2Message).map(char => sendMessage(rover2, char))
    // newRover2 = newRover2[newRover2.length -1]
    // assert(newRover2.location.x === 5)
    // assert(newRover2.location.y === 1)
    // assert(newRover2.location.direction === 'E')

}

testOne()