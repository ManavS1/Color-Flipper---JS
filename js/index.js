const btn = document.querySelector('.btn');
const mainBackground = document.querySelector('.main');
const color = document.querySelector('.color');

let myColor = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * myColor.length);
    mainBackground.style.background = myColor[random];
    color.textContent = myColor[random];
    console.log(random);
})