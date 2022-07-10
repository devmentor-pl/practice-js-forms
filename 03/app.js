const inputEl = document.querySelector('[type="file"]')
inputEl.addEventListener('change', addImgs)
const imgListUl = document.querySelector('.images-list')

function addImgs(e) {
    const files = []
    const file = e.target.files[0]
    if (file && file.type.includes('image')) {
        files.push(file)
    }
    console.log(files)
    files.forEach(function (file) {
        if (file && file.type.includes('image')) {
            const reader = new FileReader()
            reader.onload = function (readerEvent) {
                let imgEl = document.createElement('li')
                const imgProto = document.querySelector('.images-list__item--prototype')
                imgEl = imgProto.cloneNode(true)
                imgListUl.appendChild(imgEl)
                imgEl.style.display = "block"
                const newImg = imgEl.querySelector('img')
                newImg.src = readerEvent.target.result
                const itemName = imgEl.querySelector('[class="images-list__item-name"]')
                itemName.innerText = file.name
                const itemSize = imgEl.querySelector('[class="images-list__item-size"]')
                itemSize.innerText = [(Math.round(file.size / 1024 / 1024 * 100)) / 100] + ' ' + 'MB'
            };
            reader.readAsDataURL(file)

        }
    })
}