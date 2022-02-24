const inputEl = document.querySelector('input');
const ulEl = document.querySelector('ul');
const liEl = ulEl.firstElementChild;
inputEl.addEventListener('change', displayImages);

function displayImages(e) {
    const images = e.target.files;
    
    for(let i = 0; i < images.length; i++) {
        if(images[i].type.includes('image')) {
            const reader = new FileReader();
            const imagesListItem = liEl.cloneNode(true);
            imagesListItem.classList.remove('images-list__item--prototype');

            reader.onload = function(e) {
                const headerEl = imagesListItem.firstElementChild;
                const imgEl = headerEl.nextElementSibling;
                const footerEl = imgEl.nextElementSibling;
                headerEl.innerText = images[i].name;
                imgEl.src = e.target.result;
                const imageSizeInMB = ((images[i].size / 1048576).toFixed(2)) + ' MB';
                footerEl.innerText = imageSizeInMB;
                ulEl.appendChild(imagesListItem);
            }
            reader.readAsDataURL(images[i]);
        }
    }
}