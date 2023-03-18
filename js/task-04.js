const decrementBtn = document.querySelector('#counter button[data-action="decrement"]')
const incrementBtn = document.querySelector('#counter button[data-action="increment"]')
const fild = document.querySelector('#value')

let counterValue = 0

function getIncrement(){
    counterValue ++
    fild.textContent = counterValue
}
function getdecrement(){
    counterValue --
    fild.textContent = counterValue
}

decrementBtn.addEventListener('click', getdecrement)
incrementBtn.addEventListener('click', getIncrement)