const formEl = document.querySelector("form");
const ulEl = document.createElement("ul");
formEl.appendChild(ulEl);
formEl.setAttribute("noValidate", true);
const errors = [];

formEl.addEventListener("submit", checkData);

function addStyle(element) {
  element.previousElementSibling.style.color = "red";
}
function removeStyle(element) {
  element.previousElementSibling.removeAttribute("style");
}

function checkEmail() {
  const email = document.querySelector('input[name="login"]');
  const emailValue = email.value;

  if (!emailValue.includes("@")) {
    addStyle(email);
    errors.push("Niepoprawny adres email!");
  } else {
    removeStyle(email);
  }
}

function checkPassword() {
  const password1 = document.querySelector('input[name="pass1"]');
  const password2 = document.querySelector('input[name="pass2"]');

  if (password1.value !== password2.value) {
    errors.push("Podane hasła są różne");
    addStyle(password1);
    addStyle(password2);
  }
  if (password1.value.length < 6) {
    errors.push("Hasło nie może mieć mniej niż 6 znaków");
    addStyle(password1);
    addStyle(password2);
  } else {
    removeStyle(password1);
    removeStyle(password2);
  }
}

function checkBox() {
  const checkBox = document.querySelector('input[name="accept"]');
  if (!checkBox.checked) {
    errors.push("Regulamin nie został zaakceptowany");
    addStyle(checkBox);
  } else {
    removeStyle(checkBox);
  }
}

function checkData(e) {
  e.preventDefault();
  // const email = e.target.elements.login;
  // const emailValue = email.value;

  // if (!emailValue.includes("@")) {
  //   addStyle(email);
  //   errors.push("Niepoprawny adres email!");
  // }

  checkEmail();

  // const password1 = e.target.elements.pass1;
  // const password2 = e.target.elements.pass2;

  // if (password1.value !== password2.value) {
  //   errors.push("Podane hasła są różne");
  //   addStyleError(password1);
  //   addStyleError(password2);
  // }
  // if (password1.value.length < 6) {
  //   errors.push("Hasło nie może mieć mniej niż 6 znaków");
  //   addStyleError(password1);
  //   addStyleError(password2);
  // }

  checkPassword();

  // const checkBox = e.target.elements.accept;
  // if (!checkBox.checked) {
  //   errors.push("Regulamin nie został zaakceptowany");
  //   addStyle(checkBox);
  // }

  checkBox();

  ulEl.innerHTML = " ";

  if (errors.length > 0) {
    e.preventDefault();

    for (let i = 0; i < errors.length; i++) {
      const liEl = document.createElement("li");
      liEl.innerText = errors[i];
      ulEl.appendChild(liEl);
    }
    errors.length = 0;
  } else console.log("DONE!");
}
