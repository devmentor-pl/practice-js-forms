const formEl = document.querySelector("form");
const ulEl = document.querySelector(".users-list");

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = formEl.elements[0].value;
  const lastName = formEl.elements[1].value;
  console.log(formEl.elements[0].value);
  console.log(formEl.elements[1].value);

  if (firstName !== "" && lastName !== "") {
    const list = document.createElement("li");
    list.setAttribute("class", "users-list__person");
    ulEl.appendChild(list);
    list.innerText = firstName + " " + lastName;
  } else alert("Proszę wypełnić pola formularza");
});
