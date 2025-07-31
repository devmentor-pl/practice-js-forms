const fileEl = document.querySelector('input');
const itemPrototype = document.querySelector('.images-list__item--prototype');
const list = document.querySelector('.images-list');

fileEl.addEventListener('change', readFile);

function readFile(e){
    e.preventDefault();
    const files = e.target.files;
    
    for(let file of files){
        if(file && file.type.includes('image')){
            const reader = new FileReader();
            reader.onload = function(readerEvent){

                const clone = itemPrototype.cloneNode(true);
                const cloneName = clone.querySelector('.images-list__item-name');
                const cloneImg = clone.querySelector('.images-list__item-img');
                const cloneSize = clone.querySelector('.images-list__item-size');
                clone.classList.remove('images-list__item--prototype');
                const imgSrc = readerEvent.target.result;
                cloneName.innerText = file.name;
                cloneSize.innerText = (file.size /(1024*1024)).toFixed(2) + "MB";
                cloneImg.setAttribute('src', imgSrc);
                list.appendChild(clone);
            }
            reader.readAsDataURL(file);
        }
    }


}