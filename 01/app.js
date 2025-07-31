const formEl = document.forms[0]
const ulEl = document.querySelector('.users-list')

const handleSubmit = function (e) {
    e.preventDefault()
    let data = {}

    const errorElements = document.querySelectorAll('.error-element')
    errorElements.forEach(errEl => errEl.remove())

    const liEl = document.createElement('li')
    liEl.classList.add('users-list__person')

    const inputs = e.target.elements
    for (const input of inputs) {
        if (input.type !== 'submit') {
            if (input.value === '') {
                data.errors = {
                    ...data.errors,
                    [input.name]: {
                        msg: "Pole wymagane !"
                    }
                }
            } else {
                data = {
                    ...data,
                    [input.name]: input.value
                }
            }
        }
    }
    if (data.errors) {
        Object.entries(data.errors).forEach(error => {
            const span = document.createElement('span')
            span.classList.add('error-element')
            const input = inputs[error[0]]
            const parentAsLabel = input.parentElement
            span.innerText = error[1].msg
            span.style.color = 'red'
            parentAsLabel.appendChild(span)
        })
        return data
    }
    liEl.innerHTML = `${data.firstName} ${data.lastName}`
    ulEl.appendChild(liEl)
}
formEl.addEventListener('submit', handleSubmit)