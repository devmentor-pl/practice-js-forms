document.addEventListener('DOMContentLoaded', init);

function init() {
    const fileEl = document.querySelector('[type="file"]')
    fileEl.addEventListener('change', showInfoFile);
}

function showInfoFile(event) {
    if(this.files.length) {
        const listEl = [...event.target.files];
        listEl.forEach(function(element) {
            readFile(element);
        });
    }   
}

function readFile(element) {
    if(element && element.type === 'image/png') { 
        const reader = new FileReader();
        console.log(reader);
        
        reader.onload = function(readerEvent) {
            const newListEl = document.querySelector('.images-list__item--prototype').cloneNode(true);
            // console.log(newListEl);
            newListEl.setAttribute('class', 'images-list__item');
            const itemChildren = newListEl.children;
            itemChildren[0].textContent = element.name;
            itemChildren[2].textContent = Math.round(element.size / 1.e4) / 100 +" MB";
            itemChildren[1].src = readerEvent.target.result;  
            const ulEl = document.querySelector('.images-list')
            ulEl.appendChild(newListEl);    
        };
        reader.readAsDataURL(element);
    }
}
