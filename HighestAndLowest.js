function highAndLow(numbers){
    const arrayOfNumbers = numbers.split(' ')
    return `${Math.max(...arrayOfNumbers)} ${Math.min(...arrayOfNumbers)}`
}