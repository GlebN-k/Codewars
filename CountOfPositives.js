// Given an array of integers.
//
//     Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
//
//     If the input is an empty array or is null, return an empty array.

const countPositivesSumNegatives = input => {
    if (!input?.length || input === null) return []

    let positive = 0
    let negative = 0

    input.forEach(el => el > 0 ? ++positive : negative+=el)

       return [positive, negative]

}