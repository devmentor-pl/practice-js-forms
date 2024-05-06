const fileEl = document.querySelector('input')
const imagesList = document.querySelector('.images-list')

fileEl.addEventListener('change', showImage)

function showImage(e) {
    const file = e.target.files[0]

    console.log(file.name, file.size, file.type);
}

