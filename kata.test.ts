// var assert = require('assert')
var { Mars } = require('./planet')
var { Rover, RoverLocation } = require('./rover')

const assert = (cond) => {
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
  ].reduce((acc, curr) => acc + ' ' + curr)
  console.log(input)
}

testOne()