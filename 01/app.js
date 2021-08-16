const formEl = document.querySelector('form');

formEl.addEventListener('submit' , addLi);

function addLi (e) {
    e.preventDefault();

    const firstName = formEl.elements[0].value;
    const secondName = formEl.elements[1].value;

    if(firstName.length !== 0 && secondName.length !== 0) {

        const ulList = document.querySelector('.users-list');
        const li = document.createElement('li');

        li.classList.add('user-list__person');
        li.innerText = `${firstName} ${secondName}`;

        ulList.appendChild(li);
    }
    else {
        alert('You must fill both fields')
    }
}