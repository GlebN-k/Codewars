function disemvowel(str) {
    const vowelsArr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

    return str.split('').filter(el => !vowelsArr.includes(el)).join('')


}