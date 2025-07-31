
const form = document.querySelector('form');
form.noValidate = true;
form.addEventListener('submit', checkData);
const ul = document.createElement('ul');
ul.classList.add('errors');

function checkData(e) {

    e.preventDefault();

    const emailAdressValue = e.target.elements.login.value;
    const emailAdressInput = e.target.elements.login;
    const errors = [];
    const password01 = e.target.elements.pass1;
    const password02 = e.target.elements.pass2;
    const acceptRegulations = e.target.elements.accept;

    if (emailAdressValue.length === 0) {
        errors.push('Get your email');
        emailAdressInput.parentElement.style.color = 'red';
        emailAdressInput.parentElement.style.fontWeight = 'bold';
    }
    if ((emailAdressValue.includes('@') === false) && (emailAdressValue.length > 0)) {
        errors.push('Email has not @ character');
        emailAdressInput.parentElement.style.color = 'red';
        emailAdressInput.parentElement.style.fontWeight = 'bold';
    } 
    if (password01.value !== password02.value) {
        errors.push('Passwords are different');
        password01.parentElement.style.color = 'red';
        password01.parentElement.style.fontWeight = 'bold';
        password02.parentElement.style.color = 'red';
        password02.parentElement.style.fontWeight = 'bold';
    }
    if (password01.value.length < 6) {
        errors.push('Password No 1 is shorter than 6 characters');
        password01.parentElement.style.color = 'red';
        password01.parentElement.style.fontWeight = 'bold';
    }
    if (password02.value.length < 6) {
        errors.push('Password No 2 is shorter than 6 characters');
        password02.parentElement.style.color = 'red';
        password02.parentElement.style.fontWeight = 'bold';
    }
    if (acceptRegulations.checked === false) {
        errors.push('The regulations are not accepted');
        acceptRegulations.parentElement.style.color = 'red';
        acceptRegulations.parentElement.style.fontWeight = 'bold';
    }

    if (errors.length > 0) {
        form.appendChild(ul);
        ul.innerHTML = '';
        ul.style.listStyleType = 'none';
        const li = document.createElement('li');

        if (errors.length === 1) {
            li.innerText = `You made ${errors.length} mistake:`;
        } else {
            li.innerText = `You made ${errors.length} mistakes:`;
        }

        li.style.fontWeight = 'bold';
        ul.appendChild(li);
        for (let i = 0; i < errors.length; i++) {
            const li = document.createElement('li');
            li.innerText = `${i + 1}. ${errors[i]}`;
            ul.appendChild(li);
        };
    } else {
        const errors = document.querySelector('.errors');
        form.appendChild(ul);
        ul.innerHTML = '';
        ul.style.listStyleType = 'none';
        const li = document.createElement('li');
        li.innerText = `Done`;
        li.style.fontWeight = 'bold';
        ul.appendChild(li);
        if (errors) {
            while (errors.children.length > 0) {
                errors.removeChild(errors.lastElementChild);
            }
        }
        console.log('Done');
    }
} 
