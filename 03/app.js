/*Naszym zadaniem będzie wyświetlenie w .images-list wszystkich wybranych (event change) w polu <input> plików graficznych (.type.includes('image')).

Należy wykorzystać strukturę z elementu .images-list__item--prototype (można go sklonować), przy czym należy zauważyć, że element o tej klasie jest niewidoczny dla użytkownika.

Zwróć uwagę również, że ten input typu file pozwala wybierać więcej niż jeden plik. Dlatego należy użyć pętli for przy prezentowaniu wybranych przez użytkownika plików.

Nie zapomnij o wyświetleniu nazwy i rozmiaru pliku w MB z dwoma miejscami po przecinku. */


const imagesList = document.querySelector ('.images-list');

const fileEl = document.querySelector('input');
fileEl.addEventListener('change' , readFile);

function readFile(e) {

    for (let i = 0; i < e.target.files.length; i++) {
        
    const file = e.target.files[i];

   if( file && file.type.incudes('image')) {
       const reader = new FileReader();

       reader.onload = function(readerEvent) {
           const newImage = document.createElement('img');
           newImage.src = readerEvent.target.result;

           imagesList.appendChild(newImage);
       };

const itemName = document.querySelector('.images-list__item-name');
const itemSize = document.querySelector('.images-list__item-size');











    }


       reader.readAsDataURL(file);
   }
}
