const gameBoard = document.querySelector('main')
const startGameScreen = document.querySelector('.start-screen')
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const screenGameOver = document.querySelector('.game-over-screen');
const newGameButton = document.querySelector('.btn-new-game');
const score = document.querySelector('.score')
const finalScore = document.querySelector('.final-score')

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

const refresh = () => {
    document.location.reload(true)
}

const startGame = () => {
    startGameScreen.style.display = 'none'
    pipe.style.display = 'block'
    pipe.style.animation = 'pipe-animation 1.5s infinite linear'

    /* Loop Game */
    const loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        gameBoard.addEventListener('click', jump)
        document.addEventListener('keydown', jump);

        /* Game Over */
        if (pipePosition <= 138  && pipePosition > 0 && marioPosition < 104 && count != 1) {
                
                /* Pipe game over animation */
                pipe.style.animation = 'none'
                pipe.style.left = `${pipePosition}px`

                /* Mario game over animation */
                mario.style.bottom = `${marioPosition}px`;
                mario.src = "assets/game-over.png"
                mario.style.width = '75px'
                mario.style.marginLeft = '60px'
                mario.classList.add('mario-game-over') 
                mario.style.bottom = '-15rem';
                
                /*Game Over screen*/
                screenGameOver.style.display = 'flex'
                screenGameOver.style.animation = 'screen-game-over-animation 1.5s linear'

                score.classList.remove('score')
                score.classList.add('final-score')

                count = 1

                /* Stop Loop */
                clearInterval(loop)
        }
        else {
            addScore();
        }
    }, 10)
}


startGameScreen.addEventListener('click', startGame)
newGameButton.addEventListener('click', refresh);


