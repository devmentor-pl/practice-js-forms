document.addEventListener('DOMContentLoaded', init)

const formEl = document.querySelector('form')
const login = formEl.elements.login
const pass1 = formEl.elements.pass1
const pass2 = formEl.elements.pass2
const accept = formEl.elements.accept
let errors = []
const labelsList = formEl.querySelectorAll('label')

function init() {    
    if(formEl) {
        formEl.setAttribute('novalidate', true)
        formEl.addEventListener('submit', handleSubmit)
    }    
}

function handleSubmit(e) {
    e.preventDefault()

    errors = []

    checkEmail()
    checkPassword()
    checkRegulations()
    resetFields(labelsList)
    checkErrors(errors)
}

function checkEmail() {
    if(!login.value.includes('@')) {
        errors.push(login.previousElementSibling)
    }
}

function checkPassword() {
    if(pass1.value.length <= 6) {
        errors.push(pass1.previousElementSibling)
        errors.push(pass2.previousElementSibling)
    } 
    if(pass2.value !== pass1.value) {
        errors.push(pass2.previousElementSibling)
    }
}

function checkRegulations() {
    if(!accept.checked) {
        errors.push(accept.previousElementSibling)
    }
}

function checkErrors(errors) {     
    if(errors.length !== 0) {
        errors.forEach(function(err) {
            err.style.color = 'red'
            err.nextElementSibling.value = ''
        })        
    } else {
        console.log('done')
    }
}

function resetFields(list) {
    list.forEach(function(item) {
        item.style.color = 'black'
    })
}