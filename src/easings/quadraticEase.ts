export function quadraticEase(currentProgress: number, start: number, distance: number, steps: number) {
    currentProgress /= steps/2;
    if (currentProgress <= 1) {
      return (distance/2)*currentProgress*currentProgress + start;
    }
    currentProgress--;
    return -1*(distance/2) * (currentProgress*(currentProgress-2) - 1) + start;
}