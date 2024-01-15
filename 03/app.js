// Znajdź elementy w drzewie DOM
const imagesList = document.querySelector('.images-list');
const inputEl = document.querySelector('input[type="file"]');
const prototypeItem = document.querySelector('.images-list__item--prototype');

// Nasłuchuj zmian w polu input (wybór plików)
inputEl.addEventListener('change', function(e) {
    // Przechwyć wszystkie wybrane pliki
    const capturedImgs = e.target.files;

    // Iteruj przez każdy przechwycony plik
    for (let i = 0; i < capturedImgs.length; i++) {
        const capturedImg = capturedImgs[i];
    
        // Sprawdź, czy przechwycony plik jest obrazem
        if (capturedImg && capturedImg.type.includes('image')) {
            
            // Pobierz nazwę i rozmiar pliku
            const fileName = capturedImg.name;
            const fileSize = capturedImg.size;
            const fileSizeMb = (fileSize / (1024 * 1024)).toFixed(2);

            // Sklonuj prototyp i dostosuj jego zawartość
            const prototypeClone = prototypeItem.cloneNode(true);
            prototypeClone.querySelector('.images-list__item-name').textContent = fileName;
            prototypeClone.querySelector('.images-list__item-size').textContent = fileSizeMb + ' MB ';
            prototypeClone.querySelector('.images-list__item-img').src = URL.createObjectURL(capturedImg);

            // Usuń klasę prototypu, dodaj klasę dla elementu listy, i dodaj do listy obrazów
            prototypeClone.classList.remove('images-list__item--prototype');
            prototypeClone.classList.add('images-list__item');
            imagesList.appendChild(prototypeClone);
        }
    }
});

// Obsługa kliknięcia na elemencie listy obrazów - przełącz klasę dla efektu powiększenia
imagesList.addEventListener('click', function(e) {
    const clickedItem = e.target.closest('.images-list__item');
    clickedItem.classList.toggle('images-list__item-img');
});
