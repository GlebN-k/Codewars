function inArray(array1,array2){
    let res = []
    // array1.forEach(el => array2.includes(el) ? res.push(el) : null)
    array1.forEach(el => {
        array2.forEach(item => item.includes(el) ? res.push(el) : null)
    })

    let x = new Set(res)


        // array2.includes(el) ? res.push(el) )
    return [...x].sort()
}

