const form = document.querySelector('form')
let correctElements = []
let incorrectElements = []


if (form) {
    form.noValidate = true
    form.addEventListener('submit', handleSubmit)
}

function handleSubmit(e) {
    e.preventDefault()

    resetMessagesList()
    correctElements = []
    incorrectElements = []

    const formElements = form.elements

    for (let i = 0; i < formElements.length; i++) {
        const formElement = formElements[i]

        resetInputAndLabel(formElement)

        checkCondition(formElement, formElement.type)
    }
    checkFormValidation()

}

function resetMessagesList() {
    const messagesList = document.querySelector('.messages')
    messagesList.innerHTML = ' '
}

function resetInputAndLabel(element) {
    element.parentElement.style.color = 'black'
    element.style.borderColor = "black"
}

function checkCondition(element, type) {
    if (element.name == "zip") {
        const pattern = /[0-9]{2}-[0-9]{3}/
        if (!pattern.test(element.value)) {
            incorrectElements.push(element)
            const elementName = element.parentElement.textContent
            const error = `Pole "${elementName}" nie może być puste. Wymagany format: XX-XXX (X-cyfra)`
            createErrorItem(error)
        }
    } else if (type === 'text') {
        if (!(element.value.trim().length > 0)) {
            incorrectElements.push(element)
            const elementName = element.parentElement.textContent
            const error = `Pole "${elementName}" nie może być puste. `
            createErrorItem(error)
        }
    } else if (element.name === 'houseNumber') {
        if (element.value <= 0 || element.value.trim().length === 0) {
            incorrectElements.push(element)
            const elementName = element.parentElement.textContent
            const error = `Pole "${elementName}" nie może być puste i musi być większe od 0.`
            createErrorItem(error)
        }
    }
    else if (element.name === 'flatNumber') {
        if (element.value < 0 || element.value === '0') {
            incorrectElements.push(element)
            const elementName = element.parentElement.textContent
            const error = `Pole "${elementName}" musi być większe od 0.`
            createErrorItem(error)
        }
    } else if (element.tagName === "SELECT") {
        if (element.selectedIndex === 0) {
            incorrectElements.push(element)
            const elementName = element.parentElement.innerText.split(' ')[0]
            const error = `Pole "${elementName}" musi zostać wybrane.`
            createErrorItem(error)
        }
    }


}

function checkFormValidation() {
    incorrectElements.forEach(function (element) {
        element.parentElement.style.color = "red"
        element.style.borderColor = "red"
    })
    if (incorrectElements.length === 0) {
        console.log('Poprawnie uzupełniony formularz. Dane zostały wysłane')
    }
}

function createErrorItem(message) {
    const messagesList = document.querySelector('.messages')

    if (messagesList) {
        const errorMessage = document.createElement('li')
        errorMessage.textContent = message
        messagesList.appendChild(errorMessage)
    }
}