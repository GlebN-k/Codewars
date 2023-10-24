function incrementString(strng) {
    let number = []
    let x = [...strng].reverse()

    for (let i = 0; i <= x.length-1; i++) {
        if(!isNaN(+x[i])) {
            number.unshift(+x[i])
        } else break
    }

    let finalNumber = +number.join('') + 1

    return number
}