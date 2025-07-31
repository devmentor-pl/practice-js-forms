document.addEventListener('DOMContentLoaded', init)

function init() {    
    const formEl = document.querySelector('form')
    if(formEl) {
        formEl.setAttribute('novalidate', true)
        formEl.addEventListener('submit', handleSubmit)
    }    

    function handleSubmit(e) {
        e.preventDefault()

        const login = formEl.elements.login
        const pass1 = formEl.elements.pass1
        const pass2 = formEl.elements.pass2
        const accept = formEl.elements.accept
        const labelsList = formEl.querySelectorAll('label')
    
        const errors = []
    
        checkEmail(login, errors)
        checkPassword(pass1, pass2, errors)
        checkRegulations(accept, errors)
        resetFields(labelsList)
        checkErrors(errors)
    }
}

function checkEmail(login, errors) {
    if(!login.value.includes('@')) {
        errors.push(login.previousElementSibling)
    }
}

function checkPassword(pass1, pass2, errors) {
    if(pass1.value.length <= 6) {
        errors.push(pass1.previousElementSibling)
        errors.push(pass2.previousElementSibling)
    } 
    if(pass2.value !== pass1.value) {        
        errors.push(pass2.previousElementSibling)
    }
}

function checkRegulations(accept, errors) {
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