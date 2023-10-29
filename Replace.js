function alphabetPosition(text) {
    // Store the letters as an array in a constant
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const result = []
    const newArr = [...text.toLowerCase()]
    newArr.forEach(el => {
        if(alphabet.indexOf(el) > -1) {
            result.push(alphabet.indexOf(el) + 1)
        }
    })
    return result.join(' ')

}