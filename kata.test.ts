var { parseInput } = require('./helpers')

export const assert = (cond) => {
  if(!cond) {
    throw new Error('Assertion error')
  }
}

type Axis = number //0|1|2|3|4|5
type Point = {x: number, y: number}
type Rotation = 'R' | 'L'
type Move = 'M'
type RoverAction = Rotation | Move
type Direction = 'N' | 'S' | 'W' | 'E'
type Location = {x: Axis, y: Axis, direction: Direction}
interface Rover {
  location: Location,
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

const moves: Record<Direction, (p: Point) => Point> = {
  N: (p) => ({x: p.x, y: p.y + 1}),
  S: (p) => ({x: p.x, y: p.y - 1}),
  E: (p) => ({x: p.x + 1, y: p.y}),
  W: (p) => ({x: p.x - 1, y: p.y}),
}
const move = (facing: Direction, point: Point) => {
  return moves[facing](point)
}

const roverReducer = (rover: Rover, action: RoverAction) => {
  let newLocation: Location
  let result: Rover
  switch (action) {
    case 'L':
      newLocation = {...rover.location, direction: rotate(rover.location.direction, action)}
      result = {...rover, location: newLocation}
      return result
    case 'R':
      newLocation = {...rover.location, direction: rotate(rover.location.direction, action)}
      result = {...rover, location: newLocation}
      return result
    case 'M':
      newLocation = {...move(rover.location.direction, {...rover.location}), direction: rover.location.direction}
      result = {...rover, location: newLocation}
      return result
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
  console.log(result)
  // assert(expected.join('_') === result.join('_'))

}

testOne()