const imagesList = document.querySelector('.images-list');
const inputEl = document.querySelector('input[type="file"]');
const prototypeItem = document.querySelector('.images-list__item--prototype');

inputEl.addEventListener('change', function(e) {
    const capturedImg = e.target.files[0];
    if (capturedImg && capturedImg.type.includes('image')) {
        console.log('Przechwycono obraz', capturedImg);
        
        const fileName = capturedImg.name;
        const fileSize = capturedImg.size;
        const fileSizeMb = (fileSize / (1024 * 1024)).toFixed(2);

        const prototypeClone = prototypeItem.cloneNode(true);
        prototypeClone.querySelector('.images-list__item-name').textContent = fileName;
        prototypeClone.querySelector('.images-list__item-size').textContent = fileSizeMb + ' MB ';
        prototypeClone.querySelector('.images-list__item-img').src = URL.createObjectURL(capturedImg);

        prototypeClone.classList.remove('images-list__item--prototype');
        prototypeClone.classList.add('images-list__item-img');
        imagesList.appendChild(prototypeClone);
    }

});