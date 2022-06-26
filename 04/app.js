document.addEventListener("DOMContentLoaded", init);

function init() {
	const boxElement = document.querySelector(".box");
	setBoxShadow(boxElement, "#000000");
	const colorElement = document.querySelector("[type='color']");
	const rangeElement = document.querySelector("[type='range']");

	colorElement.addEventListener("change", colorChanger);
	rangeElement.addEventListener("change", opacityChanger);
	rangeElement.addEventListener("mousemove", opacityChanger);
}

function colorChanger(e) {
	const el = document.querySelector(".box");
	const color = e.target.value;
	const opacity = document.querySelector("[type='range']").value;

	setBoxShadow(el, color, opacity);
}

function opacityChanger(e) {
	const el = document.querySelector(".box");
	const color = document.querySelector("[type='color']").value;
	const mouseMove = e.type === "mousemove";
	const mouseLeftButton = e.buttons === 1;
	let opacityValue;

	if ((mouseMove && mouseLeftButton) || !mouseMove) {
		opacityValue = e.target.value / 100;
		setBoxShadow(el, color, opacityValue);
	}
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
