const btn = document.querySelector('.btn');
const mainBackground = document.querySelector('.main');
const color = document.querySelector('.color');

let myColor = ["#0000FF", "#00FF00", "#ff0000", "#FFA500", "#8F00FF", "#4B0082", "#FFFF00"];

btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * myColor.length);
    mainBackground.style.background = myColor[random];
    color.textContent = myColor[random];
    console.log(random);
})