const getDivisorsCnt = n => {
    let res = 0
    for(let i = 1; i<=n; i++) {
        if(!(n % i)) {
            ++res
        }
    }
    return res
}

// const getDivisorsCnt = n => {
//     var count = 0;
//     for (var i = 1; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             if (i * i === n) {
//                 count++;
//             } else {
//                 count += 2;
//             }
//         }
//     }
//     return count;
// }