var { parseInput } = require('./helpers')

export const assert = (cond) => {
  if(!cond) {
    throw new Error('Assertion error')
  }
}

type Axis = 0|1|2|3|4|5
type Rotation = 'R' | 'L'
type Move = 'M'
type RoverAction = Rotation | Move
type Direction = 'N' | 'S' | 'W' | 'E'

interface Rover {
  location: {
    x: Axis,
    y: Axis,
    direction: Direction,
  }
  nasaMessage: string, // can it be more specific: not any string, but combination of "rover actions"?
}

// const isRotation = (action: RoverAction): action is Rotation => action === 'R' || action === 'L'
// const isMove = (action: RoverAction): action is Move => action === 'M'

const rotations: Record<Direction, Record<Rotation, Direction>> = {
    N: {L: 'W', R: 'E'},
    S: {L: 'E', R: 'W'},
    E: {L: 'N', R: 'S'},
    W: {L: 'S', R: 'N'},
}
const rotate = (facing: Direction, rotation: Rotation): Direction => rotations[facing][rotation]

const roverReducer = (rover: Rover, action: RoverAction) => {
  switch (action) {
    case ('R' || 'L'):
      const newLocation = {...rover.location, direction: rotate(rover.location.direction, action)}
      return {...rover, location: newLocation}
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