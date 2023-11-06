function scramble(str1, str2) {
    let obj1 = {}
    let obj2 = {}
    str1.split("").forEach(el => obj1[el] ? obj1[el]++ : obj1[el] = 1)
    str2.split("").forEach(el => obj2[el] ? obj2[el]++ : obj2[el] = 1)

    for (let key of Object.keys(obj2)) {
        if (!(key in obj1)) {
            return false

        }
        if (obj2[key] > obj1[key]) {
            return false
        }
    }

    return true
}