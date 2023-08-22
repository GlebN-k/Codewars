const sortArray = array => {
    let newArr = []
    let i = 0

    array.forEach(el => (el % 2) && newArr.push(el))
    newArr.sort((a, b) => a - b)

    return array.map(el => {
        if (el % 2) {
            ++i
            return newArr[i - 1]

        } else return el
    })
}
// function sortArray(array) {
//     const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
//     return array.map((x) => x % 2 ? odd.shift() : x);
// }

// В данной функции sortArray, код odd.shift() используется для извлечения и удаления первого элемента из массива odd.