export function expEaseInOut(currentProgress: number, start: number, distance: number, steps: number) {
    currentProgress /= steps/2;
    if (currentProgress < 1) return distance/2 * Math.pow( 2, 10 * (currentProgress - 1) ) + start;
    currentProgress--;
    return distance/2 * ( -Math.pow( 2, -10 * currentProgress) + 2 ) + start;
};
  