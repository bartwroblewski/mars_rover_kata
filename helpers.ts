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
                    x: 0,
                    y: 0,
                    direction: '',
                },
                nasaMessage: '',
            },
        ]
    }
}