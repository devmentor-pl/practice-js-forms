const fileEl = document.querySelector('input');
const liEl = document.querySelector('.images-list__item');
const ulEl = document.querySelector('.images-list');

fileEl.addEventListener('change', readFile);

function renderImage(file, readerEvent, liElement, ulElement){
        const liElCopy = liElement.cloneNode(true);
        liElCopy.style.display = 'block';
        liElCopy.classList.remove('images-list__item--prototype');

        const fileName = liElCopy.querySelector('.images-list__item-name');
        const fileSize = liElCopy.querySelector('.images-list__item-size');

        fileName.textContent = file.name;
        fileSize.textContent = `${(file.size/(1024*1024)).toFixed(2)} MB`
        const newImg = document.createElement('img');
        newImg.src = readerEvent.target.result;

        liElCopy.appendChild(newImg);
        ulElement.appendChild(liElCopy);
}

function readFile(e) {
    const files = Array.from(e.target.files);

    if(files){

        files.forEach((file) => {
            if(file.type.includes('image')){

                const reader = new FileReader();
                reader.onload = function(readerEvent){
                    renderImage(file, readerEvent, liEl, ulEl);
                }
                reader.readAsDataURL(file);
            }
        })
    }
}