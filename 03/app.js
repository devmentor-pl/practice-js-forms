const fileInput = document.querySelector('.files input[type=file')
const listPrototypeStructure = document.querySelector('.images-list__item--prototype')

const getMBSize = (byteSize = 0) => {
    const byteToMB = byteSize / 1000000
    return byteToMB.toFixed(2)
}
const handleChange = function (e) {
    const files = e.target.files
    for (const file of files) {
        const reader = new FileReader()
        if (file.type.includes('image')) {
            const ulEl = listPrototypeStructure.parentElement
            const cloneListPrototype = listPrototypeStructure.cloneNode(true)
            cloneListPrototype.classList.remove('images-list__item--prototype')
            const newImg = cloneListPrototype.querySelector('.images-list__item-img')
            reader.onload = function (readerEvent) {
                newImg.src = readerEvent.target.result
                //removing file extension from name for example: .jpg (remove all after last dot)
                cloneListPrototype.firstElementChild.innerText = file.name.split('.').filter((el, i, arr) => arr.length - 1 !== i).join('.')
                cloneListPrototype.lastElementChild.innerText = `${getMBSize(file.size)} MB (${getMBSize(file.size) * 1000} KB)`
                ulEl.appendChild(cloneListPrototype)
            }

            reader.readAsDataURL(file)
        }
    }
}

fileInput.addEventListener('change', handleChange)