document.addEventListener("DOMContentLoaded", function () {
	const filesInput = document.querySelector(".files input");
	const imagesList = document.querySelector(".images-list");
	const prototypeItem = document.querySelector(".images-list__item--prototype");

	filesInput.addEventListener("change", function (event) {
		const files = event.target.files;

		for (let i = 0; i < files.length; i++) {
			const file = files[i];

			if (file.type.includes("image")) {
				createImage();
			}
		}
	});

	function createImage() {
		const newItem = prototypeItem.cloneNode(true);
		newItem.classList.remove("images-list__item--prototype");

		const itemName = newItem.querySelector(".images-list__item-name");
		itemName.textContent = file.name;

		const itemImg = newItem.querySelector(".images-list__item-img");
		itemImg.src = URL.createObjectURL(file);

		const itemSize = newItem.querySelector(".images-list__item-size");
		const fileSizeMB = file.size / (1024 * 1024);
		itemSize.textContent = fileSizeMB.toFixed(2) + " MB";

		imagesList.appendChild(newItem);
	}
});
