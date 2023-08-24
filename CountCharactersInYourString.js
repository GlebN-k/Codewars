const count = string => {
    let objResult = {}
    let stringArr = string.split('')
    for(let char of string) {
        objResult = {...objResult, [char]: stringArr.filter(el => el === char).length}
    }

    return objResult
}

// function count (string) {
//     var count = {};
//     string.split('').forEach(function(s) {
//         count[s] ? count[s]++ : count[s] = 1;
//     });
//     return count;
// }