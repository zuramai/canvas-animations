// x (currentProgress) = 0 - 100
// start = start point position
// distance = distance from start in point
// steps = number of frames (which is 100)
export function easeOutBounce(x: number, start: number, distance: number, steps:number): number {
    const n1 = 7.5625;
    const d1 = 2.75;
    x = x / steps
    let val;
     
    if (x < 1 / d1) {
        val = n1 * x * x;
    } else if (x < 2 / d1) {
        val = n1 * (x -= 1.5 / d1) * x + 0.75;
    } else if (x < 2.5 / d1) {
        val = n1 * (x -= 2.25 / d1) * x + 0.9375;
    } else {
        val = n1 * (x -= 2.625 / d1) * x + 0.984375;
    }

    return val * distance + start 
    
}