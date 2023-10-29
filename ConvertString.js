function toCamelCase(str) {
    return [...str]
        .map((el, index, array) => array[index - 1] === '-' || array[index - 1] === '_' ? el.toUpperCase() : el)
        .filter(el => el !== "-" && el !== "_")
        .join('')
}

