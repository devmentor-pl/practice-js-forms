const formEl = document.querySelector('form')
const messages = document.querySelector('.messages')

formEl.addEventListener('submit', addData)

function addData(e) {
    e.preventDefault()

    const fields = [
        {name: 'firstName', label: 'Imię', required: true},
        {name: 'lastName', label: 'Nazwisko', required: true},
        {name: 'street', label: 'Ulica', required: true},
        {name: 'houseNumber', label: 'Numer budynku', type: 'number', required: true},
        {name: 'flatNumber', label: 'Numer mieszkania', type: 'number', required: false},
        {name: 'zip', label: 'Kod pocztowy', pattern: "[0-9]{2}-[0-9]{3}", required: true},
        {name: 'city', label: 'Miejscowość', required: true},
        {name: 'voivodeship', label: 'Województwo', required: true},
    ]

    const errors = []

    fields.forEach(function (f) {
        const value = formEl.elements[f.name].value

        if (f.required) {
            if (value.length === 0) {
                errors.push('Dane w polu ' + f.label + ' są niepoprawne.')
            }
        }

        if (f.type === 'number') {
            if (Number.isNaN(Number(value))) {
                errors.push('Dane w polu ' + f.label + ' muszą być liczbą.')
            }
        }

        if (f.pattern) {
            const reg = new RegExp(f.pattern)
            if (!reg.test(value)) {
                errors.push('Dane w polu ' + f.label + ' muszą być zgodne ze wzorem: XX-XXX');
            }
        }
    })

    messages.innerHTML = ''
    if (errors.length === 0) {
        alert('Dane zostały uzupełnione prawidłowo')
    } else {
        errors.forEach(function (text) {
            const liEl = document.createElement('li')
            liEl.innerText = text

            messages.appendChild(liEl)
        })
    }
}