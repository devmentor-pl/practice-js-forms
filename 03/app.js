
const fileEl = document.querySelector('input');
fileEl.addEventListener('change', showFile);

function showFile(e) {
    const files = e.target.files;

    for (let i = 0; i < files.length; i++) {

        if (files[i] && files[i].type.includes('image')) {
            const ulEl = document.querySelector('.images-list');
            const liEl = document.querySelector('.images-list__item--prototype');
            const liElClone = liEl.cloneNode(true);
            liElClone.classList.remove('images-list__item--prototype');


            
            const reader = new FileReader();

            reader.onload = function (readerEvent) {
                const headerEl = liElClone.querySelector('header');
                const imgEl = liElClone.querySelector('img');
                const footerEl = liElClone.querySelector('footer');


                headerEl.textContent = files[i].name;
                imgEl.src = readerEvent.target.result;
                footerEl.textContent = (files[i].size * 0,000001).toFixed(2);

            };

            ulEl.appendChild(liElClone);
            
            reader.readAsDataURL(files[i]);

        }
    }
}