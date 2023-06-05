const form = document.querySelector('form')

let errors = []

const fields = [
    {
        name: 'login',
        type: 'email',
        label: 'formLogin',
        errorMessage: 'must include "@" sign',
        getElement: function () { return form.elements[this.name] },
        isValid: function () {
            const element = this.getElement()
            return element.value.includes('@')
        }
    },
    {
        name: 'pass1',
        type: 'password',
        label: 'formPass1',
        errorMessage: 'must be longer than 6 letters',
        getElement: function () { return form.elements[this.name] },
        isValid: function () {
            const element = this.getElement()
            return element.value.length > 6
        }
    },
    {
        name: 'pass2',
        type: 'password',
        label: 'formPass2',
        errorMessage: 'must be equal to "password1',
        getElement: function () { return form.elements[this.name] },
        isValid: function () {
            const password1 = form.elements.pass1
            const element = this.getElement()
            return element.value === password1.value && element.value.length > 6
        }
    },
    {
        name: 'accept',
        type: 'checkbox',
        label: 'formAccept',
        errorMessage: 'must be marked',
        getElement: function () { return form.elements[this.name] },
        isValid: function () {
            const element = this.getElement()
            return element.checked
        }
    },
]

if (form) {
    form.noValidate = true
    form.addEventListener('submit', handleSubmit)
}

function handleSubmit(e) {
    e.preventDefault()

    errors = []

    fields.forEach(function (field) {
        resetMarkedLabel(field)
        checkInputIsValid(field)
    })
    console.log(errors)

    if (errors.length === 0) {
        console.log("done")
        resetInput()
    }
}

function checkInputIsValid(field) {
    if (!field.isValid()) {
        errors.push(field.type + ' ' + field.errorMessage)

        const label = field.getElement().previousElementSibling

        markByRedBorder(label)
    }
}


function markByRedBorder(element) {
    element.style.color = "red"
}

function resetMarkedLabel(field) {
    const siblingElement = field.getElement().previousElementSibling

    if (siblingElement) {
        siblingElement.style.color = 'black'
    }
}

function resetInput() {
    fields.forEach(function (field) {
        const element = field.getElement()
        if (field.type === 'checkbox') {
            element.checked = false
        } else element.value = '';
    });
}