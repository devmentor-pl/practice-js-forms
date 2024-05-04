const fileInput = document.querySelector("input")

const list = document.querySelector("li")
const imagesList = document.querySelector(".images-list");

fileInput.addEventListener('change', showInfo);

function showInfo(e) {

    for (let i = 0; i < fileInput.files.length; i++) {
        const file = fileInput.files[i];

        if (file && file.type.includes("image")) {
            const reader = new FileReader()
            reader.onload = function (readerEvent) {
                const newElement = list.cloneNode(true)
                newElement.classList.remove('images-list__item--prototype')
                const header = newElement.querySelector("header")
                const footer = newElement.querySelector("footer")
                const img = newElement.querySelector("img")
                img.src = readerEvent.target.result
                footer.innerText = Math.round((file.size / (1024 * 1024).toFixed(2)) * 100) / 100 + " MB"
                header.innerText = file.name
                imagesList.appendChild(newElement)
            }
            reader.readAsDataURL(file)
        }
    }
}