const formEl = document.forms['form1'];
const ulEl = document.querySelector('ul');


if(formEl){
    formEl.addEventListener('submit', handleSubmit);
}

function handleSubmit (e){
    e.preventDefault();

    let firstName = formEl['firstName'].value;
    let lastName = formEl['lastName'].value;

    const liEl = document.createElement('li');
    liEl.textContent = firstName + ' ' + lastName;

    ulEl.appendChild(liEl);
    console.log(liEl);
    
    
}