var { assert, parseInput } = require('./helpers')

type Axis = number // or 0|1|2|3|4|5 ?
type Point = {x: Axis, y: Axis}
type Rotation = 'R' | 'L'
type Move = 'M'
type RoverAction = Rotation | Move
type Direction = 'N' | 'S' | 'W' | 'E'
type Loc = {x: Axis, y: Axis, direction: Direction}
type Rover = {
  location: Loc,
  nasaMessage: string, // can it be more specific: not any string, but combination of "rover actions"?
}

const rotations: Record<Direction, Record<Rotation, Direction>> = {
    N: {L: 'W', R: 'E'},
    S: {L: 'E', R: 'W'},
    E: {L: 'N', R: 'S'},
    W: {L: 'S', R: 'N'},
}
const rotate = (facing: Direction, rotation: Rotation): Direction =>
  rotations[facing][rotation]

const moves: Record<Direction, (p: Point) => Point> = {
  N: (p) => ({...p, y: p.y + 1}),
  S: (p) => ({...p, y: p.y - 1}),
  E: (p) => ({...p, x: p.x + 1}),
  W: (p) => ({...p, x: p.x - 1}),
}
const move = (facing: Direction, point: Point): Point => moves[facing](point)

const rotateRover = (rover: Rover, rotation: Rotation) => {
  return {
    ...rover,
    location: {
      ...rover.location,
      direction: rotate(rover.location.direction, rotation),
    }
  }
}
const rotateRoverLeft = (rover: Rover) => rotateRover(rover, 'L')
const rotateRoverRight = (rover: Rover) => rotateRover(rover, 'R')

const moveRover = (rover: Rover) => {
  return {
    ...rover,
    location: {
      ...move(rover.location.direction, {...rover.location}), 
      direction: rover.location.direction,
    },
  }
}

const actionCallbackMap: Record<RoverAction, (rover: Rover) => Rover> = {
  'L': rotateRoverLeft,
  'R': rotateRoverRight,
  'M': moveRover,
}

const roverReducer = (rover: Rover, action: RoverAction): Rover =>
  actionCallbackMap[action](rover)

const executeRoverMessage = (rover: Rover): Rover => { // should be sendMessage, and rover be separate from message?
  return Array.from(rover.nasaMessage).reduce(roverReducer, rover)
}

const testKata = () => {
  const input = [
    '5 5',
    '1 2 N',
    'LMLMLMLMM',
    '3 3 E',
    'MMRMMRMRRM',
  ]
  // const expected = [
  //   '1 3 N',
  //   '5 1 E',
  // ]
  let parsedInput = parseInput(input)
  const rovers = parsedInput.rovers.map(executeRoverMessage)
  
  assert(rovers[0].location.x === 1 && rovers[0].location.y === 3 && rovers[0].location.direction === 'N')
  assert(rovers[1].location.x === 5 && rovers[1].location.y === 1 && rovers[1].location.direction === 'E')

}

testKata()