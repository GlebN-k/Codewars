function findOdd(A) {
    let obj = {}
    A.forEach(el => obj[el] ? obj[el] += 1 : obj[el] = 1)
    for (let [key, value] of Object.entries(obj)) {
        if ((value % 2)) {
            return +key
        }
    }
}