const formEl = document.querySelector('form');
formEl.addEventListener('submit', checkData);

function checkData(e) {
  e.preventDefault();

  const login = e.target.elements.login.value;
  const pass1 = e.target.elements.pass1.value;
  const pass2 = e.target.elements.pass2.value;
  const checkboxEl = document.getElementById('formAccept');
  const errors = [];

  if (!login.includes('@')) {
    errors.push('formLogin');
  }

  if (pass1.length < 6) {
    errors.push('formPass1');
  }

  if (pass2 !== pass1) {
    errors.push('formPass2');
  }

  if (!checkboxEl.checked) {
    errors.push('formAccept');
  }

  if (errors.length > 0) {
    e.preventDefault();
    document.querySelectorAll('label').forEach((label) => {
      label.style.color = 'black';
      errors.forEach((err) => {
        const errLabelId = document.querySelector(`label[for=${err}]`);
        errLabelId.style.color = 'red';
      });
    });
  } else {
    console.log('Done');
    document.querySelector('form').reset();
  }
}
