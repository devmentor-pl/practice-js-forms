function init() {

    const fileEl = document.querySelector('[type="file"]')
    fileEl.addEventListener('change', showInfoFile);



}
document.addEventListener('DOMContentLoaded', init);

function showInfoFile(event) {
    if(this.files.length) {
        const listEl = [...this.files];
        listEl.forEach(function(element) {
            const newListEl = document.querySelector('.images-list__item--prototype').cloneNode(true);
            // console.log(newListEl);
            newListEl.setAttribute('class', 'images-list__item');
            
            const newElLiItems = newListEl.children;
            newElLiItems[0].textContent = element.name;
            // console.log(element.target.result);
            // newElLiItems[1].setAttribute = element.name;
            readFile(element, newElLiItems[1]);
            newElLiItems[2].textContent = Math.round(element.size / 1.e4) / 100 +" MB";
            
            const ulEl = document.querySelector('.images-list')
            ulEl.appendChild(newListEl);
        });
    }

}

function readFile(element) {
    if(element && element.type === 'image/png') {//?dev Ja tu wpsać warunek element.type -zawiera co najmniej- image(oraz może zawierać inny ciąg znaków)? Wyrażeniem reg? A może jakoś inaczej? Prościej? 
        const reader = new FileReader();
        console.log(reader);
        
        reader.onload = function(readerEvent, locus) {
            locus.src = readerEvent.target.result;  //*see Tu jest cos nie tak bo to target result powinno być aktywne 
        };
        reader.readAsDataURL(element);
    }
}

//*edu Doczytać i przerobić jeszcze raz ten fragment o object FileReader() i .readAsDataURL(), dodatkowo poczytać o objrvy Blob()