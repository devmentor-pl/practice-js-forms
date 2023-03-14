const formEl = document.querySelector("form");
formEl.noValidate = true;

formEl.addEventListener("submit", formValidate);

function formValidate(e) {
  e.preventDefault();

  const email = e.target["login"].value;
  const pass1 = e.target["pass1"].value;
  const pass2 = e.target["pass2"].value;
  const confirm = e.target["accept"];
  const errors = [];

  if (!email.includes("@")) {
    errors.push(e.target["login"]);
  }
  if ((pass1.length < 6 && pass1 !== pass2) || pass1.length === 0) {
    errors.push(e.target["pass1"]);
  }

  if ((pass2.length < 6 && pass2 !== pass1) || pass2.length === 0) {
    errors.push(e.target["pass2"]);
  }
  if (!confirm.checked) {
    errors.push(e.target["accept"]);
  } else {
    console.log("done");
  }

  errors.forEach(function (err) {
    err.style.border = "1px solid red ";
  });
}
