const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const screenGameOver = document.querySelector('.game-over-screen');
const newGameButton = document.querySelector('.new-game');
const body = document.querySelector('body')
const score = document.querySelector('.score')
const finalScore = document.querySelector('.points')

/* Refresh page */
function refresh() {
    document.location.reload(true);
}

let count = 0;
function points() {
    count += 1;
    score.innerHTML = `Score = ${count}`
    finalScore.innerHTML = `Score = ${count}`
    console.log('Funfou')
}

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 700)
}

/* Loop Game */
const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


    /* Game Over */
    if (pipePosition <= 138  && pipePosition > 0 && marioPosition < 104) {
            
            /* Pipe game over animation */
            pipe.style.animation = 'none'
            pipe.style.left = `${pipePosition}px`

            /* Mario game over animation */
            mario.style.bottom = `${marioPosition}px`;
            mario.src = "images/game-over.png"
            mario.style.width = '75px'
            mario.style.marginLeft = '60px'
            mario.classList.add('marioGameOver') 
            mario.style.bottom = '-15rem';
            
            /*Game Over screen*/
            screenGameOver.style.display = 'flex'
            screenGameOver.style.animation = 'screenGameOverAnimation 1.5s linear'

            /* Stop Loop */
            clearInterval(loop)
    }
    else {
        points();
    }
}, 10)

newGameButton.addEventListener('click', refresh);
body.addEventListener('click', jump)
document.addEventListener('keydown', jump);

