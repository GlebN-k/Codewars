export function findMissingLetter(array: string[]): string {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    let firstLetterInArray = alphabet.indexOf(array[0])
    for(let char of array) {
       if(alphabet[firstLetterInArray] === char) {
           firstLetterInArray++
       } else return alphabet[firstLetterInArray]
    }

}