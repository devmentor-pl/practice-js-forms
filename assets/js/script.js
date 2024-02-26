const txt = `"1","Ogrodzieniec","Zamek Ogrodzieniec – ruiny zamku leżącego na Jurze Krakowsko-Częstochowskiej, wybudowanego w systemie tzw. Orlich Gniazd, we wsi Podzamcze w województwie śląskim, w powiecie zawierciańskim, około 2 km na wschód od Ogrodzieńca. Zamek został wybudowany w XIV – XV w. przez ród Włodków Sulimczyków.","99PLN","50PLN"
"2","Ojców","wieś w województwie małopolskim, w powiecie krakowskim, w gminie Skała, na terenie Wyżyny Krakowsko-Częstochowskiej, w Dolinie Prądnika, na Szlaku Orlich Gniazd. W Królestwie Polskim istniała gmina Ojców. W latach 1975–1998 miejscowość położona była w województwie krakowskim. W latach 1928–1966 Ojców miał status uzdrowiska posiadającego charakter użyteczności publicznej.","40PLN","15PLN`;

console.log( txt.split(/[\r\n]+/gm) );

const panelForm = document.querySelector('.panel__form');
const excursions = panelForm.querySelector('.uploader__input');

excursions.addEventListener('change', readExcursionsFile);

function readExcursionsFile (evt) {
/*   const id
  const place
  const description
  const adultPrice
  const childPrice */

const excursionTemplate = document.querySelector(
  ".excursions__item--prototype"
).cloneNode(true);
excursionTemplate.classList.remove(
  "excursions__item--prototype"
);

const file = evt.target.files[0];

  const reader = new FileReader();
  
  reader.onload = evt => {
    const result = evt.target.result;
    extractData(result);
  }

  reader.readAsText(file);
}
/* 
Problem:
*/
    function extractData (result) {
      const resultNoCommas = result.match(/("[^"]*"|[^,\r\n]+)/g).map(item => item.replace(/"/g, ''));
      console.log(resultNoCommas);
    }

/*     
    function insertData */