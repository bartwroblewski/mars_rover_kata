var { parseInput, rotate } = require('./helpers')
var { assert } = require('./kata.test')

const testParseInput = () => {
    const input = [
        '5 5',
        '1 2 N',
        'LMLMLMLMM',
        '3 3 E',
        'MMRMMRMRRM',
      ]//.reduce((acc, curr) => acc + ' ' + curr)
    const parsedInput = parseInput(input)

    assert(parsedInput.planetCoordinates.x0 === 0)
    assert(parsedInput.planetCoordinates.y0 === 0)
    assert(parsedInput.planetCoordinates.x1 === 5)
    assert(parsedInput.planetCoordinates.y1 === 5)

    assert(parsedInput.rovers[0].location.x === 1)
    assert(parsedInput.rovers[0].location.y === 2)
    assert(parsedInput.rovers[0].location.direction === 'N')
    assert(parsedInput.rovers[0].nasaMessage === 'LMLMLMLMM')

    assert(parsedInput.rovers[1].location.x === 3)
    assert(parsedInput.rovers[1].location.y === 3)
    assert(parsedInput.rovers[1].location.direction === 'E')
    assert(parsedInput.rovers[1].nasaMessage === 'MMRMMRMRRM')
}

testParseInput()