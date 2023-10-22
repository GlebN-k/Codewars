const towerBuilder = nFloors => {
    let res = []

    for (let i = 1; i <= nFloors; i++) {
        res.push(nFloors)
    }
    for (let i = 1; i <= nFloors; i++) {
        res.fill('*')
    }

    let stringArr = res.map((el, index) => el.repeat((index + 1) * 2 - 1))

    return stringArr.map((el, index, arr) => el.length < arr[arr.length - 1].length
        ? " ".repeat(arr[arr.length - 1].length / 2 - index) + el + " ".repeat(arr[arr.length - 1].length / 2 - index)
        : el)

}


// function towerBuilder(nFloors) {
//     var tower = [];
//     for (var i = 0; i < nFloors; i++) {
//         tower.push(" ".repeat(nFloors - i - 1)
//             + "*".repeat((i * 2)+ 1)
//             + " ".repeat(nFloors - i - 1));
//     }
//     return tower;
// }