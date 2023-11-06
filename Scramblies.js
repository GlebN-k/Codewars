function scramble(str1, str2) {
    let obj1 = str1.split('').reduce((a,b) => {a[b] ? a[b]++ : a[b]=1; return a}, {})
    let obj2 = str2.split('').reduce((a,b) => {a[b] ? a[b]++ : a[b]=1; return a}, {})

    for (let key of Object.keys(obj2)) {
        if (!(key in obj1)) {
            return false

        }
        if (obj2[key] > obj1[key]) {
            return false
        }
    }

    return true
}


// function scramble(str1, str2) {
//     let occurences = str1.split("").reduce((arr, cur) => { arr[cur] ? arr[cur]++ : arr[cur] = 1; return arr; }, {});
//     return str2.split("").every((character) => --occurences[character] >= 0);
// }