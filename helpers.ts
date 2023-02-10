export const parseInput = (input: string) => {
    return {
        planetCoordinates: { x0: 0, y0: 0, x1: Number(input[0]), y1: Number(input[2])}
    }
}