const formEl = document.querySelector('form');
const ulEl = document.querySelector('ul');

if (formEl) {
  formEl.noValidate = true;
  formEl.addEventListener('submit', handleSubmit);
}

function displayErrors(arr) {
  arr.forEach(function(el) {
    const liEl = document.createElement('li');
    liEl.textContent = el;
    ulEl.appendChild(liEl);
  })
}

function handleSubmit(e) {
  e.preventDefault();

  const errors = [];
  
  const emailEl = formEl.elements.login;
  const pass1 = formEl.elements.pass1;
  const pass2 = formEl.elements.pass2;
  const acceptEl = formEl.elements.accept;

  if(emailEl.value.length === 0 || !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailEl.value)) {
    errors.push('Dane w pole email są niepoprawne')
  }

  if(pass1.value.length === 0) {
    errors.push('Dane w polu hasło są nieprawidłowe')
  }

  if(pass1.value !== pass2.value) {
    errors.push('Podane hasła nie są jednakowe')
  }

  if (!acceptEl.checked) {
    errors.push('Proszę zaakceptować regulamin')
  }

  ulEl.innerHTML = "";
  if (errors.length === 0) {
    console.log('done')

    Array.from(formEl.elements).forEach(function (el) {
      if(el.type !== 'submit') {
        el.value = '';
      }
    })
  } else {
    displayErrors(errors);
  }
}