function findUniq(arr) {

    let obj = {}
    arr.forEach(el => obj[el] ? obj[el]+= 1 : obj[el]=1 )

    for(let [key,value] of Object.entries(obj)) {
        if(value === 1) {
            return key
        }
    }
}
