export function linearEase(currentProgress: number, start: number, distance: number, steps:number) {
    return distance / steps * currentProgress
}