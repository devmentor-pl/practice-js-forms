const fileElement = document.querySelector("input");
const imagesList = document.querySelector(".images-list");

fileElement.addEventListener("change", addFiles);

function addFiles(e) {
	const filesList = e.target.files;
	const filesListArray = Array.from(filesList);

	filesListArray.forEach(function (file) {
		if (file && file.type.includes("image")) {
			const newImgElement = createImgElement(file);

			const [, link] = newImgElement.children;

			const reader = new FileReader();
			reader.onload = function (readerEvent) {
				link.setAttribute("src", readerEvent.target.result);
			};
			reader.readAsDataURL(file);
		}
	});
}

const createImgElement = function (fileExample) {
	const imgPrototypeElement = document.querySelector(
		".images-list__item--prototype"
	);
	const imgElement = imgPrototypeElement.cloneNode(true);
	imgElement.classList.remove("images-list__item--prototype");

	// imgElement.children[0].textContent = fileExample.name;
	// imgElement.children[2].textContent =
	// 	(Number(fileExample.size) / (1024 * 1024)).toFixed(2) + "MB";

	const [name, , size] = imgElement.children;
	name.textContent = fileExample.name;
	size.textContent = Number(fileExample.size) / (1024 * 1024).toFixed(2) + "MB";

	imagesList.appendChild(imgElement);
	return imgElement;
};
