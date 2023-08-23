const towerBuilder = nFloors => {
    let x = Array(nFloors).fill(2*4)
    console.log(x)

    // let result = x.map((el, index, arr) => {
    //
    // } )
    let res
    for(let i= x.length-1; i >= 0; i-- ) {
        x.map(el => el.repeat(i))
    }
}