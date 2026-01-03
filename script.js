const hamburger = document.querySelector('.hamburger');
const bar = document.querySelector('.bar');
const xMark = document.querySelector('.x-mark');
const ul = document.querySelector('header nav ul');


hamburger.addEventListener('click' , ()=>{
    bar.classList.toggle('active');
    xMark.classList.toggle('active');
    ul.classList.toggle('active');
})


console.log(hamburger,bar,xMark,ul)
