const formEl = document.querySelector('form');

formEl.addEventListener('submit' , addLi);

function addLi (e) {
    e.preventDefault();

    const firstName = formEl.elements[0].value;
    const secondName = formEl.elements[1].value;

    const ulList = document.querySelector('.users-list');

    const li = document.createElement('li');
    li.innerHTML = `${firstName} ${secondName}`;

    ulList.appendChild(li);
}

