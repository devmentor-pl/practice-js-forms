const fileEl = document.querySelector('input');
const ulEl = document.querySelector('ul');
fileEl.addEventListener('change', readFiles);

function readFiles(e) {


    if (ulEl && ulEl.hasChildNodes()) {
        const childrenUlEl = ulEl.children;

        let i = 1;
        while (childrenUlEl.length > i) {
            ulEl.removeChild(childrenUlEl[i]);
        }
    }


    for (let i = 0; i < e.target.files.length; i++) {
        const file = e.target.files[i];

        if (file && !file.type.includes('image')) {
            alert('ERROR !!! Select an image file !!!')
        }

        if (file && file.type.includes('image')) {

            const reader = new FileReader();

            reader.onload = function (readerEvent) {

                const liEl = document.querySelector('li');
                const imgEl = liEl.querySelector('img');
                const headerEl = liEl.firstElementChild;
                const footerEl = liEl.lastElementChild;

                headerEl.innerText = file.name
                imgEl.src = readerEvent.target.result;

                const sizeRound = file.size / 1000;;
                footerEl.innerText = Number(Math.round(sizeRound + 'e+2') + 'e-2');

                liEl.classList.remove('images-list__item--prototype');

                if (ulEl && liEl && i < e.target.files.length - 1) {
                    const cloneLiEl = liEl.cloneNode(true);
                    ulEl.appendChild(cloneLiEl)
                }

            }
            reader.readAsDataURL(file);
        }
    }
}
