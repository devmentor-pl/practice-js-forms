const fileEl = document.querySelector('input');
const ulList = document.querySelector('.images-list');
const liElem = document.querySelector('.images-list__item');

fileEl.addEventListener('change', showInfoFiles);

function showInfoFiles(e) {
	const files = e.target.files;

	for (const file of files) {
		if (file.type.includes('image')) {
			const liElemClone = liElem.cloneNode(true);
			liElemClone.classList.remove('images-list__item--prototype');

			const fileName = liElemClone.querySelector('.images-list__item-name');
			const fileNameWithoutExtension = file.name.split('.').slice(0, -1).join();
			fileName.textContent = fileNameWithoutExtension;

			const fileSize = liElemClone.querySelector('.images-list__item-size');
			fileSize.textContent = (file.size / (1024 * 1024)).toFixed(2) + ' MB';

			const reader = new FileReader();
			reader.onload = function (e) {
				const imgSrc = e.target.result;
				const picture = liElemClone.querySelector('.images-list__item-img');
				picture.src = imgSrc;
			};

			reader.readAsDataURL(file);

			ulList.appendChild(liElemClone);
		}
	}
	//usuwam ten pierwszy li("macierzysty szablon") bo nie jest juz potrzebny
	liElem.remove();
}
