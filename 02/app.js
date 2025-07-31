document.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("DOM ok");

  const formEl = document.querySelector("form");
  const labelList = document.querySelectorAll("label");

  if (formEl) {
    formEl?.addEventListener("submit", submitHandler);
  }

  function submitHandler(e) {
    e.preventDefault();

    const loginEl = formEl.elements.login;
    const pass1El = formEl.elements.pass1;
    const pass2El = formEl.elements.pass2;
    const acceptEl = formEl.elements.accept;

    const errors = [];

    if (loginEl.value.indexOf("@") === -1) {
      errors.push(loginEl.previousElementSibling);
    }

    if (pass1El.value !== pass2El.value || pass2El.value.length < 6) {
      errors.push(pass1El.previousElementSibling);
      errors.push(pass2El.previousElementSibling);
    }

    if (!acceptEl.checked) {
      errors.push(acceptEl.previousElementSibling);
    }

    resetErrors();

    if (errors.length === 0) {
      console.log("done");
    } else {
      showErrors(errors);
    }
  }
  function resetErrors() {
    labelList.forEach((label) => {
      label.style.color = "";
    });
  }

  function showErrors(err) {
    err.forEach((label) => {
      label.style.color = "red";
    });
  }
}
