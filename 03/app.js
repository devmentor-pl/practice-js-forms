document.addEventListener('DOMContentLoaded', function(){

const fileEl = document.querySelector('[type="file"]')
fileEl.addEventListener('change', showInfoFile);

function showInfoFile(event) {
    if(this.files.length) {
        const listEl = [...this.files];
        listEl.forEach(function(element) {
            const newElLi = document.querySelector('.images-list__item--prototype').cloneNode(true);
            newElLi.setAttribute('class', 'images-list__item');
            
            const newElLiItems = newElLi.children;
            newElLiItems[0].textContent = element.name;
            // newElLiItems[1].setAttribute = element.name;
            newElLiItems[2].textContent = Math.round(element.size / 1.e4) / 100 +" MB";

            const ulEl = document.querySelector('.images-list')
            ulEl.appendChild(newElLi);
        });
    }

}


});