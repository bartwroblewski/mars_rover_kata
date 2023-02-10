export const parseInput = (input: string) => {
    // const rovers
    return {
        planetCoordinates: { x0: 0, y0: 0, x1: Number(input[0][0]), y1: Number(input[0][2])},
        rovers: [
            {
                location: {
                    x: Number(input[1][0]),
                    y: Number(input[1][2]),
                    direction: input[1][4],
                },
                nasaMessage: input[2],
            },
            {
                location: {
                    x: Number(input[3][0]),
                    y: Number(input[3][2]),
                    direction: input[3][4],
                },
                nasaMessage: input[4],
            },
        ]
    }
}

type Direction = 'N' | 'S' | 'E' | 'W'
type Rotation = 'L' | 'R'

export const rotate = (initDirection: Direction, rotation: Rotation): Direction => {
    const mapping: Record<Direction, Record<Rotation, Direction>> = {
        N: {L: 'W', R: 'E'},
        S: {L: 'E', R: 'W'},
        E: {L: 'N', R: 'S'},
        W: {L: 'S', R: 'N'},
    }
    return mapping[initDirection][rotation]
}