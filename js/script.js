const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 700)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 139  && pipePosition > 0 && marioPosition < 104) {
            pipe.style.animation = 'none'
            pipe.style.left = `${pipePosition}px`

            mario.style.bottom = `${marioPosition}px`;
            mario.src = "images/game-over.png"
            mario.style.width = '75px'
            mario.style.marginLeft = '60px'
            mario.classList.add('gameOver')
            mario.style.bottom = '-150px';
            
            clearInterval(loop)
    }
}, 10)

document.addEventListener('keydown', jump);
