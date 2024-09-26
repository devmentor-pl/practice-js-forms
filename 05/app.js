import resetForm from './utils/resetForm.js'
import renderSentMsg from './utils/renderSentMsg.js'
import validateOperations from './utils/validateOperations.js'
import getInputData from './utils/getInputData.js'
import renderErrorList from './utils/renderErrorList.js'

const formEl = document.querySelector('form')

const errorListEl = document.querySelector('.messages')

let formData = {}

// Validation switch cases: ['require', 'string', 'number', 'integer', 'minLength', 'pattern']
//Validation content structure:
/*
input_tagName: {
    default_require_name: {
        operation: function (inputValue) {
            return validateOperations(
                'SWITCH_CASE_NAME'
                 inputValue,
                 this.requireValue
        )},
        responseMsg: String
    }
}
*/
const validators = {
    firstName: {
        requireString: {
            operation: function (val) { return validateOperations('require', val) },
            responseMsg: 'Required field.'
        }
    },
    lastName: {
        requireString: {
            operation: function (val) { return validateOperations('require', val) },
            responseMsg: 'Required field.'
        }
    },
    street: {
        requireString: {
            operation: function (val) { return validateOperations('require', val) },
            responseMsg: 'Required field.'
        }
    },
    houseNumber: {
        requireInteger: {
            operation: function (val) { return validateOperations('integer', val) },
            responseMsg: 'Required field must be an integer.'
        },
        requireNumber: {
            operation: function (val) { return validateOperations('number', val) },
            responseMsg: 'Required field.'
        }
    },
    flatNumber: {
        requireNumber: {
            operation: function (val) { return validateOperations('number', val) },
            responseMsg: 'Required field.'
        }
    },
    city: {
        requireString: {
            operation: function (val) { return validateOperations('require', val) },
            responseMsg: 'Required field.'
        }
    },
    voivodeship: {
        requireSelect: {
            operation: function (val) { return validateOperations('require', val) },
            responseMsg: 'You need to make a selection.'
        }
    },
    zip: {
        requirePattern: {
            requireValue: /^[0-9]{2}-[0-9]{3}$/,
            operation: function (val) { return validateOperations('pattern', val, this.requireValue) },
            responseMsg: 'You need to provide proper ZIP code e.g. 42-840'
        },
        requireString: {
            operation: function (val) { return validateOperations('require', val) },
            responseMsg: 'Required field.'
        }
    },
    /* checker: {
        requireCheck: {
            operation: function (val) { return validateOperations('checkbox', val) },
            responseMsg: 'Required field.'
        }
    }, */
}

const handleSubmit = function (e) {
    e.preventDefault()

    formData = {}
    errorListEl.innerHTML = ''

    //Second UI error display
    /* const errorElements = document.querySelectorAll('.error-element')
    errorElements?.forEach(errEl => errEl.remove()) */

    const inputs = e.target.elements
    for (const input of inputs) {
        if (input.type !== 'submit') {
            getInputData(input, validators, formData)
        }
        if (formData.errors?.[input.name]) {
            const inputLabelWithError = input.parentElement
            const errorMsg = formData.errors[input.name].msg
            //First UI error display
            renderErrorList(input, inputLabelWithError, errorMsg, errorListEl)

            //Second UI error display
            /* const inputParent = input.parentElement
            const inputErrorMsgSpan = document.createElement('span')
            inputErrorMsgSpan.classList.add('error-element')
            inputErrorMsgSpan.style.fontSize = '0.7rem'
            inputErrorMsgSpan.style.color = '#e74c3c'
            inputLabelWithError.style.color = '#e74c3c'
            inputErrorMsgSpan.innerText = `${errorMsg}`
            inputParent.appendChild(inputErrorMsgSpan) */
        } else if (input.type !== 'submit') {
            //Second UI error display
            /* const inputLabelWithoutError = input.parentElement
             inputLabelWithoutError.style.color = 'initial' */
        }
    }

    if (!formData.errors) {
        const formResultContainer = document.createElement('div')
        renderSentMsg(formResultContainer)
        resetForm(inputs, formResultContainer)

        console.log('DONE!')
    }
    console.log('formData ', formData)
    return formData
}

formEl.addEventListener('submit', handleSubmit)