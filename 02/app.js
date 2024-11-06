document.addEventListener("DOMContentLoaded", init);

let errors = [];

function init() {
  const formElement = document.querySelector("form");
  const labelList = document.querySelectorAll("label");

  formElement.addEventListener("submit", function (e) {
    e.preventDefault();

    const { login, pass1, pass2, accept } = formElement.elements;

    if (login.value.indexOf("@") === -1) {
      errors.push(login.previousElementSibling);
    }

    if (pass1.value !== pass2.value || pass1.value.length <= 6) {
      errors.push(pass1.previousElementSibling);
      errors.push(pass2.previousElementSibling);
    }

    if (!accept.checked) {
      errors.push(accept.previousElementSibling);
    }

    labelList.forEach(function (item) {
      item.style.color = "";
    });

    if (errors.length === 0) {
      console.log("Done!");
    } else {
      errors.forEach(function (item) {
        item.style.color = "red";
      });
    }
    errors = [];
  });
}
