document.addEventListener("DOMContentLoaded", init);

function init() {
	const colorInput = document.querySelector('input[name="color"]');
	const opacityInput = document.querySelector('input[name="opacity"]');
	const boxElement = document.querySelector(".box");
	setBoxShadow(boxElement, "#000000");

	// Dodaj nasłuchiwacze zdarzeń dla obu inputów
	colorInput.addEventListener("input", updateBoxShadow);
	opacityInput.addEventListener("input", updateBoxShadow);

	// Ustawienie domyślnego cienia przy załadowaniu strony
	updateBoxShadow();
}

function updateBoxShadow() {
	const colorInput = document.querySelector('input[name="color"]');
	const opacityInput = document.querySelector('input[name="opacity"]');
	const boxElement = document.querySelector(".box");

	// Pobranie wartości z inputów
	const colorValue = colorInput.value;
	const opacityValue = opacityInput.value / 100; // Przeliczenie zakresu na 0-1

	// Ustawienie cienia dla elementu .box
	setBoxShadow(boxElement, colorValue, opacityValue);
}

function setBoxShadow(element, colorInHex, opacity = 1) {
	const colorInRGBA = `rgba(
        ${getChannelColor(colorInHex, "red")}, 
        ${getChannelColor(colorInHex, "green")}, 
        ${getChannelColor(colorInHex, "blue")}, 
        ${opacity}
    )`;

	element.style.boxShadow = `0 0 5px 5px ${colorInRGBA}`;
}

function getChannelColor(colorInHex, channelName) {
	let start;
	switch (channelName) {
		case "red":
			start = 1;
			break;
		case "green":
			start = 3;
			break;
		case "blue":
			start = 5;
			break;
	}

	const channelColorHex = colorInHex.substr(start, 2);
	const channelColorDec = parseInt(channelColorHex, 16);

	return channelColorDec;
}
