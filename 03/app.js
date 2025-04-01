const fileInput = document.querySelector('input[type="file"]')
const imagesList = document.querySelector('.images-list')
const imagesTemplate = document.querySelector('.images-list__item--prototype')

fileInput.addEventListener('change', handleFileInputChange)

function handleFileInputChange(e) {
    const selectedFiles = e.target.files

    for(const file of selectedFiles) {
        if(!file.type.includes('image')) {
            continue
        }
        const newItem = imagesTemplate.cloneNode(true)
        newItem.classList.remove('images-list__item--prototype')
        
        const fileName = newItem.querySelector('.images-list__item-name')
        const fileSize = newItem.querySelector('.images-list__item-size')
        const fileImg = newItem.querySelector('.images-list__item-img')

        fileName.innerText = file.name
        fileSize.innerText = (file.size / (1024 * 1024)).toFixed(2) + ' MB'
        fileImg.src = URL.createObjectURL(file)

        imagesList.appendChild(newItem)
    }
}
