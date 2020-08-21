// get form - form: HTML Collection
const form = document.querySelector('form');

// get data
let email = document.querySelector('input[id="formLogin"]');
let pass_1 = document.querySelector('input[id="formPass1"]');
let pass_2 = document.querySelector('input[id="formPass2"]');
let chkbox = document.querySelector('input[id="formAccept"]');

// add event listener onto the form
form.noValidate = true;
let errors = [];

form.addEventListener('submit', checkUser);

// get data and run rests
function checkUser(el) {
  el.preventDefault();
  errors.forEach(el => el.previousElementSibling.style.color = 'black');
  errors = [];

  // check if email has @, has, first character is not a dot
  const mailRegex = /^\S+(\.?)+@\S+$/

  if (mailRegex.test(email.value) === false) {
    errors.push(email);
  }
  if (pass_1.value.length < 6 || pass_2.value.length < 6) {
    errors.push(pass_1, pass_2);
  }
  if (pass_1.value !== pass_2.value) {
    errors.push(pass_1, pass_2);
  }
  if (chkbox.checked === false) {
    errors.push(chkbox);
    // alert('You must accept the terms and conditions.');
  } else if (errors.length === 0) {
    console.log('done');
    return true;
  };

  // color the <label> with errors

  // mam nadzieję że zrobiłem to dobrze, w każdym razie działa.
  // nie wiem czy tez powrót do poprzedniego koloru dziala jak nalezy

  if (errors.length > 0) {
    console.log(errors);

    errors.forEach(el => {
      el.previousElementSibling.style.color = 'red';
    });
  }
};