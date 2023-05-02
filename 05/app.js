document.addEventListener('DOMContentLoaded', init)

function init() {
    console.log('DOM')

    const formEl = document.querySelector('form')
    const ulEl = document.querySelector('ul')

    if (formEl) {
        formEl.addEventListener('submit', handleSubmit)
    }

    function handleSubmit(e) {
        e.preventDefault()
        // console.log('submit')

        const fields = [
            {name: 'firstName', label: 'imię', required: true},
            {name: 'lastName', label: 'nazwisko', required: true},
            {name: 'street', label: 'ulica', required: true},
            {name: 'houseNumber', label: 'numer domu', type: 'number', required: true},
            {name: 'flatNumber', label: 'numer mieszkania', type: 'number', required: true},
            {name: 'zip', label: 'kod pocztowy', pattern: '[0-9]{2}-[0-9]{3}', required: true},
            {name: 'city', label: 'miasto', required: true},
            {name: 'voivodeship', label: 'województwo', required: true},
        ]

        const firstNameEl = formEl.elements.firstName
        const lastNameEl = formEl.elements.lastName
        const streetEl = formEl.elements.street
        const houseNumberEl = formEl.elements.houseNumber
        const flatNumberEl = formEl.elements.flatNumber
        const zipEl = formEl.elements.zip
        const cityEl = formEl.elements.city
        const voivodeshipEl = formEl.elements.voivodeship


        const errors = []

        fields.forEach(function(f) {
            const value = formEl.elements[f.name].value
            if(f.required) {
                if(value.length === 0)
                errors.push('Dane w polu ' + f.label + ' są niepoprawne!')
            }
            if(f.type === 'number'){
                if(Number.isNaN(Number(value))){
                errors.push('Dane w polu ' + f.label + ' muszą być liczbą')
                }
            }
            if(f.pattern){
                const reg = new RegExp(f.pattern)
                if(!reg.test(zipEl.value)){
                errors.push('Dane w polu ' + f.label + ' muszą być zgodne ze wzorem: ' + f.pattern )
                }
            }

        })

        // if (firstNameEl.value.length === 0) {
        //     errors.push('Dane w polu imię jest niepoprawne!')
        // }
        // if (lastNameEl.value.length === 0) {
        //     errors.push('Dane w polu nazwisko jest niepoprawne!')
        // }
        // if (streetEl.value.length === 0) {
        //     errors.push('Dane w polu ulica jest niepoprawne!')
        // }
        // if (Number.isNaN(Number(houseNumberEl.value))) {
        //     errors.push('Dane w polu budynku jest niepoprawne!')
        // }
        // if (Number.isNaN(Number(flatNumberEl.value))) {
        //     errors.push('Dane w polu numer mieszkania jest niepoprawne!')
        // }
        // if (!/[0-9]{2}-[0-9]{3}/.test(zipEl.value)) {
        //     errors.push('Dane w polu kod pocztowy jest niepoprawne!')
        // }
        // if (cityEl.value.length === 0) {
        //     errors.push('Dane w polu miasto jest niepoprawna!')
        // }
        // if (voivodeshipEl.value.length === 0) {
        //     errors.push('Dane w polu województwo jest niepoprawne!')
        // }
        
        ulEl.innerHTML = ''
        if (errors.length === 0) {
            alert('Dane zostały wysłane prawidłowo')
        } else {
            errors.forEach(function (text) {
                const liEl = document.createElement('li')
                liEl.innerText = text

                ulEl.appendChild(liEl)

            })
        }

        console.log(errors)

    }
}