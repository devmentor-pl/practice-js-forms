const fileInput = document.querySelector('input')

const showFileData = function (e) {
	const file = e.target.files[0]
	const imgListItem = document.querySelector('.images-list__item.images-list__item--prototype')

	if (file && file.type.includes('image')) {
		const reader = new FileReader()
		let listItemClone = imgListItem.cloneNode(true)
		addAnotherGraphicFile(listItemClone, reader, file)
	}
}
const addAnotherGraphicFile = function (listItemClone, reader, file) {
	const imgList = document.querySelector('.images-list')
	const fileName = file.name
	const fileSize = file.size
	const fileSizeInMB = (fileSize / (1024 * 1024)).toFixed(2)
	for (let i = 0; i < fileInput.files.length; i++) {
		imgList.appendChild(listItemClone)
		listItemClone.style.display = 'block'

		reader.onload = function (readerEvent) {
			const newImg = document.createElement('img')
			newImg.src = readerEvent.target.result
			listItemClone.children[0].innerText = fileName
			listItemClone.children[1].src = newImg.src
			listItemClone.children[2].innerText = `${fileSizeInMB} MB`
		}

		reader.readAsDataURL(file)
	}
}

fileInput.addEventListener('change', showFileData)
