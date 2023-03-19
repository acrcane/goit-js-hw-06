function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const mainContainer = document.querySelector('#boxes')
const createBtn = document.querySelector('button[data-create]')
const destroyBtn = document.querySelector('button[data-destroy]')
const input = document.querySelector('input');
// console.log(destroyBtn);

createBtn.addEventListener('click', createBoxes)
destroyBtn.addEventListener('click', destroyBoxes)

function createBoxes(amount){
    let widthCounter = 0
    amount = parseInt(input.value)
    console.log(amount);
    for(let i = 0; i < amount; i++){
      const createdDivs = document.createElement('div')
      createdDivs.classList.add('new')
      createdDivs.textContent = i
      widthCounter += 10
      createdDivs.style.width = widthCounter + 'px'
      createdDivs.style.backgroundColor = getRandomHexColor()
      mainContainer.appendChild(createdDivs)
  }
}

function destroyBoxes(){
  const newDivs = document.querySelectorAll('.new')
  newDivs.forEach((elem) => elem.remove())
}