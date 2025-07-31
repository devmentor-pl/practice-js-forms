const formElement = document.querySelector('form')
const emailInput = formElement.elements[0]
const passwordInput = formElement.elements[1]
const secondPasswordInput = formElement.elements[2]
const agreementInput = formElement.elements[3]


formElement.noValidate = true


formElement.addEventListener('submit', function (e) {
    e.preventDefault()
    const errors = [];

    const allLabels = document.querySelectorAll('label')
    const labelsArray = Array.from(allLabels)
    labelsArray.forEach((label) => {
        label.style.color = "black"
    })

    if (!emailInput.value.includes('@')) {
        errors.push(emailInput)
    }


    if (passwordInput.value === "" && secondPasswordInput.value === "" || passwordInput.value !== secondPasswordInput.value) {
        errors.push(passwordInput, secondPasswordInput)
    }

    if (agreementInput.checked === false) {
        errors.push(agreementInput)
    }


    errors.forEach((error) => {
        const label = error.previousElementSibling
        label.style.color = 'red'
    })
if(errors.length === 0)
    console.log("done")
})



