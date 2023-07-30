const form = document.querySelector('form');
const submit = document.querySelector('input[type = submit]');

const addresConditions = function (e) {
    e.preventDefault();
    const name = form.elements[0].value;
    const lastName = form.elements[1].value;
    const street = form.elements[2].value
    const houseNumber = form.elements[3].value
    const flatNumber = form.elements[4].value
    const zip = form.elements[5].value;
    const city = form.elements[6].value
    const voivodeship = form.elements[7].value;

    const ul = document.querySelector('.messages');
    ul.innerHTML = '';
    const errors = [];
    const reg = /[0-9]{2}-[0-9]{3}/;
    const inputs = document.querySelectorAll('input');
    const option = document.querySelectorAll('option');

    //is required function
    inputs.forEach(function (item) {
        if (item.type != 'submit' && item.name != 'flatNumber') {
            if (item.value == '') {
                errors.push(`${item.name} is required`);
            }
        }
    })
    if (voivodeship == '') {
        errors.push(`voivodeship is required`);
    }

    if (!reg.test(zip)) {
        errors.push('Zip code format is invalid');
    }
    if (errors.length != 0) {
        errors.forEach(function (item, i) {
            const li = document.createElement('li');
            li.textContent = errors[i];
            ul.appendChild(li);

        })
    } else {
        const li = document.createElement('li');
        li.textContent = "Formularz został wysłany pomyślnie!"
        ul.appendChild(li);
    }
}



if (submit) {
    submit.addEventListener('click', addresConditions);
}