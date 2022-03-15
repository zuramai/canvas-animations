export function quinticEase(currentProgress: number, start: number, distance: number, steps: number) {
    currentProgress /= steps/2;
    if (currentProgress < 1) {
      return (distance/2)*(Math.pow(currentProgress, 5)) + start;
    }
    currentProgress -= 2;
    return distance/2*(Math.pow(currentProgress, 5) + 2) + start;
}