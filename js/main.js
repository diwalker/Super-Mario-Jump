const  mario = document.querySelector('.mario');
const  pipe = document.querySelector('.pipe');
const koopa = document.querySelector('.koopa');
const banner = document.querySelector('.banner');

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    },500);
    pulo.play();
}

const loop1 = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '80px';

        banner.style.display = 'flex';

        clearInterval(loop1);
        song.pause();
        miss.play();
       
    }
} , 10);

 const loop2 = setInterval(() => {

    const koopaPosition =  koopa.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        
    if(koopaPosition <= 120 && koopaPosition > 0 && marioPosition < 50) {
        
        koopa.style.animation = 'none';
        koopa.style.left = `${koopaPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '20px';

        banner.style.display = 'flex';

        clearInterval(loop2);
        song.pause();
        miss.play();
    }

} ,10)

document.addEventListener('keydown', jump);

const song = new Audio('songs/bgm.mp3');
song.play();

const miss = new Audio('songs/miss.mp3');

const pulo = new Audio('songs/pulo.mp3');

document.addEventListener('keydown', function(e) {
    if(e.key === 'Enter'){
        document.location.reload(true);
    }
});
