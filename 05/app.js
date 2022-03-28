const formEl = document.querySelector('form')

 function errorCheck(e) {
    e.preventDefault()

    const errors = []
    const messageUl = document.querySelector('.messages')

    const firstName = e.target.elements.firstName
    const lastName = e.target.elements.lastName
    const street = e.target.elements.street
    const houseNumber = e.target.elements.houseNumber
    const flatNumber = e.target.elements.flatNumber
    const zip = e.target.elements.zip
    const city = e.target.elements.city
    const voivodeship = e.target.elements.voivodeship

    if(firstName.value.length === 0) {
        errors.push('Należy podać imię')
    }

    if(lastName.value.length === 0) {
        errors.push('Należy podać nazwisko')
    }

    if(street.value.length === 0) {
        errors.push('Należy podać ulice')
    }

    if(houseNumber.value.length === 0 || Number(houseNumber.value) === NaN) {
        errors.push('Należy podać wartość liczbową w numerze budynku')
    }

    if(Number(flatNumber.value) === NaN) {
        errors.push('Należy podać wartość liczbową w numerze lokalu')
    }

    const zipPattern = /[0-9]{2}-[0-9]{3}/
    if(zip.value.length === 0 || zipPattern.test(zip.value) === false) {
        errors.push('Należy wpisać poprawny kod pocztowy')
    }

    if(city.value.length === 0) {
        errors.push('Należy podać miasto')
    }

    if(voivodeship.value.length === 0) {
        errors.push('Należy wybrać województwo')   
    }

    messageUl.innerText = ''

    if(errors.length === 0) {
        alert('Wysłano poprawnie formularz')
    } else {
        errors.forEach(function(error) {
            const newLi = document.createElement('li')
            newLi.innerText = error
            messageUl.appendChild(newLi)
        })
    }
}

formEl.addEventListener('submit', errorCheck)