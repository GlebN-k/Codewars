const high = str => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let strArr = str.split(' ').map(el => ({
        "name": el,
        "points": el.split('').map(l => alphabet.indexOf(l) + 1).reduce((a, b) => a + b)
    })).sort((a, b) => b.points - a.points)

    return strArr[0].name
}



