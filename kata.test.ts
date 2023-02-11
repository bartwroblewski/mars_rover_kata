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
type RoverAction = 'R' | 'L' | 'M'

interface Rover {
  location: {
    x: number,
    y: number,
    direction: 'N' | 'S' | 'W' | 'E',
  }
  nasaMessage: string, // can it be more specific: not any string, but combination of "rover actions"?
}

const roverReducer = (rover: Rover, action: RoverAction) => {
  switch (action) {
    case 'R':
      return ''
    case 'L':
      return ''
    case 'M':
      return ''
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
  const rovers = parseInput(input).rovers
  const result = rovers.map(rover => rover.nasaMessage.reduce(roverReducer))
  const assert(expected.join('_') === result.join('_'))

}

testOne()