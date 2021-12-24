const inputEl = document.querySelector('input[type="file"]');
const imagesList = document.querySelector('.images-list');
const imagesListItem = document.querySelector('.images-list__item');
inputEl.addEventListener('change', showImages);

function convertToMb(initSize){
    return imgSizeMb = (initSize / (1024*1024)).toFixed(2); // The toFixed() method converts a number into a string, rounding to a specified number of decimals.
}

function cloneSection(){
    const cloneImgSection = imagesListItem.cloneNode(true);
    cloneImgSection.classList.remove('images-list__item--prototype');
    imagesList.appendChild(cloneImgSection);
    return cloneImgSection;
}

function setData(clone,src,name,size){
    clone.querySelector('img').setAttribute('src',src);
    clone.querySelector('header').innerText = 'Nazwa pliku to: ' + name;
    clone.querySelector('footer').innerText = 'Rozmiar pliku to: ' + size + ' MB ';
}

function showImages(e){
    const files = e.target.files;
    for(let i=0; i<files.length; i++){
        const file = files[i];
        if(file.type.includes('image')){
            const reader = new FileReader();
            reader.onload = function(e){
                const imgSrc = e.target.result
                const imgName = file.name;
                const imgSize = convertToMb(file.size);
                const cloneImgSection = cloneSection();
                setData(cloneImgSection,imgSrc,imgName,imgSize);
            };
            reader.readAsDataURL(file);
        }
    }
}


