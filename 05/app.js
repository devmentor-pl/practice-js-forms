const form = document.querySelector('form')

let errorElements = []

if (form) {
    form.noValidate = true
    form.addEventListener('submit', handleSubmit)
}

function handleSubmit(e) {
    e.preventDefault()

    resetMessagesList()
    errorElements = []

    const fields = [
        { name: 'firstName', label: 'Imię', required: true },
        { name: 'lastName', label: 'Nazwisko', required: true },
        { name: 'street', label: 'Ulica', required: true },
        { name: 'houseNumber', label: 'Numer budynku', type: 'number', required: true },
        { name: 'flatNumber', label: 'Numer mieszkania', type: 'number', required: false },
        { name: 'zip', label: 'Kod pocztowy', pattern: '[0-9]{2}-[0-9]{3}', required: true },
        { name: 'city', label: 'Miejscowość', required: true },
        { name: 'voivodeship', label: 'Województwo', required: true }]

    fields.forEach(function (field) {
        const formElement = form.elements[field.name]
        resetMarkedElements(formElement)
        checkCondition(formElement, field)
    })

    checkFormValidation(fields)
}

function resetMessagesList() {
    const messagesList = document.querySelector('.messages')
    messagesList.innerHTML = ' '
}

function resetMarkedElements(element) {
    element.parentElement.style.color = 'black'
    element.style.borderColor = "black"
}

function checkCondition(element, field) {
    if (field.required) {
        if (element.value.length === 0) {
            const error = `Pole "${field.label}" nie może być puste. `
            createErrorItem(error, element)
        }
    }
    if (field.type === 'number') {
        if (element.value < 0 || element.value === '0') {
            const error = `Wartość w polu "${field.label}" musi być większa od 0. `
            createErrorItem(error, element)
        }
    }
    if (field.pattern) {
        const reg = new RegExp(field.pattern)
        if (!reg.test(element.value)) {
            const error = `"${field.label}" - wymagany format: XX-XXX (X-cyfra)`
            createErrorItem(error, element)
        }
    }
}

function checkFormValidation(fields) {
    if (errorElements.length === 0) {
        console.log('Poprawnie uzupełniony formularz. Dane zostały wysłane')
        fields.forEach(function (field) {
            form.elements[field.name].value = ''
        })
    } else {
        errorElements.forEach(function (element) {
            element.parentElement.style.color = "red"
            element.style.borderColor = "red"
        })
    }
}

function createErrorItem(message, element) {
    errorElements.push(element)
    const messagesList = document.querySelector('.messages')

    if (messagesList) {
        const errorMessage = document.createElement('li')
        errorMessage.textContent = message
        messagesList.appendChild(errorMessage)
    }
}