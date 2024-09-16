const fileInput = document.querySelector('input');
const imgList = document.querySelector('ul');
const prototype = imgList.firstElementChild;

fileInput.addEventListener('change', openFile);

function openFile(e) {
	const fileList = Array.from(e.target.files);

	fileList.forEach((file) => {
		if (file.type.includes('image')) {
			const reader = new FileReader();

			reader.onload = () => createItemWithData(file, reader.result);
			reader.readAsDataURL(file);
		} else {
			alert('załadowany plik nie jest plikiem graficznym!');
		}
	});
}

function createItemWithData(file, result) {
	const newLi = prototype.cloneNode(true);
	const newImg = newLi.querySelector('.images-list__item-img');
	const newHeader = newLi.querySelector('.images-list__item-name');
	const newFooter = newLi.querySelector('.images-list__item-size');

	newLi.classList.remove('images-list__item--prototype');
	newImg.src = result;
	newHeader.innerText = file.name;
	newFooter.innerText = (file.size / (1024 * 1024)).toFixed(2) + 'mb';

	imgList.appendChild(newLi);
}
