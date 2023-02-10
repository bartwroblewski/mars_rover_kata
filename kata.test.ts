var assert = require('assert')
var { Mars } = require('./planet')
var { Rover, RoverLocation } = require('./rover')


// commnads or NASA ?

const testPlaceRover = () => {
  const rover = Rover()
  const roverLocation: RoverLocation = {
    coordinates: {x: 1, y: 1},
    direction: 'N',
  }
  // commands.placeRover(rover, Mars, roverLocation)
  // assert(commands.getRoverLocation(rover, Mars) === roverLocation)
}
// const testMoveRover = () => {
//   const rover = Rover()
//   const planet = Planet()
//   const roverLocation = {
//     coordinates: {x: 1, y: 1},
//     direction: 'N',
//   }
//   commands.placeRover(rover, planet, roverLocation)
//   commands.moveRover(rover, planet)
//   assert(getRoverLocation(rover, planet) === placeWhere)
// }

// testPlaceRover()