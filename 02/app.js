const form = document.querySelector('form')

let errors = []

const fields = [
    {
        name: 'login',
        type: 'email',
        label: 'formLogin',
    },
    {
        name: 'pass1',
        type: 'password',
        label: 'formPass1',
    },
    {
        name: 'pass2',
        type: 'password',
        label: 'formPass2',
    },
    {
        name: 'accept',
        type: 'checkbox',
        label: 'formAccept',
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
        const formElement = form.elements[field.name]
        const label = formElement.previousElementSibling

        resetMarkedLabel(label)
        validate(field, formElement, label)
    })
    console.log(errors)

    if (errors.length === 0) {
        console.log("done")
        resetInput()
    }
}

function validate(field, element, label) {

    if (field.type === "email") {
        if (!element.value.includes('@')) {
            errors.push(`${field.type} must include "@" sign`)
            markByRedBorder(label)
        }
    } if (field.type === "password") {
        const password2 = form.elements.pass2
        const password1 = form.elements.pass1
        if (element.value.length <= 6 || (element.value !== password2.value || element.value !== password1.value)) {
            errors.push(`${field.type} must be longer than 6 letters`)
            markByRedBorder(label)
        }
    } if (field.type === "checkbox") {
        if (!element.checked) {
            errors.push(`${field.type} must be marked`)
            markByRedBorder(label)
        }
    }
}

function markByRedBorder(element) {
    element.style.color = "red"
}

function resetMarkedLabel(element) {
    element.style.color = 'black'
}

function resetInput() {
    fields.forEach(function (field) {
        const element = form.elements[field.name]
        if (field.type === 'checkbox') {
            element.checked = false
        } else element.value = '';
    });
}