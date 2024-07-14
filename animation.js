const ball = document.getElementById('ball');

const path = [
    { x: 0, y: 0 },     
    { x: 0, y: 100 },
    { x: 100, y: 100 },
    { x: 100, y: 0 },
    { x: 200, y: 0 },
    { x: 200, y: 200 },
    { x: 100, y: 200 },
    { x: 100, y: 300 }, 
];

let currentStep = 0;
let animationInterval;
let isPaused = false;

function moveBall() {
    if (currentStep < path.length && !isPaused) {
        const { x, y } = path[currentStep];
        ball.style.transform = `translate(${x}px, ${y}px)`;
        currentStep++;
    }
}

function start() {
    if (!animationInterval) {
        animationInterval = setInterval(moveBall, 1000); 
    }
}

function stop() {
    clearInterval(animationInterval);
    animationInterval = null;
    isPaused = true;
}

function resume() {
    if (isPaused) {
        isPaused = false;
        start();
    }
}

function restart() {
    clearInterval(animationInterval);
    animationInterval = null;
    currentStep = 0;
    ball.style.transform = `translate(0, 0)`; 
    isPaused = false;
    start();
}


document.getElementById('startBtn').addEventListener('click', start);
document.getElementById('stopBtn').addEventListener('click', stop);
document.getElementById('resumeBtn').addEventListener('click', resume);
document.getElementById('restartBtn').addEventListener('click', restart);
