const inputEl = document.querySelector('[type="file"]');
const imagesList = document.querySelector('.images-list');
const imageItemProto = imagesList.children[0];

function roundNumber(number) {
    return number.toFixed(2);
}

inputEl.addEventListener('change', function(e) {
    const filesList = e.target.files;
    const filesListArr = Array.from(filesList);
    filesListArr.forEach(function(file) {
        if(file && file.type.includes('image')) {
            const reader = new FileReader();
            reader.onload = function(readerEvent) {
                const liEl = imageItemProto.cloneNode(true);
                liEl.classList.remove('images-list__item--prototype');
                [header, img, footer] = liEl.children;
                header.innerText = file.name;
                img.src = readerEvent.target.result;
                const fileSizeInMB = file.size / 1048576;
                footer.innerText = `${roundNumber(fileSizeInMB)}MB`;
                imagesList.appendChild(liEl);
            }
            reader.readAsDataURL(file);
        } else {
            alert('Nie wybrano pliku graficznego');
        }
    })
})