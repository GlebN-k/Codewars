function scramble(str1, str2) {
    let obj1 = {}
    let obj2 = {}
    str1.split("").forEach(el => obj1[el] ? obj1[el]++ : obj1[el] = 1)
    str2.split("").forEach(el => obj2[el] ? obj2[el]++ : obj2[el] = 1)

    for (let [key, value] of Object.entries(obj2)) {
        if (!(key in obj2)) {
            return false

        }
        if (obj1[key] > obj2[key]) {
            return false
        }
    }

    return true
}