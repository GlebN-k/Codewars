const countSmileys = (arr) => {
    let result = 0
    const validSmilesArr = [':D',':~)',';~D',':)', ';-D', ':-D', ':-)', ';)', ':~D', ';~)', ';D', ';-)']

    arr.forEach(el => {
        if(validSmilesArr.find((s) => s === el )) {++result}
    })

    return result
}