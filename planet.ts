interface Coordinate {
    x: number,
    y: number,
}

interface PlanetSize {
    bottom: Coordinate,
    top: Coordinate,
}

interface Planet {
    size: PlanetSize,
}

export const Mars: Planet = {
    size: {
        bottom: {x: 0, y: 0},
        top: {x: 5, y: 5},
    },
}