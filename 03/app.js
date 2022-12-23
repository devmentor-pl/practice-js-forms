const fileEl = document.querySelector('[type="file"]');
const ul = document.querySelector('ul');
const proto = ul.firstElementChild;

fileEl.addEventListener('change', readFiles);

function readFiles(e) {
	const files = e.target.files;

	for (let file of files) {
		if (file && file.type.includes('image')) {
			const reader = new FileReader();

			reader.onload = function (readerEvent) {
				const sizeMB = file.size / 1048576;
				const fileName = file.name;

				const newLi = proto.cloneNode(true);
				const newHeader = newLi.querySelector('header');
				const newImg = newLi.querySelector('img');
				const newFooter = newLi.querySelector('footer');

				newLi.classList.remove('images-list__item--prototype');
				newHeader.innerText = fileName;
				newImg.src = readerEvent.target.result;
				newFooter.innerText = `${sizeMB.toFixed(2)}MB`;

				ul.appendChild(newLi);
			};

			reader.readAsDataURL(file);
		} else {
			alert('Przesyłany plik musi być zdjęciem!');
		}
	}
}
