
let ul = document.querySelector('.messages');
document.querySelector('form').addEventListener('submit', validate);
document.querySelector('form').noValidate = true;

function validate(e) {

	e.preventDefault();

    let inputsList = e.target.elements;
    let errors = [];

    for (let i = 0; i < inputsList.length; i++) {
        if (inputsList[i].required === true && inputsList[i].value === '') {
            errors.push(inputsList[i].parentElement.innerText.split('\n')[0].trim().toLowerCase().replace(':', ''));
        }
    }

    ul.innerHTML = '';
    ul.style.listStyleType = 'none';

    if (errors.length > 0) {
        const li = document.createElement('li');
        li.innerText = `Uzupełnij pola:`;
        li.style.fontWeight = 'bold';
        ul.appendChild(li);
        for (let i = 0; i < errors.length; i++) {
            const li = document.createElement('li');
            li.innerText = `${i + 1}. ${errors[i]}`;
            ul.appendChild(li);
        } 
    } else {
        const li = document.createElement('li');
        li.innerText = `Dane zostały wysłane prawidłowo`;
        li.style.fontWeight = 'bold';
        ul.appendChild(li);
    }
}