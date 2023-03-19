const authorizationForm = document.querySelector('.login-form')
const formAccessories = authorizationForm.querySelectorAll('input')
const subBtn = document.querySelector('button')

const formData = {}

authorizationForm.addEventListener('submit', getUserAuthorization)

function getUserAuthorization(event){
    event.preventDefault()
    const formElements = authorizationForm.elements
    for(let i = 0; i < formElements.length-1; i++){
        const elem = formElements[i]
        if(elem.value !== ''){
            formData[elem.name] = elem.value
            console.log(formData);
        } else {
            alert('Не всі поля заповнені.')
            return 
        }
    }
    authorizationForm.reset()
}