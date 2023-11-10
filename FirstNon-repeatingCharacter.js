function firstNonRepeatingLetter(s) {
    let obj = {}
    let result = ''
    if(!s.trim()) {return ''}
    s.split('').map(el => el.toLowerCase()).map(el => obj[el] ? obj[el]++ : obj[el]=1)

    for(let x of Object.keys(obj)){
        if(obj[x] === 1) {
            result = x
            break
        }
    }

    if(!result) {
        return ''
    } else return s.includes(result) ? result : result.toUpperCase()
}