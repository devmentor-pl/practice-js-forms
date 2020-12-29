document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    const filesEl = document.querySelector('.files');
    if(filesEl) {
        filesEl.addEventListener('change', showFiles);
    }
}

function showFiles(event) {
    event.preventDefault();
    const files =  [ ...event.target.files ];
    files.forEach(file => {
        if(file.type.includes('image')) {
            showOnList(file);
        }
    });
}

function showOnList(file) {
    const prototype = document.querySelector('.images-list__item--prototype');
    const liEl = prototype.cloneNode(true);

    liEl.classList.remove('images-list__item--prototype');
    
    const header = liEl.querySelector('.images-list__item-name');
    header.innerText = file.name;
    
    const reader = new FileReader();
    reader.onload = function(readerEvent) {
        const img = liEl.querySelector('.images-list__item-img');
        img.src = readerEvent.target.result;
    }
    
    const footer = liEl.querySelector('.images-list__item-size');
    footer.innerText = (file.size / (1024 ** 2)).toFixed(2) + " MB";
    
    console.log(liEl);
    document.querySelector('.images-list').appendChild(liEl);
    reader.readAsDataURL(file);
}