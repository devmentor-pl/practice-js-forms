const fileEl = document.querySelector('input');
const paragraphEl = document.createElement('p');


fileEl.addEventListener('change', showFile);

function showFile(e){
    const file = [...e.target.files];
    
    
    file.forEach(function(el){
        if(el && el.type.includes('image')){
            addImg(el);
        } else {
            inncoretFile(el);
        };
    })
}


function addImg(element) {
    document.body.removeChild(paragraphEl);
    const ulList = document.querySelector('.images-list');
    const liEl = document.querySelector('.images-list__item--prototype');
    const cloneLiEl = liEl.cloneNode(true);
    cloneLiEl.classList.remove('images-list__item--prototype');
    const liHeadEl = cloneLiEl.querySelector('.images-list__item-name');
    const liImgEl = cloneLiEl.querySelector('.images-list__item-img');
    const liFooterEl = cloneLiEl.querySelector('.images-list__item-size');

    // Add text to footer and header
    liHeadEl.innerText = element.name;
    liFooterEl.innerText = (element.size / (1024* 1024)).toFixed(2) + 'MB';

    const reader = new FileReader();
    reader.onload = function(readerEvent){
        liImgEl.src = readerEvent.target.result;
        ulList.appendChild(cloneLiEl);
    }

    reader.readAsDataURL(element);
}


function inncoretFile(e){
    paragraphEl.innerText = 'Please insert image file';
    paragraphEl.style.color = 'red';
    document.body.appendChild(paragraphEl);
}