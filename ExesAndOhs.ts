export function xo(str: string): boolean {
    let x= 0
    let o = 0
    str.toLowerCase().split('').forEach(el => {
        if(el === 'x') {
            ++x
        } else if(el === 'o') {
            ++o
        }
    })
    return x === o
}

// export function xo(str: string) {
//     return str.toLowerCase().split('x').length == str.toLowerCase().split('o').length;
// }