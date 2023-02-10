export interface Coordinate {
    x: number,
    y: number,
}

interface PlanetCoordinates {
    bottom: Coordinate,
    top: Coordinate,
}

interface Planet {
    coordinates: PlanetCoordinates,
}

export const Mars: Planet = {
    coordinates: {
        bottom: {x: 0, y: 0},
        top: {x: 5, y: 5},
    },
}

export const x = 'grgr'