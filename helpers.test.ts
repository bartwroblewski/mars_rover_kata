var { parseInput } = require('./helpers')
var { assert } = require('./kata.test')

const testParseInput = () => {
    const input = [
        '5 5',
        '1 2 N',
        'LMLMLMLMM',
        '3 3 E',
        'MMRMMRMRRM',
      ].reduce((acc, curr) => acc + ' ' + curr)
    const parsedInput = parseInput(input)
    console.log(parsedInput)
    assert(parsedInput.planetCoordinates.x0 === 0)
    assert(parsedInput.planetCoordinates.y0 === 0)
    assert(parsedInput.planetCoordinates.x1 === 5)
    assert(parsedInput.planetCoordinates.y1 === 5)
}

testParseInput()