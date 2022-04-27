
const form = document.querySelector('form')
const messages = document.querySelector('.messages')
// const errors = []

function checkForm(e) {
    e.preventDefault()
    const errors = []

    // firstName
    const firstName = form.elements.firstName.value
    if(firstName.length === 0) {
        errors.push('Imie - pole nie może być puste')
    }

    // lastName
    const lastName = form.elements.lastName.value
    if(lastName.length === 0) {
        errors.push('Nazwisko - pole nie może być puste')
    }

    // street
    const street = form.elements.street.value
    if(street.length === 0) {
        errors.push('Ulica - pole nie może być puste')
    }

    // houseNumber
    const houseNumber = form.elements.houseNumber.value
    if(houseNumber.length === 0) {
        errors.push('Numer budynku - pole nie może być puste')
    }

    // flatNumber
    const flatNumber = form.elements.flatNumber.value
    if(flatNumber.length === 0) {
        errors.push('Numer mieszkania - pole nie może być puste')
    }

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
    if(city.length === 0) {
        errors.push('Miejscowość - pole nie może być puste')
    } else if(!isNaN(city)) {
        errors.push('Miejscowość - pole musi być tekstowe')
    }

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
    if(errors.length === 0) {
        console.log('Form send')
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














