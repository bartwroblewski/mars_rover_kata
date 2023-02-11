var { parseInput } = require('./helpers')

export const assert = (cond) => {
  if(!cond) {
    throw new Error('Assertion error')
  }
}

type Axis = 0|1|2|3|4|5
type RoverAction = 'R' | 'L' | 'M'
type Direction = 'N' | 'S' | 'W' | 'E'

interface Rover {
  location: {
    x: Axis,
    y: Axis,
    direction: Direction,
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

const executeRoverMessage = (rover: Rover) => { //should be sendMessage, and rover be separate from message?
  return Array.from(rover.nasaMessage).reduce(roverReducer, rover)
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
  const result = rovers.map(executeRoverMessage)
  assert(expected.join('_') === result.join('_'))

}

testOne()