document.addEventListener('DOMContentLoaded', init);

function init() {
	console.log('DOM');
}

const input = document.querySelector('input');
const pEl = document.createElement('p');


input.addEventListener('change', showImg);

function showImg(e){
    const file = [...e.target.files];
    
    
    file.forEach(function(el){
        if (el && el.type.includes('image')) {
            addImg(el);
        } else {
            wrongFile(el);
        };
    })
}


function addImg(element) {
    pEl.innerText = "";
    const ulList = document.querySelector('.images-list');
    const liEl = document.querySelector('.images-list__item--prototype');
    const clone = liEl.cloneNode(true);
    clone.classList.remove('images-list__item--prototype');
    const liHeader = clone.querySelector('.images-list__item-name');
    const liImage = clone.querySelector('.images-list__item-img');
    const liFooter = clone.querySelector('.images-list__item-size');

    // Add text to footer and header
    liHeader.innerText = element.name;
    liFooter.innerText = (element.size / (1024* 1024)).toFixed(2) + 'MB';

    const reader = new FileReader();
    reader.onload = function(readerEvent){
        liImage.src = readerEvent.target.result;
        ulList.appendChild(clone);
    }

    reader.readAsDataURL(element);
}


function wrongFile(e){
    pEl.innerText = 'Please insert image file';
    pEl.style.color = 'red';
    document.body.appendChild(pEl);
}