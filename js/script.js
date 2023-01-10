const gameBoard = document.querySelector('main')
const startGameScreen = document.querySelector('.start-screen')
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const screenGameOver = document.querySelector('.game-over-screen')
const newGameButton = document.querySelector('.btn-new-game');
const score = document.querySelector('.score')
const record = document.querySelector('.record')
const finalScore = document.querySelector('.final-score')
const finalRecord = document.querySelector('.final-record')

let scoreCount = 0
let recordCount = 0
const addScore = () => {
    score.innerHTML = `Score = ${scoreCount}`
    finalScore.innerHTML = `Score = ${scoreCount}`

    if (scoreCount >= recordCount) {
        recordCount = scoreCount
    }
    
    record.innerHTML = `Record = ${recordCount}`

    scoreCount += 1;
}

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 700)
}

const animatePipe = () => {
    const mediaQuery768 = window.matchMedia('(max-width: 768px)')
    const mediaQuery992 = window.matchMedia('(min-width: 992px)')
    if (mediaQuery768.matches) {
        pipe.style.animation = 'pipe-animation 1.1s infinite linear'
    }
    else if (mediaQuery992.matches) {
        pipe.style.animation = 'pipe-animation 2s infinite linear'
    }
    else{
        pipe.style.animation = 'pipe-animation 1.5s infinite linear'
    }
}

const resetGameBoard = () => {
    score.innerHTML = `Score = 0`
    record.innerHTML = `Score = ${scoreCount}`
    screenGameOver.style.display = 'none'

    mario.style.bottom = '0px';
    mario.src = "assets/mario.gif"
    mario.style.width = '10rem'
    mario.classList.remove('mario-game-over')
}

const newGame = () => {
    resetGameBoard()
    startGame()
}

const startGame = () => {
    startGameScreen.style.display = 'none'
    pipe.style.display = 'block'

    animatePipe()

    /* Loop Game */
    const loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        gameBoard.addEventListener('click', jump)
        document.addEventListener('keydown', jump);

        /* Game Over */
        if (pipePosition <= 138  && pipePosition > 0 && marioPosition < 104)
        {
                /* Pipe game over animation */
                // pipe.style.animation = 'none'
                // pipe.style.left = `${pipePosition}px`
                pipe.style.display = 'none'

                /* Mario game over animation */
                mario.style.bottom = `${marioPosition}px`;
                mario.src = "assets/game-over.png"
                mario.style.width = '75px'
                mario.style.marginLeft = '60px'
                mario.classList.add('mario-game-over') 
                
                
                /*Game Over screen*/
                screenGameOver.style.display = 'flex'
                screenGameOver.style.animation = 'screen-game-over-animation 1.5s linear'

                scoreCount = 0

                finalRecord.innerHTML = `Record = ${recordCount}`

                /* Stop Loop */
                clearInterval(loop)
        }
        else {
            addScore();
        }
    }, 10)
}

/* Events */
startGameScreen.addEventListener('click', startGame)
newGameButton.addEventListener('click', newGame);


