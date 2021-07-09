const form = document.querySelector("form");
const messagesContainer = document.querySelector(".messages");
let messages = [];

const createMsgWhenInputIsEmpty = function (label) {
  const newMessage = document.createElement("li");
  newMessage.innerText = `Pole ${label.toLowerCase()} nie może być puste.`;
  messages.push(newMessage);
  return messages;
};

const createMsgWhenInputIsWrong = function (label, str) {
  const newMessage = document.createElement("li");
  newMessage.innerText = `Proszę wpisz poprawnie ${label.toLowerCase()}. ${label} ${str}`;
  messages.push(newMessage);
};

const validateString = function (input) {
  const regex = /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/;
  const value = input.value;
  const label = input.parentNode.innerText.trim();
  if (!value) {
    createMsgWhenInputIsEmpty(label);
  } else if (!value.match(regex)) {
    const str =
      "nie może zawierać numerów oraz znaków specjalnych oprócz myślnika.";
    createMsgWhenInputIsWrong(label, str);
  }
};

const validateNum = function (num) {
  const regex = /^\d{1,3}[a-z-A-Z\ \d#]{0,1}$/; // zaczyna sie od cyfry i pierwsz 2-3 miejsca moga byc cyfra, ostatnie miejsce musi byc litera, calosc nie moze byc dluzsza niz 4 pozycje
  const value = num.value;
  const label = num.parentNode.innerText.trim();
  if (!value) {
    createMsgWhenInputIsEmpty(label);
  } else if (!value.match(regex)) {
    const str = "może zawierać tylko numer od 1 do 999 i literę od A do Z.";
    createMsgWhenInputIsWrong(label, str);
  }
};

const validatePostcode = function (code) {
  const regex = /\d{2}-\d{3}/;
  const value = code.value;
  const label = code.parentNode.innerText.trim();
  if (!value) {
    createMsgWhenInputIsEmpty(label);
  } else if (!value.match(regex)) {
    const str = "może zawierać tylko cyfry i być w formacie 11-111.";
    createMsgWhenInputIsWrong(label, str);
  }
};

const validateSelect = function (region) {
  const value = region.value;
  const label = region.parentNode.innerText.trim().split(" ")[0];
  if (value === "") {
    const newMessage = document.createElement("li");
    newMessage.innerText = `Proszę wybierz ${label.toLowerCase()}.`;
    messages.push(newMessage);
  }
};

form.addEventListener("submit", function (e) {
  messagesContainer.innerHTML = "";
  const name = e.target.elements.firstName;
  validateString(name);
  const surname = e.target.elements.lastName;
  validateString(surname);
  const street = e.target.elements.street;
  validateString(street);
  const houseNum = e.target.elements.houseNumber;
  validateNum(houseNum);
  const flatNum = e.target.elements.flatNumber;
  validateNum(flatNum);
  const code = e.target.elements.zip;
  validatePostcode(code);
  const town = e.target.elements.city;
  validateString(town);
  const region = e.target.elements.voivodeship;
  validateSelect(region);
  if (messages.length > 0) {
    e.preventDefault();
    console.log(messages);
    messages.forEach(function (msg) {
      messagesContainer.appendChild(msg);
    });
    messages = [];
  } else {
    alert("Dane zostaly wprowadzone prawidlowo");
  }
});
