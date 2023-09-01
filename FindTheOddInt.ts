export const findOdd = (xs: number[]): number => {
    let result = []
    let x: number = 0
    xs.forEach((el, index, array) => {
        result = []
        for (let i = 0; i < xs.length; i++) {
            if (el === array[i]) {
                result.push(el)
            }
        }
        if (result.length % 2) {
            x = result[0]
        }
    })
    return x;
};
