document.addEventListener('DOMContentLoaded', init)

const inputEl = document.querySelector('input')

function init() {    
    if(inputEl) {
        inputEl.addEventListener('change', showImages)
    }    
}

function showImages(e) {
    const filesList = Array.from(e.target.files)

    const imagesList = document.querySelector('.images-list')
    const prototypeEl = document.querySelector('.images-list__item--prototype')

    filesList.forEach(function(file) {
        if(file.type.includes('image')) {
            const newImg = prototypeEl.cloneNode(true)
            const imgName = newImg.querySelector('.images-list__item-name')
            const imgFile = newImg.querySelector('.images-list__item-img')
            const imgSize = newImg.querySelector('.images-list__item-size')

            const reader = new FileReader()

            reader.addEventListener('load', function(e) {
                newImg.classList.remove('images-list__item--prototype')
                imgName.innerText = file.name   
                imgSize.innerText = (file.size / (1024*1024)).toFixed(2) + 'MB'
                imagesList.appendChild(newImg)

                const imgSrc = e.target.result
                imgFile.src = imgSrc   
            })                
            
            reader.readAsDataURL(file)
        } else {
            alert('The file ' + file.name + ' is not a graphic file! Please upload an image.')
        }
    })
}