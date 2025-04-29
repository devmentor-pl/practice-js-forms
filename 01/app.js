const form = document.querySelector("form");
const usersList = document.querySelector(".users-list");

const renderData = function (e) {
  e.preventDefault();
  let text = "";
  const labels = form.querySelectorAll("input");
  labels.forEach(function (el) {
    if (el.type != "submit") {
      text += el.value + " ";
    }
  });
  appendListItem(usersList, text);
};

form.addEventListener("submit", renderData);
console.log(form);

function appendListItem(list, txt) {
  const item = document.createElement("li");
  item.classList.add("user-list__person");
  item.innerText = txt;
  list.appendChild(item);
}
