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

function toBasket(evt) {
  evt.preventDefault();
  const adultNumber = evt.target.querySelector(`input[name = "adults"]`).value;
  const childNumber = evt.target.querySelector(
    `input[name = "children"]`
  ).value;

/*   if (
    isNaN(adultNumber) ||
    isNaN(childNumber) ||
    (adultNumber === "" && childNumber === "") ||
    adultNumber === "0" ||
    childNumber === "0"
  ) {
    evt.target.querySelector(`input[name = "adults"]`).value = "";
    evt.target.querySelector(`input[name = "children"]`).value = "";
    return alert("Fill fields correctly");
  } */
  // title, adultprice, childprice, number of tickets
  const fileData = arrangedFileData[evt.target.parentNode.id - 1];
  const basket = {};
  basket.title = fileData[1];
  basket.adultPrice = fileData[3];
  basket.adultNumber = adultNumber;
  basket.childPrice = fileData[4];
  basket.childNumber = childNumber;

  const summary = document.querySelector(".summary");
  const summaryItemTemplate = summary
    .querySelector(".summary__item--prototype")
    .cloneNode(true);
  summaryItemTemplate.classList.remove("summary__item--prototype");

  const title = summaryItemTemplate.querySelector(".summary__name");
  const summaryTotalPrice = summaryItemTemplate.querySelector(
    ".summary__total-price"
  );
  const summaryPrices = summaryItemTemplate.querySelector(".summary__prices");
  title.innerText = basket.title;
  summaryTotalPrice.innerText =
    basket.adultNumber * basket.adultPrice +
    basket.childNumber * basket.childPrice +
    "PLN";

  if (basket.adultNumber && basket.childNumber) {
    summaryPrices.innerText = `dorośli: ${basket.adultNumber} x ${basket.adultPrice}PLN, dzieci: ${basket.childNumber} x ${basket.childPrice}PLN.`;
  } else if (basket.adultNumber) {
    summaryPrices.innerText = `dorośli: ${basket.adultNumber} x ${basket.adultPrice}PLN.`;
  } else if (basket.childNumber) {
    summaryPrices.innerText = `dzieci: ${basket.childNumber} x ${basket.childPrice}PLN.`;
  }

  summary.appendChild(summaryItemTemplate);
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
//Problem attempt
  if (isNaN(value)) {
    alert("Input has to be a number!");
    setTimeout(() => {
      evt.target.value = value.match(/^[0-9]*/);
    }, 100);
  }

  if (/^0/.test(value)) {
    alert("You can't order 0 number of tickets.");
    setTimeout(() => {
      evt.target.value = "";
    }, 100);
  }

  if (value > 100) {
    alert("We can't sell more than 100 tickets.");
    setTimeout(() => {
      evt.target.value = "";
    }, 100);
  }
}
