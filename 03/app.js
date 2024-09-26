const input = document.querySelector('input')

if (input) {
    input.addEventListener('change', readFiles)
}

function readFiles(e) {
    const files = e.target.files

    for (let i = 0; i < files.length; i++) {

        if (files[i].type.includes('image')) {
            const reader = new FileReader

            reader.onload = function (readerEvent) {
                createNewItem(readerEvent, files[i])
            }
            reader.readAsDataURL(files[i]);
        }
    }
}

function createNewItem(e, file) {
    const itemPrototype = document.querySelector('.images-list__item--prototype')

    if (itemPrototype) {
        const newItem = itemPrototype.cloneNode(true)
        newItem.classList.remove('images-list__item--prototype')

        const header = newItem.children[0]
        const img = newItem.children[1]
        const footer = newItem.children[2]

        header.textContent = file.name
        img.setAttribute('src', e.target.result)
        footer.textContent = (file.size / (1024 * 1024)).toFixed(2) + "MB"

        addItemToList(newItem)
    }
}

function addItemToList(item) {
    const list = document.querySelector('.images-list')

    if (list) {
        list.appendChild(item)
    }
}
