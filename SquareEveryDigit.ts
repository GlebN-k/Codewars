export class Kata {
    static squareDigits(num: number): number {
        return +num.toString().split('').map(el => Number(el)**2).join('')
    }
}