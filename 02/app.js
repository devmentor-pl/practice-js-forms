const formEl = document.querySelector("form");
formEl.addEventListener("submit", submitHandler);
formEl.noValidate = true;

const labelsList = document.querySelectorAll("div label");

function submitHandler(e) {
  e.preventDefault();
  const errors = [];
  const email = formEl.elements.login;
  const password1 = formEl.elements.pass1;
  const password2 = formEl.elements.pass2;
  const isRegsAcceptes = formEl.elements.accept;

  if (!email.value.includes("@")) {
    errors.push(email);
  }

  if (password1.value.length < 6) {
    errors.push(password1);
  }

  if (password2.value !== password1.value) {
    errors.push(password2);
  }

  if (!isRegsAcceptes.checked) {
    errors.push(isRegsAcceptes);
  }

  labelsList.forEach(function (label) {
    label.style.color = "black";
  });

  if (errors.length === 0) {
    console.log("done");
  } else {
    errors.forEach(function (error) {
      error.previousElementSibling.style.color = "red";
    });
  }
}
