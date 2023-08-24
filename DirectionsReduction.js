const dirReduc = arr => {
    const oppositeDirections = {
        'NORTH': 'SOUTH',
        'SOUTH': 'NORTH',
        'EAST': 'WEST',
        'WEST': 'EAST'
    }

    let newArr = []

    for (let direction of directions) {
        if (newArr.length > 0 && newArr[newArr.length - 1] === oppositeDirections[direction]) {
            newArr.pop()
        } else {
            newArr.push(direction)
        }
    }
    return newArr
}