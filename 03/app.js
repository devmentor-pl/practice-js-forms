const section = document.querySelector('.files')
const input = section.querySelector('input')

input.addEventListener('change', showImages)

function showImages(e) {
    const files = e.target.files
    for (let file of files) {
        if (file.type.includes('image')) {
            const newLi = cloneLi()
            const header = newLi.querySelector('.images-list__item-name')
            const img = newLi.querySelector('.images-list__item-img')
            const footer = newLi.querySelector('.images-list__item-size')
            const size = bToMb(file.size)
            getImg(file,img)
            header.innerText = file.name
            footer.innerText = `${size} MB`
        }
    }
}
function cloneLi() {
    const prototypeClass = 'images-list__item--prototype'
    const prototype = document.querySelector(`.${prototypeClass}`)
    const ul = document.querySelector('.images-list')
    const duplicate = prototype.cloneNode(true)
    duplicate.classList.remove(prototypeClass)
    ul.appendChild(duplicate)
    return duplicate
}
function getImg(file,img) {
    const reader = new FileReader()
    reader.onload = function(readerEvent) {
        img.src = readerEvent.target.result
     }
    reader.readAsDataURL(file)
}

function bToMb(b) {
    const mb = Math.round(b /1024 / 1024 * 100) / 100
    return mb
}

