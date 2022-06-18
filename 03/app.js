const fileEl = document.querySelector('input')
const liElement = document.querySelector('.images-list__item--prototype')

fileEl.addEventListener('change', readFile)

function readFile(e) {
    const files = e.target.files
    const imgFiles = []
    for (let i = 0; i < files.length; i++) {
        if (files[i].type.includes('image')) {
            imgFiles.push(files[i])
        }
    }
    
    const numberOfFiles = imgFiles.length
    const numberOfLiElements = liElement.parentElement.children.length
    
    if (numberOfFiles > 0 && numberOfFiles > numberOfLiElements) {
        liElement.style.display = 'block'
        for (let j = (numberOfLiElements + 1); j <= numberOfFiles; j++) {
            let cloneLiElement = liElement.cloneNode(true)
            liElement.parentElement.appendChild(cloneLiElement)
        }
    }

    for (let k = 0; k < imgFiles.length; k++) {

        const liElementItem = liElement.parentElement.children[k]
        const reader = new FileReader()

        reader.onload = function (readerEvent) {

            const imgSrc = readerEvent.target.result
            const imgName = imgFiles[k].name
            const imgSize = imgFiles[k].size

            liElementItem.children[0].innerText = 'File name: ' + imgName
            liElementItem.children[1].setAttribute('src', imgSrc)
            liElementItem.children[2].innerText = 'Size: ' + (Math.round(imgSize / 1024 / 1024 * 100)) / 100 + 'MB'
        }
        reader.readAsDataURL(imgFiles[k])


    }
}