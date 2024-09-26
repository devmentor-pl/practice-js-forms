const formEl = document.querySelector('form')

let data = {}

const validators = {
    login: {
        requireString: {
            value: '@',
            responseMsg: 'Missing "@"!'
        },
        minLength: {
            value: 6,
            responseMsg: 'Provide at least 6 characters!'
        }
    },
    pass1: {
        minLength: {
            value: 6,
            responseMsg: 'Provide at least 6 characters!'
        },
        equalTo: {
            value: 'pass2',
            responseMsg: 'Passwords must be equal!'
        }
    },
    pass2: {
        equalTo: {
            value: 'pass1',
            responseMsg: 'Passwords must be equal!'
        }
    },
    accept: {
        isChecked: {
            value: true,
            responseMsg: 'You need to accept regulations!'
        }
    }
}

const getValueByType = (input) => {
    if (input.type === 'checkbox') {
        return input.checked
    } else {
        return input.value
    }
}

const getInputData = (input, validators) => {
    let currentError
    if (validators[input.name]) {
        currentError = checkErrors(input, validators[input.name])
    }
    if (!currentError) {
        data = {
            ...data,
            [input.name]: getValueByType(input)
        }
    }
    return data
}
const checkErrors = (input, validatorName) => {
    if (validatorName.requireString && !input.value.includes(validatorName.requireString.value)) {
        data.errors = {
            ...data.errors,
            [input.name]: {
                msg: validatorName.requireString.responseMsg
            }
        }
        return true
    } else if (validatorName.minLength && input.value.length < validatorName.minLength.value) {
        data.errors = {
            ...data.errors,
            [input.name]: {
                msg: validatorName.minLength.responseMsg
            }
        }
        return true
    } else if (validatorName.equalTo) {
        const compareField = document.querySelector(`input[name=${validatorName.equalTo.value}]`)
        if (compareField.value !== input.value) {
            data.errors = {
                ...data.errors,
                [input.name]: {
                    msg: validatorName.equalTo.responseMsg
                }
            }
            return true
        }

    } else if (validatorName.isChecked && input.checked !== validatorName.isChecked.value) {
        data.errors = {
            ...data.errors,
            [input.name]: {
                msg: validatorName.isChecked.responseMsg
            }
        }
        return true
    } else {
        return false
    }
}

const handleSubmit = function (e) {
    e.preventDefault()
    data = {}
    const errorElements = document.querySelectorAll('.error-element')
    errorElements?.forEach(errEl => errEl.remove())

    const inputs = e.target.elements
    for (const input of inputs) {
        if (input.type !== 'submit') {
            getInputData(input, validators)
        }
        if (data.errors?.[input.name]) {
            const inputLabelWithError = input.previousElementSibling
            const inputParent = input.parentElement
            const inputErrorMsgSpan = document.createElement('span')
            inputErrorMsgSpan.classList.add('error-element')
            inputErrorMsgSpan.style.fontSize = '0.7rem'
            inputErrorMsgSpan.style.color = '#e74c3c'
            inputLabelWithError.style.color = '#e74c3c'
            inputErrorMsgSpan.innerText = `${data.errors[input.name].msg}`
            inputParent.appendChild(inputErrorMsgSpan)
        } else if (input.type !== 'submit') {
            const inputLabelWithoutError = input.previousElementSibling
            inputLabelWithoutError.style.color = 'initial'
        }
    }
    if (!data.errors) {
        const formResultContainer = document.createElement('div')
        const resultText = document.createElement('h1')
        resultText.innerText = 'Form has been sent!'
        formResultContainer.style.textAlign = 'center'
        formResultContainer.style.marginTop = '30px'
        formResultContainer.appendChild(resultText)
        document.body.appendChild(formResultContainer)

        for (const input of inputs) {
            if (input.type !== 'submit') {
                input.value = ''
                if (input.type === 'checkbox') {
                    input.checked = false
                }
            } else if (input.type === 'submit') {
                input.disabled = true
                setTimeout(() => {
                    formResultContainer.remove()
                    input.disabled = false
                }, 3000)
            }
        }

        console.log('DONE!')
    }
    return data
}

formEl.addEventListener('submit', handleSubmit)