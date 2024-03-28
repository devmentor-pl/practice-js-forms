const formEl = document.querySelector("form");
formEl.setAttribute("novalidate", true);
formEl.addEventListener("submit", checkData);

function checkData(e) {
  e.preventDefault();
  const login = e.target.elements.login;
  console.log(login);
  const pass1 = e.target.elements.pass1;
  const pass2 = e.target.elements.pass2;
  const checkbox = e.target.elements.accept;
  const reg = /.{6}/;
  const errors = [];

  const inputList = document.querySelectorAll("input");
  inputList.forEach(function (input) {
    input.parentElement.style.color = "";
  });

  if (!login.value.includes("@")) {
    errors.push(login);
    console.log("login error");
  }
  if (!reg.test(pass1.value) && !reg.test(pass2.value)) {
    errors.push(pass1);
    errors.push(pass2);
    console.log("password to short");
  }
  if (pass1.value !== pass2.value) {
    errors.push(pass1);
    errors.push(pass2);
    console.log("password error");
  }
  if (!checkbox.checked) {
    errors.push(checkbox);
    console.log("checkbox error");
  }
  if (errors.length === 0) {
    console.log("done");
  } else {
    errors.forEach(function (error) {
      error.parentElement.style.color = "red";
    });
  }
}
