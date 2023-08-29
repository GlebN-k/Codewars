const duplicateEncode = word => {
    let copyWord = word.toLowerCase()
    let result = []
    let obj = {}
    for (const char of copyWord) {
        obj[char] = (obj[char] || 0) + 1

    }

    copyWord.split('').forEach(el => obj[el] > 1 ? result.push(')') : result.push('('))
    return result.join('')

}

