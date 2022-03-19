import './css/style.css'
import * as easing from './easings';
import { Easing, EasingTypes, ProgressParam } from './types';
let cardBody = <HTMLDivElement>document.querySelector('.card-body')
let canvases = document.querySelectorAll('canvas');

// Play button
document.querySelectorAll('.btn-play').forEach(btn => btn.addEventListener('click', () => render()))

let contexts: {[key in EasingTypes]: CanvasRenderingContext2D|null} = {
    "linear": null,
    "ease": null,
    "quadratic-ease": null,
    "exponential-ease": null,
    "quintic-ease": null,
    "sine-ease": null,
    "ease-out-bounce": null,
}

// Generate contexts
for(const [key, _] of Object.entries(contexts)) {
    let el = <HTMLCanvasElement>document.getElementById(key)
    contexts[key as EasingTypes] = el.getContext('2d')
}

// Set Canvas Width
canvases.forEach(canvas => canvas.width = cardBody.offsetWidth)
let canvasWidth = canvases[0].width;
let canvasHeight = canvases[0].height;

// Set Image
let image = new Image;
image.src = "images/king.png";
image.width = image.width/5;
image.height = image.height/5;
let imagePadding = 10;

let easings: {[key: string]: Easing} = {
    "linear": easing.linearEase,
    "ease": easing.expEaseInOut,
    "quadratic-ease": easing.quadraticEase,
    "exponential-ease": easing.expEaseInOut,
    "quintic-ease": easing.quinticEase,
    "sine-ease": easing.sineEaseInOut,
    "ease-out-bounce": easing.easeOutBounce
}

function getProgress(type: "x"|"y", params: ProgressParam) {
    let from = type == "x" ? params.xFrom : params.yFrom
    let to = type == "x" ? params.xTo : params.yTo

    let distance = to - from;
    let steps = params.frames;
    let progress = params.frame;

    return easings[params.type](progress, from, distance, steps, 3)
}

function drawImage(ctx: CanvasRenderingContext2D, params: ProgressParam) {
    ctx.clearRect(0,0,canvasWidth,canvasHeight);
    drawBackground(ctx)
    ctx.drawImage(image, getProgress("x", params), getProgress("y", params), image.width, image.height);

    if(params.frame < params.frames) {
        params.frame = params.frame + 1;
        requestAnimationFrame(() => drawImage(ctx, params))
    }
}

function drawBackground(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight)
}

function draw(ctx: CanvasRenderingContext2D, type: EasingTypes) {
    drawBackground(ctx)
    drawImage(ctx, {
        type,
        frame: 0,
        frames: 100,
        xFrom: imagePadding,
        xTo: canvasWidth - image.width - imagePadding,
        yFrom: imagePadding,
        yTo: canvasHeight - image.height - imagePadding,
    })
}   

function render() {
    for(const [key, value] of Object.entries(contexts)) {
        draw(value as CanvasRenderingContext2D, key as EasingTypes)
    }
}
render();