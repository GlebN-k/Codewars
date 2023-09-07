export function firstNonConsecutive (arr: number[]) : null | number {
    let i = arr[0]

    for(let char of arr) {
        if(i === char) {
            ++i
        } else {
            return char
        }
    }

    return null
}