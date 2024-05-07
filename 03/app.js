const fileEl = document.querySelector("input")
const imagesList = document.querySelector(".images-list")

fileEl.addEventListener("change", showImage)

function showImage(e) {
	const files = e.target.files

	for (let i = 0; i < files.length; i++) {
        const file = files[i]
        console.log(file);

		if (file && file.type.includes("image")) {
			const reader = new FileReader()

			reader.onload = function (readerEvent) {
				const newLiForImg = document.createElement("li")
				newLiForImg.classList.add("images-list__item")

				const newHeaderforImg = document.createElement("header")
				newHeaderforImg.classList.add("images-list__item-name")
				newHeaderforImg.innerText = file.name
				newLiForImg.appendChild(newHeaderforImg)

				const newImg = document.createElement("img")
				newImg.classList.add("images-list__item-img")
				newImg.src = readerEvent.target.result
				newLiForImg.appendChild(newImg)

				const newImgFooter = document.createElement("footer")
				newImgFooter.classList.add("images-list__item-size")
				newImgFooter.innerText = (file.size / (1024 * 1024)).toFixed(2)
				newLiForImg.appendChild(newImgFooter)

				imagesList.appendChild(newLiForImg)
			}
			reader.readAsDataURL(file)
		}
	}

	// console.log("Nazwa pliku", file.name)
	// console.log('Rozmiar pliku', file.size)
	// console.log('Typ pliku', file.type);
}
