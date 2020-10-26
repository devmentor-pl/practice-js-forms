const fileEl = document.querySelector('input[type="file"]');
const listEl = document.querySelector('.images-list');
const imageContainerProto = document.querySelector('.images-list__item');
const imageProto = document.querySelector('.images-list__item-img');


fileEl.addEventListener('change', showImage);

function showImage(e) {

    const files = [...e.target.files];

    files.forEach(function (file) {

        if (file && file.type.includes('image')) {

            const imageContainerClone = imageContainerProto.cloneNode(true);
            imageContainerClone.classList.remove('images-list__item--prototype');

            const header = imageContainerClone.querySelector('header');
            const footer = imageContainerClone.querySelector('footer');

            listEl.appendChild(imageContainerClone);
            const reader = new FileReader();

            reader.onload = function (readerEvent) {
                const newImg = imageContainerClone.querySelector('img');
                newImg.classList.add('images-list__item-img')
                newImg.src = readerEvent.target.result;

                imageContainerClone.insertBefore(newImg, footer);

                header.textContent = file.name;
                footer.textContent = (file.size / 1000000).toFixed(2) + ' MB';
            }
            reader.readAsDataURL(file);
        }
    })



}