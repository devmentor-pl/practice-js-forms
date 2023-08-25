const form = document.querySelector("form");
const msgList = document.querySelector("ul");
let msgArray = [];
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const firstName = form.elements[0].value;
  const lastName = form.elements[1].value;
  const street = form.elements[2].value;
  const houseNumber = form.elements[3].value;
  const zipCode = form.elements[5].value;
  const city = form.elements[6].value;
  const voivodeship = form.elements[7].value;

  const error = [];
  const regex = new RegExp("^[0-9]{2}-[0-9]{3}$");

  if (firstName.trim() === "") {
    showMessage("first name is required!!!");
    error.push(firstName);
  }
  if (lastName.trim() === "") {
    showMessage("last name is required !!!");
    error.push(lastName);
  }
  if (street.trim() === "") {
    showMessage("street is required!!!");
    error.push(street);
  }
  if (houseNumber.trim() === "") {
    showMessage("house number is required!!!");
    error.push(houseNumber);
  }
  if (regex.test(zipCode) === false) {
    showMessage("zip code is not valid!!!");
    error.push(zipCode);
  }
  if (city.trim() === "") {
    showMessage("city is required!!!");
    error.push(city);
  }
  if (voivodeship.trim() === "") {
    showMessage("voivodeship is required!!!");
    error.push(voivodeship);
  }
  if (error.length === 0) {
    msgArray = [];
    msgList.innerHTML = "";
    console.log("done");
  }
}

function showMessage(message) {
  const msg = document.createElement("li");
  msg.innerText = message;
  if (!msgArray.includes(message)) {
    msgArray.push(message);
    msgList.appendChild(msg);
  }
}
