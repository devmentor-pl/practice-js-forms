
const form = document.querySelector('form')
const messages = document.querySelector('.messages')
let errors = []

function checkFieldText(field, name) {
    if(field.length === 0) {
        errors.push(name + '- pole nie może być puste')
    } else if(!isNaN(field)) {
        errors.push(name + '- pole musi być tekstowe')
    }
}

function checkFielNumber(field, name) {
    if(field.length === 0) {
        errors.push(name +' - pole nie może być puste')
    } else if (field <= 0) {
        errors.push(name +' - podaj poprawną wartość')
    }
}

function checkForm(e) {
    e.preventDefault()
    errors = []

    // firstName
    const firstName = form.elements.firstName.value
    checkFieldText(firstName, 'Imię')

    // lastName
    const lastName = form.elements.lastName.value
    checkFieldText(lastName, 'Nazwisko')

    // street
    const street = form.elements.street.value
    checkFieldText(street, 'Ulica')

    // houseNumber
    const houseNumber = form.elements.houseNumber.value
    checkFielNumber(houseNumber, 'Numer budynku')

    // flatNumber
    const flatNumber = form.elements.flatNumber.value
    checkFielNumber(flatNumber, 'Numer mieszkania')

    // Kod pocztowy
    const zip = form.elements.zip.value
    const regex = new RegExp('^[0-9]{2}-[0-9]{3}$');
    if(zip.length === 0) {
        errors.push('Kod pocztowy - pole nie może być puste')
    } else if(!regex.test(zip)) {
        errors.push('Kod pocztowy niepoprawny')
    }

    // Miejscowość
    const city = form.elements.city.value
    checkFieldText(city, 'Miejscowość')

    // select - Województwo
    const select = form.elements.voivodeship
    console.log(select.selectedIndex)
    if(select.selectedIndex === 0) {
        errors.push('Województwo nie wybrane')
    }
    select.addEventListener('change', function(e) {
        const option = e.target.value
        console.log(option)
    })

    // check errors array
    messages.innerText = ''
    console.log(errors)
    if(errors.length === 0) {
        console.log('Form send')
        setTimeout(function() {
            window.alert('FORM has been send')
        })
    } else {
        errors.forEach(error => {
            const li = document.createElement('li')
            li.innerText = error
            messages.appendChild(li)
        })
        console.log('Form NOT send')
    }
}

form.addEventListener('submit', checkForm)














