function oneTwoThree(n) {
    // justDoIt!!
    let secondNumber = Array(n).fill(1).join('') || '0'

    let firstNumber = []

        while(n > 9) {
            firstNumber.push('9')
            n-=9
        }
    firstNumber.push(n)

    return [firstNumber.join(''), secondNumber];
}