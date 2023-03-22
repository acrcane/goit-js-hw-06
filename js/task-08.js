const formObject = {
    authorizationForm: document.querySelector('.login-form')
}

formObject.authorizationForm.addEventListener('submit', getUserAuthorization)

function getUserAuthorization(event){
    event.preventDefault()
    const formElement = event.target.elements;

    if(formElement.email.value !== '' && formElement.password.value !== ''){
        const formData = {
            [formElement.email.name]: formElement.email.value,
            [formElement.password.name]: formElement.password.value
        }
        console.log(formData);
        formObject.authorizationForm.reset()
        return
    }
    alert('Не всі поля заповнені.')
}