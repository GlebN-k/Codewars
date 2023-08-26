const sumTwoSmallestNumbers = arr => {
    arr.sort((a, b) => a - b)
    return arr[0] + arr[1]
}

// function sumTwoSmallestNumbers(numbers) {
//     var [ a, b ] = numbers.sort((a, b) => a - b)
//     return a + b
// }