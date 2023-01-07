const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const screenGameOver = document.querySelector('.game-over-screen');
const newGameButton = document.querySelector('.new-game');
const body = document.querySelector('body')

function refresh() {
    document.location.reload(true);
}

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 700)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 138  && pipePosition > 0 && marioPosition < 104) {
            pipe.style.animation = 'none'
            pipe.style.left = `${pipePosition}px`

            mario.style.bottom = `${marioPosition}px`;
            mario.src = "images/game-over.png"
            mario.style.width = '75px'
            mario.style.marginLeft = '60px'
            mario.classList.add('marioGameOver') 
            mario.style.bottom = '-15rem';
            
            /*Game Over screen*/
            screenGameOver.style.display = 'flex'
            screenGameOver.style.animation = 'screenGameOverAnimation 1.5s linear'

            clearInterval(loop)
    }
}, 10)

newGameButton.addEventListener('click', refresh);
body.addEventListener('click', jump)
document.addEventListener('keydown', jump);

