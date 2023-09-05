export function solution(nums: number[]): number[] {
    return nums.length ? nums.sort((a,b) => a-b) : [];
}