const inputEl = document.querySelector('input[type="file"]');
inputEl.addEventListener('change', showImages);

const imagesList = document.querySelector('.images-list');
const imagesListItem = document.querySelector('.images-list__item');

function convertToMb(byteSize){
    return imgSizeMb = (byteSize / (1024*1024)).toFixed(2); // The toFixed() method converts a number into a string, rounding to a specified number of decimals.
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

                const cloneImgListItem = imagesListItem.cloneNode(true);
                imagesList.appendChild(cloneImgListItem);
                cloneImgListItem.classList.remove('images-list__item--prototype');

                cloneImgListItem.querySelector('img').setAttribute('src',imgSrc);
                cloneImgListItem.querySelector('header').innerText = 'Nazwa pliku to: ' + imgName;
                cloneImgListItem.querySelector('footer').innerText = 'Rozmiar pliku to: ' + imgSize + ' MB ';
            };
            reader.readAsDataURL(file);
        }
    }
}


