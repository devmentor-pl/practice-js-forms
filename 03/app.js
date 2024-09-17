const fileEl = document.querySelector('input');
fileEl.addEventListener('change', showImg);

function showImg(e) {
    const file = [...e.target.files];
    const imgList = document.querySelector('.images-list__item');
    file.forEach(function (item) {
        if (item && item.type.includes('image')) {
            //console.log(item);
            const imgListClone = imgList.cloneNode(true);
            imgListClone.classList.remove('images-list__item--prototype');
            imgListClone.children[0].textContent = item.name;
            imgListClone.children[2].textContent = (Number(item.size) / (1024 * 1024)).toFixed(2) + 'MB';
            document.querySelector('.images-list').appendChild(imgListClone);

            const reader = new FileReader();
            reader.onload = function (readerEvent) {
                const newImg = document.createElement('img');
                newImg.src = readerEvent.target.result;
                imgListClone.children[1].setAttribute('src', newImg.src)
            };
            reader.readAsDataURL(item);
        }


    })

}