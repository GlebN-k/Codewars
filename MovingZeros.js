function moveZeros(arr) {
    let copyArr = []
    let zeroQuantity = 0

    arr.forEach(el => el === 0 ? zeroQuantity++ : copyArr.push(el))
    while(zeroQuantity > 0) {
        copyArr.push(0)
        zeroQuantity--
    }
    return copyArr
}

// let moveZeros = function (arr) {
//     return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
// }