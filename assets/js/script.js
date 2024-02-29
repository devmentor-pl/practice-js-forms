const txt = `"1","Ogrodzieniec","Zamek Ogrodzieniec – ruiny zamku leżącego na Jurze Krakowsko-Częstochowskiej, wybudowanego w systemie tzw. Orlich Gniazd, we wsi Podzamcze w województwie śląskim, w powiecie zawierciańskim, około 2 km na wschód od Ogrodzieńca. Zamek został wybudowany w XIV – XV w. przez ród Włodków Sulimczyków.","99PLN","50PLN"
"2","Ojców","wieś w województwie małopolskim, w powiecie krakowskim, w gminie Skała, na terenie Wyżyny Krakowsko-Częstochowskiej, w Dolinie Prądnika, na Szlaku Orlich Gniazd. W Królestwie Polskim istniała gmina Ojców. W latach 1975–1998 miejscowość położona była w województwie krakowskim. W latach 1928–1966 Ojców miał status uzdrowiska posiadającego charakter użyteczności publicznej.","40PLN","15PLN`;

console.log(txt.split(/[\r\n]+/gm));

const panelForm = document.querySelector(".panel__form");
const excursionsFile = panelForm.querySelector(".uploader__input");
excursionsFile.addEventListener("change", showExcursions);
const excursionsContainer = document.querySelector(".excursions");
excursionsContainer.addEventListener("submit", toBasket);

/* 
function readExcursionsFile(evt) {
  const file = evt.target.files[0];
  if (file) {
    const reader = new FileReader();

    reader.onload = (evt) => {
      const result = evt.target.result;
      const arrangedData = extractData(result);
      insertData(arrangedData);
    };

    reader.readAsText(file);
  }
} */

function extractData(result) {
  const eachExcursion = result.split(/[\r\n]+/g);
  const arrangedData = eachExcursion.map((excursion) => {
    return excursion
      .replace(/(?<="),(?=")|\r\n/g, "elementsToDelete")
      .split("elementsToDelete")
      .map((item) => {
        return item.replace(/^"|"$/g, "");
      });
  });

  return arrangedData;
}

function insertData(arrangedData) {
  const panelExcursions = document.querySelector(".panel__excursions");
  const readyData = [];
  arrangedData.forEach((excursion) => {
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

    readyData.push(excursionTemplate);
  });
  while (panelExcursions.firstChild) {
    panelExcursions.removeChild(panelExcursions.firstChild);
  }
  readyData.forEach((item) => {
    panelExcursions.appendChild(item);
  });
}

function toBasket(evt) {
  evt.preventDefault();
  const basket = [];
  const adultNumber = evt.target;
  console.log(adultNumber);
/* 
1. Name, adultPrice, childPrice.

   */
}

function showExcursions(evt) {
  const arrangedData = readExcursionFile(evt);
  console.log(arrangedData);
}
//Problem: I HAVE TO push extractedData to arrangedData!
function readExcursionFile(evt) {
  const file = evt.target.files[0];
  if (file) {
    const reader = new FileReader();
    const arrangedData = [];
    reader.readAsText(file);
    reader.onload = (evt) => {
      const result = evt.target.result;
      const extractedData = extractData(result);
      console.log(extractedData);
      arrangedData.push(extractedData);
    };
    return arrangedData;
  }
}