function findOutlier(integers){
    let res = null
    let arr = []
      integers.forEach(el => el % 2 ? arr.push(el) : res = el)
    return arr.length === 1 ? arr.length : res
}