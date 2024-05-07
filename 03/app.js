const fileEl = document.querySelector('input');
const imagesList = document.querySelector('.images-list');
const imageContainerPrototype = document.querySelector('.images-list__item--prototype');

const renderPhotos = function (e) {
  const files = e.target.files;
  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    if (file && file.type.includes('image')) {
      const reader = new FileReader();
      reader.onload = function (readerEvent) {
        const imageContainer = imageContainerPrototype.cloneNode(true);
        imageContainer.style.display = 'block';
        const newImg = imageContainer.querySelector('.images-list__item-img');
        const nameElement = imageContainer.querySelector('.images-list__item-name');
        const sizeElement = imageContainer.querySelector('.images-list__item-size');

        newImg.src = readerEvent.target.result;
        nameElement.textContent = file.name;
        sizeElement.textContent = (file.size / (1024 * 1024)).toFixed(2) + ' MB';
        imagesList.appendChild(imageContainer);
      };
      reader.readAsDataURL(file);
    }
  }
};

fileEl.addEventListener('change', renderPhotos);