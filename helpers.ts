export const parseInput = (input: string[]) => {
    return {
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

export const assert = (cond: boolean) => {
    if(!cond) {
      throw new Error('Assertion error!')
    }
  }