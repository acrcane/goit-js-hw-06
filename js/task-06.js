const input = document.querySelector('#validation-input');
const dataLength = input.getAttribute('data-length')
// input.value.lenght
console.log(parseInt(dataLength));

function checkValid(){
    const inputValue = input.value;
    if(inputValue.length !== parseInt(dataLength)){
        input.classList.add('invalid')
        // input.classList.toggle('invalid')
    }else{
        input.classList.remove('invalid')
        input.classList.add('valid')
        // input.classList.toggle('valid')
    }
}

input.addEventListener('blur', checkValid)