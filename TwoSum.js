const twoSum = (numbers, target) => {
    for (var i = 0; i < numbers.length-1; i++) {
        for (var j = i+1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
}


// const twoSum = (numbers, target) => {
//     result=[]
//
//     numbers.forEach((el, index, arr) => {
//         for(let i= 0; i <= numbers.length-1; i++) {
//             if(index === i) break
//             if(el + numbers[i] === target) {
//                 result.push(index, numbers.indexOf(numbers[i]))
//             }
//         }
//     })
//
//     return result.slice(0,2)
// }