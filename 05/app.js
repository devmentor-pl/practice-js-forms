const form = document.querySelector('form')
const formEl = form.elements
form.noValidate = true

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const ul = document.querySelector('.messages')
    ul.innerHTML = null
    let anyErrors = false
    for (const input of formEl) {
        if (input.type !== 'submit') {
            const required = input.hasAttribute('required')
            const isNumber = (input.dataset.number === 'true')
            const hasPattern = input.hasAttribute('pattern')
            const valResult = validate(required, isNumber, hasPattern, input)
            if (!valResult) anyErrors = true
        }
    }
    if (!anyErrors) alert('Dane zostały poprawnie wysłane!')
})
function getDesc(input) {
    const label = input.closest('label')
    const desc = label.innerText.trim()
    return desc
}
function isNotEmpty(input) {
    const value = input.value
    return value !== ''
}
function isValNumber(input) {
    const value = Number(input.value)
    return !isNaN(value)
}
function isPatternMached(input) {
    const patternVal = input.pattern
    const patternReg = new RegExp(patternVal)
    const value = input.value
    return patternReg.test(value)
}
function addMessage(message) {
    const ul = document.querySelector('.messages')
    const li = document.createElement('li')
    li.innerText = message
    ul.appendChild(li)
}
function validate(required, isNumber, hasPattern, input) {
    let notEmpty = true
    let number = true
    let pattern = true
    let valid = true
    const desc = getDesc(input)
    if (required) notEmpty = isNotEmpty(input) 
    if (isNumber) number = isValNumber(input) 
    if (hasPattern) pattern = isPatternMached(input) 

    if (required && !notEmpty) {
        const message = `Pole: "${desc}" jest puste!`
        addMessage(message)
        valid = false
    }
    if (isNumber && !number) {
        const message = `Wartość w polu: "${desc}" nie jest liczbą!`
        addMessage(message)
        valid = false
    }
    if (hasPattern && !pattern) {
        const message = `Wartość w polu: "${desc}" nie pasuje do wzoru!`
        addMessage(message)
        valid = false
    }
    return valid
}