const form = document.querySelector('form');
const ul = document.querySelector('ul');
const label = document.querySelectorAll('label');
const select = form.querySelector('select');



form.noValidate = true;


form.addEventListener('submit', checkData)



function checkData(e) {
    e.preventDefault()

    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const street = e.target.elements.street.value;
    const houseNumber = e.target.houseNumber.value;
    const flatNumber = e.target.flatNumber.value;
    const zip = e.target.zip.value;


    const errors = [];



    if (firstName.length < 3) {
        errors.push('Wpisz poprawnie imię!');
        // alert('wpisz imię!')
    }

    if (lastName.length < 3) {
        errors.push('Wpisz poprawnie nazwisko!')
        // alert(('wpisz nazwisko!'))
    }
    if (street.length < 4) {
        errors.push('Wpisz poprawnie ulicę!')
        // alert('wpisz ulicę!')
    }
    if (houseNumber < 1) {
        errors.push('Wpisz poprawnie numer budynku!');
        // alert('wpisz numer domu!')
    }

    if (flatNumber < 1) {
        errors.push('Wpisz poprawnie numer mieszkania!');
        // alert('wpisz numer mieszkania!')
    }
    if (!(zip.match('^[0-9]{2}\-[0-9]{3}$'))) {
        // alert('wpisz poprawny kod pocztowy!')
        errors.push('Wpisz poprawnie kod pocztowy')
    }

    // console.log(errors)


    const optionList = select.querySelectorAll('option')

    select.addEventListener('change', showOptionsInfo);

    function showOptionsInfo(e) {

        optionList.forEach(function (option) {
            if (!optionList.selected) {
                // alert('wybierz województwo')
                errors.push('Wybierz województwo!')
            }
        })

    }



    if (errors.length > 0) {
        e.preventDefault();

        ul.innerHTML = '';


        errors.forEach(function (err) {

            const newLi = document.createElement('li');
            newLi.innerText = err;
            ul.appendChild(newLi);



            newLi.style.color = "red";
        })

    }


}