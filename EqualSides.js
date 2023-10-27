function findEvenIndex(arr) {
    let arrWithSumSides = arr.map((el, index) => ({
        'left': arr.filter((num, i) => i < index).reduce((a, b) => a + b, 0),
        'right': arr.filter((num, i) => i > index).reduce((a, b) => a + b, 0)
    }))
    return arrWithSumSides.findIndex(el => el.left === el.right)


}


// [1,2,3,4,3,2,1]),3