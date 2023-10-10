function correct(string) {
   return [...string].map(el => el === "5" ? "S" : el === "0" ? "O" : el === "1" ? "I" : el ).join('')
}