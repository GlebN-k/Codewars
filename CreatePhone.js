function createPhoneNumber(numbers){
    return numbers.map((el, index) => index === 0 ? `(${el}` : index === 2 ? `${el}) ` : index === 5 ? `${el}-` : el).join('')
}