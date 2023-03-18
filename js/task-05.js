const inputValue = document.querySelector('#name-input')
const output = document.querySelector('#name-output');

inputValue.addEventListener('input', getValue)

function getValue(){
    output.textContent = inputValue.value
    if(output.textContent === ''){
        output.textContent = 'Anonymous'
    }
}