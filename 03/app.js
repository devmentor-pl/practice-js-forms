const fileEl = document.querySelector('input')
const imageList = document.querySelector('.images-list')
fileEl.addEventListener('change', addImages)

function addImages(e) {
    const files = e.target.files
    console.log(files.length)
    for(let i = 0; i < files.length; i++) {
        if( files && files[i].type.includes('image')) {
            const reader = new FileReader
            reader.onload = function(readerEvent) {
                const newLi = document.querySelector(".images-list__item").cloneNode(true)
                newLi.classList.remove('images-list__item--prototype')
                const imageElement = newLi.querySelector('img')
                imageElement.src = readerEvent.target.result
                
                const nameElement = newLi.querySelector('.images-list__item-name')
                nameElement.textContent = files[i].name

                const sizeElement = newLi.querySelector('.images-list__item-size')
                sizeElement.textContent = ((files[i].size / (1024 * 1024)).toFixed(2) + 'MB')
                imageList.appendChild(newLi)
            }
            reader.readAsDataURL(files[i])
        }
    }
}