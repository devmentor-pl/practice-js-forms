const formEl = document.querySelector('form')
formEl.setAttribute('noValidate', '')

formEl.addEventListener('submit', validate)

function showInfoAboutFormInputs(text, container) {
    const liEl = document.createElement('li')

    liEl.innerText = text
    container.appendChild(liEl)
}

function validate(e) {
    e.preventDefault()
    const ulEl = formEl.querySelector('.messages')
    while (ulEl.firstChild) {
        ulEl.lastChild.remove()
    }

    const onlyLetters = /^[\s\p{L}]+$/u
    const zipCode = /^\d{2}-\d{3}$/g

    for (const input of formEl) {
        if (input.name !== 'flatNumber' &&
            input.name !== '' &&
            input.value === '' &&
            input.name !== 'voivodeship') {

            showInfoAboutFormInputs('Field ' + input.parentElement.innerText + 'is required', ulEl)
        }

        if (input.name !== '' &&
            input.value === '' &&
            input.name === 'voivodeship') {

            showInfoAboutFormInputs('Field Województwo is required', ulEl)
        }

        if ((input.name === 'firstName' ||
            input.name === 'lastName' ||
            input.name === 'city') &&
            input.value !== '') {

            const isOnlyLetters = onlyLetters.test(input.value)

            if (!isOnlyLetters) {
                showInfoAboutFormInputs('Field ' + input.parentElement.innerText + " can't contain a numbers", ulEl)
            }
        }

        if (input.name === 'zip' && !zipCode.test(input.value)) {
            showInfoAboutFormInputs('Field ' + input.parentElement.innerText + " contain wrong zip-code", ulEl)
        }
    }

    if (ulEl.children.length === 0) {
        showInfoAboutFormInputs('All data send properly', ulEl)
    }
}


