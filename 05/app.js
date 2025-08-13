const form = document.querySelector('form')
if (form) {
    form.setAttribute('novalidate', '') // dodane novalidate
}

form.addEventListener('submit',

    function (e) {

        e.preventDefault() // usuwam domyślne z przeglądarki 

        const firstName = document.querySelector('input[name="firstName"]').value.trim()
        const lastName = document.querySelector('input[name="lastName"]').value.trim()
        const streetForm = document.querySelector('input[name="street"]').value.trim()
        const houseNumber = document.querySelector('input[name="houseNumber"]').value.trim()
        const flatNumber = document.querySelector('input[name="flatNumber"]').value.trim()
        const zipForm = document.querySelector('input[name="zip"]').value.trim()
        const cityForm = document.querySelector('input[name="city"]').value.trim() // jak zastosować .value.trim() do wszystkich?
        const voivodeshipForm = document.querySelector('select[name="voivodeship"]').value.trim()


        const messages = document.querySelector('.messages')

        function showErrors(errorsList) { // utowrzenie listy błędów
           
            messages.innerHTML = ''
            messages.className = 'messages'

            const ul = document.createElement('ul')

            errorsList.forEach(  

                error => {
                   
                    const li = document.createElement('li')
                    li.textContent = error
                    ul.appendChild(li)
                })
           
                messages.appendChild(ul)
        }

        let errors = [];

        if (firstName.length < 3) {
          
            errors.push('Imię musi mieć przynajmniej 3 litety.')
            //  passwordInForm.previousElementSibling.style.color = 'red'
        }

        if (lastName.length < 3) {
          
            errors.push('Nazwisko musi mieć przynajmniej przynajmiej 3 litety.')
            //  passwordInForm.previousElementSibling.style.color = 'red'
        }

        if (streetForm.length < 5) {
         
            errors.push('Nazwa ulicy musi mieć przynajmiej 5 liter.')
            //  passwordInForm.previousElementSibling.style.color = 'red'
        }

        if (cityForm.length < 2) {
          
            errors.push('Nazwa miasta musi mieć przynajmiej 2 liter.')
            //  passwordInForm.previousElementSibling.style.color = 'red'
        }

        if (!/^\d+[A-Za-z]?$/.test(houseNumber)) { // wyrażenie regularne ^ - jeden ciąg, d+ - jedna lub więcej cyfr, A-Za-z od A-Z, a-z, później ? - litera opcjonalna. Tutaj pytanie jak dodać opcjonalnie literę jeśli jest jest type="number"
           
            errors.push('Numer mieszkania musi mieć składnie np. 24A, cyfry + jedna litera')
            //  passwordInForm.previousElementSibling.style.color = 'red'
        }


        if (!/^\d{2}-\d{3}$/.test(zipForm)) { // wyrażenie regularne ciąg 2 cyfr, znak -, ciąg 3 cyfr
            
            errors.push('Kod pocztowy wpisz w formie 00-000')
        }

        if (!voivodeshipForm) {

            errors.push('Wybierz województwo.')
        }


        if (errors.length > 0) {

            showErrors(errors);

        } else {

            messages.textContent = 'Formularz wypełniony poprawnie.';
            messages.className = 'success'; // stylowanie + jeśli .success - zbieraj dane lub wykonaj inne działanie
            console.log('Formularz wypełniony poprawnie.');

        }
    });