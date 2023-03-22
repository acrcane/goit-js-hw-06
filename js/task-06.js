const input = document.querySelector('#validation-input');
const dataLength = input.getAttribute('data-length')
console.log(parseInt(dataLength));

function checkValid(){
    const inputValue = input.value;
    if(inputValue.length !== parseInt(dataLength)){
        input.classList.add('invalid')
    }else{
        input.classList.remove('invalid')
        input.classList.add('valid')
    }
}

input.addEventListener('blur', checkValid)