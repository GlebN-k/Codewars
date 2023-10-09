function highAndLow(numbers){

    const lowestNumber = Math.min(...numbers.split(' ').map(el => Number(el)))
    const highestNumber = Math.max(...numbers.split(' ').map(el => Number(el)))
    return `${highestNumber} ${lowestNumber}`
}