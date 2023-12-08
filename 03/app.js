const fileElement = document.querySelector('input')

fileElement.addEventListener('change', getData)

function changeName(name) {
    const dots = name.indexOf('.')
    const newName = name.slice(0, positionDot)
    return newName
}

function changeSize(size) {
    const newSize = (size / 1024 / 1024).toFixed(3)
    return newSize + 'MB'
}

function getData(e) {

    const files = e.target.files
    console.log(files)

    const filesArray = Array.from(files)
    const imagesList = document.querySelector('.images-list')

    filesArray.forEach(file => {
       const name = changeName(file.name) 
       const size = changeSize(file.size) 

       if(file.type.includes('image')) {
            const reader = new FileReader()
            reader.onload = function(event) {
                const srcImg = event.target.result
                imgToPage(imagesList, srcImg, name, size)
            }
            reader.readAsDataURL(file)
       } else {
           console.log('Pli nie został dodany', file.type)
       }
    })
}

function imgToPage(imagesList, srcImg, name, size) {

    const elementLi = imagesList.firstElementChild
    const newElementLi = elementLi.cloneNode(true)
    newElementLi.classList.remove('images-list__item--prototype')

    const elementName = newElementLi.querySelector('.images-list__item-name')
    elementName.innerText = name
    const imgElement = newElementLi.querySelector('.images-list__item-img')
    imgElement.src = srcImg
    const sizeElement = newElementLi.querySelector('.images-list__item-size')
    sizeElement.innerText = size

    imagesList.appendChild(newElementLi)
}