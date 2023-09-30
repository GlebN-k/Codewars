export function strCount(str: string, letter: string): number {
    return [...str].filter(el => el === letter).length
}