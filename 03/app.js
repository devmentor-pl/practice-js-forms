const imagesList = document.querySelector('.images-list');
const input = document.querySelector('input');

input.addEventListener('change', addImages);

function addImages(e) {
    const files = e.target.files;
    for (let i = 0; i < files.length; i++) {



        if (files[i].type.includes('image')) {

            const headerSection = newImage.querySelector('header');
            const footerSection = newImage.querySelector('footer');
            const imageSection = newImage.querySelector('img');

            const imagePrototype = document.querySelector('.images-list__item--prototype');
            const newImage = imagePrototype.cloneNode(true);
            newImage.classList.remove('images-list__item--prototype');
            document.body.appendChild(newImage);


            const reader = new FileReader();
            reader.onload = function (readerEvent) {
                imageSection.src = readerEvent.target.result;
                footerSection.innerText = ((files[i].size / 1024) / 1024).toFixed(2) + 'MB';
                headerSection.innerText = files[i].name.replace(/\.([a-zA-Z]{1,5})/, '');
            };
            reader.readAsDataURL(files[i]);
        }
    }
}
