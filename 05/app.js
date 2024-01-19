const formEl = document.querySelector('form')
const messages = document.querySelector('.messages')
let errors = []

formEl.noValidate = true
formEl.addEventListener('submit', checkForm)


function checkForm(e) {
    e.preventDefault()
    checkFirstName()
    checkLastName()
    checkStreet()
    checkHouseNumber()
    checkZip()
    checkCity()
    checkVoivodeship()
    checkErrors()
}  

function checkFirstName(){
    if(formEl.elements.firstName.value === ""){
        errors.push('Proszę wpisać swoje imię')
    }
}
function checkLastName(){
    if(formEl.elements.lastName.value === ""){
        errors.push('Proszę wpisać swoje nazwisko')
    }
}
function checkStreet(){
    if(formEl.elements.street.value === ""){
        errors.push('Proszę wpisać nazwę ulicy')
    }
}
function checkHouseNumber(){
    if(formEl.elements.houseNumber.value === ""){
        errors.push('Proszę wpisać numer domu')
    }else if(formEl.elements.houseNumber.value < 1){
        errors.push('Numer domu nie może być zero lub wartością ujemną')
    }
}
function checkZip(){
    if(formEl.elements.zip.value === ""){
        errors.push('Proszę wpisać kod pocztowy')
    }
}
function checkCity(){
    if(formEl.elements.city.value === ""){
        errors.push('Proszę wpisać nazwę miejscowości')
    }
}
function checkVoivodeship(){
    if(formEl.elements.voivodeship.value === ""){
        errors.push('Proszę wybrać województwo')
    }
}
function checkErrors(){
    if(errors.length > 0){
        let errorsList = ""   
        for(let i = 0; i < errors.length; i++){
            errorsList += errors[i] + '\n'
        }
        messages.innerText = errorsList
    } else {
        messages.innerText = 'Formularz wypełniony poprawnie'
    }
    errors = []
}