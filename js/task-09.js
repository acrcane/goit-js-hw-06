function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const fildColor = document.querySelector('.color');
const body = document.querySelector('body');

function changeBodyColor(){
  body.style.backgroundColor = getRandomHexColor()
  fildColor.textContent = getRandomHexColor()
}

changeColorBtn.addEventListener('click', changeBodyColor)