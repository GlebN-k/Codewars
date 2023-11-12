function createPhoneNumber(numbers){
    return numbers.map((el, index) => index === 0 ? `(${el}` : index === 2 ? `${el}) ` : index === 5 ? `${el}-` : el).join('')
}

// function createPhoneNumber(numbers){
//     var format = "(xxx) xxx-xxxx";
//
//     for(var i = 0; i < numbers.length; i++)
//     {
//         format = format.replace('x', numbers[i]);
//     }
//
//     return format;
// }