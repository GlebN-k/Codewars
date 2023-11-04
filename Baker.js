function cakes(recipe, available) {

    let newObj = {}
    for(let name of Object.keys(recipe)) {
       newObj[name]=Math.floor(available[name] / recipe[name]) || 0
    }

    return Math.min(...Object.values(newObj))
}
