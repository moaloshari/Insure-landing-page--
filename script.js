let hamburger = document.querySelector('.hamburger');
let bar = document.querySelector('.bar');
let xMark = document.querySelector('.x-mark');
let ul = document.querySelector('header nav ul');


hamburger.addEventListener('click' , ()=>{
    bar.classList.toggle('active');
    xMark.classList.toggle('active');
    ul.classList.toggle('active');
})

console.log(hamburger,bar,xMark,ul)