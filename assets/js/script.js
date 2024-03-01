const txt = `"1","Ogrodzieniec","Zamek Ogrodzieniec – ruiny zamku leżącego na Jurze Krakowsko-Częstochowskiej, wybudowanego w systemie tzw. Orlich Gniazd, we wsi Podzamcze w województwie śląskim, w powiecie zawierciańskim, około 2 km na wschód od Ogrodzieńca. Zamek został wybudowany w XIV – XV w. przez ród Włodków Sulimczyków.","99PLN","50PLN"
"2","Ojców","wieś w województwie małopolskim, w powiecie krakowskim, w gminie Skała, na terenie Wyżyny Krakowsko-Częstochowskiej, w Dolinie Prądnika, na Szlaku Orlich Gniazd. W Królestwie Polskim istniała gmina Ojców. W latach 1975–1998 miejscowość położona była w województwie krakowskim. W latach 1928–1966 Ojców miał status uzdrowiska posiadającego charakter użyteczności publicznej.","40PLN","15PLN`;

console.log(txt.split(/[\r\n]+/gm));

const panelForm = document.querySelector(".panel__form");
const excursionsFile = panelForm.querySelector(".uploader__input");

let arrangedFileData;
excursionsFile.addEventListener("change", readFile);
document.addEventListener("fileRead", initOperations);

function extractData(result) {
  const excursionList = result.split(/[\r\n]+/g);
  const excursionData = excursionList.map((excursion) => {
    return excursion
      .replace(/(?<="),(?=")|\r\n/g, "elementsToDelete")
      .split("elementsToDelete")
      .map((item) => {
        return item.replace(/^"|"$/g, "");
      });
  });

  return excursionData;
}

function showExcursions(arrangedFileData) {
  const panelExcursions = document.querySelector(".panel__excursions");
  const excursionsHTML = [];
  arrangedFileData.forEach((excursion) => {
    const excursionTemplate = document
      .querySelector(".excursions__item--prototype")
      .cloneNode(true);
    excursionTemplate.classList.remove("excursions__item--prototype");
    const title = excursionTemplate.querySelector(".excursions__title");
    const description = excursionTemplate.querySelector(
      ".excursions__description"
    );
    const price = excursionTemplate.querySelectorAll(".excursions__price");
    const adultPrice = price[0];
    const childPrice = price[1];

    excursionTemplate.setAttribute("id", excursion[0]);
    title.innerText = excursion[1];
    description.innerText = excursion[2];
    adultPrice.innerText = excursion[3];
    childPrice.innerText = excursion[4];

    excursionsHTML.push(excursionTemplate);
  });
  while (panelExcursions.firstChild) {
    panelExcursions.removeChild(panelExcursions.firstChild);
  }
  excursionsHTML.forEach((item) => {
    panelExcursions.appendChild(item);
  });
}
//Tutaj skończyłem!
function toBasket(evt) {
  evt.preventDefault();

  const adultNumber = evt.target.querySelector(`input[name = "adults"]`).value;
  const childNumber = evt.target.querySelector(
    `input[name = "children"]`
  ).value;
//Problem solution:
  if (isNaN(adultNumber) || isNaN(childNumber) || (adultNumber === '' && childNumber === '') ||
  (adultNumber === '0' || childNumber === '0')) {
    evt.target.querySelector(`input[name = "adults"]`).value = "";
    evt.target.querySelector(`input[name = "children"]`).value = "";
    return alert("Fill fields correctly");
  }
  // title, adultprice, childprice, number of tickets
  const basket = [];

  const summary = document.querySelector(".summary");
  const summaryItemTemplate = summary
    .querySelector(".summary__item--prototype")
    .cloneNode(true);
  summaryItemTemplate.classList.remove("summary__item--prototype");
  console.log(summaryItemTemplate);

  const summaryPrices = summaryItemTemplate.querySelector(".summary__prices");
  let summaryAdultPrices;
  let summaryChildPrices;

  if (adultNumber > 0) {
    const adultPrice = arrangedFileData[evt.target.parentNode.id - 1][3];
    summaryAdultPrices = `dorośli: ${adultNumber} x ${adultPrice}PLN`;
  }

  if (childNumber > 0) {
    const childPrice = arrangedFileData[evt.target.parentNode.id - 1][4];
    summaryChildPrices = `dzieci: ${childNumber} x ${childPrice}PLN`;
  }

  if (summaryAdultPrices && summaryChildPrices) {
    summaryPrices.innerText = summaryAdultPrices + "," + summaryChildPrices;
  } else if (summaryAdultPrices) {
    summaryPrices.innerText = summaryAdultPrices;
  } else if (summaryChildPrices) {
    summaryPrices.innerText = summaryChildPrices;
  }

  console.log(summaryPrices);
}

function initOperations(evt) {
  showExcursions(arrangedFileData);
  const excursionsContainer = document.querySelector(".excursions");
  const ticketsInputList = excursionsContainer.querySelectorAll(
    'input[name="adults"], input[name="children"]'
  );

  ticketsInputList.forEach((input) => {
    input.addEventListener("keyup", validateNumberTickets);
  });
  ticketsInputList.forEach((input) => {
    input.addEventListener("paste", validateNumberTickets);
  });
  excursionsContainer.addEventListener("submit", toBasket);
}

function readFile(evt) {
  const file = evt.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (evt) => {
      const result = evt.target.result;
      arrangedFileData = extractData(result);
      fireFileRead();
    };
  }
}
// Great solution for asynchronous reader.onload
function fireFileRead() {
  const newEvent = new CustomEvent("fileRead", { bubbles: false });
  document.dispatchEvent(newEvent);
}
//Problem solution:
function validateNumberTickets(evt) {
  if (evt.type === "paste") {
    evt.preventDefault();
    return alert(
      `It's just a number. Do you really need to paste something in here? ☺️`
    );
  }

  // protection againts pasting
  // can't start with 0
  // has to be a number
  const value = evt.target.value;

  if (isNaN(value)) {
    evt.target.value = value.match(/^[0-9]*/);
    alert("Input has to be a number!");
  }

  if (/^0/.test(value)) {
    evt.target.value = "";
    alert("You can't order 0 number of tickets.");
  }

  if (value > 100) {
    evt.target.value = "";
    alert("We can't sell more than 100 tickets.");
  }
}