const descendingOrder = n => {
    return +[...String(n)].map(Number).sort((b,a) => a - b).join('')
}



