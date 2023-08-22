const isPangram = string => {
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

    const str = string.toLowerCase()
let result = true
    alphabet.forEach(el => {
       debugger
        if(!str.includes(el)) {
            result = false
        }
    })

    return result
}

// function isPangram(string){
//     string = string.toLowerCase();
//     return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
//         return string.indexOf(x) !== -1;
//     });
// }
