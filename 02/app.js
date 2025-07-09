const formEl = document.querySelector('form');
formEl.setAttribute('novalidate', 'true');

const emailEl = document.querySelector('#formLogin');
const passwordEl = document.querySelector('#formPass1');
const passwordEl2 = document.querySelector('#formPass2');

formEl.addEventListener('submit', hadleData);

function handleData(e) {
  e.preventDefault();
  const allLabels = formEl.querySelectorAll('label');
  allLabels.forEach((label) => (label.style.color = 'black'));

  const email = emailEl.value;
  const errors = [];
  const pass1 = e.target.elements.pass1.value;
  const pass2 = e.target.elements.pass2.value;
  const accept = e.target.elements.accept.checked;

  if (!email.includes('@')) {
    errors.push('label[for="formLogin"]');
  }

  if (pass1 !== pass2) {
    errors.push('label[for="formPass1"]');
    errors.push('label[for="formPass2"]');
  }
  if (pass1.length <= 6 || pass2.length <= 6) {
    ['label[for="formPass1"]', 'label[for="formPass2"]'].forEach((selector) => {
      if (!errors.includes(selector)) errors.push(selector);
    });
  }

  if (!accept) {
    errors.push('label[for="formAccept"]');
  }
  if (errors.length > 0) {
    errors.forEach((selector) => {
      const label = document.querySelector(selector);
      if (label) {
        label.style.color = 'red';
      }
    });
  } else {
    // Jeśli nie ma błędów
    console.log('done');
  }
}
