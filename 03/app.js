const inputEl = document.querySelector('input');
const imagesListEl = document.querySelector('.images-list');

console.log(inputEl);

inputEl.addEventListener('change', showFile);


function showFile(ewent) {
    console.log(ewent.target.value);

    for (let i = 0; i < ewent.target.files.length; i++) {

        const file = ewent.target.files[i];
        console.log(ewent.target.files);

        if (file && file.type.includes('image')) {
            const reader = new FileReader();

            reader.onload = function (readerEvent) {
                const newImg = document.createElement('img');
                const newLi = document.createElement('li');
                const newHeader = document.createElement('header');
                const newFooter = document.createElement('footer');
                const imgSrc = readerEvent.target.result;


                imagesListEl.appendChild(newLi);
                newLi.classList.add('images-list__item');

                newLi.appendChild(newHeader);
                newHeader.classList.add('images-list__item-name');
                newHeader.innerText = file.name;

                newLi.appendChild(newImg);
                newImg.classList.add('images-list__item-img');
                newImg.setAttribute('src', imgSrc);

                newLi.appendChild(newFooter);
                newFooter.classList.add('images-list__item-size');
                newFooter.innerText = Number(file.size);
            };

            reader.readAsDataURL(file);
        }
    }



}

