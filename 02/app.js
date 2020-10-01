document.addEventListener('DOMContentLoaded', initEvents);

function initEvents() {
  const form = document.querySelector('form');
  form.addEventListener('submit', checkData);
  // const label = document.querySelector('label');
  // console.log(label)
}

function checkData(e) {
  e.preventDefault();
  const emailInp = e.target.elements.login;
  const pass1Inp = e.target.elements.pass1;
  const pass2Inp = e.target.elements.pass2;
  const checkBox = e.target.elements.accept;
  const errors = [];
  const correct = [];
  function clearCorrect() {
    correct.forEach(element =>
      element.previousElementSibling.style.color = 'inherit')
  }

  if (!emailInp.value.includes('@')) {
    console.log('Include @ in the email address')
    errors.push(emailInp)
  } else { correct.push(emailInp) }
  if (pass1Inp.value.length < 7) {
    console.log('Password should have more than 6 characters');
    errors.push(pass1Inp)
  } else { correct.push(pass1Inp) }
  if (pass1Inp.value !== pass2Inp.value) {
    console.log('Second password incorrect')
    errors.push(pass2Inp)
  } else { correct.push(pass2Inp) }
  if (!checkBox.checked) {
    console.log('You must accept the regulations')
    errors.push(checkBox)
  } else { correct.push(checkBox) }
  if (errors.length > 0) {
    e.preventDefault();
    errors.forEach(error => {
      error.previousElementSibling.style.color = 'red';
    })
    clearCorrect();
  } else {
    console.log('done');
    clearCorrect();
  }
}