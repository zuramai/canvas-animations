export function sineEaseInOut(currentProgress: number, start: number, distance: number, steps: number) {
    return -distance/2 * (Math.cos(Math.PI*currentProgress/steps) - 1) + start;
}