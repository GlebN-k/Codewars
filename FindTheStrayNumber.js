const stray = num => {
    let result = num.sort((a, b) => b - a)
    return result[0] === result[1] ? result[result.length-1] : result[0]
}