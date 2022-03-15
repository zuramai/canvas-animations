export interface Easing {
    (currentProgress: number, start: number, distance: number, steps: number, power: number): number
}

export type EasingTypes = "linear" | "ease" | "quadratic-ease" | "exponential-ease" | "quintic-ease" | "sine-ease"

export interface ProgressParam {
    type: EasingTypes
    frame: number
    frames: number
    xFrom: number
    xTo: number
    yFrom: number
    yTo: number
}