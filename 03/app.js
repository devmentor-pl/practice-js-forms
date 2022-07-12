const fileEl = document.querySelector("input");
const ulEl = document.querySelector(".images-list");
const liEl = document.querySelector(".images-list__item");
fileEl.addEventListener("change", readFile);

function readFile(e) {
	const file = e.target.files[0];
	const fileName = file.name;
	const fileSize = file.size;

	if (file && file.type.includes("image")) {
		const reader = new FileReader();

		reader.onload = function (readerEvent) {
			const newLi = liEl.cloneNode(true);
			newLi.classList.remove("images-list__item--prototype");
			newLi.firstElementChild.nextElementSibling.src =
				readerEvent.target.result;
			console.log(fileName);
			newLi.firstElementChild.innerText = fileName;
			newLi.lastElementChild.innerText =
				(Math.round(fileSize * 0.001) / 100).toFixed(2) + " MB";
			ulEl.appendChild(newLi);
		};
		reader.readAsDataURL(file);
	}
}
