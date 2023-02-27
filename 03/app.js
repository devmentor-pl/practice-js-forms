const inpFile = document.querySelector('input[type="file"]')
const imgList = document.querySelector('.images-list')
const itemPrototype = document.querySelector('.images-list__item--prototype')
inpFile.addEventListener('change', showInfoFile)

function showInfoFile(e) {
	const fileList = e.target.files

	for (let i = 0; i < fileList.length; i++) {
		const file = e.target.files[i]

		if (file.type.includes('image')) {
			const liItem = itemPrototype.cloneNode(true)
			liItem.classList.remove('images-list__item--prototype')

			const imgName = liItem.querySelector('.images-list__item-name')
			const imgSize = liItem.querySelector('.images-list__item-size')
			imgSize.textContent = (file.size / 1024 / 1024).toFixed(2) + ' MB'
			imgName.textContent = file.name

			getSrc(file, liItem)
			imgList.appendChild(liItem)
		} else {
			console.log('Please select only image files')
		}
	}
}

function getSrc(file, item) {
	const reader = new FileReader()

	reader.onload = function (readerEvent) {
		const img = item.querySelector('img')
		img.src = readerEvent.target.result
	}
	reader.readAsDataURL(file)
}

