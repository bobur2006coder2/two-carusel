const imgs = document.getElementById('imgs')
const btnLeft = document.getElementById('left')
const btnRight = document.getElementById('right')
let box=document.getElementById('sort')
const img = document.querySelectorAll('#imgs img');
const boxCards=document.querySelectorAll("#sort #card")

let idx = 0;

function myfunf() {
    if (idx > img.length - 1) {
        idx = 0;
    } else if (idx < 0) {
        idx = img.length - 1
    }
    imgs.style.transform = `translateY(${-idx * 715}px)`;
    box.style.transform = `translateY(${-idx * 715}px)`;
}


btnRight.addEventListener('click', () => {
    idx++;
    myfunf()
})

btnLeft.addEventListener('click', () => {
    idx--;
    myfunf()
})



