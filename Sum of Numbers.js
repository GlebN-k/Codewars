function getSum(a, b) {
    let result = 0

    if (a === b) {
        return a
    }
    if (a > b) {
        for (let i = b; i <= a; i++) {
            result += i
        }
    } else {

        for (let i = a; i <= b; i++) {
            result += i
        }
    }
    return result
}