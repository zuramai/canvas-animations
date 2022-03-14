import './css/style.css'
let cardBody = document.querySelector('.card-body')
let canvases = document.querySelectorAll('canvas');

let linear = document.getElementById('linear');
let linearctx = linear.getContext('2d');

let ease = document.getElementById('ease');
let easectx = ease.getContext('2d');

// Quintic Ease
let quinticEase = document.getElementById('quintic-ease');
let quinticEasectx = quinticEase.getContext('2d');

// Quadratic Ease
let quadraticEase = document.getElementById('quadratic-ease');
let quadraticEasectx = quadraticEase.getContext('2d');

// Sine Ease In Out
let sineEase = document.getElementById('sine-ease');
let sineEasectx = sineEase.getContext('2d');

// Exponential Ease
let exponentialEase = document.getElementById('exponential-ease');
let exponentialEasectx = exponentialEase.getContext('2d');

// Set Canvas Width
canvases.forEach(canvas => canvas.width = cardBody.offsetWidth)
let canvasWidth = linear.width;
let canvasHeight = linear.height;


// Set Image
let image = new Image;
image.src = "images/king.png";
image.width = image.width/5;
image.height = image.height/5;
let imagePadding = 10;


function getEase(currentProgress, start, distance, steps, power) {
    currentProgress /= steps/2; // currentProgress = 0.1; distance = 100; steps = 100
    if (currentProgress < 1) { 
      return (distance/2)*(Math.pow(currentProgress, power)) + start;
    } 
    currentProgress -= 2;
    return distance/2*(Math.pow(currentProgress,power)+2) + start;
}

function getQuadraticEase(currentProgress, start, distance, steps) {
    currentProgress /= steps/2;
    if (currentProgress <= 1) {
      return (distance/2)*currentProgress*currentProgress + start;
    }
    currentProgress--;
    return -1*(distance/2) * (currentProgress*(currentProgress-2) - 1) + start;
}

function getQuinticEase(currentProgress, start, distance, steps) {
  currentProgress /= steps/2;
  if (currentProgress < 1) {
    return (distance/2)*(Math.pow(currentProgress, 5)) + start;
  }
  currentProgress -= 2;
  return distance/2*(Math.pow(currentProgress, 5) + 2) + start;
}


function expEaseInOut(currentProgress, start, distance, steps) {
    currentProgress /= steps/2;
    if (currentProgress < 1) return distance/2 * Math.pow( 2, 10 * (currentProgress - 1) ) + start;
   currentProgress--;
    return distance/2 * ( -Math.pow( 2, -10 * currentProgress) + 2 ) + start;
  };
  
  
function sineEaseInOut(currentProgress, start, distance, steps) {
    return -distance/2 * (Math.cos(Math.PI*currentProgress/steps) - 1) + start;
}
  
function getX(params) {
    let distance = params.xTo - params.xFrom;
    let steps = params.frames;
    let progress = params.frame;

    if(params.mode == 'linear')  return distance / steps * progress;
    else if(params.mode == 'ease') return getEase(progress, params.yFrom, distance, steps, 3);
    else if(params.mode == 'quadratic-ease') return getQuadraticEase(progress, params.yFrom, distance, steps, 3);
    else if(params.mode == 'quintic-ease') return getQuinticEase(progress, params.yFrom, distance, steps, 3);
    else if(params.mode == 'sine-ease') return sineEaseInOut(progress, params.yFrom, distance, steps, 3);
    else if(params.mode == 'exponential-ease') return expEaseInOut(progress, params.yFrom, distance, steps, 3);
}
function getY(params) {
    let distance = params.yTo - params.yFrom;
    let steps = params.frames;
    let progress = params.frame;

    if(params.mode == 'linear')  return distance / steps * progress;
    else if(params.mode == 'ease') return getEase(progress, params.yFrom, distance, steps, 3);
    else if(params.mode == 'quadratic-ease') return getQuadraticEase(progress, params.yFrom, distance, steps, 3);
    else if(params.mode == 'quintic-ease') return getQuinticEase(progress, params.yFrom, distance, steps, 3);
    else if(params.mode == 'sine-ease') return sineEaseInOut(progress, params.yFrom, distance, steps, 3);
    else if(params.mode == 'exponential-ease') return expEaseInOut(progress, params.yFrom, distance, steps, 3);
}


function drawImage(params) {
    params.ctx.clearRect(0,0,canvasWidth,canvasHeight);
    drawBackground(params.ctx)
    params.ctx.drawImage(image, getX(params), getY(params), image.width, image.height);


    if(params.frame < params.frames) {
        params.frame = params.frame + 1;
        requestAnimationFrame(() => drawImage(params))
    }
}


function drawBackground(ctx) {
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight)
}


function draw(ctx, mode) {
    drawBackground(ctx)
    // Draw the image
    drawImage({
        mode,
        ctx,
        frame: 0,
        frames: 100,
        xFrom: imagePadding,
        xTo: canvasWidth - image.width - imagePadding,
        yFrom: imagePadding,
        yTo: canvasHeight - image.height - imagePadding,
    })
}

function render() {
    this.draw(linearctx, 'linear');
    this.draw(easectx, 'ease');
    this.draw(quadraticEasectx, 'quadratic-ease');
    this.draw(exponentialEasectx, 'exponential-ease');
    this.draw(quinticEasectx, 'quintic-ease');
    this.draw(sineEasectx, 'sine-ease');
}
render();