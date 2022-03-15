export function getEase(currentProgress: number, start: number, distance: number, steps: number, power: number) {
    currentProgress /= steps/2; // currentProgress = 0.1; distance = 100; steps = 100
    if (currentProgress < 1) { 
      return (distance/2)*(Math.pow(currentProgress, power)) + start;
    } 
    currentProgress -= 2;
    return distance/2*(Math.pow(currentProgress,power)+2) + start;
}

