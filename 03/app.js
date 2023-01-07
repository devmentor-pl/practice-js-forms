const fileEl = document.querySelector('[type="file"]');
const ul = document.querySelector('ul');

fileEl.addEventListener('change', readFiles);

function readFiles(e) {
	const files = e.target.files;

	for (let file of files) {
		if (file && file.type.includes('image')) {
			const reader = new FileReader();

			reader.onload = function (readerEvent) {
				const newLi = createListElement();
				createListHeader(newLi, file);
				createListFooter(newLi, file);
				createListImg(newLi, readerEvent);

				ul.appendChild(newLi);
			};

			reader.readAsDataURL(file);
		} else {
			alert('Przesyłany plik musi być zdjęciem!');
		}
	}
}

function createListElement() {
	const proto = ul.firstElementChild;
	const li = proto.cloneNode(true);
	li.classList.remove('images-list__item--prototype');
	return li;
}

function createListHeader(listEl, file) {
	const header = listEl.querySelector('header');
	const fileName = file.name;
	header.innerText = fileName;
}

function createListFooter(listEl, file) {
	const footer = listEl.querySelector('footer');
	const sizeMB = file.size / 1048576;
	footer.innerText = `${sizeMB.toFixed(2)}MB`;
}

function createListImg(listEl, readerEvent) {
	const img = listEl.querySelector('img');
	img.src = readerEvent.target.result;
}
