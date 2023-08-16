const persistentBugger = num => {
    let result = [...String(num)]

    let i = 0

    while(result.length > 1) {

        ++i
        result = [...String(result.reduce( (a,b) => a * b))]

    }

    return i
}