const sumStrings = (a, b) => {
    let carry = 0;
    let result = '';
    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0 || carry) {
        const digitA = i >= 0 ? parseInt(a[i]) : 0;
        const digitB = j >= 0 ? parseInt(b[j]) : 0;

        const sum = digitA + digitB + carry;
        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;

        i--;
        j--;
    }

    // Удаление ведущих нулей, если они есть
    result = result.replace(/^0+/, '');

    return result;
};

console.log(sumStrings('00103', '08567')); // Output: '08670'


//
// const sumStrings = (a,b) => {
//     // let x = +a
//     // let y = +b
//     let AfirstHalf
//     let AsecondHalf
//     let BfirstHalf
//     let BseconHalf
//
//     if(a.length < 8 && b.length < 8) {
//         return String(+a + +b)
//     }
//     if(a.length > 16) {
//         AfirstHalf = a.substring(a.length-15)
//         AsecondHalf = a.replace(AfirstHalf, '')
//     }
//     if(b.length > 16) {
//         BfirstHalf = b.substring(b.length-15)
//         BseconHalf = b.replace(BfirstHalf, '')
//     }
//     let resultFirst = +AfirstHalf + +BfirstHalf
//     let resultSecond = +AsecondHalf + +BseconHalf
//     let newResultFirst = String(resultFirst)
//     let newSecondResult = String(resultSecond)
//
//     if(String(resultFirst).length > 15) {
//         newResultFirst = resultFirst.toString().substring(newResultFirst.length-15)
//         newSecondResult = resultSecond + +resultFirst.toString().slice(0,1)
//         console.log('www', newResultFirst)
//     }
//     //
//     // if(newSecondResult[newSecondResult.length-1] === '0') {
//     //     // console.log('yeess')
//     //     newSecondResult = newSecondResult.slice(0, newSecondResult.length-1)
//     // }
//     console.log(AfirstHalf)
//     console.log(BfirstHalf)
//     console.log(AsecondHalf)
//     console.log(BseconHalf)
//     console.log(resultFirst)
//     console.log(resultSecond)
//     return `${newSecondResult}${newResultFirst}`
// }
//
