let imageList = document.querySelector('.images-list');
let imageListItem = document.querySelector('.images-list__item');

document.querySelector('input').addEventListener('change', fileInputHandler);

function fileInputHandler(e) {
	e.preventDefault();
	[ ...e.target.files ].forEach((file) => displayFile(file));
}

function displayFile(file) {
	if (file.type.includes('image')) {
		let newLi = imageListItem.cloneNode(true);
		newLi.classList.remove('images-list__item--prototype');
		newLi.querySelector('header').textContent = file.name;
		newLi.querySelector('img').src = (window.URL || window.webkitURL).createObjectURL(file);
		newLi.querySelector('footer').textContent = `${(file.size / (1024 * 1024)).toFixed(2)} MB`;

		imageList.appendChild(newLi);
	}
}
