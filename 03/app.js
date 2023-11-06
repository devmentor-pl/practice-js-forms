const input = document.querySelector('input[type="file"]')
const imagesList = document.querySelector('.images-list')

input.addEventListener('change', showImage)

function showImage(e) {
	const files = e.target.files

	Array.from(files).forEach(item => {
		if (item && item['type'].split('/')[0] === 'image') {
			const reader = new FileReader()
			reader.onload = function (readerEvent) {
				const imagesListItem = document.querySelector('.images-list__item ')
				const newImagesListItem = imagesListItem.cloneNode(true)
				newImagesListItem.classList.remove('images-list__item--prototype')

				// Set src to item
				newImagesListItem.children[1].src = readerEvent.target.result

				// Set item name
				newImagesListItem.children[0].innerText = item.name.slice(0, item.name.indexOf('.'))

				// Set item size
				const size = item.size
				let sizeMB = (size / 1024 ** 2).toFixed(2) + ' MB'
				newImagesListItem.children[2].innerText = sizeMB

				imagesList.append(newImagesListItem)
			}

			reader.readAsDataURL(item)
		}
	})

	// for (item of files) {
	// 	if (item && item.type.includes('image/jpeg')) {
	// 		const reader = new FileReader()
	// 		reader.onload = function (readerEvent) {
	// 			const imagesListItem = document.querySelector('.images-list__item ')
	// 			const newImagesListItem = imagesListItem.cloneNode(true)
	// 			newImagesListItem.classList.remove('images-list__item--prototype')

	// 			// Set src to item
	// 			newImagesListItem.children[1].src = readerEvent.target.result

	// 			// Set item name
	// 			newImagesListItem.children[0].innerText = item.name.slice(0, item.name.indexOf('.'))

	// 			// Set item size
	// 			const size = item.size
	// 			let sizeMB = (size / 1024 ** 2).toFixed(2) + ' MB'
	// 			newImagesListItem.children[2].innerText = sizeMB

	// 			imagesList.append(newImagesListItem)
	// 		}

	// 		reader.readAsDataURL(item)
	// 	}
	// }
}
