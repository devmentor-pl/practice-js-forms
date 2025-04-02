const formEl = document.querySelector('form')
const messagesList = document.querySelector('.messages')

formEl.addEventListener('submit', validateForm)

function validateForm(e) {
    e.preventDefault()
    
    const errorsArr = []
    messagesList.innerHTML = ''

    const voivodeshipFields = formEl.querySelector('[name="voivodeship"]')
   
    const firstName = e.target.elements.firstName.value
    const lastName = e.target.elements.lastName.value
    const street = e.target.elements.street.value
    const houseNumber = e.target.elements.houseNumber.value
    const zip = e.target.elements.zip.value
    const city = e.target.elements.city.value
    // const voivodeship = e.target.elements.voivodeship.value
    
    
    if(firstName.length === 0) {
        errorsArr.push('Pole imię jest wymagane!')
    }
    if(lastName.length === 0) {
        errorsArr.push('Pole nazwisko jest wymagane!')
    }
    if(street.length === 0) {
        errorsArr.push('Pole ulica jest wymagane!')
    }
    if(houseNumber.length === 0) {
        errorsArr.push('Pole numer domu jest wymagane!')
    }
    
    const zipPattern = /^[0-9]{2}-[0-9]{3}$/
    if (zip.length === 0) {
        errorsArr.push('Pole kod pocztowy jest wymagane.')
    } else if (!zipPattern.test(zip)) {
        errorsArr.push('Niepoprawny format kodu pocztowego.')
    }
    if(city.length === 0) {
        errorsArr.push('Pole miasto jest wymagane!')
    }
    if(voivodeshipFields.value === "") {
        errorsArr.push('Wybierz województwo!')
    }

    if(errorsArr.length > 0) {
        errorsArr.forEach(function(error) {
            const newLi = document.createElement('li')
            newLi.textContent = error
            newLi.style.listStyle = 'none'
            messagesList.appendChild(newLi)
        })
    } else {
        const newLi = document.createElement('li')
        newLi.textContent = 'Dane z formularza zostały wysłane poprawnie!'
        messagesList.appendChild(newLi)
    }
}


    

