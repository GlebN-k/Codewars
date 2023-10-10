function correct(string) {
   return [...string].map(el => el === "5" ? "S" : el === "0" ? "O" : el === "1" ? "I" : el ).join('')
}

// function correct(string) {
//     return [...string].map(a => ({'0':'O','5':'S','1':'I'})[a]||a).join('')
// }