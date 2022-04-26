
const fileElement = document.querySelector('input')

fileElement.addEventListener('change', getData)

function getData(e) {
    // const file = e.target.files[0]

    // console.log(file.name)
    // console.log(file.size)
    // console.log(file.type)

    const files = e.target.files
    console.log(files)

    const filesArray = Array.from(files)
    console.log(filesArray)

    filesArray.forEach(file => {
       const name = file.name 
       const size = file.size 
       const type = file.type 
       console.log(name)
       console.log(size)
       console.log(type)

       if(file.type.includes('image')) {
            const reader = new FileReader()
            reader.onload = function(event) {
                const newImg = document.createElement('img')
                newImg.src = event.target.result
                document.body.appendChild(newImg)
                const srcImg = event.target.result
                imgToPage(srcImg, name, size)
            }
            reader.readAsDataURL(file)
       } else {
           console.log('File not image but', file.type)
       }
    })

}

function imgToPage(srcImg, name, size) {
    // console.log(srcImg)

    const imagesList = document.querySelector('.images-list')
    const elementLi = imagesList.firstElementChild
    console.log(elementLi)
    elementLi.classList.remove('images-list__item--prototype')
    const newElementLi = elementLi.cloneNode(true)
    // imagesList.firstElementChild.remove()
    console.log(newElementLi)

    const nameElement = newElementLi.querySelector('.images-list__item-name')
    nameElement.innerText = name
    const imgElement = newElementLi.querySelector('.images-list__item-img')
    imgElement.src = srcImg
    const sizeElement = newElementLi.querySelector('.images-list__item-size')
    sizeElement.innerText = size

    imagesList.appendChild(newElementLi)
}














