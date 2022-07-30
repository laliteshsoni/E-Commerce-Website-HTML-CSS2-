const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

// check if navbar is already open or not
if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

// if click on close button it remove
if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}