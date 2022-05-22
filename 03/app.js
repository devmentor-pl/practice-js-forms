const inputEl = document.querySelector('input');
const liProto = document.querySelector('.images-list__item--prototype');
const liProtoParent = liProto.parentElement;

inputEl.addEventListener('change', showInfo);

function showInfo(e) {
    const files = e.target.files;
    const images = [...files].filter(file => {
        return file.type.includes("image");
    })

    images.forEach(el => {
        liProtoClone = liProto.cloneNode(true);
        liProtoClone.style.display = "block"
        const name = liProtoClone.querySelector('.images-list__item-name');
        const img = liProtoClone.querySelector('.images-list__item-img');
        const size = liProtoClone.querySelector('.images-list__item-size');
        liProtoParent.appendChild(liProtoClone);
        const reader = new FileReader();
        reader.onload = function (readerEvent) {
            img.src = readerEvent.target.result;
        }

        name.innerText = el.name;
        const sizeToMB = (el.size / 1024 / 1024).toFixed(2);
        size.innerText = sizeToMB + 'MB'

        reader.readAsDataURL(el)
    })
}