const inputEl = document.querySelector('input');

if (inputEl) {
    inputEl.addEventListener('change', showImages)
}

function showImages(e) {
    const imagesList = document.querySelector('.images-list')
    const imagePrototypeEl = document.querySelector('.images-list__item--prototype')
    const files = Array.from(e.target.files)

    files.forEach(function (file) {

        if (file.type.includes('image')) {
            alert('choosen file IS an image')

        } else {
            alert('choosen file is NOT an image')
        }
    })
}