const formEl = document.querySelector('form');
formEl && formEl.addEventListener('submit', checkData);

const inputsList = [...formEl.elements];
inputsList.forEach((input) => {
  input.addEventListener('input', resetStyles);
});

function resetStyles() {
  this.style.border = '';
  if (this.previousElementSibling.tagName === 'LABEL') {
    this.previousElementSibling.style.color = '';
  }
}

function checkData(e) {
  e.preventDefault();
  const errors = [];
  const email = e.target.elements.login;
  const password1 = e.target.elements.pass1;
  const password2 = e.target.elements.pass2;
  const accept = e.target.elements.accept;
  if (!email.value.includes('@')) {
    errors.push(email);
  }
  if (password1.value.length < 6) {
    errors.push(password1);
  }
  if (password1.value !== password2.value) {
    errors.push(password2);
  }
  if (!accept.checked) {
    errors.push(accept);
  }

  if (errors.length > 0) {
    errors.forEach((el) => {
      if (el === accept) {
        el.previousElementSibling.style.color = 'red';
      } else {
        el.style.border = '1px solid red';
      }
    });
  } else {
    console.log('Done');
  }
}
