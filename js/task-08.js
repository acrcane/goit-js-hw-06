const authorizationForm = document.querySelector('.login-form')
const formAccessories = authorizationForm.querySelectorAll('input')
const subBtn = document.querySelector('button')
// console.log(authorizationForm);
// console.log(formAccessories);
// console.log(subBtn);

const formData = {}

authorizationForm.addEventListener('submit', getUserAuthorization)

function getUserAuthorization(event){
    event.preventDefault()
    const loginInput = formAccessories[0];
    const passInput = formAccessories[1];
    const login = loginInput.value
    const pass = passInput.value
    if((login && pass) !== ''){
        formData[loginInput.name] = login
        console.log(formData);
        console.log('test test');
    } else {
        alert('NO NON NO')
    }
}