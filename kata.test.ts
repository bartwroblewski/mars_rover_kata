// var assert = require('assert')
var { Mars } = require('./planet')
var { Rover, RoverLocation } = require('./rover')
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
  const parsedInput = parseInput(input)
  const rover1 = parsedInput.rovers[0]
  const rover1Message = parsedInput.rovers[0].nasaMessage
  const rover2 = parsedInput.rovers[1]
  const rover2Message = parsedInput.rovers[1].nasaMessage

  nasa.sendMessage(rover1, rover1Message)
  nasa.sendMessage(rover2, rover2Message)


  const 

}

testOne()