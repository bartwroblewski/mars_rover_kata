var { rotate, move } = require('./helpers')

export const sendMessage = (rover: any, message: 'L' | 'R' | 'M') => {
    const { x, y } = rover.location
    if (message === 'L' || message === 'R') {
        return {
            ...rover,
            location: {
                x: rover.location.x,
                y: rover.location.y,
                direction: rotate(rover.location.direction, message),
            }
        }
    }
    const newLocation = move({x, y}, rover.location.direction)
    return {
        ...rover,
        location: {
            ...newLocation,
            direction: rover.location.direction,
        }
    }
}