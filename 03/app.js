const fileEl = document.querySelector('input')
const liElements = document.querySelector('.images-list__item--prototype')
const imgElementName = document.querySelector('.images-list__item-name')
const imgElement = document.querySelector('.images-list__item-img')
const imgElementSize = document.querySelector('.images-list__item-size')

fileEl.addEventListener('change', readFile)

function readFile(e){
    const file = e.target.files[0]

    if(file && file.type.includes('image')){
        const reader = new FileReader()

        reader.onload = function(readerEvent) {
            
            liElements.style.display = 'block'
            
            const imgSrc = readerEvent.target.result
            const imgName = file.name
            const imgSize = file.size

            imgElement.setAttribute('src', imgSrc)
            imgElementName.innerText = 'File name: ' + imgName
            imgElementSize.innerText = 'Size: ' + (Math.round(imgSize / 1024 / 1024 *100))/100 + 'MB'


            console.log(imgSrc)
        }
        reader.readAsDataURL(file)
    }
}