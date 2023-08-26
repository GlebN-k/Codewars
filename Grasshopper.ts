export function getGrade(a: number, b: number, c: number): string {
    // your code here
    let score: number = (a + b + c) / 3
    switch (true) {
        case (score >= 90): {
            return 'A'
        }
        case (score >= 80): {
            return 'B'
        }
        case (score >= 70): {
            return 'C'
        }
        case (score >= 60): {
            return 'D'
        }
        default:
            return 'F'
    }
}