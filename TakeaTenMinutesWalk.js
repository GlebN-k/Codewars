const isValidWalk = (walk) => {
    let x = 0
    let y = 0
    walk.forEach((el) => {
        switch(el) {
            case 'n':
                ++y
                break
            case 's':
                --y
                break
            case 'w':
                ++x
                break
            case 'e':
                --x
                break
        }
    })

    return x === 0 && y === 0 && walk.length === 10
}