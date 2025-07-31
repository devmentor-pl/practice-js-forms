const form = document.querySelector('form'); //ok
form.addEventListener('submit', function(e) {
    //zatrzymywanie wysyłki formularza
    e.preventDefault();
    
    //pobieranie danych
    const firstName = e.target.elements.firstName;
    const lastName = e.target.elements.lastName;
    console.log(firstName.value, lastName.value);

    if(firstName && lastName) {
        //dodawanie danych do <li>
        const ulElement = document.querySelector('ul');
        let liElement = document.createElement('li');
        liElement.innerText= firstName.value + " " + lastName.value;
        ulElement.appendChild(liElement);
    
        console.log(form);
    }
})
