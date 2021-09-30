const fileEl = document.querySelector('input');
const imgList = document.querySelector('.images-list');

fileEl.addEventListener('change', readFile);

function readFile(e) {
	for (const file of e.target.files) {
		if (file && file.type.includes('image')) {
			const reader = new FileReader();

			reader.onload = function (readerEvent) {
				const newImg = document.createElement('img');
				const newLi = document.createElement('li');
				const newHeader = document.createElement('header');
				const newFooter = document.createElement('footer');

				newImg.src = readerEvent.target.result;

				addClass(newImg, 'images-list__item-img');
				addClass(newLi, 'images-list__item');
				addClass(newHeader, 'images-list__item-name');
				addClass(newFooter, 'images-list__item-size');

				newHeader.innerText = file.name;
				newFooter.innerText = `${(file.size / 1000000).toFixed(2)}`;

				appendChild(imgList, newLi);
				appendChild(newLi, newHeader);
				appendChild(newLi, newImg);
				appendChild(newLi, newFooter);
			};
			reader.readAsDataURL(file);
		}
	}
}

function addClass(tag, className) {
	tag.classList.add(className);
}

function appendChild(parent, child) {
	parent.appendChild(child);
}
