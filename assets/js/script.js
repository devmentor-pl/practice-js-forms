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
// Problem: Validation type
// What would be the best way to validate number of tickets?
  if (!toBasketValidate(adultNumber, childNumber)) {
    return alert('invalid');
  }
  //Validation:
  //1. only numbers
  //2. no 0 nor '';

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

function toBasketValidate (adultNumber, childNumber) {
  const adultString = adultNumber.toString();
  const childString = childNumber.toString();
  const rule = /^[0-9]*$/;
  if (rule.test(adultString) || rule.test(childString)) {
    return true;
  }
}