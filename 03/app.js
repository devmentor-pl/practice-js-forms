const fileEl = document.querySelector('input');
const imgList = document.querySelector('.images-list');

fileEl.addEventListener('change', readFile);

function readFile(e) {
	for (const file of e.target.files) {
		if (file && file.type.includes('image')) {
			const reader = new FileReader();

			reader.onload = function (readerEvent) {
				const newImg = prepareElement('img');
				const newLi = prepareElement('li');
				const newHeader = prepareElement('header');
				const newFooter = prepareElement('footer');

				newImg.src = readerEvent.target.result;

				const classObj = [
					{ element: newImg, className: 'images-list__item-img' },
					{ element: newLi, className: 'images-list__item' },
					{ element: newHeader, className: 'images-list__item-name' },
					{ element: newFooter, className: 'images-list__item-size' },
				];
				addClassFromObj(classObj);

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

function prepareElement(tag) {
	return document.createElement(tag);
}

function addClassFromObj(classObj) {
	classObj.forEach((el) => {
		console.log(el.element);
		el.element.classList.add(el.className);
	});
}

function appendChild(parent, child) {
	parent.appendChild(child);
}
