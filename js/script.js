const gameBoard = document.querySelector('main')
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const screenGameOver = document.querySelector('.game-over-screen');
const newGameButton = document.querySelector('.btn-new-game');
const score = document.querySelector('.score')
const finalScore = document.querySelector('.final-score')

/* Refresh page */
const refresh = () => {
    document.location.reload(true);
}

let count = 0;
const addScore = () => {
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
            mario.classList.add('mario-game-over') 
            mario.style.bottom = '-15rem';
            
            /*Game Over screen*/
            screenGameOver.style.display = 'flex'
            screenGameOver.style.animation = 'screen-game-over-animation 1.5s linear'

            score.classList.remove('score')
            score.classList.add('final-score')
            

            /* Stop Loop */
            clearInterval(loop)
    }
    else {
        addScore();
    }
}, 10)

newGameButton.addEventListener('click', refresh);
gameBoard.addEventListener('click', jump)
document.addEventListener('keydown', jump);

