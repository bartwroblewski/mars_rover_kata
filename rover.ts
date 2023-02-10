import { Coordinate } from './planet'

type RotateDirection = 'left' | 'right'
type CardinalDirection = 'north' | 'south' | 'west' | 'east'
export interface RoverLocation {
    coordinate: Coordinate,
    direction: CardinalDirection,
}

export interface Rover {
    move: () => void,
    rotate: (direction: RotateDirection) => void,
}