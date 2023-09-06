const permutations = string => {
    let result = [string]
    for (let i = 0; i < string.length; i++) {

        for(let j=0; i < string.length; j++) {

        }


        if (i === 0) {
            result.push(string.slice(i, i + 1) + string.slice(i + 1, string.length - 1))
        } else { // i !== 0
            result.push(string.slice(0, i) + string.slice(i, i + 1) + string.slice(i + 1, string.length - 1))
        }

        // if (i !== 0) {
        //     result.push(`${string.slice(0, i)}${string.slice(1)}`)
        // }
        //
        //
        // string.slice(1)
        // result.push(`${string.slice(0, 1)}${string.slice(1)}`)
    }

    return result
}

// With input 'abcde':
// Your function should return ['abc','acb','bac','bca','cab','cba']
// Your function should return ['abcde','abced','abdce','abdec','abedc', 'abecd', 'adcbe','cba']