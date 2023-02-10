var { rotate, move } = require('./helpers')

export const sendMessage = (rover: any, message: any) => {
    const { x, y } = rover.location
    if (message === 'L' || message === 'R') {
        return {
            ...rover,
            location: {
                x: rover.location.x,
                y: rover.location.y,
                direction: rotate(rover.direction, message),
            }
        }
    }
    const newLocation = move({x, y}, message)
    return {
        ...rover,
        location: {
            ...newLocation,
            direction: rover.location.direction,
        }
    }
}