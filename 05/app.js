const firstNameInput = document.querySelector('[name="firstName"]')
const lastNameInput = document.querySelector('[name="lastName"]')
const streetInput = document.querySelector('[name="street"]')
const houseInput = document.querySelector('[name="houseNumber"]')
const flatNumberInput = document.querySelector('[name="flatNumber"]')
const zipInput = document.querySelector('[name="zip"]')
const cityInput = document.querySelector('[name="city"]')
const voivodeshipInput = document.querySelector('[name="voivodeship"]')
const formEl = document.querySelector('form')
const errorMessages = document.querySelector('.messages')

console.dir(voivodeshipInput)
console.dir(flatNumberInput)
formEl.noValidate = true
formEl.addEventListener('submit', function (e) {
    e.preventDefault()
    const clearMessages = function () {
        const messages = errorMessages.querySelectorAll('li')
        messages.forEach(function (item) {
            item.remove()
        })
    }
    clearMessages()
    const errors = []
    const isEmpty = function (el) {
        if (el) {
            if (el.value.length < 2) {
                errors.push(el)
            }
        }
    }
    const createMessage = function (el) {
        let newMessage = document.createElement('li')
        if (el===voivodeshipInput){
            newMessage.innerText = 'Pole "Województwo" jest wymagane'
            errorMessages.appendChild(newMessage)
        }
        else {
            newMessage.innerText = 'Pole ' + '"' + el.parentElement.innerText + '"' + 'jest wymagane'
            errorMessages.appendChild(newMessage)
        }
    }
    const validation = function () {
        isEmpty(firstNameInput)
        isEmpty(lastNameInput)
        isEmpty(streetInput)
        isEmpty(zipInput)
        isEmpty(cityInput)
        if (voivodeshipInput.value===''){
            errors.push(voivodeshipInput)
        }
        if (houseInput.value===''){
            errors.push(houseInput)
        }        
    }
    validation()

    if (errors.length > 0) {
        e.preventDefault()
        errors.forEach(function (el) {
            createMessage(el)
        })
    }
    else {
        console.log('DONE')
    }
})



