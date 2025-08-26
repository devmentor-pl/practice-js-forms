// Twoim zadaniem będzie wyświetlenie w .images-list wszystkich wybranych w polu <input> plików graficznych (.type.includes('image')). Aby je przechwycić, wykorzystaj event typu change.

// Następnie wykorzystaj strukturę z elementu .images-list__item--prototype (możesz ją sklonować). Zauważ jednak, że element o tej klasie jest niewidoczny dla użytkownika.

// Zwróć uwagę również na to, że nasz input typu file pozwala wybrać więcej niż jeden plik. Z tego powodu przy prezentowaniu wybranych przez użytkownika plików należy użyć pętli for.

// W elementach o odpowiedniej klasie wyświetl nazwę i rozmiar pliku w MB z dwoma miejscami po przecinku.

const fileEl = document.querySelector('input');
const ulEl = document.querySelector('ul');
fileEl.addEventListener('change', showInfoFile)

function showInfoFile(e) {
    const files = Array.from(e.target.files)
    const prototype = document.querySelector('.images-list__item--prototype')
    for (const file of files) {
        const newEl = prototype.cloneNode(true);

        newEl.classList.remove('images-list__item--prototype')
        const img = newEl.querySelector('img');
        if (file && file.type.includes('image')) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (e) {
                const fileSize = newEl.querySelector('.images-list__item-size')
                fileSize.innerText = bytesToMB(file.size);
                const fileName = newEl.querySelector('.images-list__item-name')
                fileName.innerText = file.name;
                img.setAttribute('src', e.target.result);
                img.innerText = 'fileSize';
                console.log(file.name, fileSize)
            }
            ulEl.appendChild(newEl)
        } else {
            alert('Choose IMG file')
        }
    }
}

function bytesToMB(bytes) {
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}


